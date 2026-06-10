import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch — Matthew Gann, Ph.D.",
  description: "Contact Matthew Gann, Ph.D.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-4xl sm:text-5xl mb-4"
        style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
      >
        Get in Touch
      </h1>
      <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
        Whether you want to talk about a project, a speaking opportunity, or just connect — I&apos;d love
        to hear from you.
      </p>

      <div className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Email
          </p>
          <a
            href="mailto:matthew@matthewgann.com"
            className="text-xl font-medium"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            matthew@matthewgann.com
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/matthewgann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            linkedin.com/in/matthewgann
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Location
          </p>
          <p className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
            Denver, Colorado
          </p>
        </div>
      </div>
    </div>
  );
}
