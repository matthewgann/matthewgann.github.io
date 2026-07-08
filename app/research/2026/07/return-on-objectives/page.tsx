import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Real ROO | Matthew Gann, Ph.D.",
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
          July 2026
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Higher Education
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        The Real ROO
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A few weeks ago I moderated a conversation at the CASE Annual Conference for Marketing and
          Branding with two leaders from the Denver Broncos: Hailey Sullivan, their CMO, and Sandy
          Young, their VP of Partnership Marketing. I walked off the stage with a page full of
          takeaways. One keeps coming back to me: return on objectives. ROO. As a native Tennessean,
          my brain went straight to Bonnaroo, but stay with me.
        </p>

        <p className="leading-relaxed">
          ROI tells you the money came back. ROO asks whether you did what you set out to do. In
          higher education marketing, the gap between those two questions is where most strategy
          breaks down.
        </p>

        <p className="leading-relaxed">
          Efficient spend aimed at the wrong objective is still the wrong spend. ROI is a financial
          efficiency metric. It tells you the ratio of return to investment, which is useful. What it
          cannot tell you is whether the thing you invested in was worth doing. You can run a highly
          efficient digital campaign targeting student profiles that don&apos;t fit your institution,
          hit a great cost per lead, and miss enrollment by a significant margin. The money came back
          on the metric. The objective wasn&apos;t served.
        </p>

        <p className="leading-relaxed">
          ROO reframes the question. Before the campaign, before the budget, before the media plan,
          it forces you to name what you are actually trying to accomplish. Not the metric you will
          report. The objective you will be held to. When those are the same thing, everything
          downstream gets cleaner.
        </p>

        <p className="leading-relaxed">
          In higher education, this matters more than most sectors acknowledge. Higher ed marketing
          carries a stack of objectives that don&apos;t reduce to revenue or even to applications:
          brand awareness in target markets, reputation among high school counselors and employers,
          research visibility, alumni engagement, faculty recruitment, community trust. These are
          real marketing goals. They require real investment. Almost none of them show up cleanly in
          a traditional ROI calculation.
        </p>

        <p className="leading-relaxed">
          And they are not self-sustaining. Pull the energy, effort, and budget and they
          don&apos;t hold their value. They erode. Counselor relationships go cold. Brand awareness
          fades in markets where you&apos;ve gone quiet. Community trust, once lost, takes years to
          rebuild. Assets you built over a decade can soften in a cycle or two. That is the risk ROI
          accounting never captures.
        </p>

        <p className="leading-relaxed">
          So institutions measure what&apos;s easy: cost per click, cost per lead, application
          volume, web traffic. They optimize against those numbers, which is how you end up with
          efficient spend on the wrong outcome. The metrics look fine. The objectives were never
          served.
        </p>

        <p className="leading-relaxed">
          Brand is where this argument is sharpest. Brand is not a campaign. It is a 5, 10,
          sometimes 20-year investment in how an institution is perceived before a prospective
          student ever enters a funnel, before an employer recommends it to a new hire, before a
          donor decides where their philanthropic dollars should go. The return does not come back in
          the same budget cycle. It compounds over years.
        </p>

        <p className="leading-relaxed">
          Demand ROI from brand spend and you will always cut it. The return isn&apos;t there yet.
          The awareness hasn&apos;t converted to applications this quarter. The perception shift is
          showing up in tracking data but not in the enrollment report. By ROI logic, brand looks
          like a cost. It is not a cost. It is the foundation that everything else runs on. Cut it
          and you don&apos;t save money. You borrow against future performance and pay it back at a
          higher rate.
        </p>

        <p className="leading-relaxed">
          ROO is the only framework that makes brand investment defensible. Define the objectives:
          unaided awareness among target high school juniors increases by X points in 18 months.
          Brand preference over key competitors improves in three years. Counselor recommendation
          rates move meaningfully in two cycles. Set those objectives explicitly. Track against them.
          Show progress. Tracking against explicit objectives isn&apos;t soft measurement. It is the
          only rigorous way to evaluate long-cycle investment.
        </p>

        <p className="leading-relaxed">
          This is also where planning gets real. Goals supported by clear objectives. Every objective
          cross-referenced to the goal it serves. Every tactic traceable to an objective. When your
          plan is wired that way, budget conversations stop being defensive and start being
          informational: this investment serves this objective, which serves this goal, and here is
          where we are against it. Cuts become legible too. You can name exactly what you are giving
          up rather than absorbing the loss and hoping no one asks.
        </p>

        <p className="leading-relaxed">
          The Denver Broncos don&apos;t measure the success of their brand work by whether they
          recouped ad spend. They measure whether they built what they were trying to build: fan
          affinity, community connection, partner value, a brand that makes the stadium worth the
          ticket price before anyone shows up. The objectives come first. The metrics serve them.
        </p>

        <p className="leading-relaxed">
          ROI will always be part of the conversation. It should be. But ROI without ROO is a report
          on efficiency, not effectiveness. In a sector facing the pressures higher education is
          facing right now, efficiency in service of the wrong objective is not a strategy. Know what
          you are trying to do. Then measure that.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
