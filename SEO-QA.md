# SEO regression QA

The repository includes a dependency-free audit that crawls the important public routes listed in the generated sitemap after a production build.

## Before deployment

Using the repository's existing npm package manager, run:

```bash
npm run build
npm run seo:audit
```

`seo:audit` starts the built Next.js production server on an available local port, reads `sitemap.xml`, audits every sitemap page, checks internal links, prints a grouped terminal report and exits with status `1` when an SEO error is found. Warnings, such as an internal link that redirects, are reported without failing the command.

The audit requires an existing `.next` production build. It does not run `next build` itself, which keeps build failures distinct from SEO failures.

## Checks performed

- Missing, multiple or duplicate titles and meta descriptions
- Missing, multiple, wrong-domain or non-self-referencing canonical links
- Missing or multiple H1 elements
- Broken internal links and internal redirect warnings
- Obsolete Cornerstone website-domain links, while ignoring `mailto:` email addresses
- Non-200 indexable sitemap pages
- Redirecting, invalid, duplicate or noncanonical sitemap URLs
- Images missing `alt` attributes
- Invalid JSON-LD syntax
- Accidental meta or HTTP-header `noindex` directives
- Development, localhost and Vercel deployment URLs in canonical metadata or links

## Auditing another environment

Set `SEO_AUDIT_ORIGIN` to audit an already-running preview or deployment while still requiring canonical metadata to use `https://www.thecornerstonepub.com.au`.

PowerShell:

```powershell
$env:SEO_AUDIT_ORIGIN = "https://example-preview-host"
npm run seo:audit
Remove-Item Env:SEO_AUDIT_ORIGIN
```

Preview deployments are expected to fail if they expose preview or Vercel URLs in canonical metadata. The canonical value must remain the primary production domain.

## Interpreting results

- `ERRORS` indicate a deployment-blocking SEO regression and produce a non-zero exit code.
- `WARNINGS` identify cleanup opportunities, currently including crawlable internal links that redirect.
- `PASS` means all sitemap routes and discovered internal targets passed the automated checks.

When adding a new indexable page, give it unique metadata and a single H1, add it to `src/app/sitemap.ts`, and run both commands above before deployment.
