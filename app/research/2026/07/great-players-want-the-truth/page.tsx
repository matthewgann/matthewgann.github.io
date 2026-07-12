import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "Great Players Want the Truth | Matthew Gann, Ph.D.",
  description:
    "The coaches who built women's basketball didn't protect their best players from hard coaching. They gave them more of it. Most organizations do the opposite, and it's costing them.",
  openGraph: {
    title: "Great Players Want the Truth | Matthew Gann, Ph.D.",
    description:
      "The coaches who built women's basketball didn't protect their best players from hard coaching. They gave them more of it. Most organizations do the opposite, and it's costing them.",
    url: "https://matthewgann.com/research/2026/07/great-players-want-the-truth",
    type: "article",
  },
};

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <ArticleSchema
        title="Great Players Want the Truth"
        description="The coaches who built women's basketball didn't protect their best players from hard coaching. They gave them more of it. Most organizations do the opposite, and it's costing them."
        datePublished="2026-07-12"
        url="https://matthewgann.com/research/2026/07/great-players-want-the-truth"
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
          July 2026
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Leadership
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        Great Players Want the Truth
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          I&apos;ve followed college women&apos;s basketball closely for a long time. Long before the sport
          was having its current moment. Part of that is personal: I worked with Ashley Early at Tennessee
          Tech, and she&apos;s now on the coaching staff at Vanderbilt. I watched her build that career up
          close, through constant travel, long hours studying players and systems, and a willingness to say
          no to a lot because the work demanded it. It&apos;s paid off. That closeness gave me a different
          view of what it actually takes to develop elite players.
        </p>

        <p className="leading-relaxed">
          That background shapes how I read the moment the sport is having right now. People attribute it
          to television contracts, NIL, and one or two players who captured the country&apos;s attention.
          Those things explain why the country noticed, not why the sport got good. What you&apos;re
          watching was built over decades in gyms that weren&apos;t full, by coaches who demanded
          excellence from their players long before anyone outside the sport was paying attention.
        </p>

        <p className="leading-relaxed">
          Doc Rivers put it plainly:
        </p>

        <p className="leading-relaxed italic pl-5" style={{ borderLeft: "3px solid var(--border)" }}>
          &ldquo;Average players want to be left alone. Good players want to be coached. Great players
          want to be told the truth.&rdquo;
        </p>

        <p className="leading-relaxed">
          The best performers seek hard truths out, because growth requires accurate information and
          accurate information sometimes requires someone willing to say things you don&apos;t want to hear.
        </p>

        <p className="leading-relaxed">
          This isn&apos;t unique to one coach or one sport. Kara Lawson&apos;s Handle Hard Better
          philosophy at Duke is built on the same idea. Brenda Frese went viral at the NCAA Tournament
          for getting in her player&apos;s face and demanding more. Pat Summitt spent 38 years at
          Tennessee insisting that truth is an act of loyalty, not cruelty.
        </p>

        <p className="leading-relaxed">
          These coaches built the sport on a shared operating philosophy: great players don&apos;t need
          protection from hard coaching, they need more of it.
        </p>

        <p className="leading-relaxed">
          Most leaders do the opposite, not deliberately, but out of efficiency. The best performers are
          easy to manage: they hit deadlines, produce strong work, and require little bandwidth. The
          natural tendency is to leave them alone and direct coaching energy toward the people who are
          struggling.
        </p>

        <p className="leading-relaxed">
          That instinct is understandable, and it&apos;s also a mistake.
        </p>

        <p className="leading-relaxed">
          When you improve your best people, even incrementally, the effect moves through the entire team.
          The culture develops a different relationship with growth and with truth. Improvement at the top
          compounds in ways that improvement at the bottom rarely does, because your best people pull
          everyone around them. Learning compounds where influence compounds.
        </p>

        <p className="leading-relaxed">
          In many organizations, the most undercoached person is the highest performer, not because anyone
          deliberately passed them over, but because they seemed fine. No problems, no performance
          conversations, and it&apos;s easy to confuse no problems with no room to grow.
        </p>

        <p className="leading-relaxed">
          I&apos;ve been called a serial learner more than once. I want the feedback, all of it, even when
          I don&apos;t agree with it, because the point isn&apos;t to feel good about where I am,
          it&apos;s to know where I actually am.
        </p>

        <p className="leading-relaxed">
          And yet I&apos;ve still made the mistake I&apos;m describing. I&apos;ve looked at a team member
          producing excellent work and told myself there was nothing to address. What the best coaches
          understand, and what I&apos;ve had to keep learning, is that coaching your top performers means
          closing the gap between where someone is and what they&apos;re actually capable of. The question
          is whether your organization has built a system where that gap gets named.
        </p>

        <p className="leading-relaxed">
          Higher education has the same problem, just across entire institutions. For the better part of a
          couple of decades, a lot of institutions coasted on assumptions that had held for a long time:
          enrollment was stable enough, demand existed, the four+ year degree still meant something, and
          there wasn&apos;t much pressure to question any of it. Programs were created without market or
          future labor demand testing. Processes went unexamined, even though they didn&apos;t work well.
          The answer to most uncomfortable questions was some version of we&apos;re fine, or we can create
          a committee to talk about it, knowing that committee had zero authority to change anything.
        </p>

        <p className="leading-relaxed">
          The signals were there for years: demographic shifts, eroding public trust, enrollment pressure
          building slowly. But signals don&apos;t act on themselves, and most institutions hadn&apos;t
          built systems to surface hard truths and do something with them. The irony is real. This is an
          industry built entirely on knowledge transfer. Learning is the work. And yet somewhere along the
          way, higher education stopped functioning like a learning organization. Peter Senge, whose work
          I studied in graduate school, described learning organizations as places where people continually
          expand their capacity to create the results they truly desire. That description should fit higher
          education better than almost any other sector. In a lot of cases, it doesn&apos;t.
        </p>

        <p className="leading-relaxed">
          Psychological safety comes up constantly in conversations about workplace culture, usually in
          ways that equate it with comfort, and I&apos;ve never thought that was quite right. Amy
          Edmondson, whose research on team dynamics has shaped how most organizations understand this
          concept, defined psychological safety as the belief that you won&apos;t be punished or
          humiliated for speaking up with ideas, questions, concerns, or mistakes. That&apos;s the
          starting point, and what the coaches who built women&apos;s basketball built on top of it was
          something more active: environments where truth was normal, where being challenged was how the
          organization showed it believed in you, where the most dangerous thing a coach could do was
          leave a great player alone.
        </p>

        <p className="leading-relaxed">
          That&apos;s the model. Not just for athletes, for any organization serious about what
          it&apos;s trying to build.
        </p>

        <p className="leading-relaxed">
          What you&apos;re watching in women&apos;s college basketball right now was built by generations
          of coaches who decided the best players in front of them deserved the hardest truths. That
          compounding crossed a threshold and an entire country noticed.
        </p>

        <p className="leading-relaxed">
          The same dynamic operates in every organization I&apos;ve seen that&apos;s genuinely good at
          getting better. Truth is infrastructure. Build systems that deliver it, and the compounding
          takes care of the rest.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
