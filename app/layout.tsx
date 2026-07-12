import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const calistoga = Calistoga({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-calistoga",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matthew Gann, Ph.D.",
  description:
    "Purpose-driven marketing and communications executive. CMO at the University of Denver.",
  metadataBase: new URL("https://matthewgann.com"),
  openGraph: {
    title: "Matthew Gann, Ph.D.",
    description:
      "Purpose-driven marketing and communications executive. CMO at the University of Denver.",
    url: "https://matthewgann.com",
    siteName: "Matthew Gann, Ph.D.",
    images: [
      {
        url: "/headshot.jpg",
        width: 800,
        height: 1200,
        alt: "Matthew Gann, Ph.D. — Purpose-Driven Marketing Executive",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Gann, Ph.D.",
    description:
      "Purpose-driven marketing and communications executive. CMO at the University of Denver.",
    images: ["/headshot.jpg"],
  },
  alternates: {
    canonical: "https://matthewgann.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matthew Gann",
  honorificSuffix: "Ph.D.",
  honorificPrefix: "Dr.",
  jobTitle: "Associate Vice Chancellor & Chief Marketing Officer",
  worksFor: {
    "@type": "Organization",
    name: "University of Denver",
    url: "https://www.du.edu",
  },
  url: "https://matthewgann.com",
  image: "https://matthewgann.com/headshot.jpg",
  description:
    "Purpose-driven marketing and communications executive with more than two decades of experience in higher education, healthcare, and agency leadership.",
  sameAs: [
    "https://www.linkedin.com/in/matthewgann/",
    "https://www.du.edu/about/directory/matthew-gann",
    "https://www.enrollify.org/people/dr-matthew-gann",
    "https://concept3d.com/higher-ed-demand-gen-podcast/episode-113-getting-marketing-a-seat-at-the-executive-table-with-dr-matthew-gann/",
  ],
  knowsAbout: [
    "Brand Strategy",
    "Higher Education Marketing",
    "Marketing Operations",
    "Organizational Intelligence",
    "Reputation Management",
    "Digital Strategy",
    "Leadership Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${calistoga.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YEV8PL99X"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YEV8PL99X');
          `}
        </Script>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
