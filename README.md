# CTI Brief — deployment

Static site. No build step, no server-side code.

## Files
- index.html    the dashboard (open this)
- cti-data.js   all brief content — this is the only file you edit weekly
- support.js    runtime the dashboard needs; do not edit
- .nojekyll     tells GitHub Pages to serve files as-is
- archive/      past weeks (add your own; the header "Archive" link points here)

## Deploy to GitHub Pages
1. Copy the contents of this folder to the root of your Pages repo (or to /docs).
2. Commit and push.
3. Settings -> Pages -> Source: the branch and folder you used.

All four files must sit in the same directory. Opening index.html straight off
your local disk works too.

## Weekly update
Edit cti-data.js only. Its shape:

  window.CTI = {
    WEEK_RANGE: 'Week of ...',
    POSTURE:    { level, text },
    KJ:         [ { num, html } ],          // <b>...</b> renders as accent bold
    STORIES:    [ { key, title, body, src, badge, tags } ],
    CVES:       [ { key, num, score, sub, flags, level } ],
    D:          { <key>: { overview, technical[], mitigation[], response[], iocs[] } },
    META:       { <key>: { status, cvss, admiralty, conf, sectors[], attack[], iocDate } },
    SOURCES:    [ { group, links[] } ],
    CORRECTIONS:[ { date, item, was, now, why } ]
  };

STORIES[].key ties a story to its D and META entries and to any CVE row sharing
that key — keep the keys consistent and everything else wires up on its own.
Counters, filter chips, sector chips, the IOC workbench and CSV export are all
derived from this data; nothing in index.html needs touching.

Response/technical entries beginning "DEFENDER XDR KQL —" or "SENTINEL KQL —"
are detected automatically and rendered as collapsible query blocks.

## Archiving a week
Before swapping in new data, copy the whole folder to archive/YYYY-MM-DD/ and
link it from your archive index.

## Notes
- Theme (dark/light) and pins are stored per browser in localStorage.
- Fonts load from Google Fonts; offline use falls back to a system sans.
