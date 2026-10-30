#!/usr/bin/env python3
"""
Prose diagnostics for matthewgann.com.

This tool DIAGNOSES. It does not generate, and it does not decide.

Three tiers of output, and the distinction is the whole point:

  HARD GATES  genuinely binary failures. Two of them.
  CANDIDATES  instances listed with context for human judgment. Recurrence
              within one article matters more than a rate per 1,000 words.
  REFERENCE   descriptive values. No pass, no fail, no quota.

An earlier version gated on twenty measures and produced writing that passed
every check while still reading as generated. Quotas for questions, "The"
openings, contractions and semicolons were removed because they caused defects:
a question added to meet a minimum stranded a referent and broke an ending; a
contraction target produced false casualness over unchanged abstraction.

Usage:
    python3 scripts/voice-audit.py                     # every post and draft
    python3 scripts/voice-audit.py path/to/file        # one file
    python3 scripts/voice-audit.py --claims  <file>    # provenance review list
    python3 scripts/voice-audit.py --worksheet <file>  # semantic audit scaffolding
"""

import glob
import html
import re
import sys

# ---------------------------------------------------------------- extraction


def prose_from_tsx(src: str) -> list[str]:
    """Body paragraphs from a post page. Skips the byline."""
    body = src.split("space-y-5")[-1]
    out = []
    for p in re.findall(r"<p[^>]*>(.*?)</p>", body, re.S):
        p = re.sub(r"\{[^}]*\}", "", p)          # JSX expressions
        p = re.sub(r"<[^>]+>", " ", p)           # nested tags
        p = html.unescape(p)
        p = re.sub(r"\s+", " ", p).strip()
        if p and not p.startswith("Matthew Gann"):
            out.append(p)
    return out


def prose_from_md(src: str) -> list[str]:
    src = re.sub(r"<!--.*?-->", "", src, flags=re.S)   # editorial comments
    src = re.sub(r"⟨[^⟩]*⟩", "", src, flags=re.S)      # unfilled slots: not prose
    src = re.sub(r"^#.*$", "", src, flags=re.M)        # headings
    out = []
    for block in src.split("\n\n"):
        b = re.sub(r"\s+", " ", block).strip()
        if not b or b.startswith(("---", ">", "|")) or b.startswith("Matthew Gann"):
            continue
        b = re.sub(r"^[-*]\s+|^\d+[.)]\s+", "", b)   # list items are prose here
        if b:
            out.append(b)
    return out


def load(path: str) -> list[str]:
    src = open(path, encoding="utf-8").read()
    return prose_from_tsx(src) if path.endswith(".tsx") else prose_from_md(src)


def raw(path: str) -> str:
    return open(path, encoding="utf-8").read()


def sentences(text: str) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", text) if s.strip()]


# ------------------------------------------------------------------- patterns
# Each produces CANDIDATES. A single hit is usually fine. Recurrence is the signal.

CANDIDATES = [
    ("false contrast, two sentences",
     re.compile(r"\b(isn['’]t|is\s+not|aren['’]t|are\s+not|doesn['’]t|does\s+not|"
                r"don['’]t|do\s+not|won['’]t|will\s+not)\b[^.?!]{0,40}[.?!]\s+"
                r"(It['’]s|It\s+is|They['’]re|That['’]s|That\s+is)\s+", re.I),
     "legitimate when the rejected term is one the reader actually holds"),

    ("false contrast, semicolon",
     re.compile(r"\b(is\s+not|isn['’]t|are\s+not|aren['’]t|does\s+not|doesn['’]t|"
                r"do\s+not|don['’]t|did\s+not|didn['’]t|will\s+not|won['’]t)\b"
                r"[^.?!;]{0,110};", re.I),
     "punctuation does not redeem the construction; same budget as above"),

    ("cleft construction",
     re.compile(r"(^|\.\s+)(What\s+[^.?!]{3,60}?\s+(is|was|are)\b"
                r"|It\s+(is|was)\s+[^.?!]{3,50}?\s+that\b"
                r"|That\s+(is|was)\s+what\b)", re.I),
     "artificial emphasis; usually plain word order is better"),

    ("rule of three",
     re.compile(r"\b\w+(?:\s+\w+){0,2},\s+\w+(?:\s+\w+){0,2},\s+and\s+\w+(?:\s+\w+){0,2}\b"),
     "fine when the three items are the real set; a tell when used for cadence"),

    ("universal prediction",
     re.compile(r"\b(institutions?|organizations?|schools?|companies|leaders?)\s+"
                r"(that|who)\b[^.?!]{5,80}?\b(will|are\s+the\s+ones)\b", re.I),
     "legitimate when the relative clause names which ones, with specifics"),

    ("vague referent",
     # "the thing you bought" and "the gap between those two questions" are
     # grounded by what follows. Only bare, unqualified uses are candidates.
     re.compile(r"\b(the thing|the statement|the gap|the dynamic|the piece)"
                r"(?!\s+(you|I|we|they|he|she|that|which|who|between|in|of|"
                r"about|behind|is|was|here))\b"
                r"|\bone of those\b|\bthat whole thing\b|\bthe larger (thing|story)\b", re.I),
     "check the antecedent is obvious on a normal read"),

    ("bare attribution sentence",
     re.compile(r"(^|\.\s+)(According\s+to\b|A\s+(study|survey|report)\s+(by|from)\b"
                r"|Research\s+(shows|suggests|finds)\b|My\s+(own\s+)?(doctoral\s+)?research\b)", re.I),
     "hang the source on a noun already in the sentence instead"),

    ("demonstrative pointing at an abstraction",
     re.compile(r"(^|\.\s+)That\s+(closeness|background|instinct|compounding|shift|"
                r"dynamic|tension|gap|pattern|distinction|realization|clarity|"
                r"conviction|logic|framing)\b", re.I),
     "point at something the reader just watched, not at your own last abstraction"),

    ("uncontracted negation",
     re.compile(r"\b(do|does|did|is|are|was|were|have|has|had|would|could|will|can|am)"
                r"\s+not\b", re.I),
     "sometimes right for emphasis; a run of them is the register collapsing"),

    ("stiff vocabulary",
     re.compile(r"\b(operationaliz\w+|utiliz\w+|synerg\w+|holistic|paradigm|"
                r"intentionality|impactful|actionable|underscore[sd]?)\b", re.I),
     "reads as credentialed rather than expert"),

    ("simulated transition",
     re.compile(r"(^|\.\s+)(But here['’]s the thing|That['’]s where (this|it) gets "
                r"interesting|And that matters because|Here['’]s the (thing|kicker)|"
                r"Let['’]s be honest)\b", re.I),
     "connective language covering a gap in the thought"),
]

APHORISM = re.compile(
    r"\b\w+\s+(is|are)\s+(just\s+)?(the\s+)?\w+(\s+\w+){0,3}\.\s*$"
    r"|\b(everything|anything|nothing)\s+else\s+is\b", re.I)

DASHES = re.compile(r"[—–]")
PLACEHOLDER = re.compile(r"⟨|\[AUTHOR TO SUPPLY")

CLAIM = re.compile(
    r"\b(I|we)\s*['’]?\s*(ve|d|m|ll)?\s*"
    r"(have|had|has|did|do|was|were|am|remember|ran|run|built|made|said|told|"
    r"spent|sat|watched|saw|felt|learned|keep|kept|started|stopped|worked|"
    r"asked|killed|hired|fired|passed|chose|decided|noticed|used\s+to|"
    r"think|thought|believe|realized|got|took|wrote|read|studied|presented)\b", re.I)

TEXTURE = re.compile(
    r"\b(the\s+good\s+\w+|smell(ed|s)?\s+of|you\s+can\s+feel|felt\s+like\s+a\s+\w+day|"
    r"butcher\s+paper|whiteboard|fluorescent|stale|(two|three|four|five)\s+best|"
    r"at\s+\d{1,2}\s*(am|pm))\b", re.I)

REFERENT = re.compile(r"\b(this|that|it|they|these|those|thing|issue|gap|statement|"
                      r"process|approach|conversation)\b", re.I)


# ------------------------------------------------------------------- analysis


def measure(paras, src):
    text = " ".join(paras)
    n = len(text.split())
    sents = sentences(text)

    # Rhythm is scored over the body. Scene openings run on short fragments and
    # definite articles, which is exactly what rhythm targets penalise, and that
    # is how a warm opening gets turned clinical.
    body = paras[2:] if len(paras) > 4 else paras
    bsents = sentences(" ".join(body))
    blens = [len(x.split()) for x in bsents] or [0]

    def has_verb(x):
        return bool(re.search(r"\b(is|are|was|were|has|have|had|do|does|did|can|will|"
                              r"would|goes?|went|comes?|came|takes?|took|gets?|got|"
                              r"makes?|made|keeps?|tells?|shows?|stays?|means?|"
                              r"needs?|costs?|fades?)\b", x, re.I))

    plens = [len(p.split()) for p in paras] or [0]
    mean = sum(blens) / len(blens)
    return {
        "words": n, "paras": len(paras),
        "sent_mean": round(mean, 1),
        "sent_sd": round((sum((x - mean) ** 2 for x in blens) / len(blens)) ** 0.5, 1),
        "short_pct": round(100 * sum(1 for x in bsents
                                     if len(x.split()) <= 8 and has_verb(x)) / len(blens)),
        "long_pct": round(100 * sum(1 for x in blens if x >= 30) / len(blens)),
        "para_words": round(sum(plens) / len(plens), 1),
        "questions": text.count("?"), "semis": text.count(";"),
        "contr": round(len(re.findall(r"\b\w+['’](s|t|re|ve|ll|d|m)\b", text)) / (n / 100), 1) if n else 0.0,
        "the_open": round(100 * sum(1 for s in sents if s.split()
                          and s.split()[0].strip('"“').lower() == "the") / len(sents)) if sents else 0,
        "figures": len(re.findall(r"\b\d[\d,.]*\s*(?:percent|%)", text)),
        "dashes": len(DASHES.findall(text)),
        "placeholders": len(PLACEHOLDER.findall(src)),
    }


def candidates(paras):
    text = " ".join(paras)
    out = []
    for label, pat, note in CANDIDATES:
        hits = [m.group(0).strip() for m in pat.finditer(text)]
        if hits:
            out.append((label, hits, note))
    return out


# ------------------------------------------------------------------ reporting

C = {"b": "\033[1m", "r": "\033[31m", "y": "\033[33m", "d": "\033[2m", "x": "\033[0m"}


def report(path, quiet=False):
    paras = load(path)
    if not paras:
        print(f"{path}: no prose found")
        return
    m = measure(paras, raw(path))
    name = path.split("/research/")[-1].replace("/page.tsx", "").replace("drafts/", "")
    print(f"\n{C['b']}{name}{C['x']}")

    if m["dashes"]:
        print(f"  {C['r']}HARD GATE{C['x']}  {m['dashes']} em/en dash(es)")
    if m["placeholders"]:
        print(f"  {C['y']}unfilled placeholders{C['x']}  {m['placeholders']} "
              f"(fine in a draft, a gate before publishing)")

    print(f"  {C['d']}reference  {m['words']}w / {m['paras']} paras / sent mean {m['sent_mean']} "
          f"(sd {m['sent_sd']}) / {m['short_pct']}% short / {m['long_pct']}% long / "
          f"{m['para_words']}w per para{C['x']}")
    print(f"  {C['d']}           {m['questions']} questions / {m['semis']} semicolons / "
          f"{m['contr']} contr per 100w / {m['the_open']}% open 'The' / {m['figures']} figures{C['x']}")
    print(f"  {C['d']}           venue reference: 700-1100w, sent mean ~18, ~50w per para{C['x']}")

    cands = candidates(paras)
    if not cands:
        print("  no rhetorical candidates flagged")
    for label, hits, note in cands:
        recurs = len(hits) >= 3
        flag = f"{C['y']}recurs x{len(hits)}{C['x']}" if recurs else f"{C['d']}x{len(hits)}{C['x']}"
        print(f"  {label}  {flag}")
        if recurs or not quiet:
            for h in hits[:4]:
                print(f"      {C['d']}{h[:110]}{C['x']}")
            print(f"      {C['d']}-> {note}{C['x']}")

    last_s = sentences(paras[-1])
    last = last_s[-1] if last_s else ""
    if last and APHORISM.search(last) and len(last.split()) <= 14:
        print(f"  {C['y']}closing line may be aphoristic{C['x']}")
        print(f"      {C['d']}{last}{C['x']}")
        print(f"      {C['d']}-> would it still sound plausible on an unrelated leadership post?{C['x']}")


def claims(path):
    print(f"\n{C['b']}{path}{C['x']}  provenance review")
    n = 0
    for p in load(path):
        for s in sentences(p):
            c, t = CLAIM.search(s), TEXTURE.search(s)
            if not (c or t):
                continue
            n += 1
            tag = "claim" if c else ""
            if t:
                tag = (tag + "/" if tag else "") + f"texture: {t.group(0).strip()}"
            print(f"  [{tag}]\n    {s}")
    print(f"\n  {n} to verify. Anything you cannot trace to something Matthew actually")
    print("  said is fabricated. Ask, mark a placeholder, or write the plain version.")


def worksheet(path):
    paras = load(path)
    print(f"\n{C['b']}{path}{C['x']}  semantic audit worksheet\n")
    print(f"{C['b']}1. ADJACENCY{C['x']}  complete each line, or repair the structure.")
    for i in range(1, len(paras)):
        prev = " ".join(paras[i - 1].split()[:9])
        cur = " ".join(paras[i].split()[:9])
        print(f"  P{i}->P{i+1}  because [{prev}...] established ____, [{cur}...] can now ____")
    print(f"\n{C['b']}2. REFERENTS{C['x']}  name the antecedent for each, or rewrite.")
    for i, p in enumerate(paras, 1):
        hits = sorted(set(m.group(0).lower() for m in REFERENT.finditer(p)))
        if hits:
            print(f"  P{i}: {', '.join(hits)}")
    print(f"\n{C['b']}3. CLAIM SUPPORT{C['x']}  supplied experience, external evidence,")
    print("   reasoning developed here, or framed personal judgment?")
    for i, p in enumerate(paras, 1):
        for s in sentences(p):
            if re.search(r"\b(most|every|all|never|always|the only|nobody|everyone)\b", s, re.I):
                print(f"  P{i}: {s[:110]}")
    print(f"\n{C['b']}4. METAPHOR{C['x']}  does each still work when extended?")
    print(f"\n{C['b']}5. ENDING ENTAILMENT{C['x']}  which earlier material makes this possible?")
    if paras:
        print(f"  {paras[-1][:200]}")
    print(f"\n{C['b']}6. GENERICITY{C['x']}  which sentences could appear unchanged in an")
    print("   unrelated leadership article? A concentration means the thought has gone.")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if "--claims" in sys.argv:
        for p in args:
            claims(p)
        return
    if "--worksheet" in sys.argv:
        for p in args:
            worksheet(p)
        return
    paths = args or (
        [p for p in sorted(glob.glob("app/research/**/page.tsx", recursive=True)) if p.count("/") >= 4]
        + [p for p in sorted(glob.glob("drafts/**/*.md", recursive=True))
           if "review/" not in p and not p.endswith(("EDITS.md", "case-history.md"))]
    )
    for p in paths:
        try:
            report(p, quiet=len(paths) > 3)
        except Exception as e:
            print(f"\n{p}: could not read ({e})")
    print()


if __name__ == "__main__":
    main()
