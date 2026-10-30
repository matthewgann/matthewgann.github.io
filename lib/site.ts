export const SITE_URL = "https://matthewgann.com";
export const SITE_NAME = "Matthew Gann, Ph.D.";
/** Name of the writing section. Change it here and it changes everywhere. */
export const WRITING_LABEL = "Musings";
export const WRITING_PATH = "/research";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BLOG_ID = `${SITE_URL}/research#blog`;

export const EMAIL = "matthew@matthewgann.com";
export const LINKEDIN = "https://www.linkedin.com/in/matthewgann/";

export const DEFAULT_DESCRIPTION =
  "Purpose-driven marketing and communications executive. CMO at the University of Denver.";

export const HEADSHOT = `${SITE_URL}/headshot.jpg`;

/**
 * Person entity, referenced by @id from every page so search engines and
 * answer engines resolve one consistent entity for the author.
 * Every value here already appears in page copy or the experience page.
 */
export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Matthew Gann",
  alternateName: ["Matthew Gann, Ph.D.", "Dr. Matthew Gann"],
  givenName: "Matthew",
  familyName: "Gann",
  honorificPrefix: "Dr.",
  honorificSuffix: "Ph.D.",
  jobTitle: "Associate Vice Chancellor and Chief Marketing Officer",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "University of Denver",
    url: "https://www.du.edu",
  },
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  image: {
    "@type": "ImageObject",
    url: HEADSHOT,
    width: 800,
    height: 1200,
  },
  email: `mailto:${EMAIL}`,
  address: [
    { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Nashville", addressRegion: "TN", addressCountry: "US" },
  ],
  description:
    "Purpose-driven marketing and communications executive with more than two decades of experience in higher education, healthcare, and agency leadership.",
  sameAs: [
    LINKEDIN,
    "https://www.du.edu/about/directory/matthew-gann",
    "https://www.enrollify.org/people/dr-matthew-gann",
    "https://concept3d.com/higher-ed-demand-gen-podcast/episode-113-getting-marketing-a-seat-at-the-executive-table-with-dr-matthew-gann/",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Trevecca Nazarene University" },
    { "@type": "CollegeOrUniversity", name: "Tennessee Tech University" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Doctor of Philosophy, Leadership / Organizational Intelligence",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Trevecca Nazarene University" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Organizational Leadership",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Trevecca Nazarene University" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Bachelor of Science, Business Administration / Business Management, Management Information Systems",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Tennessee Tech University" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Accredited in Public Relations (APR)",
      recognizedBy: { "@type": "Organization", name: "Public Relations Society of America" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Tennessee Certified Economic Developer",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "University of Tennessee" },
    },
  ],
  award: [
    "Otis Floyd Jr. Award for Excellence in Higher Education Administration",
    "Charles Holmes Award",
  ],
  memberOf: [
    { "@type": "Organization", name: "Public Relations Society of America" },
    { "@type": "Organization", name: "American Marketing Association" },
    { "@type": "Organization", name: "American Advertising Federation" },
    { "@type": "Organization", name: "International Leadership Association" },
    { "@type": "Organization", name: "National Council for Marketing and Public Relations" },
    { "@type": "Organization", name: "Tennessee College Public Relations Association" },
  ],
  knowsAbout: [
    "Brand Strategy",
    "Higher Education Marketing",
    "Marketing Operations",
    "Organizational Intelligence",
    "Reputation and Crisis Management",
    "Digital Strategy and Analytics",
    "Leadership and Organizational Development",
    "Enrollment Marketing",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

export function jsonLd(graph: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
