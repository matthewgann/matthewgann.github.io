import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
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
  openGraph: {
    title: "Matthew Gann, Ph.D.",
    description: "Purpose-driven marketing and communications executive.",
    url: "https://matthewgann.github.io",
    siteName: "Matthew Gann, Ph.D.",
  },
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
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
