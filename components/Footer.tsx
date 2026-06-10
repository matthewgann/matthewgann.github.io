"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full border-t mt-24"
      style={{ borderColor: "var(--border)", background: "var(--background)" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Matthew Gann, Ph.D.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <a
                href="mailto:matthew@matthewgann.com"
                className="text-sm transition-colors duration-150 cursor-pointer"
                style={{ color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/matthewgann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-150 cursor-pointer"
                style={{ color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
