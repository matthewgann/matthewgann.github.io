/// <reference types="react/experimental" />
"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

/**
 * Crossfades page content on route changes. Keying the boundary on the path
 * makes the outgoing page exit and the incoming page enter, which the browser
 * animates through the View Transitions API (see .page-out / .page-in in
 * globals.css). Browsers without support swap instantly, as before.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
