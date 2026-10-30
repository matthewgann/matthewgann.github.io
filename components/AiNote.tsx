/** The disclosure shown on the writing index and at the end of every post. */
export default function AiNote() {
  return (
    <section className="hairline-t" style={{ background: "var(--bg-raised)" }}>
      <div className="page-x py-14 grid md:grid-cols-12 gap-6">
        <h2 className="md:col-span-3 t-small font-semibold m-0">A note on AI</h2>
        <p className="md:col-span-7 lg:col-span-6 t-small m-0" style={{ color: "var(--ink-soft)" }}>
          The writing and ideas on this site are my own. I use AI tools to support the process:
          brainstorming concepts, surfacing relevant literature to substantiate my points, and
          proofreading for grammar, spelling, and punctuation. When I get stuck, I&apos;ll also ask
          for a nudge on how to convey a particular idea more clearly. All suggestions are reviewed
          before publishing.
        </p>
      </div>
    </section>
  );
}
