import Link from "next/link";

/** Closing invitation shown above the footer on every page except Contact. */
export default function ContactCta() {
  return (
    <section style={{ background: "var(--bg-raised)" }} className="hairline-t">
      <div className="page-x py-20 md:py-28 grid md:grid-cols-12 gap-8 items-end">
        <h2 className="md:col-span-8 t-headline max-w-[18ch]">
          Whether you want to talk about a project, a speaking opportunity, or just connect, I&apos;d
          love to hear from you.
        </h2>
        <div className="md:col-span-4 flex md:justify-end">
          <Link href="/contact" className="btn btn-accent">
            <span>Get in Touch</span>
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
