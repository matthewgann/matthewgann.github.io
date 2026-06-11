export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    slug: "responsibility-without-authority",
    title: "Responsible for the Sale, Not the Product",
    date: "June 2026",
    category: "Higher Education",
    excerpt:
      "Higher education marketers are held accountable for enrollment outcomes they don't control. That's a structural problem. In some states, it has gotten much worse.",
  },
  {
    slug: "data-driven-differentiation",
    title: "Data-Driven Differentiation in Higher Education",
    date: "June 2026",
    category: "Higher Education",
    excerpt:
      "Most institutions know they need to stand out. Few have a repeatable system for figuring out what they actually stand out for.",
  },
  {
    slug: "purpose-driven-leadership",
    title: "What Purpose-Driven Leadership Actually Looks Like",
    date: "June 2026",
    category: "Leadership",
    excerpt:
      "Purpose isn't a mission statement on a wall. It's the filter through which every decision gets made, from hiring to campaign strategy.",
  },
  {
    slug: "marketing-maturity-in-higher-ed",
    title: "Marketing Maturity in Higher Education",
    date: "May 2026",
    category: "Higher Education",
    excerpt:
      "Most universities are still treating marketing as a production function. The ones winning the future are building it as a strategic capability.",
  },
];

export default posts;
