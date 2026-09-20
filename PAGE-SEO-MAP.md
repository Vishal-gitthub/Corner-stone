# Page SEO Map

## /
- SEO title: The Cornerstone Pub | Port Melbourne Pub, Dining, Drinks & Events
- Meta description: The Cornerstone Pub is a Port Melbourne pub and dining venue serving lunch, dinner, drinks, live entertainment and private function spaces in the heart of Port Melbourne.
- H1: The Cornerstone Pub
- Major H2s: Welcome to The Cornerstone Pub & Social; Outdoor Space; Our Food; Functions & Events; What’s On
- Canonical: /
- Schema type: Restaurant, LocalBusiness
- Internal links: Venue, Food, Drinks, Functions, What’s On, Contact
- CTA: Book a Table

## /food
- SEO title: Pub Food in Port Melbourne | The Cornerstone Pub
- Meta description: Discover pub dining at The Cornerstone in Port Melbourne, with lunch, dinner, group dining and seasonal menu options designed for relaxed meals and gatherings.
- H1: Pub Food in Port Melbourne
- Major H2s: Lunch; Dinner; Group Dining; Seasonal pub dining with a local feel; Frequently asked questions
- Canonical: /food
- Schema type: Restaurant
- Internal links: Menus, Contact, Drinks, Events
- CTA: Book a table / View food menu

## /drinks
- SEO title: Drinks in Port Melbourne | The Cornerstone Pub
- Meta description: Explore the drinks offering at The Cornerstone Pub in Port Melbourne, including beer, wine, cocktails and relaxed bar service for lunch, dinner and events.
- H1: Drinks in Port Melbourne
- Major H2s: Beer; Wine; Cocktails; Non-alcoholic; A casual pub bar for lunch, dinner and good company; Frequently asked questions
- Canonical: /drinks
- Schema type: Restaurant
- Internal links: Food, What’s On, Menus, Contact
- CTA: View drinks menu / Book a table

## /events
- SEO title: Function Venue Port Melbourne | The Cornerstone Pub
- Meta description: Host private gatherings, birthdays, engagements and corporate events at The Cornerstone Pub in Port Melbourne.
- H1: Functions & Events
- Major H2s: Melbourne’s versatile function venue for every celebration; Enquiries
- Canonical: /events
- Schema type: Event / LocalBusiness
- Internal links: What’s On, Contact, Venue, Menu
- CTA: Enquire now

## /whatson
- SEO title: What’s On in Port Melbourne | The Cornerstone Pub
- Meta description: Discover the latest events, weekly entertainment and social experiences at The Cornerstone Pub in Port Melbourne.
- H1: What’s On
- Major H2s: Weekly events; Happy hours; Trivia; Social experiences
- Canonical: /whatson
- Schema type: Event
- Internal links: Food, Drinks, Events, Contact
- CTA: See all Events

## /contact
- SEO title: Contact The Cornerstone Pub | Port Melbourne
- Meta description: Find the address, phone number and booking details for The Cornerstone Pub in Port Melbourne.
- H1: Contact
- Major H2s: Phone; Email; Address; Enquiry
- Canonical: /contact
- Schema type: ContactPage / LocalBusiness
- Internal links: Book a table, View menus, Venue
- CTA: Submit Enquiry

## Remaining public pages

| URL | SEO title / H1 | Description focus | Canonical | Schema | Key internal links / CTA |
|---|---|---|---|---|---|
| `/venue` | Our Venue / existing venue H1 | Dining, bar, outdoor and function areas | `/venue` | Global Restaurant | Spaces, menus, booking |
| `/spaces` | Function Rooms & Private Dining / Our Spaces | Room comparison | `/spaces` | Global Restaurant | Events, contact / Enquire |
| `/menus` | Food, Drinks & Function Menus / Menus | Menu hub | `/menus` | Global Restaurant | Three child menus |
| `/menus/foods` | Food Menu / visual menu | Current food menu | `/menus/foods` | Global Restaurant | PDF download, `/food` via nav |
| `/menus/drinks` | Drinks Menu / visual menu | Current beverage menu | `/menus/drinks` | Global Restaurant | PDF download, `/drinks` via nav |
| `/menus/events_menu` | Functions & Events Menu / visual menu | Function catering menu | `/menus/events_menu` | Global Restaurant | PDF download, `/events` via nav |
| `/e-gifts` | Cornerstone Pub E-Gifts / e-gift heading | Branded gift purchase | `/e-gifts` | Global Restaurant | Gift purchase |
| `/privacy-policy` | Privacy Policy / Privacy Policy | Legal information | `/privacy-policy` | Global Restaurant | Contact details |

Open Graph and Twitter metadata inherit the matching page title, description, canonical URL and representative image. `/club` and `/function-space` are redirects and must not appear in the sitemap.

Final implementation note: nested menu routes now include visible breadcrumbs, `BreadcrumbList` JSON-LD and one page H1. `/events` has one H1, capacity cards, functions FAQs and an H2 function-enquiry form; `/spaces` has one H1 and room-comparison content; `/whatson` has one H1, weekly-event cards and unique FAQs.
