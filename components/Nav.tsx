"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/research", label: "Research & Thoughts" },
  { href: "/contact", label: "Get in Touch" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-6 flex flex-col items-center gap-5">
        <Link href="/" aria-label="Matthew Gann home">
          <Image
            src="/mg-logo-black.png"
            alt="MG logo"
            width={80}
            height={80}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 sm:gap-10 list-none m-0 p-0">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer"
                    style={{
                      color: active ? "var(--accent)" : "var(--foreground)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.target as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.target as HTMLElement).style.color = "var(--foreground)";
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
