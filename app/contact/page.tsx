import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ImageBand from "@/components/ImageBand";

export const metadata: Metadata = {
  title: "Get in Touch | Matthew Gann, Ph.D.",
  description: "Contact Matthew Gann, Ph.D.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#FFFEF9" }}>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <h1
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "var(--font-calistoga), serif", color: "var(--foreground)" }}
          >
            Get in Touch
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
            Whether you want to talk about a project, a speaking opportunity, or just connect, I&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      <ImageBand src="/band-doorway.jpg" alt="Matthew Gann in a gothic archway" position="center 15%" />

      {/* Contact details */}
      <section style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="grid sm:grid-cols-3 gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Email
                </p>
                <a
                  href="mailto:matthew@matthewgann.com"
                  className="text-lg font-medium"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  matthew@matthewgann.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/matthewgann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  linkedin.com/in/matthewgann
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  Location
                </p>
                <p className="text-lg font-medium" style={{ color: "var(--foreground)" }}>
                  Denver, Colorado
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </>
  );
}
