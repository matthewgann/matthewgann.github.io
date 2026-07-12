export type Post = {
  slug: string;
  path: string;
  title: string;
  date: string;
  dateISO: string;
  category: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    slug: "great-players-want-the-truth",
    path: "/research/2026/07/great-players-want-the-truth",
    title: "Great Players Want the Truth",
    date: "July 2026",
    dateISO: "2026-07-12",
    category: "Leadership",
    excerpt:
      "The coaches who built women's basketball didn't protect their best players from hard coaching. They gave them more of it. Most organizations do the opposite, and it's costing them.",
  },
  {
    slug: "return-on-objectives",
    path: "/research/2026/07/return-on-objectives",
    title: "The Real ROO",
    date: "July 2026",
    dateISO: "2026-07-08",
    category: "Higher Education",
    excerpt:
      "ROI tells you the money came back. ROO asks whether you did what you set out to do. In higher education, the gap between those two questions is where most strategy breaks down.",
  },
  {
    slug: "one-year-in",
    path: "/research/2026/06/one-year-in",
    title: "One Year In",
    date: "June 2026",
    dateISO: "2026-06-15",
    category: "Leadership",
    excerpt:
      "One year at the University of Denver. On making hard decisions on purpose, why brand marketing is an investment the sector keeps getting wrong, and what commencement makes undeniably clear.",
  },
  {
    slug: "future-of-higher-ed-websites",
    path: "/research/2026/06/future-of-higher-ed-websites",
    title: "The Higher Ed Website Is Dead. We Just Haven't Buried It Yet.",
    date: "June 2026",
    dateISO: "2026-06-10",
    category: "Higher Education",
    excerpt:
      "Higher education websites are still built like org charts with a search bar. What comes next looks nothing like that.",
  },
  {
    slug: "responsibility-without-authority",
    path: "/research/2026/06/responsibility-without-authority",
    title: "Responsible for the Sale, Not the Product",
    date: "June 2026",
    dateISO: "2026-06-10",
    category: "Higher Education",
    excerpt:
      "Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse.",
  },
  {
    slug: "data-driven-differentiation",
    path: "/research/2026/05/data-driven-differentiation",
    title: "Data-Driven Differentiation in Higher Education",
    date: "May 2026",
    dateISO: "2026-05-01",
    category: "Higher Education",
    excerpt:
      "Most institutions know they need to stand out. Few have a repeatable system for figuring out what they actually stand out for.",
  },
  {
    slug: "purpose-driven-leadership",
    path: "/research/2026/04/purpose-driven-leadership",
    title: "What Purpose-Driven Leadership Actually Looks Like",
    date: "April 2026",
    dateISO: "2026-04-01",
    category: "Leadership",
    excerpt:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
  },
  {
    slug: "marketing-maturity-in-higher-ed",
    path: "/research/2026/03/marketing-maturity-in-higher-ed",
    title: "Marketing Maturity in Higher Education",
    date: "March 2026",
    dateISO: "2026-03-01",
    category: "Higher Education",
    excerpt:
      "Most universities are still treating marketing as a production function. The ones winning the future are building it as a strategic capability.",
  },
];

export default posts;
