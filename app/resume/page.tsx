import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ImageBand from "@/components/ImageBand";

export const metadata: Metadata = {
  title: "Resume | Matthew Gann, Ph.D.",
  description: "Career history, expertise, and credentials of Matthew Gann, Ph.D.",
};

const experience = [
  {
    org: "Independent Marketing Consultant",
    location: "Nashville, Tennessee · Denver, Colorado",
    roles: [
      {
        title: "Marketing Strategy Consultant",
        highlight: "Has maintained an active consulting practice throughout his career, working with organizations across healthcare, legal, business services, retirement planning, real estate, medical aesthetics, and more.",
        overview: "Consulting engagements have spanned brand development, digital strategy, web presence, marketing operations, crisis communications, and organizational positioning. Clients have ranged from independent practitioners and regional businesses to multi-location enterprises navigating growth, repositioning, or competitive pressure. This cross-sector work has built fluency across markets and organizational types that sharpens the perspective brought to every leadership role.",
      },
    ],
  },
  {
    org: "University of Denver",
    location: "Denver, Colorado",
    roles: [
      {
        title: "Associate Vice Chancellor for Marketing and Brand Strategy",
        highlight: "Serves as chief marketing officer for a private R1 research university with 10 schools and colleges and 18 Division I sports programs.",
        overview: "Leads the university's full marketing and communications enterprise, including brand strategy, enrollment marketing, digital properties, public relations, creative services, and internal communications. Responsible for building the institution's competitive position across a complex landscape of graduate, professional, and undergraduate programs. Developed a data-driven brand differentiation framework, led the creation of The Denver Difference brand platform, and built a five-year marketing maturity model to guide the function's long-term development.",
      },
    ],
  },
  {
    org: "Tennessee Board of Regents",
    location: "Nashville, Tennessee",
    roles: [
      {
        title: "Associate Vice Chancellor for Marketing, Digital Strategy, and Public Relations",
        highlight: "Served as systemwide CMO for Tennessee's largest higher education system, overseeing 37 colleges and approximately 165,000 students.",
        overview: "Led marketing, digital strategy, and public relations across a highly decentralized system of community colleges and universities serving every region of the state. Built shared marketing frameworks, technology platforms, and campaign infrastructure that elevated the visibility and enrollment performance of member institutions. Responsible for system-wide brand standards, digital infrastructure, communications strategy, and media relations in an environment with diverse institutional identities and missions.",
      },
    ],
  },
  {
    org: "Tennessee Tech University",
    location: "Cookeville, Tennessee",
    roles: [
      {
        title: "Director of Web and Digital Media",
        highlight: "Led digital strategy, public-facing web properties, and digital marketing for a 10,000-student university.",
        overview: "Directed a significant modernization of the university's web infrastructure and built the digital marketing capability connecting prospective students to programs and resources. Established analytics practices and CRM integrations that improved the institution's ability to measure and optimize digital performance across the enrollment funnel.",
      },
    ],
  },
  {
    org: "Wellness Healthcare",
    location: "Cookeville, Tennessee",
    roles: [
      {
        title: "Vice President of Marketing and Promotions",
        highlight: "Served as CMO for one of the South's largest durable medical equipment suppliers.",
        overview: "Oversaw brand, advertising, promotions, and market development across multiple service lines and geographic markets. Led campaigns spanning patient acquisition, physician referral development, and community health education. Developed the organization's first integrated marketing strategy and built an internal marketing team from the ground up.",
      },
    ],
  },
  {
    org: "N2 The Net",
    location: "Cookeville, Tennessee",
    roles: [
      {
        title: "Director of Design and Development",
        highlight: "Managed 200+ digital properties simultaneously, increasing revenues by over 300% in two years.",
        overview: "Led design and development for a regional digital agency serving clients across healthcare, legal, retail, and professional services. Drove revenue growth through expanded service offerings, streamlined production processes, and a client retention strategy built on proactive communication and measurable results. Built and managed a design and development team while maintaining hands-on production across a high-volume portfolio.",
      },
    ],
  },
];

const education = [
  {
    institution: "Trevecca Nazarene University",
    credentials: [
      "Doctor of Philosophy, Leadership / Organizational Intelligence",
      "Master of Organizational Leadership",
    ],
  },
  {
    institution: "Tennessee Tech University",
    credentials: ["Bachelor of Science, Business Administration / Business Management, Management Information Systems"],
  },
  {
    institution: "University of Tennessee",
    credentials: ["Tennessee Certified Economic Developer"],
  },
  {
    institution: "Public Relations Society of America",
    credentials: ["Accredited in Public Relations (APR)"],
  },
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

const awards = [
  "Otis Floyd Jr. Award for Excellence in Higher Education Administration",
  "Charles Holmes Award",
];

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

export default function ResumePage() {
  return (
    <>
      {/* Header + Summary */}
      <section style={{ background: "#FFFEF9" }}>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
              Matthew Gann, Ph.D.
            </h1>
            <p className="text-lg mb-1" style={{ color: "var(--text-muted)" }}>
              Marketing &amp; Communications Executive · Denver, Colorado
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="mailto:matthew@matthewgann.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
                matthew@matthewgann.com
              </a>
              <a href="https://linkedin.com/in/matthewgann" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                linkedin.com/in/matthewgann
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
              Summary
            </h2>
            <p className="leading-relaxed text-base" style={{ color: "var(--foreground)" }}>
              Purpose-driven, collaborative, and tech-savvy marketing and communications leader with more than
              two decades of experience developing high-performing teams and crafting compelling brands across
              higher education, healthcare, and agency sectors. Proven expertise in forging strategic relationships,
              translating organizational vision into data-driven campaigns, and measurably strengthening trust,
              engagement, and reputation.
            </p>
          </div>
        </div>
      </section>

      <ImageBand src="/band-conference.jpg" alt="Matthew Gann at a professional conference" position="center 15%" />

      {/* Experience */}
      <section style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <h2 className="text-2xl mb-10" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
              Experience
            </h2>
            <div className="space-y-12">
              {experience.map((job) => (
                <div key={job.org}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)", fontFamily: "var(--font-inter), sans-serif" }}>
                      {job.org}
                    </h3>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{job.location}</span>
                  </div>
                  <div className="space-y-6 pl-0 sm:pl-4" style={{ borderLeft: "2px solid var(--border)" }}>
                    {job.roles.map((role) => (
                      <div key={role.title} className="pl-4 sm:pl-6">
                        <p className="text-base font-medium mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-inter), sans-serif" }}>
                          {role.title}
                        </p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--foreground)" }}>
                          {role.highlight}
                        </p>
                        {role.overview && (
                          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                            {role.overview}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills & Education */}
      <section style={{ background: "#F2E9DC" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                  Skills &amp; Expertise
                </h2>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {skills.map((skill) => (
                    <li key={skill} className="text-xs font-medium px-3 py-1.5 tracking-wide"
                      style={{ background: "#FFFEF9", border: "1px solid #E0D5C8", color: "var(--foreground)" }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                  Education &amp; Credentials
                </h2>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.institution}>
                      <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>{edu.institution}</p>
                      <ul className="space-y-1 list-none p-0 m-0">
                        {edu.credentials.map((c) => (
                          <li key={c} className="text-sm" style={{ color: "var(--text-muted)" }}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Research Areas, Awards, Memberships */}
      <section style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <div className="grid sm:grid-cols-3 gap-12">
              <div>
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                  Research Areas
                </h2>
                <ul className="space-y-2 list-none p-0 m-0">
                  {researchAreas.map((area) => (
                    <li key={area} className="text-sm" style={{ color: "var(--foreground)" }}>{area}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                  Personal Awards
                </h2>
                <ul className="space-y-2 list-none p-0 m-0">
                  {awards.map((award) => (
                    <li key={award} className="text-sm" style={{ color: "var(--foreground)" }}>{award}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
                  Memberships
                </h2>
                <ul className="space-y-2 list-none p-0 m-0">
                  {memberships.map((m) => (
                    <li key={m} className="text-sm" style={{ color: "var(--foreground)" }}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Community */}
      <section style={{ background: "#1C1917" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-14">
            <h2 className="text-2xl mb-8" style={{ fontFamily: "var(--font-calistoga), serif", color: "#F5F0EB" }}>
              Community
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {community.map((item) => (
                <div key={item.org}>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "#F5F0EB" }}>{item.org}</p>
                  <p className="text-sm" style={{ color: "#A8998C" }}>{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
