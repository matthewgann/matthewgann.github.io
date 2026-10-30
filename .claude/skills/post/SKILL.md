---
name: post
description: Draft or revise a post for matthewgann.com. Semantic structure before prose, semantic review before measurement. Use when writing a new post, revising one under content/posts/, or working a draft in drafts/.
---

# Research post

`STYLE.md` is the standard. Read it first. It is a priority hierarchy, not a rule list.

**The hierarchy, and it resolves every conflict below:**

1. Truth and provenance
2. Meaning and referential clarity
3. Logical and emotional continuity
4. The author's actual stance toward the reader
5. Integrity of the post type
6. Natural prose and rhythm
7. Venue conventions
8. Statistical style diagnostics

A lower priority may never damage a higher one. **Metrics diagnose. They do not generate.**

---

## The two non-negotiables

**Provenance.** Every assertion about Matthew's life, experience, behavior, emotions, surroundings,
history or actions traces to something he actually supplied. Names, numbers, durations, places,
sensory details, emotions, habits, conversations, past actions, accomplishments, mistakes,
magnitudes.

Never upgrade participation into leadership, observation into action, or familiarity into personal
experience. If he attended a session, he did not run it.

Three legal moves when material is missing: **ask, mark a placeholder, or write the precise but
unembellished version.** Precision is not color.

**No em dashes or en dashes.**

---

## Phase 1: Collect the anchor

Interview when the piece depends on experience. Do not draft from a topic alone.

The anchor does not have to be a story. It may be an experience, observation, tension, decision,
question, conversation, fact, contradiction, or something he cannot stop thinking about.

**Ask for concrete facts before interpretation.** What happened, who was involved, what he expected,
what surprised him, what he got wrong, what changed, and any wording he remembers using.

**Capture his phrasing.** It carries stance and diction, which are the parts hardest to reconstruct.

Use `AskUserQuestion`. Two rounds is usually enough.

## Phase 2: Name the reader relationship

One sentence, written down before anything else:

- "I am trying to convince the reader that…" (argument)
- "I am trying to name an experience the reader may recognize…" (solidarity)
- "I noticed something and I want to think about why it stayed with me…" (field note)

This determines the ending and the evidence bar. Definitions in `STYLE.md` §5.

## Phase 3: Build the semantic spine

Before prose. List the major thought moves. For each:

1. What does the reader understand here that they did not before?
2. Why does this belong immediately after the previous move?
3. What does it make possible next?

Check every adjacent pair: *"Because the previous move established ____, this one can now ____."*
If you cannot complete that sentence, fix the structure. **Do not paper over it with a transition
phrase.**

## Phase 4: Draft

Write from the spine. **Do not optimize against statistics while drafting.**

Voice comes from the author model in `STYLE.md` §2: his diction, stance, degree of certainty,
relationship with the reader. Not his conversational sentence architecture.

Venue conventions cover scale and evidence practice only. Never average the two into a generic
higher education thought-leadership voice.

## Phase 5: Semantic audit

```bash
python3 scripts/voice-audit.py --worksheet <file>
```

That prints scaffolding. The judgments are yours. Six passes, in `STYLE.md` §10:

referent, paragraph adjacency, claim support, metaphor, ending entailment, genericity.

This catches what counting cannot: a metaphor that stops working when extended, a demonstrative with
no antecedent, a closing line asserting more than the body established.

## Phase 6: Provenance audit

```bash
python3 scripts/voice-audit.py --claims <file>
```

Every first-person claim and texture detail listed. Confirm each against the interview. **Report
anything you cannot trace rather than hoping it passes.**

## Phase 7: Rhetorical pattern audit

Read for recurrence, not for single instances. Any one false contrast, rule of three, cleft or
fragment may be legitimate. The same move three times is architecture.

**Do not resolve a flagged pattern by changing punctuation or swapping a word.**

## Phase 8: Measurement, last

```bash
python3 scripts/voice-audit.py <file>
```

Hard gates: dashes, and unfilled placeholders before publishing. Everything else is a candidate or a
reference value. There are no quotas for questions, contractions, semicolons or "The" openings.

**After any revision prompted by a metric, reread the whole paragraph for warmth, meaning and
continuity. If the prose got less human while the number improved, restore the better prose.**

---

## Usable out of the gate

The first complete draft should already have a coherent line of thought, clear paragraph movement, no
invented biography, natural sentence variation, an ending earned by the body, and enough of his
diction to sound like the same person.

**Do not knowingly leave AI-shaped prose for a later humanization pass.**

---

## Revising an existing post

Skip Phases 1 to 3. One rule instead: **only the author's existing words, a cut, or a marked slot may
appear.**

Then Phases 5 through 8 as normal. Where the post substitutes an assertion for something that
happened, mark a slot with a word count and a specific question rather than writing around it.

Worked examples: `drafts/rewrites/`.

---

## Writing to pitch Inside Higher Ed

Voice identical, shape different. Venue reference values are in `scripts/ihe-benchmark.json` and
`STYLE.md`. Roughly 700 to 1,100 words, a one-sentence deck, three to six subheads, named sources
hung on nouns rather than standalone attribution sentences, and an ending that commits.

The scene-based first-person opening and practitioner authority, which are the hardest things to
fake, Matthew already does. The gap is citation.

---

## Publishing to the site

A post is one Markdown file: `content/posts/<slug>.md`. The filename is the URL slug and must
never change after publishing; the URL is `/research/YYYY/MM/<slug>` with the year and month
taken from the `date` field. Scaffold one with `npm run new-post -- "Title"`.

Frontmatter:

```
---
title: "Title as it should appear"
date: 2026-11-04
excerpt: "One or two sentences for the listing, feed, and link previews."
image: "/photo.jpg"          # optional, under public/
imageAlt: "What is in it"    # required when image is set
imagePosition: "center 30%"  # optional
draft: true                  # true: renders locally, excluded from production
---
```

Body is plain Markdown. Paragraphs separated by blank lines, `## ` for section headings, `*text*`
for emphasis. Write real apostrophes and quotes; nothing is escaped. No categories.

The listing, feed, schema, newer/older links, sitemap, and `<head>` all derive from the file.
There is no second place to register a post.

Preview with `npm run dev`. Publish by setting `draft: false` and committing to `main`; the deploy
runs on push. Matthew can also edit in a browser through Pages CMS, configured in `.pages.yml`.
Never publish without being asked.
