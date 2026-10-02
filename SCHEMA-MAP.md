# Structured Data Map

All schema uses the canonical host `https://www.thecornerstonepub.com.au`.

## Shared entities

| Entity | Stable ID | Where emitted | Notes |
|---|---|---|---|
| `BarOrPub`, `FoodEstablishment` | `https://www.thecornerstonepub.com.au/#venue` | Once per HTML page from the root layout | Verified name, canonical URL, image, logo, telephone, email, postal address, menu URLs, booking capability, social URLs and opening hours. |
| `WebSite` | `https://www.thecornerstonepub.com.au/#website` | Once per HTML page from the root layout | References `#venue` as publisher and declares `en-AU`. |

Page schema references these IDs instead of redefining the venue.

## Route schema

| Route | Page schema | BreadcrumbList | FAQPage |
|---|---|---|---|
| `/` | `WebPage` | No | No |
| `/venue` | `WebPage`, `FAQPage` | Home → Venue | Yes; matches visible venue FAQs |
| `/food` | `WebPage`, `FAQPage` | Home → Food | Yes; matches visible food FAQs |
| `/drinks` | `WebPage`, `FAQPage` | Home → Drinks | Yes; matches visible drinks FAQs |
| `/events` | `WebPage`, `FAQPage` | Home → Functions | Yes; matches visible functions FAQs |
| `/spaces` | `WebPage` | Home → Function spaces | No |
| `/whatson` | `WebPage`, `FAQPage` | Home → What's On | Yes; matches visible What's On FAQs |
| `/menus` | `WebPage` | Home → Menus | No |
| `/menus/foods` | `WebPage` | Home → Menus → Food menu | No |
| `/menus/drinks` | `WebPage` | Home → Menus → Drinks menu | No |
| `/menus/events_menu` | `WebPage` | Home → Menus → Functions menu | No |
| `/contact` | `WebPage` | Home → Contact | No |
| `/e-gifts` | `WebPage` | Home → E-gifts | No |
| `/privacy-policy` | `WebPage` | Home → Privacy policy | No |

## Deliberate exclusions

- No `Event` entities are emitted because the recurring promotions do not provide complete dated event instances suitable for Event schema.
- No aggregate rating, review, price range, award, amenity or accessibility properties are emitted.
- Redirected routes and 404 responses do not receive page-level schema.

Production-rendered JSON-LD was parsed successfully for every indexable route. Each route contained exactly one `#venue`, one `#website` and one page node.
