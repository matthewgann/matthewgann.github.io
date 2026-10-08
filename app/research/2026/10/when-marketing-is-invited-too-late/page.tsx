import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "When Marketing Is Invited Too Late | Matthew Gann, Ph.D.",
  description:
    "The best marketing strategy in the world can't always rescue a poorly conceived organizational strategy. And yet we keep asking it to try.",
  openGraph: {
    title: "When Marketing Is Invited Too Late | Matthew Gann, Ph.D.",
    description:
      "The best marketing strategy in the world can't always rescue a poorly conceived organizational strategy. And yet we keep asking it to try.",
    url: "https://matthewgann.com/research/2026/10/when-marketing-is-invited-too-late",
    type: "article",
  },
};

const h2Style = { fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" };

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <ArticleSchema
        title="When Marketing Is Invited Too Late"
        description="The best marketing strategy in the world can't always rescue a poorly conceived organizational strategy. And yet we keep asking it to try."
        datePublished="2026-10-07"
        url="https://matthewgann.com/research/2026/10/when-marketing-is-invited-too-late"
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
          October 2026
        </span>
        <span
          className="text-xs px-2 py-0.5 font-medium tracking-wide"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
        >
          Higher Education
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        When Marketing Is Invited Too Late
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          The best marketing strategy in the world can&apos;t always rescue a poorly conceived
          organizational strategy. And yet we keep asking it to try.
        </p>

        <p className="leading-relaxed">Picture a meeting happening somewhere right now.</p>

        <p className="leading-relaxed">
          A group of smart, well-intentioned leaders has spent months developing a new initiative.
          They&apos;ve evaluated the budget, worked through the operational details, navigated
          internal politics, and finally reached a decision. Everyone is relieved. The hard work is
          done.
        </p>

        <p className="leading-relaxed">
          Someone looks around the room and asks, &ldquo;Should we talk to marketing about
          this?&rdquo;
        </p>

        <p className="leading-relaxed">
          Probably should get them involved. We need a name, a launch plan, maybe a hype video.
          Something exciting!
        </p>

        <p className="leading-relaxed">
          And just like that, marketing is invited to the party. The cake has been ordered, the
          guest list is finalized, and someone has already decided on a theme. Marketing&apos;s job
          is to make sure everyone has a good time.
        </p>

        <p className="leading-relaxed">
          I&apos;ve spent more than two decades working in and around marketing organizations, and
          I&apos;ve seen versions of this scenario play out across industries. Higher education is
          particularly good at it, although we certainly don&apos;t have a monopoly on it.
        </p>

        <p className="leading-relaxed">
          The problem isn&apos;t that marketing gets invited late to a meeting. It&apos;s that
          marketing gets invited late to the thinking.
        </p>

        <p className="leading-relaxed">And those are two very different problems.</p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Communicating Strategy Isn&apos;t the Same as Shaping It
        </h2>

        <p className="leading-relaxed">
          Somewhere along the way, organizations developed a remarkably convenient understanding of
          marketing. Leadership makes decisions. Marketing tries to make people understand or even
          like them.
        </p>

        <p className="leading-relaxed">
          It&apos;s a clean division of labor. It&apos;s also an incomplete understanding of what
          marketing is supposed to do.
        </p>

        <p className="leading-relaxed">
          Marketing is not simply the discipline of getting people to pay attention. At its best,
          it&apos;s the organizational capability that helps us understand who we&apos;re serving,
          what they value, how they make decisions, what alternatives they have, and whether our
          organization is positioned to meet their needs.
        </p>

        <p className="leading-relaxed">
          Novel idea: those questions belong at the beginning of strategy development, not at the
          end.
        </p>

        <p className="leading-relaxed">
          Think about a university considering a new academic program. The academic case may be
          compelling. Faculty expertise may be exceptional. The institution may have the facilities,
          resources, and genuine enthusiasm to make it happen.
        </p>

        <p className="leading-relaxed">All good things.</p>

        <p className="leading-relaxed">
          But has anyone established whether students actually want the program? Whether employers
          recognize its value? Whether there will be a market for graduates to get a job? Whether
          prospective students understand what the degree prepares them to do? Whether competing
          institutions already offer something similar, perhaps at a lower price?
        </p>

        <p className="leading-relaxed">They&apos;re questions about the strategy.</p>

        <p className="leading-relaxed">
          And if the answers aren&apos;t particularly encouraging, a clever campaign (or the beloved
          administrative tagline) isn&apos;t going to change the underlying reality.
        </p>

        <p className="leading-relaxed">
          You can put an impressive creative team behind an initiative with weak market demand. You
          might even generate attention. But attention and demand are not the same thing, and no
          amount of attractive design changes that.
        </p>

        <p className="leading-relaxed">Sometimes the problem isn&apos;t the message.</p>

        <p className="leading-relaxed">The problem is the decision.</p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          What Presidents Told Me About Marketing
        </h2>

        <p className="leading-relaxed">
          This tension was part of what led me to study how university presidents perceive marketing
          and its role in institutional effectiveness.
        </p>

        <p className="leading-relaxed">
          For my doctoral research, I surveyed presidents of public four-year universities and
          conducted in-depth interviews to better understand how they viewed marketing leadership,
          organizational structure, and strategic performance.
        </p>

        <p className="leading-relaxed">
          One of the strongest themes from those interviews was strategic alignment.
        </p>

        <p className="leading-relaxed">
          The presidents I interviewed didn&apos;t describe effective marketing exclusively in terms
          of advertising, communications, or enrollment campaigns. They talked about institutional
          positioning, organizational integration, differentiation, and the relationship between
          marketing and broader university goals.
        </p>

        <p className="leading-relaxed">
          One president described marketing as an overarching philosophy that touches nearly every
          institutional decision.
        </p>

        <p className="leading-relaxed">That perspective matters.</p>

        <p className="leading-relaxed">
          It suggests that at least some university presidents understand marketing as something
          much larger than a department producing content. They see it as a function that helps
          connect an institution&apos;s ambitions with the needs and expectations of the people it
          serves.
        </p>

        <p className="leading-relaxed">
          My research also found an interesting distinction. Having a chief marketing officer report
          directly to the president was not associated with a statistically significant difference
          in presidents&apos; perceptions of marketing effectiveness. Having the CMO serve on the
          university cabinet, however, was associated with higher perceived effectiveness scores.
        </p>

        <p className="leading-relaxed">
          That doesn&apos;t establish that cabinet membership causes better marketing.
        </p>

        <p className="leading-relaxed">But it raises an important leadership question.</p>

        <p className="leading-relaxed">
          Is it enough to give a marketing leader access to the chief executive, or does the
          organization also need that leader participating in the conversations where institutional
          strategy takes shape?
        </p>

        <p className="leading-relaxed">
          I think we know which arrangement creates more opportunities for meaningful contribution.
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Strategic Alignment Has to Work in Both Directions
        </h2>

        <p className="leading-relaxed">
          Organizations love the phrase <em>strategic alignment</em>. It&apos;s in nearly every
          planning document I&apos;ve ever seen.
        </p>

        <p className="leading-relaxed">
          Usually, though, the conversation goes something like this: Here&apos;s our strategic
          plan. Marketing, go align your work with it.
        </p>

        <p className="leading-relaxed">
          Fair enough. Marketing absolutely should support institutional priorities.
        </p>

        <p className="leading-relaxed">But genuine alignment isn&apos;t a one-way street.</p>

        <p className="leading-relaxed">
          If marketing is expected to connect organizational strategy to the marketplace, then what
          we learn from the marketplace should also influence organizational strategy.
        </p>

        <p className="leading-relaxed">That&apos;s the part we too often skip.</p>

        <p className="leading-relaxed">
          Market research should inform decisions about programs and services. Audience behavior
          should help shape how those services are delivered. Brand perception should influence
          institutional positioning. Competitive intelligence should inform where organizations
          invest, where they differentiate, and, occasionally, where they should reconsider an idea
          altogether.
        </p>

        <p className="leading-relaxed">
          This doesn&apos;t mean marketing gets to dictate academic programs or override the
          expertise of faculty, administrators, and operational leaders. It shouldn&apos;t.
        </p>

        <p className="leading-relaxed">
          Expertise matters. Shared governance matters. An organization&apos;s mission matters.
        </p>

        <p className="leading-relaxed">
          But collaboration means bringing different forms of expertise together while a decision
          can still be improved.
        </p>

        <p className="leading-relaxed">
          A marketing leader who understands the marketplace should be able to say, &ldquo;I see
          what we&apos;re trying to accomplish, but here&apos;s something we need to consider before
          we commit.&rdquo;
        </p>

        <p className="leading-relaxed">And a healthy leadership team should want to hear it.</p>

        <p className="leading-relaxed">
          Not because marketing is always right. We certainly aren&apos;t.
        </p>

        <p className="leading-relaxed">
          Because the cost of discovering a strategic problem after implementation is usually much
          greater than the discomfort of discussing it beforehand.
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          The Invitation Comes With Responsibility
        </h2>

        <p className="leading-relaxed">
          There is another side to this conversation, and marketing leaders need to hear it.
        </p>

        <p className="leading-relaxed">
          We cannot complain about being treated as a production function while consistently
          behaving like one.
        </p>

        <p className="leading-relaxed">
          If we want to participate in strategy, we have to bring something more valuable than an
          opinion about a logo, a tagline, or a campaign.
        </p>

        <p className="leading-relaxed">
          We need to understand the organization&apos;s finances, operations, priorities, and
          constraints. We need to know the audiences we serve and the competitive environment we
          operate in. We need credible research, meaningful data, and enough business judgment to
          distinguish a genuine strategic concern from a personal preference.
        </p>

        <p className="leading-relaxed">
          And sometimes we need the courage to tell leadership that the proposed initiative probably
          isn&apos;t going to work.
        </p>

        <p className="leading-relaxed">
          That&apos;s not always a comfortable conversation, particularly when the people advocating
          for an initiative have invested considerable time and energy in it.
        </p>

        <p className="leading-relaxed">
          Compassion matters here. Most questionable decisions aren&apos;t made by foolish people.
          They&apos;re made by capable people working with incomplete information, competing
          priorities, and the best intentions.
        </p>

        <p className="leading-relaxed">Our job isn&apos;t to embarrass them or win an argument.</p>

        <p className="leading-relaxed">It&apos;s to make the decision better.</p>

        <p className="leading-relaxed">
          That requires trust. It also requires marketing leaders to understand that being invited
          into strategic conversations is not a reward for holding a senior title. It&apos;s an
          obligation to contribute something useful.
        </p>

        <p className="leading-relaxed">
          A seat at the table isn&apos;t particularly valuable if all you bring is a request for
          more budget.
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          You Can&apos;t Communicate Your Way Out of Everything
        </h2>

        <p className="leading-relaxed">
          Marketing can accomplish extraordinary things when the underlying strategy is sound. It can
          build awareness, establish trust, change perceptions, create demand, and help people
          recognize value they might otherwise overlook.
        </p>

        <p className="leading-relaxed">But it has limits.</p>

        <p className="leading-relaxed">
          Marketing cannot manufacture sustainable demand for something people don&apos;t need. It
          cannot indefinitely compensate for a poor customer experience. It cannot make an
          organization&apos;s stated values believable when its decisions consistently contradict
          them.
        </p>

        <p className="leading-relaxed">It can certainly make promises.</p>

        <p className="leading-relaxed">The rest of the organization has to keep them.</p>

        <p className="leading-relaxed">
          That&apos;s why the relationship between organizational strategy and marketing strategy
          matters so much. The two should inform each other continuously, not meet for the first
          time when someone needs a launch announcement.
        </p>

        <p className="leading-relaxed">And this is ultimately a leadership issue.</p>

        <p className="leading-relaxed">
          Leaders determine who participates in decision-making, what information gets considered,
          and whether dissenting perspectives are welcomed before commitments are made.
        </p>

        <p className="leading-relaxed">
          The strongest organizations aren&apos;t the ones where marketing gets every request
          completed on time. They&apos;re the ones where marketing helps the organization make
          smarter requests in the first place.
        </p>

        <p className="leading-relaxed">
          So the next time an exciting new initiative is nearly ready to launch and someone says,
          &ldquo;We should probably get marketing involved,&rdquo; consider asking a different
          question.
        </p>

        <p className="leading-relaxed">
          What might we have decided differently if marketing had been involved six months ago?
        </p>

        <p className="leading-relaxed">
          Because the most valuable contribution marketing can make may happen long before
          there&apos;s anything to promote.
        </p>

        <p className="leading-relaxed">
          And by the time you&apos;re asking us to make it look good, the most important marketing
          decision may already have been made.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
