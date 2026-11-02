"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Eases wheel scrolling so the page glides instead of stepping. Touch stays
 * native. Lenis honors prefers-reduced-motion on its own (scroll tracks the
 * input 1:1). Sticky elements and scroll listeners keep working because the
 * window itself still scrolls.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
      // the mobile menu is a fixed overlay; leave its wheel events alone
      prevent: (node) => node.id === "mobile-menu",
    });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
