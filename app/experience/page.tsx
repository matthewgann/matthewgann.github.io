import type { Metadata } from "next";
import ImageBand from "@/components/ImageBand";
import { EMAIL, LINKEDIN, PERSON_ID, SITE_URL, WEBSITE_ID, jsonLd } from "@/lib/site";

const URL = `${SITE_URL}/experience`;
const DESCRIPTION =
  "Career history, education, credentials, awards, and community roles of Matthew Gann, Ph.D., chief marketing officer at the University of Denver and former systemwide CMO for the Tennessee Board of Regents.";

export const metadata: Metadata = {
  title: "Experience",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    title: "Experience | Matthew Gann, Ph.D.",
    description: DESCRIPTION,
    url: URL,
    firstName: "Matthew",
    lastName: "Gann",
    images: [{ url: "/band-conference.jpg", width: 1600, height: 1067, alt: "Matthew Gann at a professional conference" }],
  },
  twitter: { card: "summary_large_image", title: "Experience | Matthew Gann, Ph.D.", description: DESCRIPTION, images: ["/band-conference.jpg"] },
};

const experience = [
  {
    org: "Consultant",
    location: "Nashville, Tennessee & Denver, Colorado",
    title: "",
    highlight:
      "I've kept an active consulting practice going my entire career, working with organizations across healthcare, legal, business services, retirement planning, real estate, medical aesthetics, and a lot more in between.",
  },
  {
    org: "University of Denver",
    location: "Denver, Colorado",
    title: "Associate Vice Chancellor, Chief Marketing Officer",
    highlight:
      "I'm the CMO for a private R1 research university with 10 schools and colleges, 18 Division I sports programs, and 35 NCAA national championships.",
  },
  {
    org: "Tennessee Board of Regents",
    location: "Nashville, Tennessee",
    title: "Associate Vice Chancellor for Marketing, Digital Strategy, and Public Relations",
    highlight:
      "I was the systemwide CMO for Tennessee's largest higher education system. 37 colleges. About 165,000 students.",
  },
  {
    org: "Tennessee Tech University",
    location: "Cookeville, Tennessee",
    title: "Director of Web and Digital Media",
    highlight: "I led digital strategy and all public-facing web properties for a 10,000-student university.",
  },
  {
    org: "Wellness Healthcare",
    location: "Cookeville, Tennessee",
    title: "Vice President of Marketing and Promotions",
    highlight: "I was the CMO for one of the South's largest durable medical equipment suppliers.",
  },
  {
    org: "WPF Management",
    location: "Gallatin, Tennessee",
    title: "Director of Internet Operations",
    highlight:
      "I was the lead web developer, digital designer, and PR strategist for a premier extreme sports company.",
  },
  {
    org: "N2 The Net",
    location: "Cookeville, Tennessee",
    title: "Director of Design and Development",
    highlight: "I managed 200+ digital properties.",
  },
];

const education = [
  {
    institution: "Trevecca Nazarene University",
    credentials: ["Doctor of Philosophy, Leadership / Organizational Intelligence", "Master of Organizational Leadership"],
  },
  {
    institution: "Tennessee Tech University",
    credentials: ["Bachelor of Science, Business Administration / Business Management, Management Information Systems"],
  },
  { institution: "University of Tennessee", credentials: ["Tennessee Certified Economic Developer"] },
  { institution: "Public Relations Society of America", credentials: ["Accredited in Public Relations (APR)"] },
];

const skills = [
  "Strategic Marketing Planning",
  "Integrated Brand Development",
  "Public Relations & Reputation Management",
  "Crisis Communications",
  "Digital Strategy & Analytics",
  "Leadership & Team Development",
  "Budget Management",
  "Marketing Automation & AI",
  "Enrollment Marketing",
  "Executive Communications",
];

const researchAreas = [
  "Marketing Operations in Higher Education",
  "Business and Organizational Intelligence",
  "Leadership Effectiveness",
];

const awards = ["Otis Floyd Jr. Award for Excellence in Higher Education Administration", "Charles Holmes Award"];

const memberships = [
  "American Advertising Federation",
  "American Marketing Association",
  "International Leadership Association",
  "National Association of Student Personnel Administrators",
  "National Council for Marketing and Public Relations",
  "Project Management Institute",
  "Public Relations Society of America",
  "Tennessee College Public Relations Association",
  "University and College Designers Association",
];

const community = [
  { org: "PRSA – Counselors to Higher Education", role: "National Executive Committee Member" },
  { org: "CASE", role: "Faculty Member, National Conference on Marketing and Brand" },
  { org: "Public Relations Society of America", role: "APR Panelist" },
  { org: "National Association of Student Personnel Administrators", role: "National Conference Program Reviewer" },
  { org: "TN ACHIEVES, UT ACHIEVES", role: "Mentor, Ambassador" },
  { org: "University of Tennessee CIS", role: "Capstone Mentor" },
  { org: "Youth Villages", role: "Advisory Board Member" },
  { org: "Tennessee College Public Relations Association", role: "Previous President, Secretary" },
  { org: "Open Nashville", role: "Previous President, Financial Officer, and Executive Board Member" },
];

const schema = [
  {
    "@type": "ProfilePage",
    "@id": URL,
    url: URL,
    name: "Experience | Matthew Gann, Ph.D.",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Experience", item: URL },
    ],
  },
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="t-card mb-6">{title}</h2>
      <ul className="list-none m-0 p-0 hairline-t">
        {items.map((item) => (
          <li key={item} className="py-3 hairline-b t-small font-medium">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      {/* Header */}
      <section className="hairline-b">
        <div className="page-x pt-14 pb-12 md:pt-20 md:pb-16 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <h1 className="t-display">Experience</h1>
            <p className="t-lead mt-6 mb-0" style={{ color: "var(--ink-soft)" }}>
              Chief Marketing Officer · Organizational Consultant · Marketing Function Builder
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-2 items-start md:items-end t-small">
            <a href={`mailto:${EMAIL}`} className="font-medium no-underline hover:text-accent transition-colors">
              {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer me" className="font-medium no-underline hover:text-accent transition-colors">
              linkedin.com/in/matthewgann ↗
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="grid md:grid-cols-12 hairline-b">
        <div className="page-x py-8 md:py-12 md:col-span-3">
          <span className="mono" style={{ color: "var(--ink-faint)" }}>Summary</span>
        </div>
        <div className="page-x py-8 md:py-12 md:col-span-9 md:hairline-l">
          <p className="t-statement m-0 max-w-[40ch]">
            I&apos;ve spent more than two decades building brands, leading teams, and figuring out how
            to make marketing actually work inside complex organizations. My career has taken me from
            building some of the first streaming platforms in the early 2000s to serving as CMO of a
            major research university. I work at the intersection of strategy, data, and storytelling,
            and I believe the best marketing is both honest and effective.
          </p>
        </div>
      </section>

      <ImageBand src="/band-conference.jpg" alt="Matthew Gann at a professional conference" position="center 15%" />

      {/* Roles */}
      <section aria-labelledby="roles-heading">
        <div className="page-x pt-16 pb-8 md:pt-24 md:pb-12">
          <h2 id="roles-heading" className="t-headline">
            Where I&apos;ve worked.
          </h2>
        </div>
        <ul className="list-none m-0 p-0 hairline-t">
          {experience.map((job) => (
            <li key={job.org} className="hairline-b">
              <div className="page-x py-8 md:py-10 grid md:grid-cols-12 gap-3 md:gap-6">
                <span className="md:col-span-2 mono" style={{ color: "var(--ink-faint)" }}>
                  {job.location}
                </span>
                <div className="md:col-span-5">
                  <h3 className="t-card m-0">{job.org}</h3>
                  {job.title && (
                    <p className="t-small font-medium mt-2 mb-0" style={{ color: "var(--accent)" }}>
                      {job.title}
                    </p>
                  )}
                </div>
                <p className="md:col-span-5 t-body m-0 max-w-[48ch]">{job.highlight}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills & Education */}
      <section style={{ background: "var(--bg-raised)" }}>
        <div className="page-x py-16 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="t-card mb-6">Skills &amp; Expertise</h2>
            <ul className="list-none p-0 m-0 hairline-t">
              {skills.map((skill) => (
                <li key={skill} className="py-3 hairline-b t-small font-medium">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="t-card mb-6">Education &amp; Credentials</h2>
            <dl className="m-0 hairline-t">
              {education.map((edu) => (
                <div key={edu.institution} className="py-4 hairline-b">
                  <dt className="font-semibold t-small">{edu.institution}</dt>
                  {edu.credentials.map((c) => (
                    <dd key={c} className="m-0 t-small" style={{ color: "var(--ink-soft)" }}>
                      {c}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Research Areas, Awards, Memberships */}
      <section className="hairline-t">
        <div className="page-x py-16 md:py-24 grid md:grid-cols-3 gap-12">
          <Column title="Research Areas" items={researchAreas} />
          <Column title="Personal Awards" items={awards} />
          <Column title="Memberships" items={memberships} />
        </div>
      </section>

      {/* Community */}
      <section style={{ background: "var(--dark)", color: "var(--on-dark)" }}>
        <div className="page-x py-16 md:py-24">
          <h2 className="t-headline mb-12" style={{ color: "var(--on-dark)" }}>
            Service and volunteer roles.
          </h2>
          <ul className="list-none m-0 p-0 grid md:grid-cols-2 gap-x-12" style={{ borderTop: "1px solid var(--on-dark-line)" }}>
            {community.map((item) => (
              <li key={item.org} className="py-4" style={{ borderBottom: "1px solid var(--on-dark-line)" }}>
                <p className="font-semibold m-0 t-small">{item.org}</p>
                <p className="t-small m-0" style={{ color: "var(--on-dark-soft)" }}>
                  {item.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
