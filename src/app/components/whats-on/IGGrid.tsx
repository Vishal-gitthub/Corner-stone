"use client";

import { useEffect, useRef } from "react";

const ElfsightWidget = () => {
  const widgetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    let script: HTMLScriptElement | null = null;
    let badgeObserver: MutationObserver | null = null;

    const loadWidget = () => {
      if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;

      script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);

      badgeObserver = new MutationObserver(() => {
        const badge = document.querySelector('a[title="Free Instagram Feed widget"]');
        if (badge) {
          badge.remove();
          badgeObserver?.disconnect();
        }
      });
      badgeObserver.observe(widget, { childList: true, subtree: true });
    };

    const viewportObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadWidget();
          viewportObserver.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    viewportObserver.observe(widget);

    return () => {
      viewportObserver.disconnect();
      badgeObserver?.disconnect();
      if (script?.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section ref={widgetRef} aria-label="The Cornerstone Pub social updates">
      <div
        className="elfsight-app-a99dd180-9f87-4f15-a30c-9804d3a585e0"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default ElfsightWidget;
