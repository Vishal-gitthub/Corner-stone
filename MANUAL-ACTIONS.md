# Manual Actions Required

## CRITICAL
- Verify and update the Google Business Profile for The Cornerstone Pub with the exact NAP: The Cornerstone Pub, 1 Crockford Street, Port Melbourne VIC 3207, Australia, phone and website.
- Confirm that the primary business categories match the real offerings: pub, restaurant, event venue, function room.
- Review and verify the current opening hours, holiday hours and booking links inside Google Business Profile.
- Submit the updated XML sitemap to Google Search Console after deployment and request indexing for the highest-value pages.
- Confirm the canonical domain is correct and that legacy-domain redirects are configured at the DNS/server level.
- Test both `http` and `https`, `www` and non-`www`, and representative paths on `thecornerstonepub.com.au`. Configure a single-hop, path-preserving 301/308 to `https://cornerstonepub.com.au`; then inspect the old function-pack PDF URL separately.
- Confirm the live deployment has `EMAIL_USER` and `EMAIL_PASS` configured, then submit both the contact and function forms and verify delivery, sender alignment and spam placement.

## HIGH
- Verify the contact email, phone, menu URL, and location links in Bing Places and Bing Webmaster Tools.
- Check Search Console for index coverage issues, duplicate content warnings and page indexing problems.
- Confirm the current menu pages, event pages and function details reflect the most recent offerings before using them as source material for public SEO copy.
- Audit the live site for old or stale event promotions and archive or remove expired pages when they no longer reflect active operations.
- Owner-verify every fact in `CONTENT-VERIFICATION.md`, especially weekly schedules, menu versions, room naming/capacities, kitchen hours, accessibility, parking and transport.
- In Search Console, inspect `/`, `/food`, `/drinks`, `/events`, `/spaces`, `/whatson` and `/contact`; confirm selected canonicals match the declared self-canonicals.
- Add GA4/GTM only after identifying the existing production container. Track OpenTable clicks, function and contact submissions, `tel:` clicks, email clicks, directions clicks, and menu/PDF views without duplicating page-view tags.

## MEDIUM
- Review business directory listings and remove or correct inconsistent local citations using the consistent name and address.
- Check local SEO directories for references to South Melbourne or other nearby suburb names that are not the primary business location if they are not intentionally used.
- Update relevant social profiles with the same business name and address to improve entity consistency.
- Ask the developer or menu owner to maintain one dated canonical food, drinks and function PDF each. Redirect retired PDF URLs where there is a clear replacement; do not leave old prices indexable indefinitely.
- Add verified kitchen hours, public transport, parking and accessibility details to `/contact` after owner confirmation.
- Validate the deployed JSON-LD with Schema.org Validator and Google Rich Results Test, noting that LocalBusiness does not guarantee a rich result.

## OPTIONAL
- Consider adding a Google Maps review request flow once the venue has a steady stream of genuine customer feedback.
- Add fresh updates on the Google Business Profile or website when there are recurring events, special offers or seasonal menu changes.
- Monitor Bing AI and local search performance over time to identify which questions and intents are surfacing the brand.
