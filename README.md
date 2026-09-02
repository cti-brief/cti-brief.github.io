# CTI Brief — upload package

**Edition:** Week of Aug 31 – Sep 6, 2026
**Prepared:** Sep 2, 2026 · Monday rollover + prune
**Posture:** CRITICAL

## Contents
29 stories · 37 vulnerability rows · 75 indicators · 60 hunting queries · 13 key judgments · 18 corrections

## Upload to the web root, preserving paths

    index.html                    # week strings + social card text updated
    cti-data.js                   # all brief content for this edition
    og-image.png                  # link preview, re-snapshotted this edition
    support.js                    # runtime — unchanged, upload only on first deploy
    .nojekyll                     # required for GitHub Pages, upload once
    archive/index.html            # archive listing — unchanged
    archive/archive-index.js      # NEW row: W35 2026
    archive/2026-W35.html         # NEW frozen edition (Aug 24 – Aug 30, 46 stories)
    archive/2026-W34.html         # already deployed
    archive/2026-W33.html         # already deployed

## Changed this edition
- **Overview tab rebuilt as a hunting pack.** Landing view now leads with three actions for the
  next hour (PaperCut log review, Artifactory token revocation, Langflow key rotation), each with
  its Defender/Sentinel query inline and a copy button. Below it: patch-only items with no published
  hunt content, the full posture statement collapsed behind a disclosure, and a Continuity panel of
  archive-derived figures. Stories, vulnerabilities, both workbenches, judgments and sources are
  unchanged.
- Rolled the week to Week of Aug 31 – Sep 6, 2026 and rewrote the posture statement.
- Archived the outgoing edition as `archive/2026-W35.html` and added its archive row.
- Added six stories: SonicWall SMA1000 CVE-2026-83548 / CVE-2026-83549, JFrog Artifactory
  CVE-2026-82329, Langflow CVE-2026-0768, the Softaculous Virtualizor BGP hijack,
  WatchGuard Fireware `iked`, and OpenAI Astra's capability threshold.
- Updated PaperCut (KEV Aug 31, escalated to active intrusions) and Boston Scientific.
- Pruned 23 stories across two passes; everything removed is preserved in `archive/2026-W35.html`.
- Three new key judgments (remote-access appliances, supply-chain control planes, self-hosted
  AI tooling); the Zimbra/macOS judgment now rests on macOS Screen Sharing alone.
- Four corrections logged, covering the rollover, both prunes, the PaperCut escalation and the
  two distinct JFrog Artifactory CVEs.

## Verify after upload
- Header reads "Week of Aug 31 – Sep 6, 2026".
- Archive page lists W35 2026 and the frozen copy opens.
- IOC and KQL workbenches populate (75 indicators, 60 queries).
- Social preview shows the new card: posture CRITICAL, 29 stories.
