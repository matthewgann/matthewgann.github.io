import type { Metadata } from "next";
import ImageBand from "@/components/ImageBand";
import ContactCta from "@/components/ContactCta";
import CareerRail from "@/components/CareerRail";
import Reveal from "@/components/Reveal";
import { PERSON_ID, SITE_URL, WEBSITE_ID, absUrl, jsonLd } from "@/lib/site";

const URL = absUrl("/experience");
const DESCRIPTION =
  "Career history, education, credentials, awards, and community roles of Matthew Gann, Ph.D., chief marketing officer at the University of Denver.";

export const metadata: Metadata = {
  title: "Experience and Background",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    title: "Experience and Background | Matthew Gann, Ph.D.",
    description: DESCRIPTION,
    url: URL,
    firstName: "Matthew",
    lastName: "Gann",
    images: [{ url: "/band-conference.jpg", width: 1600, height: 1067, alt: "Matthew Gann at a professional conference" }],
  },
  twitter: { card: "summary_large_image", title: "Experience and Background | Matthew Gann, Ph.D.", description: DESCRIPTION, images: ["/band-conference.jpg"] },
};

const experience = [
  {
    id: "consultant",
    org: "Consultant",
    title: "",
    highlight:
      "I've kept an active consulting practice going my entire career, working with organizations across healthcare, legal, business services, retirement planning, real estate, medical aesthetics, and a lot more in between. I also work with Libelle Education Consulting, a team of higher education practitioners who partner with K-12, postsecondary, and corporate organizations, from strategic ideation to the public-facing deliverables that advance their goals.",
    link: { label: "Libelle Education Consulting", href: "https://www.libelleeducationconsulting.com/" },
  },
  {
    id: "university-of-denver",
    org: "University of Denver",
    title: "Associate Vice Chancellor, Chief Marketing Officer",
    highlight:
      "I'm the CMO for a private R1 research university.",
  },
  {
    id: "tennessee-board-of-regents",
    org: "Tennessee Board of Regents",
    title: "Associate Vice Chancellor for Marketing, Digital Strategy, and Public Relations",
    highlight:
      "I was the systemwide CMO for Tennessee's largest higher education system.",
  },
  {
    id: "tennessee-tech-university",
    org: "Tennessee Tech University",
    title: "Director of Web and Digital Media",
    highlight: "I led digital strategy and all public-facing web properties for a 10,000-student university.",
  },
  {
    id: "wellness-healthcare",
    org: "Wellness Healthcare",
    title: "Vice President of Marketing and Promotions",
    highlight: "I was the CMO for one of the South's largest durable medical equipment suppliers.",
  },
  {
    id: "n2-the-net",
    org: "N2 The Net",
    title: "Director of Design and Development",
    highlight:
      "I designed and built websites for college athletics, real estate, radio and broadcasting, and healthcare clients.",
  },
  {
    id: "wpf-management",
    org: "WPF Management",
    title: "Director of Internet Operations",
    highlight:
      "I was the lead web developer, digital designer, and PR strategist for a premier extreme sports company.",
  },
];

const education = [
  {
    institution: "Trevecca Nazarene University",
    credentials: ["Ph.D., Leadership (Organizational Intelligence)", "Master of Organizational Leadership"],
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
  { org: "International Leadership Association (ILA) Global Conference", role: "Presenter" },
  {
    org: "Higher Ed Pulse Podcast",
    role: "Guest",
    href: "https://www.enrollify.org/episodes/pulse-check-learning-from-leaders-part-2",
  },
  {
    org: "Higher Ed Demand Gen Podcast",
    role: "Guest",
    href: "https://creators.spotify.com/pod/profile/highered-demand-gen/episodes/Ep--113-Getting-Marketing-a-Seat-At-The-Executive-Table--Higher-Ed-Demand-Gen---Dr--Matthew-Gann-e2rfoog",
  },
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
    name: "Experience and Background | Matthew Gann, Ph.D.",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Experience and Background", item: URL },
    ],
  },
];

/** One tile in the credentials mosaic. `span` is its width in twelfths on md and up. */
function Tile({ title, span, i, children }: { title: string; span: number; i: number; children: React.ReactNode }) {
  return (
    <div className="mosaic-cell reveal-item" style={{ ["--span" as string]: span, ["--i" as string]: i }}>
      <h3 className="kicker m-0 mb-6" style={{ color: "var(--accent-soft)" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      {/* Header: dark band, title and intro side by side */}
      <section style={{ background: "var(--dark)", color: "var(--on-dark)" }}>
        <div className="page-x pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-12 gap-x-8 gap-y-8 items-end">
          <h1 className="md:col-span-6 t-display m-0" style={{ color: "var(--on-dark)" }}>
            <span className="scrawl" style={{ color: "var(--on-dark)" }}>
              Experience
              <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                <path d="M4 14 C 60 4, 120 20, 190 10 S 320 6, 396 15" />
              </svg>
            </span>
            <br />
            and Background
          </h1>
          <p className="md:col-span-6 t-lead m-0" style={{ color: "rgba(244,242,238,0.78)" }}>
            I&apos;ve spent more than two decades building brands, leading teams, and figuring out how
            to make marketing actually work inside complex organizations. I started in digital in the
            early 2000s, moved through executive marketing roles in healthcare and agency work, led
            systemwide marketing for Tennessee&apos;s largest higher education system, and now serve as
            chief marketing officer of a private R1 research university in the Rocky Mountain West. I
            work at the intersection of
            strategy, data, and storytelling, and I believe the best marketing is both honest and
            effective.
          </p>
        </div>
      </section>
      <ImageBand src="/band-conference.jpg" alt="Matthew Gann at a professional conference" position="center 15%" priority />

      {/* Roles */}
      <section aria-labelledby="roles-heading" className="pt-16 pb-8 md:pt-24 md:pb-16">
        <CareerRail roles={experience} />
      </section>

      {/* Credentials, affiliations, service: a mosaic of tiles on the dark ground */}
      <section aria-labelledby="ledger-heading" style={{ background: "var(--dark)", color: "var(--on-dark)" }}>
        <Reveal>
          <div className="page-x pt-20 pb-12 md:pt-28 md:pb-16">
            <h2 id="ledger-heading" className="t-headline max-w-[16ch]" style={{ color: "var(--on-dark)" }}>
              Credentials, affiliations, and{" "}
              <span className="scrawl scrawl-wait scrawl-on-dark">
                service.
                <svg viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden>
                  <path d="M4 14 C 60 4, 120 20, 190 10 S 320 6, 396 15" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="page-x pb-20 md:pb-28">
            <div className="mosaic">
            <Tile title="Education & Credentials" span={7} i={0}>
              <dl className="m-0 grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {education.map((edu) => (
                  <div key={edu.institution}>
                    <dt className="glance-value">{edu.institution}</dt>
                    {edu.credentials.map((c) => (
                      <dd key={c} className="m-0 mt-2 t-small" style={{ color: "var(--on-dark-soft)" }}>
                        {c}
                      </dd>
                    ))}
                  </div>
                ))}
              </dl>
            </Tile>

            <Tile title="Research Areas" span={5} i={1}>
              <ul className="list-none m-0 p-0 flex flex-col gap-4">
                {researchAreas.map((area) => (
                  <li key={area} className="glance-value">
                    {area}
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile title="Awards" span={5} i={2}>
              <ul className="list-none m-0 p-0 flex flex-col gap-4">
                {awards.map((award) => (
                  <li key={award} className="glance-value">
                    {award}
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile title="Skills & Expertise" span={7} i={3}>
              <ul className="glance-list list-none m-0 p-0 grid sm:grid-cols-2 gap-x-8">
                {skills.map((skill) => (
                  <li key={skill} className="t-body font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile title="Community, Service & Speaking" span={7} i={4}>
              <ul className="list-none m-0 p-0 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {community.map((item) => (
                  <li key={item.org}>
                    <p className="t-body font-semibold m-0">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline transition-colors hover:text-[var(--accent-soft)]"
                        >
                          {item.org} ↗
                        </a>
                      ) : (
                        item.org
                      )}
                    </p>
                    <p className="t-small m-0 mt-1" style={{ color: "var(--on-dark-soft)" }}>
                      {item.role}
                    </p>
                  </li>
                ))}
              </ul>
            </Tile>

            <Tile title="Memberships" span={5} i={5}>
              <ul className="glance-list list-none m-0 p-0">
                {memberships.map((m) => (
                  <li key={m} className="t-body font-medium">
                    {m}
                  </li>
                ))}
              </ul>
            </Tile>
            </div>
          </div>
        </Reveal>
      </section>
      <ContactCta />
    </>
  );
}
