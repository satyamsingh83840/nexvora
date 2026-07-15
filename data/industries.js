const industries = [
  {
    id: 1,

    // NEW
    slug: "technology",
    icon: "Laptop",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    // KEEP (Don't change)
    title: "Technology",

    // KEEP (Don't change)
    description:
      "Advising startups, SaaS companies, AI businesses, and digital enterprises.",

    // NEW
    overview:
      "We advise technology companies on corporate structuring, intellectual property, commercial contracts, fundraising, software licensing, data privacy and regulatory compliance.",

    challenges: [
      "Software licensing",
      "Data privacy compliance",
      "IP protection",
      "Investment documentation",
      "Technology contracts",
    ],

    solutions: [
      "Corporate advisory",
      "Commercial agreements",
      "IP protection",
      "Regulatory compliance",
      "Technology transactions",
    ],

    related: [
      "corporate-commercial-law",
      "intellectual-property",
      "cyber-technology-law",
    ],
  },

  {
    id: 2,

    slug: "healthcare",
    icon: "HeartPulse",
    heroImage:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Healthcare",

    description:
      "Legal advisory for hospitals, clinics, pharmaceutical companies, and healthcare providers.",

    overview:
      "Comprehensive legal advisory for healthcare institutions, pharmaceutical companies and medical professionals.",

    challenges: [
      "Healthcare regulations",
      "Employment compliance",
      "Medical contracts",
      "Licensing",
    ],

    solutions: [
      "Regulatory advisory",
      "Employment law",
      "Commercial contracts",
      "Dispute resolution",
    ],

    related: [
      "employment-law",
      "corporate-commercial-law",
      "regulatory-compliance",
    ],
  },

  {
    id: 3,

    slug: "manufacturing",
    icon: "Factory",
    heroImage:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Manufacturing",

    description:
      "Supporting manufacturers with compliance, contracts, and commercial matters.",

    overview:
      "Legal support for manufacturers covering contracts, compliance, labour matters and commercial disputes.",

    challenges: [
      "Supply chain contracts",
      "Compliance",
      "Employment issues",
      "Commercial disputes",
    ],

    solutions: [
      "Contract drafting",
      "Compliance advisory",
      "Employment law",
      "Litigation support",
    ],

    related: [
      "corporate-commercial-law",
      "employment-law",
      "contract-drafting-negotiation",
    ],
  },

  {
    id: 4,

    slug: "infrastructure",
    icon: "Building2",
    heroImage:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Infrastructure",

    description:
      "Legal solutions for infrastructure projects, EPC contracts, and construction.",

    overview:
      "Strategic legal advisory for infrastructure and construction projects.",

    challenges: [
      "Project contracts",
      "Tender documentation",
      "Dispute resolution",
      "Regulatory approvals",
    ],

    solutions: [
      "EPC contracts",
      "Arbitration",
      "Project advisory",
      "Compliance",
    ],

    related: ["arbitration-mediation", "contract-drafting-negotiation"],
  },

  {
    id: 5,

    slug: "education",
    icon: "GraduationCap",
    heroImage:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Education",

    description:
      "Advising educational institutions on governance, compliance, and employment matters.",

    overview:
      "Legal services for schools, colleges, universities and educational institutions.",

    challenges: ["Institutional compliance", "Employment issues", "Contracts"],

    solutions: ["Governance", "Employment advisory", "Regulatory compliance"],

    related: ["employment-law", "regulatory-compliance"],
  },

  {
    id: 6,

    slug: "financial-services",
    icon: "Landmark",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Financial Services",

    description:
      "Supporting banks, NBFCs, fintech companies, and investment firms.",

    overview:
      "Legal advisory for banks, financial institutions, fintech companies and investors.",

    challenges: [
      "Regulatory compliance",
      "Financial disputes",
      "Commercial contracts",
    ],

    solutions: ["Banking advisory", "Corporate law", "Regulatory support"],

    related: ["banking-financial-recovery", "corporate-commercial-law"],
  },
];

export default industries;
