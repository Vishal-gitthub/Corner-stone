# Final SEO Audit — The Cornerstone Pub

Audit date: 7 October 2026  
Canonical domain: `https://cornerstonepub.com.au`

## Implementation scorecard

| Area | Score | Basis |
|---|---:|---|
| Technical SEO | 95/100 | Production build and route crawl pass; canonical, sitemap, robots, redirects and 404 handling are implemented. |
| On-page SEO | 91/100 | Indexable routes have unique metadata, one H1 and page-specific intent coverage. |
| Local SEO | 92/100 | Shared, visible and structured NAP data are aligned to the verified venue record. |
| GEO/AEO | 88/100 | Clear entity relationships, factual FAQs and page schema are present; external AI-crawler visibility cannot be measured locally. |
| Structured data | 94/100 | One shared venue and WebSite entity, with page and breadcrumb references; no unsupported review, price or Event markup. |
| Performance | 88/100 | Responsive WebP delivery, intrinsic sizing, deferred third-party content and self-hosted fonts are implemented; field data needs live measurement. |
| Content quality | 89/100 | Food, drinks, functions, spaces and What’s On content is specific to verified information; menu and recurring-event facts require owner maintenance. |

## Verified implementation

- `https://cornerstonepub.com.au` is the single source for canonicals, Open Graph URLs, Twitter metadata, JSON-LD IDs and URLs, robots, sitemap URLs and absolute menu URLs.
- `www.cornerstonepub.com.au`, `thecornerstonepub.com.au` and `www.thecornerstonepub.com.au` are configured as path-preserving permanent redirects to the canonical domain. The canonical hostname has no self-redirect rule.
- The generated sitemap contains 14 indexable canonical routes and excludes APIs, redirects, query variants and 404s.
- Generated robots rules allow public content, block `/api/`, and reference the canonical sitemap.
- The shared venue entity uses the verified name, address, phone, email, opening hours, booking URL, menus and verified social URLs. Page schema references the same `#venue` entity instead of creating competing business records.
- All indexable sitemap pages emit a self-referencing absolute canonical, unique title and description, Open Graph/Twitter metadata, exactly one H1 and valid parsed JSON-LD.
- The built-site regression checker crawls the sitemap and internal links, checks duplicate metadata, canonicals, noindex directives, image alt attributes, JSON-LD syntax and accidental development or deployment URLs.

## Routes checked

`/`, `/venue`, `/food`, `/drinks`, `/events`, `/spaces`, `/whatson`, `/menus`, `/menus/foods`, `/menus/drinks`, `/menus/events_menu`, `/contact`, `/e-gifts` and `/privacy-policy`.

## Content and entity implementation

- Homepage, food, drinks, functions, spaces, What’s On and contact pages use contextual links to the relevant commercial pages, menus, booking path and enquiry path.
- Visible FAQs are represented as `FAQPage` only on routes with matching visible FAQ content.
- No dated Event schema is emitted for recurring activities because the repository does not provide reliable individual event dates and times.
- Menu pages remain crawlable with descriptive HTML context while retaining the approved visual menu assets. Item-level menu facts are not invented.
- Image components provide descriptive alternative text, intrinsic dimensions and responsive sizing; only true LCP imagery is prioritised.

## Validation performed

- ESLint: passed.
- Next.js production build: passed.
- SEO regression audit: passed with 14 sitemap routes, zero errors and zero warnings.
- Generated sitemap, canonical metadata and JSON-LD were checked from the local production output.

## Remaining external actions

- Deploy the change, then test alternate hostnames and representative paths at the DNS/CDN layer to confirm each resolves in one hop to `https://cornerstonepub.com.au`.
- Set the preferred domain in Google Search Console, submit `https://cornerstonepub.com.au/sitemap.xml`, and inspect Google-selected canonicals after recrawling.
- Align Google Business Profile, Bing Places, social profiles and directory citations to the same name, address, phone and canonical URL.
- Confirm time-sensitive menus, opening hours, recurring events and function information with the venue owner before publishing changes to those facts.
- Measure Core Web Vitals using deployed field data; local builds cannot establish real-user LCP, INP or CLS.
