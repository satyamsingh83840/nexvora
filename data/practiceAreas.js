const practiceAreas = [
  {
    id: 1,
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    icon: "BriefcaseBusiness",

    // Used on homepage & listing
    description:
      "Strategic legal advisory for companies, founders, investors and commercial transactions.",

    // Used on detail page
    heroImage:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    overview:
      "We advise startups, SMEs, corporations and investors on incorporation, governance, mergers & acquisitions, shareholder arrangements, commercial contracts, restructuring and regulatory compliance. Our legal strategies are designed to support business growth while minimizing legal and commercial risks.",

    services: [
      "Business Incorporation",
      "Corporate Governance",
      "Commercial Contracts",
      "Shareholder Agreements",
      "Joint Ventures",
      "Mergers & Acquisitions",
      "Regulatory Compliance",
      "Legal Due Diligence",
    ],

    benefits: [
      "Business-focused legal strategies",
      "Risk mitigation",
      "Commercially practical advice",
      "Long-term legal partnership",
    ],

    faqs: [
      {
        question: "Do you advise startups?",
        answer:
          "Yes. We advise startups from incorporation through fundraising and scaling.",
      },
      {
        question: "Can you draft shareholder agreements?",
        answer:
          "Absolutely. We prepare and negotiate shareholder and founders' agreements.",
      },
    ],

    related: [
      "contract-drafting-negotiation",
      "regulatory-compliance",
      "startup-business-advisory",
    ],
  },

  {
    id: 2,
    slug: "civil-litigation",
    title: "Civil Litigation",
    icon: "Scale",

    description:
      "Representation in civil disputes with a practical, result-oriented litigation strategy.",

    heroImage:
      "https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxlZ2FsfGVufDB8fDB8fHww",

    overview:
      "We represent clients before courts and tribunals in civil disputes involving contracts, recovery, property, injunctions and commercial matters while protecting their legal and commercial interests.",

    services: [
      "Civil Suits",
      "Commercial Litigation",
      "Recovery Matters",
      "Property Disputes",
      "Injunctions",
      "Civil Appeals",
    ],

    benefits: [
      "Strategic litigation planning",
      "Strong courtroom advocacy",
      "Timely case management",
    ],

    faqs: [],

    related: ["arbitration-mediation", "consumer-protection"],
  },

  {
    id: 3,
    slug: "criminal-litigation",
    title: "Criminal Litigation",
    icon: "Shield",

    description:
      "Effective legal representation before criminal courts while safeguarding client rights.",

    heroImage:
      "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNyaW1pbmFsfGVufDB8fDB8fHww",

    overview:
      "We provide comprehensive legal representation in criminal proceedings including bail, trials, appeals and white-collar crime matters.",

    services: [
      "Bail Matters",
      "Criminal Trials",
      "Appeals",
      "Economic Offences",
      "White Collar Crime",
    ],

    benefits: [
      "Experienced courtroom advocacy",
      "Confidential representation",
      "Strategic legal defence",
    ],

    faqs: [],

    related: ["constitutional-writ-litigation"],
  },

  {
    id: 4,
    slug: "constitutional-writ-litigation",
    title: "Constitutional & Writ Litigation",
    icon: "Landmark",

    description:
      "Representation in constitutional matters and writ petitions before constitutional courts.",

    heroImage:
      "https://images.unsplash.com/photo-1760872646618-13594fc00567?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbnN0aXR1dGlvbiUyMGluZGlhfGVufDB8fDB8fHww",

    overview:
      "We represent clients in constitutional matters involving fundamental rights, judicial review and writ jurisdiction before High Courts and the Supreme Court.",

    services: [
      "Writ Petitions",
      "Fundamental Rights",
      "Judicial Review",
      "Public Law Matters",
    ],

    benefits: [
      "Constitutional expertise",
      "Strategic legal advocacy",
      "Rights protection",
    ],

    faqs: [],

    related: ["civil-litigation"],
  },

  {
    id: 5,
    slug: "arbitration-mediation",
    title: "Arbitration & Mediation",
    icon: "Handshake",

    description:
      "Efficient dispute resolution through arbitration and alternative dispute mechanisms.",

    heroImage:
      "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    overview:
      "We assist clients in domestic and international arbitration, mediation and conciliation proceedings, helping resolve disputes efficiently and confidentially.",

    services: [
      "Domestic Arbitration",
      "International Arbitration",
      "Mediation",
      "Conciliation",
      "Award Enforcement",
    ],

    benefits: [
      "Confidential proceedings",
      "Faster dispute resolution",
      "Cost-effective process",
    ],

    faqs: [],

    related: ["civil-litigation"],
  },

  {
    id: 6,
    slug: "family-matrimonial-law",
    title: "Family & Matrimonial Law",
    icon: "HeartHandshake",

    description:
      "Legal support in family disputes, matrimonial matters and succession planning.",

    heroImage:
      "https://images.unsplash.com/photo-1456465253023-bca23cf6d7c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpdm9yY2V8ZW58MHx8MHx8fDA%3D",

    overview:
      "We advise and represent clients in matrimonial disputes, child custody, maintenance, domestic violence matters and succession issues.",

    services: [
      "Divorce",
      "Child Custody",
      "Maintenance",
      "Domestic Violence",
      "Succession",
    ],

    benefits: [
      "Compassionate representation",
      "Confidential advice",
      "Practical resolutions",
    ],

    faqs: [],

    related: [],
  },

  {
    id: 7,
    slug: "intellectual-property",
    title: "Intellectual Property Rights",
    icon: "Copyright",

    description:
      "Trademark, copyright, patent and brand protection for modern businesses.",

    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW50ZWxsZWN0dWFsJTIwUHJvcGVydHl8ZW58MHx8MHx8fDA%3D",

    overview:
      "Protecting innovation, brands and creative works through registration, enforcement and IP advisory.",

    services: [
      "Trademark Registration",
      "Copyright",
      "Patent Advisory",
      "Brand Protection",
      "IP Licensing",
    ],

    benefits: [
      "Protect innovation",
      "Secure brand identity",
      "Prevent infringement",
    ],

    faqs: [],

    related: ["startup-business-advisory", "cyber-technology-law"],
  },

  {
    id: 8,
    slug: "employment-law",
    title: "Employment & Labour Law",
    icon: "Users",
    description:
      "Employment contracts, labour compliance and workplace dispute resolution.",
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    overview:
      "Comprehensive legal advice for employers and employees on labour laws, workplace policies and compliance.",
    services: [
      "Employment Agreements",
      "POSH Compliance",
      "HR Policies",
      "Termination Advisory",
      "Labour Disputes",
    ],
    benefits: [
      "Compliance support",
      "Reduced employment risks",
      "Practical HR guidance",
    ],
    faqs: [],
    related: [],
  },

  {
    id: 9,
    slug: "real-estate-property-law",
    title: "Real Estate & Property Law",
    icon: "House",
    description:
      "Legal advisory for real estate transactions, title verification and property disputes.",
    heroImage:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 10,
    slug: "banking-financial-recovery",
    title: "Banking & Financial Recovery",
    icon: "Landmark",
    description:
      "Advisory and representation in banking disputes, recovery and financial matters.",
    heroImage:
      "https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 11,
    slug: "consumer-protection",
    title: "Consumer Protection",
    icon: "BadgeCheck",
    description:
      "Representation before consumer commissions for consumers and businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1724907877526-6423d1e8dcac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VtZXJ8ZW58MHx8MHx8fDA%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 12,
    slug: "regulatory-compliance",
    title: "Regulatory Compliance",
    icon: "FileCheck",
    description:
      "Helping businesses comply with statutory and regulatory obligations.",
    heroImage:
      "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 13,
    slug: "startup-business-advisory",
    title: "Start-up & Business Advisory",
    icon: "Rocket",
    description:
      "Legal guidance for startups from incorporation to investment and scaling.",
    heroImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 14,
    slug: "contract-drafting-negotiation",
    title: "Contract Drafting & Negotiation",
    icon: "FileSignature",
    description:
      "Preparation, review and negotiation of commercial and business agreements.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 15,
    slug: "legal-due-diligence",
    title: "Legal Due Diligence",
    icon: "SearchCheck",
    description:
      "Comprehensive legal due diligence for investments, acquisitions and transactions.",
    heroImage:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVnYWwlMjBzZXJ2aWNlfGVufDB8fDB8fHww",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },

  {
    id: 16,
    slug: "cyber-technology-law",
    title: "Cyber & Technology Law",
    icon: "Laptop",
    description:
      "Legal advisory for technology businesses, data privacy and cybersecurity.",
    heroImage:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "",
    services: [],
    benefits: [],
    faqs: [],
    related: [],
  },
];

export default practiceAreas;
