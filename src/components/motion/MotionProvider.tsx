"use client";

import PageLoader from "./PageLoader";
import ScrollRevealInit from "./ScrollRevealInit";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageLoader />
      <ScrollRevealInit />
      {children}
    </>
  );
}
