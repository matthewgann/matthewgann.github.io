import Link from "next/link";
import Image from "next/image";
import { EMAIL, LINKEDIN, WRITING_LABEL, WRITING_PATH } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: WRITING_PATH, label: WRITING_LABEL },
  { href: "/contact", label: "Get in Touch" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "var(--on-dark)" }}>
      <div className="page-x pt-16 pb-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <nav aria-label="Footer navigation">
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="t-card no-underline inline-block py-1 transition-colors hover:text-accent"
                    style={{ color: "var(--on-dark)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-8 content-start">
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
              Social
            </span>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer me"
              className="no-underline font-medium transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
              Get in touch
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="no-underline font-medium transition-colors hover:text-accent [overflow-wrap:anywhere]"
            >
              {EMAIL}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
              Writing
            </span>
            <a
              href="/feed.xml"
              className="no-underline font-medium transition-colors hover:text-accent"
            >
              RSS feed
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
              Based in
            </span>
            <span className="font-medium">Denver, CO &amp; Nashville, TN</span>
          </div>
        </div>
      </div>

      <div
        className="page-x py-5 flex items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--on-dark-line)" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/mg-logo-black.png"
            alt=""
            width={22}
            height={22}
            style={{ filter: "invert(1)", opacity: 0.9 }}
          />
          <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
            Matthew Gann, Ph.D.
          </span>
        </div>
        <span className="kicker" style={{ color: "var(--on-dark-soft)" }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
