# Redirect Map

| Old URL | Destination | Code | State / reason |
|---|---|---:|---|
| `/club` | `/venue` | 308 (permanent) | Implemented in `next.config.ts`; repairs the stale sitemap URL and consolidates venue intent. |
| `/function-space` | `/spaces` | 308 (permanent) | Implemented; these routes duplicated the same function-space intent. |
| `https://cornerstonepub.com.au/*` | `https://www.thecornerstonepub.com.au/*` | 308 | Implemented in `next.config.ts`; preserve path and query string. |
| `https://www.cornerstonepub.com.au/*` | `https://www.thecornerstonepub.com.au/*` | 308 | Implemented in `next.config.ts`; preserve path and query string. |
| `https://thecornerstonepub.com.au/*` | `https://www.thecornerstonepub.com.au/*` | 308 | Implemented in `next.config.ts`; preserve path and query string. |

`/menus` remains the menu hub. `/spaces` remains the function-space detail page. Neither should redirect to `/events` because each has distinct, useful content.
