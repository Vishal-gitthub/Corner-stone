import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { resolve } from "node:path";

const PRIMARY_ORIGIN = "https://www.thecornerstonepub.com.au";
const PRIMARY_HOST = new URL(PRIMARY_ORIGIN).hostname;
const OBSOLETE_HOSTS = new Set([
  "cornerstonepub.com.au",
  "www.cornerstonepub.com.au",
  "thecornerstonepub.com.au",
]);
const DEVELOPMENT_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
const findings = [];
const pageResults = [];
const responseCache = new Map();
let serverProcess;
let serverOutput = "";

function add(severity, check, route, message) {
  findings.push({ severity, check, route, message });
}

function decodeHtml(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function attributes(tag) {
  const result = {};
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  const body = tag.replace(/^<\/?[\w:-]+\s*|\/?\s*>$/g, "");
  for (const match of body.matchAll(pattern)) {
    result[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => ({
    raw: match[0],
    attrs: attributes(match[0]),
  }));
}

function normaliseText(value = "") {
  return decodeHtml(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function localUrl(url, auditOrigin) {
  const parsed = new URL(url, auditOrigin);
  if (parsed.hostname === PRIMARY_HOST) {
    return new URL(`${parsed.pathname}${parsed.search}`, auditOrigin).toString();
  }
  return parsed.toString();
}

async function fetchCached(url, options = {}) {
  const key = `${options.redirect ?? "follow"}:${url}`;
  if (!responseCache.has(key)) {
    responseCache.set(key, fetch(url, { redirect: options.redirect ?? "follow" }));
  }
  return responseCache.get(key);
}

function inspectUrl(value, route, context) {
  if (!value || value.startsWith("mailto:") || value.startsWith("tel:")) return;
  let parsed;
  try {
    parsed = new URL(value, PRIMARY_ORIGIN);
  } catch {
    return;
  }
  const host = parsed.hostname.toLowerCase();
  if (OBSOLETE_HOSTS.has(host)) {
    add("error", "obsolete-domain", route, `${context} references ${parsed.href}`);
  }
  if (host.endsWith(".vercel.app")) {
    add("error", "vercel-url", route, `${context} exposes ${parsed.href}`);
  }
  if (DEVELOPMENT_HOSTS.has(host) || host.endsWith(".local")) {
    add("error", "development-url", route, `${context} exposes ${parsed.href}`);
  }
}

async function availablePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : null;
      server.close(() => port ? resolvePort(port) : reject(new Error("Could not allocate an audit port.")));
    });
  });
}

async function waitForServer(origin) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (serverProcess?.exitCode !== null) {
      throw new Error(`Production server exited early.\n${serverOutput.trim()}`);
    }
    try {
      const response = await fetch(`${origin}/robots.txt`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
  throw new Error(`Timed out waiting for the production server.\n${serverOutput.trim()}`);
}

async function startProductionServer() {
  if (!existsSync(resolve(".next", "BUILD_ID"))) {
    throw new Error("No production build found. Run `npm run build` before `npm run seo:audit`.");
  }
  const port = await availablePort();
  const origin = `http://127.0.0.1:${port}`;
  serverProcess = spawn(
    process.execPath,
    [resolve("node_modules", "next", "dist", "bin", "next"), "start", "-H", "127.0.0.1", "-p", String(port)],
    { cwd: process.cwd(), env: { ...process.env, NODE_ENV: "production" }, stdio: ["ignore", "pipe", "pipe"], windowsHide: true },
  );
  const capture = (chunk) => { serverOutput = `${serverOutput}${chunk}`.slice(-4000); };
  serverProcess.stdout.on("data", capture);
  serverProcess.stderr.on("data", capture);
  await waitForServer(origin);
  return origin;
}

async function stopProductionServer() {
  if (!serverProcess || serverProcess.exitCode !== null) return;
  serverProcess.kill();
  await Promise.race([
    new Promise((resolveClose) => serverProcess.once("exit", resolveClose)),
    new Promise((resolveClose) => setTimeout(resolveClose, 2000)),
  ]);
}

async function inspectPage(route, canonicalUrl, auditOrigin) {
  const requestUrl = localUrl(canonicalUrl, auditOrigin);
  const response = await fetchCached(requestUrl, { redirect: "manual" });
  if (response.status !== 200) {
    add("error", "indexable-status", route, `Expected HTTP 200 but received ${response.status}.`);
    return;
  }
  const html = await response.text();
  const titleMatches = [...html.matchAll(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/gi)];
  const title = normaliseText(titleMatches[0]?.[1]);
  if (!title) add("error", "missing-title", route, "No document title was found.");
  if (titleMatches.length > 1) add("error", "multiple-title", route, `Found ${titleMatches.length} title elements.`);

  const meta = tags(html, "meta");
  const descriptions = meta.filter(({ attrs }) => attrs.name?.toLowerCase() === "description");
  const description = normaliseText(descriptions[0]?.attrs.content);
  if (!description) add("error", "missing-description", route, "No meta description was found.");
  if (descriptions.length > 1) add("error", "multiple-description", route, `Found ${descriptions.length} meta descriptions.`);

  const canonicals = tags(html, "link").filter(({ attrs }) => attrs.rel?.toLowerCase().split(/\s+/).includes("canonical"));
  if (!canonicals.length) add("error", "missing-canonical", route, "No canonical link was found.");
  if (canonicals.length > 1) add("error", "multiple-canonical", route, `Found ${canonicals.length} canonical links.`);
  for (const canonical of canonicals) {
    let parsed;
    try { parsed = new URL(canonical.attrs.href); } catch {
      add("error", "invalid-canonical", route, `Canonical is not an absolute URL: ${canonical.attrs.href || "(empty)"}`);
      continue;
    }
    if (parsed.protocol !== "https:" || parsed.hostname !== PRIMARY_HOST) {
      add("error", "wrong-domain-canonical", route, `Canonical must use ${PRIMARY_ORIGIN}: ${parsed.href}`);
    }
    if (parsed.href !== canonicalUrl) {
      add("error", "non-self-canonical", route, `Expected ${canonicalUrl} but found ${parsed.href}`);
    }
    inspectUrl(parsed.href, route, "Canonical metadata");
  }

  const h1Count = tags(html, "h1").length;
  if (h1Count === 0) add("error", "missing-h1", route, "No H1 was found.");
  if (h1Count > 1) add("error", "multiple-h1", route, `Found ${h1Count} H1 elements.`);

  for (const image of tags(html, "img")) {
    if (!("alt" in image.attrs)) {
      add("error", "missing-image-alt", route, `Image is missing an alt attribute: ${image.attrs.src || "(unknown source)"}`);
    }
  }

  const robots = meta.filter(({ attrs }) => ["robots", "googlebot"].includes(attrs.name?.toLowerCase()));
  if (robots.some(({ attrs }) => /(?:^|,)\s*noindex\b/i.test(attrs.content ?? ""))) {
    add("error", "accidental-noindex", route, "Indexable sitemap page contains a noindex directive.");
  }
  if (/\bnoindex\b/i.test(response.headers.get("x-robots-tag") ?? "")) {
    add("error", "accidental-noindex", route, "Indexable sitemap page returns an X-Robots-Tag noindex directive.");
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(decodeHtml(match[1]).trim()); } catch (error) {
      add("error", "invalid-json-ld", route, `JSON-LD could not be parsed: ${error.message}`);
    }
  }

  const metadataUrls = [
    ...canonicals.map(({ attrs }) => attrs.href),
    ...meta.filter(({ attrs }) => ["og:url", "twitter:url"].includes(attrs.property?.toLowerCase()) || ["og:url", "twitter:url"].includes(attrs.name?.toLowerCase())).map(({ attrs }) => attrs.content),
  ];
  for (const value of metadataUrls) inspectUrl(value, route, "Canonical metadata");

  const anchors = tags(html, "a");
  for (const anchor of anchors) inspectUrl(anchor.attrs.href, route, "Link");

  pageResults.push({ route, title, description, anchors });
}

async function inspectInternalLinks(auditOrigin) {
  const links = new Map();
  for (const page of pageResults) {
    for (const { attrs } of page.anchors) {
      const href = attrs.href;
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) continue;
      let parsed;
      try { parsed = new URL(href, new URL(page.route, PRIMARY_ORIGIN)); } catch { continue; }
      if (parsed.hostname !== PRIMARY_HOST) continue;
      parsed.hash = "";
      const target = `${parsed.pathname}${parsed.search}`;
      if (!links.has(target)) links.set(target, new Set());
      links.get(target).add(page.route);
    }
  }
  for (const [target, sources] of links) {
    const response = await fetchCached(new URL(target, auditOrigin).toString(), { redirect: "manual" });
    const sourceList = [...sources].join(", ");
    if (response.status >= 400 || response.status === 0) {
      add("error", "broken-internal-link", sourceList, `${target} returned HTTP ${response.status}.`);
    } else if (response.status >= 300) {
      add("warning", "internal-redirect", sourceList, `${target} redirects with HTTP ${response.status}.`);
    }
  }
}

function reportDuplicates(field) {
  const groups = new Map();
  for (const page of pageResults) {
    const value = page[field]?.toLowerCase().trim();
    if (!value) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(page.route);
  }
  for (const routes of groups.values()) {
    if (routes.length > 1) add("error", `duplicate-${field}`, routes.join(", "), `The same ${field.replace("description", "meta description")} is used on ${routes.length} pages.`);
  }
}

async function run() {
  const externalOrigin = process.env.SEO_AUDIT_ORIGIN?.replace(/\/$/, "");
  const auditOrigin = externalOrigin || await startProductionServer();
  console.log(`\nSEO regression audit\nTarget: ${auditOrigin}\nCanonical domain: ${PRIMARY_ORIGIN}\n`);

  const sitemapResponse = await fetch(`${auditOrigin}/sitemap.xml`, { redirect: "manual" });
  if (sitemapResponse.status !== 200) throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}.`);
  const sitemapXml = await sitemapResponse.text();
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) => decodeHtml(match[1].trim()));
  if (!sitemapUrls.length) throw new Error("No URLs were found in sitemap.xml.");

  const uniqueSitemapUrls = new Set();
  for (const value of sitemapUrls) {
    let parsed;
    try { parsed = new URL(value); } catch {
      add("error", "invalid-sitemap-url", "/sitemap.xml", value);
      continue;
    }
    if (parsed.protocol !== "https:" || parsed.hostname !== PRIMARY_HOST || parsed.search || parsed.hash) {
      add("error", "noncanonical-sitemap-url", "/sitemap.xml", value);
    }
    if (uniqueSitemapUrls.has(parsed.href)) add("error", "duplicate-sitemap-url", "/sitemap.xml", parsed.href);
    uniqueSitemapUrls.add(parsed.href);
    inspectUrl(parsed.href, "/sitemap.xml", "Sitemap");
    const localResponse = await fetchCached(localUrl(parsed.href, auditOrigin), { redirect: "manual" });
    if (localResponse.status >= 300 && localResponse.status < 400) {
      add("error", "sitemap-redirect", parsed.pathname, `Sitemap URL redirects with HTTP ${localResponse.status}.`);
    } else if (localResponse.status !== 200) {
      add("error", "sitemap-status", parsed.pathname, `Sitemap URL returned HTTP ${localResponse.status}.`);
    }
    await inspectPage(parsed.pathname, parsed.href, auditOrigin);
  }

  reportDuplicates("title");
  reportDuplicates("description");
  await inspectInternalLinks(auditOrigin);

  const errors = findings.filter(({ severity }) => severity === "error");
  const warnings = findings.filter(({ severity }) => severity === "warning");
  console.log(`Routes checked: ${pageResults.length}`);
  console.log(`Internal targets checked: ${new Set(pageResults.flatMap(({ anchors }) => anchors.map(({ attrs }) => attrs.href))).size}`);
  console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}\n`);

  if (!findings.length) {
    console.log("PASS  No SEO regressions found.\n");
    return;
  }
  for (const severity of ["error", "warning"]) {
    const selected = findings.filter((finding) => finding.severity === severity);
    if (!selected.length) continue;
    console.log(`${severity.toUpperCase()}S`);
    for (const finding of selected) console.log(`  ${severity === "error" ? "✖" : "!"} [${finding.check}] ${finding.route}: ${finding.message}`);
    console.log("");
  }
  if (errors.length) process.exitCode = 1;
}

try {
  await run();
} catch (error) {
  console.error(`SEO audit could not run: ${error.message}`);
  process.exitCode = 1;
} finally {
  await stopProductionServer();
}
