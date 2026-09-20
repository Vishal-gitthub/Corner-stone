/**
 * Swiper publishes CSS entry points through package exports, but does not ship
 * TypeScript declarations for those side-effect imports. Next.js handles them
 * at build time; these declarations keep the editor's TypeScript server in
 * sync with that runtime behaviour.
 */
declare module "swiper/css";
declare module "swiper/css/*";
