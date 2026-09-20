# SEO Audit – The Cornerstone Pub

## Summary
This audit focused on the existing Next.js site and the live business signals already present in the repository. The main issues were inconsistent local business details, limited SEO page architecture, weak entity consistency, and missing page-level intent coverage for pub dining and drinks.

## Original issues found

### High severity
- The global metadata used a generic local-business description and a mismatched address in JSON-LD (`123 Port Melbourne St`), which does not match the visible business address.
- The site had no dedicated landing pages for the core intent clusters `pub food Port Melbourne` and `drinks Port Melbourne` despite those being important business offerings.
- The navigation did not reflect the real service structure clearly enough for search engines and users.
- Several pages were highly visual but weak in crawlable content and page-level SEO intent.

### Medium severity
- Some route naming and structure were inconsistent with key search intents (`/venue`, `/spaces`, `/whatson`, `/menus` without a clearer hierarchy).
- The homepage was strong visually but remained generic and could better anchor the local business entity and intent signals.
- Menu pages were image-first instead of content-first and did not provide strong text-based context for indexing.
- Local HTML structure could be clearer in contact details and conversion areas.

### Low severity
- Some metadata used placeholder values and unverified social references.
- Structured data was limited and not aligned to all business offerings.
- The XML sitemap was outdated and did not reflect the real page architecture.

## Fixes implemented
- Corrected the canonical global business metadata and local entity wording around Port Melbourne.
- Updated business details in the shared layout to match the visible address and contact information.
- Added landing pages for food and drinks search intent.
- Improved internal navigation to surface `Food`, `Drinks`, `Functions` and `What’s On` more clearly.
- Added clearer page titles, descriptions and canonical URLs to the key pages.
- Updated the sitemap to include the relevant public pages and refreshed the structure.

## Remaining concerns
- Exact menu pricing, function capacities and special event schedules should be checked and updated by the business owner before being used as definitive SEO copy.
- Social handles and profile URLs should be confirmed before strong sameAs claims are added.
- Manual Google Business Profile and Search Console work is still required to complete the local SEO foundation.

## Additional technical findings and implemented fixes

| Severity | Original issue | Affected URLs | Resolution |
|---|---|---|---|
| Critical | Contact form had no submit handler. | `/contact` | Connected it to the existing enquiry API, added state feedback and retained phone/email fallbacks. |
| High | Root canonical inherited `/` on every route. | All routes | Removed the global canonical and added self-referencing canonicals per route. |
| High | Client pages had no route metadata. | `/venue`, `/events`, `/spaces`, `/whatson`, `/menus/*`, `/contact`, `/e-gifts`, `/privacy-policy` | Added server layouts with unique titles, descriptions, canonicals and social metadata. |
| High | Static sitemap included nonexistent `/club` and omitted live pages. | `/sitemap.xml` | Replaced it operationally with `app/sitemap.ts`, covering every indexable public route. |
| High | Duplicate function-space URLs could split equity. | `/function-space`, `/spaces` | Permanent redirect to `/spaces`; `/club` permanently redirects to `/venue`. |
| Medium | Schema had no stable ID and mixed redundant types. | Sitewide | Consolidated to one `Restaurant` entity at `/#venue` with verified NAP/hours and escaped JSON-LD. |
| Medium | Contact details were not actionable and opening hours were absent on contact. | `/contact`, footer | Added `tel:`/`mailto:` links and machine-readable visible hours. |
| Medium | A food-menu download pointed to a nonexistent asset path. | `/menus/foods` | Corrected the PDF URL. |
| Medium | Homepage called the Port Melbourne business a South Melbourne destination. | `/` | Corrected entity/location copy without blanket suburb replacement. |
| Medium | Contact API interpolated raw input into HTML email. | `/api/enquiry` | Added required-field validation and HTML escaping. |
| Low | Missing intentional 404 experience. | Unknown URLs | Added a useful branded 404 with navigation to core tasks. |

## Crawl/content concerns retained for owner review

- Menu pages remain image/PDF-led. `/food` and `/drinks` provide crawlable category context, but item-level HTML should be produced from a confirmed menu source.
- Native `<img>` remains in interactive galleries and menu viewers. Many major images already use `next/image`; complete conversion should follow visual regression testing.
- Weekly-event and function-package facts are time-sensitive. They are listed in `CONTENT-VERIFICATION.md` and should not receive Event schema until dated instances are maintained.
- No analytics identifiers were present, so no tracking vendor was invented or injected.

## Final quality and content pass

- Rebuilt `/events` into the primary function-enquiry page with visible, published capacities; clear private-event, group-dining, venue-hire and functions-menu paths; unique FAQs; and one working enquiry CTA. Removed the default-open event-menu overlay that blocked the page.
- Rebuilt `/spaces` as a complementary room-comparison page rather than a duplicate function landing page. Unverified AV, styling, minimum-spend and accessibility claims were removed.
- Rebuilt `/whatson` as an HTML weekly-events hub. The stale Mother’s Day promotion and contradictory “open six days” message were removed. Current schedules are labelled as subject to confirmation.
- Added immediate homepage entity/location copy and contextual links to food, drinks, functions, spaces, events, menus and contact.
- Added nested-menu breadcrumbs with `BreadcrumbList` markup, menu-page H1s, responsive menu images and PDF paths.
- Added conversion links to Food, Drinks and Contact; improved form status feedback and phone/email actions.
- Added `FINAL-BROWSER-CHECK.md` because the local browser-automation executable is unavailable.
