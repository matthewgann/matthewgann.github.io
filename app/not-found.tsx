import Link from "next/link";
import ContactCta from "@/components/ContactCta";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
    <section className="page-x py-24 md:py-36 grid md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-8">
        <h1 className="t-display">That page isn&apos;t here.</h1>
      </div>
      <div className="md:col-span-4 flex flex-col gap-4 items-start">
        <p className="t-lead m-0">The link may be old, or the page may have moved.</p>
        <Link href="/" className="btn btn-accent">
          <span>Back to home</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
    <ContactCta />
    </>
  );
}
