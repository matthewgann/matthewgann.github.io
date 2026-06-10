import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Matthew Gann, Ph.D.",
  description: "Career history, expertise, and credentials of Matthew Gann, Ph.D.",
};

const experience = [
  {
    org: "University of Denver",
    location: "Denver, Colorado",
    roles: [
      {
        title: "Associate Vice Chancellor for Marketing and Brand Strategy",
        highlight: "Serves as chief marketing officer for a private R1 research university with 10 schools, colleges, and 18 Division I sports programs.",
      },
    ],
  },
  {
    org: "Tennessee Board of Regents",
    location: "Nashville, Tennessee",
    roles: [
      {
        title: "Associate Vice Chancellor for Marketing, Digital Strategy, and Public Relations",
        highlight: "Served as systemwide CMO for Tennessee's largest higher education system — 37 colleges and approximately 165,000 students.",
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
      },
    ],
  },
  {
    org: "Wellness Healthcare",
    location: "Cookeville, Tennessee",
    roles: [
      {
        title: "Vice President of Marketing and Promotions",
        highlight: "Served as CMO for one of the South's largest durable medical suppliers.",
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
    credentials: ["Bachelor of Science, Business Administration / Management Information Systems"],
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

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl mb-2" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
          Matthew Gann, Ph.D.
        </h1>
        <p className="text-lg mb-1" style={{ color: "var(--text-muted)" }}>
          Marketing &amp; Communications Executive · Denver, Colorado
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
          <a href="mailto:matthew@matthewgann.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
            matthew@matthewgann.com
          </a>
          <a href="https://linkedin.com/in/matthewgann" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
            linkedin.com/in/matthewgann
          </a>
        </div>
      </div>

      <hr className="mb-12" style={{ borderColor: "var(--border)" }} />

      {/* Summary */}
      <section className="mb-14">
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
      </section>

      <hr className="mb-12" style={{ borderColor: "var(--border)" }} />

      {/* Experience */}
      <section className="mb-14">
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
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {job.location}
                </span>
              </div>
              <div className="space-y-6 pl-0 sm:pl-4" style={{ borderLeft: "2px solid var(--border)" }}>
                {job.roles.map((role) => (
                  <div key={role.title} className="pl-4 sm:pl-6">
                    <p
                      className="text-base font-medium mb-2"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {role.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                      {role.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="mb-12" style={{ borderColor: "var(--border)" }} />

      {/* Skills & Education side by side */}
      <div className="grid sm:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
            Skills &amp; Expertise
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-xs font-medium px-3 py-1.5 tracking-wide"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-6" style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}>
            Education &amp; Credentials
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                  {edu.institution}
                </p>
                <ul className="space-y-1 list-none p-0 m-0">
                  {edu.credentials.map((c) => (
                    <li key={c} className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
