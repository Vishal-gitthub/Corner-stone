# Schema Map

| Page(s) | Schema emitted | Entity ID | Important properties |
|---|---|---|---|
| All HTML pages | `Restaurant` | `https://cornerstonepub.com.au/#venue` | Name, URL, logo/image, NAP, Australian cuisine, reservations, menu, verified opening hours and official profiles. |
| `/`, `/venue`, `/food`, `/drinks`, `/events`, `/spaces`, `/whatson`, `/menus/*`, `/contact` | No additional page schema yet | Reuses `#venue` | Avoids duplicate or conflicting business nodes. |
| `/menus/foods`, `/menus/drinks`, `/menus/events_menu` | `BreadcrumbList` | Page-local breadcrumb list | Home → Menus → current menu type; matches the visible breadcrumb. |

Event schema is intentionally not emitted for recurring promotions without a dated event instance, end date and confirmed status. FAQ schema is intentionally not emitted; visible FAQs are for users and answer extraction. No rating, review, price, capacity or accessibility property is added unless supported by visible, confirmed content.
