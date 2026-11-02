/** The disclosure shown on the writing index and at the end of every post. One small italic line. */
export default function AiNote() {
  return (
    <aside aria-label="A note on AI" className="hairline-t">
      <div className="page-x py-8 grid md:grid-cols-12 gap-6">
        <p
          className="md:[grid-column:4/11] lg:[grid-column:4/10] m-0 italic"
          style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "var(--ink-soft)" }}
        >
          <span className="font-medium" style={{ color: "var(--ink)" }}>
            A note on AI.
          </span>{" "}
          The writing and ideas on this site are my own. I use AI tools to support the process:
          brainstorming concepts, surfacing relevant literature to substantiate my points, and
          proofreading for grammar, spelling, and punctuation. When I get stuck, I&apos;ll also ask
          for a nudge on how to convey a particular idea more clearly. All suggestions are reviewed
          before publishing.
        </p>
      </div>
    </aside>
  );
}
