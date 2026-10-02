# Technical SEO Audit — The Cornerstone Pub

Audit date: 30 September 2026

Primary domain: `https://www.thecornerstonepub.com.au`

## Outcome

The Next.js production build was crawled locally after implementation. All 14 indexable routes returned HTTP 200, emitted one absolute self-referencing canonical, contained one H1, and provided unique titles and descriptions with page-specific Open Graph and Twitter metadata.

No visual redesign was made. The root layout landmark was corrected from a nested `<main>` to a neutral `<div>` without changing its classes or layout.

## Indexable routes checked

| Route | Canonical URL | HTTP | H1 |
|---|---|---:|---:|
| `/` | `https://www.thecornerstonepub.com.au/` | 200 | 1 |
| `/venue` | `https://www.thecornerstonepub.com.au/venue` | 200 | 1 |
| `/food` | `https://www.thecornerstonepub.com.au/food` | 200 | 1 |
| `/drinks` | `https://www.thecornerstonepub.com.au/drinks` | 200 | 1 |
| `/events` | `https://www.thecornerstonepub.com.au/events` | 200 | 1 |
| `/spaces` | `https://www.thecornerstonepub.com.au/spaces` | 200 | 1 |
| `/whatson` | `https://www.thecornerstonepub.com.au/whatson` | 200 | 1 |
| `/menus` | `https://www.thecornerstonepub.com.au/menus` | 200 | 1 |
| `/menus/foods` | `https://www.thecornerstonepub.com.au/menus/foods` | 200 | 1 |
| `/menus/drinks` | `https://www.thecornerstonepub.com.au/menus/drinks` | 200 | 1 |
| `/menus/events_menu` | `https://www.thecornerstonepub.com.au/menus/events_menu` | 200 | 1 |
| `/contact` | `https://www.thecornerstonepub.com.au/contact` | 200 | 1 |
| `/e-gifts` | `https://www.thecornerstonepub.com.au/e-gifts` | 200 | 1 |
| `/privacy-policy` | `https://www.thecornerstonepub.com.au/privacy-policy` | 200 | 1 |

Production-rendered QA found no duplicate titles and no duplicate meta descriptions across these routes. Each route has page-specific Open Graph title, description and URL values plus Twitter card, title, description and image metadata.

## Canonical domain and duplicate-host handling

- `SITE_URL`, metadata base, canonicals, Open Graph URLs, JSON-LD, robots and sitemap use `https://www.thecornerstonepub.com.au`.
- Email addresses ending in `@cornerstonepub.com.au` were intentionally left unchanged.
- Query-string requests retain a clean canonical without the query string.
- Trailing-slash duplicates redirect to the non-trailing route, except the root URL.
- Vercel deployment hosts receive `X-Robots-Tag: noindex, nofollow`.
- A codebase search found no unintended production web URLs using the old hosts. Old hosts remain only where required as redirect-match sources or audit documentation.

## Redirects

| Source | Destination | Result |
|---|---|---:|
| `/club` | `/venue` | 308 |
| `/function-space` | `/spaces` | 308 |
| `cornerstonepub.com.au/:path*` | `https://www.thecornerstonepub.com.au/:path*` | 308 |
| `www.cornerstonepub.com.au/:path*` | `https://www.thecornerstonepub.com.au/:path*` | 308 |
| `thecornerstonepub.com.au/:path*` | `https://www.thecornerstonepub.com.au/:path*` | 308 |

The host redirects preserve paths and query strings. Live header checks confirmed the three legacy hosts currently redirect to the primary domain. Vercel already enforces HTTPS for connected domains.

## Robots

Generated `/robots.txt`:

- allows public crawling;
- disallows `/api/` endpoints;
- does not block CSS, JavaScript, images or public pages;
- declares the canonical host;
- points to `https://www.thecornerstonepub.com.au/sitemap.xml`.

Indexable routes receive `index, follow` from the shared metadata helper. Invalid routes receive one `noindex` robots directive from Next.js, with no conflicting global robots tag.

## XML sitemap

The generated sitemap contains 14 unique canonical URLs. Every entry returned HTTP 200 during the production crawl. It excludes:

- `/club` and `/function-space` redirects;
- `/api/` endpoints;
- the 404 route;
- alternate and deployment domains;
- query-string variants.

The repository fallback `sitemap.xml` was aligned with the generated App Router sitemap and no longer lists `/club` or omits current public routes.

## Internal links and HTML semantics

- All crawlable internal page, asset, icon and downloadable-menu links discovered in rendered HTML returned HTTP 200.
- No redirect loops or internal redirect chains were found.
- No mixed-content production URLs were found.
- Navigation uses crawlable anchors or Next.js `Link` components.
- Every indexable page has one H1 with a logical supporting heading structure.
- The invalid nested main landmark was removed from the root layout.

## Issues fixed

- Corrected canonical, Open Graph, sitemap and structured-data hosts from non-primary domains to the canonical `www.thecornerstonepub.com.au` host.
- Centralised title, description, canonical, Open Graph, Twitter and robots metadata in `pageMetadata()`.
- Replaced incomplete `/food` and `/drinks` metadata, which previously inherited homepage social metadata.
- Added path-preserving alternate-host redirects and a Vercel-domain indexing safeguard.
- Removed conflicting global robots metadata from real 404 responses.
- Tightened overlong page titles while retaining search intent.
- Repaired and completed the fallback static sitemap.
- Corrected stale domain references in SEO documentation.

## 404 behaviour

An invalid URL returns HTTP 404, includes useful links to the homepage, menus and What's On page, emits one `noindex` directive, and emits no canonical URL.

## Validation completed

- Next.js production build: passed.
- TypeScript checks: passed as part of the build.
- ESLint for `src` and `next.config.ts`: passed.
- Production route crawl: passed for all 14 indexable routes.
- Internal rendered-link crawl: passed.
- Sitemap URL/status validation: passed.
- Duplicate title and description check: passed.
- Canonical count and host validation: passed.
- Redirect, query-string, trailing-slash and 404 checks: passed.

The build emitted only the package's non-blocking `baseline-browser-mapping` freshness warning.

## Remaining manual actions

- Deploy this revision so the corrected metadata and code-level redirect safeguards become live.
- After deployment, verify representative legacy paths—not only each legacy homepage—resolve in one hop to the matching canonical path.
- Submit the canonical sitemap in Google Search Console and inspect Google's selected canonical for the highest-value pages.
- Confirm every custom and preview Vercel domain is covered by the deployment-domain `X-Robots-Tag` rule after deployment.
- Revalidate JSON-LD with Schema.org Validator and Google Rich Results Test after deployment.
- Continue owner verification of time-sensitive events, menus, opening hours and function details listed in `CONTENT-VERIFICATION.md`.
- Update `baseline-browser-mapping` during a future dependency-maintenance pass; it does not block this build.
