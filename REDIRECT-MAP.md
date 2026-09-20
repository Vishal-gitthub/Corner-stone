# Redirect Map

| Old URL | Destination | Code | State / reason |
|---|---|---:|---|
| `/club` | `/venue` | 308 (permanent) | Implemented in `next.config.ts`; repairs the stale sitemap URL and consolidates venue intent. |
| `/function-space` | `/spaces` | 308 (permanent) | Implemented; these routes duplicated the same function-space intent. |
| `https://thecornerstonepub.com.au/*` | `https://cornerstonepub.com.au/*` | 301/308 | Manual host-level action. Preserve each path and query string; do not send every URL to the homepage. |

`/menus` remains the menu hub. `/spaces` remains the function-space detail page. Neither should redirect to `/events` because each has distinct, useful content.
