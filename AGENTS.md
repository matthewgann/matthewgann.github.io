<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Writing

Prose for this site follows `STYLE.md`, which is a priority hierarchy rather than a rule list.
Use the `post` skill to draft or revise.

Resolve conflicts in this order, and never let a lower one damage a higher one:
truth and provenance, meaning and referential clarity, continuity, the author's stance toward the
reader, post type, natural prose, venue conventions, statistical diagnostics.

Two non-negotiables. Every assertion about Matthew's life must trace to something he actually
supplied; when material is missing, ask, mark a placeholder, or write the plain version. And no em
dashes.

Semantic review before measurement: `python3 scripts/voice-audit.py --worksheet <file>`, then
`--claims`, then the plain run. Metrics diagnose. They do not generate.
