import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Responsible for the Sale, Not the Product | Matthew Gann, Ph.D.",
  description:
    "Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse.",
  openGraph: {
    title: "Responsible for the Sale, Not the Product | Matthew Gann, Ph.D.",
    description:
      "Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse.",
    url: "https://matthewgann.com/research/2026/06/responsibility-without-authority",
    type: "article",
  },
};

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <ArticleSchema
        title="Responsible for the Sale, Not the Product"
        description="Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse."
        datePublished="2026-06-10"
        url="https://matthewgann.com/research/2026/06/responsibility-without-authority"
      />
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
        Responsible for the Sale, Not the Product
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          My partner, a therapist, mentioned the other day that a client, a mid-level marketer,
          described their situation as &ldquo;lots of responsibility with little authority.&rdquo; Marketers
          across every industry are held accountable for outcomes they don&apos;t directly control.
          That&apos;s a structural problem. It&apos;s worse in higher education. And in some states,
          it&apos;s at a breaking point.
        </p>

        <p className="leading-relaxed">
          There is a structural tension at the heart of higher education marketing that rarely gets
          named directly. Brand marketing supports the work of admissions and admissions marketing.
          It supports enrollment, including yield, and it owns brand awareness, reputation, and
          demand. What it rarely owns is the product. Program decisions, naming conventions,
          curricular design, pricing, positioning: these belong to academic governance, to deans,
          to provosts, to faculty senates. Marketing gets handed the output and asked to find the
          audience.
        </p>

        <p className="leading-relaxed">
          Faculty should shape curriculum. Deans should steward their schools. The problem is
          that the chain from &ldquo;what should we
          offer&rdquo; to &ldquo;who wants it and why&rdquo; almost never runs in both directions. Marketing gets
          called in after the decision. The program has been named, designed, approved through
          shared governance, and slotted into the catalog. Now fill it.
        </p>

        <p className="leading-relaxed">
          The consequences are predictable. Programs named with disciplinary precision that no
          prospective student would ever search for. Degrees built to satisfy internal stakeholders
          rather than employer or student demand. Institutional positioning that reflects
          self-perception rather than competitive differentiation. The problem, in every case, is
          sequencing. The market question was asked too late, if it was asked at all.
        </p>

        <p className="leading-relaxed">
          There is a related failure hiding inside the same structural problem. Higher education
          institutions spent decades not needing to invest in brand marketing. Reputation traveled
          by word of mouth, through rankings, through proximity, through the sheer stability of
          demand. That world is gone. The demographic cliff is real, public trust in higher
          education has eroded, and prospective students have more options than any prior
          generation. Institutions now want the results of sustained brand investment without
          having made that investment. They want awareness, preference, and differentiation
          delivered on what is functionally an enrollment marketing budget.
        </p>

        <p className="leading-relaxed">
          Enrollment marketing is direct response: funnel-driven, audience-targeted, and
          optimized for conversion. Brand marketing builds
          the conditions under which enrollment marketing works. It shapes how an institution is
          perceived before a student ever enters the funnel, before a family schedules a campus
          visit, before a counselor makes a recommendation. The brand is the foundation.
          Enrollment runs on top of it. What I do is brand marketing. I build that foundation.
          When institutions conflate the two, or treat brand as something that gets funded after
          enrollment targets are met, they are spending against a floor that does not exist yet.
        </p>

        <p className="leading-relaxed">
          And then there&apos;s Florida. And Texas. Whatever structural friction higher education
          marketers face when their own institutions treat programs as internally-governed
          decisions, it at least operates in a world where market signals can, in principle,
          change minds. What&apos;s happening in those states is categorically different. The product
          is being shaped by legislative mandate. What can be taught, what programs can exist,
          what can be said in a public university classroom: these are now political decisions.
          Marketers there aren&apos;t just selling a product they didn&apos;t design. They&apos;re selling a
          product whose parameters are set by people who have made clear they are not interested
          in what students need, what employers want, or what the academic mission requires. The
          talent exodus is real, it&apos;s accelerating, and it&apos;s not subtle. Faculty, researchers,
          and administrators are leaving. The product is getting worse, and the marketer is still
          responsible for the number.
        </p>

        <p className="leading-relaxed">
          But the larger story isn&apos;t about those outliers. It&apos;s about what&apos;s changing everywhere
          else. The most important shift in higher education marketing isn&apos;t a tactic or a
          channel. It&apos;s a repositioning of the function itself. The institutions making meaningful
          progress are the ones that have stopped treating marketing as an output machine and
          started treating it as a strategic thought partner. That means marketing has a voice
          before programs are designed, not just before they launch. It means brand tracking and
          competitive positioning inform academic planning. It means the CMO is in the room when
          market viability gets assessed, not when the brochure needs a headline.
        </p>

        <p className="leading-relaxed">
          My own doctoral research uncovered this. When I examined what presidents actually
          want from their marketing function, the answer was strategic counsel on market position. They want someone who can translate student demand, competitive
          landscape, and brand health into decisions about where to invest and where to pull back.
          They want a thought partner, not someone to make it pretty.
        </p>

        <p className="leading-relaxed">
          The institutions that close the gap between marketing responsibility and marketing
          authority won&apos;t do it by lobbying for a seat at the table. They&apos;ll do it by earning one:
          showing up with data, framing market questions in terms leadership cares about, and
          building the kind of trust that gets marketing included in decisions before they&apos;re made.
          That&apos;s the job now. Not the campaign. The conversation before the campaign becomes
          necessary.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
