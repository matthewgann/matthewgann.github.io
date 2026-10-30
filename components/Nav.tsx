"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WRITING_LABEL, WRITING_PATH } from "@/lib/site";

const links = [
  { href: "/experience", label: "Experience" },
  { href: WRITING_PATH, label: WRITING_LABEL },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="sticky top-0 z-50 w-full hairline-b"
      style={{ background: "var(--bg)", height: "var(--nav-h)" }}
    >
      <div className="page-x h-full flex items-center justify-between gap-6">
        <Link href="/" aria-label="Matthew Gann, home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/mg-logo-black.png"
            alt=""
            width={36}
            height={36}
            priority
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
          <span className="hidden md:inline font-semibold text-[0.9375rem] tracking-[-0.01em]">
            Matthew Gann, Ph.D.
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={`nav-link${isActive(href) ? " nav-link-active" : ""}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`btn${isActive("/contact") ? " btn-accent" : ""}`}
            style={{ fontSize: "0.875rem" }}
          >
            <span>Get in Touch</span>
            <span aria-hidden>↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-grid place-items-center w-10 h-10 border"
          style={{ borderColor: "var(--ink)" }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block w-4 h-3">
            <span
              className="absolute left-0 top-0 w-full h-[1.5px] transition-transform"
              style={{ background: "var(--ink)", transform: open ? "translateY(5.25px) rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 bottom-0 w-full h-[1.5px] transition-transform"
              style={{ background: "var(--ink)", transform: open ? "translateY(-5.25px) rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 bottom-0 z-40 flex flex-col"
          style={{ top: "var(--nav-h)", background: "var(--bg)" }}
        >
          <nav aria-label="Mobile navigation" className="page-x pt-6">
            <ul className="list-none m-0 p-0">
              {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Get in Touch" }].map(
                ({ href, label }) => (
                  <li key={href} className="hairline-b">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-5 no-underline t-card"
                      style={{ color: pathname === href ? "var(--accent)" : "var(--ink)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="page-x mt-auto pb-8 flex flex-col gap-2">
            <span className="kicker" style={{ color: "var(--ink-faint)" }}>
              Get in touch
            </span>
            <a href="mailto:matthew@matthewgann.com" className="no-underline font-medium">
              matthew@matthewgann.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
