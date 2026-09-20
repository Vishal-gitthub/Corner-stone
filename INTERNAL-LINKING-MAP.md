# Internal Linking Map

## Homepage
- Source: /
- Destination: /food
- Anchor: Pub food in Port Melbourne
- Context: Introduce food offering after venue overview.

- Source: /
- Destination: /drinks
- Anchor: Drinks menu
- Context: Support the bar and drinks experience narrative.

- Source: /
- Destination: /events
- Anchor: Function venue
- Context: Link from main experience and event summary content.

- Source: /
- Destination: /whatson
- Anchor: What’s on this week
- Context: Guide local users toward recurring events and entertainment.

## Food page
- Source: /food
- Destination: /menus/foods
- Anchor: Current food menu
- Context: Offer direct menu access.

- Source: /food
- Destination: /contact
- Anchor: Book a table
- Context: Conversion from dining content.

## Drinks page
- Source: /drinks
- Destination: /menus/drinks
- Anchor: Current drinks menu
- Context: Support drinks discovery and menu conversion.

## Events page
- Source: /events
- Destination: /contact
- Anchor: Enquire about a function
- Context: Book or discuss event requirements.

- Source: /events
- Destination: /whatson
- Anchor: See weekly events
- Context: Connect event planning to current entertainment.

## Contact page
- Source: /contact
- Destination: /events
- Anchor: Function enquiries
- Context: Route event leads into booking process.

- Source: /contact
- Destination: /menus
- Anchor: View menus
- Context: Provide menu access before booking.

## Supporting links

- `/events` → `/spaces` — “function spaces” — compare rooms before enquiring.
- `/spaces` → `/contact` — “enquire now” — direct conversion path.
- `/food` → `/menus/foods` — “view food menu” — current menu evidence.
- `/drinks` → `/menus/drinks` — “view drinks menu” — current beverage evidence.
- `/whatson` → OpenTable — “book a table” — convert recurring-event interest.
- Global navigation → `/venue`, `/food`, `/drinks`, `/events`, `/whatson`, `/contact` — crawlable primary architecture.
- Footer → `/privacy-policy`, telephone and email — trust and contact path.

No priority page is orphaned: all acquisition pages are in global navigation; menu child pages are linked from `/menus`; `/spaces` is linked from homepage/function content.

Final implementation: the homepage now directly links to Food, Drinks, Functions, Spaces, What’s On, Menus and Contact; Food and Drinks link to functions where group bookings need a private space; Functions links to Spaces, the functions menu and Food; Spaces links to the enquiry form and functions menu; What’s On links to booking and menus; Contact links to booking and function enquiries.
