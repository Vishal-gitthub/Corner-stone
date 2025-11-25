"use client";

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Function to remove badge
    const removeBadge = () => {
      const badge = document.querySelector('a[title="Free Instagram Feed widget"]');
      if (badge) {
        badge.remove();
        console.log("Elfsight badge removed.");
      }
    };

    // Try immediately
    removeBadge();

    // Observe DOM changes in case Elfsight injects badge later
    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    // Backup interval
    const interval = setInterval(removeBadge, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div
        className="elfsight-app-e04e028a-2e9f-4d6f-b24a-6cf6aa3080fd"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default ElfsightWidget;
