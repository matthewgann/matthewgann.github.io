import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Higher Ed Website Is Dead. We Just Haven't Buried It Yet. | Matthew Gann, Ph.D.",
};

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/research"
        className="text-sm font-medium mb-10 inline-block transition-colors duration-150"
        style={{ color: "var(--text-muted)", textDecoration: "none" }}
      >
        ← Research &amp; Thoughts
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-4 mt-6">
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          June 2026
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Higher Education
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        The Higher Ed Website Is Dead. We Just Haven&apos;t Buried It Yet.
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Higher education websites are still built like org charts with a search bar. What comes
          next looks nothing like that.
        </p>

        <p className="leading-relaxed">
          The higher education website as we know it was built by colleges and departments that
          wanted to own their piece of the pie. Every school, every
          office, every program needed a home, a voice, and a place to put their content. The
          result is what most institutions still have today: a five-hundred-page information
          repository organized around internal structure rather than student intent, that asks
          prospective students to translate how the institution is organized into answers about
          their own lives. It has never really worked. The exceptions are the handful of legacy
          brands where admission rates are in the single digits. When demand exceeds supply by
          that margin, your website does not need to work very hard. For everyone else, it is a
          liability dressed up as a digital presence.
        </p>

        <p className="leading-relaxed">
          What replaces it is a personalized, context-aware experience that knows something about
          you before you arrive and delivers relevance on first contact. The data infrastructure
          to make it real already exists at most institutions. CRM systems hold behavioral signals, campaign history, and
          demographic context. Intent data tells us what someone searched before they clicked.
          Application and inquiry data tells us where someone is in their journey. The pieces are
          there. What most institutions have not done is connect them to the front door.
        </p>

        <p className="leading-relaxed">
          Imagine arriving at a university website not as an anonymous visitor, but as someone the
          institution already knows a little. You searched &ldquo;nursing programs Denver.&rdquo; You clicked
          an Instagram ad about clinical rotations. You have been to the financial aid page twice.
          The website that greets you does not show you what everyone sees. It shows you what you
          came to find, framed around how a nursing degree fits your life, with financial aid
          information front and center because that is clearly where your head is. Personalization
          done right is just basic respect for a person&apos;s time.
        </p>

        <p className="leading-relaxed">
          The second shift is even bigger. Navigation exists as a workaround for a problem that AI
          makes obsolete. Forty subpages under Financial Aid exist because no one could anticipate
          every question, so institutions documented every answer and hoped users would find them.
          What happens when a student can just ask? Not a search box that returns a list of pages,
          but a real conversational interface that says: tell me what you need to know, and I will
          tell you, in plain language, whether this institution is the right fit and what it will
          actually cost you. Love it or hate it, that is where this is going. The institutions
          building for that future now will not be waiting for the moment to arrive. They will
          already own it.
        </p>

        <p className="leading-relaxed">
          Higher education marketing never gets to rest. That is one of the things I genuinely
          love about it. The channel that worked three years ago is table stakes today. The website
          that won awards in 2019 is an anchor in 2026. The schools still proud of what they
          launched during COVID are competing against schools rebuilding for a world where the
          website is the first intelligent conversation a student has with your institution, not a
          brochure or a directory or a tour guide. You either show up ready
          to have that conversation or you do not show up at all.
        </p>

        <p className="leading-relaxed">
          The institutions that get there first will not just convert better. They will build trust
          faster, answer objections earlier, and show prospective students something most schools
          never manage: that they actually understand what students are going through when they are
          trying to choose a college. Will is the actual constraint. The technology is ready.
          The question is whether the institution is.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
