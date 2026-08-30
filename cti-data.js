// CTI brief content, extracted verbatim from the source brief.
window.CTI = {
  WEEK_RANGE: "Week of Aug 24 – Aug 30, 2026",
  POSTURE: {"level":"CRITICAL","text":"PaperCut is the week's emergency: CVE-2026-82078 (CVSS 9.4) and CVE-2026-81578 (CVSS 8.8) are chained for unauthenticated remote code execution on all NG and MF versions, were exploited as a zero-day, and watchTowr reports bypasses of the first emergency patch — apply the second patch, remove internet exposure, and hunt for 'Database error looking up cardID: VALUES CAST' in archived server.log copies, since the post-exploitation tooling deletes the live file. CISA added three more exploited flaws on Aug 27: ownCloud CVE-2023-49105 and Linux kernel CVE-2026-53362 are due Aug 30, JFrog Artifactory CVE-2026-66384 Sep 10. Hunt.io tied the ownCloud entry to a Chinese-speaking operator that took 176 files from a Philippine nuclear research body via host 31.58.209[.]241. Citrix NetScaler CVE-2026-8452 and SQL Server CVE-2019-1068 are due today, Aug 29, alongside four older Linux and Red Hat bugs due Sep 9 that CISA added on the back of Cisco Talos reporting on UAT-10147 — hunt 139.180.197[.]150 and svchosts.exe. Island documented NovaCookies, a $320-a-month AiTM service relaying Microsoft 365 sign-ins, with 755 domains published as dedicated infrastructure. VulnCheck found two factory implants in ZBT router firmware giving unauthenticated root, with no fixed release; block inbound UDP/9992. ServiceNow patched three CVSS 10.0 AI Platform flaws that self-hosted customers must apply themselves, cPanel patched a root-RCE in all supported versions, and GeoServer's jsonArrayContains SQL injection is now fixed. Both halves of the SharePoint CVE-2026-55040 plus CVE-2026-63520 chain have public PoCs and are probed in honeypots. Outside the CVE stream, Iran-linked activity moved to disruption: a small UK generator was offline for four days and dozens of US wastewater plants across twelve states saw flooding and pressure loss, with CISA describing operator lockout and disconnected controllers — verify that controller management paths are not internet-reachable. Next.js shipped fixes for two unauthenticated RCE paths (CVE-2026-75604 on Windows filesystems, and a libheif overflow via AVIF image optimization) with no exploitation reported, and a Cosmos EVM balance flaw was exploited across six chains after the fix went public."},
  STORIES: [
{
 "key": "iranot",
 "tags": [
  [
   "crit",
   "Iran-linked OT intrusions"
  ],
  [
   "high",
   "Energy · Water and Wastewater"
  ]
 ],
 "badge": "new",
 "title": "Iran-linked intrusion took a small UK power plant offline for four days, concurrent with wastewater disruption across twelve US states",
 "body": "British security officials told multiple outlets that Iran-linked hackers were behind an intrusion that forced a small UK electricity generator offline for four days. The plant was not named for security reasons, was restored by staff, and the incident was reported to the National Cyber Security Centre. Reporting describes it as the first confirmed cyberattack of its kind against UK energy infrastructure. UK Energy Minister Michael Shanks said there was \"no threat to the wider grid and nobody lost power\", described the generator as \"tiny\", and said his department had briefed CEOs on steps to stay secure. The outage was concurrent with a wave of intrusions against US water and wastewater facilities: dozens of wastewater treatment plants across twelve states were affected, with flooding and loss of water pressure reported. The FBI attributed the US incidents to malicious cyber actors and US government sources said the threat likely originated in Iran. Foreign Policy reported on Aug 13 that water providers in at least seven states were targeted over a two-week period, with FBI, EPA and CISA officials indicating as many as a dozen states could be affected. The targeted components were programmable logic controllers governing flow and chemical composition; CISA's July 30, 2026 advisory said that in many cases the attackers \"modified passwords to lock out operators and disconnected the controllers\", forcing some facilities onto manual operation. Earlier reporting counted more than 30 community water systems in Minnesota. Researchers quoted in the coverage assess the UK intent as a demonstration of capability rather than direct harm.",
 "src": "Security Affairs, SC Media, The Register, Fox News, Telegraph via Kurdistan24, CISA advisory (Jul 30, 2026) — Aug 23–27, 2026"
},
{
 "key": "nextjs",
 "tags": [
  [
   "crit",
   "Next.js · Unauthenticated RCE"
  ],
  [
   "high",
   "libheif/sharp · Windows path traversal"
  ]
 ],
 "badge": "new",
 "title": "Next.js patched two critical unauthenticated RCE flaws: CVE-2026-75604 (CVSS 9.0) on Windows filesystems and an AVIF image-optimization flaw in libheif (CVSS 9.5)",
 "body": "Vercel published the Next.js August 2026 security release on Aug 25, moving it forward a day after identifying an additional critical vulnerability in an upstream dependency. CVE-2026-75604 / GHSA-p293-qw3h-jr36 (CVSS 9.0, CWE-22) is a path traversal that can lead to unauthenticated remote code execution when the Next.js server runs on a Windows filesystem, in applications using both the Pages Router and App Router without Cache Components; Vercel states there is no known workaround and that Linux and macOS deployments are not affected. GHSA-2xp9-vwfh-vxw4 (CVSS 9.5) is a heap buffer overflow in the libheif library used by sharp, reachable when Image Optimization processes an attacker-controlled AVIF image; the patched releases disable AVIF optimization entirely until the upstream libheif fix propagates. The Hacker News confirmed on Aug 27 that libheif v1.23.2 had not been published. Fixes are in Next.js 15.5.24 (Maintenance LTS) and 16.3.3 (Active LTS). Affected ranges: 13.4 up to 15.5.24 and 16.0 up to 16.3.3 for the Windows flaw, 10.0.0 up to 15.5.24 and below 16.3.3 for the AVIF flaw. Vercel-hosted applications are protected with no customer action, and Netlify states its sites do not run the affected image code path. No exploitation in the wild and no public PoC have been reported. The AVIF flaw was disclosed by Hacktron; the Windows flaw by evolutionstorm and B0RI.",
 "src": "Next.js security release (Aug 25, 2026), Vercel changelog, The Hacker News, Netlify, Cyber Security News, SecurityOnline — Aug 25–28, 2026"
},
{
 "key": "cosmosevm",
 "tags": [
  [
   "crit",
   "Cosmos EVM · GHSA-7g4w-cg88-2cq2"
  ],
  [
   "high",
   "Six chains drained · Disclosure failure"
  ]
 ],
 "badge": "new",
 "title": "Cosmos EVM balance-handling flaw exploited to drain funds from six blockchains after Cosmos Labs misassessed its own bug bounty report",
 "body": "Cosmos Labs warned that a critical balance-handling flaw in the shared Cosmos EVM module was exploited to drain funds from six blockchains between Aug 20 and Aug 25, 2026. The issue is designated GHSA-7g4w-cg88-2cq2, rated Critical by Cosmos Labs, and was published with no CVE identifier, no weakness classification and no CVSS score. Affected versions are below 0.6.2 and 0.7.0 up to but excluding 0.7.2; the fix shipped in v0.6.2 and v0.7.2 on Aug 19. The upgrade is state-breaking and requires a coordinated network upgrade, and operators who cannot upgrade immediately are told to halt the chain rather than attempt a coordinated governance upgrade. In a post-mortem published Aug 28, Cosmos Labs said the flaw was reported through its bug bounty programme on Apr 25 and was assessed at the time as posing no risk to funds on live networks: \"We were unable to reproduce the vulnerability on 18-decimal networks and incorrectly concluded that it affected only non-18-decimal networks.\" Secondary reporting describes an underflow affecting vesting accounts, names MANTRA, ZetaChain, Warden Protocol and Push Chain among the affected chains, and puts the total drained at about $5.72 million with assets sold on afterwards; those figures come from crypto-sector outlets rather than from Cosmos Labs.",
 "src": "The Hacker News, Cosmos Labs post-mortem (Aug 28, 2026), Coin Gabbar — Aug 26–29, 2026"
},
{
 "key": "novacookies",
 "tags": [
  [
   "crit",
   "NovaCookies PhaaS · AiTM"
  ],
  [
   "high",
   "M365 session theft · 755 domains"
  ]
 ],
 "badge": "new",
 "title": "Island documents NovaCookies, a $320-a-month AiTM phishing service that relays Microsoft 365 sign-ins and steals the resulting session, with 755 domains released as dedicated infrastructure",
 "body": "Island Security Research published analysis on Aug 26, 2026 of NovaCookies, a commercial adversary-in-the-middle service advertised at $320 a month or $200 for fourteen days, with domains, hosting, support and Google- or Microsoft-branded redirect options presented as product features. The service relays Microsoft 365 authentication through attacker infrastructure in real time and captures the session cookie after password and MFA submission. Campaign artifacts reviewed by Island show hundreds of organizations targeted across multiple regions; about half of the distinct organizations were associated with the United States, with smaller concentrations in the United Kingdom, Canada, Germany, Israel and the United Arab Emirates. Nearly 90 percent of the organizations in the reviewed set were associated with lures hosted on .vu domains. Low-volume infrastructure was present in late 2025 and the operation expanded sharply in mid-May 2026, with new infrastructure continuing to appear through August. The strongest observed delivery chain used a genuine Docusign envelope carrying a counterfeit share notice, with the malicious destination inside the document below the layer most mail security products inspect, and a Microsoft OAuth error-redirect hop using an application registered in an attacker-controlled tenant. Island released 755 domains assessed as dedicated malicious infrastructure. Island states its findings indicate targeting, not confirmed interaction or compromise, and that the shared product does not imply a single threat actor.",
 "src": "Island Security Research (Shachar Gritzman) — Aug 26, 2026"
},
{
 "key": "papercut",
 "tags": [
  [
   "crit",
   "PaperCut · Zero-day RCE"
  ],
  [
   "high",
   "Unauthenticated · Patch bypasses"
  ]
 ],
 "badge": "new",
 "title": "PaperCut NG/MF zero-day exploited in the wild: CVE-2026-82078 and CVE-2026-81578 chained for unauthenticated remote code execution on all versions",
 "body": "PaperCut told customers on Aug 27, 2026 that attackers are exploiting a flaw affecting all versions of PaperCut NG and PaperCut MF as a zero-day, that it is \"aware of confirmed customer incidents\" and is treating the matter with the highest priority. It shipped an emergency patch for v25 and v26 at 02:10 AEST on Aug 28, followed later the same day by patches for v24, then an Emergency Patch Release 2 adding hardening beyond the first after watchTowr and Huntress found bypasses of the original fix. Two CVEs were subsequently published: CVE-2026-82078 (CVSS 9.4), unsafe dynamic class loading in the database connection utilities, and CVE-2026-81578 (CVSS 8.8), improper access control in the web management interface. Huntress researchers John Hammond and Andrew Brandt describe an unauthenticated request that changes trusted server configuration and ends in arbitrary Java code execution inside the application process. watchTowr reports attackers chaining both flaws to bypass authentication and reach RCE, and says it found multiple patch bypasses plus a further authentication bypass, likely addressed by the second patch. Huntress observed exploitation in two customer environments; PaperCut has not described the activity or named an actor.",
 "src": "PaperCut security bulletin (Aug 27, 2026), Huntress, watchTowr, The Hacker News — Aug 27–28, 2026"
},
{
 "key": "owncloudph",
 "tags": [
  [
   "crit",
   "ownCloud CVE-2023-49105"
  ],
  [
   "high",
   "China-nexus · Nuclear research"
  ]
 ],
 "badge": "new",
 "title": "Chinese-speaking operator exploited ownCloud CVE-2023-49105 to take 176 files from a Philippine nuclear research body, driving the Aug 27 KEV addition",
 "body": "Hunt.io identified an open directory on host 31.58.209[.]241 staging five custom Python scripts that implement an exploit for CVE-2023-49105 (CVSS 9.8), an ownCloud WebDAV API authentication bypass using pre-signed URLs generated with an empty signing secret. Four scripts target a single account each; the fifth enumerates the WebDAV directory and logs every download. The operator is estimated to have downloaded 176 files totalling about 372 MB from a Philippine nuclear research body, across five staging directories: nuclear-material account records, draft strategic plans covering 2023 through 2028, research reactor core components, historical fuel inventories, presentation material, employee personal information, a 192 MB SQL dump of a ZKTeco BioTime attendance and personnel database, and credential stores including BitLocker keys, a KeePass database and AxCrypt-encrypted files. The same directory held Sliver, Metasploit and Mettle, and a second intrusion against a marine engineering and shipbuilding company serving the Philippine Navy used LiteSpeed Cache CVE-2024-28000 plus an XML-RPC brute-force script. Hunt.io attributes the operator to a Chinese speaker on the basis of simplified Chinese in source comments, docstrings, log output and folder names. CISA added CVE-2023-49105 to KEV on Aug 27 with an Aug 30 federal deadline.",
 "src": "Hunt.io, CISA KEV, The Hacker News — Aug 26–28, 2026"
},
{
 "key": "zbtimplants",
 "tags": [
  [
   "crit",
   "SPEAKINGSTONE · DARKLANTERN"
  ],
  [
   "high",
   "Supply chain · Router firmware"
  ]
 ],
 "badge": "new",
 "title": "VulnCheck finds two factory implants in ZBT router firmware giving unauthenticated remote root: SPEAKINGSTONE (CVE-2026-74232) and DARKLANTERN (CVE-2026-74233)",
 "body": "VulnCheck disclosed two previously undocumented factory implants in firmware for routers built by Shenzhen Zhibotong Electronics, each rated 9.3 on CVSS 4.0 and 9.8 on CVSS 3.1, both network-reachable with no privileges and no user interaction. SPEAKINGSTONE runs as the service yunmgrd and beacons outbound over UDP 10000 to a hardcoded C2, so it works from behind NAT and ordinary egress filtering; its protocol executes arbitrary commands as root, exfiltrates the WAN PPPoE credentials, reads and writes a DNS hijack list, and opens a reverse SSH tunnel. DARKLANTERN runs as infosrvd on UDP 9992, which the stock firewall opens to any internet address, and its authentication rests on a hardcoded salt and an all-zero wildcard MAC that bypasses its own address check. Between Aug 18 and Aug 21 VulnCheck found 203 internet-facing DARKLANTERN instances across 22 countries self-reporting 16 models. VulnCheck registered SPEAKINGSTONE's unregistered backup C2 domain and stood up a protocol implementation; as of Aug 21, 392 unique devices had reported in, 390 of them in China and 83 percent on China Mobile's network. Both implants were found on an $88 white-labeled ZBT-WE826-T2 bought from a US supplier, on firmware built in 2019. Neither advisory names a fixed firmware release. Zbtlink has issued no public statement on yunmgrd or infosrvd.",
 "src": "VulnCheck supply chain research and advisories, The Hacker News — Aug 27–28, 2026"
},
{
 "key": "servicenow18885",
 "tags": [
  [
   "crit",
   "3 × CVSS 10.0"
  ],
  [
   "high",
   "Unauthenticated · Self-hosted must patch"
  ]
 ],
 "badge": "new",
 "title": "ServiceNow patches four AI Platform flaws, three of them CVSS 10.0 and reachable by an unauthenticated attacker",
 "body": "ServiceNow published an advisory on Aug 27, 2026 for four vulnerabilities in the ServiceNow AI Platform. CVE-2026-18885 (CVSS 10.0) is a code injection flaw in the GraphQL Composite Data API that could let an unauthenticated user execute arbitrary code and access or modify instance data. CVE-2026-18886 (CVSS 10.0) is an improper access control flaw in the system configuration image upload processor that could let an unauthenticated user create or modify instance data, resulting in privilege escalation. The company said it deployed the update to hosted instances and provided it to partners and self-hosted customers, which leaves organizations running their own instances to apply the fixes themselves. No exploitation has been reported.",
 "src": "ServiceNow advisory (Aug 27, 2026), The Hacker News — Aug 27–28, 2026"
},
{
 "key": "cpanel65643",
 "tags": [
  [
   "crit",
   "CVE-2026-65643"
  ],
  [
   "high",
   "Root RCE · All supported versions"
  ]
 ],
 "badge": "new",
 "title": "cPanel & WHM CVE-2026-65643: an account holder who can add parked or addon domains reaches root on the whole server",
 "body": "cPanel released patches for a critical flaw in domain parking and addon domain functionality in cPanel and WebHost Manager, affecting all supported versions. An authenticated account holder able to add parked or addon domains can create arbitrary files on the server, and cPanel states that \"successful exploitation leads to code execution as the root user, giving an attacker full control of the server.\" Patched builds are 11.110.0.141, 11.134.0.53, 11.136.0.37, 11.138.0.2 and 11.138.1.7 (WP Squared) or later. The notification names WP Squared in its patched list and does not mention DNSOnly. cPanel patched three separate flaws in July 2026. No exploitation has been reported.",
 "src": "cPanel customer notification, The Hacker News — Aug 28, 2026"
},
{
 "key": "geoserver",
 "tags": [
  [
   "high",
   "GeoServer jsonArrayContains"
  ],
  [
   "high",
   "Exploited pre-patch · Now fixed"
  ]
 ],
 "badge": "new",
 "title": "GeoServer jsonArrayContains SQL injection was probed within hours of disclosure and is now patched as GHSA-mqjf-5f49-2fjh (CVSS 9.8)",
 "body": "A researcher using the handle @q1uf3ng disclosed an unauthenticated SQL injection in GeoServer's jsonArrayContains function on Aug 12, 2026 at 10:46 UTC, stating that with a system administrator database account it is possible to reach remote code execution. watchTowr said it observed exploitation attempts within hours of disclosure, hundreds of them from a small pool of source IP addresses. Jake Knott, principal security researcher at watchTowr, said attackers were probing to identify vulnerable systems, triggering errors and not proceeding further, and warned that GeoServer has a track record of being targeted at scale with multiple entries in CISA's KEV catalog. The flaw was unpatched at disclosure; GeoServer has since released 3.0.1, 2.28.5 and 2.27.6 with fixes, tracked as GHSA-mqjf-5f49-2fjh and rated CVSS 9.8. GeoServer is widely deployed in government, defense, science, engineering and technology.",
 "src": "watchTowr, The Hacker News, Security Affairs, GeoServer advisory — Aug 12–28, 2026"
},
 {
  "key": "uat10147",
  "tags": [
   [
    "crit",
    "UAT-10147 · SPECTRE"
   ],
   [
    "high",
    "IIS · Linux · BYOVD"
   ]
  ],
  "badge": "new",
  "title": "Cisco Talos details UAT-10147, a Chinese-speaking crimeware actor using agentic AI to exploit web servers at scale and deploying the SPECTRE implant",
  "body": "Talos published a two-part report on UAT-10147, a financially motivated Chinese-speaking intrusion actor active since early 2026 that exploits publicly disclosed vulnerabilities in internet-facing Windows IIS and Linux web servers. Talos assesses with moderate-to-high confidence that the actor belongs to an emerging class of operators using agentic AI systems to operationalize offensive tradecraft, with AI-generated operational playbooks, exploit automation scripts and troubleshooting logic observed supporting real intrusions. Post-compromise tooling includes SPECTRE, a custom cross-platform implant with BYOVD-based EDR neutralization on Windows and a Linux kernel rootkit named Specter, alongside NoodleRAT, QuasarRAT, Gh0stCringe and Meterpreter. Victims are in government, education, media, technology and gaming across Brazil, Bolivia, China, Canada and Vietnam; a target list of roughly 170,000 URLs was recovered from the actor's C2 open directory.",
  "src": "Cisco Talos (two-part report), The Hacker News, CISA KEV, SecureITWorld, WindowsForum — Aug 20–28, 2026"
 },
 {
  "key": "sp63520",
  "tags": [
   [
    "crit",
    "SharePoint chain"
   ],
   [
    "high",
    "8,700+ exposed servers"
   ]
  ],
  "badge": "new",
  "title": "SharePoint CVE-2026-55040 plus CVE-2026-63520 RCE chain probed in honeypots after both PoCs go public",
  "body": "Defused reported it is seeing the SharePoint CVE-2026-55040 + CVE-2026-63520 RCE chain probed in its honeypots: the JWT bypass was exercised, followed by heavy admin enumeration and probing of the Business Data Catalog sink behind CVE-2026-63520, with no code execution observed yet. Rapid7's Stephen Fewer published a PoC for the auth bypass on Aug 11 and VulnCheck's Jonathan Peterson released a PoC for the RCE half, shipping a version scanner, Suricata and Snort rules and PCAPs alongside it. Shadowserver tracks more than 8,700 SharePoint servers exposed online. CISA ordered agencies on Aug 18 to secure servers against CVE-2026-55040 attacks and on Aug 25 confirmed CVE-2026-45659 is now being used in ransomware campaigns.",
  "src": "BleepingComputer, VulnCheck, Rapid7, SecurityWeek, Petri, CISA — Aug 11–27, 2026"
 },
 {
  "key": "kevaug27",
  "tags": [
   [
    "crit",
    "CISA KEV · Aug 27"
   ],
   [
    "high",
    "ownCloud · Linux kernel · JFrog"
   ]
  ],
  "badge": "new",
  "title": "CISA adds three more exploited flaws on Aug 27: ownCloud CVE-2023-49105, a Linux kernel IPv6 privilege escalation, and JFrog Artifactory path traversal",
  "body": "CISA added CVE-2023-49105 (ownCloud improper authentication), CVE-2026-53362 (Linux kernel, privilege escalation via the IPv6 networking subsystem, impacting SUSE, Red Hat and other Linux products) and CVE-2026-66384 (JFrog Artifactory improper limitation of a pathname to a restricted directory) to the KEV catalog on Aug 27, 2026. Federal remediation is due Aug 30 for the ownCloud and Linux kernel entries and Sep 10 for JFrog. Forensic triage is required under BOD 26-04 for the Linux kernel entry. Exploitation detail has since been published for two of the three: the ownCloud entry follows Hunt.io reporting on a Chinese-speaking operator exfiltrating files from a Philippine nuclear research body, covered separately in this brief, and OpenAI has stated that its own AI agents exploited both the Artifactory and Linux kernel flaws against its internal infrastructure during cybersecurity evaluations, adding that those activities did not contribute to the Hugging Face compromise.",
  "src": "CISA KEV, Vulnerability-Lookup — Aug 27, 2026"
 },
 {
  "key": "unifi067",
  "tags": [
   [
    "crit",
    "Ubiquiti UniFi · SAB-067"
   ],
   [
    "high",
    "22 flaws · No auth required"
   ]
  ],
  "badge": "new",
  "title": "Ubiquiti Security Advisory Bulletin 067 patches 22 UniFi vulnerabilities, three of them maximum severity and reachable without credentials",
  "body": "Ubiquiti published SAB-067 on Aug 26, 2026 covering 22 vulnerabilities across the UniFi portfolio. CVE-2026-77537 is an improper input validation flaw in UniFi Protect that lets unauthenticated attackers compromise unpatched devices; CVE-2026-77550 is a CRLF injection that bypasses authentication on UniFi OS devices; CVE-2026-77554 is a command injection in UniFi Talk. Ubiquiti had not confirmed active exploitation as of the Aug 26 disclosure. In June, CISA gave federal agencies three days to fix three earlier max-severity UniFi OS flaws that were patched a month before exploitation was confirmed.",
  "src": "Ubiquiti SAB-067, BleepingComputer, Field Effect, Cybernews, TechTimes — Aug 26–27, 2026"
 },
 {
  "key": "magairports",
  "tags": [
   [
    "high",
    "Transportation · UK"
   ],
   [
    "info",
    "8.7M customers"
   ]
  ],
  "badge": "new",
  "title": "Manchester Airports Group says data linked to 8.7 million customers was accessed across Manchester, Stansted and East Midlands",
  "body": "MAG confirmed on Aug 27 that an unauthorised third party obtained customer data relating to car park, lounge and Fast Track bookings and in-airport WiFi sign-ups. The data types known to be compromised are email addresses, phone numbers, vehicle registration numbers and postcodes; MAG says no bank or payment details were held on the affected systems. A MAG spokesperson told The Register the majority of the 8.7 million had only email addresses compromised. MAG became aware of the incident on Tuesday, restricted access to affected systems, notified the NCSC and ICO, and temporarily suspended its online Manage My Booking service. Airport operations and aviation security were unaffected.",
  "src": "MAG statement via The Register, CX Today, Cybernews, TTG — Aug 27–28, 2026"
 },
 {
  "key": "aithreatsignal",
  "tags": [
   [
    "info",
    "AI threat landscape"
   ],
   [
    "info",
    "Unit 42 · Open letter"
   ]
  ],
  "badge": "new",
  "title": "Unit 42 finds 12 of 405 AI-linked malware samples reached production endpoints, as 100+ organizations sign an open letter calling for a cyber defense surge",
  "body": "Palo Alto Networks Unit 42 analyzed 405 AI-linked malware samples and found only 12 reached production endpoints. Separately, more than 100 technology, cybersecurity and financial-services organizations joined OpenAI in an open letter published Aug 27 as \"A call for collective action on cyber defense,\" warning that AI-enabled cyberattacks will become more widespread and sophisticated in the coming months and naming hospitals, water treatment plants and internet infrastructure as at risk.",
  "src": "SecurityWeek, Unit 42, Cyber Security News — Aug 27–28, 2026"
 },
 {
  "key": "bostonsci",
  "tags": [
   [
    "high",
    "Operational Disruption"
   ],
   [
    "info",
    "Medical Technology · Global"
   ]
  ],
  "badge": "new",
  "title": "Boston Scientific hit by cyberattack disrupting IT systems and causing operational disruptions globally",
  "body": "Medical technology manufacturer Boston Scientific was targeted in a cyberattack that disrupted some of its IT systems, causing operational disruptions globally. Medical device manufacturing sits in the same exposure pattern as the PTC Windchill and FlexPLM campaign already tracked in this brief: product lifecycle and manufacturing systems hold design data, and disruption there propagates to hospitals downstream as supply delay rather than as a data-privacy event.",
  "src": "BleepingComputer — Aug 26, 2026"
 },
 {
  "key": "gputhor",
  "tags": [
   [
    "high",
    "Hardware · Rowhammer"
   ],
   [
    "info",
    "NVIDIA GPU · ECC Bypass"
   ]
  ],
  "badge": "new",
  "title": "GPUThor: new Rowhammer attack bypasses ECC protections on NVIDIA GPUs, enabling denial of service and root-level privilege escalation",
  "body": "A newly disclosed Rowhammer variant called GPUThor bypasses error-correcting code protections on NVIDIA GPUs, enabling denial of service and root-level privilege escalation. ECC has been the standard answer to Rowhammer on server-class hardware, so a working bypass moves the exposure from an academic curiosity to a real multi-tenant concern — shared GPU inference and training infrastructure is the obvious place it matters.",
  "src": "BleepingComputer — Aug 26, 2026"
 },
 {
  "key": "atfqilin",
  "tags": [
   [
    "crit",
    "Federal Agency Breach"
   ],
   [
    "high",
    "Qilin Ransomware · Confirmed"
   ]
  ],
  "badge": "new",
  "title": "ATF confirms one of its systems was compromised after breach claims by the Qilin ransomware gang",
  "body": "The Bureau of Alcohol, Tobacco, Firearms and Explosives — the agency enforcing US federal firearms and explosives law — confirmed that one of its systems was compromised following breach claims made by the Qilin ransomware group. Qilin has been consistently targeting mid-market entities across multiple regions and, like most current leak-site operations, runs data-theft extortion alongside encryption.",
  "src": "BleepingComputer — Aug 27, 2026"
 },
 {
  "key": "avada",
  "tags": [
   [
    "crit",
    "Unauth PHP RCE"
   ],
   [
    "high",
    "WordPress · Commercial Theme"
   ]
  ],
  "badge": "new",
  "title": "Critical vulnerability chain in the Avada WordPress theme allows unauthenticated arbitrary PHP execution",
  "body": "A critical vulnerability chain in the widely deployed Avada theme for WordPress can be exploited by an unauthenticated attacker to execute arbitrary PHP code on the server. Avada is one of the highest-selling commercial WordPress themes, which puts the exposure on marketing and brochure sites that sit outside normal application inventories — and, on shared hosting, gives an attacker a foothold adjacent to other tenants.",
  "src": "BleepingComputer — Aug 26, 2026"
 },
 {
  "key": "teampcp",
  "tags": [
   [
    "high",
    "Law Enforcement"
   ],
   [
    "info",
    "Supply Chain · Dev Tooling"
   ]
  ],
  "badge": "new",
  "title": "AFP charges two Western Australian men over TeamPCP, the syndicate behind the March 2026 Trivy, Checkmarx KICS and LiteLLM compromises",
  "body": "The Australian Federal Police charged Louis Michael Gaebler, 23, and Ruben Ian Thomson, 21, with a combined 14 offences over their alleged role in TeamPCP, the cybercrime group behind the March 2026 compromise of the open-source security scanners Trivy and Checkmarx KICS and the AI gateway LiteLLM. Both appeared in Perth Magistrates Court on Aug 27, 2026, a day after AFP and Western Australia Police executed search warrants in Cottesloe, Hamilton Hill and Mandurah and seized devices for forensic analysis. Police allege the pair were principal participants and received cryptocurrency payments still being valued. The FBI's July 2 advisory stands: treat data and credentials exfiltrated in that campaign as a persistent risk, because affiliated actors remain active.",
  "src": "The Hacker News, AFP — Aug 27, 2026"
 },
 {
  "key": "manticore",
  "tags": [
   [
    "high",
    "Iranian State-Sponsored"
   ],
   [
    "info",
    "Espionage · Defense & Aerospace"
   ]
  ],
  "badge": "new",
  "title": "Group-IB documents new Nimbus Manticore infrastructure and previously undocumented malware, calling the IRGC-linked actor among the most active Iranian APTs of 2026",
  "body": "Group-IB published analysis of additional infrastructure and previously undocumented malware tied to Nimbus Manticore, an Iranian state-sponsored group affiliated with the Islamic Revolutionary Guard Corps. The actor tracks under several names — GalaxyGato, Mirage Kitten, Screening Serpens, Smoke Sandstorm, Subtle Snail and UNC1549 — and is assessed as linked to Tortoiseshell (Imperial Kitten, Unyielding Wasp), part of the Charming Kitten cluster. Tortoiseshell has been active since at least July 2018 against defense, aerospace, IT service providers and military organizations in the Middle East and the US. Nimbus Manticore runs its own Dream Job-style campaign, delivering malware under job-opportunity pretexts — the same social-engineering pattern as the Lazarus activity tracked elsewhere in this brief.",
  "src": "Group-IB via The Hacker News — Aug 2026"
 },
 {
  "key": "netscaler",
  "tags": [
   [
    "crit",
    "CVSS 8.8 · Pre-Auth RCE"
   ],
   [
    "high",
    "Exploited · CISA KEV · Aug 29 Deadline · Edge Device"
   ]
  ],
  "badge": "new",
  "title": "Citrix NetScaler CVE-2026-8452 exploited in the wild: web shells dropped days after watchTowr PoC, CISA KEV Aug 26 with an Aug 29 federal deadline",
  "body": "Citrix disclosed CVE-2026-8452 on June 30, 2026 as a memory overflow causing unpredictable behavior and denial of service, and shipped the fix the same day. watchTowr Labs then demonstrated a path to pre-authentication remote code execution in NetScaler's SAML message handling. Previdian reported live exploitation on Aug 26, with attackers dropping web shells named x.php and z.php and running discovery commands (id, echo) from three unique IPs in three countries. CISA added the CVE to KEV on Aug 26; FCEB agencies must remediate by Aug 29. Citrix's advisory still does not confirm in-the-wild exploitation.",
  "src": "Help Net Security, Previdian, watchTowr Labs, Bishop Fox, CISA KEV — Aug 26–27, 2026"
 },
 {
  "key": "kevlegacy",
  "tags": [
   [
    "high",
    "5 Legacy CVEs"
   ],
   [
    "high",
    "UAT-10147 · CISA KEV Aug 26"
   ]
  ],
  "badge": "new",
  "title": "Four of CISA's five legacy KEV additions trace to UAT-10147, a Chinese cybercrime group hitting Windows and Linux web servers worldwide",
  "body": "Six vulnerabilities were added to the KEV catalog on Aug 26, 2026. Only one — Citrix NetScaler CVE-2026-8452 — is recent. Cisco Talos ties four of the five legacy entries (CVE-2022-0995, CVE-2015-5287, CVE-2015-3246, CVE-2021-23758) to UAT-10147, a Chinese cybercrime group targeting Windows and Linux web servers globally across the education, media, technology and gaming sectors. There is no public information on how the fifth, CVE-2019-1068 (Microsoft SQL Server RCE), is being exploited. Deadlines split: CVE-2019-1068 and CVE-2026-8452 by Aug 29; the remaining four by Sep 9.",
  "src": "Cisco Talos, The Hacker News, Infosecurity Magazine, CISA KEV — Aug 26–27, 2026"
 },
 {
  "key": "vcenter",
  "tags": [
   [
    "crit",
    "APT Exploited"
   ],
   [
    "high",
    "CVSS 9.8 · 361 Victims"
   ]
  ],
  "badge": "",
  "title": "vCenter CVE-2026-59310 now actively exploited: APT hit 361 victims across 47 countries within 5 days of disclosure",
  "body": "QUIRSO (German DFIR) confirmed active exploitation during an incident response engagement. An APT actor is exploiting internet-accessible vCenter via CVE-2026-59310 (directory traversal in the Syslog server, CVSS 9.8), dropping reverse_ssh as a cron job for persistent outbound C2 that bypasses inbound firewall rules. 95% of the 361 observed victim IPs appeared by Aug 5 — just 5 days post-disclosure. No workaround. Patch only.",
  "src": "QUIRSO via BleepingComputer, SecurityWeek, The Hacker News — Aug 10-11, 2026"
 },
 {
  "key": "gitea2",
  "tags": [
   [
    "crit",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · CISA KEV · Aug 28 Deadline · Dev Platform"
   ]
  ],
  "badge": "new",
  "title": "Gitea CVE-2026-60004 (CVSS 9.8): code injection via diffpatch — any registered user gets RCE as Gitea OS account. CISA KEV Aug 25, federal deadline Aug 28, 2026. PoC public.",
  "body": "CISA added to KEV Aug 25, 2026 with an Aug 28, 2026 federal deadline. An attacker with repository write access can embed a malicious Git hook in a crafted patch sent to the diffpatch endpoint. Git executes the hook automatically under the Gitea service account. With default open registration, any unauthenticated visitor can register, create a repository, and exploit immediately — no stolen credentials required. Confirmed exploitation: crypto miner dropper deployed in the wild. PoC public on GitHub. Affected: Gitea 1.17 through 1.27.0. Fix: 1.27.1. If unpatched: disable public registration immediately.",
  "src": "The Hacker News, Help Net Security, CISA KEV — Aug 26, 2026"
 },
 {
  "key": "mlflow",
  "tags": [
   [
    "high",
    "CVSS 9.3"
   ],
   [
    "high",
    "Exploited · Cloud Creds · AI/ML Infra · SSRF"
   ]
  ],
  "badge": "new",
  "title": "MLflow CVE-2026-64849 (CVSS 9.3): unauthenticated SSRF reaches cloud metadata services — attackers stealing IAM credentials from AI/ML infrastructure. CISA KEV, Sep 2 deadline.",
  "body": "Unauthenticated SSRF in MLflow Tracking Server lets attackers reach cloud IMDS endpoints (169.254.169.254, metadata.google.internal) and exfiltrate cloud IAM credentials. WatchTowr observed scanning within hours of CVE assignment Aug 17. CISA KEV Aug 19, Sep 2 federal deadline. ML pipelines typically carry broad cloud permissions — credential theft can yield near-full cloud access. MLflow Tracking Servers are often internet-exposed without auth on default port 5000/8080. Fix: upgrade to MLflow 3.15.0. If exposed: rotate all cloud credentials attached to the MLflow instance's service account.",
  "src": "The Hacker News, WatchTowr, CISA KEV — Aug 17–26, 2026"
 },
 {
  "key": "miniorange",
  "tags": [
   [
    "high",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · SAML Bypass · WordPress Admin"
   ]
  ],
  "badge": "new",
  "title": "miniOrange SAML SSO CVE-2026-61979/15981 (CVSS 9.8): chained SAML signature bypass grants unauthenticated WordPress admin access — actively exploited, PoC public. Paid editions silently patched with no update warning.",
  "body": "Two chained auth bypasses let any attacker forge a SAML assertion and log in as WordPress admin with no credentials. CVE-2026-61979: plugin accepts attacker-specified HMAC-SHA1 algorithm using the public IdP key as the secret — trivially forgeable. CVE-2026-15981: OpenSSL error (-1) treated as success. DigitalOcean blocked an active admin session attempt Aug 16; public PoC available Aug 25. Critical distribution problem: seven independently versioned editions under one plugin slug — paid editions were silently patched with no advisory and no WordPress dashboard update prompt for some tiers. If on 16.x Standard, you must manually upload the fix.",
  "src": "The Hacker News, BleepingComputer, Patchstack, SCWorld — Aug 16–25, 2026"
 },
 {
  "key": "qtfy",
  "tags": [
   [
    "crit",
    "China State-Sponsored · DOJ/FBI Action"
   ],
   [
    "high",
    "NASA · Fed · Senate · DOJ Compromised"
   ]
  ],
  "badge": "new",
  "title": "DOJ/FBI seize QScan and QTRouter (Aug 26) — China-linked QTFY APT breached NASA, Federal Reserve, DOJ, NIH, and US Senate since 2018. Sold hacking services to China MSS and PLA. All domains seized, both platforms now inoperable.",
  "body": "On Aug 26, 2026 the FBI and DOJ seized three hard-coded C2 domains (qtproxy[.]xyz, qt-proxy[.]org, qt-team[.]com) making both QTFY platforms immediately inoperable. QScan scanned and infected IoT devices globally as botnet nodes; QTRouter routed intrusion traffic through those nodes and commercial VPS (fastlink[.]ws \"Fast Labyrinth\") to conceal PRC origin. Campaign active since May 2018. QTFY sold services to China MSS and PLA. Lumen Black Lotus Labs tracked the infrastructure for 18 months. Defenders: pull DNS/proxy logs for all three domains back to 2018 — any historical connection is a priority investigation target.",
  "src": "DOJ Press Release, The Hacker News, BleepingComputer, Lumen Black Lotus Labs — Aug 26, 2026"
 },
 {
  "key": "oracleweblogic",
  "tags": [
   [
    "crit",
    "CVSS 10.0"
   ],
   [
    "high",
    "Exploited · CISA KEV · Aug 27 Deadline"
   ]
  ],
  "badge": "",
  "title": "Oracle WebLogic CVE-2026-21962 (CVSS 10.0): unauthenticated access control bypass in production since January, CISA KEV Aug 24 — federal deadline Aug 27, 2026 — now passed. China-nexus APT confirmed.",
  "body": "Maximum-severity improper access control in Oracle HTTP Server and WebLogic Server Proxy Plug-in. Unauthenticated attackers can read, modify, or delete all data accessible through the affected components. Oracle patched in January 2026 CPU; exploitation confirmed since January by CloudSEK honeypots. CISA added to KEV Aug 24; BOD 26-04 federal deadline was Aug 27, 2026 and has passed. China-nexus APT exploitation confirmed by SOCRadar targeting government infrastructure. CloudSEK honeypots confirm simultaneous chaining with older WebLogic CVEs (CVE-2020-14882/14883, CVE-2020-2551, CVE-2017-10271) — patch all, not just CVE-2026-21962.",
  "src": "The Hacker News, SecurityWeek, CISA, SecurityAffairs — Aug 24–25, 2026"
 },
 {
  "key": "mirage2fa",
  "tags": [
   [
    "high",
    "AiTM · MFA Bypass · M365"
   ],
   [
    "high",
    "4,532 Orgs · 9K+ Compromise Events"
   ]
  ],
  "badge": "",
  "title": "Mirage2FA PhaaS (LinX Coders): AiTM session hijack compromised 4,532 M365 organizations — 48% of targeted accounts stolen. Bypasses standard MFA.",
  "body": "ANY.RUN research confirms Mirage2FA PhaaS kit (operated by LinX Coders) ran September 2024–mid-2026, targeting 9,426 M365 email addresses across 94 countries — 4,532 organizations potentially compromised (48% success rate). AiTM reverse proxy lets victims complete MFA normally while capturing the authenticated session cookie in real time. Delivery via phishing email, QR code, and .htm/.xhtml/.svg stagers. 63.7% of victims US-based; Technology, Manufacturing, Education most targeted. Token Protection (Conditional Access) and FIDO2 hardware keys are the specific controls that defeat AiTM — standard MFA does not.",
  "src": "The Hacker News, ANY.RUN, Cyber Security News — Aug 19–25, 2026"
 },
 {
  "key": "rustsupplychain",
  "tags": [
   [
    "high",
    "DPRK · Build-Time · CI/CD"
   ],
   [
    "high",
    "Developer Credentials · 3 Crates"
   ]
  ],
  "badge": "",
  "title": "DPRK actors compromise Rust crate maintainer accounts — malicious build.rs steals developer credentials at compile time. 245M+ downloads affected.",
  "body": "North Korean actors compromised crates.io maintainer accounts and published poisoned versions of multiple Rust crates including arrayref (245M+ downloads). Malicious build.rs scripts execute at compile time — before the application runs — harvesting SSH keys, cloud credentials (AWS, Azure, GCP), and CI/CD tokens from the build environment. The Rust Project deleted the malicious versions, but any build that resolved them during the window is compromised. Run cargo audit against all Rust projects; rotate all secrets accessible in affected build environments; check rustsec.org/advisories for affected crate names and versions.",
  "src": "The Hacker News, SecurityWeek, it-learn.io, RustSec — Aug 20–22, 2026"
 },
 {
  "key": "elementorpro",
  "tags": [
   [
    "high",
    "CVSS 9.0"
   ],
   [
    "high",
    "12M+ Sites · No Auth"
   ]
  ],
  "badge": "",
  "title": "Elementor Pro CVE-2026-32475 (CVSS 9.0): unauthenticated PHP upload RCE via double-loop extension bypass — 12M+ WordPress sites. No confirmed exploitation yet.",
  "body": "Patchstack disclosed Aug 22. The Forms module's File Upload field uses two separate loops for validation and file-move — submitting two file parts for the same field lets a PHP file skip the extension blocklist and land in a public directory. Mechanically identical to Forminator CVE-2026-15748 but affects a larger install base. No confirmed in-wild exploitation yet, but automated scanning is near-certain. Patch via WordPress dashboard. If unpatched: disable File Upload fields in Elementor Pro forms.",
  "src": "The Hacker News, Patchstack — Aug 22, 2026"
 },
 {
  "key": "trueconf",
  "tags": [
   [
    "high",
    "CISA KEV · 3-day Deadline"
   ],
   [
    "high",
    "Supply Chain · Head Mare · SYSTEM"
   ]
  ],
  "badge": "",
  "title": "TrueConf CVE-2026-72529/72530 CISA KEV — Head Mare replaces client installers with PhantomCore backdoor. 3-day federal deadline: Aug 24.",
  "body": "CISA KEV-listed Aug 21. Head Mare hacktivist group chained two TrueConf Server flaws (unauthenticated script exec → SYSTEM via sandbox escape) to replace the legitimate client installer with trojanized versions containing PhantomCore and PhantomGraph backdoors. Every user who connected for an update received the malicious installer. Targets: Russian organizations in critical sectors. Fix: 5.3.9, 5.4.9, or 5.5.5 (June 18). CVE-2026-72529 federal deadline: August 24. Verify TrueConf client signatures — unsigned = malicious.",
  "src": "SecurityWeek, Kaspersky ICS CERT, The Hacker News — Aug 12–21, 2026"
 },
 {
  "key": "zimbra",
  "tags": [
   [
    "high",
    "CVSS 8.9"
   ],
   [
    "high",
    "Exploited · 12K Servers · Email Infra"
   ]
  ],
  "badge": "",
  "title": "Zimbra CVE-2026-73570 (CVSS 8.9): unauthenticated SNMP command injection exploited in wild — 12,100+ servers exposed. CERT Polska confirmed Aug 20.",
  "body": "Unauthenticated OS command injection in Zimbra's SNMP notification component — attacker sends crafted SMTP requests and executes arbitrary commands as the zimbra user. Requires zimbra-snmp installed and SNMP notifications enabled; swatchdog runs by default, widening exposure. Patched July 20 in 10.1.20 but 12,100+ servers remain exposed (Shadowserver). CERT Polska confirmed active exploitation Aug 20. As of August 25, 270+ Zimbra instances confirmed compromised. Check /var/log/zimbra.log for unexpected service state changes and webshells in Jetty webapps directories.",
  "src": "BleepingComputer, SecurityWeek, The Hacker News, CERT Polska — Aug 20–21, 2026"
 },
 {
  "key": "gitlab",
  "tags": [
   [
    "crit",
    "CVSS 9.4"
   ],
   [
    "high",
    "Exploited · GraphQL · Source Code"
   ]
  ],
  "badge": "",
  "title": "GitLab CVE-2026-19478 (CVSS 9.4): unauthenticated GraphQL injection exploited within 24hrs — modify or delete any public project. Emergency patch required for self-managed.",
  "body": "Emergency OOB patch August 17. Any unauthenticated attacker can send a crafted GraphQL directive to a self-managed GitLab instance and modify or delete public projects and user data. No credentials, no user interaction. WatchTowr confirmed easy reproduction August 18; SecurityWeek confirmed exploitation shortly after. Third major GitLab GraphQL flaw in 2026. Fix: 18.11.11, 19.0.8, 19.1.6, or 19.2.4. GitLab.com and Dedicated already patched.",
  "src": "SecurityWeek, The Hacker News, Help Net Security — Aug 17–20, 2026"
 },
 {
  "key": "azureentra",
  "tags": [
   [
    "high",
    "Fortune 500 · 1.4M Records"
   ],
   [
    "high",
    "Entra ID · Graph API Recon"
   ]
  ],
  "badge": "",
  "title": "TheHatman Azure/Entra ID campaign: 1.4M+ records from 9 Fortune 500 orgs — data format points to Graph API enumeration, not traditional exfiltration",
  "body": "TheHatman listed directories from McDonald's (1.7M records), TCS, Vodafone, HCL, IHG, Kyndryl, Gap, Hexaware, and Wyndham on BreachForums Aug 1–10. No breach confirmed — TCS says data appears 4+ years old. Hudson Rock assesses samples as likely authentic based on structural consistency with Azure/Entra directory exports. Analyst assessment: the uniform three-tier schema across all victims matches programmatic Graph API /users enumeration exactly — not a database dump. Most likely initial access: infostealer-harvested session tokens replaying post-MFA sessions. Detection is in Graph API audit logs, not at the network perimeter.",
  "src": "InfoStealers / Hudson Rock, SecurityWeek, Help Net Security — Aug 16–18, 2026"
 },
 {
  "key": "shieldbreak",
  "tags": [
   [
    "crit",
    "No Patch · PoC Public"
   ],
   [
    "high",
    "EoP → SYSTEM · Defender Required"
   ]
  ],
  "badge": "",
  "title": "ShieldBreak CVE-2026-69414: Microsoft Defender zero-day bypasses July patch — any local user reaches SYSTEM on fully updated Windows. No patch available.",
  "body": "Nightmare Eclipse dropped ShieldBreak on August 12 — a full bypass of Microsoft's July RoguePlanet patch. Any local user with code execution escalates to SYSTEM with 100% reliability on Windows 11 25H2 and Server 2025. Defender must be running for the exploit to work — the user-mode callback hook fires during a cloud-hydration scan. Microsoft confirmed CVE-2026-69414 and is working on a patch with no ETA. Kevin Beaumont published Defender for Endpoint detection KQL queries — deploy them now.",
  "src": "BleepingComputer, SecurityWeek, Arctic Wolf, Malwarebytes — Aug 12–17, 2026"
 },
 {
  "key": "macosscreen",
  "tags": [
   [
    "crit",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · Pre-Auth Root"
   ]
  ],
  "badge": "",
  "title": "macOS Screen Sharing CVE-2026-65400: pre-auth bypass gives root — VPN password rotation has zero effect, Monero miner confirmed on multiple systems",
  "body": "NCSC-NL confirmed exploitation against internet-exposed Macs with port 5900 open. Attacker bypasses authentication entirely — root access without credentials, Monero miner installed in every confirmed case. Standard hardening (VNC password, user allowlists) is irrelevant — the bypass operates upstream. CISA rescored to 9.8, classified it automatable, and added it to the KEV catalog (confirmed Aug 22). Patch: macOS Tahoe 26.6.1 / Sequoia 15.7.9 / Sonoma 14.8.9. If unpatched: disable Screen Sharing entirely.",
  "src": "BleepingComputer, SecurityWeek, NCSC-NL, The Hacker News — Aug 6–16, 2026"
 },
 {
  "key": "ptcwindchill",
  "tags": [
   [
    "crit",
    "43+ Victims"
   ],
   [
    "high",
    "Industrial IP · Clop"
   ]
  ],
  "badge": "",
  "title": "Cl0p exploiting PTC Windchill CVE-2026-12569 at scale — Shell, Philips, GE, Fiserv among claimed victims; engineering drawings and facility data stolen",
  "body": "Cl0p is mass-exploiting CVE-2026-12569 (CVSS 9.3, KEV-listed since June) in PTC Windchill and FlexPLM PLM software. Pure data-theft model — no encryption. Shell confirmed investigating a potential incident involving 89GB claimed stolen (engineering drawings, facility photos, project plans). Philips, GE, and Fiserv also named. 43 victims claimed total. Shell refused to pay in the 2023 MOVEit campaign; Cl0p published their data then.",
  "src": "BleepingComputer, TechNadu, Ransom-ISAC — Aug 12-14, 2026"
 },
 {
  "key": "patchtugsaug",
  "tags": [
   [
    "crit",
    "DPRK · Active Espionage"
   ],
   [
    "high",
    "CISA KEV · FudModule v3.1 · Defense/Aerospace"
   ]
  ],
  "badge": "ongoing",
  "title": "Operation Dream Job (Lazarus): fake job offers → afd.sys zero-day (CVE-2026-68820) → FudModule v3.1 kills 94 ETW providers → ForestTiger/Troy backdoors. Defense, aerospace, aviation. 16 IOCs + 4 KQL in drawer.",
  "body": "Check Point Research confirmed Lazarus exploited CVE-2026-68820 for 5 weeks before Aug 11 patch. Two chains: DLL sideloading (Lockheed Martin lure) and SecurityPDF trojanized viewer (Enveil impersonation at envell.xyz / enveil.online). Both deliver MISTPEN — fileless downloader C2ing exclusively through Microsoft Graph/OneDrive. Target validated with screenshots; FudModule v3.1 deployed to kernel (kills 94 ETW providers, tampers Smart App Control, blinds all EDR). Troy and ForestTiger backdoors persist. C2 through compromised Roundcube/WordPress/PrestaShop via RelayShell PHP webshell. Confirmed victims: France, Germany, India, Brazil. 16 IOCs (7×SHA256, 3 domains, 2 IPs, 3 filenames) and 4 KQL queries in drawer. MD5/SHA1 removed — SHA256 covers same files.",
  "src": "Check Point Research, BleepingComputer, Rewterz — Jul 7–Aug 25, 2026"
 }
],
  CVES: [
{
 "key": "iranot",
 "level": "crit",
 "num": "Iran-linked OT intrusions",
 "score": "",
 "sub": "Small UK power plant offline four days; dozens of wastewater plants across twelve US states disrupted with flooding and pressure loss. PLCs targeted, operator passwords changed, controllers disconnected",
 "flags": [
  "Active campaign",
  "OT/ICS impact",
  "State-linked"
 ]
},
{
 "key": "nextjs",
 "level": "crit",
 "num": "CVE-2026-75604",
 "score": "9.0",
 "sub": "Next.js path traversal to unauthenticated RCE on Windows filesystems, Pages Router plus App Router without Cache Components. No workaround; fixed in 15.5.24 / 16.3.3",
 "flags": [
  "Unauthenticated RCE",
  "Windows only",
  "No in-the-wild reports"
 ]
},
{
 "key": "nextjs",
 "level": "crit",
 "num": "GHSA-2xp9-vwfh-vxw4",
 "score": "9.5",
 "sub": "Heap buffer overflow in libheif via sharp — unauthenticated RCE when Image Optimization processes a crafted AVIF. Patched releases disable AVIF optimization; no CVE assigned",
 "flags": [
  "Unauthenticated RCE",
  "Upstream dependency",
  "No CVE"
 ]
},
{
 "key": "cosmosevm",
 "level": "crit",
 "num": "GHSA-7g4w-cg88-2cq2",
 "score": "",
 "sub": "Cosmos EVM balance-handling flaw exploited on six chains Aug 20–25. Fixed in v0.6.2 / v0.7.2; state-breaking upgrade or chain halt. No CVE, no CWE, no CVSS published",
 "flags": [
  "Exploited",
  "Funds drained",
  "No CVE"
 ]
},
{
 "key": "novacookies",
 "level": "crit",
 "num": "NovaCookies PhaaS",
 "score": "",
 "sub": "Commercial AiTM service relaying Microsoft 365 sign-ins and capturing session cookies after MFA. $320/month. 755 domains published as dedicated infrastructure; ~90% of observed lures on .vu",
 "flags": [
  "Active campaign",
  "MFA bypass",
  "PhaaS"
 ]
},
{
 "key": "papercut",
 "level": "crit",
 "num": "CVE-2026-82078",
 "score": "9.4",
 "sub": "PaperCut NG/MF unsafe dynamic class loading in database connection utilities — chained for unauthenticated RCE. Exploited as a zero-day",
 "flags": [
  "Exploited",
  "Zero-day",
  "Patch bypasses found"
 ]
},
{
 "key": "papercut",
 "level": "crit",
 "num": "CVE-2026-81578",
 "score": "8.8",
 "sub": "PaperCut NG/MF improper access control in the web management interface — unauthenticated requests trigger backend actions before access validation completes",
 "flags": [
  "Exploited",
  "Zero-day"
 ]
},
{
 "key": "owncloudph",
 "level": "crit",
 "num": "CVE-2023-49105",
 "score": "9.8",
 "sub": "ownCloud WebDAV API authentication bypass via pre-signed URLs with an empty signing secret — KEV Aug 27, federal deadline Aug 30",
 "flags": [
  "Exploited",
  "KEV",
  "Data exfiltration confirmed"
 ]
},
{
 "key": "owncloudph",
 "level": "high",
 "num": "CVE-2024-28000",
 "score": "9.8",
 "sub": "LiteSpeed Cache for WordPress privilege escalation — used by the same operator against a Philippine marine engineering firm",
 "flags": [
  "Exploited"
 ]
},
{
 "key": "zbtimplants",
 "level": "crit",
 "num": "CVE-2026-74232",
 "score": "9.3",
 "sub": "SPEAKINGSTONE — yunmgrd factory C2 implant in ZBT router firmware; root command execution, PPPoE credential theft, DNS hijack list, reverse SSH. CVSS 4.0 9.3 / CVSS 3.1 9.8",
 "flags": [
  "Factory implant",
  "No fixed firmware"
 ]
},
{
 "key": "zbtimplants",
 "level": "crit",
 "num": "CVE-2026-74233",
 "score": "9.3",
 "sub": "DARKLANTERN — infosrvd command injection on UDP 9992, open inbound by stock firewall; ineffective auth via hardcoded salt and wildcard MAC. 203 internet-facing instances found",
 "flags": [
  "Exploited (VulnCheck KEV)",
  "Public PoC (CISA Vulnrichment)",
  "No fixed firmware"
 ]
},
{
 "key": "servicenow18885",
 "level": "crit",
 "num": "CVE-2026-18885",
 "score": "10.0",
 "sub": "ServiceNow AI Platform GraphQL Composite Data API code injection — unauthenticated arbitrary code execution and instance data access",
 "flags": [
  "Self-hosted must patch"
 ]
},
{
 "key": "servicenow18885",
 "level": "crit",
 "num": "CVE-2026-18886",
 "score": "10.0",
 "sub": "ServiceNow AI Platform system configuration image upload processor improper access control — unauthenticated data creation/modification leading to privilege escalation",
 "flags": [
  "Self-hosted must patch"
 ]
},
{
 "key": "cpanel65643",
 "level": "crit",
 "num": "CVE-2026-65643",
 "score": "",
 "sub": "cPanel & WHM parked/addon domain arbitrary file creation — authenticated account holder reaches code execution as root. All supported versions",
 "flags": [
  "Patch available"
 ]
},
{
 "key": "geoserver",
 "level": "high",
 "num": "GHSA-mqjf-5f49-2fjh",
 "score": "9.8",
 "sub": "GeoServer jsonArrayContains unauthenticated SQL injection, RCE where the DB account is sa — probed within hours of Aug 12 disclosure, fixed in 3.0.1 / 2.28.5 / 2.27.6",
 "flags": [
  "Exploitation attempts",
  "No CVE assigned",
  "Patch available"
 ]
},
 {
  "key": "sp63520",
  "level": "crit",
  "num": "CVE-2026-63520",
  "score": "",
  "sub": "SharePoint Business Connectivity Services RCE — chained after CVE-2026-55040 for unauthenticated code execution. Public PoC",
  "flags": [
   "Public PoC",
   "Probing observed"
  ]
 },
 {
  "key": "sp63520",
  "level": "crit",
  "num": "CVE-2026-55040",
  "score": "",
  "sub": "SharePoint JWT token validation authentication bypass — KEV Aug 18, exploited since Aug 12",
  "flags": [
   "Exploited",
   "KEV",
   "Public PoC"
  ]
 },
 {
  "key": "uat10147",
  "level": "crit",
  "num": "UAT-10147 / SPECTRE campaign",
  "score": "",
  "sub": "Agentic-AI-assisted exploitation of IIS and Linux web servers; SPECTRE implant, Specter Linux rootkit, BYOVD EDR bypass, ~170,000-URL target list",
  "flags": [
   "Active campaign",
   "AI-assisted",
   "BYOVD"
  ]
 },
 {
  "key": "kevaug27",
  "level": "crit",
  "num": "CVE-2023-49105",
  "score": "9.8",
  "sub": "ownCloud improper authentication — KEV Aug 27, federal deadline Aug 30",
  "flags": [
   "Exploited",
   "KEV",
   "3-day deadline"
  ]
 },
 {
  "key": "kevaug27",
  "level": "high",
  "num": "CVE-2026-53362",
  "score": "",
  "sub": "Linux kernel privilege escalation via IPv6 networking subsystem — KEV Aug 27, deadline Aug 30, forensic triage required",
  "flags": [
   "Exploited",
   "KEV",
   "Forensic triage"
  ]
 },
 {
  "key": "kevaug27",
  "level": "high",
  "num": "CVE-2026-66384",
  "score": "",
  "sub": "JFrog Artifactory path traversal — authenticated write outside the Docker cache path. KEV Aug 27, deadline Sep 10",
  "flags": [
   "Exploited",
   "KEV"
  ]
 },
 {
  "key": "unifi067",
  "level": "crit",
  "num": "CVE-2026-77537",
  "score": "9.9",
  "sub": "UniFi Protect improper input validation — unauthenticated compromise. Ubiquiti scored 9.9; TechTimes reported 10.0",
  "flags": [
   "No auth",
   "Patch available"
  ]
 },
 {
  "key": "unifi067",
  "level": "crit",
  "num": "CVE-2026-77550",
  "score": "9.9",
  "sub": "UniFi OS CRLF injection — authentication bypass on devices and instances",
  "flags": [
   "No auth",
   "Auth bypass"
  ]
 },
 {
  "key": "unifi067",
  "level": "crit",
  "num": "CVE-2026-77554",
  "score": "9.9",
  "sub": "UniFi Talk command injection via improper input validation",
  "flags": [
   "No auth",
   "Patch available"
  ]
 },
 {
  "key": "magairports",
  "level": "high",
  "num": "MAG customer data breach",
  "score": "",
  "sub": "8.7M customers — email, phone, vehicle registration, postcode. No payment data on affected systems",
  "flags": [
   "Confirmed breach",
   "Phishing risk"
  ]
 },
 {
  "key": "netscaler",
  "level": "crit",
  "num": "CVE-2026-8452",
  "score": "8.8",
  "flags": [
   "Exploited",
   "KEV",
   "Edge"
  ],
  "sub": "NetScaler ADC/Gateway pre-auth heap overflow in SAML parsing — web shells observed. Aug 29 deadline. Fix: 14.1-72.61 / 13.1-63.18 / 13.1-37.272."
 },
 {
  "key": "kevlegacy",
  "level": "high",
  "num": "CVE-2015-3246",
  "score": "5.1",
  "flags": [
   "Exploited",
   "KEV",
   "Legacy"
  ],
  "sub": "Red Hat libuser race condition — local privilege escalation on long-lived RHEL/CentOS estates. Tied to UAT-10147. Deadline Sep 9."
 },
 {
  "key": "kevlegacy",
  "level": "high",
  "num": "CVE-2015-5287",
  "score": "7.8",
  "flags": [
   "Exploited",
   "KEV",
   "Legacy"
  ],
  "sub": "Red Hat ABRT privilege escalation — often present on server base images. Tied to UAT-10147. Deadline Sep 9."
 },
 {
  "key": "kevlegacy",
  "level": "high",
  "num": "CVE-2019-1068",
  "score": "8.8",
  "flags": [
   "Exploited",
   "KEV",
   "Legacy"
  ],
  "sub": "Microsoft SQL Server RCE — check unmanaged and embedded SQL instances. No public exploitation detail. Deadline Aug 29."
 },
 {
  "key": "kevlegacy",
  "level": "crit",
  "num": "CVE-2021-23758",
  "score": "9.8",
  "flags": [
   "Exploited",
   "KEV",
   "Legacy"
  ],
  "sub": "Ajax.NET Professional deserialization — legacy .NET web apps. Tied to UAT-10147. Deadline Sep 9."
 },
 {
  "key": "kevlegacy",
  "level": "high",
  "num": "CVE-2022-0995",
  "score": "7.8",
  "flags": [
   "Exploited",
   "KEV",
   "Legacy"
  ],
  "sub": "Linux kernel out-of-bounds write (watch_queue) — privilege escalation to root. Tied to UAT-10147. Deadline Sep 9."
 },
 {
  "key": "gitea2",
  "level": "crit",
  "num": "CVE-2026-60004",
  "score": "9.8",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "Gitea RCE via diffpatch — any registered user, PoC public. Federal deadline Aug 28. Fix: 1.27.1."
 },
 {
  "key": "mlflow",
  "level": "high",
  "num": "CVE-2026-64849",
  "score": "9.3",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "MLflow SSRF → cloud IAM credential theft from metadata endpoints. Sep 2 deadline. Fix: 3.15.0."
 },
 {
  "key": "miniorange",
  "level": "high",
  "num": "CVE-2026-61979 / 15981",
  "score": "9.8",
  "flags": [
   "Exploited"
  ],
  "sub": "miniOrange SAML SSO — chained unauthenticated WordPress admin bypass. PoC public. Paid editions need manual patch."
 },
 {
  "key": "qtfy",
  "level": "crit",
  "num": "QTFY / QScan / QTRouter",
  "score": "—",
  "flags": [],
  "sub": "China APT infrastructure seized Aug 26 — NASA, Fed, Senate, DOJ compromised since 2018. Check DNS logs for qtproxy.xyz, qt-proxy.org, qt-team.com."
 },
 {
  "key": "oracleweblogic",
  "level": "crit",
  "num": "CVE-2026-21962",
  "score": "10.0",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "Oracle WebLogic/HTTP Server — unauthenticated improper access control. KEV deadline Aug 27 — passed. China-nexus APT confirmed."
 },
 {
  "key": "mirage2fa",
  "level": "high",
  "num": "Mirage2FA PhaaS",
  "score": "—",
  "flags": [],
  "sub": "AiTM M365 session hijack — 4,532 orgs. LinX Coders kit, defeats standard MFA. Token Protection required."
 },
 {
  "key": "rustsupplychain",
  "level": "high",
  "num": "DPRK Rust Crates",
  "score": "—",
  "flags": [],
  "sub": "Build-time credential theft via compromised crates.io maintainer accounts — run cargo audit immediately."
 },
 {
  "key": "elementorpro",
  "level": "high",
  "num": "CVE-2026-32475",
  "score": "9.0",
  "flags": [],
  "sub": "Elementor Pro — unauthenticated PHP upload RCE, 12M+ WordPress sites. No confirmed exploitation yet."
 },
 {
  "key": "trueconf",
  "level": "high",
  "num": "CVE-2026-72529 / 72530",
  "score": "—",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "TrueConf Server — Head Mare supply chain, PhantomCore backdoor. 3-day KEV deadline Aug 24."
 },
 {
  "key": "zimbra",
  "level": "high",
  "num": "CVE-2026-73570",
  "score": "8.9",
  "flags": [
   "Exploited"
  ],
  "sub": "Zimbra SNMP command injection — CERT Polska confirmed exploitation. 12K+ exposed. Fix: 10.1.20."
 },
 {
  "key": "gitlab",
  "level": "crit",
  "num": "CVE-2026-19478",
  "score": "9.4",
  "flags": [
   "Exploited"
  ],
  "sub": "GitLab GraphQL injection — unauthenticated delete/modify of any public project. Self-managed only. Fix: 18.11.11 / 19.0.8 / 19.1.6 / 19.2.4"
 },
 {
  "key": "shieldbreak",
  "level": "crit",
  "num": "CVE-2026-69414",
  "score": "—",
  "flags": [],
  "sub": "ShieldBreak — Defender EoP bypass → SYSTEM. No patch, PoC public. Deploy Beaumont's KQL queries."
 },
 {
  "key": "macosscreen",
  "level": "crit",
  "num": "CVE-2026-65400",
  "score": "9.8",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "macOS Screen Sharing pre-auth bypass → root. NCSC-NL confirmed cryptojacking. Port 5900 internet-exposed = compromised."
 },
 {
  "key": "ptcwindchill",
  "level": "high",
  "num": "CVE-2026-12569",
  "score": "9.3",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "PTC Windchill/FlexPLM — Clop mass-exploiting, 43+ victims, Shell/Philips confirming incidents"
 },
 {
  "key": "vcenter",
  "level": "crit",
  "num": "CVE-2026-59310",
  "score": "9.8",
  "flags": [
   "Exploited"
  ],
  "sub": "VMware vCenter Syslog — APT actor, 361 victims, no workaround"
 },
 {
  "key": "patchtugsaug",
  "level": "high",
  "num": "CVE-2026-68820",
  "score": "7.0",
  "flags": [
   "Exploited",
   "KEV"
  ],
  "sub": "Windows afd.sys — Lazarus Group (DPRK) exploiting for SYSTEM. FudModule rootkit + ForestTiger backdoor. CISA KEV deadline Aug 25."
 },
 {
  "key": "patchtugsaug",
  "level": "crit",
  "num": "CVE-2026-62815 (+2)",
  "score": "9.8",
  "flags": [
   "Likely"
  ],
  "sub": "QUIC / DNS / TFTP Server RCE — all unauthenticated, not yet exploited"
 }
],
  KJ: [
{
 "num": "01",
 "html": "<b>Rented AiTM is now the dominant Microsoft 365 account-takeover path in this brief, and it is a product problem rather than a domain problem.</b> NovaCookies ($320/month, 755 published domains, ~90% of observed lures on <code>.vu</code>) sits alongside Mirage2FA and the Azure/Entra enumeration campaign already carried here. All three defeat ordinary one-time codes and push approvals by design: the victim completes a real authentication through an attacker-controlled relay. We assess with <b>high confidence</b> that only origin-bound credentials — passkeys and FIDO2 keys — plus Entra ID Token Protection change the outcome, and that domain blocklists alone will not: Island's own framing is that campaigns which look unrelated can be deployments of the same rented product, so <b>blocking yesterday's domain removes one disposable part of the operation</b>."
},
{
 "num": "02",
 "html": "<b>PaperCut is the week's emergency, and the patch is not the end of it.</b> CVE-2026-82078 (CVSS 9.4) and CVE-2026-81578 (CVSS 8.8) affect all PaperCut NG and MF versions, were exploited as a zero-day before any advisory, and watchTowr reports finding multiple bypasses of the first emergency patch plus a further authentication bypass. We assess with <b>high confidence</b> that applying the patch alone is insufficient: internet exposure must be removed, and every instance treated as potentially compromised for the period before patching. The published hunting artifacts are log-based and destructive-by-design — the post-exploitation .class file deletes <code>server.log</code> and <code>derby.log</code>, so <b>a missing or truncated log is itself the indicator</b>."
},
{
 "num": "03",
 "html": "We assess with <b>high confidence</b> that decade-old file-sharing and collaboration software is the current soft target for state-adjacent collection. ownCloud CVE-2023-49105 was fixed in November 2023 and has now been used to take 176 files — including nuclear-material account records, reactor core component data and a KeePass database — from a Philippine nuclear research body. The exposure is not patch velocity but <b>asset memory</b>: instances stood up years ago, still reachable, no longer in anyone's inventory."
},
{
 "num": "04",
 "html": "We assess with <b>moderate-to-high confidence</b> that device supply chain is now a distinct exposure class rather than a research curiosity. VulnCheck's SPEAKINGSTONE and DARKLANTERN are the second and third factory implants found in ZBT firmware in a month, after ENDLESSDOORS on Aug 5. No fixed firmware exists for any of the three, and model number rather than brand is the only reliable check because the same hardware ships under reseller names. <b>Blocking inbound UDP/9992 at the edge closes the DARKLANTERN listener</b> while a fix is outstanding; the MAC prefixes 78:A3:51 and F8:5E:3C identify the manufacturer from the device's own address."
},
 {
  "num": "05",
  "html": "<b>Perimeter authentication appliances are the highest-yield target of the week.</b> Three NetScaler CVEs now share one exposure surface — CVE-2026-8451 (exploited), CVE-2026-8452 (exploited, KEV Aug 26, web shells observed) and CVE-2026-19490 (CVSS 9.3 auth bypass, public since Aug 19, exploitation not yet observed). All three require the same Gateway or AAA virtual server configuration, so <b>one inventory pass covers all three</b>. We assess with high confidence that CVE-2026-19490 will be exploited within days of the PoC becoming public, following the CVE-2026-8452 timeline."
 },
 {
  "num": "06",
  "html": "We assess with <b>high confidence</b> that enterprise middleware (Oracle WebLogic/HTTP Server, CVE-2026-21962, CVSS 10.0) is actively exploited by a China-nexus APT targeting government infrastructure — a vulnerability patched in January 2026 that remained unaddressed across thousands of deployments until CISA's KEV listing on August 24. The chaining of CVE-2026-21962 with persistent older WebLogic RCEs (2017, 2020) on CloudSEK honeypots confirms attackers are running broad automated scans and exploiting multiple vulnerabilities simultaneously. Organizations applying the single KEV-listed CVE while leaving older WebLogic CVEs unpatched remain exposed."
 },
 {
  "num": "07",
  "html": "We assess with <b>high confidence</b> that PhaaS infrastructure is now the dominant MFA bypass vector for Microsoft 365 — Mirage2FA (ANY.RUN, LinX Coders) compromised 4,532 organizations and 9,000+ M365 sessions using AiTM session cookie theft, running concurrently with the TheHatman Azure/Entra enumeration campaign already in this brief. Standard MFA enforcement does not stop either attack. Entra ID Token Protection (Conditional Access token binding) and FIDO2 hardware keys are the specific controls that defeat AiTM — both should be treated as mandatory, not optional."
 },
 {
  "num": "08",
  "html": "We assess with <b>high confidence</b> that developer supply chains across every major package ecosystem are under simultaneous active attack — DPRK Rust crate compromise (build-time credential theft), WEL1DROPPER (788+ npm packages), keyvworm (npm credential revocation), and TrueConf Head Mare supply chain (client installer replacement) all ran this week. The attack surface is not the application — it is the build and update mechanism. Organizations that have not audited their CI/CD pipeline dependencies and rotated build-environment credentials since August 17 should treat their pipelines as potentially compromised."
 },
 {
  "num": "09",
  "html": "We assess with <b>high confidence</b> that KEV compliance speed remains the primary breach differentiator for the second consecutive week — Oracle WebLogic (federal deadline Aug 27, now passed), ShieldBreak (CISA BOD 26-04, no patch, compensating controls required), Zimbra CVE-2026-73570 (actively exploited, 12K+ exposed), and GitLab CVE-2026-19478 (exploited within 24hrs) are all KEV-listed or BOD-covered items with active exploitation. Organizations tracking KEV as a primary patching signal are systematically better positioned than those running monthly patch cycles."
 },
 {
  "num": "10",
  "html": "We assess with <b>moderate confidence</b> that Zimbra Collaboration Suite (CVE-2026-73570, 12,100+ internet-exposed servers) and macOS Screen Sharing (CVE-2026-65400, CISA KEV, confirmed Monero miner deployment) represent the week's highest-risk unpatched-at-scale vulnerabilities — both are unauthenticated pre-auth exploits with confirmed in-wild exploitation where the majority of exposed servers have not applied patches available weeks ago. The Zimbra SNMP injection path is particularly dangerous because it runs as the zimbra user with access to LDAP, mail queues, and application credentials."
 },
 {
  "num": "11",
  "html": "We assess with <b>moderate confidence</b> that the convergence of ShieldBreak (Defender EoP, no patch, CISA BOD 26-04) with the Azure/Entra PhaaS campaign and Mirage2FA M365 session theft represents a coherent initial-access-to-escalation pipeline: PhaaS or Mirage2FA provides initial M365 access; lateral movement to an endpoint provides access to ShieldBreak; ShieldBreak provides SYSTEM. Defenders should instrument all three stages — AiTM detection in sign-in logs, anomalous M365 session reuse, and ShieldBreak KQL hunting in Defender for Endpoint — as a coordinated detection program rather than three separate alerts."
 },
 {
  "num": "12",
  "html": "We assess with <b>high confidence</b> that Iran-linked activity against Western critical infrastructure has moved from access and reconnaissance to disruption. A small UK generator was taken offline for four days, and dozens of US wastewater plants across twelve states were disrupted with flooding and loss of water pressure, with CISA's Jul 30 advisory describing operator lockout and disconnected controllers. Researchers quoted in the reporting assess the UK case as a capability demonstration. The exposure is structural: reporting notes attackers found far more reachable PLCs in water than in power, where binding federal requirements apply, and that a volunteer defence programme had reached 21 of roughly 50,000 unprotected small utilities. Organisations with OT should verify that controller management paths are not internet-reachable and that manual-operation fallback is exercised, not assumed."
 }
],
  SOURCES: [
{
 "group": "Iran-linked OT intrusions — UK power plant and US water sector",
 "links": [
  {
   "label": "Security Affairs — UK power plant disabled for four days by Iran-linked hackers",
   "url": "https://securityaffairs.com/197734/cyber-warfare-2/uk-power-plant-disabled-for-four-days-by-iran-linked-hackers-concurrent-with-us-water-attacks.html"
  },
  {
   "label": "SC Media — Iran-linked hackers target UK power plant and US water infrastructure",
   "url": "https://www.scworld.com/brief/iran-linked-hackers-target-uk-power-plant-and-us-water-infrastructure"
  },
  {
   "label": "Fox News — Iran-linked hackers suspected in UK power-plant shutdown after alleged Minnesota water attack",
   "url": "https://www.foxnews.com/politics/iran-linked-hackers-suspected-uk-power-plant-shutdown-alleged-minnesota-water-attack.amp"
  }
 ]
},
{
 "group": "Next.js August 2026 security release — CVE-2026-75604 / GHSA-2xp9-vwfh-vxw4",
 "links": [
  {
   "label": "Next.js — August 2026 Security Release",
   "url": "https://nextjs.org/blog/august-2026-security-release"
  },
  {
   "label": "Vercel — Applications protected from Next.js August 2026 security vulnerabilities",
   "url": "https://vercel.com/changelog/nextjs-august-2026-security-release"
  },
  {
   "label": "The Hacker News — Next.js patches critical AVIF and Windows flaws enabling unauthenticated RCE",
   "url": "https://thehackernews.com/2026/08/nextjs-patches-critical-avif-and.html"
  },
  {
   "label": "Netlify — Next.js security release (August 2026): what to know",
   "url": "https://www.netlify.com/changelog/2026-08-25-nextjs-security-vulnerabilities/"
  }
 ]
},
{
 "group": "Cosmos EVM GHSA-7g4w-cg88-2cq2 — six chains drained",
 "links": [
  {
   "label": "The Hacker News — Cosmos EVM flaw exploited after Cosmos Labs knew every blockchain running it was vulnerable",
   "url": "https://thehackernews.com/2026/08/cosmos-evm-flaw-exploited-after-cosmos.html"
  },
  {
   "label": "Coin Gabbar — Cosmos EVM hack drains $5.72 million from six chains",
   "url": "https://www.coingabbar.com/en/crypto-currency-news/cosmos-evm-hack-572-million-crypto-exploit-news"
  }
 ]
},
{
 "group": "PaperCut NG/MF zero-day — CVE-2026-82078 / CVE-2026-81578",
 "links": [
  {
   "label": "PaperCut — Urgent security advisory, Aug 27, 2026",
   "url": "https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/"
  },
  {
   "label": "Huntress — PaperCut actively exploited",
   "url": "https://www.huntress.com/blog/papercut-actively-exploited"
  },
  {
   "label": "The Hacker News — Attackers chain two PaperCut flaws to execute code without authentication",
   "url": "https://thehackernews.com/2026/08/attackers-chain-two-papercut-flaws-to.html"
  },
  {
   "label": "The Hacker News — PaperCut zero-day exploited in attacks, affecting all NG and MF versions",
   "url": "https://thehackernews.com/2026/08/papercut-zero-day-exploited-in-attacks.html"
  }
 ]
},
{
 "group": "ownCloud CVE-2023-49105 — Philippine nuclear and naval targeting",
 "links": [
  {
   "label": "Hunt.io — Chinese-speaking operator, Philippine nuclear and naval contractor",
   "url": "https://hunt.io/blog/chinese-speaking-operator-philippine-nuclear-naval-contractor"
  },
  {
   "label": "CISA — Adds three known exploited vulnerabilities to catalog, Aug 27, 2026",
   "url": "https://www.cisa.gov/news-events/alerts/2026/08/27/cisa-adds-three-known-exploited-vulnerabilities-catalog"
  },
  {
   "label": "ownCloud — WebDAV API authentication bypass using pre-signed URLs",
   "url": "https://owncloud.com/security-advisories/webdav-api-authentication-bypass-using-pre-signed-urls/"
  },
  {
   "label": "The Hacker News — ownCloud flaw exploited to steal nuclear records from Philippine research body",
   "url": "https://thehackernews.com/2026/08/snowflake-github-actions-flaw-lets.html"
  }
 ]
},
{
 "group": "ZBT router factory implants — SPEAKINGSTONE and DARKLANTERN",
 "links": [
  {
   "label": "VulnCheck — ZBT DARKLANTERN and SPEAKINGSTONE supply chain research",
   "url": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "label": "VulnCheck advisory — zbtlink mqwrt infosrvd command injection (DARKLANTERN)",
   "url": "https://www.vulncheck.com/advisories/zbtlink-mqwrt-infosrvd-command-injection"
  },
  {
   "label": "VulnCheck advisory — zbtlink mqwrt yunmgrd cloud C2 implant (SPEAKINGSTONE)",
   "url": "https://www.vulncheck.com/advisories/zbtlink-mqwrt-yunmgrd-cloud-c2-implant"
  },
  {
   "label": "The Hacker News — China-made ZBT routers ship with two implants giving unauthenticated attackers root access",
   "url": "https://thehackernews.com/2026/08/china-made-zbt-routers-ship-with-two.html"
  }
 ]
},
{
 "group": "NovaCookies AiTM phishing-as-a-service",
 "links": [
  {
   "label": "Island Security Research — NovaCookies at scale: inside the $320 phishing service",
   "url": "https://www.island.io/blog/novacookies-at-scale-inside-the-320-phishing-service-targeting-hundreds-of-organizations"
  },
  {
   "label": "Island — companion IOC release (755 domains)",
   "url": "https://github.com/island-io/island-security-research-artifacts/tree/main/novacookies"
  },
  {
   "label": "Microsoft Security Blog — OAuth redirection abuse enables phishing and malware delivery",
   "url": "https://www.microsoft.com/en-us/security/blog/2026/03/02/oauth-redirection-abuse-enables-phishing-malware-delivery/"
  }
 ]
},
{
 "group": "ServiceNow, cPanel and GeoServer",
 "links": [
  {
   "label": "The Hacker News — Three CVSS 10.0 ServiceNow flaws could let unauthenticated attackers execute code and SQL",
   "url": "https://thehackernews.com/2026/08/three-cvss-100-servicenow-flaws-could.html"
  },
  {
   "label": "The Hacker News — Critical cPanel flaw could let one hosting customer take root control of a whole server",
   "url": "https://thehackernews.com/2026/08/critical-cpanel-flaw-could-let-one.html"
  },
  {
   "label": "The Hacker News — GeoServer zero-day targeted in active exploitation attempts, can lead to RCE",
   "url": "https://thehackernews.com/2026/08/unpatched-geoserver-zero-day-targeted.html"
  },
  {
   "label": "Security Affairs — GeoServer zero-day is already being probed",
   "url": "https://securityaffairs.com/197216/hacking/geoserver-zero-day-is-already-being-probed-thats-the-problem.html"
  }
 ]
},
 {
  "group": "CISA KEV Aug 26 batch — UAT-10147 legacy exploitation",
  "links": [
   {
    "label": "The Hacker News — CISA adds six exploited flaws to KEV",
    "url": "https://thehackernews.com/2026/08/cisa-adds-six-exploited-flaws-to-kev.html"
   },
   {
    "label": "Infosecurity Magazine — Six exploited flaws in Microsoft, Linux and Citrix",
    "url": "https://www.infosecurity-magazine.com/news/cisa-kev-microsoft-citrix/"
   },
   {
    "label": "heise online — CISA warnt vor Angriffen auf diverse Software",
    "url": "https://www.heise.de/news/CISA-warnt-vor-Angriffen-auf-diverse-Software-11427406.html"
   }
  ]
 },
 {
  "group": "Aug 26–27 incidents — ATF/Qilin, Boston Scientific, Avada, GPUThor",
  "links": [
   {
    "label": "BleepingComputer — Security news",
    "url": "https://www.bleepingcomputer.com/news/security/"
   },
   {
    "label": "Unit 42 — 2026 Global Incident Response Report",
    "url": "https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report"
   },
   {
    "label": "SWK Technologies — Cybersecurity news recap, August 2026",
    "url": "https://www.swktech.com/swk-cybersecurity-news-recap-august-2026/"
   }
  ]
 },
 {
  "group": "Citrix NetScaler — CVE-2026-8452 exploited in the wild",
  "links": [
   {
    "label": "Help Net Security — Previously patched NetScaler flaw exploited (CVE-2026-8452)",
    "url": "https://www.helpnetsecurity.com/2026/08/27/netscaler-adc-gateway-cve-2026-8452/"
   },
   {
    "label": "CISA — Adds Six Known Exploited Vulnerabilities to Catalog (Aug 26)",
    "url": "https://www.cisa.gov/news-events/alerts/2026/08/26/cisa-adds-six-known-exploited-vulnerabilities-catalog"
   },
   {
    "label": "Bishop Fox — Verifying the NetScaler SAML patch for CVE-2026-8452",
    "url": "https://bishopfox.com/blog/no-crash-required-verifying-the-citrix-netscaler-saml-patch-for-cve-2026-8452"
   },
   {
    "label": "Citrix — Security Bulletin CTX696604",
    "url": "https://support.citrix.com/external/article/CTX696604/netscaler-adc-and-netscaler-gateway-secu.html"
   },
   {
    "label": "Field Effect — NetScaler flaw exploited following PoC release",
    "url": "https://fieldeffect.com/blog/citrix-netscaler-flaw-exploited-following-poc-release"
   },
   {
    "label": "Infosecurity Magazine — CISA warns of six exploited flaws",
    "url": "https://www.infosecurity-magazine.com/news/cisa-kev-microsoft-citrix/"
   }
  ]
 },
 {
  "group": "Gitea — CVE-2026-60004 exploitation",
  "links": [
   {
    "label": "Help Net Security — Critical Gitea vulnerability now exploited in the wild",
    "url": "https://www.helpnetsecurity.com/2026/08/26/gitea-cve-2026-60004-exploited-in-the-wild/"
   },
   {
    "label": "SecurityWeek — CISA warns of exploited Gitea vulnerability",
    "url": "https://www.securityweek.com/cisa-warns-of-exploited-gitea-vulnerability/"
   },
   {
    "label": "The Hacker News — Critical Gitea RCE actively exploited",
    "url": "https://thehackernews.com/2026/08/critical-gitea-rce-actively-exploited.html"
   },
   {
    "label": "SOC Prime — CVE-2026-60004 miner-like payloads",
    "url": "https://socprime.com/blog/cve-2026-60004-critical-gitea-rce-exploited-to-deploy-miner-like-payloads/"
   },
   {
    "label": "runZero — Find impacted Gitea assets",
    "url": "https://www.runzero.com/blog/gitea/"
   }
  ]
 },
 {
  "group": "Oracle WebLogic — CVE-2026-21962 KEV addition",
  "links": [
   {
    "label": "CISA — Adds One Known Exploited Vulnerability to Catalog (Aug 24)",
    "url": "https://www.cisa.gov/news-events/alerts/2026/08/24/cisa-adds-one-known-exploited-vulnerability-catalog"
   },
   {
    "label": "The Hacker News — Actively exploited Oracle WebLogic flaw",
    "url": "https://thehackernews.com/2026/08/actively-exploited-oracle-weblogic-flaw.html"
   },
   {
    "label": "SecurityWeek — CISA warns of exploited Oracle WebLogic vulnerability",
    "url": "https://www.securityweek.com/cisa-warns-of-exploited-oracle-weblogic-vulnerability/"
   },
   {
    "label": "SC Media — CISA adds Oracle WebLogic bug to exploited list",
    "url": "https://www.scworld.com/news/cisa-adds-oracle-weblogic-bug-to-its-list-of-exploited-vulnerabilities"
   }
  ]
 },
 {
  "group": "TeamPCP — AFP charges over Trivy / KICS / LiteLLM compromise",
  "links": [
   {
    "label": "The Hacker News — ThreatsDay Bulletin, Aug 27, 2026",
    "url": "https://thehackernews.com/"
   }
  ]
 },
 {
  "group": "Nimbus Manticore / Screening Serpens — Group-IB and Unit 42",
  "links": [
   {
    "label": "Unit 42 — Screening Serpens: AppDomainManager hijacking and new RAT variants",
    "url": "https://unit42.paloaltonetworks.com/"
   },
   {
    "label": "The Hacker News — Threat Intelligence coverage",
    "url": "https://thehackernews.com/search/label/Threat%20Intelligence"
   }
  ]
 },
 {
  "group": "Microsoft Out-of-Band — SharePoint CVE-2026-55040 actively exploited after",
  "links": [
   {
    "label": "SecurityWeek — SharePoint CVE-2026-55040 Exploited",
    "url": "https://www.securityweek.com/sharepoint-vulnerability-exploited-shortly-after-poc-release/"
   },
   {
    "label": "Rapid7 — CVE-2026-55040 Technical Analysis",
    "url": "https://www.rapid7.com/blog/post/ve-cve-2026-55040-microsoft-sharepoint-jwt-token-authentication-bypass-fixed/"
   }
  ]
 },
 {
  "group": "Lazarus / Operation Dream Job — Operation Dream Job (Lazarus)",
  "links": [
   {
    "label": "Check Point Research — Lazarus Operation Dream Job",
    "url": "https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/"
   },
   {
    "label": "BleepingComputer — Lazarus Exploits Windows Zero-Day",
    "url": "https://www.bleepingcomputer.com/news/security/lazarus-hackers-exploited-windows-zero-day-to-target-defense-firms/"
   },
   {
    "label": "Rewterz — Active IOCs CVE-2026-68820",
    "url": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   }
  ]
 },
 {
  "group": "VMware vCenter — vCenter CVE-2026-59310 now actively exploited",
  "links": [
   {
    "label": "QUIRSO — CVE-2026-59310 361 Victim IPs",
    "url": "https://medium.com/@quirso_de/active-exploitation-of-cve-2026-59310-361-victim-ips-across-47-countries-9783187cc6ff"
   },
   {
    "label": "BleepingComputer — VMware vCenter RCE",
    "url": "https://www.bleepingcomputer.com/news/security/critical-vmware-vcenter-rce-flaw-exploited-for-reverse-ssh-access/"
   }
  ]
 },
 {
  "group": "Cl0p Ransomware — Cl0p exploiting CVE-2026-12569 in PTC Windchill/Fl",
  "links": [
   {
    "label": "BleepingComputer — Shell Investigates Clop",
    "url": "https://www.bleepingcomputer.com/news/security/shell-investigates-potential-incident-after-clop-data-theft-claims/"
   },
   {
    "label": "TechNadu — Shell and Philips Confirm",
    "url": "https://www.technadu.com/shell-and-philips-confirm-investigation-following-cl0p-data-theft-claims-targeting-nearly-50-companies-including-fiserv-and-ge/633182/"
   }
  ]
 },
 {
  "group": "macOS — macOS Screen Sharing CVE-2026-65400 (CVSS 9.8)",
  "links": [
   {
    "label": "BleepingComputer — macOS Screen Sharing Exploited",
    "url": "https://www.bleepingcomputer.com/news/security/hackers-exploit-macos-screen-sharing-flaw-to-deploy-monero-miner/"
   },
   {
    "label": "Huntress — CVE-2026-65400",
    "url": "https://www.huntress.com/blog/macos-screen-sharing-rce-patched"
   }
  ]
 },
 {
  "group": "Microsoft Defender — ShieldBreak (CVE-2026-69414)",
  "links": [
   {
    "label": "BleepingComputer — ShieldBreak Zero-Day",
    "url": "https://www.bleepingcomputer.com/news/security/new-microsoft-defender-shieldbreak-zero-day-grants-system-privileges/"
   },
   {
    "label": "Qualys — ShieldBreak No Patch CISA BOD 26-04",
    "url": "https://blog.qualys.com/product-tech/2026/08/20/shieldbreak-the-windows-defender-zero-day-with-no-patch-detect-it-mitigate-it-with-qualys"
   },
   {
    "label": "Kevin Beaumont — ShieldBreak KQL",
    "url": "https://github.com/GossiTheDog/ThreatHunting/blob/master/AdvancedHuntingQueries/ShieldBreak.kql"
   }
  ]
 },
 {
  "group": "Azure / Entra ID — TheHatman Azure/Entra ID campaign",
  "links": [
   {
    "label": "InfoStealers / Hudson Rock — Azure Entra Campaign",
    "url": "https://www.infostealers.com/article/massive-azure-exfiltration-campaign-exposes-millions-of-enterprise-records-via-compromised-credentials-mcdonalds-vodafone-kyndryl-others/"
   },
   {
    "label": "SecurityWeek — Fortune 500 Azure Data Theft",
    "url": "https://www.securityweek.com/fortune-500-companies-hit-in-azure-data-theft-campaign/"
   }
  ]
 },
 {
  "group": "GitLab CE/EE — GitLab CVE-2026-19478 (CVSS 9.4)",
  "links": [
   {
    "label": "SecurityWeek — Critical GitLab Flaw Exploited",
    "url": "https://www.securityweek.com/critical-gitlab-flaw-exploited-shortly-after-disclosure/"
   },
   {
    "label": "The Hacker News — GitLab CVE-2026-19478",
    "url": "https://thehackernews.com/2026/08/gitlab-cve-2026-19478-comes-under.html"
   }
  ]
 },
 {
  "group": "Zimbra Collaboration Suite — Zimbra CVE-2026-73570 (CVSS 8.9)",
  "links": [
   {
    "label": "BleepingComputer — Critical Zimbra RCE Actively Exploited (270+ compromised)",
    "url": "https://www.bleepingcomputer.com/news/security/critical-zimbra-rce-flaw-now-actively-exploited-in-attacks/"
   },
   {
    "label": "SecurityWeek — Hackers Target Zimbra Servers",
    "url": "https://www.securityweek.com/hackers-target-zimbra-servers-in-active-exploitation-campaign/"
   }
  ]
 },
 {
  "group": "TrueConf Server — TrueConf Server CVE-2026-72529/72530 KEV-listed Au",
  "links": [
   {
    "label": "SecurityWeek — CISA Urges Immediate Patching of TrueConf",
    "url": "https://www.securityweek.com/cisa-urges-immediate-patching-of-exploited-trueconf-vulnerabilities/"
   },
   {
    "label": "Kaspersky ICS CERT — Head Mare TrueConf PhantomCore",
    "url": "https://ics-cert.kaspersky.com/publications/reports/2026/08/12/head-mare-exploits-vulnerabilities-in-trueconf-server-to-deliver-phantomcore-malware/"
   }
  ]
 },
 {
  "group": "Elementor Pro — Elementor Pro CVE-2026-32475 (CVSS 9.0)",
  "links": [
   {
    "label": "The Hacker News — Critical Flaw in Elementor Pro Plugin",
    "url": "https://thehackernews.com/2026/08/critical-elementor-pro-flaw-can-enable.html"
   },
   {
    "label": "Patchstack — CVE-2026-32475",
    "url": "https://patchstack.com/database/wordpress/plugin/elementor-pro/vulnerability/cve-2026-32475"
   }
  ]
 },
 {
  "group": "Rust / crates.io — DPRK actors compromise Rust crate maintainer accou",
  "links": [
   {
    "label": "The Hacker News — Rust Supply Chain Attack Linked to DPRK",
    "url": "https://thehackernews.com/2026/08/rust-supply-chain-attack-linked-to.html"
   },
   {
    "label": "SecurityWeek — Rust Supply Chain North Korean Hackers",
    "url": "https://www.securityweek.com/rust-supply-chain-attack-linked-to-north-korean-hackers/"
   }
  ]
 },
 {
  "group": "Oracle HTTP Server / WebLogic — Oracle WebLogic CVE-2026-21962 (CVSS 10.0)",
  "links": [
   {
    "label": "The Hacker News — Actively Exploited Oracle WebLogic Flaw (CVSS 10.0)",
    "url": "https://thehackernews.com/2026/08/actively-exploited-oracle-weblogic-flaw.html"
   },
   {
    "label": "SecurityWeek — CISA Warns of Exploited Oracle WebLogic",
    "url": "https://www.securityweek.com/cisa-warns-of-exploited-oracle-weblogic-vulnerability/"
   },
   {
    "label": "CISA — CVE-2026-21962 KEV Entry Aug 24",
    "url": "https://www.cisa.gov/news-events/alerts/2026/08/24/cisa-adds-one-known-exploited-vulnerability-catalog"
   }
  ]
 },
 {
  "group": "Microsoft 365 PhaaS — Mirage2FA PhaaS",
  "links": [
   {
    "label": "The Hacker News — Mirage2FA Surge Hits 4,500 US and EU Companies",
    "url": "https://thehackernews.com/2026/08/mirage2fa-surge-hits-4500-us-and-eu.html"
   },
   {
    "label": "ANY.RUN — Mirage2FA Phishing Targets US Companies",
    "url": "https://any.run/cybersecurity-blog/mirage2fa-phishing-targets-us-companies/"
   }
  ]
 },
 {
  "group": "WordPress — miniOrange SAML SSO CVE-2026-61979/15981 (CVSS 9.8",
  "links": [
   {
    "label": "The Hacker News — Attackers Target miniOrange SAML Flaws",
    "url": "https://thehackernews.com/2026/08/attackers-target-miniorange-saml-flaws.html"
   },
   {
    "label": "BleepingComputer — Hackers Target WordPress miniOrange Auth Bypass",
    "url": "https://www.bleepingcomputer.com/news/security/hackers-target-wordpress-sites-in-miniorange-auth-bypass-attacks/"
   },
   {
    "label": "Patchstack — One Slug, Seven Editions: miniOrange SAML SSO Bug",
    "url": "https://patchstack.com/articles/one-slug-seven-editions-the-miniorange-saml-sso-bug-that-let-anyone-log-in-as-your-wordpress-admin/"
   }
  ]
 },
 {
  "group": "Gitea — Gitea CVE-2026-60004 (CVSS 9.8)",
  "links": [
   {
    "label": "The Hacker News — Critical Gitea RCE Actively Exploited",
    "url": "https://thehackernews.com/2026/08/critical-gitea-rce-actively-exploited.html"
   },
   {
    "label": "Help Net Security — Gitea CVE-2026-60004 Exploited in the Wild",
    "url": "https://www.helpnetsecurity.com/2026/08/26/gitea-cve-2026-60004-exploited-in-the-wild/"
   },
   {
    "label": "SOCPrime — CVE-2026-60004 Detection and Analysis",
    "url": "https://socprime.com/blog/cve-2026-60004-critical-gitea-rce-exploited-to-deploy-miner-like-payloads/"
   },
   {
    "label": "CISA — CVE-2026-60004 KEV Entry Aug 25",
    "url": "https://www.cisa.gov/news-events/alerts/2026/08/25/cisa-adds-one-known-exploited-vulnerability-catalog"
   },
   {
    "label": "SecurityArsenal — Gitea KEV Detection & Remediation Guide",
    "url": "https://securityarsenal.com/blog/cve-2026-60004-gitea-diffpatch-code-injection-added-to-cisa-kev-detection-and-remediation-guide"
   },
   {
    "label": "runZero — CVE-2026-60004 Asset Discovery",
    "url": "https://www.runzero.com/blog/gitea/"
   }
  ]
 }
],
  CORRECTIONS: [
{
 "date": "Aug 29, 2026",
 "item": "NovaCookies added (user-supplied source)",
 "was": "Not previously carried",
 "now": "Added from Island Security Research's Aug 26, 2026 analysis. Five example domains recorded as indicators with the full 755-domain versioned release referenced; Island's caveats on targeting-versus-compromise and on brand-themed hostnames not implying compromise of the named companies are carried in the record."
},
{
 "date": "Aug 29, 2026",
 "item": "Intel refresh — six stories added",
 "was": "31 stories covering the week to Aug 28",
 "now": "37 stories. Added PaperCut CVE-2026-82078/81578, ownCloud CVE-2023-49105 exploitation detail, ZBT SPEAKINGSTONE/DARKLANTERN, ServiceNow AI Platform, cPanel CVE-2026-65643 and GeoServer jsonArrayContains. No stories removed this pass — pruning and archiving are held for the Monday rollover."
},
{
 "date": "Aug 29, 2026",
 "item": "CISA KEV Aug 27 batch (kevaug27)",
 "was": "Carried as a KEV listing with no published exploitation detail",
 "now": "Exploitation detail now published for two of the three: the ownCloud entry is covered in a dedicated write-up, and OpenAI has stated its own AI agents exploited the Artifactory (CVE-2026-66384) and Linux kernel (CVE-2026-53362) flaws against its internal infrastructure. Federal deadlines unchanged: Aug 30 for ownCloud and the Linux kernel, Sep 10 for Artifactory."
},
{
 "date": "Aug 29, 2026",
 "item": "GeoServer jsonArrayContains",
 "was": "Not previously carried; reported on Aug 12–15 as an unpatched zero-day",
 "now": "Carried as patched. GeoServer 3.0.1, 2.28.5 and 2.27.6 contain the fix, tracked as GHSA-mqjf-5f49-2fjh at CVSS 9.8. No CVE identifier has been assigned."
},
 {
  "date": "Aug 28, 2026",
  "item": "Duplicate entries removed",
  "was": "Gitea CVE-2026-60004 carried two story entries sharing one identical detail record, and CISA’s Aug 26 KEV batch was written up twice (a six-item roundup and a legacy-CVE analysis), duplicating six CVE rows",
  "now": "One Gitea entry retained; the Aug 26 KEV batch is now covered by the legacy-CVE analysis plus the dedicated Citrix NetScaler CVE-2026-8452 write-up"
 },
 {
  "date": "Aug 28, 2026",
  "item": "CVE-2015-3246",
  "was": "Carried as CVSS 7.8 in the removed KEV roundup",
  "now": "CVSS 5.1 (Red Hat libuser race condition), per the published score"
 },
 {
  "date": "Aug 28, 2026",
  "item": "macOS Screen Sharing CVE-2026-65400",
  "was": "Described as not yet KEV-listed despite confirmed exploitation",
  "now": "KEV addition confirmed Aug 22, 2026; the story and CVE row now agree"
 },
 {
  "date": "Aug 28, 2026",
  "item": "Microsoft OOB (Aug 7)",
  "was": "Carried as an open item, dated by relative reference (“last Friday’s emergency release”)",
  "now": "Removed as aged out and superseded: the SharePoint CVE-2026-55040 / CVE-2026-63520 chain is tracked in its own entry; the three CVSS 10.0 cloud flaws were mitigated service-side with no customer action"
 },
 {
  "date": "Aug 28, 2026",
  "item": "Relative date language (all items)",
  "was": "Several entries used “today”, “tomorrow”, “last Friday” and “earlier this week”, which decay after publication",
  "now": "All replaced with absolute dates"
 },
 {
  "date": "Aug 27, 2026",
  "item": "Gitea CVE-2026-60004",
  "was": "Two separate entries dated the CISA KEV addition Aug 25 and Aug 26, and shared one detail record",
  "now": "KEV addition confirmed as Aug 25, 2026 with an Aug 28 federal deadline; the two entries are now tracked separately (initial disclosure and the exploitation follow-up)"
 },
 {
  "date": "Aug 1, 2026",
  "item": "JadePuffer",
  "was": "Entry vulnerability cited as CVE-2026-0770 / CVE-2026-55255",
  "now": "Corrected to CVE-2025-3248 (Langflow /api/v1/validate/code unauthenticated RCE), per Sysdig"
 },
 {
  "date": "Jul 31, 2026",
  "item": "CVE-2026-63077",
  "was": "Described as an MCP bridge / agent polling container RCE",
  "now": "Corrected to JetBrains TeamCity On-Premises unauthenticated RCE via the agent polling protocol"
 },
 {
  "date": "Aug 1, 2026",
  "item": "IOC handling (all items)",
  "was": "Several entries pointed to vendor advisories instead of listing indicators",
  "now": "Concrete defanged IOCs now listed inline where publicly available; items with genuinely no public IOCs say so explicitly"
 }
],
  D: {
"iranot": {
 "eyebrow": "Iran-linked · Energy and Water/Wastewater · OT impact · UK NCSC, FBI, CISA",
 "title": "A four-day outage at a small UK generator and wastewater disruption across twelve US states, in the same window",
 "overview": "The reason to carry this as an OT story rather than a geopolitics story is the mechanism the reporting describes: not malware on servers, but controller-level actions — operator passwords changed and controllers disconnected — with physical consequences in the form of flooding and lost water pressure. The UK case is described by officials as small and contained; the point researchers make is intent. For defenders, the actionable content is the exposure pattern, since the same reporting says attackers found far more reachable controllers in water than in power.",
 "technical": [
  "UK: a small electricity generator was forced offline for four days. The plant was not named for security reasons, was restored by its own staff, and the incident was reported to the National Cyber Security Centre. Reporting describes it as the first confirmed cyberattack of its kind against UK energy infrastructure.",
  "UK government position: Energy Minister Michael Shanks said there was \"no threat to the wider grid and nobody lost power\", described the generator as \"tiny\", and said his department had briefed CEOs on steps to stay secure.",
  "US: dozens of wastewater treatment plants across twelve states were affected, with flooding and loss of water pressure reported. The FBI attributed the incidents to malicious cyber actors; US government sources said the threat likely originated in Iran.",
  "Scope reporting differs by date: Foreign Policy reported on Aug 13 that providers in at least seven states were targeted over a two-week campaign, with FBI, EPA and CISA officials indicating as many as a dozen states could be affected. Earlier reporting counted more than 30 community water systems in Minnesota.",
  "Targeted component class: programmable logic controllers used to manage the flow and chemical composition of water supplies. CISA's Jul 30, 2026 advisory states that in many cases the attackers \"modified passwords to lock out operators and disconnected the controllers\", forcing some facilities to switch to manual operation.",
  "Structural asymmetry named in the reporting: water utilities face no binding federal cybersecurity requirements backed by financial penalties, unlike electricity providers, and a volunteer defence programme had reached only 21 of approximately 50,000 unprotected small utilities.",
  "Context given by the coverage: Iran has increased cyber operations against Western countries since February, with activity reported in several European nations, and the UK incident follows CISA's Aug 19 advisory on AI-generated Siemens PLC reconnaissance."
 ],
 "iocs": [],
 "iocNote": "No indicators have been published for either the UK incident or the US water campaign in the reviewed sources. The UK plant is deliberately unnamed and the FBI attribution statement carries no technical detail, so detection has to be built on exposure and behaviour rather than on indicators.",
 "mitigation": [
  "Enumerate every controller management path that is reachable from the internet — HMI web interfaces, vendor remote-support tunnels, cellular modems and engineering workstations — and remove that reachability. This is the exposure the reporting describes attackers finding at scale in the water sector.",
  "Change default and shared credentials on controllers and HMIs, and hold operator accounts in a system that cannot be locked out from the controller itself; password modification and controller disconnection are the two actions CISA named.",
  "Exercise manual-operation fallback rather than assuming it. Facilities in the US campaign switched to manual operation, which is only a mitigation where staff have practised it.",
  "Alert on configuration writes, program downloads and mode changes on controllers, and treat an unexplained controller disconnection as a security event, not only as a reliability event.",
  "For UK operators: NCSC reporting and the DESNZ CEO briefing referenced in the coverage are the route to sector-specific guidance."
 ],
 "response": [
  "SENTINEL KQL — external sources reaching OT protocol ports through the perimeter firewall, the exposure pattern the reporting describes. Adapt the OT address ranges to your own plant networks.\n\nlet otPorts = dynamic([502, 102, 20000, 44818, 47808, 4840, 1911, 9600]);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(30d)\n   | where DestinationPort in (otPorts)\n   | project TimeGenerated, SourceIP, DestinationIP, DestinationPort, DeviceAction, Activity=DeviceEventClassID),\n  (AzureNetworkAnalytics_CL\n   | where TimeGenerated > ago(30d)\n   | extend DestinationPort = toint(DestPort_d), SourceIP = tostring(SrcIP_s), DestinationIP = tostring(DestIP_s)\n   | where DestinationPort in (otPorts)\n   | project TimeGenerated, SourceIP, DestinationIP, DestinationPort, DeviceAction=tostring(FlowStatus_s), Activity=\"AzureFlow\")\n| where not(ipv4_is_private(SourceIP))\n| summarize attempts = count(), ports = make_set(DestinationPort, 10), firstSeen = min(TimeGenerated), lastSeen = max(TimeGenerated) by SourceIP, DestinationIP\n| order by attempts desc\n// Technique borrowed from the union isfuzzy multi-connector pattern published by Bert-Jan Pals (github.com/Bert-JanP/Hunting-Queries-Detection-Rules) so the query survives a missing connector.",
  "SENTINEL KQL — engineering-workstation and HMI sign-ins from outside the plant, plus account lockouts on those hosts, to catch the operator-lockout action CISA described. Replace the host prefix with your own naming.\n\nlet otHosts = SigninLogs\n  | where TimeGenerated > ago(30d)\n  | where DeviceDetail.displayName has_any (\"HMI\", \"SCADA\", \"ENGWS\", \"PLC\")\n  | distinct tostring(DeviceDetail.displayName);\nunion isfuzzy=true\n  (SigninLogs\n   | where TimeGenerated > ago(30d)\n   | where tostring(DeviceDetail.displayName) in (otHosts)\n   | project TimeGenerated, Account=UserPrincipalName, Host=tostring(DeviceDetail.displayName), IPAddress, ResultType, Location=tostring(LocationDetails.countryOrRegion)),\n  (SecurityEvent\n   | where TimeGenerated > ago(30d)\n   | where EventID in (4740, 4723, 4724)\n   | where Computer has_any (\"HMI\", \"SCADA\", \"ENGWS\", \"PLC\")\n   | project TimeGenerated, Account=TargetAccount, Host=Computer, IPAddress=IpAddress, ResultType=tostring(EventID), Location=\"onprem\")\n| summarize events = count(), types = make_set(ResultType, 10), locations = make_set(Location, 10) by Account, Host\n| order by events desc",
  "DEFENDER XDR KQL — controller-facing tooling running on engineering workstations, which is where a change to controller passwords or a disconnection would be issued from.\n\nlet otTooling = dynamic([\"tia portal\", \"step7\", \"s7\", \"rslinx\", \"rslogix\", \"studio 5000\", \"unity pro\", \"ecostruxure\", \"codesys\", \"kepserver\", \"modscan\", \"modbus\"]);\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where tolower(FileName) has_any (otTooling) or tolower(ProcessCommandLine) has_any (otTooling)\n| join kind=leftouter (\n    DeviceNetworkEvents\n    | where Timestamp > ago(30d)\n    | where RemotePort in (502, 102, 44818, 4840)\n    | project DeviceId, RemoteIP, RemotePort, NetworkTime = Timestamp\n) on DeviceId\n| project Timestamp, DeviceName, AccountName, FileName, ProcessCommandLine, RemoteIP, RemotePort\n| order by Timestamp desc",
  "Treat any facility that switched to manual operation during the campaign window as an incident scope, not a resolved outage: controller credentials, project files and backup configurations all need review before automated control is restored."
 ],
 "source": "Security Affairs, SC Media, The Register, Fox News, Telegraph via Kurdistan24, CISA advisory (Jul 30, 2026), TechTimes, Foreign Policy"
},
"nextjs": {
 "eyebrow": "Next.js · CVE-2026-75604 (CVSS 9.0) + GHSA-2xp9-vwfh-vxw4 (CVSS 9.5) · Patched Aug 25, 2026",
 "title": "Two unauthenticated RCE paths in Next.js: a Windows-only path traversal and a libheif overflow reached through AVIF image optimization",
 "overview": "Neither flaw is reported as exploited, which makes this a patching window rather than an incident. The part worth acting on is scope: the AVIF path is upstream in libheif via sharp, so it reaches back to Next.js 10 and is not fixed by a Next.js code change — the patched releases disable AVIF optimization instead. The Windows flaw has no workaround at all.",
 "technical": [
  "CVE-2026-75604 / GHSA-p293-qw3h-jr36 (CVSS 9.0, CWE-22, CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:C/C:H/I:H/A:H) — path traversal leading to unauthenticated RCE when the Next.js server uses a Windows filesystem, in applications using both the Pages Router and App Router without Cache Components. Vercel states there is no known workaround. Linux and macOS deployments are not affected.",
  "GHSA-2xp9-vwfh-vxw4 (CVSS 9.5, CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:H/VA:H/SC:H/SI:H/SA:H) — heap buffer overflow in libheif, the library sharp uses for AVIF, reachable when the Image Optimization API processes an attacker-controlled AVIF file. No CVE has been assigned to this advisory.",
  "Remediation shape differs: the patched Next.js releases disable AVIF optimization entirely until the upstream libheif fix propagates. The Hacker News confirmed on Aug 27, 2026 via the libheif GitHub releases page that v1.23.2 had not been published.",
  "Fixed releases: Next.js 15.5.24 (Maintenance LTS) and 16.3.3 (Active LTS), published Aug 25, 2026. Affected ranges are 13.4 up to 15.5.24 and 16.0 up to 16.3.3 for the Windows flaw, and 10.0.0 up to 15.5.24 and below 16.3.3 for the AVIF flaw.",
  "Hosting matters: Vercel says applications hosted on its platform are protected with no upgrades, configuration changes or redeploys required, having disabled AVIF optimization across its managed Image Optimization service. Netlify says its sites are unaffected by the Windows issue and never invoke the Next.js Image Optimization API because /_next/image requests are rewritten to Netlify Image CDN at the edge.",
  "Release context: Vercel had scheduled the August patches for Aug 26 under the monthly security programme it announced in July 2026, and moved the release forward a day after identifying the additional critical upstream vulnerability.",
  "Credit: the AVIF vulnerability was reported by the Hacktron team; the Windows vulnerability by evolutionstorm and B0RI. SecurityOnline notes Next.js sees over 45 million downloads."
 ],
 "iocs": [],
 "iocNote": "No exploitation in the wild has been confirmed, neither advisory reports active attacks, and no public proof-of-concept exists, so there are no indicators to publish. Detection below is exposure-hunting, not compromise-hunting.",
 "mitigation": [
  "Upgrade to Next.js 15.5.24 or 16.3.3. For the Windows path traversal there is no workaround; Vercel's instruction is to upgrade immediately if the server is hosted on Windows.",
  "Until patched, disable AVIF optimization to remove the libheif path — either by restricting the formats configured for Image Optimization or by putting an image CDN in front of /_next/image.",
  "Inventory where Next.js runs on Windows filesystems and whether those applications combine the Pages Router and App Router without Cache Components; that combination is the precondition for CVE-2026-75604.",
  "Track libheif separately. The Next.js fix is a mitigation, not an upstream fix, so the AVIF path returns whenever AVIF optimization is re-enabled before libheif ships its patched release.",
  "Check your hosting provider's statement before scheduling emergency work — Vercel and Netlify have both published platform-level positions that change the urgency for their customers."
 ],
 "response": [
  "SENTINEL KQL — AVIF traffic to the Next.js image optimization endpoint, the reachability test for the libheif flaw. Requires IIS or reverse-proxy logs.\n\nunion isfuzzy=true\n  (W3CIISLog\n   | where TimeGenerated > ago(30d)\n   | where csUriStem has \"/_next/image\"\n   | project TimeGenerated, Host=Computer, ClientIP=cIP, Uri=strcat(csUriStem, \"?\", csUriQuery), Status=scStatus, UserAgent=csUserAgent),\n  (CommonSecurityLog\n   | where TimeGenerated > ago(30d)\n   | where RequestURL has \"/_next/image\"\n   | project TimeGenerated, Host=DeviceName, ClientIP=SourceIP, Uri=RequestURL, Status=tostring(EventOutcome), UserAgent=RequestClientApplication)\n| where Uri has_any (\".avif\", \"avif\")\n| summarize requests = count(), distinctUris = dcount(Uri), sample = any(Uri), firstSeen = min(TimeGenerated), lastSeen = max(TimeGenerated) by ClientIP, Host\n| order by requests desc",
  "SENTINEL KQL — traversal-shaped requests against Windows-hosted Next.js, matching the CVE-2026-75604 precondition.\n\nW3CIISLog\n| where TimeGenerated > ago(30d)\n| extend FullUri = strcat(csUriStem, \"?\", csUriQuery)\n| where FullUri has_any (\"..%5c\", \"..\\\\\", \"%2e%2e%5c\", \"..%252f\", \"%c0%af\")\n   or FullUri matches regex @\"(\\.\\.[\\\\/]){2,}\"\n| summarize hits = count(), statuses = make_set(scStatus, 10), sample = any(FullUri) by cIP, Computer, csUserAgent\n| order by hits desc",
  "DEFENDER XDR KQL — the post-exploitation shape for both flaws: a Next.js node process spawning a shell or reconnaissance binary on a Windows web host.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName in~ (\"node.exe\", \"next.exe\", \"w3wp.exe\", \"iisnode.exe\")\n| where FileName in~ (\"cmd.exe\", \"powershell.exe\", \"pwsh.exe\", \"whoami.exe\", \"net.exe\", \"net1.exe\", \"certutil.exe\", \"bitsadmin.exe\", \"curl.exe\", \"tasklist.exe\")\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, InitiatingProcessCommandLine, FileName, ProcessCommandLine\n| order by Timestamp desc\n// Attribution: parent/child web-tier RCE pattern follows the published approach of Steven Lim (github.com/SlimKQL/Hunting-Queries-Detection-Rules, LinkedIn @0x534c), adapted to Next.js process names.",
  "DEFENDER XDR KQL — sharp/libheif image processing writing outside the cache directory, which would indicate the AVIF overflow reached code execution rather than a crash.\n\nDeviceFileEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName in~ (\"node.exe\", \"next.exe\")\n| where ActionType in (\"FileCreated\", \"FileModified\")\n| where FolderPath !has \"\\\\.next\\\\cache\" and FolderPath !has \"/.next/cache\"\n| where FileName endswith \".exe\" or FileName endswith \".dll\" or FileName endswith \".ps1\" or FileName endswith \".jsp\" or FileName endswith \".js\"\n| summarize writes = count(), files = make_set(FileName, 20) by DeviceName, FolderPath\n| order by writes desc"
 ],
 "source": "Next.js August 2026 Security Release, Vercel changelog, The Hacker News, Netlify changelog, Cyber Security News, SecurityOnline"
},
"cosmosevm": {
 "eyebrow": "Cosmos EVM · GHSA-7g4w-cg88-2cq2 · Six chains drained Aug 20–25, 2026 · No CVE",
 "title": "A bug bounty report misassessed in April, patched publicly in August, and exploited across six chains within a week",
 "overview": "The technical flaw matters less here than the disclosure sequence, which Cosmos Labs has documented itself: a report arrived in April, was judged not to put live funds at risk on the basis of a failed reproduction, and the eventual fix shipped publicly rather than privately — with exploitation following days later. The operator guidance is unusually blunt: upgrade, or halt the chain.",
 "technical": [
  "GHSA-7g4w-cg88-2cq2 — a balance-handling flaw in the shared Cosmos EVM module, rated Critical by Cosmos Labs. Published with no CVE identifier, no weakness classification and no CVSS score.",
  "Affected versions: below 0.6.2, and 0.7.0 up to but excluding 0.7.2. The fix shipped in v0.6.2 and v0.7.2 on Aug 19, 2026.",
  "Exploitation window: funds were drained from six blockchains between Aug 20 and Aug 25, 2026 — after the fix was public.",
  "Cosmos Labs post-mortem, published Aug 28: the flaw was reported through its bug bounty programme on Apr 25 and assessed at the time as posing no risk to funds on live networks. \"We were unable to reproduce the vulnerability on 18-decimal networks and incorrectly concluded that it affected only non-18-decimal networks.\"",
  "Operator guidance: upgrade to v0.6.2 or v0.7.2 or later. The change is state-breaking and requires a coordinated network upgrade; operators who cannot upgrade immediately are told to halt the chain rather than attempt a coordinated governance upgrade.",
  "Secondary reporting, not from Cosmos Labs: the flaw is described as an underflow affecting vesting accounts; MANTRA, ZetaChain, Warden Protocol and Push Chain are named among the affected chains; the total drained is put at about $5.72 million, with assets sold on afterwards and some linked exchange accounts frozen. Treat these figures as sector reporting rather than vendor-confirmed."
 ],
 "iocs": [],
 "iocNote": "No indicators have been published. Cosmos Labs' advisory and post-mortem describe versions and operator actions, not attacker addresses or transaction hashes, and the crypto-sector reporting that names amounts does not publish an indicator set in the reviewed sources.",
 "mitigation": [
  "Upgrade any Cosmos EVM chain to v0.6.2 or v0.7.2 or later. The upgrade is state-breaking, so it needs a coordinated network upgrade rather than a rolling one.",
  "If an immediate upgrade is not possible, Cosmos Labs' instruction is to halt the chain rather than attempt a coordinated governance upgrade.",
  "Where your organisation holds assets on a Cosmos EVM chain, confirm with the chain operator which release is running and whether the Aug 20–25 window is covered by their own reconciliation.",
  "For teams running bug bounty programmes, the reproducible lesson is in the post-mortem: a failed reproduction on one configuration was treated as absence of risk. Failed reproduction should escalate the assessment, not close it.",
  "Where a fix for a consensus-critical component must ship publicly, assume the disclosure window is measured in days and sequence operator upgrades before the release, not after."
 ],
 "response": [
  "No hunting queries are provided for this story. The exploitation happened on-chain against blockchain nodes, so there is no Defender or Sentinel telemetry that would observe it; detection belongs to chain monitoring and exchange controls rather than to endpoint or SIEM tooling.",
  "If your organisation operates a Cosmos EVM validator, the equivalent check is on the node estate rather than in KQL: confirm the running module version, review the Aug 19–25 upgrade timeline against your own change records, and reconcile balances across the exploitation window."
 ],
 "source": "The Hacker News, Cosmos Labs security advisory and post-mortem (Aug 28, 2026), Coin Gabbar"
},
"novacookies": {
 "eyebrow": "Island Security Research · NovaCookies · AiTM PhaaS · $320/month · 755 published domains",
 "title": "A rented adversary-in-the-middle relay with Entra's own MFA method taxonomy, a configurable anti-analysis engine and a Docusign-inside-Docusign delivery chain",
 "overview": "The structural point Island makes is that campaigns which look unrelated can be deployments of the same rented product, so blocking yesterday's domain removes one disposable part of the operation. The kit is purpose-built against Microsoft 365 rather than generic: it carries dedicated handling for authenticator push approval, authenticator one-time codes and SMS codes using Microsoft's own internal names for those methods, with separate error states for a rejected password, a rejected code and a rejected SMS. That is why ordinary one-time codes and push approvals do not solve the problem — the victim completes a real authentication through an attacker-controlled intermediary. Island's stated structural defense is phishing-resistant authentication: passkeys, FIDO2 security keys and other origin-bound credentials will not authenticate to the wrong site, so the relay cannot complete the same exchange.",
 "technical": [
  "Commercial model: advertised at $320 for a month of access or $200 for fourteen days, with domains, hosting, redirect services and support described as part of the package. Both advertised redirect variants (Microsoft and Google) appear in observed campaign infrastructure. The operator-facing dashboard carries a circular \"Nova Cookies\" badge and the line \"Secured by Nova Systems\".",
  "Primary capability: a live AiTM relay. The target sees a Microsoft 365 sign-in experience while the service passes the authentication exchange to Microsoft in real time, relaying password and MFA prompts step by step, then captures the session cookie representing the authenticated session.",
  "Delivery chain (strongest observed): a genuine Docusign notification opening a genuine Docusign envelope in the real viewer, containing a counterfeit share notice claiming an accounting department had shared a remittance-advice PDF. The malicious destination sat inside the document, below the layer most mail security products inspect. Island states Docusign and Microsoft were not compromised — their services were used as delivery and redirection layers.",
  "Redirect technique: the OAuth error-redirect abuse Microsoft described in March 2026. An application registered in an attacker-controlled tenant has a redirect URI pointing at attacker infrastructure; a genuine Microsoft authorization URL with prompt=none is designed to fail silent authentication, so Entra sends the browser from its own domain to the pre-registered hop. No token is issued and no consent prompt appears. Unlike a classic open redirect the destination must already be registered to the application, so the value is the trusted starting domain — and the application IDs give identity providers a disruption point when malicious registrations are reported. A smaller number of chains used Google's sign-in endpoint for the same role.",
  "Other delivery paths: links passing through legitimate websites that appeared to have been compromised, and legitimate online services abused to host or redirect content, keeping the final phishing domain out of the original message.",
  "Infrastructure naming: many domains borrow recognizable company names then mutate them with inserted letters, dropped characters or long concatenations under .vu. Island is explicit that these names are lure infrastructure, not evidence the referenced companies were compromised, and that the borrowed name and the targeted organization were not reliably the same across the corpus.",
  "Lure URL shape: paths begin with alternating-case labels such as PwPt-sHaRe, Ms36-AcCeSs and ClOd-ViEw, combining shortened cloud-product references with share, access and view actions, followed by a long changing token and a shorter final token. Island cautions that mixed casing is a campaign fingerprint rather than a standalone signature — search and scan systems may normalize case.",
  "Anti-analysis: Cloudflare is the visible front gate but not the whole story. The kit layers browser checks with client-side proof of work, short-lived context binding and runtime inspection checks, and scores the browser on interaction patterns, device and browser characteristics, automation markers and attempts to open developer tools. It forgives a failed check when interaction looks genuine and skips expensive checks for a visitor that already looks human. One documented example is debugger timing — measuring execution across a debugger statement and withholding the lure on a pause. These controls are buyer-configurable with tunable intervals, callbacks and strict or development presets, so resistance to analysis is a configurable product capability rather than a fixed sequence. Island's own characterisation is scanner-resistant, not scanner-proof: full-browser public scanners have captured the lure on some occasions.",
  "Yield tuning: in one preserved observation the same page accepted repeated password submissions before advancing, consistent with collecting more than one candidate password. Island reports this as observed behaviour without assigning a fixed product rule. The kit also counts submission attempts.",
  "Timeline: low-volume infrastructure present in late 2025; sharp expansion from mid-May 2026; first-seen dates peaked in June; new infrastructure continued appearing through August 2026. Island notes Proofpoint reported campaign activity increasing from March through May before declining in June, and attributes the difference to measuring infrastructure visibility rather than email or campaign volume."
 ],
 "iocs": [
  {
   "value": "fordmotbvmorcompany.vu",
   "type": "Domain",
   "note": "Example from Island's dedicated attacker-infrastructure release. Brand-themed mutation — \"Ford Motor Company\" readable through inserted characters. Lure infrastructure only; Island states this is not evidence the referenced company was compromised or targeted.",
   "source": "https://github.com/island-io/island-security-research-artifacts/tree/main/novacookies"
  },
  {
   "value": "morganstbftanley.vu",
   "type": "Domain",
   "note": "Example from the IOC release — extra letters splitting the recognizable \"Morgan Stanley\" name. Lure infrastructure only.",
   "source": "https://github.com/island-io/island-security-research-artifacts/tree/main/novacookies"
  },
  {
   "value": "munichreinsurdjqanceamericainc.vu",
   "type": "Domain",
   "note": "Example from the IOC release — inserted characters distorting \"Munich Reinsurance America Inc.\" Lure infrastructure only.",
   "source": "https://github.com/island-io/island-security-research-artifacts/tree/main/novacookies"
  },
  {
   "value": "internationalbusinessmaclsihinesibm.vu",
   "type": "Domain",
   "note": "Example from the IOC release — long-form IBM name and acronym together with a misspelling buried in the middle. Lure infrastructure only.",
   "source": "https://github.com/island-io/island-security-research-artifacts/tree/main/novacookies"
  },
  {
   "value": "secondsightsystilqemsllc.vu",
   "type": "Domain",
   "note": "Published IOC domain shown in Island's preserved lure capture, hosting a PwPt-sHaRe path.",
   "source": "https://www.island.io/blog/novacookies-at-scale-inside-the-320-phishing-service-targeting-hundreds-of-organizations"
  },
  {
   "value": "PwPt-sHaRe / Ms36-AcCeSs / ClOd-ViEw",
   "type": "String",
   "note": "Alternating-case lure path prefixes, each followed by a long changing token and a shorter final token. Island treats the shape as contextual evidence, not a standalone signature — case may be normalized by scanners.",
   "source": "https://www.island.io/blog/novacookies-at-scale-inside-the-320-phishing-service-targeting-hundreds-of-organizations"
  },
  {
   "value": "login.microsoftonline.com/common/oauth2/v2.0/authorize with prompt=none and a non-corporate redirect_uri",
   "type": "Behavior",
   "note": "The OAuth error-redirect hop: an app registered in an attacker-controlled tenant, a genuine Microsoft authorization URL designed to fail silent authentication, and Entra redirecting the browser to the pre-registered attacker hop. No token issued, no consent prompt.",
   "source": "https://www.microsoft.com/en-us/security/blog/2026/03/02/oauth-redirection-abuse-enables-phishing-malware-delivery/"
  },
  {
   "value": "Genuine Docusign envelope containing a counterfeit share notice with an external link inside the document",
   "type": "Behavior",
   "note": "Delivery pattern that passes sender-authentication and reputation checks at every layer above the document body.",
   "source": "https://www.island.io/blog/novacookies-at-scale-inside-the-320-phishing-service-targeting-hundreds-of-organizations"
  },
  {
   "value": "Nova Cookies / Nova Systems",
   "type": "Actor Alias",
   "note": "Operator-dashboard branding: a circular \"Nova Cookies\" badge and the line \"Secured by Nova Systems\". Island stresses the shared product does not imply a single threat actor — attribution must separate the service, the advertising account and the individual customer.",
   "source": "https://www.island.io/blog/novacookies-at-scale-inside-the-320-phishing-service-targeting-hundreds-of-organizations"
  }
 ],
 "iocNote": "The five domains above are examples; the full versioned release publishes 755 domains assessed as dedicated malicious infrastructure at github.com/island-io/island-security-research-artifacts (novacookies). Island's list is sanitized — no victim data, personalized lure links, Telegram identities, wallet addresses or internal telemetry. Retain the package version: Island's own guidance is that indicators are evidence with an expiration date, that NovaCookies rotates infrastructure, and that legitimate domains can be abused, so IOCs should be combined with behaviour-based detection. Ingest the release rather than the five samples here.",
 "mitigation": [
  "Put phishing-resistant authentication on high-value accounts. Passkeys, FIDO2 security keys and other origin-bound credentials structurally interrupt an AiTM relay — this is Island's stated structural defense and the only control that removes the capability rather than raising its cost.",
  "Detect the product, not only yesterday's domains: correlate the .vu lure shape, brand-themed hostname mutations, mixed-case document-action tokens and redirect chains into Microsoft-style relays. Treat any single feature as weak evidence.",
  "Keep dedicated infrastructure separate from potentially compromised hosts. Block attacker-controlled domains at the apex where appropriate, but use URL- or path-level controls and investigation for legitimate sites that may have been abused.",
  "Assume the delivery path may be trusted until its final hop. Inspect links inside document viewers and collaboration platforms, and do not depend on referrer data to reconstruct how a user arrived.",
  "Report malicious application registrations to Microsoft: because the redirect destination must already be registered to the application, the application IDs are a disruption point for the identity provider.",
  "Enable Entra ID Token Protection (Conditional Access token binding) alongside FIDO2 — the same control set already recommended in this brief for the Mirage2FA PhaaS campaign."
 ],
 "response": [
  "Treat a completed relay as session theft, in Island's order: revoke sessions, reset credentials, inspect identity-provider sign-ins, and review new MFA methods, OAuth grants, forwarding rules and inbox rules.",
  "DEFENDER XDR KQL — OAuth application consent and service-principal additions, unpacking RawEventData to surface the redirect URI. The NovaCookies hop needs an app registered in an attacker-controlled tenant whose redirect URI points at attacker infrastructure, so the redirect URI is the discriminator — and the AppId is the disruption point to report to Microsoft.\n\nCloudAppEvents\n| where Timestamp > ago(30d)\n| where ActionType in~ (\"Consent to application.\",\"Add service principal.\",\"Add OAuth2PermissionGrant.\",\"Add delegated permission grant.\")\n| extend ModifiedProps = tostring(todynamic(RawEventData.ModifiedProperties))\n| extend AppId = tostring(RawEventData.ObjectId)\n| extend ActorUpn = tostring(RawEventData.UserId)\n| extend ActorIp = tostring(RawEventData.ClientIP)\n| where ModifiedProps has_any (\"ReplyUrl\",\"redirect\")\n| project Timestamp, ActionType, ActorUpn, ActorIp, AppId, ModifiedProps\n| order by Timestamp desc\n// Technique credit — RawEventData unpacking pattern per Steven Lim (github.com/SlimKQL, LinkedIn @0x534c)",
  "SENTINEL KQL — AiTM session-theft signature in sign-in logs: a successful interactive sign-in followed within minutes by non-interactive activity on the same account from a different ASN or country.\n\nlet win = 30m;\nlet interactive = SigninLogs\n  | where TimeGenerated > ago(14d) and ResultType == 0\n  | project UserPrincipalName, tI = TimeGenerated, ipI = IPAddress, asnI = AutonomousSystemNumber, cI = tostring(LocationDetails.countryOrRegion);\nlet noninteractive = AADNonInteractiveUserSignInLogs\n  | where TimeGenerated > ago(14d) and ResultType == 0\n  | project UserPrincipalName, tN = TimeGenerated, ipN = IPAddress, asnN = AutonomousSystemNumber, cN = tostring(LocationDetails.countryOrRegion), AppDisplayName;\ninteractive\n| join kind=inner noninteractive on UserPrincipalName\n| where tN between (tI .. tI + win)\n| where asnI != asnN or cI != cN\n| project UserPrincipalName, tI, ipI, cI, asnI, tN, ipN, cN, asnN, AppDisplayName\n| order by tI desc",
  "SENTINEL KQL — sign-ins from addresses Defender for Cloud Apps already tags as hostile, plus the Entra risk detections that name the AiTM primitives directly. Highest signal for a relay: the authentication is genuine, so the tell is where the resulting session is replayed from.\n\nlet hostileTags = dynamic([\"Brute force attacker\",\"Password spray attacker\",\"malicious\",\"Possible Hackers\",\"Tor\",\"Anonymous proxy\",\"Botnet\"]);\nunion isfuzzy=true\n  (SigninLogs\n   | where TimeGenerated > ago(30d) and ResultType == 0\n   | where IPTags has_any (hostileTags)\n   | project TimeGenerated, UserPrincipalName, IPAddress, Signal = tostring(IPTags), App = AppDisplayName, Country = tostring(LocationDetails.countryOrRegion), Source = \"SigninLogs\"),\n  (AADNonInteractiveUserSignInLogs\n   | where TimeGenerated > ago(30d) and ResultType == 0\n   | where IPTags has_any (hostileTags)\n   | project TimeGenerated, UserPrincipalName, IPAddress, Signal = tostring(IPTags), App = AppDisplayName, Country = tostring(LocationDetails.countryOrRegion), Source = \"NonInteractive\"),\n  (AADUserRiskEvents\n   | where TimeGenerated > ago(30d)\n   | where RiskEventType has_any (\"anomalousToken\",\"tokenIssuerAnomaly\",\"adversaryInTheMiddle\",\"anonymizedIPAddress\",\"maliciousIPAddress\",\"unfamiliarFeatures\")\n   | project TimeGenerated, UserPrincipalName, IPAddress, Signal = RiskEventType, App = RiskDetail, Country = tostring(Location.countryOrRegion), Source = \"RiskEvents\")\n| order by TimeGenerated desc\n// Technique credit — IPTags enrichment and AADUserRiskEvents AiTM correlation per Steven Lim (github.com/SlimKQL, LinkedIn @0x534c)",
  "DEFENDER XDR KQL — what the stolen session was used for. The operator holds a valid M365 session cookie, so post-theft activity looks like the user: bulk file access, mailbox rule creation, and Copilot-driven summarization of whatever the account can reach.\n\nlet suspectUsers = dynamic([]);  // populate from the sign-in correlation above\nCloudAppEvents\n| where Timestamp > ago(30d)\n| where array_length(suspectUsers) == 0 or AccountDisplayName in~ (suspectUsers)\n| where ActionType in~ (\"FileDownloaded\",\"FileSyncDownloadedFull\",\"New-InboxRule\",\"Set-Mailbox\",\"Add-MailboxPermission\",\"CopilotInteraction\",\"MailItemsAccessed\")\n| extend ActorIp = tostring(RawEventData.ClientIP)\n| extend UserAgentStr = tostring(RawEventData.UserAgent)\n| extend CopilotData = todynamic(RawEventData.CopilotEventData)\n| extend CopilotResources = tostring(CopilotData.AccessedResources)\n| extend CopilotAppHost = tostring(CopilotData.AppHost)\n| summarize events = count(), actions = make_set(ActionType, 15), agents = make_set(UserAgentStr, 5), copilotHosts = make_set(CopilotAppHost, 5), copilotData = make_set(CopilotResources, 5)\n    by AccountDisplayName, ActorIp, bin(Timestamp, 1h)\n| where events > 20 or array_length(actions) > 3\n| order by events desc\n// Technique credit — CloudAppEvents CopilotEventData unpacking per Steven Lim (github.com/SlimKQL, LinkedIn @0x534c)",
  "SENTINEL KQL — post-relay persistence: new MFA methods, OAuth grants and mailbox forwarding or inbox rules added after a suspect sign-in.\n\nunion isfuzzy=true\n  (AuditLogs\n   | where TimeGenerated > ago(30d)\n   | where OperationName has_any (\"Add strong authentication\",\"Update user\",\"Consent to application\",\"Add app role assignment\",\"Add service principal\")\n   | project TimeGenerated, OperationName, actor = tostring(InitiatedBy.user.userPrincipalName), target = tostring(TargetResources[0].displayName)),\n  (OfficeActivity\n   | where TimeGenerated > ago(30d)\n   | where Operation has_any (\"New-InboxRule\",\"Set-InboxRule\",\"Set-Mailbox\",\"UpdateInboxRules\")\n   | project TimeGenerated, OperationName = Operation, actor = UserId, target = OfficeObjectId)\n| order by TimeGenerated desc",
  "DEFENDER XDR KQL — endpoint-side lure traffic: the .vu infrastructure and the mixed-case document-action path shape. Replace the domain list with the 755-domain release.\n\nlet lurePaths = dynamic([\"PwPt-sHaRe\",\"Ms36-AcCeSs\",\"ClOd-ViEw\",\"PwPt-\",\"Ms36-\",\"ClOd-\"]);\nDeviceNetworkEvents\n| where Timestamp > ago(60d)\n| where RemoteUrl endswith \".vu\" or RemoteUrl has_any (lurePaths)\n| project Timestamp, DeviceName, InitiatingProcessFileName, RemoteUrl, RemoteIP\n| order by Timestamp asc",
  "DEFENDER XDR KQL — browser navigation from a document viewer or identity endpoint into an unfamiliar destination, the shape of the trusted-until-the-last-hop chain.\n\nDeviceEvents\n| where Timestamp > ago(60d)\n| where ActionType == \"BrowserLaunchedToOpenUrl\"\n| where RemoteUrl has_any (\"docusign\",\"login.microsoftonline.com/common/oauth2\",\"accounts.google.com/o/oauth2\")\n| project Timestamp, DeviceName, AccountName, RemoteUrl, InitiatingProcessFileName\n| order by Timestamp desc",
  "An organization's appearance in Island's campaign artifacts indicates targeting, not interaction or compromise. Confirming credential submission or session theft requires separate evidence from your own identity logs — do not treat an IOC match alone as an incident."
 ],
 "source": "Island Security Research — Shachar Gritzman, \"NovaCookies at scale: Inside the $320 Phishing Service Targeting Hundreds of Organizations\", Aug 26, 2026; companion IOC release at github.com/island-io/island-security-research-artifacts"
},
"papercut": {
 "eyebrow": "PaperCut NG/MF · CVE-2026-82078 + CVE-2026-81578 · Exploited zero-day · Second emergency patch",
 "title": "Two chained PaperCut flaws give unauthenticated Java code execution inside the application process; patch bypasses already found",
 "overview": "PaperCut sits in the worst possible place for this class of bug: internet-facing, trusted by the print estate, and holding spooled documents. PaperCut disclosed on Aug 27, 2026 that all versions of NG and MF are affected and that it is aware of confirmed customer incidents. The actionable read is that patching is necessary but not sufficient — watchTowr reports multiple bypasses of the first emergency patch and an additional authentication bypass, likely closed by the second. Remove internet exposure now, apply the latest emergency patch, and hunt: the post-exploitation tooling deletes its own artifacts and the server's logs, so absent or truncated logs are themselves evidence. No actor has been named and no attribution published.",
 "technical": [
  "CVE-2026-82078 (CVSS 9.4) — unsafe dynamic class loading in the database connection utilities of PaperCut MF and NG. The application instantiates database driver classes based on configurable driver names without validating them against an allowlist of approved drivers.",
  "CVE-2026-81578 (CVSS 8.8) — improper access control in the web management interface. Under specific conditions, unauthenticated remote requests targeting administrative functions can trigger backend actions before access validation checks complete.",
  "Huntress's account of the mechanism: a specifically crafted request can refer to one page that is rendered for the response and another page that owns the component or action being executed. PaperCut's authorization check could trust the rendered page and miss the permissions required by the component behind it, so an unauthenticated request can change server configuration, reach sensitive endpoints and execute attacker-controlled code.",
  "watchTowr reports attackers chaining both CVEs to bypass authentication and gain RCE, and says it discovered multiple patch bypasses plus a further authentication bypass, all likely addressed in the second emergency patch.",
  "Observed post-exploitation (Huntress, two customer environments): Base64-encoded commands executed on the server, chaining \"whoami & ver\" to establish account and OS. A follow-on OS-agnostic Java .class file fingerprints the machine and writes a directory listing to \"Udydn.out\" under a \"/data/content/\" path relative to the installation directory, then deletes Udydn.out, the server's \"server.log\", and \"/data/internal/derby.log\".",
  "In a separate incident on Aug 27, 2026 the actors used a different .class file variant running \"whoami & ver & tasklist\" to also capture the running process list.",
  "Historical precedent: CVE-2023-27350 in PaperCut MF/NG (CVSS 9.8) was exploited in 2023 by Russian threat actors and by Lace Tempest to deliver Cl0p and LockBit ransomware. Treat a PaperCut compromise as a probable ransomware precursor, not an isolated print-server issue."
 ],
 "iocs": [
  {
   "value": "pc-app.exe",
   "type": "Filename",
   "note": "PaperCut Application Server process. PaperCut names suspicious post-exploitation activity originating from pc-app.exe as an indicator — child process creation from this parent is the primary behavioural signal.",
   "source": "https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/"
  },
  {
   "value": "Udydn.out",
   "type": "Filename",
   "note": "Directory-listing output written by the post-exploitation Java .class file to a /data/content/ path relative to the PaperCut installation directory, then deleted by the same file.",
   "source": "https://www.huntress.com/blog/papercut-actively-exploited"
  },
  {
   "value": "ERROR DatabaseUtils - Database error looking up cardID: VALUES CAST",
   "type": "String",
   "note": "server.log entry named by both PaperCut and watchTowr as the primary log-based hunting artifact for exploitation of this chain.",
   "source": "https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/"
  },
  {
   "value": "ERROR No suitable driver found for jdbc:no:x",
   "type": "String",
   "note": "server.log entry published by PaperCut as an indicator — consistent with the CVE-2026-82078 dynamic driver-class loading path being exercised.",
   "source": "https://www.papercut.com/kb/Main/security-bulletin-27-aug-2026-urgent-security-advisory/"
  },
  {
   "value": "Missing, truncated or deleted PaperCut server.log and /data/internal/derby.log",
   "type": "Behavior",
   "note": "PaperCut lists missing or unexpectedly truncated server.log files as an indicator; Huntress confirms the post-exploitation .class file deletes server.log and derby.log. Absence of the log is the evidence.",
   "source": "https://www.huntress.com/blog/papercut-actively-exploited"
  },
  {
   "value": "whoami & ver & tasklist",
   "type": "Behavior",
   "note": "Chained discovery command observed by Huntress in the Aug 27, 2026 incident; the earlier variant was \"whoami & ver\". Executed Base64-encoded from the PaperCut process.",
   "source": "https://www.huntress.com/blog/papercut-actively-exploited"
  }
 ],
 "iocNote": "No attacker IPs, domains or file hashes have been published for this campaign. Every published indicator is behavioural or log-based, and the post-exploitation tooling deletes the logs it appears in — hunt in forwarded or archived copies of server.log, not the live file.",
 "mitigation": [
  "Apply Emergency Patch Release 2 for PaperCut NG/MF v24, v25 or v26 on Windows, Linux or macOS — patches for v24 followed the v25/v26 release later on Aug 28. PaperCut is urging customers who already installed the first emergency patch to install Release 2 as well. The second patch includes hardening beyond the original emergency patch and is believed to close the watchTowr patch bypasses; the first patch alone should not be treated as remediation.",
  "Remove public internet exposure from the PaperCut Application Server immediately, even where no suspicious activity has been observed. PaperCut's instruction is to use firewall rules, network access controls or equivalent measures so the web interfaces cannot be reached from untrusted internet addresses.",
  "Restrict Application Server web access to trusted IP ranges, or place it behind a VPN or another controlled administrative path.",
  "Treat any instance that was internet-facing before patching as potentially compromised and scope accordingly: PaperCut holds spooled document content and is an inbound pivot into the corporate network."
 ],
 "response": [
  "DEFENDER XDR KQL — child processes spawned by the PaperCut application server, the highest-fidelity signal that code execution completed.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName =~ \"pc-app.exe\"\n   or InitiatingProcessFolderPath has \"PaperCut\"\n| where FileName in~ (\"cmd.exe\",\"powershell.exe\",\"pwsh.exe\",\"whoami.exe\",\"tasklist.exe\",\"sh\",\"bash\",\"java\")\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, FileName, ProcessCommandLine\n| order by Timestamp desc",
  "DEFENDER XDR KQL — the Udydn.out artifact and the log-deletion behaviour that follows it.\n\nDeviceFileEvents\n| where Timestamp > ago(30d)\n| where FileName in~ (\"Udydn.out\",\"server.log\",\"derby.log\")\n| where FolderPath has_any (\"PaperCut\",\"/data/content/\",\"/data/internal/\")\n| project Timestamp, DeviceName, ActionType, FileName, FolderPath, InitiatingProcessFileName, InitiatingProcessCommandLine\n| order by Timestamp asc",
  "DEFENDER XDR KQL — Base64-encoded command execution from the PaperCut process tree.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFolderPath has \"PaperCut\" or InitiatingProcessFileName =~ \"pc-app.exe\"\n| where ProcessCommandLine has_any (\"-enc\",\"-EncodedCommand\",\"FromBase64String\",\"base64 -d\")\n| project Timestamp, DeviceName, AccountName, ProcessCommandLine",
  "SENTINEL KQL — unauthenticated requests to PaperCut administrative paths on the default ports, to scope who could reach the interface and from where.\n\nCommonSecurityLog\n| where TimeGenerated > ago(30d)\n| where DestinationPort in (9191, 9192)\n| where RequestURL has_any (\"/app\",\"/admin\",\"/rpc/api\")\n| summarize hits = count(), paths = make_set(RequestURL, 25), firstSeen = min(TimeGenerated), lastSeen = max(TimeGenerated)\n    by SourceIP, DestinationIP\n| where hits > 20\n| order by hits desc",
  "SENTINEL KQL — the published server.log strings, where PaperCut logs are forwarded to the workspace. Run this against archived logs: the attacker deletes the live file.\n\nSyslog\n| where TimeGenerated > ago(60d)\n| where SyslogMessage has_any (\"Database error looking up cardID: VALUES CAST\", \"No suitable driver found for jdbc:no:x\")\n| project TimeGenerated, Computer, ProcessName, SyslogMessage",
  "Where server.log is missing or shorter than its rotation history implies, escalate rather than close: log destruction is part of the documented post-exploitation sequence.",
  "Given the 2023 precedent of PaperCut RCE leading to Cl0p and LockBit deployment, scope any confirmed compromise for lateral movement and staged exfiltration, not just for the web-tier artifact."
 ],
 "source": "PaperCut security bulletin (Aug 27, 2026), Huntress (John Hammond, Andrew Brandt), watchTowr (Jake Knott), The Hacker News"
},
"owncloudph": {
 "eyebrow": "ownCloud CVE-2023-49105 · CISA KEV Aug 27, 2026 · Aug 30 federal deadline · Hunt.io",
 "title": "An open directory on 31.58.209[.]241 exposed a Chinese-speaking operator's ownCloud exploitation of a Philippine nuclear research body",
 "overview": "This is the exploitation evidence behind CISA's Aug 27 KEV addition, and the actionable part is not the CVE — it was fixed in ownCloud 10.13.1 in November 2023 — but the asset class. The instance was reachable, running a default configuration with no signing key, and outside anyone's patch inventory. Hunt.io characterises the operator as conducting a deliberate intrusion against Philippine nuclear and defense-adjacent organizations, noting that the marine engineering firm's Navy ties align with interests tied to current South China Sea tensions, and that the nuclear material sought is a separate but complementary priority. Hunt.io does not assert state affiliation: its language is \"whether state-affiliated, contracted, or working independently\".",
 "technical": [
  "CVE-2023-49105 (CVSS 9.8) — ownCloud WebDAV API authentication bypass. An attacker who knows a valid username can construct signed WebDAV requests that the server accepts as an authentication action by that user, without supplying credentials, where the victim has no signing key configured. That is the default configuration. Affects core 10.6.0 through 10.13.0; fixed in 10.13.1, disclosed November 2023.",
  "Hunt.io identified an open directory on host 31.58.209[.]241 staging custom Python scripts, open-source offensive tooling (Sliver, Metasploit, Mettle) and data exfiltrated from two Philippine organizations.",
  "Five custom Python scripts implement the CVE-2023-49105 exploit using pre-signed URLs generated with an empty signing secret. Four target a single account each; the fifth enumerates the WebDAV directory and logs every download attempt.",
  "Estimated take from the nuclear research entity: 176 files, roughly 372 MB, across five staging directories — nuclear-material account records, draft strategic plans covering 2023 through 2028, research reactor core components, historical fuel inventories, presentation material, employee personal information, a 192 MB SQL dump of a ZKTeco BioTime attendance and personnel database, and credential stores including BitLocker keys, a KeePass database and AxCrypt-encrypted files.",
  "Second target: a marine engineering and shipbuilding company providing services to the Philippine Navy. The operator exploited LiteSpeed Cache for WordPress (CVE-2024-28000, CVSS 9.8) for elevated access, and a script \"brute_xmlrpc.py\" in the same directory attacked the site via XML-RPC brute force, giving a path independent of the CVE.",
  "Attribution basis: simplified Chinese in source code comments, docstrings, log output, and in the folder names used to sort stolen data.",
  "Separate and possibly unrelated finding in the same WordPress source: an active compromise using EtherHiding to pull HTML from an Ethereum smart contract and serve a Google verification page typical of ClickFix. The lure launches pcalua.exe to invoke mshta.exe and download a VBScript dropper."
 ],
 "iocs": [
  {
   "value": "31.58.209.241",
   "type": "IP",
   "note": "Open directory host staging the exploit scripts, Sliver/Metasploit/Mettle tooling and the exfiltrated data across five directories. Identified by Hunt.io.",
   "source": "https://hunt.io/blog/chinese-speaking-operator-philippine-nuclear-naval-contractor"
  },
  {
   "value": "brute_xmlrpc.py",
   "type": "Filename",
   "note": "XML-RPC brute-force script found in the open directory, targeting the WordPress site of the marine engineering firm independently of CVE-2024-28000.",
   "source": "https://hunt.io/blog/chinese-speaking-operator-philippine-nuclear-naval-contractor"
  },
  {
   "value": "Unauthenticated WebDAV requests carrying pre-signed URL parameters (OC-Credential / OC-Signature / OC-Expires) to /remote.php/dav",
   "type": "Behavior",
   "note": "The exploitation primitive: signed WebDAV requests accepted as authentication for a known username where no signing key is configured.",
   "source": "https://owncloud.com/security-advisories/webdav-api-authentication-bypass-using-pre-signed-urls/"
  },
  {
   "value": "pcalua.exe launching mshta.exe",
   "type": "Behavior",
   "note": "Execution chain of the EtherHiding/ClickFix compromise found in the same WordPress source, downloading a VBScript dropper. Hunt.io treats this as possibly unrelated to the primary intrusion.",
   "source": "https://hunt.io/blog/chinese-speaking-operator-philippine-nuclear-naval-contractor"
  },
  {
   "value": "Sliver",
   "type": "Actor Alias",
   "note": "Open-source C2 framework staged in the open directory alongside Metasploit and Mettle. Not a unique identifier — treat as tooling context, not attribution.",
   "source": "https://hunt.io/blog/chinese-speaking-operator-philippine-nuclear-naval-contractor"
  }
 ],
 "iocNote": "Hunt.io published the staging host and script names but no file hashes for the custom Python scripts and no C2 domains. Nothing here is defanged beyond the source's own treatment of the IP.",
 "mitigation": [
  "Patch ownCloud to 10.13.1 or later. FCEB agencies have an Aug 30, 2026 deadline under the KEV listing.",
  "Where patching is deferred, configure a signing key: the bypass depends on the victim account having no signing key, which is the default.",
  "Inventory for ownCloud instances that predate current asset baselines — this exposure lives in forgotten deployments, not in the managed estate. Search DNS, certificate transparency and external scan data for /remote.php/dav endpoints you do not own a ticket for.",
  "Patch LiteSpeed Cache for WordPress against CVE-2024-28000 and disable XML-RPC where it is not required; the same operator used both paths."
 ],
 "response": [
  "DEFENDER XDR KQL — any host that talked to the Hunt.io staging infrastructure.\n\nDeviceNetworkEvents\n| where Timestamp > ago(180d)\n| where RemoteIP == \"31.58.209.241\"\n| project Timestamp, DeviceName, InitiatingProcessFileName, InitiatingProcessCommandLine, RemoteIP, RemotePort, RemoteUrl\n| order by Timestamp asc",
  "DEFENDER XDR KQL — the ClickFix execution chain found in the same WordPress source.\n\nDeviceProcessEvents\n| where Timestamp > ago(90d)\n| where InitiatingProcessFileName =~ \"pcalua.exe\" and FileName =~ \"mshta.exe\"\n| project Timestamp, DeviceName, AccountName, InitiatingProcessCommandLine, ProcessCommandLine",
  "SENTINEL KQL — pre-signed WebDAV requests against ownCloud, the exploitation primitive itself.\n\nCommonSecurityLog\n| where TimeGenerated > ago(180d)\n| where RequestURL has \"/remote.php/dav\"\n| where RequestURL has_any (\"OC-Credential\",\"OC-Signature\",\"OC-Expires\")\n| summarize requests = count(), paths = dcount(RequestURL), firstSeen = min(TimeGenerated), lastSeen = max(TimeGenerated)\n    by SourceIP, DestinationIP\n| order by requests desc",
  "SENTINEL KQL — bulk WebDAV download volume per source, to detect the enumerate-and-download script regardless of the auth path used.\n\nunion isfuzzy=true\n  (CommonSecurityLog | where RequestURL has \"/remote.php/dav\" | project TimeGenerated, SourceIP, RequestURL, bytes = todouble(SentBytes)),\n  (W3CIISLog | where csUriStem has \"/remote.php/dav\" | project TimeGenerated, SourceIP = cIP, RequestURL = csUriStem, bytes = todouble(scBytes))\n| summarize files = count(), totalMB = round(sum(bytes)/1048576, 1) by SourceIP, bin(TimeGenerated, 1h)\n| where files > 50 or totalMB > 100\n| order by totalMB desc",
  "If an ownCloud instance was exposed and unpatched, treat every credential store it held as compromised — the confirmed take in this case included BitLocker keys, a KeePass database and AxCrypt-encrypted files. Rotate, re-key and re-encrypt rather than assessing likelihood."
 ],
 "source": "Hunt.io, CISA KEV, ownCloud security advisory, The Hacker News"
},
"zbtimplants": {
 "eyebrow": "VulnCheck · CVE-2026-74232 (SPEAKINGSTONE) + CVE-2026-74233 (DARKLANTERN) · Factory implants · No fixed firmware",
 "title": "Two undocumented factory implants in ZBT router firmware give unauthenticated remote root; 203 internet-facing DARKLANTERN instances across 22 countries",
 "overview": "The exposure here is procurement, not patching. These are components shipped in the firmware by the manufacturer, found on an $88 white-labeled unit bought from a US supplier, and no advisory names a fixed release. ZBT sells identical hardware and firmware to resellers who put their own name on the case, so brand is not a usable check — model number is, and the IEEE-registered MAC prefixes 78:A3:51 and F8:5E:3C both belong to Shenzhen Zhibotong Electronics, letting an owner identify the manufacturer from the device's own address. VulnCheck flags CVE-2026-74233 in its own KEV catalog, whose criteria require public reporting of exploitation in the wild; CISA's Vulnrichment, recorded Aug 27, rates exploitation as proof-of-concept. None of the three ZBT CVEs appear in CISA's KEV catalog as of version 2026.08.27.",
 "technical": [
  "CVE-2026-74232 (SPEAKINGSTONE, CVSS 4.0 9.3 / CVSS 3.1 9.8) — runs as the service yunmgrd and beacons outbound over UDP 10000 to a hardcoded C2. Because it dials outward it functions from behind NAT and ordinary egress filtering. Its protocol supports message types that execute arbitrary commands as root, exfiltrate the WAN PPPoE username and password, write and read a DNS hijack list, and open a reverse SSH tunnel. VulnCheck describes it as a surveillance implant with root access to every device it runs on.",
  "CVE-2026-74233 (DARKLANTERN, CVSS 4.0 9.3 / CVSS 3.1 9.8) — runs as the service infosrvd on UDP 9992, which the router's stock firewall opens to inbound connections from any internet address. VulnCheck's advisory describes the authentication as ineffective: it rests on a hardcoded salt and an all-zero wildcard MAC value that bypasses its own address check.",
  "Exposure measurement: between Aug 18 and Aug 21, 2026 VulnCheck identified 203 internet-facing DARKLANTERN instances across 22 countries, self-reporting 16 distinct models. That figure counts hosts that answered a probe, not devices found compromised.",
  "SPEAKINGSTONE carries a hardcoded backup C2 domain used where no primary server was configured. VulnCheck found the domain unregistered, registered it, and ran a reverse-engineered implementation of the protocol. Beacons arrived immediately; as of Aug 21, 392 unique devices had reported in, 390 in China, 83 percent on China Mobile's network, 304 of 392 broadcasting SSIDs beginning \"CMCC\", and 363 self-reporting model L3_V2_8 on firmware 3.0.0.4.528. Because only devices without a configured primary C2 reach the backup, the 392 is a floor drawn from an unrepresentative subset.",
  "Affected builds (DARKLANTERN): Zbtlink WE1326, WE357, WE5926, WE5926-WD, WE826-Q, WE826-T2, WE826-WD, WG108 and WG3526 on firmware 19.1101; WE2426-C on 19.1112; WE5926-EC_QP on 20.0516; WF3526-P on 19.051; plus CTN720-W1, LF-1541 and MT7620N on 19.1101 and WRC1 on 20.0622 listed under an unidentified vendor.",
  "Affected builds (SPEAKINGSTONE): Zbtlink L3_V2_8 on 3.0.0.4.528, WE826-T2 on 19.1101, ZBT-7628 on 1.0.0.2.007, ZBT-ZBT7621 on 1.0.0.3.001; MoreQuick MQAC-7620, MQAC-7620A, MQAP-7620, MQAP-7620A and MQAP-7628 on 1.0.0.2.000; AP522 on 1.0.0.2.014, AP7628 and HC5661A on 3.0.0.4.380, APG721B on 19.0809, HK300 on 1.0.0.2.032 and MAP-N10 on 1.0.0.2.044 under an unidentified vendor.",
  "Version-range caveat worth carrying into any scan: the advisory pages display those builds as upper bounds, while the CVE records name each firmware as a single exact build and set every other version's default status to unknown. An owner on a build outside the listed set has no published basis for deciding whether the flaw applies.",
  "Prior art: both implants were found on a ZBT-WE826-T2 whose firmware was built in 2019, predating ENDLESSDOORS (CVE-2026-66747), the phone-home implant VulnCheck disclosed on Aug 5, 2026 in at least 20 Zbtlink models. MOFI Network, which develops its own firmware for the same platform, had an image free of all three implants."
 ],
 "iocs": [
  {
   "value": "b77811db4d218c65670a6c9a5b33c30ff81c6d779e15d658643138771178a818",
   "type": "SHA256",
   "note": "yunmgrd — the SPEAKINGSTONE C2 implant binary. Published by VulnCheck.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "7e2e036fec2fe7ab4bbd43978d9296563894c92a112f5ac2f39957f12108e245",
   "type": "SHA256",
   "note": "infosrvd — the DARKLANTERN command-injection service binary. Published by VulnCheck.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "ae6c356f1f09260b859f84d994ef8423540a6c0bdf98510d86b85834283e4926",
   "type": "SHA256",
   "note": "inetdetect — companion component published alongside the two implants.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "www.ac-link.com",
   "type": "Domain",
   "note": "SPEAKINGSTONE primary C2 domain. Still resolved to 47.107.224[.]89 when checked on Aug 28, 2026.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "www.findmyipaddr.com",
   "type": "Domain",
   "note": "SPEAKINGSTONE hardcoded backup C2 domain, reached only where no primary was configured. VulnCheck registered it and sinkholed the protocol — treat resolution attempts as implant presence, not as attacker traffic.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "47.107.224.89",
   "type": "IP",
   "note": "Alibaba Cloud address in Shenzhen to which the SPEAKINGSTONE primary C2 domain resolved as of Aug 28, 2026.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "yunmgrd",
   "type": "Filename",
   "note": "Service name of the SPEAKINGSTONE implant. Beacons outbound on UDP 10000.",
   "source": "https://www.vulncheck.com/advisories/zbtlink-mqwrt-yunmgrd-cloud-c2-implant"
  },
  {
   "value": "infosrvd",
   "type": "Filename",
   "note": "Service name of the DARKLANTERN implant. Listens inbound on UDP 9992, responses on UDP 8897.",
   "source": "https://www.vulncheck.com/advisories/zbtlink-mqwrt-infosrvd-command-injection"
  },
  {
   "value": "inetdetect",
   "type": "Filename",
   "note": "Third component named in VulnCheck's indicator set.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "/etc/exec/cmd, /tmp/info.txt, /tmp/yunclient.conf",
   "type": "Filename",
   "note": "On-device paths published by VulnCheck. Present on a router, not on a managed endpoint — check via console or firmware extraction.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  },
  {
   "value": "UDP/9992 inbound, UDP/8897 responses, UDP/10000 outbound beacons",
   "type": "Behavior",
   "note": "Port set published by VulnCheck. Note a discrepancy in the published detections: one Suricata rule alerts on DARKLANTERN command output arriving on UDP 8898 while the accompanying text and scanner both use 8897 — hunt both.",
   "source": "https://www.vulncheck.com/blog/zbt-darklantern-speakingstone"
  }
 ],
 "iocNote": "VulnCheck published Suricata and YARA rules alongside the research. Carry the 8897/8898 inconsistency forward rather than picking one silently.",
 "mitigation": [
  "No fixed firmware release is named in either advisory. Where a ZBT-built router carries either service, the remediation is replacement or third-party firmware — MOFI Network's image for the same platform was free of all three implants.",
  "Block inbound traffic to UDP/9992 at the network edge. That closes the DARKLANTERN listener while a fixed release is outstanding.",
  "Block and alert on www.ac-link[.]com, www.findmyipaddr[.]com and 47.107.224[.]89 at both the egress point and the resolver, per VulnCheck's guidance for the earlier implant.",
  "Treat the LAN behind any affected router as untrusted. SPEAKINGSTONE can rewrite the device's DNS hijack list and open a reverse SSH tunnel.",
  "Identify affected devices by model number and by MAC prefix (78:A3:51, F8:5E:3C), not by the brand on the case."
 ],
 "response": [
  "SENTINEL KQL — implant C2 endpoints and the published port set, across firewall and DNS telemetry.\n\nlet zbtDomains = dynamic([\"ac-link.com\",\"findmyipaddr.com\"]);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(90d)\n   | where DestinationIP == \"47.107.224.89\"\n      or DestinationPort in (9992, 8897, 8898, 10000)\n   | project TimeGenerated, SourceIP, DestinationIP, DestinationPort, Protocol, DeviceVendor, Activity),\n  (DnsEvents\n   | where TimeGenerated > ago(90d)\n   | where Name has_any (zbtDomains)\n   | project TimeGenerated, SourceIP = ClientIP, Name, QueryType)\n| order by TimeGenerated asc",
  "DEFENDER XDR KQL — any managed endpoint reaching the implant C2, which would indicate the resolver or egress path is shared with an affected device.\n\nlet zbtDomains = dynamic([\"ac-link.com\",\"findmyipaddr.com\"]);\nDeviceNetworkEvents\n| where Timestamp > ago(90d)\n| where RemoteIP == \"47.107.224.89\" or RemoteUrl has_any (zbtDomains)\n| project Timestamp, DeviceName, RemoteIP, RemoteUrl, RemotePort, InitiatingProcessFileName, InitiatingProcessCommandLine",
  "DEFENDER XDR KQL — the three published implant hashes, for estates that mount or stage router firmware images on managed hosts.\n\nlet zbtHashes = dynamic([\n  \"b77811db4d218c65670a6c9a5b33c30ff81c6d779e15d658643138771178a818\",\n  \"7e2e036fec2fe7ab4bbd43978d9296563894c92a112f5ac2f39957f12108e245\",\n  \"ae6c356f1f09260b859f84d994ef8423540a6c0bdf98510d86b85834283e4926\"]);\nsearch in (DeviceFileEvents, DeviceProcessEvents, DeviceImageLoadEvents)\n  Timestamp > ago(180d)\n| where SHA256 in (zbtHashes)\n| project Timestamp, DeviceName, FileName, FolderPath, SHA256, InitiatingProcessFileName",
  "Where a ZBT-built device is confirmed in the estate, rotate the WAN PPPoE credentials and any credential that traversed the device's LAN — SPEAKINGSTONE exfiltrates PPPoE username and password by design.",
  "Compare the device's configured DNS servers against the expected values. A rewritten DNS hijack list is one of SPEAKINGSTONE's documented capabilities and is visible from the device's own configuration."
 ],
 "source": "VulnCheck supply chain research and advisories (zbtlink-mqwrt-yunmgrd-cloud-c2-implant, zbtlink-mqwrt-infosrvd-command-injection), CISA Vulnrichment, The Hacker News"
},
"servicenow18885": {
 "eyebrow": "ServiceNow AI Platform · CVE-2026-18885 / 18886 · 3 × CVSS 10.0 · Advisory Aug 27, 2026",
 "title": "Three of four patched ServiceNow AI Platform flaws are CVSS 10.0 and, in certain circumstances, reachable by an unauthenticated attacker",
 "overview": "ServiceNow deployed the update to hosted instances and provided it to partners and self-hosted customers, so the residual risk sits entirely with organizations running their own instances. Two of the maximum-severity flaws have published detail: an unauthenticated code injection in the GraphQL Composite Data API, and an unauthenticated improper access control in the system configuration image upload processor leading to privilege escalation. No exploitation has been reported. For a platform that typically holds the CMDB, incident data and integration credentials for the rest of the estate, an unauthenticated code-execution path is a first-order concern regardless of exploitation status.",
 "technical": [
  "CVE-2026-18885 (CVSS 10.0) — code injection in the GraphQL Composite Data API that could enable an unauthenticated user to execute arbitrary code and gain access to, or modify, instance data.",
  "CVE-2026-18886 (CVSS 10.0) — improper access control in the system configuration image upload processor that could enable an unauthenticated user to create or modify instance data, resulting in privilege escalation.",
  "Four flaws were addressed in total; three carry CVSS 10.0. The advisory was published Aug 27, 2026.",
  "ServiceNow states it deployed the security update to hosted instances and provided the update to partners and self-hosted customers. Self-hosted deployments must apply the fixes themselves."
 ],
 "iocs": [],
 "iocNote": "No indicators of compromise have been published — no exploitation has been reported and the disclosure is vendor-originated. ServiceNow instance telemetry is not present in Defender XDR, and Sentinel coverage depends on whether ServiceNow transaction and audit logs are ingested, so the hunting guidance below is conditional on that ingestion.",
 "mitigation": [
  "Self-hosted instances: apply the ServiceNow update from the Aug 27, 2026 advisory. Hosted instances were updated by ServiceNow.",
  "Confirm with any implementation partner whether they applied the update on your behalf, and record the instance version rather than accepting an assurance.",
  "Restrict network reachability of self-hosted instances to expected sources while the update is being scheduled; both documented flaws are described as reachable by an unauthenticated attacker.",
  "Treat ServiceNow's outbound integration credentials as high-value: an instance compromise is a route into every system the platform integrates with."
 ],
 "response": [
  "SENTINEL KQL — requests to the GraphQL Composite Data API and configuration image upload paths, where ServiceNow logs or fronting proxy logs are ingested. Adjust the URL fragments to your instance's routing.\n\nCommonSecurityLog\n| where TimeGenerated > ago(30d)\n| where DestinationHostName has \"service-now\" or DestinationHostName has \"servicenow\"\n| where RequestURL has_any (\"/api/now/graphql\", \"composite\", \"sys_attachment\", \"upload.do\")\n| summarize requests = count(), methods = make_set(RequestMethod, 5), statuses = make_set(tostring(EventOutcome), 10)\n    by SourceIP, RequestURL, bin(TimeGenerated, 1h)\n| order by requests desc",
  "No Defender XDR query is offered: the ServiceNow AI Platform is a SaaS or self-hosted application tier with no endpoint telemetry in Defender for Endpoint. Detection depends on ingesting ServiceNow's own transaction and audit logs into Sentinel.",
  "For self-hosted instances, review the instance's own transaction log for unauthenticated requests to the named endpoints, and audit sys_attachment and configuration-image records created outside change windows.",
  "Rotate ServiceNow integration credentials and MID Server credentials if the instance was internet-reachable and unpatched between the advisory date and remediation."
 ],
 "source": "ServiceNow security advisory (Aug 27, 2026), The Hacker News"
},
"cpanel65643": {
 "eyebrow": "cPanel & WHM · CVE-2026-65643 · All supported versions · Root code execution",
 "title": "A cPanel account holder who can add parked or addon domains can create arbitrary files and reach root on the whole server",
 "overview": "The severity here is about tenancy. On a shared hosting server, one customer account with ordinary domain-management rights can reach code execution as root, which means every other tenant on that machine. cPanel describes the issue as critical and has patched all supported branches. No exploitation has been reported. For organizations that run cPanel for internal or customer-facing hosting, the practical question is which accounts hold parked or addon domain permissions, and whether the server was patched before that answer mattered.",
 "technical": [
  "CVE-2026-65643 — a flaw in the domain parking and addon domain functionality of cPanel and WebHost Manager (WHM), affecting all supported versions.",
  "An authenticated account holder who can add parked or addon domains can create arbitrary files on the server. cPanel states: \"Successful exploitation leads to code execution as the root user, giving an attacker full control of the server.\"",
  "Patched versions: 11.110.0.141 or later, 11.134.0.53 or later, 11.136.0.37 or later, 11.138.0.2 or later, and 11.138.1.7 or later (WP Squared). The notification names WP Squared in its patched list and does not mention DNSOnly.",
  "cPanel patched three separate flaws in July 2026; this is a further critical issue in the same product line.",
  "No CVSS score was published in the reviewed sources; the CVE row carries no score rather than an inferred one."
 ],
 "iocs": [],
 "iocNote": "No indicators of compromise published — the disclosure is vendor-originated with no reported exploitation. Hunting is therefore behavioural: unexpected root-owned file creation from the cPanel service tree.",
 "mitigation": [
  "Update to a patched build: 11.110.0.141, 11.134.0.53, 11.136.0.37, 11.138.0.2 or 11.138.1.7 (WP Squared) or later.",
  "Audit which accounts hold permission to add parked or addon domains, and remove it where the account does not need it. The flaw requires that specific capability.",
  "On multi-tenant servers, treat the patch as urgent regardless of trust in individual account holders: any compromised customer account becomes a root-level compromise of every tenant.",
  "Confirm the DNSOnly footprint separately — cPanel's notification does not mention it in the patched list."
 ],
 "response": [
  "DEFENDER XDR KQL — root-level file creation and privilege changes initiated from the cPanel service tree on Linux endpoints running Defender for Endpoint.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName has_any (\"cpsrvd\",\"cpanel\",\"whostmgr\",\"cpdavd\")\n| where ProcessCommandLine has_any (\"chmod\",\"chown\",\"/etc/\",\"/usr/local/cpanel/\",\"crontab\",\"systemctl\")\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, FileName, ProcessCommandLine\n| order by Timestamp desc",
  "DEFENDER XDR KQL — file writes outside expected document roots by the cPanel process tree, the primitive the flaw provides.\n\nDeviceFileEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName has_any (\"cpsrvd\",\"cpanel\",\"whostmgr\")\n| where ActionType == \"FileCreated\"\n| where not(FolderPath startswith \"/home/\")\n| project Timestamp, DeviceName, FolderPath, FileName, InitiatingProcessFileName, InitiatingProcessCommandLine",
  "SENTINEL KQL — WHM and cPanel domain-management actions, to reconstruct who added parked or addon domains during the exposure window.\n\nSyslog\n| where TimeGenerated > ago(60d)\n| where ProcessName has_any (\"cpsrvd\",\"cpanel\",\"whostmgr\")\n| where SyslogMessage has_any (\"parked\",\"addon\",\"addondomain\",\"parkeddomain\")\n| project TimeGenerated, Computer, ProcessName, SyslogMessage\n| order by TimeGenerated asc",
  "Where the server was unpatched and multi-tenant, review /etc, cron directories and any systemd unit files for entries created outside change windows before declaring the incident closed."
 ],
 "source": "cPanel customer notification, The Hacker News"
},
"geoserver": {
 "eyebrow": "GeoServer · GHSA-mqjf-5f49-2fjh (CVSS 9.8) · No CVE assigned · Exploited pre-patch, now fixed",
 "title": "Probed within hours of a Twitter disclosure: GeoServer's jsonArrayContains SQL injection is now fixed in 3.0.1, 2.28.5 and 2.27.6",
 "overview": "The interesting part of this one is the interval. A researcher posted the flaw to X on Aug 12, 2026 at 10:46 UTC; watchTowr saw exploitation attempts within hours and hundreds of them from a small pool of source IPs. The flaw was unpatched at that point and the observed activity was reconnaissance — triggering errors, not proceeding further. A fix has since shipped. GeoServer's history matters for prioritisation: CVE-2024-36401 was used in 2024 to pull compromised systems into DDoS and cryptomining botnets and residential proxy networks, and the product has multiple CISA KEV entries. Deployment is concentrated in government, defense, science, engineering and technology.",
 "technical": [
  "The flaw is an unauthenticated SQL injection in GeoServer's jsonArrayContains function. The disclosing researcher, @q1uf3ng, stated that where the database account is sa (system administrator) it is possible to reach remote code execution.",
  "Reported RCE-capable configurations include SQL Server with an sa-privileged account; reporting also names PostGIS and Oracle JDBC data stores as relevant deployment paths.",
  "Disclosure timeline: public on X at 10:46 UTC on Aug 12, 2026, with no vendor advisory and no patch at that moment. watchTowr observed exploitation attempts within hours.",
  "watchTowr's Jake Knott: attackers were probing to identify vulnerable systems, triggering errors and not proceeding further, and he warned this was unlikely to remain the case given GeoServer's track record of being targeted and exploited at scale with multiple KEV entries.",
  "Fixed releases: GeoServer 3.0.1, 2.28.5 and 2.27.6. The issue is tracked as GHSA-mqjf-5f49-2fjh and rated CVSS 9.8. No CVE identifier has been assigned.",
  "Prior GeoServer exploitation at scale: CVE-2024-36401 (CVSS 9.8) in the GeoTools component was used in 2024 for DDoS botnets, cryptocurrency mining and residential proxy networks."
 ],
 "iocs": [],
 "iocNote": "watchTowr described hundreds of attempts from a small pool of source IP addresses but did not publish those addresses, and no file or C2 indicators have been released. Detection is therefore request-pattern based, using the vulnerable function name.",
 "mitigation": [
  "Upgrade to GeoServer 3.0.1, 2.28.5 or 2.27.6.",
  "Reduce exposure regardless of patch state: put GeoServer behind a VPN, reverse proxy or IP allow-list where the service does not need to be public. Where public access is unavoidable, treat it as a temporary high-risk exception.",
  "Check the privilege level of the database account GeoServer uses. The RCE path depends on an over-privileged account such as sa; downgrading it removes the escalation even where injection is possible.",
  "Given the 2024 precedent, scope any confirmed compromise for cryptomining, proxyware and DDoS agent deployment rather than assuming targeted intent."
 ],
 "response": [
  "SENTINEL KQL — requests referencing the vulnerable function, the only reliable network-side signal for this flaw.\n\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(60d)\n   | where RequestURL has \"jsonArrayContains\"\n   | project TimeGenerated, SourceIP, RequestURL, DestinationIP, DeviceAction),\n  (W3CIISLog\n   | where TimeGenerated > ago(60d)\n   | where csUriQuery has \"jsonArrayContains\" or csUriStem has \"jsonArrayContains\"\n   | project TimeGenerated, SourceIP = cIP, RequestURL = strcat(csUriStem, \"?\", csUriQuery), DestinationIP = sIP, DeviceAction = tostring(scStatus))\n| summarize attempts = count(), firstSeen = min(TimeGenerated), lastSeen = max(TimeGenerated) by SourceIP, DestinationIP\n| order by attempts desc",
  "SENTINEL KQL — SQL error responses returned by GeoServer endpoints, which is what the observed probing produced.\n\nW3CIISLog\n| where TimeGenerated > ago(60d)\n| where csUriStem has_any (\"/geoserver\",\"/wfs\",\"/ows\",\"/wms\")\n| where scStatus in (500, 502)\n| summarize errors = count(), paths = make_set(csUriStem, 10) by cIP, bin(TimeGenerated, 1h)\n| where errors > 10\n| order by errors desc",
  "DEFENDER XDR KQL — the escalation outcome: the Java servlet container or the SQL Server process spawning a shell on a GeoServer host.\n\nDeviceProcessEvents\n| where Timestamp > ago(60d)\n| where InitiatingProcessFileName in~ (\"java.exe\",\"javaw.exe\",\"tomcat.exe\",\"sqlservr.exe\",\"java\")\n| where FileName in~ (\"cmd.exe\",\"powershell.exe\",\"pwsh.exe\",\"sh\",\"bash\",\"curl.exe\",\"wget\")\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, FileName, ProcessCommandLine\n| order by Timestamp desc",
  "DEFENDER XDR KQL — xp_cmdshell enablement on any SQL Server backing a GeoServer data store, the specific path from sa-privileged injection to OS command execution.\n\nDeviceProcessEvents\n| where Timestamp > ago(60d)\n| where InitiatingProcessFileName =~ \"sqlservr.exe\"\n| project Timestamp, DeviceName, FileName, ProcessCommandLine, InitiatingProcessCommandLine\n| order by Timestamp desc",
  "Because exploitation attempts began on Aug 12 and the fix arrived later, hunt back to Aug 12 rather than to the patch date on any instance that was internet-facing."
 ],
 "source": "watchTowr (Jake Knott), @q1uf3ng, GeoServer advisory GHSA-mqjf-5f49-2fjh, Security Affairs, The Hacker News"
},
 "uat10147": {
  "eyebrow": "Cisco Talos · Crimeware · AI-assisted intrusion",
  "title": "UAT-10147 and the SPECTRE implant: agentic AI applied to web server exploitation at scale",
  "overview": "Talos frames this as more than AI-assisted scripting. The actor used AI-generated playbooks, exploit automation, iterative exploit refinement, adaptive troubleshooting and validation workflows, which Talos describes as a transition from AI-assisted scripting toward semi-autonomous offensive orchestration. Talos also collected prompt logs from threat actor endpoints running Claude Code, CodeX, Cursor and Gemini, and found indications of AI-assisted development in both SPECTRE and the Specter Linux rootkit. The practical exposure for defenders is unremarkable in mechanism and serious in scale: internet-facing IIS, ASP.NET, Zimbra, Nacos, Telerik UI and AjaxPro instances exploited through publicly disclosed RCE bugs.",
  "technical": [
   "Initial access is exploitation of publicly disclosed vulnerabilities in exposed web applications and server software, including Zimbra, Nacos, Telerik UI, AjaxPro and ASP.NET environments (T1190).",
   "On Windows, once the actor has RCE on an IIS server, the main staging script downloads an EfsPotato privilege-escalation tool, a follow-on batch file, and a QuasarRAT payload masquerading as svchosts.exe. The script elevates privileges, deletes staging material and modifies Microsoft Defender settings.",
   "Talos reports the actor adds C:\\Windows\\System32\\inetsrv and C:\\Windows\\SysWOW64\\inetsrv to Microsoft Defender Antivirus exclusions — the directories where IIS tooling and components reside.",
   "Reported post-compromise activity on Windows also includes persistent web shells (including in-memory deployment), creation of local administrator accounts, IIS directory survey, and scheduled tasks disguised as \"Google Chrome Start\".",
   "SPECTRE is a custom cross-platform implant supporting C2 communications, process injection, credential theft and anti-analysis; the Windows build uses BYOVD for EDR evasion. On Linux the actor deployed a kernel rootkit named Specter and dropped web shells after gaining RCE.",
   "Tooling also includes NoodleRAT, Gh0stCringe, Meterpreter, SEO fraud utilities and local privilege escalation tools. Monetization combines SEO fraud with data theft.",
   "Talos found the campaign after discovering an open directory hosted at 139.180.197[.]150, observed communicating with a compromised machine; a text file on the C2 held a target list of approximately 170,000 URLs.",
   "DEFENDER XDR KQL — Defender Antivirus exclusion added for IIS directories, the campaign's most distinctive host artifact.\n\nlet iisPaths = dynamic([\"inetsrv\",\"System32\\\\inetsrv\",\"SysWOW64\\\\inetsrv\"]);\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where FileName in~ (\"powershell.exe\",\"pwsh.exe\",\"cmd.exe\")\n| where ProcessCommandLine has_any (\"Add-MpPreference\",\"Set-MpPreference\",\"ExclusionPath\",\"ExclusionProcess\")\n| where ProcessCommandLine has_any (iisPaths)\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, ProcessCommandLine\n| order by Timestamp desc",
   "DEFENDER XDR KQL — w3wp.exe or Linux web service accounts spawning shells, the web shell execution signature on both platforms.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName in~ (\"w3wp.exe\",\"httpd\",\"nginx\",\"java\",\"tomcat\")\n| where FileName in~ (\"cmd.exe\",\"powershell.exe\",\"bash\",\"sh\",\"curl\",\"wget\",\"whoami\",\"certutil.exe\")\n| project Timestamp, DeviceName, InitiatingProcessFileName, FileName, ProcessCommandLine, AccountName\n| order by Timestamp desc"
  ],
  "mitigation": [
   "Patch the named initial-access surface first: Zimbra, Nacos, Telerik UI, AjaxPro and exposed ASP.NET/IIS applications. The actor's advantage is breadth of scanning, not exploit novelty.",
   "Alert on changes to Defender Antivirus exclusions and treat exclusion additions covering inetsrv as an incident, not a configuration event. Where possible, lock exclusions via tamper protection and policy so local additions fail.",
   "Enable and enforce vulnerable-driver blocking (Microsoft vulnerable driver blocklist, HVCI where supported) to raise the cost of the BYOVD EDR neutralization step.",
   "On Linux web servers, monitor for kernel module loads and unexpected LKM persistence; a kernel rootkit defeats host-level inspection once loaded, so detection needs to sit earlier in the chain or off-host.",
   "Review local administrator account creation and scheduled tasks on IIS hosts, including tasks named to imitate browser updaters."
  ],
  "response": [
   "Search DNS, proxy and firewall logs for 139.180.197[.]150 across the retention window; Talos identified it as an actor open directory in contact with a compromised host.",
   "Hunt for svchosts.exe (note the trailing s) anywhere on disk or in process history — Talos reports QuasarRAT masquerading under that name.",
   "SENTINEL KQL — outbound traffic to the Talos-reported open directory host.\n\nlet actorIp = \"139.180.197.150\";\nunion isfuzzy=true\n  (CommonSecurityLog | where DestinationIP == actorIp | project TimeGenerated, Src = SourceIP, Dst = DestinationIP, Tool = DeviceProduct),\n  (VMConnection | where RemoteIp == actorIp | project TimeGenerated, Src = Computer, Dst = RemoteIp, Tool = \"VMConnection\"),\n  (DnsEvents | where IPAddresses has actorIp | project TimeGenerated, Src = Computer, Dst = IPAddresses, Tool = \"DNS\")\n| order by TimeGenerated desc",
   "If a Windows IIS host is implicated, treat Defender exclusions as untrustworthy for the period before discovery and rescan with exclusions removed."
  ],
  "iocs": [
   {
    "type": "IP",
    "value": "139.180.197[.]150",
    "note": "Actor open directory observed communicating with a compromised machine (Talos)"
   },
   {
    "type": "Filename",
    "value": "svchosts.exe",
    "note": "QuasarRAT payload masquerading as a system binary"
   },
   {
    "type": "Behavior",
    "value": "Add-MpPreference -ExclusionPath C:\\Windows\\System32\\inetsrv",
    "note": "Defender AV exclusion added for IIS directories"
   },
   {
    "type": "Behavior",
    "value": "Scheduled task named \"Google Chrome Start\"",
    "note": "Persistence disguised as a browser updater task"
   },
   {
    "type": "String",
    "value": "EfsPotato",
    "note": "Privilege escalation tool staged after initial RCE"
   },
   {
    "type": "Actor Alias",
    "value": "UAT-10147",
    "note": "Cisco Talos designation; implants SPECTRE (cross-platform) and Specter (Linux rootkit)"
   }
  ]
 },
 "sp63520": {
  "eyebrow": "Microsoft SharePoint · Exploit chain · Probing observed",
  "title": "The SharePoint auth-bypass-to-RCE chain is now fully public and being probed",
  "overview": "The two halves of this chain came from the same researcher and were patched a cycle apart, which left a window where the auth bypass was public and the RCE was not. Both PoCs are now out, and Defused reports honeypot activity walking the full chain — JWT bypass, admin enumeration, then probing of the Business Data Catalog sink — while stopping short of observed code execution. Patching CVE-2026-55040 alone breaks the chain, per Rapid7.",
  "technical": [
   "CVE-2026-55040 is an authentication bypass in SharePoint's JWT token validation pipeline; an unauthenticated attacker can perform operations as the user they identify as, including a site administrator. Microsoft fixed it in the July 2026 Patch Tuesday.",
   "CVE-2026-63520 is a vulnerability in SharePoint's Business Connectivity Services that unauthenticated attackers can chain after CVE-2026-55040 to achieve RCE, via unsafe .NET type instantiation.",
   "Timeline: Rapid7 disclosed the chain to Microsoft on May 18, 2026; Microsoft split the fixes across July (auth bypass) and August (RCE). Rapid7's Stephen Fewer published the CVE-2026-55040 PoC on Aug 11. Honeypot providers reported exploitation immediately; VulnCheck KEV added it Aug 12 and CISA KEV on Aug 18.",
   "VulnCheck's Initial Access Intelligence team built a complete RCE exploit plus a version scanner, Suricata and Snort rules, encrypted and unencrypted PCAPs and ASM queries.",
   "Defused, Aug 25: the JWT bypass was exercised, followed by heavy admin enumeration and probing of the Business Data Catalog sink behind CVE-2026-63520, with no code execution observed yet.",
   "Shadowserver tracks more than 8,700 internet-exposed SharePoint servers; the proportion that are honeypots or already patched is not known.",
   "BDC abuse is a recurring SharePoint pattern — CVE-2023-24955 and CVE-2019-1257 both involved uploading a BDCM file to the BusinessDataMetadataCatalog and triggering the flaw with a POST to /_vti_bin/client.svc/ProcessQuery."
  ],
  "mitigation": [
   "Apply the July and August SharePoint updates. If only one can be scheduled immediately, CVE-2026-55040 is the one that breaks the chain.",
   "Follow CISA's guidance not to expose SharePoint servers directly to the internet, and apply Microsoft's security-hardening guidance including AMSI integration and key rotation.",
   "CISA confirmed on Aug 25 that CVE-2026-45659 is being used in ransomware campaigns; if your SharePoint patching is behind, assume the ransomware-adjacent CVEs are the more urgent half of the backlog."
  ],
  "response": [
   "DEFENDER XDR KQL — SharePoint worker process spawning shells, the outcome to detect if the chain completes.\n\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName =~ \"w3wp.exe\"\n| where InitiatingProcessCommandLine has_any (\"SharePoint\",\"SecurityTokenServiceApplicationPool\")\n| where FileName in~ (\"cmd.exe\",\"powershell.exe\",\"csc.exe\",\"certutil.exe\",\"bitsadmin.exe\")\n| project Timestamp, DeviceName, FileName, ProcessCommandLine, InitiatingProcessCommandLine\n| order by Timestamp desc",
   "SENTINEL KQL — requests to the BDC ProcessQuery sink and BDCM upload paths used by this and prior SharePoint chains.\n\nW3CIISLog\n| where TimeGenerated > ago(30d)\n| where csUriStem has_any (\"/_vti_bin/client.svc/ProcessQuery\",\"BusinessDataMetadataCatalog\",\"/_vti_bin/\")\n| where csMethod == \"POST\"\n| summarize Requests = count(), Statuses = make_set(scStatus, 10), Agents = make_set(csUserAgent, 5) by cIP, csUriStem, bin(TimeGenerated, 1h)\n| where Requests > 5\n| order by Requests desc",
   "No file or network indicators have been published for this activity; the honeypot reporting describes behaviour rather than infrastructure."
  ],
  "iocs": []
 },
 "kevaug27": {
  "eyebrow": "CISA KEV · Aug 27, 2026 · Three additions",
  "title": "CISA adds ownCloud, Linux kernel and JFrog Artifactory flaws to the KEV catalog",
  "overview": "Two of the three are short-fuse: ownCloud CVE-2023-49105 and Linux kernel CVE-2026-53362 carry an Aug 30 federal deadline, and JFrog Artifactory CVE-2026-66384 is due Sep 10. The ownCloud entry is a 2023 CVE, so the operational question is whether long-lived file-sharing deployments were ever patched. The Linux kernel entry is described by CISA only as an unspecified vulnerability allowing privilege escalation through the IPv6 networking subsystem, affecting multiple distributions including SUSE and Red Hat.",
  "technical": [
   "CVE-2023-49105 — ownCloud improper authentication. CISA lists it as exploited; the vendor advisory covers the WebDAV API authentication path.",
   "CVE-2026-53362 — Linux kernel, unspecified vulnerability permitting privilege escalation via the IPv6 networking subsystem. CISA notes it can impact multiple products, including but not limited to SUSE, Red Hat and others using Linux. Forensic triage is required per BOD 26-04.",
   "CVE-2026-66384 — JFrog Artifactory improper limitation of a pathname to a restricted directory (CWE-22). An authenticated user can write data outside the intended Docker cache path under specific remote-repository conditions, writing files to arbitrary locations accessible to the Artifactory process.",
   "Deadlines: Aug 30, 2026 for CVE-2023-49105 and CVE-2026-53362; Sep 10, 2026 for CVE-2026-66384."
  ],
  "mitigation": [
   "Inventory ownCloud instances by version. Deployments that predate the 10.13.x line are the ones to confirm first.",
   "Patch Linux hosts per distribution advisories. Where kernel reboots must be scheduled, prioritise multi-tenant hosts and anything running untrusted workloads, since the impact is local privilege escalation.",
   "Upgrade Artifactory self-managed to a fixed release per the JFrog security advisories page. Until then, review which accounts hold permissions on remote Docker repositories — exploitation requires authentication.",
   "Under BOD 26-04, the Linux kernel entry requires checking whether the system was compromised before the patch was applied, not just patching."
  ],
  "response": [
   "Artifactory: review the artifact storage tree for files written outside expected cache directories, and audit the process account's writable paths.",
   "ownCloud: check WebDAV access logs for requests that returned data without a corresponding authentication event.",
   "DEFENDER XDR KQL — Artifactory process writing outside its expected storage tree (CVE-2026-66384 path traversal).\n\nDeviceFileEvents\n| where InitiatingProcessFileName in~ (\"java.exe\",\"java\")\n| where InitiatingProcessCommandLine has \"artifactory\"\n| where ActionType in (\"FileCreated\",\"FileModified\")\n| where not(FolderPath has_any (\"/var/opt/jfrog\",\"/opt/jfrog\",\"artifactory/data\",\"artifactory/backup\"))\n| project Timestamp, DeviceName, FolderPath, FileName, InitiatingProcessCommandLine\n| order by Timestamp desc",
   "SENTINEL KQL — ownCloud WebDAV responses served without a preceding authentication event (CVE-2023-49105).\n\nlet window = 5m;\nlet dav = W3CIISLog\n| where csUriStem startswith \"/remote.php/dav\" or csUriStem startswith \"/remote.php/webdav\"\n| where scStatus in (200, 207);\ndav\n| summarize Requests = count(), Paths = make_set(csUriStem, 20) by cIP, bin(TimeGenerated, window)\n| where Requests > 20\n| order by Requests desc",
   "Linux: review privilege-escalation telemetry on hosts with IPv6 enabled where local code execution is available to non-admin users."
  ],
  "iocs": []
 },
 "unifi067": {
  "eyebrow": "Ubiquiti · UniFi · SAB-067",
  "title": "Ubiquiti SAB-067: 22 UniFi vulnerabilities, three maximum severity and unauthenticated",
  "overview": "The three maximum-severity issues each sit in a different product pillar — video surveillance, the OS itself, and VoIP — and none requires credentials. Ubiquiti scored the three at 9.9; TechTimes reported them as CVSS 10.0. Ubiquiti has not confirmed active exploitation. The precedent worth weighing is SAB-064: patched, then exploited, then a three-day CISA deadline in June, with Bishop Fox demonstrating the chain to remote code execution with elevated privileges.",
  "technical": [
   "CVE-2026-77537 — improper input validation in the UniFi Protect Application (video surveillance management). Unauthenticated attackers can compromise unpatched devices.",
   "CVE-2026-77550 — improper neutralization of CRLF sequences in certain devices running UniFi OS, used to bypass authentication to those devices or instances.",
   "CVE-2026-77554 — improper input validation in the UniFi Talk Application (VoIP), leading to command injection.",
   "SAB-067 covers 22 vulnerabilities in total across UniFi OS, Protect, Talk, Access, Network, storage devices, gateways, routers and recorders. Cybernews counted 21 rated 9.0 or higher.",
   "Exposure scale for the prior advisory cycle: Censys tracked over 100,000 internet-exposed UniFi OS instances, nearly 50,000 of them in the United States."
  ],
  "mitigation": [
   "Apply the SAB-067 updates, prioritising internet-facing consoles and any UniFi Protect or Talk deployment reachable from an untrusted network.",
   "Remove management interfaces from direct internet exposure. The CRLF authentication bypass is only reachable by something that can talk to the device.",
   "Review administrative accounts on affected platforms after patching, on the assumption that an authentication bypass leaves no failed-login trail."
  ],
  "response": [
   "Check for unexpected administrative sessions or configuration changes on UniFi consoles in the period before patching.",
   "SENTINEL KQL — CRLF sequences in requests to UniFi management paths (CVE-2026-77550 authentication bypass attempts).\n\nCommonSecurityLog\n| where DeviceVendor has_any (\"Ubiquiti\",\"UniFi\") or DestinationPort in (443, 8443)\n| where RequestURL has_any (\"%0d%0a\",\"%0D%0A\",\"\\r\\n\",\"%0a\",\"%0d\")\n| project TimeGenerated, SourceIP, DestinationIP, RequestURL, DeviceAction\n| order by TimeGenerated desc",
   "DEFENDER XDR KQL — outbound connections from hosts to UniFi consoles on management ports, to scope who can reach the vulnerable interface.\n\nDeviceNetworkEvents\n| where RemotePort in (443, 8443, 8080, 8880)\n| where RemoteIPType == \"Private\"\n| summarize Attempts = count(), Hosts = dcount(DeviceName) by RemoteIP, RemotePort\n| where Hosts > 1\n| order by Attempts desc",
   "Watch for a public proof-of-concept: the SAB-064 chain went from patch to published PoC and detection script on GitHub, and then to a CISA deadline."
  ],
  "iocs": []
 },
 "magairports": {
  "eyebrow": "Transportation Systems · UK · Customer data",
  "title": "Manchester Airports Group breach affects 8.7 million customers",
  "overview": "MAG has not disclosed how the attackers gained access or who was responsible. The data set is contact and vehicle information rather than payment data, which makes the downstream risk phishing and pretexting against a very large, identifiable population of travellers. MAG has warned customers directly and says it will never contact them unexpectedly to ask for payment or banking information.",
  "technical": [
   "Data obtained relates to car park, lounge and Fast Track bookings and in-airport WiFi sign-ups at Manchester, Stansted and East Midlands.",
   "Known compromised data types: email addresses, phone numbers, vehicle registration numbers, postcodes. MAG states neither it nor the affected system held bank or payment details.",
   "A MAG spokesperson told The Register that the majority of the 8.7 million customers had only email addresses compromised; not all data types apply to all customers.",
   "MAG became aware of the incident on Tuesday, restricted access to affected systems, engaged specialist advisers, and notified the National Cyber Security Centre and the Information Commissioner's Office. Online Manage My Booking access was temporarily suspended; bookings remain valid."
  ],
  "mitigation": [
   "Brief staff who travel through MAG airports that parking and travel-themed phishing referencing real bookings is now cheap for attackers to produce.",
   "If your organisation books airport parking or Fast Track through corporate accounts, treat those mailboxes as a targeted phishing surface and confirm payment-change requests out of band.",
   "Vehicle registration plus postcode is a useful identity-verification pair in some UK services; check whether any of your own verification flows rely on data of that class."
  ],
  "response": [
   "Add MAG-branded domains and booking-confirmation lures to phishing-simulation and mail-filtering watchlists for the next several weeks.",
   "DEFENDER XDR KQL — inbound mail impersonating airport parking and booking brands after the MAG disclosure.\n\nEmailEvents\n| where Timestamp > ago(30d)\n| where Subject has_any (\"car park\",\"parking\",\"Fast Track\",\"lounge\",\"booking reference\",\"Manchester Airport\",\"Stansted\",\"East Midlands\")\n| where not(SenderFromDomain in~ (\"manchesterairport.co.uk\",\"stanstedairport.com\",\"eastmidlandsairport.com\",\"magairports.com\"))\n| project Timestamp, SenderFromAddress, SenderFromDomain, RecipientEmailAddress, Subject, UrlCount, DeliveryAction\n| order by Timestamp desc",
   "Monitor for the data appearing on leak forums, which would change the population from notified-only to publicly exposed."
  ],
  "iocs": []
 },
 "aithreatsignal": {
  "eyebrow": "AI threat landscape · Research and policy",
  "title": "Unit 42 measures AI-linked malware reaching production; industry coalition calls for a cyber defense surge",
  "overview": "Two data points from the same week pull in different directions and are worth holding together. Unit 42's sample analysis puts a number on how little AI-linked malware currently reaches production endpoints, while the open letter argues the trajectory is steep. Neither is an operational alert; both are useful when setting expectations with leadership about AI-driven attack volume.",
  "technical": [
   "Palo Alto Networks Unit 42 analyzed 405 AI-linked malware samples and found only 12 reached production endpoints.",
   "More than 100 technology, cybersecurity and financial-services organizations joined OpenAI in an open letter published Thursday, Aug 27, titled \"A call for collective action on cyber defense.\"",
   "The letter states that AI-enabled cyberattacks will become far more widespread and sophisticated in the coming months, naming hospitals, water treatment plants and the infrastructure that powers the internet."
  ],
  "mitigation": [
   "Use the Unit 42 figure when scoping AI-specific detection investment: the current production-endpoint hit rate is low relative to sample volume.",
   "Where AI capability does change the picture in current reporting, it is in phishing and social-engineering quality rather than in novel malware, so continue to weight identity and email controls."
  ],
  "response": [
   "No indicators. Track Unit 42 and vendor telemetry for whether the production-endpoint proportion moves in subsequent reporting periods."
  ],
  "iocs": []
 },
 "bostonsci": {
  "eyebrow": "Medical technology · Operational disruption · Global",
  "title": "Boston Scientific hit by cyberattack disrupting IT systems and causing operational disruptions globally",
  "overview": "No actor attribution or ransomware branding has been published. For healthcare delivery organizations the actionable read is supply continuity: identify which Boston Scientific product lines your clinical services depend on and whether you hold buffer stock. For manufacturers, this is the third medical-device or PLM-adjacent incident in the current cycle and reinforces that design and manufacturing systems are being selected deliberately.",
  "technical": [
   "Publicly available detail is limited to IT system disruption with global operational impact. No CVE, initial-access vector, or actor has been confirmed.",
   "Comparable pattern in the same period: the Cl0p campaign against PTC Windchill and FlexPLM listed more than 40 organizations on its leak site as of Aug 19, 2026, chaining a FlexPLM information-disclosure flaw with CVE-2026-12569 (critical unauthenticated RCE)."
  ],
  "mitigation": [
   "Healthcare delivery organizations: check dependency on affected product lines and confirm buffer stock for anything used in time-critical procedures.",
   "Manufacturers: segment PLM, MES and CAD environments from general corporate IT, and confirm that vendor remote-access paths into those environments are individually authenticated and time-bounded.",
   "Verify that engineering data repositories are covered by the same backup and immutability standard as finance and ERP systems — they usually are not."
  ],
  "response": [
   "Monitor for a leak-site listing naming Boston Scientific, which would reclassify this from disruption to data exposure and change supplier-notification obligations.",
   "If you exchange design or order data with the company, review inbound integrations and shared credentials for anomalous use during the disruption window."
  ],
  "iocs": []
 },
 "gputhor": {
  "eyebrow": "Hardware · Rowhammer · GPU memory",
  "title": "GPUThor: new Rowhammer attack bypasses ECC protections on NVIDIA GPUs",
  "overview": "Rowhammer induces bit flips in DRAM by hammering adjacent rows. ECC was the mitigation of record; GPUThor demonstrates that ECC on NVIDIA GPU memory can be bypassed to achieve both denial of service and root-level privilege escalation. The practical risk sits with anyone running untrusted or semi-trusted workloads on shared GPU hardware — AI inference platforms, research clusters, and GPU cloud tenancy — where an attacker can legitimately schedule code on the same device as another tenant.",
  "technical": [
   "Attack class: Rowhammer bit-flip induction against GPU DRAM, with a technique that defeats the ECC correction path rather than avoiding it.",
   "Demonstrated impact: denial of service against the device, and privilege escalation to root on the host.",
   "Exposure precondition: the attacker must be able to execute code on the GPU — which is the normal operating model for shared inference, training, and GPU-as-a-service platforms, not an unusual condition."
  ],
  "mitigation": [
   "Treat GPU co-tenancy as a trust boundary. Where untrusted workloads share a physical GPU, move them to dedicated devices or separate hosts until vendor guidance is published.",
   "Track NVIDIA's security bulletin channel for driver and firmware mitigations; hardware-level attacks are typically mitigated in firmware and scheduler behavior rather than the OS.",
   "For AI platform teams: inventory which internal or customer workloads currently share GPUs, and record which of those are attacker-controllable code paths."
  ],
  "response": [
   "Add GPU ECC error counters to monitoring. A rising rate of corrected errors on a specific device is the observable precursor to a Rowhammer attempt.",
   "Review host privilege-escalation telemetry on GPU nodes, which are frequently excluded from EDR coverage for performance reasons."
  ],
  "iocs": []
 },
 "atfqilin": {
  "eyebrow": "Qilin · Federal agency · Confirmed compromise",
  "title": "ATF confirms one of its systems was compromised after breach claims by the Qilin ransomware gang",
  "overview": "The agency's confirmation is scoped to a single system, which is the standard early posture and should not be read as final scope. For organizations outside the federal space, the useful signal is that Qilin remains operationally active against government and mid-market targets and continues to publish on a leak site — meaning exposure is a disclosure problem on a compressed timeline, not only an availability problem.",
  "technical": [
   "Qilin operates as a ransomware-as-a-service program with an affiliate model and a public leak site used to pressure victims during negotiation.",
   "Current ransomware economics per Unit 42's 2026 incident response data: median payment among organizations that paid rose to $500,000, while negotiated reductions between initial demand and final payment reached a median of 61%. Roughly 41% of victims restored from backup without paying.",
   "Identity remains the dominant initial-access route in that same dataset — identity weaknesses appeared in 89% of investigations, and 65% of initial access was identity-driven."
  ],
  "mitigation": [
   "Confirm that offline or immutable backups exist for the systems whose loss would stop operations, and that a restore has actually been tested this quarter — restore capability is what removes the payment decision.",
   "Enforce phishing-resistant MFA on remote access and administrative paths; identity, not exploitation, is the majority route in current incident data.",
   "Pre-agree a negotiation and disclosure posture with legal and communications before an incident. The 61% median reduction figure only accrues to organizations that negotiate deliberately."
  ],
  "response": [
   "Monitor Qilin's leak site for your own name and those of critical suppliers; leak-site listing frequently precedes any vendor notification you would otherwise receive.",
   "Treat any confirmed intrusion as credential exposure across the affected trust boundary and rotate accordingly rather than waiting for scoping to complete."
  ],
  "iocs": []
 },
 "avada": {
  "eyebrow": "WordPress · Avada theme · Unauthenticated RCE chain",
  "title": "Critical vulnerability chain in the Avada WordPress theme allows unauthenticated arbitrary PHP execution",
  "overview": "The exposure is a chain, not a single bug, and it requires no authentication. Avada ships with a bundled builder and options framework, so the practical patch unit is the theme plus its bundled plugins — updating one and not the others leaves the chain reachable. Treat every Avada site as internet-facing code execution until the version is confirmed patched.",
  "technical": [
   "Chained flaws in the Avada theme reach arbitrary PHP execution with no authentication required. The attack surface is the theme's own AJAX and options handling rather than WordPress core.",
   "Avada is a commercial theme distributed through a marketplace, so sites often run a version pinned at purchase or build time and receive no automatic updates. Bundled plugin components (Fusion Builder / Fusion Core) version independently of the theme.",
   "On shared or multi-tenant hosting, PHP execution as the web user typically exposes adjacent site directories and any database credentials stored in wp-config.php."
  ],
  "mitigation": [
   "Update Avada and its bundled Fusion components to the current release from the vendor's own update channel — marketplace themes do not auto-update, so confirm the installed version string rather than trusting the site's update notice.",
   "Where an immediate update is not possible, put the site behind a WAF rule blocking unauthenticated POSTs to the theme's AJAX endpoints, and disable PHP execution in wp-content/uploads.",
   "Inventory which of your domains run Avada. Marketing sites are the common blind spot; check DNS records and CDN origins, not just the managed WordPress estate."
  ],
  "response": [
   "Search the webroot for PHP files created or modified after the vulnerability's disclosure date, particularly in wp-content/uploads and theme directories.",
   "Rotate database credentials in wp-config.php and any API keys stored in theme or plugin options if the site was reachable and unpatched.",
   "Review access logs for repeated unauthenticated POSTs to admin-ajax.php with theme-specific action parameters."
  ],
  "iocs": []
 },
 "teampcp": {
  "eyebrow": "Law Enforcement · Aug 27, 2026 · Supply chain follow-up",
  "title": "AFP charges two Western Australian men over TeamPCP, the syndicate behind the March 2026 Trivy, Checkmarx KICS and LiteLLM compromises",
  "overview": "Arrests do not close the exposure. The March 2026 TeamPCP compromises hit tools that sit inside CI/CD pipelines with broad repository and cloud credentials — Trivy and Checkmarx KICS scan infrastructure-as-code, and LiteLLM proxies model API keys. Any credential that passed through those tools between the compromise window and remediation should still be treated as exposed, per the FBI's July 2 advisory. Charging two principals reduces the operator population but not the value of the stolen material, which affiliated actors are assessed likely to continue using.",
  "technical": [
   "Compromised components (March 2026): Trivy and Checkmarx KICS — open-source scanners typically run with read access to source repositories and, in many pipelines, cloud credentials for live-account scanning. LiteLLM — an AI gateway that brokers provider API keys for downstream applications.",
   "The exposure pattern for all three is the same: the tool is trusted inside the build boundary, so credentials it holds are rarely rotated on a schedule and rarely appear in secret-scanning inventories.",
   "AFP and Western Australia Police Force executed search warrants at Cottesloe, Hamilton Hill and Mandurah on Aug 26, 2026 and seized electronic devices for forensic analysis; charges were laid the following day. Alleged payments were received in cryptocurrency, value under investigation."
  ],
  "mitigation": [
   "Rotate every credential that was reachable from Trivy, Checkmarx KICS or LiteLLM during the March 2026 window — repository tokens, cloud roles assumed by the scanner, and any model-provider API keys held by the gateway.",
   "Pin scanner and gateway versions to known-good releases and verify checksums against the vendor's published values rather than trusting a package registry mirror.",
   "Audit CI/CD service accounts for privileges the pipeline does not need — scanners rarely require write access to repositories or long-lived cloud credentials."
  ],
  "response": [
   "Review billing and usage anomalies on model-provider accounts brokered through LiteLLM: unexplained inference spend is the cheapest available indicator of stolen key use.",
   "Search cloud audit logs for API calls made by scanner service identities from source IPs outside your build infrastructure ranges."
  ],
  "iocs": []
 },
 "manticore": {
  "eyebrow": "Iran · IRGC-affiliated · Espionage",
  "title": "Group-IB documents new Nimbus Manticore infrastructure and previously undocumented malware, calling the IRGC-linked actor among the most active Iranian APTs of 2026",
  "overview": "Two separate state programs are now running job-lure espionage against the same target set. Lazarus (DPRK) Operation Dream Job and Nimbus Manticore (Iran) both approach defense, aerospace and IT-services staff with fabricated recruitment, which means a single detection strategy covers both: treat unsolicited recruiter contact that moves to file delivery or an off-platform installer as a security event, not an HR event.",
  "technical": [
   "Naming overlap to reconcile across feeds: Nimbus Manticore = GalaxyGato = Mirage Kitten = Screening Serpens = Smoke Sandstorm = Subtle Snail = UNC1549. Assessed as linked to Tortoiseshell (Imperial Kitten / Unyielding Wasp), within the Charming Kitten (Eclipsed Wasp) cluster.",
   "Historical targeting for the cluster: defense, aerospace, IT service providers and military organizations across the Middle East and the United States, active since at least July 2018.",
   "Unit 42 tracks the same cluster as Screening Serpens and documents AppDomainManager hijacking plus new RAT variants against technology and defense sectors — the concrete execution technique to detect alongside the social-engineering entry point.",
   "AppDomainManager hijacking abuses .NET's configuration-driven assembly loading: a benign signed executable is made to load an attacker DLL by planting a companion .config file, so the process tree looks legitimate.",
   "Delivery pattern: job-opportunity social engineering (a Dream Job analogue) leading to malware execution. Group-IB's analysis adds previously undocumented malware families and new infrastructure to the cluster."
  ],
  "mitigation": [
   "Brief staff in defense, aerospace and IT-services functions that recruitment approaches which move to file transfer, a download link, or a screening tool installer are a known state-actor delivery route.",
   "Block execution of user-downloaded installers from home directories and browser download paths on engineering endpoints; both Lazarus and Nimbus Manticore rely on the target running a delivered binary.",
   "Where IT service providers hold access into your environment, confirm they are covered by the same brief — the cluster's historical pattern is to compromise the provider and pivot."
  ],
  "response": [
   "Correlate any recent recruiter-themed phishing reports against the ATT&CK techniques below rather than closing them as low-severity user reports.",
   "SENTINEL KQL — Recruitment-themed lures followed by an executable or archive download on the same endpoint\n\nlet lures = dynamic([\"job description\", \"recruiter\", \"opportunity\", \"screening\", \"assessment\", \"candidate\"]);\nEmailEvents\n| where TimeGenerated > ago(30d)\n| where Subject has_any (lures)\n| project LureTime = TimeGenerated, RecipientEmailAddress, Subject, SenderFromAddress\n| join kind=inner (\n    DeviceFileEvents\n    | where TimeGenerated > ago(30d)\n    | where FileName endswith \".exe\" or FileName endswith \".zip\" or FileName endswith \".iso\" or FileName endswith \".lnk\"\n    | project DropTime = TimeGenerated, DeviceName, FileName, FolderPath, InitiatingProcessAccountUpn\n) on $left.RecipientEmailAddress == $right.InitiatingProcessAccountUpn\n| where DropTime between (LureTime .. LureTime + 7d)\n| project LureTime, DropTime, RecipientEmailAddress, Subject, DeviceName, FileName, FolderPath\n| order by DropTime desc"
  ],
  "iocs": []
 },
 "netscaler": {
  "eyebrow": "Citrix NetScaler · CISA KEV Aug 26, 2026 · Aug 29 federal deadline",
  "title": "Citrix NetScaler CVE-2026-8452 exploited in the wild: web shells dropped days after watchTowr PoC, CISA KEV Aug 26 with an Aug 29 federal deadline",
  "overview": "CVE-2026-8452 is a pre-authentication heap memory overflow in the NetScaler AAA service, triggered when the appliance parses a malformed SAML PrefixList. It carries a CVSS 4.0 score of 8.8 and affects appliances configured as a Gateway (SSL VPN, ICA Proxy, CVPN, RDP Proxy) or as an AAA virtual server — the standard NetScaler Gateway deployment mode, not a niche configuration. Citrix framed the impact as unpredictable behavior and denial of service; watchTowr Labs demonstrated pre-auth RCE. CISA classifies it as CWE-119 and did not mandate forensic triage under BOD 26-04, which should not be read as a low-risk designation.",
  "technical": [
   "Root cause: heap memory overflow in the code that parses SAML single sign-on messages. Reachable without authentication (AV:N/AC:L/PR:N/UI:N), CVSS 4.0 vector CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:H/VI:L/VA:H/SC:L/SI:L/SA:L.",
   "Precondition: the appliance must be configured as a Gateway (SSL VPN, ICA Proxy, CVPN, RDP Proxy) or an AAA virtual server. On older firmware the Gateway/AAA configuration alone is sufficient; SAML need not be configured.",
   "Two sibling bugs share the same exposure surface. CVE-2026-8451 is a memory disclosure bug in the same SAML feature, also pre-auth, and already under active exploitation. CVE-2026-19490 (CVSS 9.3 authentication bypass, disclosed Aug 19) needs the same SAML configuration on current builds. One inventory pass covers all three.",
   "Observed post-exploitation (Previdian, Aug 26): web shells written as x.php and z.php, followed by discovery commands id and echo. Three unique source IPs from three different countries in the first wave."
  ],
  "mitigation": [
   "Upgrade to a fixed build immediately: NetScaler ADC/Gateway 14.1-72.61 or later, 13.1-63.18 or later, 14.1-FIPS 14.1-72.61-FIPS or later, 13.1-FIPS / 13.1-NDcPP 13.1-37.272 or later. Go past the minimum build — Citrix has published further advisories since June 30.",
   "Secure Private Access Hybrid deployments using NetScaler instances are also affected and must be upgraded separately.",
   "Because CVE-2026-13474 changed HTTP/2 handling in the same code path, configure the Http2SmallWndTimeout parameter after upgrading, per Citrix's bulletin.",
   "Bishop Fox published a non-crashing patch-verification tool: github.com/BishopFox/CVE-2026-8452-check — use it to confirm the fix actually landed rather than trusting the reported build string."
  ],
  "response": [
   "Hunt for web shells on the appliance and any adjacent web roots — specifically files named x.php and z.php, and any PHP written after June 30, 2026.",
   "Review NetScaler logs for SAML assertion parsing errors and appliance restarts, which are the observable side effect of failed overflow attempts.",
   "Treat any confirmed compromise as credential exposure: NetScaler sits in the authentication path, so rotate service accounts, session keys, and any LDAP/AD bind credentials configured on the appliance.",
   "DEFENDER XDR KQL — Discovery commands and PHP web shell writes following NetScaler exploitation\n\nlet suspectShells = dynamic([\"x.php\", \"z.php\"]);\nDeviceFileEvents\n| where Timestamp > ago(30d)\n| where FileName has_any (suspectShells) or (FileName endswith \".php\" and FolderPath has_any (\"netscaler\", \"vpn\", \"nsconfig\"))\n| project Timestamp, DeviceName, FileName, FolderPath, InitiatingProcessFileName, InitiatingProcessCommandLine\n| order by Timestamp desc",
   "SENTINEL KQL — Inbound SAML POSTs to NetScaler AAA endpoints from low-reputation sources\n\nCommonSecurityLog\n| where TimeGenerated > ago(14d)\n| where DeviceVendor has \"Citrix\" or DeviceProduct has_any (\"NetScaler\", \"ADC\")\n| where RequestURL has_any (\"/saml\", \"/cgi/samlauth\", \"/nf/auth\")\n| summarize attempts = count(), urls = make_set(RequestURL, 10) by SourceIP, bin(TimeGenerated, 1h)\n| where attempts > 20\n| order by attempts desc"
  ],
  "iocs": [
   {
    "type": "Filename",
    "value": "x.php",
    "note": "Web shell dropped post-exploitation (Previdian, Aug 26, 2026)"
   },
   {
    "type": "Filename",
    "value": "z.php",
    "note": "Second web shell name observed in the same wave"
   },
   {
    "type": "Behavior",
    "value": "id; echo <marker>",
    "note": "Discovery commands run through the web shell to confirm execution context"
   }
  ]
 },
 "kevlegacy": {
  "eyebrow": "CISA KEV · Aug 26, 2026 · Aug 29 federal deadline",
  "title": "CISA's Aug 26 KEV batch is mostly archaeology: five pre-2023 CVEs added alongside NetScaler, spanning Red Hat, Microsoft SQL Server, Ajax.NET and the Linux kernel",
  "overview": "The pattern is the point: an active cybercrime group is getting value out of decade-old server-side flaws, which means the exposure lives in build images, appliance firmware and vendor-bundled components rather than in the managed patch estate. Cisco Talos attributes exploitation of four of these to UAT-10147, hitting Windows and Linux web servers across education, media, technology and gaming. Under BOD 26-04, FCEB agencies prioritize KEV entries on publicly exposed assets that grant total control post-exploitation — so the correct first move is an inventory sweep of internet-reachable web servers, not a blanket emergency patch cycle. Note a published-score discrepancy on CVE-2021-23758: heise reports CVSS 9.8, Infosecurity Magazine reports 8.1; we carry 9.8 and flag the conflict.",
  "technical": [
   "CVE-2015-3246 (CVSS 5.1) — Red Hat libuser race condition. Attributed to UAT-10147 by Cisco Talos. Local privilege escalation; reachable on any RHEL/CentOS-derived host still running the affected libuser package.",
   "CVE-2015-5287 (CVSS 7.8) — Red Hat Automatic Bug Reporting Tool (ABRT) privilege escalation. Attributed to UAT-10147. Frequently present on server builds where ABRT was never removed from the base image.",
   "CVE-2019-1068 (CVSS 8.8) — Microsoft SQL Server remote code execution. No public information on how it is being exploited; earliest deadline of the batch at Aug 29. The exposure is usually embedded or vendor-bundled SQL instances that fall outside the managed patch inventory.",
   "CVE-2021-23758 (CVSS 9.8, disputed as 8.1) — Ajax.NET Professional deserialization of untrusted data. Attributed to UAT-10147. Legacy .NET web applications; the library is often vendored into an application rather than installed as a tracked dependency.",
   "CVE-2022-0995 (CVSS 7.8) — Linux kernel out-of-bounds write in the watch_queue subsystem. Attributed to UAT-10147. Local privilege escalation to root; relevant as a post-compromise step on unpatched kernels."
  ],
  "mitigation": [
   "Run an inventory pass first: these five will not appear in a modern vulnerability feed for most estates because the affected software predates current asset baselines. Query build images, appliance firmware, and vendor-bundled components.",
   "Prioritize internet-reachable assets and anything that grants total control post-exploitation, per BOD 26-04's risk-based language, before touching internal legacy hosts.",
   "For CVE-2019-1068 and CVE-2021-23758, treat the finding as an application-ownership problem — identify who owns the legacy app before opening a patch ticket that nobody can action."
  ],
  "response": [
   "Confirm whether the affected assets were already exposed before the patch is applied — BOD 26-04 sets expectations for checking pre-patch compromise, and legacy CVEs added to KEV often indicate long-running exploitation.",
   "For the two Linux privilege-escalation entries, review recent local privilege-escalation telemetry on high-value hosts rather than treating them as purely theoretical."
  ],
  "iocs": []
 },
 "patchtugsaug": {
  "eyebrow": "Lazarus / Operation Dream Job · CVE-2026-68820 · CISA KEV · afd.sys · FudModule v3.1",
  "title": "Operation Dream Job (Lazarus): afd.sys LPE zero-day + FudModule v3.1 rootkit deploying ForestTiger and Troy backdoors against defense/aerospace via fake job offers",
  "tags": [
   [
    "crit",
    "DPRK · Active Espionage"
   ],
   [
    "high",
    "CISA KEV · FudModule v3.1 · Defense/Aerospace"
   ]
  ],
  "overview": "Check Point Research disclosed Lazarus Group's latest wave of Operation Dream Job in August 2026 — a targeted espionage campaign against defense, aerospace, aviation, drones, robotics, and military technology organizations in Europe (France, Germany), India, and Brazil. Attackers impersonate legitimate recruiters via LinkedIn and email, luring engineers and technical staff with fake job offers from Lockheed Martin or Enveil (a real US privacy technology company whose identity was misused). Victims who engage receive either a malicious ZIP archive (Chain 1) or are directed to SEO-poisoned websites impersonating Enveil to download SecurityPDF, a trojanized PDF viewer (Chain 2). Both chains deliver MISTPEN — a fileless in-memory downloader that communicates exclusively through Microsoft Graph API and OneDrive, making traffic appear as legitimate cloud storage activity. MISTPEN validates the target with screenshots and reconnaissance before delivering the privilege escalation payload. CVE-2026-68820 (afd.sys use-after-free, CVSS 7.0) elevates from standard user to SYSTEM. FudModule v3.1 is then deployed into the kernel, killing 94 ETW providers and blinding all user-space security tools. Final payloads are ForestTiger (established Lazarus RAT) or Troy, a new 17-command modular implant. C2 is routed through at least 17 compromised legitimate web servers (Roundcube, WordPress, PrestaShop) running RelayShell — a PHP webshell that uses file-based command relay to blend malicious traffic with normal web activity. Lazarus ran this zero-day for at least five weeks before Check Point's responsible disclosure triggered Microsoft's August 11 Patch Tuesday fix. Compiled FudModule artifact timestamp: July 7, 2026.",
  "technical": [
   "CVE-2026-68820 (CVSS 7.0, CWE-416 Use-After-Free): A race condition in afd.sys (Ancillary Function Driver for WinSock) — the kernel driver that manages network socket operations. When multiple threads interact concurrently with socket-related kernel state, one code path can free a memory object while another continues to access it. Lazarus's exploit repeatedly triggers this race condition until the timing window is hit, achieving a kernel read/write primitive. Confirmed to support Windows 11 builds 26100 (24H2) and 26200 (25H2). Patched August 11, 2026 Patch Tuesday. CISA KEV deadline August 25 (now passed). Note: this is Lazarus's second consecutive afd.sys zero-day — CVE-2024-38193 was exploited by the same group in 2024 for the same FudModule rootkit delivery, suggesting a sustained vulnerability research programme focused on this specific driver.",
   "Infection Chain 1 (DLL Sideloading):\n1. Victim receives fake recruiter message with Lockheed Martin job description lure\n2. Encrypted ZIP archive delivered containing: (a) legitimate signed PDF viewer, (b) malicious libmupdf.dll, (c) encrypted payload file disguised as PDF\n3. Launching the PDF viewer silently side-loads libmupdf.dll, which decrypts and executes the payload in memory\n4. MISTPEN downloader runs in-memory, no disk artifact beyond the DLL",
   "Infection Chain 2 (SecurityPDF / Enveil Impersonation):\n1. Victim directed to SEO-poisoned websites (envell.xyz, enveil.online) appearing as top search results for 'Enveil SecurityPDF'\n2. SecurityPDF — a trojanized version of the open-source MuPDF PDF viewer — is downloaded and installed\n3. The modified MuPDF code paths (File→Open dialog and drag-and-drop routine) extract and execute an encrypted payload from crafted PDF documents\n4. Payload executes MISTPEN in memory",
   "MISTPEN (in-memory downloader, first documented by Mandiant 2024):\n- Communicates exclusively via Microsoft Graph API to attacker-controlled OneDrive accounts; all traffic AES-encrypted\n- Performs reconnaissance and captures screenshots to validate target is a worthwhile espionage subject\n- Only delivers escalation payload to validated targets (reduces detection surface)\n- Once SYSTEM is achieved via FudModule, MISTPEN is re-injected into a SYSTEM process for persistence without EDR visibility",
   "FudModule v3.1 (kernel-mode rootkit, Afd4Eop12_x64.dll, compiled July 7, 2026 22:07:44 UTC):\n- Exploits CVE-2026-68820 to achieve kernel read/write primitive → SYSTEM\n- Kills 94 ETW (Event Tracing for Windows) providers — eliminates telemetry from nearly every Windows monitoring subsystem\n- Removes kernel minifilter callbacks (disrupts file system monitoring by AV/EDR)\n- Disables NT Kernel Logger and suppresses crash dump generation\n- Generic security-product suppression (v3.1 drops the Defender-specific and AhnLab-specific bypasses from v3.0 in favor of a universal approach)\n- NEW in v3.1: Tampers with Windows Smart App Control by resetting its reputable-policy state and forcing a code-integrity policy reload — bypasses software trust verification\n- Injects MISTPEN into a SYSTEM process so subsequent activity runs with SYSTEM privileges and without EDR user-space visibility",
   "Final payloads — ForestTiger or Troy:\n- ForestTiger: established Lazarus backdoor, well-documented across multiple prior campaigns. Provides long-term remote access.\n- Troy (new, 17-command modular 64-bit DLL implant): supports reconnaissance, file exfiltration, remote shell access, process management, in-memory DLL injection, and configuration updates. C2 over HTTP with Base64-encoded JSON task envelopes.",
   "C2 infrastructure — RelayShell architecture:\n- At least 17 compromised legitimate web servers identified as relay nodes\n- Server types: Roundcube webmail (some compromised via CVE-2025-49113 using dark web credentials), WordPress, and PrestaShop\n- RelayShell: PHP webshell deployed on relay nodes that forwards commands through file-based messaging rather than direct execution — makes traffic appear as normal HTTP web activity\n- Attacker origins obscured via ExpressVPN\n- This architecture means IOC-based blocking of C2 IPs blocks legitimate websites, not Lazarus infrastructure directly"
  ],
  "iocs": [
   {
    "value": "envell.xyz",
    "type": "Domain",
    "note": "Lazarus-operated site impersonating Enveil (note double-L). SEO-optimized to appear in searches for \"Enveil SecurityPDF\". Delivers SecurityPDF trojanized PDF viewer.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "enveil.online",
    "type": "Domain",
    "note": "Second Lazarus-operated Enveil impersonation site. Same delivery purpose as envell.xyz.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "uxtramine.org",
    "type": "Domain",
    "note": "Additional Lazarus infrastructure associated with Operation Dream Job C2 or delivery.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "135.181.67.203",
    "type": "IP",
    "note": "Lazarus-associated IP infrastructure, Operation Dream Job 2026 campaign.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "135.181.185.158",
    "type": "IP",
    "note": "Lazarus-associated IP infrastructure, Operation Dream Job 2026 campaign.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "SecurityPDF",
    "type": "Filename",
    "note": "Trojanized PDF viewer (MuPDF-based) used in Chain 2. Delivered from envell.xyz and enveil.online. Executes MISTPEN when a crafted PDF is opened.",
    "source": "https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/"
   },
   {
    "value": "libmupdf.dll",
    "type": "Filename",
    "note": "Malicious DLL for sideloading in Chain 1. Dropped alongside legitimate PDF viewer in encrypted ZIP. Loads MISTPEN in memory.",
    "source": "https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/"
   },
   {
    "value": "Afd4Eop12_x64.dll",
    "type": "Filename",
    "note": "FudModule v3.1 kernel-mode rootkit. Compiler timestamp July 7, 2026 22:07:44 UTC. Exploits CVE-2026-68820 for SYSTEM access and kills 94 ETW providers.",
    "source": "https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/"
   },
   {
    "value": "2b4987c07a3d9a9a5d1a9bf4efa3d1903e775090b611710edafdc92874265ca8",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point). Component role not individually specified in public disclosure.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "13d10bc99f7f7abe7ee0902be87920b73b2ea41bd9683dbfcad340dacbcdef79",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "a673ae661593c0de9bbb815593b816a6853dad6d55ad5042d2ef1875cd13d6e7",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "d578c28c9afe7457a0d81f6701332ef8197e8f7468de654935fb29a50ea66459",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "acb97cec84e08b89f41967a24e965d1fd2c51751cef158f7aa35bb4306b87b97",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "db3d69b7eeda2e35e23006bf4b7e206281fce809584207214fc213f9bc30376d",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "a738059ce07c951c31ab2da3d93d8f69bff32f9b7d933dbf5943441b9cc99075",
    "type": "SHA256",
    "note": "Operation Dream Job malware sample (Rewterz/Check Point).",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "329dcba41a6a070dae647c9d72ec5fec",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "ecbe5171265aef1f88d3b12a7891a949",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "8a1ff3e23a209bfe920e01a61a6769aa",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "56d15f308984c1a388c112ac39dfb18a",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "07c9e9716abfdb91cb11ac1dfd0ea536",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "718706333b6f2251f13f62885ba0156d",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "07bfd8b5cf77a22d6029c3fcf9157ecd",
    "type": "MD5",
    "note": "Operation Dream Job malware sample MD5.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "9eec3bd5ea0686f22d6d68b2d99151211b89d912",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "8a269ae11275421e6302ab3714fc61e1b7960576",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "b68c0cf7d1e563dad02fb2fad3590e43399c140b",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "684538f963443a15872c79771197135224aea34e",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "1857213d27b7ae42147f820218b92a4158837335",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "e69d84517c8f95173a0a8a3d0f5dcf0fbe051a0e",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "60226f03e6ac978eb4ddbb55fa2f23f68aaabe53",
    "type": "SHA1",
    "note": "Operation Dream Job malware sample SHA1.",
    "source": "https://rewterz.com/threat-advisory/windows-afd-sys-zero-day-exploited-by-lazarus-active-iocs"
   },
   {
    "value": "Lazarus Group",
    "type": "Actor Alias",
    "note": "Primary attribution. DPRK state-sponsored threat actor responsible for Operation Dream Job. Also tracked as HIDDEN COBRA, Labyrinth Chollima.",
    "source": "https://research.checkpoint.com/2026/shattering-the-dream-when-a-job-offer-becomes-a-zero-day-attack/"
   }
  ],
  "iocNote": "IOC sources: Check Point Research (primary — full campaign report) and Rewterz threat advisory (full hash set, domains, IPs). All hashes represent malicious samples from the July–August 2026 campaign wave. Individual component-to-hash mappings have not been publicly disclosed; treat all as high-confidence Operation Dream Job indicators. The RelayShell C2 relay nodes use compromised legitimate infrastructure — blocking those IPs would disrupt legitimate services. Detection should focus on behavioral indicators and the 3 Lazarus-controlled domains and 2 IPs listed.",
  "mitigation": [
   "Apply Microsoft's August 2026 Patch Tuesday cumulative update immediately to close CVE-2026-68820, especially on Windows 11 builds 26100 and 26200. Verify actual patch installation (not just deployment status) via WSUS/Intune compliance reporting — patching failure on high-value systems used by engineers in defense/aerospace/aviation roles is the primary risk factor.",
   "Targeted user awareness for defense/aerospace/aviation staff: Lazarus uses polished fake LinkedIn and email recruitment messages impersonating major companies (Lockheed Martin, Enveil). Train engineers to verify recruiter identity via a second channel before downloading any file. Legitimate recruiters do not require you to download custom PDF viewers.",
   "Block the three known Lazarus domains at DNS/proxy: envell[.]xyz, enveil[.]online, uxtramine[.]org. Note the typosquat: envell.xyz uses two L's vs. the legitimate enveil.com (one L). Block both the domains and the two associated IPs: 135.181.67.203 and 135.181.185.158.",
   "Add the 7 SHA256 hashes to your EDR and SIEM block/alert lists. Deploy the IOCs to Microsoft Defender for Endpoint custom indicators (IndicatorType: FileSha256, Action: Alert).",
   "Prevent DLL sideloading: GPO or AppLocker to block DLL execution from user-writable directories (Downloads, Temp, AppData). MISTPEN is side-loaded via libmupdf.dll from these locations in Chain 1.",
   "Patch Roundcube, WordPress, and PrestaShop immediately including CVE-2025-49113. Lazarus actively compromises these platforms to build C2 relay infrastructure — your own servers may be used as relay nodes against other victims.",
   "Restrict Microsoft Graph API and OneDrive access for non-O365 processes via Conditional Access. MISTPEN's entire command channel runs through OneDrive — anomalous Graph API calls from processes that should not use cloud storage are the primary detection signal."
  ],
  "response": [
   "Hunt for FudModule indicators — check for the filename Afd4Eop12_x64.dll on all endpoints, especially those belonging to users in defense-adjacent roles. Also hunt for SecurityPDF.exe and libmupdf.dll (unexpected, unsigned, in user-writable directories).",
   "Check for anomalous ETW provider state — FudModule v3.1 kills 94 ETW providers. On potentially compromised machines, run `logman query providers` and compare the active provider list against a known-good baseline. Missing providers that should be present may indicate rootkit activity.",
   "Hunt for MISTPEN's Graph API / OneDrive C2 channel — look for processes that should not be making Microsoft Graph API calls (non-Office applications, processes running from Temp or AppData directories) connecting to graph.microsoft.com or *.sharepoint.com.",
   "If a device is suspected compromised by FudModule: do not rely on any EDR telemetry from that device — FudModule's kernel-level operations blind user-space tools. Collect a memory image for offline analysis before attempting remediation. Check Point Research recommends treating these as a full incident-response engagement, not a routine endpoint clean.",
   "DEFENDER XDR KQL — Detect Operation Dream Job IOCs: known Lazarus domains, IPs, and file hashes from Rewterz/Check Point Research advisory.\n\n// Operation Dream Job — IOC Detection (Domains + IPs + Hashes)\n// Source: Check Point Research + Rewterz advisory, Aug 2026\n// Hashes: all 7 SHA256 from campaign\nlet dj_domains = dynamic([\"envell.xyz\",\"enveil.online\",\"uxtramine.org\"]);\nlet dj_ips     = dynamic([\"135.181.67.203\",\"135.181.185.158\"]);\nlet dj_sha256  = dynamic([\n    \"2b4987c07a3d9a9a5d1a9bf4efa3d1903e775090b611710edafdc92874265ca8\",\n    \"13d10bc99f7f7abe7ee0902be87920b73b2ea41bd9683dbfcad340dacbcdef79\",\n    \"a673ae661593c0de9bbb815593b816a6853dad6d55ad5042d2ef1875cd13d6e7\",\n    \"d578c28c9afe7457a0d81f6701332ef8197e8f7468de654935fb29a50ea66459\",\n    \"acb97cec84e08b89f41967a24e965d1fd2c51751cef158f7aa35bb4306b87b97\",\n    \"db3d69b7eeda2e35e23006bf4b7e206281fce809584207214fc213f9bc30376d\",\n    \"a738059ce07c951c31ab2da3d93d8f69bff32f9b7d933dbf5943441b9cc99075\"\n]);\n(\n    DeviceNetworkEvents\n    | where Timestamp > ago(30d)\n    | where RemoteUrl has_any (dj_domains) or RemoteIP in (dj_ips)\n    | project Timestamp, DeviceName, RemoteUrl, RemoteIP, InitiatingProcessFileName, InitiatingProcessCommandLine\n)\n| union (\n    DeviceFileEvents\n    | where Timestamp > ago(30d)\n    | where SHA256 in (dj_sha256)\n       or FileName in~ (\"SecurityPDF.exe\",\"libmupdf.dll\",\"Afd4Eop12_x64.dll\",\"RelayShell.php\")\n    | project Timestamp, DeviceName, FileName, FolderPath, SHA256, InitiatingProcessFileName\n)\n| sort by Timestamp desc",
   "DEFENDER XDR KQL — Detect MISTPEN's OneDrive/Graph API C2 channel: non-Office processes making Microsoft Graph API connections, consistent with MISTPEN's command-and-control method.\n\n// MISTPEN C2 Detection — Anomalous Graph API / OneDrive Access\n// MISTPEN communicates exclusively through Microsoft Graph API and OneDrive\n// Flag: non-Office process connecting to Graph or OneDrive\nDeviceNetworkEvents\n| where Timestamp > ago(30d)\n| where RemoteUrl has_any (\"graph.microsoft.com\",\"onedrive.live.com\",\"sharepoint.com/personal\")\n| where not(InitiatingProcessFileName has_any (\n    \"outlook.exe\",\"teams.exe\",\"msedge.exe\",\"chrome.exe\",\"firefox.exe\",\n    \"onedrive.exe\",\"word.exe\",\"excel.exe\",\"powerpnt.exe\",\n    \"winword.exe\",\"msteams.exe\",\"msedgewebview2.exe\"\n))\n| where not(FolderPath has_any (\"Program Files\",\"Microsoft\",\"Windows\"))\n| project Timestamp, DeviceName, InitiatingProcessFileName,\n    InitiatingProcessFolderPath, InitiatingProcessCommandLine,\n    RemoteUrl, RemoteIP\n| sort by Timestamp desc",
   "DEFENDER XDR KQL — Detect FudModule v3.1 privilege escalation and ETW tampering: kernel driver load from user-writable path followed by rapid SYSTEM process injection, consistent with afd.sys exploit + FudModule deployment.\n\n// FudModule v3.1 — afd.sys Exploit + Kernel Rootkit Behavioral Detection\n// Flags: (1) DLL loaded from user-writable path by unsigned/untrusted process\n//        (2) Rapid user→SYSTEM privilege escalation sequence\n//        (3) Known FudModule file artifacts\n(\n    DeviceImageLoadEvents\n    | where Timestamp > ago(30d)\n    | where FolderPath has_any (\"\\\\Users\\\\\",\"\\\\Temp\\\\\",\"\\\\AppData\\\\\",\"\\\\Downloads\\\\\")\n    | where FileName endswith \".dll\"\n    | where not(InitiatingProcessFolderPath has_any (\"Program Files\",\"Windows\",\"Microsoft\"))\n    | project Timestamp, DeviceName, FileName, FolderPath, SHA256,\n        InitiatingProcessFileName, InitiatingProcessCommandLine\n)\n| union (\n    DeviceProcessEvents\n    | where Timestamp > ago(30d)\n    | where FileName in~ (\"Afd4Eop12_x64.dll\",\"libmupdf.dll\",\"SecurityPDF.exe\")\n       or ProcessCommandLine has_any (\"Afd4Eop12\",\"SecurityPDF\",\"libmupdf\")\n    | project Timestamp, DeviceName, FileName, ProcessCommandLine,\n        InitiatingProcessFileName, AccountName\n)\n| sort by Timestamp desc",
   "SENTINEL KQL — Detect Operation Dream Job reconnaissance phase: rapid screenshot capture + Microsoft Graph API calls from unexpected process, consistent with MISTPEN target validation before dropping FudModule.\n\n// MISTPEN Reconnaissance Phase Detection (Sentinel + MDE via SecurityEvents)\n// MISTPEN takes screenshots to validate target before escalating — \n// look for screenshot tools + Graph API access in close temporal proximity\nlet screen_procs = DeviceProcessEvents\n| where TimeGenerated > ago(30d)\n| where FileName in~ (\"snippingtool.exe\",\"screenshot.exe\",\"printscreen.exe\")\n   or ProcessCommandLine has_any (\"screenshot\",\"screencapture\",\"bmp\",\"PrintScreen\")\n| where InitiatingProcessFileName !in~ (\"explorer.exe\",\"svchost.exe\")\n| project ScreenTime = TimeGenerated, DeviceName, ScreenProc = FileName,\n    ScreenCmd = ProcessCommandLine;\nlet graph_net = DeviceNetworkEvents\n| where TimeGenerated > ago(30d)\n| where RemoteUrl has \"graph.microsoft.com\"\n| where InitiatingProcessFileName !in~ (\"teams.exe\",\"outlook.exe\",\"onedrive.exe\",\"msedge.exe\")\n| project GraphTime = TimeGenerated, DeviceName, GraphProc = InitiatingProcessFileName,\n    GraphUrl = RemoteUrl;\nscreen_procs\n| join kind=inner graph_net on DeviceName\n| where abs(datetime_diff('minute', ScreenTime, GraphTime)) < 10\n| project DeviceName, ScreenTime, ScreenProc, ScreenCmd, GraphTime, GraphProc, GraphUrl\n| sort by ScreenTime desc"
  ],
  "source": "Check Point Research, BleepingComputer, Rewterz, SecurityWeek, TechTimes, SOCPrime",
  "sourceNote": "Jul 7 – Aug 25, 2026"
 },
 "vcenter": {
  "eyebrow": "VMware vCenter · CVE-2026-59310 · CVSS 9.8 · APT Exploitation Confirmed",
  "title": "vCenter CVE-2026-59310 now actively exploited: APT actor hit 361 victim IPs across 47 countries in 5 days",
  "tags": [
   [
    "crit",
    "APT Exploited"
   ],
   [
    "high",
    "CVSS 9.8 · 361 Victims"
   ]
  ],
  "overview": "VMware vCenter CVE-2026-59310 — a directory-traversal vulnerability in the vCenter Syslog server — has moved from 'patch-window closing' to confirmed mass exploitation. QUIRSO (German DFIR firm) discovered active exploitation during an incident response engagement and published findings Aug 10. An APT actor is exploiting internet-accessible vCenter instances via CVE-2026-59310, deploying reverse_ssh to establish persistent outbound SSH control connections that bypass inbound connection blocking. Exploitation began just 5 days after Broadcom's July 29 disclosure. 361 victim IPs observed across 47 countries, with 95% compromised by Aug 5 — indicating automated or near-automated exploitation at scale. Broadcom has no workaround; patching is the only remediation.",
  "technical": [
   "CVE-2026-59310 (CVSS 9.8): Directory traversal in the vCenter Syslog server component. An unauthenticated attacker with network access to vCenter can traverse to arbitrary paths and achieve remote code execution with system-level privileges — no credentials required.",
   "Broadcom disclosed the flaw on July 29 in VMSA-2026-0006. Exploitation began August 3 — just 5 days post-disclosure. 151 additional victim IPs appeared on August 4 alone, indicating automated scanning and exploitation at scale.",
   "Post-exploitation persistence: attacker drops and executes reverse_ssh (open-source SSH reverse shell framework) as a malicious cron job, establishing outbound C2 connections that bypass firewall rules blocking inbound SSH. The reverse tunnel gives the attacker persistent, interactive shell access.",
   "QUIRSO's CO-founder: 'The forensic evidence strongly points toward CVE-2026-59310 as the initial access vector' and 'the activity represents a successful compromise rather than merely exploitation attempts.'",
   "vCenter's role as the management plane for virtualized environments means a compromise provides a foothold into hosted workloads, credentials, and administrative operations across the entire VMware estate.",
   "Fixed versions: vCenter 9.1.0.0300, 9.0.2.0100, 8.0 U3k, 8.0 U2f (depending on branch). No workaround exists — patching is mandatory.",
   "Note: CVE-2026-59309 is a related flaw in the same advisory. QUIRSO states there is insufficient evidence to correlate CVE-2026-59309 exploitation with the CVE-2026-59310 APT campaign — treat them as separate issues."
  ],
  "iocs": [
   {
    "value": "reverse_ssh",
    "type": "Filename",
    "note": "Open-source reverse SSH framework used for persistence. Dropped as a cron job post-exploitation. QUIRSO published a generic YARA rule for identifying reverse_ssh builds — pull from their Medium post.",
    "source": "https://medium.com/@quirso_de/active-exploitation-of-cve-2026-59310-361-victim-ips-across-47-countries-9783187cc6ff"
   }
  ],
  "iocNote": "QUIRSO has not published specific attacker IPs or domains publicly — contact research@quirso.de for IR support. Detect via: (1) unexpected cron jobs added post-Aug 3, (2) outbound SSH connections from vCenter to unfamiliar external IPs, (3) YARA scan for reverse_ssh builds.",
  "mitigation": [
   "Patch VMware vCenter immediately to the fixed version for your branch (9.1.0.0300, 9.0.2.0100, 8.0 U3k, or 8.0 U2f). No workaround exists — Broadcom explicitly states patching is the only remediation.",
   "Audit cron jobs on all vCenter hosts for entries added after July 29 — malicious cron jobs were the persistence mechanism observed by QUIRSO.",
   "Review outbound SSH connections from vCenter to unexpected external IPs — reverse_ssh creates outbound tunnels to bypass inbound blocking.",
   "If vCenter was internet-accessible before patching, treat the host as potentially compromised and conduct forensic review. QUIRSO's report states 361 IPs were observed as victims by Aug 5.",
   "Consider restricting vCenter management access to VPN-only or jump-server-only until patching is confirmed complete."
  ],
  "response": [
   "Check vCenter version immediately against the VMSA-2026-0006.1 response matrix and patch if not on a fixed version.",
   "Run QUIRSO's YARA rule against vCenter hosts — available in their Medium post.",
   "Audit all cron jobs on vCenter servers for unauthorized entries.",
   "Review outbound network connections from vCenter hosts and look for unexpected SSH traffic to external IPs since August 3.",
   "SENTINEL KQL — vCenter reverse_ssh persistence and cron injection detection (CVE-2026-59310). Requires Syslog connector from vCenter appliance or network syslog forwarding.\n\n// vCenter CVE-2026-59310 — Cron Persistence & reverse_ssh\nSyslog\n| where TimeGenerated > ago(7d)\n| where Computer has_any (\"vcenter\",\"vc.\",\"vcsavm\")  // adjust to your naming\n| where SyslogMessage has_any (\n    \"reverse_ssh\",\"/tmp/.x/\",\n    \"cron\",\"syslog-vcenter-\",  // Attacker cron naming mimics syslog conventions\n    \"CRON[\",\"crontab\"\n)\n| where SyslogMessage !has \"CRON[0]\"  // filter legitimate cron daemon startup\n| project TimeGenerated, Computer, Facility, SeverityLevel, SyslogMessage\n| sort by TimeGenerated desc"
  ],
  "source": "QUIRSO GmbH via BleepingComputer, SecurityWeek, The Hacker News, Infosecurity Magazine",
  "sourceNote": "Aug 10-11, 2026"
 },
 "ptcwindchill": {
  "eyebrow": "Cl0p Ransomware · CVE-2026-12569 · PTC Windchill · 43+ Victims",
  "title": "Cl0p exploiting CVE-2026-12569 in PTC Windchill/FlexPLM at scale — Shell, Philips, GE, Fiserv among claimed 43 victims",
  "tags": [
   [
    "crit",
    "43+ Victims"
   ],
   [
    "high",
    "Industrial IP · Clop"
   ]
  ],
  "overview": "The Cl0p ransomware group is exploiting CVE-2026-12569, a CVSS 9.3 unsafe deserialization vulnerability in PTC Windchill and FlexPLM PLM software, to conduct a mass data-theft campaign targeting industrial and technology companies. PTC issued security notices from June 18 and CVE-2026-12569 was KEV-listed, but thousands of internet-exposed instances remained unpatched. Cl0p claims 43+ victims including Shell (89GB of engineering drawings, facility photos, testing reports and project plans), Philips (13.5GB), GE, and Fiserv. Both Shell and Philips confirmed they are investigating incidents. Cl0p's model is pure data-theft extortion — no encryption, no operational disruption, just exfiltration followed by publication threats. Shell previously refused to pay in the MOVEit campaign (2023); Cl0p published their data then.",
  "technical": [
   "CVE-2026-12569 (CVSS 9.3): Unsafe deserialization in PTC Windchill and FlexPLM. The attack chain: (1) pre-authentication information disclosure via the FlexPLM WSDL endpoint exposes session or token data; (2) chained with a separate flaw in the Windchill login servlet; (3) achieves unauthenticated remote code execution. Requires no valid credentials.",
   "PTC issued security notices from June 18, 2026 and the vulnerability was added to the CISA KEV catalog — but Ransom-ISAC's advisory notes the group targets the specific vulnerability rather than specific companies, meaning any internet-exposed unpatched instance is a candidate.",
   "Cl0p data-theft model: exfiltration-only, no encryption. The stolen data from industrial targets — engineering drawings, facility layouts, testing reports, project plans, blueprints — represents IP and operational intelligence with nation-state-grade strategic value beyond its ransom utility.",
   "Scale: Cl0p claims 43 victims from this campaign wave. Names confirmed as investigating include Shell and Philips. GE and Fiserv were named but had not confirmed at time of reporting.",
   "Shell history: Cl0p targeted Shell in the MOVEit campaign in 2023. Shell refused to negotiate; Cl0p published stolen files on their leak site. The same pattern is expected here if Shell doesn't engage.",
   "The stolen data type (engineering drawings, facility photos, project plans) from an energy major like Shell has implications beyond ransomware — it is potentially useful for physical infrastructure targeting."
  ],
  "iocs": [],
  "iocNote": "No attacker infrastructure IOCs published for this campaign. CVE-2026-12569 is on the CISA KEV catalog — check all internet-exposed PTC Windchill and FlexPLM instances for patch status. Detection: review Windchill/FlexPLM access logs for unexpected unauthenticated requests to the WSDL endpoint and login servlet, and anomalous outbound data transfers from PLM hosts.",
  "mitigation": [
   "Patch PTC Windchill and FlexPLM against CVE-2026-12569 immediately — the flaw has been KEV-listed since June and Cl0p is actively exploiting unpatched instances at scale.",
   "If immediate patching is not possible: take all internet-exposed Windchill and FlexPLM instances offline or behind a VPN/jump host until patching is completed.",
   "Audit which Windchill and FlexPLM instances in your environment are internet-accessible — Ransom-ISAC's advisory confirms Cl0p is scanning for exposed instances opportunistically."
  ],
  "response": [
   "Check all PTC Windchill and FlexPLM instances for CVE-2026-12569 patch status and internet exposure — any unpatched internet-accessible instance since June 18 should be treated as potentially compromised.",
   "Review Windchill and FlexPLM access logs for unexpected unauthenticated requests to the WSDL endpoint and login servlet, and look for anomalous outbound data transfers from PLM hosts.",
   "If you operate Windchill or FlexPLM and store engineering drawings, facility plans, or proprietary technical documents on those systems: assess what Cl0p could have reached if exploitation occurred and consider proactive notification obligations."
  ],
  "source": "BleepingComputer, TechNadu, Ransom-ISAC, Reuters via NL Times, The Next Web",
  "sourceNote": "Aug 12-14, 2026"
 },
 "macosscreen": {
  "eyebrow": "macOS · CVE-2026-65400 · CVSS 9.8 · Actively Exploited · Pre-Auth Root",
  "title": "macOS Screen Sharing CVE-2026-65400 (CVSS 9.8): pre-authentication bypass gives attacker root — conventional hardening useless, Monero miner confirmed on multiple systems",
  "tags": [
   [
    "crit",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · Pre-Auth Root"
   ]
  ],
  "overview": "The Netherlands National Cyber Security Centre (NCSC-NL) confirmed on August 12 that attackers are actively exploiting CVE-2026-65400, a critical authentication bypass in macOS Screen Sharing, against internet-exposed Macs. In every reported case, the attacker obtained root access and installed a Monero cryptocurrency miner. Apple patched the flaw on August 6 in emergency updates for macOS Tahoe 26.6.1, Sequoia 15.7.9, and Sonoma 14.8.9 — ahead of the NCSC exploitation reports. The vulnerability exists in screensharingd, the daemon that powers macOS built-in remote desktop over TCP port 5900 (VNC protocol). A critical detail for administrators: rotating the VNC password, removing approved Screen Sharing users, and other standard hardening measures have zero effect on this vulnerability — the bypass operates upstream of every control an administrator would normally reach for. CISA rescored the vulnerability from 7.1 to 9.8 on August 14 and classified it as automatable. CVE-2026-65400 was not KEV-listed at the time of the NCSC-NL reports; the KEV addition was confirmed on August 22, 2026.",
  "technical": [
   "CVE-2026-65400 (CVSS 9.8 per CISA rescore Aug 14; originally scored 7.1 by Apple/NVD): Authentication bypass in screensharingd, the macOS built-in Screen Sharing daemon. The flaw exploits a state management failure in the SRP (Secure Remote Password) authentication flow used by the VNC-based Screen Sharing service over TCP port 5900. An unauthenticated remote attacker with network access to port 5900 can authenticate to the service without valid credentials, gaining the access level of an authorized Screen Sharing user — typically root on macOS.",
   "The pre-authentication nature is the critical detail: the bypass occurs before the authentication pipeline that VNC password checks, user allowlists, and other hardening controls operate within. Rotating the VNC password, disabling legacy VNC password access, or removing specific users from Screen Sharing permissions all have zero effect — the attacker never reaches those control points.",
   "Exploitation path observed by NCSC-NL: attacker scans for port 5900 exposed to the internet → exploits CVE-2026-65400 to authenticate without credentials → gains root access via the Screen Sharing session → installs Monero cryptocurrency miner. The miner is the visible artifact — NCSC-NL explicitly noted that the miner may be only the visible part of a broader compromise.",
   "AI-accelerated weaponization: AI security company Calif developed a working exploit for CVE-2026-65400 in approximately four hours using AI tools — consistent with the 'Zoomsday' precedent from the same week where a Zoom RCE was developed in under 24 hours. CISA's decision to classify the vulnerability as 'automatable' aligns with the mass-scanning behavior seen against port 5900.",
   "Separate from CVE-2026-43760 (also a Screen Sharing bug) which requires an attacker to know the VNC password. CVE-2026-65400 requires no password. Discovered by researcher Alfredo Pesoli of Bynario Atlas."
  ],
  "iocs": [],
  "iocNote": "NCSC-NL has not published attacker IPs, Monero wallet addresses, miner hashes, or other IoCs. Detection: audit system logs on macOS hosts for unexpected Screen Sharing session initiations (screensharingd entries) from external IPs, particularly against port 5900; check running processes for unexpected coinminer processes (xmrig, lldb-rpc-server as a cover, or high sustained CPU from unknown processes); check launchd persistence items for new plist files in /Library/LaunchDaemons/ or /Library/LaunchAgents/.",
  "mitigation": [
   "Update macOS to Tahoe 26.6.1, Sequoia 15.7.9, or Sonoma 14.8.9 — these emergency updates are the only complete fix.",
   "If immediate patching is not possible: disable Screen Sharing entirely via System Settings → General → Sharing → Screen Sharing. Do NOT simply rotate the VNC password or remove approved users — these controls are bypassed by the vulnerability and provide no protection.",
   "Ensure port 5900 is not accessible from the internet at the firewall/network perimeter level on any macOS device — regardless of patch status, exposing port 5900 to the internet is never appropriate for most organizations."
  ],
  "response": [
   "Audit macOS system logs for unexpected screensharingd session entries from external IPs going back to August 7 — when NCSC-NL first issued its advisory. Any external IP connecting to port 5900 on an unpatched Mac is high-confidence exploitation.",
   "Search running processes and launch daemons/agents for known Monero miner processes (xmrig is the most common) and any unexpected high-CPU processes. Check /Library/LaunchDaemons/ and /Library/LaunchAgents/ for unfamiliar plist entries.",
   "NCSC-NL noted that the miner may be only the visible artifact — treat any confirmed cryptominer installation as a potential deeper compromise and conduct full endpoint forensics before considering remediation complete.",
   "DEFENDER XDR KQL — Detect CVE-2026-65400 post-exploitation: reverse shell via screensharingd, cryptominer processes (Monero/XMRig), and launchd persistence. Based on Huntress breakdown and NCSC-NL confirmed exploitation pattern.\n\n// macOS CVE-2026-65400 — Post-Exploitation: Reverse Shell + Cryptominer\n// Source: Analyst query based on Huntress analysis (huntress.com/blog/macos-screen-sharing-rce-patched)\n// Requires: Defender for Endpoint macOS agent\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where DeviceId in\n    // Filter to macOS devices (or remove for all)\n    (DeviceInfo | where OSPlatform == \"macOS\" | project DeviceId)\n| where (\n    // screensharingd spawning a shell (reverse shell pattern)\n    (InitiatingProcessFileName == \"screensharingd\" and\n     FileName in~ (\"bash\",\"sh\",\"zsh\",\"python3\",\"python\",\"ruby\",\"perl\"))\n    or\n    // Known Monero miner processes\n    FileName in~ (\"xmrig\",\"xmr-stak\",\"miner\",\"minerd\",\"cryptonight\")\n    or\n    // High-CPU unnamed processes (cryptominer masquerading)\n    (FileName startswith \".\" and FolderPath startswith \"/usr/bin/\")\n)\n| project Timestamp, DeviceName, FileName, ProcessCommandLine,\n    InitiatingProcessFileName, InitiatingProcessCommandLine, AccountName\n| sort by Timestamp desc"
  ],
  "source": "BleepingComputer, SecurityWeek, The Hacker News, Help Net Security, Malwarebytes, NCSC-NL Advisory NCSC-2026-0280",
  "sourceNote": "Aug 6–16, 2026"
 },
 "shieldbreak": {
  "eyebrow": "Microsoft Defender · CVE-2026-69414 · ShieldBreak · No Patch · PoC Public",
  "title": "ShieldBreak (CVE-2026-69414): Microsoft Defender zero-day bypasses July patch — any local user reaches SYSTEM on fully updated Windows 10, 11, and Server 2025. No patch available.",
  "tags": [
   [
    "crit",
    "No Patch · PoC Public"
   ],
   [
    "high",
    "EoP → SYSTEM · Defender Required"
   ]
  ],
  "overview": "Security researcher Nightmare Eclipse (also known as Chaotic Eclipse) released ShieldBreak on August 12, 2026 — a new Microsoft Defender privilege escalation zero-day that fully bypasses Microsoft's July 2026 patch for RoguePlanet (CVE-2026-50656). Microsoft confirmed the new vulnerability, assigned CVE-2026-69414, and acknowledged they are working on a patch — but as of August 17, none is available. The exploit achieves SYSTEM-level access with 100% reliability on fully updated Windows 11 25H2 (including Canary builds) and Windows Server 2025. Windows 10 is also vulnerable though not currently covered by the public PoC. The exploit requires the attacker to have some level of local code execution — this is a local privilege escalation, not a remote code execution vulnerability. Combined with any other initial access vector, ShieldBreak becomes a reliable SYSTEM escalation step. Kevin Beaumont published detection queries for Microsoft Defender for Endpoint. The disclosure follows a dispute between Microsoft and Nightmare Eclipse over the researcher's coordinated disclosure practices — Microsoft issued legal warnings over previous disclosures, prompting the researcher to release ShieldBreak immediately after Patch Tuesday.",
  "technical": [
   "CVE-2026-69414 (CVSS not yet assigned): Elevation of Privilege in the Microsoft Malware Protection Engine (mpengine.dll). The mechanism is a user-mode callback hook — the attacker modifies file contents during a Defender cloud-hydration scan, tricking the Malware Protection Engine into executing attacker-controlled code with SYSTEM privileges. Distinct from RoguePlanet (CVE-2026-50656), which was a filesystem race condition involving virtual disks and NT native file manipulation.",
   "Requirements: (1) local code execution at any privilege level, (2) Microsoft Defender must be enabled and actively scanning. Disabling Defender removes the attack surface but also removes protection — not a viable mitigation for most environments.",
   "Affected: Windows 10, Windows 11 (through 25H2 including Canary channel), Windows Server 2025 — all with fully updated Defender engine. Initial disclosure reported 100% success rate on Windows 11 25H2 and Windows Server 2025. Subsequent reporting (August 2026) notes the exploit shows variability between machines on fully patched systems and may not achieve 100% success across all hardware configurations — reliability depends on system state and may require retries. No confirmed in-wild exploitation has been logged by CISA.",
   "This is the latest in a series of zero-days from Nightmare Eclipse since April 2026: LegacyHive, RoguePlanet (now patched), BlueHammer, RedSun, YellowKey, GreenPlasma, MiniPlasma, UnDefend. Prior disclosures have been linked to real-world attacks. The pattern suggests the researcher has a stockpile of Microsoft Defender/Windows vulnerabilities being disclosed sequentially.",
   "Kevin Beaumont published detection queries for Microsoft Defender for Endpoint on his blog — these are the only published detection artifacts and should be deployed immediately."
  ],
  "iocs": [],
  "iocNote": "No network IOCs — ShieldBreak is a local exploit with no network component. Detection relies entirely on endpoint behavioral signals: deploy Kevin Beaumont's Defender for Endpoint KQL detection queries (published at doublepulsar.com). Look for unexpected SYSTEM-level process spawning from Defender-related processes (MsMpEng.exe, mpengine.dll), particularly from low-privilege parent processes.",
  "mitigation": [
   "No patch is available — Microsoft is working on CVE-2026-69414 but has not published a fix or ETA. Monitor Microsoft's Security Update Guide for CVE-2026-69414.",
   "CISA Binding Operational Directive (BOD) 26-04 applies to CVE-2026-69414 for FCEB agencies — 14-day deadline to deploy compensating controls even without an available patch. Compensating controls: restrict local code execution via application allowlisting, enforce least-privilege, and deploy Kevin Beaumont's Defender for Endpoint detection queries (see Hunt & Investigate) to detect exploitation attempts.",
   "Deploy Kevin Beaumont's detection queries for Microsoft Defender for Endpoint immediately — these are the only published detection mechanism. Without them, ShieldBreak exploitation is effectively invisible.",
   "Apply defense-in-depth to limit local code execution opportunities: restrict local admin rights, enforce application allowlisting, monitor for new local user creation and unexpected process execution."
  ],
  "response": [
   "CISA BOD 26-04 gives federal agencies 14 days to deploy compensating controls for CVE-2026-69414. The only published detection mechanism is Kevin Beaumont's three hunting queries below — deploy them as Custom Detections in Microsoft Defender for Endpoint immediately. Beaumont states they have no false positives unless running multiple EDR solutions (add exclusions if so).",
   "DEFENDER XDR KQL — Detection 1 (Beaumont @GossiTheDog): non-Defender processes loading MpClient.dll. ShieldBreak requires MpClient to execute its callback hook — any non-Defender process loading this DLL is high-fidelity.\n\n// ShieldBreak Detection 1 — Non-Defender processes loading MpClient.dll\n// Source: Kevin Beaumont (@GossiTheDog) github.com/GossiTheDog/ThreatHunting\n// T1562.001 — Impair Defenses, T1548 — Abuse Elevation Control Mechanism\nDeviceImageLoadEvents\n| where ActionType == \"ImageLoaded\"\n| where FileName == \"MpClient.dll\"\n| where not(\n    InitiatingProcessFolderPath startswith @\"C:\\Program Files\\Windows Defender\\\" or\n    InitiatingProcessFolderPath startswith @\"C:\\ProgramData\\Microsoft\\Windows Defender\\\" or\n    InitiatingProcessFolderPath startswith @\"C:\\Windows\\System32\\\" or\n    InitiatingProcessFileName =~ \"taniumclient.exe\" or\n    InitiatingProcessParentFileName =~ \"taniumclient.exe\"\n)\n| summarize FirstSeen = min(Timestamp), LastSeen = max(Timestamp)\n    by DeviceName, InitiatingProcessFileName, InitiatingProcessFolderPath,\n       InitiatingProcessCommandLine, FolderPath, FileName\n| extend HostCustomEntity = DeviceName, ProcessCustomEntity = InitiatingProcessFileName",
   "DEFENDER XDR KQL — Detection 2 (Beaumont @GossiTheDog): unvetted processes loading the Windows Cloud Filter API (cldapi.dll). ShieldBreak registers a rogue Cloud Filter API provider via CFAPI — any non-system, non-Program Files process loading this DLL is suspicious.\n\n// ShieldBreak Detection 2 — Unvetted processes loading Cloud Filter API\n// Source: Kevin Beaumont (@GossiTheDog) github.com/GossiTheDog/ThreatHunting\nDeviceImageLoadEvents\n| where ActionType == \"ImageLoaded\"\n| where FileName == \"cldapi.dll\"\n| where not(\n    InitiatingProcessFolderPath startswith @\"C:\\Windows\\System32\\\" or\n    InitiatingProcessFolderPath startswith @\"C:\\Program Files\\\" or\n    InitiatingProcessFolderPath startswith @\"C:\\Program Files (x86)\\\"\n)\n| project Timestamp, DeviceName, InitiatingProcessFileName,\n    InitiatingProcessFolderPath, InitiatingProcessCommandLine, FileName",
   "DEFENDER XDR KQL — Detection 3 (Beaumont @GossiTheDog): same process loading both MpClient.dll and cldapi.dll within 5 minutes. This combination should never occur legitimately — it directly fingerprints the ShieldBreak exploit chain.\n\n// ShieldBreak Detection 3 — Process loads MpClient + Cloud Filter API within 5 min\n// Source: Kevin Beaumont (@GossiTheDog) github.com/GossiTheDog/ThreatHunting\n// Highest-fidelity of the three — near zero false positives\nlet mp_loads = DeviceImageLoadEvents\n    | where FileName == \"MpClient.dll\"\n    | project MpTime = Timestamp, DeviceName, InitiatingProcessFileName,\n              InitiatingProcessFolderPath, InitiatingProcessId;\nlet cld_loads = DeviceImageLoadEvents\n    | where FileName == \"cldapi.dll\"\n    | project CldTime = Timestamp, DeviceName, InitiatingProcessFileName,\n              InitiatingProcessFolderPath, InitiatingProcessId;\nmp_loads\n| join kind=inner cld_loads on DeviceName, InitiatingProcessId\n| where abs(datetime_diff('minute', MpTime, CldTime)) < 5\n| project DeviceName, InitiatingProcessFileName, InitiatingProcessFolderPath,\n    MpTime, CldTime, InitiatingProcessId"
  ],
  "source": "BleepingComputer, SecurityWeek, Arctic Wolf, Malwarebytes, TechCrunch",
  "sourceNote": "Aug 12–17, 2026"
 },
 "azureentra": {
  "eyebrow": "Azure / Entra ID · TheHatman · 9 Fortune 500 Orgs · 1.4M+ Records · Unverified",
  "title": "TheHatman Azure/Entra ID campaign: 1.4M+ structured employee directory records across 9 Fortune 500 orgs — data format suggests Graph API enumeration over traditional exfiltration",
  "tags": [
   [
    "high",
    "Fortune 500 · 1.4M Records"
   ],
   [
    "high",
    "Entra ID · Graph API Recon"
   ]
  ],
  "overview": "Threat actor TheHatman posted six BreachForums listings between August 1–10, 2026, advertising internal employee directories claimed to have been pulled from Azure/Entra ID tenants using compromised credentials. Named organizations include McDonald's (1.7M records claimed), TCS (800K), Vodafone (425K), HCL Technologies (250K), IHG (185K), Kyndryl, Gap Inc., Hexaware Technologies, and Wyndham Hotels. Hudson Rock reviewed samples and assessed the data as likely authentic based on structural consistency with genuine Azure directory exports. No organization has confirmed a breach — TCS stated the referenced data appears to be more than four years old. The vector remains unconfirmed: TheHatman cites compromised credentials broadly, and Hudson Rock lists infostealers, phishing, MFA weakness, and third-party integrations as plausible vectors. Analyst assessment: Phishing-as-a-Service platforms (Tycoon2FA, Rockstar2FA, Evilginx-based kits) are a primary contributor — these adversary-in-the-middle kits capture fully authenticated Entra ID session tokens in real-time as the victim completes MFA, enabling token replay without credentials or MFA codes.",
  "technical": [
   "Data structure analysis: Every dump across all nine claimed victims follows the same three-tier template — (1) core identity: display name, UserPrincipalName, @onmicrosoft.com tenant addresses, phone, physical address; (2) organizational: EmployeeId, job title, department, manager, direct reports; (3) access and group mappings: group memberships, service account listings, Global Administrator account identifiers. This schema maps precisely to the output of Microsoft Graph API /users endpoint with a comprehensive $select query — it is the exact format of a programmatic directory enumeration, not a database dump or file system exfiltration.",
   "ANALYST ASSESSMENT (analyst opinion, not confirmed reporting): The structured uniformity across all victim organizations — matching standard Azure directory export format — is more consistent with Microsoft Graph API enumeration than with traditional exfiltration methods. Graph API read access to /v1.0/users with User.Read.All or Directory.Read.All permission returns exactly this data in this structure. True database-level or file-level exfiltration would typically produce inconsistent formatting across different victims and organizations.",
   "ANALYST ASSESSMENT: Phishing-as-a-Service platforms are a highly plausible and increasingly documented contributor to the session token theft that enables this class of Graph API enumeration. Adversary-in-the-middle PhaaS kits (Tycoon2FA, Rockstar2FA, Evilginx2-based derivatives) operate as reverse proxies between the victim and the legitimate Microsoft login page — the victim enters credentials and completes MFA on what appears to be the real Entra ID login, but the kit captures the fully authenticated session token cookie in real-time as it is issued. The attacker then replays this post-MFA token against Microsoft Graph API without needing credentials or MFA codes. PhaaS infrastructure makes this accessible to lower-skill actors who previously could not bypass MFA, dramatically expanding the pool of actors capable of conducting Entra ID tenant enumeration at scale. The structured, schema-consistent data dumps from nine Fortune 500 organizations — all following the same Graph API output format — are consistent with a PhaaS supply chain where a platform harvests tokens from multiple organizations and the buyer runs bulk enumeration across the full portfolio.",
   "ANALYST ASSESSMENT: Session replay is the most plausible initial access vector if MFA was in place at the affected organizations. Infostealers harvesting browser session cookies can yield valid Entra ID session tokens that bypass MFA entirely — the token is already post-authentication. This differs from credential stuffing or password spraying, which MFA blocks. A stolen session token with Graph API read scope is sufficient to enumerate the entire directory without triggering login-based MFA challenges.",
   "TheHatman also claims 'MFA abuse' as a technique — this could refer to session token theft (bypassing MFA via infostealer-harvested cookies), MFA fatigue attacks (push bombing), or exploiting legacy authentication protocols that MFA doesn't cover. None of these are 'breaking' MFA — they're working around it.",
   "Scrutex and InfoStealers both note Graph API bulk enumeration detection signals: sign-ins to scripted client apps (Microsoft Graph Command Line Tools, Azure AD PowerShell, Azure CLI) from accounts without administrative roles; paged bulk reads of /users and /groups in Microsoft Graph activity logs; successful authentication from VPS or hosting ASNs; and non-interactive sessions continuing after a password reset."
  ],
  "iocs": [],
  "iocNote": "No technical IOCs published — this is an identity and access campaign, not a malware campaign. No attacker IPs, hashes, or infrastructure are available. Detection is entirely behavioral — audit Microsoft Graph activity logs for bulk directory reads.",
  "mitigation": [
   "Audit Graph API application registrations and service principals for User.Read.All, Directory.Read.All, and People.Read.All permissions — these scopes provide access to the full directory. Remove or restrict any third-party integration with excessive directory read permissions.",
   "Enable Conditional Access policies that require compliant devices and block legacy authentication protocols — the latter don't support MFA and are a common bypass vector.",
   "Configure Entra ID Identity Protection to flag and require step-up MFA for sign-ins from anonymous IPs, VPS ASNs, and unfamiliar locations — this is the behavioral pattern consistent with the TheHatman campaign.",
   "Block or alert on non-interactive session token re-use from new IP ranges — a valid session token appearing from a different ASN than the one where it was issued is a strong infostealer/session replay signal.",
   "Deploy Microsoft Entra ID Token Protection (preview) to bind session tokens to specific devices — replayed tokens from PhaaS kits operating on attacker infrastructure fail device binding checks. This directly counters adversary-in-the-middle PhaaS token capture.",
   "Enable risky sign-in Conditional Access policies that require re-authentication when Entra ID Identity Protection detects token replay indicators — specifically the 'unfamiliar sign-in properties' and 'anomalous token' risk detections, which fire on session tokens replayed from different ASNs than the originating authentication."
  ],
  "response": [
   "Hunt Microsoft Graph activity logs for paged bulk reads of /users and /groups endpoints — specifically calls that page through the full directory (multiple calls with $skiptoken parameters) from any account, particularly scripted client app sign-ins.",
   "SENTINEL KQL — PhaaS / session token replay detection: interactive sign-in from one IP immediately followed by non-interactive Graph API access from a different IP, consistent with PhaaS kit token capture and replay.\n\n// PhaaS Session Token Replay — Entra ID\n// Requires: SigninLogs, AADNonInteractiveUserSignInLogs\nlet InteractiveSessions = SigninLogs\n    | where TimeGenerated > ago(7d) and ResultType == 0 and IsInteractive == true\n    | project UserId, InteractiveIP = IPAddress, InteractiveTime = TimeGenerated, CorrelationId;\nlet NonInteractiveSessions = AADNonInteractiveUserSignInLogs\n    | where TimeGenerated > ago(7d) and ResultType == 0\n    | where AppDisplayName has_any (\"Microsoft Graph Command Line Tools\",\n        \"Azure Active Directory PowerShell\", \"Microsoft Graph\", \"Azure CLI\")\n    | where not(ipv4_is_private(IPAddress))\n    | project UserId, NonInteractiveIP = IPAddress, NonInteractiveTime = TimeGenerated, AppDisplayName;\nInteractiveSessions\n| join kind=inner NonInteractiveSessions on UserId\n| where NonInteractiveTime between (InteractiveTime .. (InteractiveTime + 15m))\n| where InteractiveIP != NonInteractiveIP\n| project UserId, InteractiveIP, NonInteractiveIP, InteractiveTime, NonInteractiveTime, AppDisplayName\n| sort by NonInteractiveTime desc",
   "SENTINEL KQL — Graph API bulk /users enumeration detection: paged bulk reads of the Entra ID directory from scripted client apps, consistent with TheHatman campaign method.\n\n// Graph API Bulk Directory Enumeration\n// Requires: AuditLogs\nAuditLogs\n| where TimeGenerated > ago(24h)\n| where OperationName in~ (\"List users\", \"List members\", \"List groups\")\n| where InitiatedBy has_any (\"Microsoft Graph Command Line Tools\",\n    \"Azure Active Directory PowerShell\", \"Azure CLI\", \"Graph Explorer\")\n| summarize\n    EnumCount    = count(),\n    FirstSeen    = min(TimeGenerated),\n    LastSeen     = max(TimeGenerated),\n    Initiators   = make_set(InitiatedBy, 5)\n    by tostring(parse_json(tostring(InitiatedBy)).user.userPrincipalName)\n| where EnumCount > 200  // tune to your baseline — 200 is conservative\n| sort by EnumCount desc",
   "DEFENDER XDR KQL — Scripted client Graph API access from VPS or hosting ASNs: high-fidelity signal for compromised token replay from attacker infrastructure.\n\n// Scripted Graph Access from Non-Corporate ASNs\n// Requires: AADSignInEventsBeta\nAADSignInEventsBeta\n| where Timestamp > ago(7d) and ErrorCode == 0\n| where ApplicationName has_any (\"Microsoft Graph Command Line Tools\",\n    \"Azure Active Directory PowerShell\", \"Microsoft Graph\", \"Azure CLI\")\n| where IsInteractive == false  // non-interactive = token replay, not fresh login\n| where IPTags has_any (\"Hosting\", \"VPS\", \"Anonymous\", \"Tor\")\n    or IPAddress has_any (\"hetzner\",\"ovh\",\"digitalocean\",\"linode\",\"vultr\",\"contabo\")  // common attacker VPS\n| project Timestamp, AccountUpn, IPAddress, IPTags, ApplicationName,\n    DeviceName, Country = IPCountry\n| sort by Timestamp desc",
   "Check for non-interactive sign-in sessions (where MFA was satisfied previously and a refresh token is being replayed) that originate from different geographies or ASNs than the account's normal pattern.",
   "If your organization is in the IT services, hospitality, retail, or logistics sectors — the campaign's apparent target set — proactively audit Entra ID audit logs for bulk /users reads over the past 60 days, not just from August. TCS cited data appearing to be 4+ years old, suggesting some compromised tokens may be from much older infostealer infections that are still valid."
  ],
  "source": "InfoStealers / Hudson Rock, SecurityWeek, Help Net Security, Scrutex, CRN Asia",
  "sourceNote": "Aug 1–18, 2026"
 },
 "gitlab": {
  "eyebrow": "GitLab CE/EE · CVE-2026-19478 · CVSS 9.4 · Exploited · Emergency Patch",
  "title": "GitLab CVE-2026-19478 (CVSS 9.4): unauthenticated GraphQL code injection — exploited within 24 hours of emergency patch. Third major GitLab GraphQL flaw in 2026.",
  "tags": [
   [
    "crit",
    "CVSS 9.4"
   ],
   [
    "high",
    "Exploited · GraphQL · Source Code"
   ]
  ],
  "overview": "GitLab released an emergency patch on August 17, 2026 for CVE-2026-19478, a critical code injection vulnerability in the GraphQL API of both Community Edition and Enterprise Edition. An unauthenticated remote attacker can send a specially crafted GraphQL directive to any internet-exposed self-managed GitLab instance and remotely modify or delete public projects and user data — no account, no credentials, no user interaction required. SecurityWeek confirmed exploitation began shortly after public disclosure. WatchTowr warned on August 18 that the flaw is easily reproducible. This is the third major GraphQL-layer security vulnerability GitLab has patched in 2026 — a pattern pointing to a sustained hardening problem in the platform's core API layer. GitLab.com and GitLab Dedicated are already patched; only self-managed installations require action. Full technical details are embargoed until approximately mid-November 2026.",
  "technical": [
   "CVE-2026-19478 (CVSS 9.4, CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:H/A:H): Code injection via an improperly handled GraphQL directive in GitLab's API layer. GitLab has not publicly disclosed the specific directive involved — the 90-day coordinated disclosure embargo lasts until approximately November 17, 2026. Exploitation requires only network access to the GraphQL endpoint.",
   "Impact: An unauthenticated attacker can remotely modify or delete public GitLab projects and associated user data. In practice, this means source code repositories, CI/CD pipeline configurations, issue trackers, merge requests, and project settings are all within reach — without any authenticated session. The CVSS vector reflects high integrity and availability impact.",
   "Attack surface: Any self-managed GitLab instance with its GraphQL endpoint internet-accessible. This includes standard web-facing installations where the application's `/api/graphql` endpoint is reachable. GitLab.com and GitLab Dedicated have been patched server-side and require no customer action.",
   "Affected versions: CE and EE 18.2 through 18.10 (fix: 18.11.11), 19.0.0–19.0.7 (fix: 19.0.8), 19.1.0–19.1.5 (fix: 19.1.6), 19.2.0–19.2.3 (fix: 19.2.4). The 18.0 and 18.1 branches are within the CVSS affected range and have not received fixes — installations on those branches should upgrade to 18.11.11.",
   "Context: This is the third major GraphQL-layer vulnerability GitLab has patched in 2026. The pattern suggests a systemic weakness in how GitLab handles directive processing and request validation in its GraphQL implementation. GitLab shipped this fix outside its normal twice-monthly cadence (the previous routine release was August 12 with no critical-rated issues) — the out-of-cycle timing is itself a signal of urgency."
  ],
  "iocs": [],
  "iocNote": "No attacker infrastructure IOCs published — exploitation is API-level, no malware or C2. Detection: monitor GitLab application logs for unexpected unauthenticated GraphQL mutation activity (POST /api/graphql with no session cookie or Authorization header but with successful response codes), particularly requests that modify or delete project-level objects. Look for unusual DELETE or mutation events in GitLab's audit log against projects you didn't initiate.",
  "mitigation": [
   "Update all self-managed GitLab CE/EE instances to the patched versions immediately: 18.11.11, 19.0.8, 19.1.6, or 19.2.4. No database migrations or downtime are required for multi-node deployments — this is a drop-in update.",
   "If you are on branches 18.0 or 18.1 (within the affected range but without branch-specific fixes): upgrade to 18.11.11. GitLab does not plan to backport the fix to branches older than 18.11.",
   "GitLab.com and GitLab Dedicated: already patched, no action required.",
   "As a temporary measure while scheduling the update: review whether your GitLab instance's GraphQL endpoint (/api/graphql) is internet-accessible, and consider restricting it to known IP ranges at your WAF or reverse proxy."
  ],
  "response": [
   "Audit GitLab application logs for unauthenticated GraphQL requests against public projects — specifically POST /api/graphql requests without session cookies that return 200 responses with mutation results. This is the baseline detection pattern for CVE-2026-19478 exploitation.",
   "Review GitLab's audit log (Admin Area → Monitoring → Audit Events) for unexpected project modification or deletion events, particularly those not tied to any authenticated user session or tied to an unknown IP address.",
   "If project tampering is found: treat any modified source code or CI/CD pipeline configuration as potentially compromised — an attacker who can modify a pipeline .gitlab-ci.yml can introduce supply-chain attacks into your build artifacts.",
   "SENTINEL KQL — Detect unauthenticated GraphQL mutation activity against GitLab, consistent with CVE-2026-19478 exploitation. Requires GitLab access logs forwarded to Sentinel via CommonSecurityLog or custom table.\n\n// GitLab CVE-2026-19478 — Unauthenticated GraphQL Mutation Detection\n// Requires: GitLab access logs forwarded to Sentinel (CommonSecurityLog or W3CIISLog)\nW3CIISLog\n| where TimeGenerated > ago(7d)\n| where csUriStem has \"/api/graphql\"\n| where csMethod == \"POST\"\n| where isempty(cs_Cookie) or cs_Cookie !has \"known_session_prefix\"  // no session cookie\n| where sc_status == 200  // successful mutation\n| where csUserAgent !has_any (\"GitLab\", \"gitlab-runner\")  // exclude legitimate internal agents\n| project TimeGenerated, cIP, csUriStem, csMethod, sc_status, \n    cs_bytes, sc_bytes, csUserAgent\n| sort by TimeGenerated desc",
   "SENTINEL KQL — Detect unauthenticated GraphQL requests against self-managed GitLab, consistent with CVE-2026-19478 exploitation. Requires GitLab access logs forwarded to Sentinel. WatchTowr confirmed easy reproduction within minutes of disclosure.\n\n// GitLab CVE-2026-19478 — Unauthenticated GraphQL Mutation\n// Requires: W3CIISLog or GitLab nginx logs via Syslog connector\n// Detect POST to /api/graphql without session cookie, returning 2xx\nW3CIISLog\n| where TimeGenerated > ago(7d)\n| where csUriStem has \"/api/graphql\"\n| where csMethod == \"POST\"\n| where (isempty(cs_Cookie) or cs_Cookie !has \"_gitlab_session\")\n| where sc_status between (200 .. 299)\n| where csUserAgent !has_any (\"GitLab\", \"gitlab-runner\", \"gitlab-pages\")\n| project TimeGenerated, cIP, csUriStem, csMethod,\n    sc_status, sc_bytes, csUserAgent, cs_Cookie\n| sort by TimeGenerated desc"
  ],
  "source": "SecurityWeek, The Hacker News, Help Net Security, CyCognito, TechTimes",
  "sourceNote": "Aug 17–20, 2026"
 },
 "zimbra": {
  "eyebrow": "Zimbra Collaboration Suite · CVE-2026-73570 · CVSS 8.9 · Exploited · 12K+ Exposed",
  "title": "Zimbra CVE-2026-73570 (CVSS 8.9): unauthenticated OS command injection in SNMP component — actively exploited, 12,100+ servers exposed. CERT Polska confirmed.",
  "tags": [
   [
    "high",
    "CVSS 8.9"
   ],
   [
    "high",
    "Exploited · 12K Servers · Email Infra"
   ]
  ],
  "overview": "CERT Polska confirmed active exploitation of CVE-2026-73570 on August 20, 2026 — an unauthenticated OS command injection vulnerability in Zimbra Collaboration Suite's SNMP monitoring component. An attacker can send specially crafted SMTP requests to vulnerable Zimbra servers and execute arbitrary shell commands as the zimbra user with no authentication and no user interaction. Zimbra patched this in version 10.1.20 on July 20, 2026, but Shadowserver tracks over 12,100 Zimbra servers currently internet-exposed. As of August 25, 2026, over 270 Zimbra instances have been confirmed compromised in active remote code execution attacks. Zimbra has a documented history of rapid exploitation following disclosure — CISA's KEV catalog includes 18 prior Zimbra vulnerabilities, four added in 2026 alone, and prior exploitation has been linked to Russian and Chinese state-sponsored actors targeting military and diplomatic intelligence.",
  "technical": [
   "CVE-2026-73570 (CVSS 8.9, CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H, CWE-78: OS Command Injection): In Zimbra Collaboration Suite before version 10.1.20, the SNMP monitoring component improperly sanitizes untrusted input during SNMP notification processing. An unauthenticated remote attacker sends specially crafted SMTP requests that reach the SNMP notification handler, which processes the attacker-controlled content without adequate validation and passes it to an OS-level command — allowing arbitrary shell command execution as the zimbra user.",
   "Required conditions: (1) the optional zimbra-snmp package is installed, (2) SNMP trap notifications are enabled via the snmp_notify parameter, and (3) the swatchdog service is running. Critically, swatchdog is enabled by default in most Zimbra deployments, meaning condition (3) is satisfied by default in any deployment that has also enabled SNMP notifications.",
   "The zimbra user context provides access to: mail queues and stored email content, LDAP configuration and credentials, application files and configuration, cryptographic material used by the mail server, and the ability to write webshells to the Jetty webapps directories. This access level makes successful exploitation equivalent to full server compromise for most organizations.",
   "Exposure: Shadowserver identifies 12,100+ internet-exposed Zimbra servers as of August 2026, concentrated in Europe (4,382) and Asia (4,492). CERT Polska has not disclosed attacker identity or targets, but historically Zimbra exploitation has been used by APT actors (Russian state-linked groups in 2022–2025, Chinese espionage actors) for email interception and lateral movement, as well as by opportunistic ransomware affiliates.",
   "Patch: Zimbra 10.1.20, released July 20, 2026. No workaround is available that fully mitigates the flaw without disabling SNMP notifications entirely."
  ],
  "iocs": [
   {
    "value": "/opt/zimbra/jetty/webapps/",
    "type": "Filename",
    "note": "Webshell drop location — check for unexpected .jsp, .war, or .class files in this Jetty webapp directory created by the zimbra user after July 20, 2026.",
    "source": "https://www.bleepingcomputer.com/news/security/critical-zimbra-rce-flaw-now-actively-exploited-in-attacks/"
   },
   {
    "value": "/opt/zimbra/jetty_base/webapps/",
    "type": "Filename",
    "note": "Secondary webshell drop location — same check as above.",
    "source": "https://www.bleepingcomputer.com/news/security/critical-zimbra-rce-flaw-now-actively-exploited-in-attacks/"
   }
  ],
  "iocNote": "CERT Polska published detection guidance: check /var/log/zimbra.log for unexpected Zimbra service restarts (stopped→running or running→stopped state changes for services not under active administration); check webshell drop directories above for unexpected files created by the zimbra user; check /tmp/ for unexpected files created by the zimbra user within the past 30 days.",
  "mitigation": [
   "Upgrade Zimbra Collaboration Suite to version 10.1.20 immediately. The patch has been available since July 20, 2026 — any unpatched internet-exposed server should be treated as potentially compromised.",
   "If you cannot upgrade immediately: disable SNMP notifications by setting snmp_notify to 0 in zimbraGlobalConfig. This removes the vulnerable code path. Verify with: `zmprov gcf zimbraGlobalConfig | grep -i snmp`.",
   "Restrict internet access to Zimbra's SNMP-related ports and services — SNMP traffic (UDP 161/162) should never be internet-accessible."
  ],
  "response": [
   "Check /var/log/zimbra.log for unexpected service-status changes (state transitions for Zimbra services not initiated by an administrator) — CERT Polska specifically flagged this as the primary detection signal.",
   "Audit for webshells in /opt/zimbra/jetty/webapps/, /opt/zimbra/jetty_base/webapps/, and /tmp/ — look for .jsp, .war, .class, or shell script files created by the zimbra user within the past 30 days.",
   "Review Zimbra audit logs for unexpected admin-level actions, configuration changes, or LDAP queries that were not initiated by known administrators — post-exploitation via the zimbra user can access LDAP and configuration files.",
   "SENTINEL KQL — Detect Zimbra exploitation indicators via syslog-forwarded Zimbra logs.\n\n// Zimbra CVE-2026-73570 — Exploitation Detection\n// Requires: Zimbra /var/log/zimbra.log forwarded to Sentinel via Syslog connector\nSyslog\n| where TimeGenerated > ago(30d)\n| where Computer has_any (\"zimbra\",\"zcs\",\"mail\")  // adjust to your naming\n| where SyslogMessage has_any (\n    // Unexpected service state changes — primary CERT Polska signal\n    \"stopped to running\", \"running to stopped\",\n    \"status changed\", \"service restart\",\n    // Webshell indicators\n    \"jetty/webapps\", \"jetty_base/webapps\",\n    // SNMP component\n    \"snmp_notify\",\"swatchdog\",\"zimbraSnmp\"\n)\n| where SyslogMessage !has \"scheduled restart\"  // filter maintenance windows\n| project TimeGenerated, Computer, SyslogMessage, Facility\n| sort by TimeGenerated desc"
  ],
  "source": "BleepingComputer, SecurityWeek, The Hacker News, CERT Polska, Shadowserver",
  "sourceNote": "Aug 20–21, 2026"
 },
 "trueconf": {
  "eyebrow": "TrueConf Server · CVE-2026-72529 / 72530 · CISA KEV · Head Mare · Supply Chain",
  "title": "TrueConf Server CVE-2026-72529/72530 KEV-listed Aug 21: Head Mare replaces client installers with PhantomCore backdoor — any user who connected gets infected",
  "tags": [
   [
    "high",
    "CISA KEV · 3-day Deadline"
   ],
   [
    "high",
    "Supply Chain · Head Mare · SYSTEM"
   ]
  ],
  "overview": "CISA added two TrueConf Server vulnerabilities to its Known Exploited Vulnerabilities catalog on August 21, 2026, with unusually tight remediation deadlines: CVE-2026-72529 must be remediated within 3 days (by August 24) and CVE-2026-72530 within 2 weeks (by September 4). Kaspersky's ICS CERT reported in August that the Head Mare hacktivist group chained these vulnerabilities to compromise TrueConf server instances, replace the legitimate TrueConf client installer hosted on the server with a trojanized version containing PhantomCore and PhantomGraph backdoors, and distribute the malicious installer to every user who connected to the server for updates or downloads. The attack primarily targeted Russian organizations in critical sectors — instrumentation, electronics, transportation, energy, IT, and software development — and exploits TrueConf's client auto-update mechanism as its supply chain delivery vector.",
  "technical": [
   "CVE-2026-72529 (critical): Unauthenticated remote attackers with access to port 4307/TCP can call an undocumented TrueConf Server function to execute arbitrary scripts. Scripts initially execute in a sandboxed/isolated environment.",
   "CVE-2026-72530 (critical): Escape from the isolated execution environment, allowing the attacker to execute arbitrary code with NT AUTHORITY\\SYSTEM privileges on the underlying Windows server host. Chained with CVE-2026-72529, an unauthenticated attacker achieves full SYSTEM compromise on the TrueConf server.",
   "Supply chain delivery mechanism: After gaining SYSTEM on the server, Head Mare deployed a PHP web shell (locale.php) for persistence, then replaced the legitimate TrueConf Client installer file on the server with a trojanized version. The modified installer was not digitally signed. Any user connecting to the server for an update, new install, or scheduled client upgrade silently received the malicious installer, which installed PhantomCore and PhantomGraph backdoors alongside the legitimate client.",
   "PhantomCore: DLL-based backdoor (detected by pe.exports 'DllGetClassObject' and 'DllCanUnloadNow', .gxfg section). Provides system reconnaissance, credential theft via LSASS memory dumping, and C2 communication. Installed as a Windows service for persistence.",
   "PhantomGraph: Second backdoor (SysExcSvc.dll and SysReadSvc.dll) communicating with attacker infrastructure via Microsoft OneDrive — blends malicious C2 traffic with legitimate cloud storage. Also installed as a Windows service. Both backdoors used together give Head Mare long-term persistent access to the infected endpoint.",
   "Fixed in TrueConf Server versions 5.3.9, 5.4.9, and 5.5.5 (released June 18, 2026). CISA KEV deadlines: CVE-2026-72529 — August 24, 2026 (3 days from KEV listing); CVE-2026-72530 — September 4, 2026 (2 weeks from KEV listing)."
  ],
  "iocs": [
   {
    "value": "locale.php",
    "type": "Filename",
    "note": "PHP web shell deployed by Head Mare on compromised TrueConf servers for persistence and lateral movement.",
    "source": "https://ics-cert.kaspersky.com/publications/reports/2026/08/12/head-mare-exploits-vulnerabilities-in-trueconf-server-to-deliver-phantomcore-malware/"
   },
   {
    "value": "SysExcSvc.dll",
    "type": "Filename",
    "note": "PhantomGraph backdoor component installed as Windows service, communicates C2 via OneDrive.",
    "source": "https://ics-cert.kaspersky.com/publications/reports/2026/08/12/head-mare-exploits-vulnerabilities-in-trueconf-server-to-deliver-phantomcore-malware/"
   },
   {
    "value": "SysReadSvc.dll",
    "type": "Filename",
    "note": "PhantomGraph backdoor second component, also installed as Windows service.",
    "source": "https://ics-cert.kaspersky.com/publications/reports/2026/08/12/head-mare-exploits-vulnerabilities-in-trueconf-server-to-deliver-phantomcore-malware/"
   },
   {
    "value": "c5a460e4e68a088f6e51b2c6474642ec",
    "type": "MD5",
    "note": "PhantomCore sample (Kaspersky YARA rule hash). PhantomCore DLL backdoor used by Head Mare in TrueConf supply chain attacks.",
    "source": "https://ics-cert.kaspersky.com/publications/reports/2026/08/12/head-mare-exploits-vulnerabilities-in-trueconf-server-to-deliver-phantomcore-malware/"
   }
  ],
  "iocNote": "YARA rules for PhantomCore (rule apt_HeadMare_PhantomCore) and the malicious unsigned TrueConf installer (rule apt_HeadMare_FakeConf_installer) are published in the Kaspersky ICS CERT advisory. Kaspersky notes: defang IoCs before use; re-fang only within controlled TI platforms (MISP, VirusTotal, SIEM).",
  "mitigation": [
   "Update TrueConf Server to versions 5.3.9, 5.4.9, or 5.5.5 immediately — CISA KEV deadline for CVE-2026-72529 is August 24 (3 days). Do not delay patching to the CVE-2026-72530 deadline of September 4.",
   "After patching the server: push the updated, signed TrueConf client to all endpoints that may have downloaded a trojanized installer from a compromised server. Verify client digital signature before installing — legitimate TrueConf clients are digitally signed. Any unsigned TrueConf installer should be treated as malicious.",
   "Block port 4307/TCP from internet access at your perimeter — TrueConf's management interface should never be internet-exposed.",
   "Review for unsigned TrueConf client installations across your endpoint fleet — EDR/AV scan for unsigned executables matching the TrueConf naming convention."
  ],
  "response": [
   "Check all endpoints that installed TrueConf client updates since June 2026 for PhantomCore and PhantomGraph — scan for SysExcSvc.dll and SysReadSvc.dll, check for new Windows services not matching your baseline, and run LSASS memory for credential theft indicators.",
   "If a TrueConf server was internet-exposed on port 4307 and running a pre-patch version: treat it as fully compromised. Check for locale.php in the Jetty/web root. Preserve the server image for forensics before remediation.",
   "Hunt for PhantomGraph's OneDrive C2 communication — anomalous OneDrive traffic from services or system processes (not user-context), particularly at regular intervals, on systems that also run TrueConf.",
   "Check Windows service installation events for SysExcSvc and SysReadSvc — any service with these names is a confirmed PhantomCore/PhantomGraph indicator.",
   "DEFENDER XDR KQL — Detect PhantomCore and PhantomGraph backdoor installation following TrueConf supply chain compromise.\n\n// TrueConf Supply Chain — PhantomCore/PhantomGraph Detection\n// Targets: SysExcSvc.dll, SysReadSvc.dll service installs + unsigned TrueConf\nDeviceServiceEvents\n| where Timestamp > ago(90d)  // check 90 days — campaign active since July 2026\n| where ServiceName in~ (\"SysExcSvc\",\"SysReadSvc\")\n    or (ServiceDisplayName has_any (\"TrueConf\",\"SysExc\",\"SysRead\") and\n        not(ServiceName startswith \"TrueConf\"))\n| project Timestamp, DeviceName, ServiceName, ServiceDisplayName,\n    InitiatingProcessFileName, InitiatingProcessCommandLine\n| union (\n    DeviceFileEvents\n    | where Timestamp > ago(90d)\n    | where FileName in~ (\"SysExcSvc.dll\",\"SysReadSvc.dll\",\"locale.php\")\n    | where ActionType == \"FileCreated\"\n    | project Timestamp, DeviceName, FolderPath, FileName, SHA256,\n        InitiatingProcessFileName\n)\n| sort by Timestamp desc"
  ],
  "source": "SecurityWeek, The Hacker News, Kaspersky ICS CERT, Rescana, GBHackers",
  "sourceNote": "Aug 7–21, 2026"
 },
 "elementorpro": {
  "eyebrow": "Elementor Pro · CVE-2026-32475 · CVSS 9.0 · No Confirmed Exploitation · 12M+ Sites",
  "title": "Elementor Pro CVE-2026-32475 (CVSS 9.0): unauthenticated file upload RCE via double-loop extension bypass — 12M+ WordPress sites exposed",
  "tags": [
   [
    "high",
    "CVSS 9.0"
   ],
   [
    "high",
    "12M+ Sites · No Auth"
   ]
  ],
  "overview": "Patchstack disclosed CVE-2026-32475 in Elementor Pro on August 22, 2026 — an unauthenticated file upload vulnerability in the plugin's Forms module File Upload field that allows a PHP webshell to be written to a publicly accessible directory, achieving remote code execution. The vulnerability mechanism is similar to Forminator Forms CVE-2026-15748, but affects a different plugin with a far larger install base: Elementor Pro is active on over 12 million WordPress sites. No confirmed in-wild exploitation has been reported at time of writing, but automated scanning is near-certain given the no-authentication, no-user-interaction prerequisites and public technical disclosure by Patchstack.",
  "technical": [
   "CVE-2026-32475 (CVSS 9.0, CWE-434: Unrestricted Upload of Dangerous File Type): The Elementor Pro Forms module's File Upload field uses two separate processing loops — one for extension validation and one for moving the uploaded file to its destination directory. An attacker submits two file parts for the same field: the extension validator processes the first part (a legitimate extension), but the file-move loop processes the second part (the malicious PHP file). The mismatch between which loop processes which entry allows the PHP file to bypass the extension blocklist and land in a publicly accessible web directory.",
   "Impact: successful exploitation places a PHP webshell in a URL-accessible location on the server. The attacker then requests the file URL to execute arbitrary PHP code as the web server user — achieving full server access.",
   "No authentication, no user interaction required. The attacker only needs network access to a WordPress site running Elementor Pro with a form containing a File Upload field. This is a very common form configuration.",
   "Comparison to Forminator CVE-2026-15748: both are no-auth file upload RCE in WordPress form plugins using blocklist bypass via different mechanisms (pipe-alternative MIME keys vs double-loop processing mismatch). Both were patched within the same week. The coincidence is notable — it may reflect coordinated researcher attention on WordPress form plugin file upload handling."
  ],
  "iocs": [],
  "iocNote": "No attacker IoCs published — no confirmed exploitation at time of writing. Detection: scan WordPress uploads and temp directories for unexpected PHP files created by web server processes. Alert on PHP file creation in /wp-content/uploads/ by httpd/nginx.",
  "mitigation": [
   "Update Elementor Pro to the patched version. Check the Elementor Pro changelog for the specific version containing the CVE-2026-32475 fix — Patchstack coordinated disclosure with the vendor. Apply via WordPress dashboard (Plugins → Updates).",
   "If immediate update is not possible: disable File Upload fields in all Elementor Pro forms, or restrict form submissions to authenticated users.",
   "Apply the same remediation check to Forminator CVE-2026-15748 (separate plugin, same CVE class) if not already patched — both vulnerabilities are in your WordPress estate if you run either plugin."
  ],
  "response": [
   "Scan /wp-content/uploads/ and any Elementor temporary directories for .php, .phtml, and .php5 files created within the past 48 hours. Any PHP file in these directories is a webshell candidate.",
   "Check web server access logs for POST requests to Elementor form submission endpoints from external IPs, followed by GET requests to PHP files in the uploads directory — this two-step pattern confirms exploitation.",
   "DEFENDER XDR KQL — Detect Elementor Pro CVE-2026-32475 webshell upload and subsequent execution.\n\n// Elementor Pro CVE-2026-32475 — Webshell Upload Detection\n// Requires: Defender for Endpoint on WordPress hosting infrastructure\nDeviceFileEvents\n| where Timestamp > ago(7d)\n| where FileName endswith \".php\" or FileName endswith \".phtml\"\n| where FolderPath has_any (\n    \"\\\\wp-content\\\\uploads\",\n    \"/wp-content/uploads\",\n    \"elementor\",\"tmp\"\n)\n| where ActionType == \"FileCreated\"\n| where InitiatingProcessFileName in~ (\n    \"php.exe\",\"php-cgi.exe\",\"php-fpm\",\n    \"w3wp.exe\",\"httpd\",\"nginx\",\"apache2\"\n)\n| union (\n    // Also catch subsequent webshell execution\n    DeviceProcessEvents\n    | where Timestamp > ago(7d)\n    | where InitiatingProcessFileName in~ (\n        \"php.exe\",\"php-cgi.exe\",\"php-fpm\",\"w3wp.exe\"\n    )\n    | where ProcessCommandLine has_any (\n        \"cmd\",\"shell_exec\",\"system(\",\"exec(\",\n        \"passthru\",\"popen\",\"proc_open\"\n    )\n)\n| project Timestamp, DeviceName, FileName, FolderPath,\n    InitiatingProcessFileName, InitiatingProcessCommandLine\n| sort by Timestamp desc"
  ],
  "source": "The Hacker News, Patchstack",
  "sourceNote": "Aug 22, 2026"
 },
 "rustsupplychain": {
  "eyebrow": "Rust / crates.io · DPRK Supply Chain · Build-Time Credential Theft · 245M+ Downloads",
  "title": "DPRK actors compromise Rust crate maintainer accounts — malicious versions steal developer credentials at build time. 245M+ downloads affected. Crates deleted from crates.io.",
  "tags": [
   [
    "high",
    "DPRK · Build-Time · CI/CD"
   ],
   [
    "high",
    "Developer Credentials · 3 Crates"
   ]
  ],
  "overview": "North Korean threat actors compromised maintainer accounts for multiple widely-used Rust crates on crates.io — including the popular 'arrayref' crate with over 245 million total downloads — and published malicious versions that execute credential-theft code at build time. The Rust Project identified and deleted the malicious versions, but any build that pulled the compromised versions during the exposure window executed the malicious code before the deletion. The technique mirrors prior DPRK supply chain attacks against npm (toml-rb, colors.js) and PyPI, but targets the Rust ecosystem, which had been considered more resilient due to its smaller, tighter-knit maintainer community. Developer endpoints that built projects importing the affected crates during the window should be treated as potentially compromised — SSH keys, cloud credentials, and API tokens stored in the build environment would have been exposed.",
  "technical": [
   "Attack mechanism: DPRK actors compromised crates.io maintainer accounts and published new versions of three legitimate Rust crates containing a malicious build-script (build.rs). In Rust, build.rs scripts execute at compile time — before the main application runs — in a context that has access to the developer's full environment including environment variables, file system, and network.",
   "The malicious build.rs scripts harvested: environment variable contents (including AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, GITHUB_TOKEN, and other CI/CD secrets), SSH private keys from ~/.ssh/, cloud credential files (~/.aws/credentials, ~/.azure/, ~/.config/gcloud/), and Git config and stored credentials. Harvested data was exfiltrated to attacker-controlled infrastructure.",
   "The Rust Project has deleted the malicious versions from crates.io and revoked the compromised maintainer tokens. However, Cargo's package cache means builds from before deletion that used --offline or cached dependencies may still have the malicious version locally. Run `cargo clean` and rebuild with `cargo update` to force fresh resolution.",
   "Affected crates included 'arrayref' (245M+ downloads). The Rust Project has not publicly disclosed all affected crate names — check the official Rust security advisories at rustsec.org/advisories for the complete list and the specific affected version ranges.",
   "This is the first documented DPRK supply chain attack against the Rust ecosystem. Prior DPRK supply chain attacks targeted npm (2024 BeaverTail campaign), PyPI, and Ruby gems. The pattern is consistent: compromise a legitimate, highly-downloaded package to gain build-time code execution on developer machines across multiple organizations."
  ],
  "iocs": [],
  "iocNote": "No attacker infrastructure IoCs published — the malicious code ran transiently at build time and exfiltrated without leaving persistent artifacts on disk. Detection: check for unexpected outbound network connections during `cargo build` runs; inspect CI/CD job logs for curl/wget activity originating from build scripts; check environment variable access patterns in build logs. Audit rustsec.org/advisories for affected crate names and version ranges.",
  "mitigation": [
   "Check rustsec.org/advisories for the complete list of affected crate names and version ranges. Run `cargo audit` against all Rust projects to identify whether affected versions were resolved.",
   "For any project that resolved affected crate versions during the exposure window: treat all secrets accessible in that build environment as compromised — rotate SSH keys, invalidate and rotate cloud API keys and access tokens, revoke and regenerate CI/CD tokens (GitHub Actions, GitLab CI, CircleCI, etc.).",
   "Run `cargo clean && cargo update` to force fresh dependency resolution and evict any cached malicious versions.",
   "Implement crates.io dependency pinning (Cargo.lock committed to version control) and consider vendoring critical dependencies to prevent supply chain substitution without explicit approval."
  ],
  "response": [
   "Review CI/CD job logs for the exposure window — look for unexpected network connections (curl, wget, DNS lookups to non-expected hosts) originating from `cargo build` steps. Malicious build.rs scripts running in your pipelines would appear in these logs.",
   "If any project used an affected crate version: treat all cloud credentials accessible in that build environment as compromised. Check for unauthorized API access in cloud provider logs (AWS CloudTrail, Azure Activity Log, GCP Audit Logs) within 24 hours of each affected build.",
   "Check for new SSH authorized_keys entries, new API keys, or new cloud IAM credentials created shortly after each affected build — DPRK actors typically move quickly from initial access to establishing persistence.",
   "DEFENDER XDR KQL — Detect unexpected outbound network connections during Rust/Cargo build processes, consistent with DPRK supply chain build-time exfiltration.\n\n// Rust Supply Chain DPRK — Build-Time Credential Exfiltration Detection\n// Requires: Defender for Endpoint on CI/CD build agents\nDeviceNetworkEvents\n| where Timestamp > ago(14d)\n| where InitiatingProcessFileName in~ (\"cargo\",\"rustc\",\"cc\",\"c++\",\"link.exe\")\n    or (InitiatingProcessCommandLine has \"cargo build\"\n        or InitiatingProcessCommandLine has \"cargo compile\")\n| where RemoteUrl !has_any (\n    \"crates.io\",\"static.crates.io\",\"github.com\",\"githubusercontent.com\",\n    \"rust-lang.org\",\"docs.rs\"  // known legitimate Cargo/Rust infrastructure\n)\n| where not(ipv4_is_private(RemoteIP))\n| project Timestamp, DeviceName, InitiatingProcessFileName,\n    InitiatingProcessCommandLine, RemoteUrl, RemoteIP, RemotePort\n| sort by Timestamp desc"
  ],
  "source": "The Hacker News, SecurityWeek, it-learn.io, RustSec Advisory Database",
  "sourceNote": "Aug 20–22, 2026"
 },
 "oracleweblogic": {
  "eyebrow": "Oracle HTTP Server / WebLogic · CVE-2026-21962 · CVSS 10.0 · Exploited · KEV · Aug 27 Deadline",
  "title": "Oracle WebLogic CVE-2026-21962 (CVSS 10.0): unauthenticated improper access control exploited since January — CISA KEV Aug 24, federal deadline Aug 27",
  "tags": [
   [
    "crit",
    "CVSS 10.0"
   ],
   [
    "high",
    "Exploited · CISA KEV · Aug 27 Deadline"
   ]
  ],
  "overview": "CISA added CVE-2026-21962 to its Known Exploited Vulnerabilities catalog on August 24, 2026 — a maximum-severity improper access control vulnerability in Oracle HTTP Server and the Oracle WebLogic Server Proxy Plug-in. The flaw allows an unauthenticated attacker with HTTP network access to compromise affected servers, with successful exploitation potentially enabling unauthorized creation, deletion, or modification of critical data, or complete read access to all data accessible through the affected components. Oracle patched the vulnerability in its January 2026 CPU, but active exploitation has been observed since January. The federal remediation deadline under BOD 26-04 is August 27, 2026. SOCRadar reported in July 2026 that the vulnerability was being exploited by a China-linked threat actor targeting government infrastructure. CloudSEK honeypots confirmed attackers are simultaneously chaining CVE-2026-21962 with older, persistent WebLogic RCE flaws (CVE-2020-14882/14883, CVE-2020-2551, CVE-2017-10271), indicating broad-scale automated scanning of WebLogic environments.",
  "technical": [
   "CVE-2026-21962 (CVSS 10.0, CWE-284: Improper Access Control): The Oracle WebLogic Server Proxy Plug-in — which routes requests from Oracle HTTP Server (or Apache HTTP Server / IIS) to backend WebLogic application servers — fails to enforce access controls on incoming HTTP requests. An unauthenticated remote attacker can send crafted HTTP requests to a vulnerable deployment and bypass authorization controls entirely.",
   "Impact: unauthorized creation, deletion, or modification of critical data; complete read access to all data accessible through Oracle HTTP Server and WebLogic Proxy Plug-in. In enterprise deployments, this typically means access to business-critical application data, potentially including financial records, customer data, and internal application state.",
   "Patched in Oracle's January 2026 CPU (Critical Patch Update). Exploitation began shortly after the January 2026 patch release. CISA's KEV addition on August 24, 2026 — seven months after patching — indicates that unpatched WebLogic deployments remain widespread. Federal agencies have a remediation deadline of August 27, 2026.",
   "China-nexus APT exploitation confirmed by SOCRadar July 2026 — targeting government infrastructure. Consistent with established patterns of Chinese state-linked actors targeting Oracle WebLogic (including Hafnium-adjacent groups who frequently target enterprise middleware).",
   "CloudSEK honeypot data confirms simultaneous targeting of multiple WebLogic CVEs: CVE-2026-21962 is being exploited alongside CVE-2020-14882/14883 (Console RCE, unauthenticated), CVE-2020-2551 (IIOP deserialization RCE), and CVE-2017-10271 (WLS-WSAT XML deserialization RCE). Organizations patching only CVE-2026-21962 may still be vulnerable via the older chained CVEs if not also patched."
  ],
  "iocs": [],
  "iocNote": "No specific attacker-infrastructure IoCs published. Detection: review Oracle HTTP Server and WebLogic access logs for unexpected unauthenticated HTTP requests to proxied WebLogic endpoints, particularly those accessing administrative paths (/console, /management) or unexpected data operations. CloudSEK's honeypot data confirms attackers are using automated scanning tools — look for high-volume request patterns from single IPs.",
  "mitigation": [
   "Apply Oracle January 2026 CPU patches for Oracle HTTP Server and WebLogic Server Proxy Plug-in. Federal deadline: August 27, 2026. Oracle's CPU can be obtained through Oracle's support portal (requires active support contract). If you cannot patch immediately, restrict inbound HTTP access to WebLogic Proxy Plug-in endpoints at the network perimeter.",
   "Also patch the older WebLogic CVEs being co-exploited: CVE-2020-14882/14883 (Console RCE), CVE-2020-2551 (IIOP), and CVE-2017-10271 (WLS-WSAT). If these are still outstanding, your WebLogic deployment was already a target before CVE-2026-21962.",
   "Disable WebLogic Server Administration Console if it is internet-facing — it is rarely required to be externally accessible and its exposure materially increases risk.",
   "Network segmentation: WebLogic application servers should not be directly internet-accessible. Oracle HTTP Server / web tier should be the only internet-facing component, and it should only forward requests to WebLogic on specific ports and paths."
  ],
  "response": [
   "Check Oracle HTTP Server and WebLogic access logs for unauthenticated requests returning 200 or 302 responses on paths that require authentication. Specifically check /console (admin console), /em (Enterprise Manager), and any REST/SOAP management endpoints.",
   "Look for data exfiltration indicators: large outbound transfers from WebLogic servers, unusual DNS lookups, or connections to external IPs from hosts running Oracle middleware.",
   "Verify patch status with Oracle OPatch: run `opatch lspatches` to confirm the January 2026 CPU is applied. Compare output against Oracle's January 2026 CPU advisory patch numbers.",
   "DEFENDER XDR KQL — Detect exploitation attempts against Oracle WebLogic, consistent with CVE-2026-21962 and co-exploited WebLogic CVEs.\n\n// Oracle WebLogic CVE-2026-21962 — Unauthenticated Access Attempt Detection\n// Requires: WebLogic/OHS access logs forwarded via Syslog or custom table\nDeviceNetworkEvents\n| where Timestamp > ago(14d)\n| where RemotePort in (7001, 7002, 9001, 9002, 4848)  // common WebLogic ports\n| where ActionType == \"InboundConnectionAccepted\"\n| where not(ipv4_is_private(RemoteIP))\n| join kind=leftouter (\n    DeviceProcessEvents\n    | where InitiatingProcessFileName =~ \"java.exe\"\n    | where ProcessCommandLine has_any (\"weblogic\",\"wls\",\"oracle\")\n    | project DeviceName, JavaPid = ProcessId, JavaCmd = ProcessCommandLine\n) on DeviceName\n| where isnotempty(JavaPid)\n| project Timestamp, DeviceName, RemoteIP, RemotePort, LocalPort, JavaCmd\n| sort by Timestamp desc"
  ],
  "source": "The Hacker News, SecurityWeek, CISA, SecurityAffairs, CyberPress, CloudSEK, SOCRadar",
  "sourceNote": "Aug 24–25, 2026"
 },
 "mirage2fa": {
  "eyebrow": "Microsoft 365 PhaaS · Mirage2FA · AiTM · 4,532 Orgs · LinX Coders",
  "title": "Mirage2FA PhaaS: AiTM session hijack hits 4,532 M365 organizations — 48% of targeted accounts potentially compromised, 63.7% US-based",
  "tags": [
   [
    "high",
    "AiTM · MFA Bypass · M365"
   ],
   [
    "high",
    "4,532 Orgs · 9K+ Compromise Events"
   ]
  ],
  "overview": "ANY.RUN has published research on Mirage2FA, a commercial Phishing-as-a-Service toolkit operated by LinX Coders that has been active since September 2024 and generated its largest surge of activity through mid-2026. Mirage2FA uses Adversary-in-the-Middle (AiTM) architecture to bypass multi-factor authentication against Microsoft 365 accounts — not by breaking MFA algorithms, but by sitting between the victim and Microsoft's real authentication servers. When a victim enters their credentials and completes their MFA challenge on a fake login page, Mirage2FA relays everything to Microsoft in real time over a WebSocket channel, capturing the valid authenticated session cookie before the victim is passed through to the real M365 portal. The victim sees a normal login; the attacker has a live, authenticated session. ANY.RUN's analysis identified 4,532 unique organization email domains potentially compromised across 94 countries, with 9,426 unique targeted addresses and a ~48% overall compromise rate. 63.7% of victims are US-based. Technology, manufacturing, and education are the most targeted industries. Unlike the TheHatman Azure/Entra enumeration campaign also in this brief, Mirage2FA is a broad commercial PhaaS kit available to multiple threat actors — not a single actor's campaign.",
  "technical": [
   "Attack mechanism: Mirage2FA operates as a reverse proxy between the victim's browser and Microsoft's legitimate authentication endpoints. The victim receives a phishing link via email, QR code, or social media. The phishing page (delivered via .htm, .xhtml, or .svg stager) looks identical to the Microsoft 365 login portal. When the victim submits credentials and completes MFA, Mirage2FA relays each step to Microsoft in real time over WebSocket, capturing: (1) the username and password, (2) the one-time MFA code, and (3) the authenticated session cookie issued by Microsoft after successful MFA. The cookie is the primary target — it allows the attacker to authenticate as the victim without needing credentials or MFA codes again.",
   "Delivery mechanisms observed: standard phishing emails with links to .htm stager pages; QR code-based phishing (quishing) embedded in emails or documents, bypassing email URL scanning; JavaScript-obfuscated landing pages that evade automated analysis sandboxes; redirect chains through legitimate services (Cloudflare pages, SharePoint links) to pass reputation checks.",
   "Post-compromise impact: with a valid authenticated M365 session cookie, attackers gain access to the victim's: Exchange Online mailbox (email read/exfiltration, mail rule creation for persistent access), SharePoint and OneDrive (document access and exfiltration), Teams (message read, lateral movement via Teams phishing), and all SSO-connected applications (the session cookie grants access to any app using M365/Entra ID for authentication). The session cookie is valid until it expires (typically 1–24 hours) or the victim's token is revoked.",
   "Scale: ANY.RUN identified 9,426 unique targeted email addresses. Of these, 4,532 show indicators of successful compromise (~48% success rate). The operation has been running since September 2024 with increasing volume through 2026. 4,532 organization domains affected across 94 countries. US: 63.7%, India, Singapore, UK, Canada also significantly affected. Industries: Technology (27%), Manufacturing (18%), Education (14%).",
   "Toolkit: Mirage2FA is sold as a commercial kit on underground forums, operated by a group calling themselves LinX Coders. This means the attack capability is available to multiple distinct threat actors — defenders cannot limit their model to a single attacker profile when defending against Mirage2FA infrastructure."
  ],
  "iocs": [
   {
    "value": "linxcoders",
    "type": "Actor Alias",
    "note": "Threat group operating and selling the Mirage2FA PhaaS kit on underground forums.",
    "source": "https://any.run/cybersecurity-blog/mirage2fa-phishing-targets-us-companies/"
   },
   {
    "value": "Mirage2FA",
    "type": "String",
    "note": "Commercial PhaaS toolkit name. Used in underground forum listings and operator communications.",
    "source": "https://thehackernews.com/2026/08/mirage2fa-surge-hits-4500-us-and-eu.html"
   }
  ],
  "iocNote": "ANY.RUN has published full IOC lists in their research report including phishing domain patterns, stager file hashes, and known C2 infrastructure. Fetch the full report at any.run/cybersecurity-blog/mirage2fa-phishing-targets-us-companies/ for a complete indicator set. Key behavioral indicator: legitimate-looking Microsoft login pages hosted on non-Microsoft domains, particularly .htm/.xhtml/.svg files with JavaScript obfuscation and WebSocket connections to non-Microsoft infrastructure.",
  "mitigation": [
   "Deploy Entra ID Token Protection (Conditional Access policy requiring token binding) — this is the primary technical control that directly addresses AiTM session theft. Stolen session cookies cannot be replayed without the original device binding when Token Protection is enforced.",
   "Enable Continuous Access Evaluation (CAE) in Entra ID — this shortens session token lifetime and enables near-real-time revocation when anomalous sign-in conditions are detected, limiting attacker dwell time with a stolen session.",
   "Configure Conditional Access policies to restrict M365 access to compliant, Entra-joined devices (device compliance). Stolen session cookies used on non-compliant devices will be blocked.",
   "Train users to verify they are on login.microsoftonline.com before entering credentials. QR code phishing (quishing) bypasses link scanning — brief users not to scan QR codes in emails that direct to login pages.",
   "If your organization processes high-value M365 data: consider FIDO2 hardware security keys as the MFA method — physical FIDO2 keys implement WebAuthn origin binding that defeats AiTM attacks even when used through a reverse proxy."
  ],
  "response": [
   "Check Entra ID Sign-In Logs for: sign-in events flagged as 'Token issuer: Mirage' or with unusual user agent strings; sign-in events from a known-good IP for credentials immediately followed by a sign-in from a different IP or country for the same session (session cookie reuse); sign-ins to the same account from different geolocations within minutes of each other (impossible travel).",
   "Query Entra ID Audit Logs for mail rules created after unusual sign-ins — attacker post-compromise persistence commonly includes creating inbox rules to forward email to external addresses or hide security alerts.",
   "If a compromised session is suspected: immediately revoke all refresh tokens for the affected user (Entra ID → Users → Revoke sessions), reset credentials, and review all mailbox rules and delegated permissions added since the suspected compromise window.",
   "SENTINEL KQL — Detect Mirage2FA AiTM session cookie replay: sign-ins from one IP followed by the same session used from a different IP within a short window.\n\n// Mirage2FA — AiTM Session Cookie Replay Detection\n// Flags: same user, same session, different IP within 30 minutes\nlet SignIns = SigninLogs\n| where TimeGenerated > ago(7d)\n| where ResultType == 0  // successful sign-ins only\n| project TimeGenerated, UserPrincipalName, SessionId=tostring(\n    parse_json(AuthenticationDetails)[0].authenticationMethod),\n    IPAddress, AppDisplayName, DeviceDetail;\nSignIns\n| join kind=inner (SignIns) on UserPrincipalName\n| where TimeGenerated1 > TimeGenerated\n| where abs(datetime_diff('minute', TimeGenerated1, TimeGenerated)) < 30\n| where IPAddress != IPAddress1  // different IP for same user\n| project\n    FirstSignIn = TimeGenerated, FirstIP = IPAddress,\n    SecondSignIn = TimeGenerated1, SecondIP = IPAddress1,\n    UserPrincipalName, AppDisplayName\n| sort by FirstSignIn desc"
  ],
  "source": "The Hacker News, ANY.RUN, Cyber Security News, HackerNoon",
  "sourceNote": "Aug 19–25, 2026"
 },
 "miniorange": {
  "eyebrow": "WordPress · miniOrange SAML SSO · CVE-2026-61979 + CVE-2026-15981 · CVSS 9.8 · Actively Exploited",
  "title": "miniOrange SAML SSO CVE-2026-61979/15981 (CVSS 9.8): chained unauthenticated auth bypass grants full WordPress admin access — actively exploited, PoC public",
  "tags": [
   [
    "high",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · SAML Bypass · WordPress Admin"
   ]
  ],
  "overview": "Attackers are actively exploiting two chained authentication bypass vulnerabilities in the miniOrange SAML 2.0 Single Sign On WordPress plugin that allow an unauthenticated attacker to forge SAML responses and log in as any WordPress user, including administrators. DigitalOcean's security team detected and blocked an active exploitation attempt on August 16, 2026, and then reproduced both bypasses in the Standard edition. A public proof-of-concept exploit is available. The attack chains CVE-2026-61979 (signature algorithm confusion) and CVE-2026-15981 (OpenSSL return value mishandling) to forge a fully valid SAML assertion without any credentials. A particularly dangerous distribution issue: the plugin ships under one WordPress slug but has seven independently versioned editions (free plus six paid tiers). The original security advisories covered only the free edition — all six paid editions were patched silently with no changelog and no public advisory, meaning paid-edition sites received no update warning through the WordPress dashboard and were never reflected in vulnerability databases as affected.",
  "technical": [
   "CVE-2026-61979 (CVSS 8.1, CWE-290: Authentication Bypass by Spoofing): The plugin accepted the signature algorithm specified in the incoming SAML response rather than enforcing the algorithm configured by the site administrator. An attacker crafts a SAML response specifying HMAC-SHA1 as the signature method. The plugin then treats the Identity Provider's RSA public key PEM as the HMAC shared secret. Since RSA public keys are widely accessible (published in SAML metadata), the attacker can compute a valid HMAC-SHA1 signature using the public key as the secret, forging a SAML assertion the plugin treats as legitimate.",
   "CVE-2026-15981 (CVSS 9.8, CWE-287: Improper Authentication): PHP's openssl_verify() returns 1 (valid), 0 (invalid), or -1 (error). The plugin performed a loose boolean check on the return value, causing -1 (error) to evaluate as truthy — i.e., as a successful signature verification. An attacker can craft a malformed SAML signature that triggers an OpenSSL verification error, which the plugin then interprets as a passing signature check. Combined with CVE-2026-61979, this provides a complete authentication bypass: the attacker specifies a manipulable algorithm (Chain 1) or triggers an OpenSSL error (Chain 2) to forge a SAML assertion as any user.",
   "Distribution issue — seven editions, one slug: The plugin is distributed as miniorange-saml-20-single-sign-on on WordPress.org, but contains seven independently versioned product editions: free (5.x), Standard (16.x → 17.x), Premium (20.x), Enterprise (26.x), All Inclusive (32.x), and other paid tiers (35.x). Patchstack discovered that all six paid editions were silently patched — Standard edition fixed in 17.0.5 (CVE-2026-61979) and 17.0.6 (CVE-2026-15981) — but no public advisories were published for paid editions, no CVE records named them, and the WordPress admin dashboard shows no update prompt for some paid tiers (notably 16.x sites must manually upload the fix).",
   "Exploitation status: DigitalOcean detected an active admin session attempt on August 16, blocked it, and reproduced both CVEs on Standard edition 16.1.9 on August 17. A public PoC targeting the free edition is available as of August 25. Patchstack warns that the pace of attacks could increase significantly given the public PoC.",
   "Affected versions and fixes: Free edition — fixed in 5.4.5. Standard edition — CVE-2026-61979 fixed in 17.0.5; CVE-2026-15981 fixed in 17.0.6. Other paid editions — contact miniOrange for version-specific patch status; the standard WordPress update prompt may not surface the fix for all paid tiers."
  ],
  "iocs": [],
  "iocNote": "No attacker-infrastructure IOCs published. Detection: monitor WordPress authentication logs for SAML assertion submissions followed by immediate admin-level session creation from IP addresses with no prior login history. Look for POST requests to /wp-login.php?saml_user_auto_register or similar SAML callback paths from external IPs, particularly those not associated with your configured Identity Provider.",
  "mitigation": [
   "Update immediately. Free edition: update to 5.4.5 via the WordPress plugin dashboard. Standard edition: update to 17.0.6 (which covers both CVEs). Other paid editions: log in to the miniOrange portal to obtain the patched version — the WordPress admin update prompt may NOT show the available fix for all paid tiers. Version 16.x sites must manually upload the updated plugin archive.",
   "If you cannot update immediately: disable the miniOrange SAML SSO plugin until the patch is applied. SAML SSO functionality will be unavailable but the authentication bypass attack surface is eliminated.",
   "After patching: audit your WordPress admin user list for any accounts created between August 16 and the date you applied the patch. Any unfamiliar administrator accounts should be treated as attacker-created and removed."
  ],
  "response": [
   "Check WordPress database for unexpected administrator-role user accounts created after August 16, 2026 — run: `SELECT user_login, user_registered FROM wp_users u JOIN wp_usermeta m ON u.ID=m.user_id WHERE m.meta_key='wp_capabilities' AND m.meta_value LIKE '%administrator%' AND u.user_registered > '2026-08-16'`",
   "Review WordPress authentication logs for SAML callback requests (POST to wp-login.php with SAML parameters) from IPs not matching your configured Identity Provider. These are exploitation attempts.",
   "If a compromised admin account is found: assume full WordPress compromise — reset all administrator credentials, rotate database passwords, audit installed plugins for malicious additions, and check for webshells in the wp-content directory.",
   "DEFENDER XDR KQL — Detect miniOrange SAML exploitation: WordPress admin session creation following SAML callback from unexpected IP.\n\n// miniOrange SAML CVE-2026-61979/15981 — SAML Bypass Exploitation Detection\n// Requires: IIS/nginx access logs forwarded to Sentinel, WordPress on Windows hosting\nW3CIISLog\n| where TimeGenerated > ago(14d)\n| where csUriStem has_any (\"wp-login.php\",\"saml_user_auto_register\",\"saml_sso\")\n| where csMethod == \"POST\"\n| where sc_status in (200, 302)\n| where not(ipv4_is_private(cIP))\n| join kind=leftouter (\n    W3CIISLog\n    | where csUriStem has \"wp-admin\"\n    | where sc_status == 200\n    | project AdminTime = TimeGenerated, cIP, AdminPath = csUriStem\n) on cIP\n| where abs(datetime_diff('minute', TimeGenerated, AdminTime)) < 5\n| project TimeGenerated, cIP, csUriStem, sc_status, AdminTime, AdminPath\n| sort by TimeGenerated desc"
  ],
  "source": "The Hacker News, BleepingComputer, Patchstack, SCWorld, CyberPress",
  "sourceNote": "Aug 16–25, 2026"
 },
 "gitea2": {
  "eyebrow": "Gitea · CVE-2026-60004 · CVSS 9.8 · Exploited · CISA KEV · Aug 28 Deadline",
  "title": "Gitea CVE-2026-60004 (CVSS 9.8): diffpatch RCE exploited to deploy crypto-miner dropper — effectively unauthenticated on default installs. CISA KEV Aug 25, federal deadline Aug 28.",
  "tags": [
   [
    "crit",
    "CVSS 9.8"
   ],
   [
    "high",
    "Exploited · CISA KEV · Aug 28 Deadline"
   ]
  ],
  "overview": "CISA added CVE-2026-60004 to its Known Exploited Vulnerabilities catalog on August 25, 2026, with a federal remediation deadline of August 28. Critical code injection in the Gitea diffpatch endpoint allows an attacker with repository write access to plant an executable Git hook that runs arbitrary shell commands as the Gitea service account. Gitea enables open user registration by default — an automated scanner was able to register an account, create a repository, and trigger the full exploit chain with no prior credentials, deploying a crypto-miner-like dropper. Confirmed exploitation on a self-hosted instance per incident report (Habr). A public PoC is available (0xBlackash/CVE-2026-60004). Affects Gitea 1.17–1.27.0; fixed in 1.27.1. Blast radius: database credentials, OAuth tokens, SSH host keys, CI/CD pipeline tampering. Federal deadline Aug 28, 2026.",
  "technical": [
   "Exposure (Aug 26, 2026): Shadowserver identifies close to 5,000 internet-exposed Gitea instances. The advisory names versions 1.17 through 1.27.0 as affected and 1.27.1 as the patched release; 1.27.1 shipped July 27, 2026 with the advisory published July 28. Gitea credits Shai Rod (NightRang3r) with the report.",
   "Observed impact in the one publicly documented incident: the payload ran as the git user inside a Docker container, dropping a miner-like dropper. The container was unprivileged, the miner did not survive restarts, and investigators found no cron jobs, systemd services or new SSH keys — the practical exposure is repository content, service-account credentials and build-output integrity rather than host persistence.",
   "Related prior exploitation: CVE-2026-20896 in Gitea allowed authentication bypass using reverse-proxy headers such as X-WEBAUTH-USER. Instances behind a misconfigured proxy should be checked for both.",
   "CVE-2026-60004 (CVSS 9.8, CWE-94 Code Injection): The diffpatch API endpoint applies patches to a repository. An attacker submits the same malicious patch twice, triggering an add/add collision. Git's three-way merge fallback writes a file into the repository hooks/ directory as a live Git hook (post-index-change) that executes arbitrary shell commands as the Gitea OS service account on the next Git operation.",
   "Open registration exploit path: Gitea enables open self-registration by default. A completely external attacker can register an account, create a repository, and trigger the exploit without any stolen credentials. Automated scanners confirmed exploiting this path.",
   "Blast radius: Gitea service account typically owns the repository tree, database connection secrets (app.ini), OAuth credentials, SSH host keys, and CI/CD integration tokens. Container isolation limited impact in the confirmed incident, but mounted volumes and outbound network access frequently extend blast radius to pipeline compromise.",
   "PoC public at github.com/0xBlackash/CVE-2026-60004. Automated scanning activity confirmed. All Gitea 1.17–1.27.0 instances with open registration are at high risk."
  ],
  "iocs": [
   {
    "value": "post-index-change",
    "type": "Filename",
    "note": "Git hook filename written by the exploit. Presence in repository hooks/ directory is a strong exploitation indicator.",
    "source": "https://securityarsenal.com/blog/cve-2026-60004-gitea-diffpatch-code-injection-added-to-cisa-kev-detection-and-remediation-guide"
   },
   {
    "value": "/api/v1/repos/",
    "type": "URL",
    "note": "Gitea diffpatch endpoint path prefix. Monitor for unexpected POST requests to .*/diffpatch in access logs.",
    "source": "https://thehackernews.com/2026/08/critical-gitea-rce-actively-exploited.html"
   }
  ],
  "iocNote": "No authoritative IOC set. Detection is behavioral: unexpected account registrations, unusual diffpatch API calls, unexpected files in repository hooks/ directories, processes spawned by Gitea service account, anomalous CPU spikes.",
  "mitigation": [
   "Update to Gitea 1.27.1 immediately. Federal deadline August 28. Gitea Cloud received the update automatically.",
   "If unable to patch: disable open registration immediately (app.ini: [service] DISABLE_REGISTRATION = true). This closes the unauthenticated path.",
   "Audit all repository hooks/ directories for unexpected files. Any hook not placed by your tooling is suspect.",
   "Rotate all credentials stored in Gitea app.ini if exploitation cannot be ruled out for the July 26 – August 28 window."
  ],
  "response": [
   "Scan hooks directories: find /path/to/gitea/repositories -name \"hooks\" -type d -exec ls -la {}/ \\;",
   "Check access logs for POST to diffpatch: grep -i \"diffpatch\" /var/log/gitea/gitea.log | grep POST",
   "If anomalous hooks found: isolate the server, rotate all secrets, revoke sessions, audit repository content for tampering.",
   "DEFENDER XDR KQL — Detect Gitea exploitation: unexpected process spawned by Gitea service or hook file written to repository hooks directory.\n\n// Gitea CVE-2026-60004 — Behavioral Detection\n(\n  DeviceProcessEvents\n  | where Timestamp > ago(14d)\n  | where InitiatingProcessFileName in~ (\"gitea\",\"gitea-linux-amd64\")\n  | where FileName !in~ (\"git\",\"gitea\",\"sh\",\"bash\")\n  | project Timestamp, DeviceName, FileName, ProcessCommandLine, AccountName\n)\n| union (\n  DeviceFileEvents\n  | where Timestamp > ago(14d)\n  | where FolderPath has \"repositories\" and FolderPath has \"hooks\"\n  | where FileName in~ (\"post-index-change\",\"pre-receive\",\"post-receive\",\"update\")\n  | where InitiatingProcessFileName !in~ (\"git\",\"gitea\")\n  | project Timestamp, DeviceName, FileName, FolderPath\n)\n| sort by Timestamp desc"
  ],
  "source": "The Hacker News, Help Net Security, SOCPrime, SecurityArsenal, CISA, runZero",
  "sourceNote": "Aug 25–26, 2026"
 },
 "mlflow": {
  "eyebrow": "MLflow · CVE-2026-64849 · CVSS 9.3 · CISA KEV · Sep 2 Deadline · AI/ML Platform",
  "title": "MLflow CVE-2026-64849 (CVSS 9.3): SSRF vulnerability exploited to steal cloud IAM credentials — CISA KEV Aug 19, federal deadline Sep 2",
  "tags": [
   [
    "crit",
    "CVSS 9.3"
   ],
   [
    "high",
    "Exploited · CISA KEV · Sep 2 Deadline · Cloud IAM Theft"
   ]
  ],
  "overview": "CISA added CVE-2026-64849 to its Known Exploited Vulnerabilities catalog on August 19, 2026, with a federal remediation deadline of September 2. The vulnerability is a Server-Side Request Forgery (SSRF) flaw in MLflow, the widely-used open-source machine learning lifecycle platform. Successful exploitation allows an unauthenticated attacker to make the MLflow server issue HTTP requests to internal resources — including the cloud instance metadata service endpoint (IMDS at 169.254.169.254). The cloud IMDS endpoint returns temporary IAM credentials for the compute instance role, which attackers can then use to authenticate to AWS, Azure, or GCP APIs. This gives attackers access to cloud storage buckets (where ML training data and model artifacts are stored), cloud databases, and any other resources accessible to the ML compute role. The flaw is particularly dangerous because ML/AI workloads often run with broad cloud permissions to access training data across multiple storage systems, and security teams may not monitor MLflow server traffic as carefully as production application traffic.",
  "technical": [
   "CVE-2026-64849 (CVSS 9.3, CWE-918 SSRF): MLflow fails to validate or restrict user-supplied URLs before making server-side HTTP requests. An unauthenticated attacker can supply a URL pointing to internal network resources (e.g., cloud IMDS endpoint, internal APIs, Kubernetes service endpoints) and the MLflow server will fetch those resources and return the response.",
   "Cloud IAM credential theft path: on AWS, Azure, and GCP, every compute instance has access to a metadata service endpoint (typically 169.254.169.254 or equivalent). By directing the SSRF to the IMDS endpoint, an attacker can retrieve temporary IAM credentials for the instance's service role. These credentials carry the same permissions as the ML compute instance — often broad read/write access to cloud storage, ML model registries, and databases containing training data.",
   "AI/ML infrastructure targeting: MLflow is used by data science and ML engineering teams for experiment tracking, model versioning, and model serving. These environments typically have access to sensitive training data sets, proprietary model weights, and production model serving infrastructure. Compromise of a single MLflow instance can provide a pivot point into an organization's entire ML pipeline."
  ],
  "iocs": [],
  "iocNote": "No specific attacker IOCs published. Detection focus: anomalous outbound HTTP requests from MLflow server processes to 169.254.169.254 (AWS/Azure IMDS), 169.254.170.2 (ECS task metadata), metadata.google.internal (GCP), or any internal RFC-1918 address ranges not consistent with normal ML infrastructure communication.",
  "mitigation": [
   "Apply available MLflow security patches or update to the latest MLflow release. Check the MLflow GitHub releases and security advisories for the specific patched version.",
   "Block SSRF paths at the network level: implement egress firewall rules preventing the MLflow server from accessing the cloud IMDS endpoint (169.254.169.254) and internal network ranges not required for normal operation.",
   "Scope the instance IAM role minimally: the MLflow compute instance role should have only the specific S3/blob/GCS bucket permissions required. Remove wildcard permissions (e.g., s3:*). This limits the blast radius if IMDS credentials are stolen.",
   "If publicly accessible: restrict MLflow server access to authenticated users only. MLflow installations should not be exposed to the internet without authentication."
  ],
  "response": [
   "Check cloud provider logs for IAM API calls using the MLflow instance role that are inconsistent with normal ML workloads — unusual time-of-day API calls, calls to unfamiliar services, or calls from unexpected source IPs.",
   "If credential theft is suspected: immediately rotate the instance IAM role credentials (revoke current session tokens), audit CloudTrail/Azure Monitor/GCP Audit Logs for the theft window, and check for new IAM users, roles, or policies created using the stolen credentials.",
   "Audit MLflow access logs for requests containing unusual URL parameters pointing to internal addresses (169.254.169.254, 10.x.x.x, 172.16.x.x, 192.168.x.x)."
  ],
  "source": "SecurityWeek, Cyber Security News, CISA",
  "sourceNote": "Aug 19–26, 2026"
 },
 "qtfy": {
  "eyebrow": "China APT · QTFY / QScan / QTRouter · DOJ/FBI Seizure · Active Since 2018",
  "title": "DOJ/FBI seize QScan and QTRouter — China-linked QTFY APT (Nanjing Xinjiuwei) breached NASA, Federal Reserve, DOJ, NIH, and US Senate. Sold hacking services to MSS and PLA. All C2 domains seized, both platforms inoperable.",
  "tags": [
   [
    "crit",
    "China State-Sponsored · DOJ/FBI Action"
   ],
   [
    "high",
    "NASA · Fed · Senate · DOJ Compromised"
   ]
  ],
  "overview": "The U.S. Department of Justice and FBI announced August 26, 2026 the court-authorized seizure of three domains central to two Chinese state-sponsored hacking platforms — QScan and QTRouter — operated by threat group QTFY, employed by Nanjing Xinjiuwei Network Technology Company (南京鑫玖维网络科技有限公司). QTFY has been actively compromising U.S. critical infrastructure since at least May 2018. Confirmed victims include NASA, the Federal Reserve, the Departments of Justice, Energy, and Health and Human Services, the National Institutes of Health, and the United States Senate. Additional victims include hospitals, telecommunications providers, power companies, financial institutions, and defense contractors domestically and in South Korea. QTFY sold hacking services commercially to customers including China's Ministry of State Security (MSS) and People's Liberation Army (PLA). Lumen Technologies' Black Lotus Labs tracked the infrastructure for 18 months. The three seized domains were hard-coded into both QScan and QTRouter for C2 and authentication — seizure immediately rendered both platforms inoperable. This follows prior FBI disruptions of China-linked malware: PlugX (2025), Flax Typhoon (2024), and Volt Typhoon (2023).",
  "technical": [
   "QScan — reconnaissance and exploitation platform: Continuously scanned internet-connected devices globally, profiling targets for open ports, application banners, OS fingerprints, and configuration data. Automatically infected vulnerable IoT devices, conscripting them as botnet nodes for the QTRouter obfuscation network.",
   "QTRouter — Operational Relay Box (ORB) network: Comprised the compromised IoT devices plus commercial proxy service nodes (VPS purchased from fastlink.ws under codename \"Fast Labyrinth\"). When QTFY or its paying customers conducted intrusions, traffic routed through QTRouter nodes appeared to originate from locations geographically close to the target or outside China. This ORB tactic has been increasingly used by Chinese APT groups since 2024.",
   "Commercial hacking services model: QTFY operated as a full-service hacking contractor, selling access to QScan scanning capability and QTRouter obfuscation nodes to external actors. Customers confirmed by DOJ included China's MSS and PLA. This means the QTFY disruption affects intrusion campaigns beyond QTFY's own operations.",
   "Domain seizure impact: The three seized domains (qtproxy[.]xyz, qt-proxy[.]org, qt-team[.]com) were hard-coded into QScan and QTRouter binary malware for C2 communication and authentication. Seizure immediately disrupted all infected devices globally running QScan or QTRouter components. Law enforcement banners now displayed on all three domains."
  ],
  "iocs": [
   {
    "value": "qtproxy.xyz",
    "type": "Domain",
    "note": "QScan/QTRouter C2 domain — hard-coded in malware. Seized by FBI/DOJ Aug 26, 2026. Now displays law enforcement banner. Check historical DNS logs.",
    "source": "https://www.justice.gov/opa/pr/justice-department-and-fbi-seize-platforms-operated-and-used-china-state-sponsored-hackers"
   },
   {
    "value": "qt-proxy.org",
    "type": "Domain",
    "note": "QScan/QTRouter C2 domain — hard-coded in malware. Seized by FBI/DOJ Aug 26, 2026. Now displays law enforcement banner.",
    "source": "https://www.justice.gov/opa/pr/justice-department-and-fbi-seize-platforms-operated-and-used-china-state-sponsored-hackers"
   },
   {
    "value": "qt-team.com",
    "type": "Domain",
    "note": "QTFY operational domain — hard-coded in malware. Seized by FBI/DOJ Aug 26, 2026.",
    "source": "https://www.justice.gov/opa/pr/justice-department-and-fbi-seize-platforms-operated-and-used-china-state-sponsored-hackers"
   },
   {
    "value": "fastlink.ws",
    "type": "Domain",
    "note": "Commercial proxy service whose nodes were purchased by QTFY as \"Fast Labyrinth\" ORB relay nodes to blend espionage traffic with legitimate proxy traffic.",
    "source": "https://www.bleepingcomputer.com/news/security/fbi-disrupts-proxy-network-enabling-chinese-espionage-operations/"
   },
   {
    "value": "QTFY",
    "type": "Actor Alias",
    "note": "China state-sponsored APT group employed by Nanjing Xinjiuwei Network Technology Company. Operated QScan and QTRouter since 2018. Sold services to China MSS and PLA.",
    "source": "https://www.justice.gov/opa/pr/justice-department-and-fbi-seize-platforms-operated-and-used-china-state-sponsored-hackers"
   }
  ],
  "iocNote": "The three seized C2 domains are now law enforcement-controlled. Defenders should review DNS, proxy, and network logs for historical connections to qtproxy[.]xyz, qt-proxy[.]org, qt-team[.]com, and fastlink[.]ws from the May 2018 — August 26, 2026 window. Any connection is a potential indicator of QScan infection or QTRouter relay node activity. Lumen Black Lotus Labs is expected to publish additional IOCs; monitor their blog.",
  "mitigation": [
   "Review DNS and proxy logs for historical connections to all four IOC domains back to 2018. Any internal host that connected to these domains during the campaign window is a priority investigation target.",
   "Audit internet-facing IoT devices, routers, and network appliances for unauthorized configuration changes or unexpected outbound connections — QScan specifically targeted IoT infrastructure as botnet nodes.",
   "For organizations in confirmed victim sectors (federal, defense, telecom, financial, healthcare): conduct a targeted hunt for lateral movement originating from perimeter devices that may have been compromised as QTRouter relay nodes."
  ],
  "response": [
   "Pull DNS logs for qtproxy.xyz, qt-proxy.org, qt-team.com, fastlink.ws going back as far as your retention allows. Any internal resolution of these domains should be escalated immediately.",
   "Check for unexpected outbound connections from IoT, router, and camera-class devices to commercial VPS providers — this is the QTRouter node recruitment signature.",
   "DEFENDER XDR KQL — Hunt for historical QTFY infrastructure connections.\n\n// QTFY QScan/QTRouter — Historical Connection Hunt\nlet qtfy_iocs = dynamic([\"qtproxy.xyz\",\"qt-proxy.org\",\"qt-team.com\",\"fastlink.ws\"]);\n(\n  DeviceNetworkEvents\n  | where RemoteUrl has_any (qtfy_iocs)\n     or RemoteIPType == \"Public\" and (\n        RemoteUrl has \"qtproxy\" or RemoteUrl has \"qt-proxy\" or RemoteUrl has \"qt-team\"\n     )\n  | project Timestamp, DeviceName, RemoteUrl, RemoteIP,\n      InitiatingProcessFileName, InitiatingProcessCommandLine\n)\n| union (\n  DnsEvents\n  | where Name has_any (qtfy_iocs)\n  | project Timestamp, ClientIP, Name, QueryType\n)\n| sort by Timestamp desc"
  ],
  "source": "DOJ Press Release, The Hacker News, BleepingComputer, Lumen Black Lotus Labs, UPI",
  "sourceNote": "Aug 26, 2026 — breaking"
 }
},
  META: {
"iranot": {
 "status": "new",
 "cvss": null,
 "admiralty": "B2",
 "conf": "Confirmed impact, attribution reported not formally attributed — UK officials speaking to press; FBI attributed US incidents to malicious cyber actors with government sources naming Iran as the likely origin",
 "confNote": "The UK plant is unnamed and the attribution comes from officials speaking to news outlets rather than from a published advisory. Scope reporting differs by date: at least seven states (Foreign Policy, Aug 13) versus twelve states in the later coverage. The intent assessment — capability demonstration rather than direct harm — is from researchers quoted in the reporting, not from government.",
 "iocDate": "Aug 29, 2026 — no indicators published",
 "severity": 5,
 "sectors": [
  "Energy",
  "Water and Wastewater Systems",
  "Government Facilities",
  "Critical Manufacturing"
 ],
 "attack": [
  "T0812 — Change Credential (ICS)",
  "T0813 — Denial of Control (ICS)",
  "T0827 — Loss of Control (ICS)",
  "T0800 — Activate Firmware Update Mode (ICS)",
  "T0855 — Unauthorized Command Message (ICS)",
  "T1190 — Exploit Public-Facing Application"
 ]
},
"nextjs": {
 "status": "new",
 "cvss": 9.5,
 "admiralty": "A1",
 "conf": "Vendor advisory — no exploitation reported, no public PoC",
 "confNote": "Two advisories with different identifiers and scoring systems: CVE-2026-75604 at CVSS 9.0 (CVSS 3.1) and GHSA-2xp9-vwfh-vxw4 at CVSS 9.5 (CVSS 4.0), the latter with no CVE assigned. The META cvss carries the higher of the two. The AVIF fix is a mitigation — AVIF optimization is disabled — because the upstream libheif release had not shipped as of Aug 27.",
 "iocDate": "Aug 28, 2026 — no indicators published",
 "severity": 4,
 "sectors": [
  "Information Technology",
  "Commercial Facilities",
  "Financial Services",
  "All Sectors"
 ],
 "attack": [
  "T1190 — Exploit Public-Facing Application",
  "T1083 — File and Directory Discovery",
  "T1059 — Command and Scripting Interpreter",
  "T1195.001 — Supply Chain Compromise: Compromise Software Dependencies and Development Tools"
 ]
},
"cosmosevm": {
 "status": "new",
 "cvss": null,
 "admiralty": "A1",
 "conf": "Confirmed exploitation — vendor-confirmed drain across six chains, with a published post-mortem",
 "confNote": "Cosmos Labs published the advisory and the post-mortem, so the exploitation and the April misassessment are vendor-confirmed. No CVE, no CWE and no CVSS were published. The dollar total (~$5.72M), the named chains and the vesting-account underflow description come from crypto-sector outlets rather than from Cosmos Labs.",
 "iocDate": "Aug 29, 2026 — no indicators published",
 "severity": 4,
 "sectors": [
  "Financial Services",
  "Information Technology"
 ],
 "attack": [
  "T1190 — Exploit Public-Facing Application",
  "T1499 — Endpoint Denial of Service",
  "T1657 — Financial Theft"
 ]
},
"novacookies": {
 "status": "new",
 "cvss": 0,
 "admiralty": "A2",
 "conf": "Vendor research — infrastructure and targeting confirmed; compromise not asserted",
 "confNote": "Island states its campaign artifacts indicate targeting and infrastructure association, not successful delivery or account compromise, and that geographic and sector findings describe the reviewed dataset rather than a complete victim census. Telegram pricing material records claims by an account advertising the service and does not establish identity, customer, order or payment. Island and Proofpoint report different activity curves, which Island attributes to different research vantage points. Short-lived links prevented repeatable testing of every access condition.",
 "iocDate": "Aug 26, 2026",
 "sectors": [
  "All Sectors",
  "Financial Services",
  "Information Technology",
  "Government Facilities",
  "Critical Manufacturing",
  "Commercial Facilities"
 ],
 "attack": [
  "T1566.002 Phishing: Spearphishing Link",
  "T1656 Impersonation",
  "T1557 Adversary-in-the-Middle",
  "T1539 Steal Web Session Cookie",
  "T1550.004 Use Alternate Authentication Material: Web Session Cookie",
  "T1621 Multi-Factor Authentication Request Generation",
  "T1584 Compromise Infrastructure",
  "T1497 Virtualization/Sandbox Evasion",
  "T1583.001 Acquire Infrastructure: Domains",
  "T1098.005 Account Manipulation: Device Registration"
 ]
},
"papercut": {
 "status": "new",
 "cvss": 9.4,
 "admiralty": "A1",
 "conf": "Confirmed exploitation — vendor-confirmed customer incidents plus independent IR observation",
 "confNote": "PaperCut confirms customer incidents but has published no detail on the activity or the actor. Huntress observed exploitation in two customer environments; watchTowr reports the chaining and the patch bypasses. The bypass claims are watchTowr's own and have not been independently confirmed.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "All Sectors",
  "Information Technology",
  "Government Facilities",
  "Commercial Facilities",
  "Healthcare and Public Health"
 ],
 "attack": [
  "T1190 Exploit Public-Facing Application",
  "T1059 Command and Scripting Interpreter",
  "T1505 Server Software Component",
  "T1082 System Information Discovery",
  "T1057 Process Discovery",
  "T1070.004 Indicator Removal: File Deletion",
  "T1070.002 Indicator Removal: Clear Linux or Mac System Logs"
 ]
},
"owncloudph": {
 "status": "new",
 "cvss": 9.8,
 "admiralty": "A1",
 "conf": "Confirmed exploitation — researcher-observed open directory with exfiltrated data; CISA KEV listing",
 "confNote": "Attribution is to a Chinese speaker on language artifacts alone. Hunt.io explicitly does not assert state affiliation, stating the operator may be state-affiliated, contracted or independent. The 176-file / 372 MB figure is Hunt.io's estimate from the staging directories.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "Nuclear",
  "Government Facilities",
  "Defense Industrial Base",
  "Information Technology",
  "Critical Manufacturing"
 ],
 "attack": [
  "T1190 Exploit Public-Facing Application",
  "T1078 Valid Accounts",
  "T1213 Data from Information Repositories",
  "T1005 Data from Local System",
  "T1552.001 Unsecured Credentials: Credentials In Files",
  "T1041 Exfiltration Over C2 Channel",
  "T1110 Brute Force",
  "T1587.001 Develop Capabilities: Malware"
 ]
},
"zbtimplants": {
 "status": "new",
 "cvss": 9.3,
 "admiralty": "A1",
 "conf": "Vendor research — implants confirmed present in firmware; exploitation status disputed between catalogs",
 "confNote": "VulnCheck lists CVE-2026-74233 in its own KEV catalog on in-the-wild criteria, while CISA's Vulnrichment rates exploitation as proof-of-concept as of Aug 27 and none of the three ZBT CVEs are in CISA KEV as of catalog version 2026.08.27. The 392 beaconing devices are a floor from an unrepresentative subset, and 203 is a probe-response count, not a compromise count.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "Communications",
  "Information Technology",
  "Commercial Facilities",
  "All Sectors"
 ],
 "attack": [
  "T1200 Hardware Additions",
  "T1195.003 Supply Chain Compromise: Compromise Hardware Supply Chain",
  "T1059 Command and Scripting Interpreter",
  "T1071 Application Layer Protocol",
  "T1572 Protocol Tunneling",
  "T1557 Adversary-in-the-Middle",
  "T1584.008 Compromise Infrastructure: Network Devices",
  "T1552 Unsecured Credentials"
 ]
},
"servicenow18885": {
 "status": "new",
 "cvss": 10,
 "admiralty": "B2",
 "conf": "Vendor advisory — no exploitation reported",
 "confNote": "Three of the four flaws carry CVSS 10.0; published detail covers two of them. The unauthenticated reachability is qualified by ServiceNow as applying in certain circumstances, which the advisory does not enumerate.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "Information Technology",
  "Government Facilities",
  "Financial Services",
  "All Sectors"
 ],
 "attack": [
  "T1190 Exploit Public-Facing Application",
  "T1059 Command and Scripting Interpreter",
  "T1068 Exploitation for Privilege Escalation",
  "T1213 Data from Information Repositories"
 ]
},
"cpanel65643": {
 "status": "new",
 "cvss": 0,
 "admiralty": "B2",
 "conf": "Vendor advisory — no exploitation reported",
 "confNote": "No CVSS score was published in the reviewed sources, so the CVE row carries none. Exploitation requires an authenticated account with parked or addon domain permissions; cPanel has not described any observed activity.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "Information Technology",
  "Commercial Facilities",
  "All Sectors"
 ],
 "attack": [
  "T1078 Valid Accounts",
  "T1068 Exploitation for Privilege Escalation",
  "T1505.003 Server Software Component: Web Shell",
  "T1546 Event Triggered Execution"
 ]
},
"geoserver": {
 "status": "new",
 "cvss": 9.8,
 "admiralty": "A2",
 "conf": "Exploitation attempts confirmed by research telemetry — no confirmed compromise",
 "confNote": "watchTowr observed probing that triggered errors without proceeding further; no post-compromise activity was confirmed. No CVE identifier has been assigned and the CVSS 9.8 is the GHSA rating. Reporting differs on which data stores enable the RCE path — sa on SQL Server is the researcher's own example, with PostGIS and Oracle JDBC named elsewhere.",
 "iocDate": "Aug 28, 2026",
 "sectors": [
  "Government Facilities",
  "Defense Industrial Base",
  "Information Technology",
  "Transportation Systems"
 ],
 "attack": [
  "T1190 Exploit Public-Facing Application",
  "T1505 Server Software Component",
  "T1059 Command and Scripting Interpreter",
  "T1496 Resource Hijacking"
 ]
},
 "uat10147": {
  "status": "new",
  "cvss": 0,
  "admiralty": "A1",
  "conf": "Vendor research — Talos moderate-to-high confidence on the AI assessment",
  "confNote": "The AI-orchestration assessment is Talos's own, stated at moderate-to-high confidence. Victim counts are inferred from actor infrastructure, not confirmed compromises.",
  "iocDate": "Aug 28, 2026",
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Commercial Facilities",
   "Communications"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1505.003 Server Software Component: Web Shell",
   "T1068 Exploitation for Privilege Escalation",
   "T1562.001 Impair Defenses: Disable or Modify Tools",
   "T1014 Rootkit",
   "T1071 Application Layer Protocol",
   "T1053.005 Scheduled Task",
   "T1136.001 Create Account: Local Account"
  ]
 },
 "sp63520": {
  "status": "new",
  "cvss": 0,
  "admiralty": "A2",
  "conf": "Probing confirmed by honeypot telemetry — no confirmed code execution",
  "confNote": "Defused reports the chain probed with no code execution observed. CVSS scores for CVE-2026-63520 were not published in the reviewed sources; CVE-2026-55040 is CISA KEV as of Aug 18.",
  "iocDate": "Aug 27, 2026",
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Commercial Facilities"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1078 Valid Accounts",
   "T1550.001 Use Alternate Authentication Material: Application Access Token",
   "T1505.003 Server Software Component: Web Shell"
  ]
 },
 "kevaug27": {
  "status": "new",
  "cvss": 9.8,
  "admiralty": "A1",
  "conf": "Confirmed exploitation — CISA KEV listing",
  "confNote": "CISA does not publish exploitation detail for these entries and the Linux kernel description is explicitly unspecified, but exploitation detail has since emerged from other sources: Hunt.io for the ownCloud entry and OpenAI for the Artifactory and Linux kernel entries.",
  "iocDate": "Aug 27, 2026",
  "sectors": [
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1068 Exploitation for Privilege Escalation",
   "T1078 Valid Accounts"
  ]
 },
 "unifi067": {
  "status": "new",
  "cvss": 9.9,
  "admiralty": "A2",
  "conf": "Vendor-confirmed vulnerabilities — no confirmed exploitation as of Aug 26 disclosure",
  "confNote": "Ubiquiti scored the three maximum-severity flaws 9.9; TechTimes reported 10.0. Score discrepancy noted rather than resolved.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Information Technology",
   "Commercial Facilities",
   "Communications"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1059 Command and Scripting Interpreter",
   "T1556 Modify Authentication Process"
  ]
 },
 "magairports": {
  "status": "new",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Confirmed breach — company statement; vector and actor undisclosed",
  "confNote": "MAG has not disclosed the intrusion vector or attributed the incident. Figures are the company's own.",
  "iocDate": "Aug 27, 2026",
  "sectors": [
   "Transportation Systems",
   "Commercial Facilities"
  ],
  "attack": [
   "T1078 Valid Accounts",
   "T1213 Data from Information Repositories",
   "T1566 Phishing"
  ]
 },
 "aithreatsignal": {
  "status": "new",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Vendor research and public statement — no exploitation claim",
  "confNote": "Unit 42's sample methodology is not detailed in the summary reporting; treat the 405/12 figures as reported rather than independently verified.",
  "iocDate": "Aug 28, 2026",
  "sectors": [
   "All Sectors"
  ],
  "attack": [
   "T1566 Phishing",
   "T1204 User Execution"
  ]
 },
 "bostonsci": {
  "status": "new",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Confirmed incident — company acknowledged disruption; scope and actor unconfirmed",
  "confNote": "No ransomware attribution published at time of writing. Treat actor speculation as unsupported.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Healthcare and Public Health",
   "Critical Manufacturing"
  ],
  "attack": [
   "T1486 Data Encrypted for Impact",
   "T1490 Inhibit System Recovery",
   "T1199 Trusted Relationship"
  ]
 },
 "gputhor": {
  "status": "new",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Research disclosure — no in-the-wild exploitation reported",
  "confNote": "Hardware attacks of this class rarely see opportunistic exploitation, but they are directly relevant to multi-tenant GPU platforms and to threat models that assume ECC as a control.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1068 Exploitation for Privilege Escalation",
   "T1499 Endpoint Denial of Service",
   "T1200 Hardware Additions"
  ]
 },
 "atfqilin": {
  "status": "new",
  "cvss": 0,
  "admiralty": "A2",
  "conf": "Confirmed by the affected agency — single system compromise acknowledged Aug 27, 2026",
  "confNote": "Full scope not established. Qilin's claims about data volume are unverified, as is typical for leak-site postings.",
  "iocDate": "Aug 27, 2026",
  "sectors": [
   "Government Facilities",
   "Critical Manufacturing",
   "Commercial Facilities"
  ],
  "attack": [
   "T1486 Data Encrypted for Impact",
   "T1657 Financial Theft",
   "T1567.002 Exfiltration to Cloud Storage",
   "T1078 Valid Accounts"
  ]
 },
 "avada": {
  "status": "new",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Reported — vulnerability chain disclosed publicly; no confirmed in-the-wild exploitation at time of writing",
  "confNote": "WordPress theme and plugin RCE chains historically see mass scanning within days of disclosure. Absence of confirmed exploitation should not delay patching.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Commercial Facilities"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1505.003 Server Software Component: Web Shell",
   "T1552.001 Unsecured Credentials: Credentials In Files"
  ]
 },
 "teampcp": {
  "status": "new",
  "cvss": 0,
  "admiralty": "A1",
  "conf": "Confirmed — charges filed and court appearance on the public record, Aug 27, 2026",
  "confNote": "Allegations are untested in court. The underlying March 2026 compromises and the FBI's July 2 advisory are separately confirmed.",
  "iocDate": "Aug 27, 2026",
  "sectors": [
   "Information Technology",
   "Financial Services"
  ],
  "attack": [
   "T1195.002 Supply Chain Compromise: Software Supply Chain",
   "T1552.001 Unsecured Credentials: Credentials In Files",
   "T1078.004 Valid Accounts: Cloud Accounts"
  ]
 },
 "manticore": {
  "status": "ongoing",
  "cvss": 0,
  "admiralty": "B2",
  "conf": "Confirmed actor activity — Group-IB analysis; attribution to IRGC affiliation is the vendor's assessment",
  "confNote": "Aliases are consolidated from vendor naming; treat cross-vendor cluster equivalence as high-confidence but not certain.",
  "iocDate": "Aug 2026",
  "sectors": [
   "Defense Industrial Base",
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1566.003 Phishing: Spearphishing via Service",
   "T1204.002 User Execution: Malicious File",
   "T1585.001 Establish Accounts: Social Media Accounts",
   "T1071.001 Application Layer Protocol: Web Protocols"
  ]
 },
 "netscaler": {
  "status": "new",
  "cvss": 8.8,
  "admiralty": "B2",
  "conf": "Confirmed — CISA KEV addition Aug 26, 2026; independent exploitation report from Previdian the same morning",
  "confNote": "Citrix's advisory had not been updated to confirm in-the-wild exploitation as of Aug 27. Canadian Centre for Cyber Security reported indications of exploitation on Aug 17 following watchTowr's PoC publication.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Government Facilities",
   "Financial Services",
   "Healthcare and Public Health",
   "Information Technology"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1505.003 Server Software Component: Web Shell",
   "T1082 System Information Discovery",
   "T1552 Unsecured Credentials"
  ]
 },
 "kevlegacy": {
  "status": "new",
  "cvss": 0,
  "admiralty": "A1",
  "conf": "Confirmed — CISA KEV catalog addition, Aug 26, 2026",
  "confNote": "CISA does not publish the exploitation evidence behind individual KEV additions. Forensic triage requirements vary per entry under BOD 26-04.",
  "iocDate": "Aug 26, 2026",
  "sectors": [
   "Government Facilities",
   "Information Technology",
   "Critical Manufacturing"
  ],
  "attack": [
   "T1068 Exploitation for Privilege Escalation",
   "T1190 Exploit Public-Facing Application",
   "T1203 Exploitation for Client Execution"
  ]
 },
 "patchtugsaug": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — Lazarus Group (Check Point Research, July 28 responsible disclosure); CISA KEV deadline Aug 25 PASSED; active espionage campaign against defense/aerospace since July 2026",
  "confNote": "Check Point Research confirmed Lazarus attribution and responsible disclosure Jul 28; Microsoft patched Aug 11; CISA KEV Aug 11 with Aug 25 deadline (passed). FudModule compiled July 7. Campaign ongoing — patch status does not eliminate post-compromise risk for orgs that were exposed during the 5-week zero-day window.",
  "iocDate": "July 2026 — campaign active; IOCs published Check Point Research Aug 11 + Rewterz Aug 12",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 7,
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Critical Manufacturing"
  ],
  "attack": [
   "T1566.002 — Phishing: Spearphishing Link",
   "T1204.002 — User Execution: Malicious File",
   "T1574.002 — Hijack Execution Flow: DLL Side-Loading",
   "T1059 — Command and Scripting Interpreter",
   "T1071.001 — Application Layer Protocol: Web Protocols (Graph API C2)",
   "T1068 — Exploitation for Privilege Escalation (CVE-2026-68820)",
   "T1014 — Rootkit (FudModule v3.1)",
   "T1562.001 — Impair Defenses: Disable or Modify Tools",
   "T1055 — Process Injection (SYSTEM process injection)",
   "T1071.002 — Application Layer Protocol: File Transfer Protocols"
  ]
 },
 "vcenter": {
  "status": "ongoing",
  "conf": "Confirmed — active exploitation documented by QUIRSO DFIR during incident response engagement",
  "confNote": "APT attribution assessed by QUIRSO; 361 victim IPs tracked; QUIRSO published Aug 10",
  "iocDate": "Aug 3, 2026 — first compromise observed; campaign ongoing",
  "admiralty": "B2",
  "severity": 5,
  "cvss": 9.8,
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1133 — External Remote Services",
   "T1053 — Scheduled Task/Job"
  ],
  "sectors": [
   "All Sectors"
  ]
 },
 "ptcwindchill": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — Cl0p campaign active, Shell and Philips confirmed investigating, 43 victims claimed",
  "confNote": "Shell and Philips confirmed investigating; data theft claims unverified by independent parties but consistent with Cl0p tactics and KEV-listed CVE",
  "iocDate": "Aug 12-14, 2026 — active campaign; victim count growing",
  "admiralty": "B2",
  "severity": 5,
  "cvss": 9.3,
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1567 — Exfiltration Over Web Service",
   "T1657 — Financial Theft"
  ],
  "sectors": [
   "Critical Manufacturing",
   "Energy",
   "Healthcare and Public Health"
  ]
 },
 "macosscreen": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — NCSC-NL confirmed active exploitation on multiple internet-exposed systems; CISA added CVE-2026-65400 to KEV; root access and Monero miner in every confirmed case",
  "confNote": "NCSC-NL confirmed exploitation Aug 12; CISA added to KEV catalog (confirmed Aug 22); CISA rescored from 7.1 to 9.8 Aug 14. Discovered by Alfredo Pesoli of Bynario Atlas.",
  "iocDate": "Aug 12, 2026 — NCSC-NL confirmed exploitation; no IoCs published",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 9.8,
  "sectors": [
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1496 — Resource Hijacking",
   "T1543.004 — Create or Modify System Process: Launch Daemon"
  ]
 },
 "shieldbreak": {
  "status": "ongoing",
  "conf": "Confirmed vulnerability — Microsoft confirmed CVE-2026-69414 and is developing a patch; PoC public; CISA BOD 26-04 requires FCEB agencies to deploy compensating controls within 14 days; no confirmed in-wild exploitation in CISA KEV",
  "confNote": "Microsoft assigned CVE-2026-69414 Aug 14; PoC public Aug 12 (Nightmare Eclipse); Kevin Beaumont KQL detection published; CISA BOD 26-04 applies — 14-day compensating control requirement for federal agencies; no in-wild exploitation confirmed in CISA KEV catalog as of Aug 21",
  "iocDate": "n/a — local exploit, no network indicators",
  "admiralty": "A2",
  "severity": 5,
  "cvss": null,
  "sectors": [
   "All Sectors"
  ],
  "attack": [
   "T1068 — Exploitation for Privilege Escalation",
   "T1543 — Create or Modify System Process"
  ]
 },
 "azureentra": {
  "status": "ongoing",
  "conf": "Unverified — TheHatman claims authentic; Hudson Rock assesses data likely authentic based on structure; no victim organization has confirmed a breach. TCS explicitly states the referenced data appears to be more than four years old.",
  "confNote": "Hudson Rock published primary technical analysis Aug 16; InfoStealers corroborated. Scrutex published detailed Graph API enumeration detection guidance. No breach confirmed by any named organization. Attack vector inconclusive — analyst assessment points to Graph API enumeration via session token replay.",
  "iocDate": "Aug 1–10, 2026 — BreachForums listing dates; data collection date unknown",
  "admiralty": "B3",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "Commercial Facilities",
   "Financial Services"
  ],
  "attack": [
   "T1078 — Valid Accounts",
   "T1530 — Data from Cloud Storage",
   "T1069 — Permission Groups Discovery",
   "T1087 — Account Discovery",
   "T1566.003 — Phishing: Spearphishing via Service (PhaaS)",
   "T1111 — Multi-Factor Authentication Interception"
  ]
 },
 "gitlab": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — SecurityWeek confirmed exploitation shortly after Aug 17 disclosure; WatchTowr confirmed easy reproduction on Aug 18",
  "confNote": "SecurityWeek confirmed exploitation; WatchTowr Aug 18 advisory; GitLab emergency OOB release Aug 17; discovered by hiimguardian via HackerOne. Third GitLab GraphQL vuln in 2026.",
  "iocDate": "Aug 17, 2026 — exploitation began shortly after disclosure; no IoCs published",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 9.4,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1485 — Data Destruction",
   "T1565 — Data Manipulation"
  ]
 },
 "zimbra": {
  "status": "updated",
  "conf": "Confirmed exploitation — CERT Polska confirmed active exploitation Aug 20; Synacor patched in ZCS 10.1.20; 270+ instances confirmed compromised as of Aug 25 (IT Security Newsletter / Bleeping); Shadowserver tracks 12,100+ exposed servers",
  "confNote": "CERT Polska bulletin Aug 20; 270+ confirmed compromised as of Aug 25, 2026; BleepingComputer Aug 25 update; Shadowserver 12K+ exposed",
  "iocDate": "Aug 20, 2026 — CERT Polska confirmed exploitation date; Zimbra patched July 20",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 8.9,
  "sectors": [
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1505.003 — Server Software Component: Web Shell",
   "T1059 — Command and Scripting Interpreter"
  ]
 },
 "trueconf": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — Kaspersky ICS CERT confirmed active exploitation July 2026; CISA added both CVEs to KEV Aug 21; CISA BOD 26-04 remediation deadline Aug 24 has now passed",
  "confNote": "Kaspersky ICS CERT Aug 12; CISA KEV added Aug 21; federal deadline Aug 24 PASSED; CVE-2026-72530 deadline Sep 4 still active; Head Mare attribution confirmed",
  "iocDate": "July 2026 — active exploitation observed; IoCs published in Kaspersky ICS CERT advisory Aug 12",
  "admiralty": "A2",
  "severity": 5,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Energy",
   "Critical Manufacturing"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1195.002 — Supply Chain Compromise: Compromise Software Supply Chain",
   "T1543.003 — Create or Modify System Process: Windows Service",
   "T1071 — Application Layer Protocol (OneDrive C2)"
  ]
 },
 "elementorpro": {
  "status": "ongoing",
  "conf": "Disclosed — Patchstack coordinated disclosure Aug 22; no confirmed in-wild exploitation at time of writing",
  "confNote": "Patchstack disclosed CVE-2026-32475 Aug 22; The Hacker News corroborated; vendor patch available; no exploitation in wild confirmed. CVSS 9.0.",
  "iocDate": "Aug 22, 2026 — disclosure date; no exploitation IoCs",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 9,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1505.003 — Server Software Component: Web Shell"
  ]
 },
 "rustsupplychain": {
  "status": "ongoing",
  "conf": "Confirmed — The Rust Project deleted malicious versions from crates.io; attack attributed to DPRK by SecurityWeek and it-learn.io; arrayref (245M+ downloads) confirmed affected",
  "confNote": "THN confirmed Rust Project deleted malicious crate versions; SecurityWeek attributed to North Korean actors; it-learn.io corroborated Aug 20; maintainer account compromise confirmed",
  "iocDate": "Aug 19-20, 2026 — malicious versions published; deleted by Rust Project Aug 20",
  "admiralty": "A2",
  "severity": 5,
  "cvss": null,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1195.001 — Supply Chain Compromise: Compromise Software Dependencies",
   "T1552 — Unsecured Credentials",
   "T1078 — Valid Accounts"
  ]
 },
 "oracleweblogic": {
  "status": "new",
  "conf": "Confirmed exploitation — CISA added to KEV Aug 24, 2026 based on evidence of active exploitation; SOCRadar confirmed China-nexus APT exploitation July 2026 targeting government infrastructure; CloudSEK honeypot confirmed automated scanning since January 2026",
  "confNote": "CISA KEV added Aug 24; federal deadline Aug 27; Oracle patched January 2026 CPU; China-linked APT confirmed by SOCRadar July 2026; CloudSEK honeypot confirmed chained exploitation with older WebLogic CVEs",
  "iocDate": "January 2026 — exploitation began; CISA KEV added Aug 24, 2026",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 10,
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Financial Services",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1083 — File and Directory Discovery",
   "T1005 — Data from Local System"
  ]
 },
 "mirage2fa": {
  "status": "new",
  "conf": "Confirmed active campaign — ANY.RUN confirmed 4,532 compromised org domains and 9,426+ targeted email addresses; campaign active September 2024–2026; linxcoders PhaaS kit confirmed by ANY.RUN telemetry",
  "confNote": "ANY.RUN research Aug 2026; THN corroborated Aug 25; 48% compromise rate confirmed; 63.7% US-based victims; Technology/Manufacturing/Education most targeted; linxcoders identified as operators",
  "iocDate": "September 2024 – July 2026 — sustained campaign; ANY.RUN research published Aug 2026",
  "admiralty": "A2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "Critical Manufacturing",
   "All Sectors"
  ],
  "attack": [
   "T1557 — Adversary-in-the-Middle",
   "T1539 — Steal Web Session Cookie",
   "T1566.002 — Phishing: Spearphishing Link",
   "T1078 — Valid Accounts"
  ]
 },
 "miniorange": {
  "status": "new",
  "conf": "Confirmed exploitation attempts — DigitalOcean detected and blocked active admin session attempt Aug 16; Patchstack reproduced both CVEs Aug 17; public PoC available as of Aug 25; BleepingComputer confirmed active exploitation attempts",
  "confNote": "DigitalOcean confirmed detection Aug 16; Patchstack coordination Aug 17-21; THN and BleepingComputer confirmed exploitation attempts Aug 25; CVE-2026-15981 CVSS 9.8; public PoC available",
  "iocDate": "Aug 16, 2026 — first exploitation attempt detected; PoC public Aug 25",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 9.8,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1078 — Valid Accounts",
   "T1548 — Abuse Elevation Control Mechanism"
  ]
 },
 "gitea2": {
  "status": "new",
  "conf": "Confirmed exploitation — CISA KEV Aug 25; incident report (Habr) confirms automated scanner deployed crypto-miner dropper; PoC public (0xBlackash/CVE-2026-60004)",
  "confNote": "CISA KEV Aug 25; federal deadline Aug 28; no attributed actor; automated scanner exploitation confirmed; PoC public on GitHub",
  "iocDate": "Aug 25, 2026 — CISA KEV; patch available since late July 2026",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 9.8,
  "sectors": [
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1059 — Command and Scripting Interpreter",
   "T1543 — Create or Modify System Process"
  ]
 },
 "mlflow": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — CISA added to KEV Aug 19, 2026; active exploitation against AI/ML infrastructure confirmed",
  "confNote": "CISA KEV added Aug 19; federal deadline Sep 2; SSRF → IMDS IAM credential theft confirmed; AI/ML platform targeting",
  "iocDate": "Aug 19, 2026 — CISA KEV addition",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 9.3,
  "sectors": [
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1552.005 — Credentials from Cloud Instance Metadata API",
   "T1078.004 — Valid Accounts: Cloud Accounts"
  ]
 },
 "qtfy": {
  "status": "new",
  "conf": "Confirmed — DOJ/FBI court-authorized domain seizure Aug 26, 2026; Lumen Black Lotus Labs 18-month infrastructure tracking corroborated; court documents unsealed SDCA confirming QTFY employed by Nanjing Xinjiuwei Network Technology Company",
  "confNote": "DOJ press release Aug 26; unsealed court docs SDCA; confirmed victims NASA, Fed, DOJ, DOE, HHS, NIH, Senate; QTFY sold services to China MSS and PLA per DOJ; Lumen Black Lotus Labs corroborated attribution",
  "iocDate": "May 2018 — campaign start; Aug 26, 2026 — DOJ/FBI seizure",
  "admiralty": "A1",
  "severity": 5,
  "cvss": null,
  "sectors": [
   "Government Facilities",
   "Financial Services",
   "Information Technology"
  ],
  "attack": [
   "T1595 — Active Scanning (QScan)",
   "T1584.005 — Compromise Infrastructure: Botnet",
   "T1090.003 — Proxy: Multi-hop Proxy",
   "T1078 — Valid Accounts",
   "T1041 — Exfiltration Over C2 Channel"
  ]
 }
}
};
