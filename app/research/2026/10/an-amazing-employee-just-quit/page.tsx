import type { Metadata } from "next";
import Link from "next/link";
import ArticleSchema from "@/components/ArticleSchema";

export const metadata: Metadata = {
  title: "An Amazing Employee Just Quit. I Couldn't Be Prouder. | Matthew Gann, Ph.D.",
  description:
    "One of my employees recently resigned, and I couldn't be happier for her. We've become a little too comfortable treating every resignation as an organizational failure.",
  openGraph: {
    title: "An Amazing Employee Just Quit. I Couldn't Be Prouder. | Matthew Gann, Ph.D.",
    description:
      "One of my employees recently resigned, and I couldn't be happier for her. We've become a little too comfortable treating every resignation as an organizational failure.",
    url: "https://matthewgann.com/research/2026/10/an-amazing-employee-just-quit",
    type: "article",
  },
};

const h2Style = { fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" };

export default function Post() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <ArticleSchema
        title="An Amazing Employee Just Quit. I Couldn't Be Prouder."
        description="One of my employees recently resigned, and I couldn't be happier for her. We've become a little too comfortable treating every resignation as an organizational failure."
        datePublished="2026-10-26"
        url="https://matthewgann.com/research/2026/10/an-amazing-employee-just-quit"
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
          Leadership
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
        An Amazing Employee Just Quit. I Couldn&apos;t Be Prouder.
      </h1>

      <div className="space-y-5" style={{ color: "var(--foreground)" }}>
        <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          One of my employees recently resigned, and I couldn&apos;t be happier for her.
        </p>

        <p className="leading-relaxed">
          Don&apos;t get me wrong. I probably let out a small groan when I was told. She was
          fun, talented, our partners loved working with her, and she was a positive influence
          on team culture. Losing a good employee, especially in the middle of significant
          change, is never convenient. There&apos;s work to redistribute, a position to fill,
          and all the usual headaches that come with a departure on an already understaffed
          team.
        </p>

        <p className="leading-relaxed">
          But she&apos;s also been in the role for a few years, recently earned a master&apos;s
          degree, and she&apos;s decided to pursue something she&apos;s passionate about.
          She&apos;s taking what she&apos;s learned from her education and in this role and
          making a decision about the life she wants, and going after it.
        </p>

        <p className="leading-relaxed">How could I be anything but proud?</p>

        <p className="leading-relaxed">
          I&apos;ve spent more than two decades in leadership positions, and I&apos;ve come to
          believe that one of our most important responsibilities as leaders is helping people
          grow. Sometimes that growth benefits our organizations directly. Sometimes it prepares
          someone for a promotion. And sometimes it leads them right out the door, making room
          for the next generation.
        </p>

        <p className="leading-relaxed">I&apos;m perfectly fine with that.</p>

        <p className="leading-relaxed">Actually, I think we should celebrate it more often.</p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          When Did Retention Become the Ultimate Measure of Leadership?
        </h2>

        <p className="leading-relaxed">
          We spend an awful lot of time talking about employee retention. And for good reason.
          Turnover is expensive, institutional knowledge matters, and building a strong team
          takes considerable time and effort.
        </p>

        <p className="leading-relaxed">
          As someone who has spent much of his career building and leading teams, I understand
          the frustration of losing someone you&apos;ve invested in. Just when everything is
          running smoothly, someone decides to go find themselves.
        </p>

        <p className="leading-relaxed">The nerve.</p>

        <p className="leading-relaxed">
          But I think we&apos;ve become a little too comfortable treating every resignation as
          an organizational failure. It&apos;s not!
        </p>

        <p className="leading-relaxed">
          Sometimes people leave because they&apos;re unhappy. Sometimes they leave because
          leadership has failed them, opportunities are limited, or the culture has become
          unbearable. We absolutely need to pay attention to those departures.
        </p>

        <p className="leading-relaxed">But sometimes people leave because they&apos;ve grown.</p>

        <p className="leading-relaxed">
          In this case, she discovered that her passion was data science, not web development.
          She wanted to think bigger, and she&apos;d put in the work to pursue that interest.
        </p>

        <p className="leading-relaxed">Isn&apos;t that what we should want for her?</p>

        <p className="leading-relaxed">
          I&apos;ve always believed that the people who work with us are more than the positions
          they occupy. They have ambitions, families, responsibilities, interests, and lives
          that extend well beyond the walls of our organizations.
        </p>

        <p className="leading-relaxed">And frankly, those lives should matter more than the work.</p>

        <p className="leading-relaxed">I say it often: We work to live. We shouldn&apos;t live to work.</p>

        <p className="leading-relaxed">
          That doesn&apos;t mean our work can&apos;t be meaningful. I&apos;m purpose-driven.
          It&apos;s at the top of my CV. It&apos;s in my daily decisions. I love what I do, and
          I&apos;ve been fortunate to build a career around work I genuinely enjoy. But even the
          most rewarding job is still one part of a much larger life. I love to travel. I love
          to learn. I love to eat ice cream!
        </p>

        <p className="leading-relaxed">
          I don&apos;t think we should expect our employees to organize that entire life around
          our staffing needs.
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Leadership Is About Developing People, Not Collecting Them
        </h2>

        <p className="leading-relaxed">
          During my doctoral studies in leadership and organizational intelligence, I spent
          considerable time thinking about what makes leadership effective and how organizations
          create the conditions for people to succeed. That interest hasn&apos;t gone away. In
          fact, I&apos;ll be presenting another leadership study at the International Leadership
          Association (ILA) Global Conference in Toronto. But whether I&apos;m conducting
          research or leading a team, I keep coming back to the importance of understanding
          people as individuals.
        </p>

        <p className="leading-relaxed">
          One concept I&apos;ve always appreciated is <em>individualized consideration</em>, a
          component of transformational leadership described by Bernard Bass and Bruce Avolio.
          It&apos;s about recognizing and supporting the individual needs, abilities, and
          development of the people we lead.
        </p>

        <p className="leading-relaxed">That sounds obvious, but apparently it isn&apos;t always.</p>

        <p className="leading-relaxed">
          I once had a boss (not a leader) who thought it was perfectly reasonable to replace a
          social media manager with an administrative assistant because the assistant could
          manage their calendar.
        </p>

        <p className="leading-relaxed">Not kidding.</p>

        <p className="leading-relaxed">
          Anyhow, people aren&apos;t interchangeable. One employee may want to become a vice
          president. Another may want to be an exceptional designer or strategist without ever
          managing another human being. Someone else may discover a passion that takes them into
          an entirely different field.
        </p>

        <p className="leading-relaxed">
          Our responsibility isn&apos;t to decide which ambition is most valuable. It&apos;s to
          understand what matters to the individual and, where we can, help them get there.
        </p>

        <p className="leading-relaxed">
          I&apos;ve actually sent team members job postings because I thought they&apos;d be a
          great fit for the next step in their careers. I usually preface those messages by
          telling them I don&apos;t want them to leave, of course. But if I see an opportunity
          that could be good for someone, why would I keep it to myself?
        </p>

        <p className="leading-relaxed">
          We can&apos;t always provide every opportunity people want. Budgets are real,
          workloads don&apos;t disappear, and organizations have legitimate limitations. But we
          can advocate for our people, provide meaningful feedback, and encourage them to
          explore possibilities beyond their current job descriptions.
        </p>

        <p className="leading-relaxed">
          Sometimes that means helping someone recognize an opportunity we can&apos;t offer
          ourselves.
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Give People Room to Grow
        </h2>

        <p className="leading-relaxed">
          Psychologists Edward Deci and Richard Ryan developed self-determination theory, which
          identifies autonomy, competence, and relatedness as fundamental psychological needs
          associated with motivation and well-being.
        </p>

        <p className="leading-relaxed">
          That research resonates with how I approach leadership. My philosophy is one of guided
          autonomy. Give people clear objectives, make sure they have what they need, and get
          out of the way. Be available, course correct when necessary, but let talented people
          do their thing.
        </p>

        <p className="leading-relaxed">
          Unfortunately, we have an impressive ability to undermine the very things we claim to
          value.
        </p>

        <p className="leading-relaxed">
          We talk about empowering employees, then require multiple approvals for minor
          decisions. We encourage professional development, then make it nearly impossible for
          people to step away from their daily responsibilities to learn something new.
          Sometimes we don&apos;t even fund those opportunities in our budgets.
        </p>

        <p className="leading-relaxed">
          Supporting growth requires more than saying we value it. It means making room for
          education, new experiences, and interests that may not directly benefit the
          organization tomorrow.
        </p>

        <p className="leading-relaxed">
          It also means respecting that people have lives outside work. Sometimes their priority
          is graduate school. Sometimes it&apos;s picking up their children, volunteering,
          traveling, or going home and doing absolutely nothing related to work.
        </p>

        <p className="leading-relaxed">All perfectly respectable ambitions, by the way.</p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Organizational Intelligence Starts With Paying Attention
        </h2>

        <p className="leading-relaxed">
          My interest in organizational intelligence has shaped how I think about this, too. We
          tend to associate organizational intelligence with gathering information,
          understanding our environment, learning, and making better decisions.
        </p>

        <p className="leading-relaxed">
          But organizations can have sophisticated analytics, strategic plans, performance
          dashboards, and enough committees to keep everyone busy until retirement without
          really understanding the people doing the work.
        </p>

        <p className="leading-relaxed">And people change.</p>

        <p className="leading-relaxed">
          Their interests evolve, their circumstances shift, and their professional goals become
          clearer. A leader who assumes someone wants the same things today that they wanted
          three years ago probably isn&apos;t paying close enough attention.
        </p>

        <p className="leading-relaxed">
          Amy Edmondson&apos;s research on psychological safety offers a useful connection. Her
          work examines how environments where people feel safe taking interpersonal risks can
          support learning and speaking up. I&apos;d argue that the same principle matters when
          people are thinking about their careers.
        </p>

        <p className="leading-relaxed">
          Can an employee tell you they&apos;re interested in a different field without being
          treated as a flight risk? Can they apply for another opportunity without their manager
          taking it personally?
        </p>

        <p className="leading-relaxed">
          I&apos;d hope so. If people can&apos;t be candid about what they want, how can we
          possibly help them grow?
        </p>

        <h2 className="text-2xl pt-6" style={h2Style}>
          Sometimes Supporting People Means Letting Them Go
        </h2>

        <p className="leading-relaxed">I don&apos;t want to romanticize turnover.</p>

        <p className="leading-relaxed">
          Losing good employees creates legitimate challenges, particularly for smaller teams
          where one departure can significantly affect workloads and institutional knowledge.
        </p>

        <p className="leading-relaxed">
          Leaders have obligations to the organization and to the people who remain. We have to
          plan for transitions, maintain performance, and make sure that celebrating
          someone&apos;s next chapter doesn&apos;t mean ignoring the additional burden on
          everyone else.
        </p>

        <p className="leading-relaxed">
          And sometimes, despite our best efforts, an employee leaves because we couldn&apos;t
          provide what they needed. That&apos;s worth examining, too.
        </p>

        <p className="leading-relaxed">
          But I don&apos;t believe we should measure the success of our leadership solely by how
          long people stay.
        </p>

        <p className="leading-relaxed">
          I&apos;d rather build a team where people grow, contribute meaningful work, and
          eventually move on to opportunities that excite them than one where people remain for
          years because they&apos;re comfortable, afraid of change, or unsure they can do
          anything else.
        </p>

        <p className="leading-relaxed">
          There&apos;s a distinction between loyalty and dependency, and I think leaders
          occasionally confuse the two.
        </p>

        <p className="leading-relaxed">I also think we have to remember how many of us got where we are.</p>

        <p className="leading-relaxed">
          Somebody gave us an opportunity. Somebody encouraged us to take a chance, develop a
          skill, apply for a position, or pursue an education.
        </p>

        <p className="leading-relaxed">
          And at some point, most of us left a job to take the next step in our careers.
        </p>

        <p className="leading-relaxed">I certainly have.</p>

        <p className="leading-relaxed">
          It would be a little hypocritical to celebrate our own professional growth while
          resenting the people we lead for pursuing theirs.
        </p>

        <p className="leading-relaxed">So, yes, one of my employees recently resigned.</p>

        <p className="leading-relaxed">
          I&apos;m going to miss working with her. Our team will have to adjust, and there will
          undoubtedly be moments when I wish she were still around.
        </p>

        <p className="leading-relaxed">
          But she&apos;s earned her master&apos;s degree, she&apos;s pursuing something
          meaningful to her, and she&apos;s making a decision about the future she wants.
        </p>

        <p className="leading-relaxed">I&apos;m proud of her.</p>

        <p className="leading-relaxed">
          If I&apos;ve played even a small part in helping her become confident enough to take
          that next step, I&apos;ll consider that a pretty good outcome.
        </p>

        <p className="leading-relaxed">And if that means I have to post another job opening, so be it.</p>

        <p className="leading-relaxed">
          I&apos;d much rather help someone grow beyond my team than give them a reason to stop
          growing while they&apos;re on it.
        </p>

        <p className="text-sm font-medium mt-10 pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
          Matthew Gann, Ph.D.
        </p>
      </div>
    </div>
  );
}
