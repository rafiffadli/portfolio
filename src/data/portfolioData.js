export const personalInfo = {
  name: "Rafif Fadli",
  title: "IT Security & Risk Specialist | Token burner",
  headline: "Rafif Fadli | IT Security & Risk Specialist | Vibe Coder For Fun",
  location: "Federal Territory of Kuala Lumpur, Malaysia",
  email: "rafiffadlimtt@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafiffadli",
  linkedinUsername: "rafiffadli",
  github: "https://github.com/rafiffadli",
  status: "Active • Open to Strategic Opportunities",
  bio: "Cybersecurity and Network Engineering specialist with extensive experience across enterprise network operations, threat intelligence reporting, vulnerability trend analysis (CVE), multi-vendor infrastructure hardening (Aruba, Ruckus, Meraki), and IT risk governance.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Key Certifications", value: "5" },
    { label: "Infrastructure Hardened", value: "100+ APs & Gateways" }
  ]
};

export const skillsData = {
  core: [
    { name: "Risk Management", level: 95, category: "Security & Risk", icon: "ShieldAlert" },
    { name: "Management Information Systems (MIS)", level: 90, category: "Governance", icon: "Layers" },
    { name: "Threat Intelligence Analysis", level: 88, category: "Security & Risk", icon: "Eye" },
    { name: "Vulnerability Assessment (CVE)", level: 92, category: "Security & Risk", icon: "Bug" },
    { name: "Attack Surface Monitoring", level: 85, category: "Security & Risk", icon: "Radar" },
    { name: "Incident Response & Remediation", level: 88, category: "Operations", icon: "Activity" },
  ],
  networking: [
    { name: "VLAN & Subnet Architecture", level: 95, icon: "Network" },
    { name: "Bandwidth & QoS Management", level: 92, icon: "Sliders" },
    { name: "Aruba & Ruckus Controller Management", level: 90, icon: "Radio" },
    { name: "SmartZone, ZoneDirector & Unleashed", level: 88, icon: "Cpu" },
    { name: "Routing Protocols & Switching (CCNA)", level: 92, icon: "GitCommit" },
    { name: "Enterprise Wireless / SSID Provisioning", level: 94, icon: "Wifi" },
  ],
  tools: [
    { name: "CrowdStrike Falcon", level: 90, tag: "Endpoint & EDR", icon: "Shield" },
    { name: "SecurityScoreCard", level: 88, tag: "Third-Party Risk", icon: "Lock" },
    { name: "Power BI", level: 92, tag: "Security Analytics", icon: "BarChart3" },
    { name: "Meraki Dashboard", level: 90, tag: "Cloud Networking", icon: "Cloud" },
    { name: "SolarWinds & SevOne", level: 85, tag: "NOC Monitoring", icon: "LineChart" },
    { name: "EnGenius Cloud", level: 90, tag: "Network Management", icon: "Server" },
    { name: "Avast Security Suite", level: 85, tag: "Protection", icon: "CheckCircle2" },
    { name: "Wireshark & Packet Analysis", level: 88, tag: "Diagnostics", icon: "Search" }
  ],
  frameworks: [
    { name: "ITIL Foundation (v5)", desc: "IT Service Management & Operational Delivery" },
    { name: "NIST Cybersecurity Framework", desc: "Identify, Protect, Detect, Respond, Recover" },
    { name: "Common Vulnerabilities & Exposures (CVE)", desc: "Taxonomy & Threat Surface Modeling" },
    { name: "ISO / IEC Risk Management", desc: "Governance, Risk Assessment & Mitigation" }
  ]
};

export const experiences = [
  {
    role: "Information Technology Security & Risk Specialist",
    company: "Revenue Monster",
    companyType: "Fintech / Payment Ecosystem",
    period: "January 2026 - Present",
    duration: "Current Role",
    location: "Petaling Jaya, Selangor, Malaysia",
    highlights: [
      "Overseeing IT security posture, risk governance, and regulatory compliance across payment processing and fintech architectures.",
      "Conducting continuous risk evaluations, mitigating systemic vulnerabilities, and fortifying tokenization and authentication protocols.",
      "Collaborating with engineering leads to implement zero-trust security controls and proactive defense mechanisms."
    ],
    tags: ["Risk Governance", "IT Security", "Tokenization", "Fintech Defense", "Compliance"],
    current: true
  },
  {
    role: "Network Operations Center (NOC) Engineer",
    company: "LinkBroad Technology",
    companyType: "Enterprise Hospitality Networks",
    period: "January 2025 - December 2025",
    duration: "1 year",
    location: "Federal Territory of Kuala Lumpur, Malaysia",
    highlights: [
      "Proactively monitored and optimized enterprise-tier hotel networks for premier hospitality giants including Hyatt, Shangri-La, and Marriott, ensuring 99.9% uptime, seamless guest connectivity, and low-latency performance.",
      "Diagnosed and resolved mission-critical network anomalies: high-density SSID provisioning, dynamic bandwidth shaping, inter-VLAN routing, and hardware bottleneck triage.",
      "Administered multi-vendor infrastructure spanning Aruba and Ruckus Access Points, core switches, and enterprise controllers (SmartZone, ZoneDirector, Unleashed) for resilient wireless distribution.",
      "Led cross-functional network upgrades and firmware hardening to elevate baseline security posture and prevent unauthorized lateral movement."
    ],
    tags: ["NOC Operations", "Aruba", "Ruckus SmartZone", "Hospitality Networks", "VLAN Routing", "99.9% SLA"]
  },
  {
    role: "Network Engineer",
    company: "MSE Dotnet Sdn Bhd",
    companyType: "Network & IT Managed Services",
    period: "June 2024 - December 2024",
    duration: "7 months",
    location: "Federal Territory of Kuala Lumpur, Malaysia",
    highlights: [
      "Engineered and maintained corporate network infrastructure ensuring rock-solid connectivity and end-to-end encryption for multi-site clients.",
      "Managed telemetry and performance metrics utilizing Cisco Meraki Dashboard, Aruba Central, EnGenius Cloud, SolarWinds Orion, and SevOne.",
      "Resolved complex high-severity incidents including total line downs, intermittent routing flapping, packet loss, and firewall configuration faults.",
      "Supplied technical architecture and field tier-3 support for enterprise firewalls, managed switches, routers, and gateway appliances."
    ],
    tags: ["Meraki Dashboard", "SolarWinds", "SevOne", "EnGenius Cloud", "Firewall Hardening", "Switching & Routing"]
  },
  {
    role: "Cybersecurity Internship Trainee",
    company: "CyberSecurity Malaysia",
    companyType: "National Cybersecurity Specialist Agency",
    period: "January 2024 - May 2024",
    duration: "5 months",
    location: "Cyberjaya, Selangor, Malaysia",
    highlights: [
      "Assisted in comprehensive attack surface evaluation and vulnerability reporting utilizing enterprise platforms including CrowdStrike Falcon and SecurityScoreCard.",
      "Parsed, cleaned, and synthesized tens of thousands of security event telemetry records with Power BI to discover emerging CVE attack vectors and threat actor tendencies.",
      "Authored actionable security threat intelligence briefs and remediation recommendations for national security stakeholders."
    ],
    tags: ["CrowdStrike Falcon", "SecurityScoreCard", "Power BI Analytics", "CVE Taxonomy", "National Cyber Defense"]
  },
  {
    role: "Dropship Operations & Digital Commerce",
    company: "Bulan Bintang Clothing Sdn Bhd",
    companyType: "E-Commerce / Apparel",
    period: "November 2022 - April 2023",
    duration: "6 months",
    location: "Kuala Lumpur, Malaysia",
    highlights: [
      "Managed agile digital sales channels, fulfillment verification, high-volume inventory allocation, and customer engagement pipelines.",
      "Applied digital marketing, data-driven customer funnel optimization, and strict SLA fulfillment workflows."
    ],
    tags: ["Digital Commerce", "Operations", "Fulfillment", "Data Analytics"]
  },
  {
    role: "IT & Digital Operations Intern",
    company: "Universiti Poly-Tech Malaysia",
    companyType: "Higher Education Institution",
    period: "April 2021 - September 2021",
    duration: "6 months",
    location: "Kuala Lumpur, Malaysia",
    highlights: [
      "Delivered technical coordination, virtual conference infrastructure support, and brand presence optimization throughout remote-work pandemic operations.",
      "Utilized modern project management and collaboration tooling to coordinate cross-department initiatives."
    ],
    tags: ["Remote Infrastructure", "Collaboration Systems", "IT Support"]
  }
];

export const certifications = [
  {
    title: "Foundation Level Threat Intelligence Analyst",
    issuer: "Threat Intelligence Certification Board",
    code: "FL-TIA",
    badgeColor: "from-red-500 to-amber-500",
    icon: "ShieldAlert",
    description: "Cyber threat profiling, OSINT aggregation, MITRE ATT&CK mapping, adversary tactic analysis, and proactive intelligence reporting.",
    verified: true
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    code: "CISCO-CCNA-SRWE",
    badgeColor: "from-blue-500 to-cyan-500",
    icon: "Network",
    description: "VLANs, Inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, SLAAC, Wireless LAN Controllers (WLC), and security fundamentals.",
    verified: true
  },
  {
    title: "EnGenius Certified Network Professional (ECNP)",
    issuer: "EnGenius Networks",
    code: "ENG-ECNP",
    badgeColor: "from-emerald-500 to-teal-500",
    icon: "Award",
    description: "Advanced enterprise wireless network architecture, high-density RF planning, cloud switch aggregation, and site diagnostic forensics.",
    verified: true
  },
  {
    title: "EnGenius Certified Network Specialist (ECNS)",
    issuer: "EnGenius Networks",
    code: "ENG-ECNS",
    badgeColor: "from-teal-500 to-cyan-500",
    icon: "Wifi",
    description: "Core cloud-managed Wi-Fi 6 AP deployment, multi-tenant portal management, and real-time mesh link optimization.",
    verified: true
  },
  {
    title: "ITIL Foundation (Version 5)",
    issuer: "AXELOS / PeopleCert",
    code: "ITIL-v5",
    badgeColor: "from-purple-500 to-indigo-500",
    icon: "CheckCircle",
    description: "IT Service Management (ITSM), Service Value System (SVS), continual improvement lifecycle, incident and change enablement.",
    verified: true
  }
];

export const education = [
  {
    degree: "Bachelor of Information Technology (HONOURS) in Cyber Security",
    institution: "Universiti Poly-Tech Malaysia (UPTM)",
    period: "November 2021 - May 2024",
    status: "Graduated with Honours",
    focus: "Network Security, Cryptography, Penetration Testing, Risk Governance, Digital Forensics, Cloud Architecture & Secure Software Design.",
    highlights: [
      "Specialized in Offensive & Defensive Cyber Operations",
      "Conducted extensive research on automated vulnerability scoring & CVE data pipelines",
      "Active participant in collegiate cybersecurity CTF competitions and network labs"
    ]
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Universiti Poly-Tech Malaysia (UPTM)",
    period: "January 2019 - April 2021",
    status: "Graduated",
    focus: "Object-Oriented Programming, Data Structures & Algorithms, Computer Architecture, Database Management Systems (SQL), Operating Systems (Linux/Unix).",
    highlights: [
      "Solid computational foundation in algorithms and systems engineering",
      "Network administration and systems programming foundations"
    ]
  }
];

export const projects = [
  {
    title: "Cookie Scanner",
    slug: "cookiescanner",
    url: "https://cookiescanner.rafifmtt.my",
    domain: "cookiescanner.rafifmtt.my",
    category: "Security & Privacy Auditing",
    description: "An automated web security and privacy compliance scanner that inspects site cookies, evaluates tracking technologies, audits SameSite & HttpOnly flags, and analyzes privacy risk exposure.",
    highlights: [
      "Deep cookie telemetry & third-party tracking detection",
      "Security attribute inspection (Secure, HttpOnly, SameSite flags)",
      "Privacy compliance scoring and threat surface insights"
    ],
    tags: ["Security Auditing", "Privacy Compliance", "Cookie Telemetry", "Web Defense", "GDPR/ePrivacy"],
    icon: "ShieldAlert",
    badgeColor: "from-cyan-500 to-blue-500",
    status: "ONLINE"
  },
  {
    title: "Booking Demo",
    slug: "bookingdemo",
    url: "https://bookingdemo.rafifmtt.my",
    domain: "bookingdemo.rafifmtt.my",
    category: "Interactive Web Application",
    description: "A real-time appointment reservation and booking demonstration platform featuring synchronized scheduling, state validation, and streamlined client workflow architecture.",
    highlights: [
      "Real-time slot allocation & instant validation",
      "Dynamic interactive scheduling flow",
      "Modern responsive UI with optimized state management"
    ],
    tags: ["Web Architecture", "Real-Time Booking", "Interactive UI", "State Management", "Client Systems"],
    icon: "CalendarCheck",
    badgeColor: "from-blue-500 to-indigo-500",
    status: "ONLINE"
  }
];

