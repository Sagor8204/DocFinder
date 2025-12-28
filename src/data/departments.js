// src/data/departments.js

export const departments = [
  {
    slug: 'marketing-pr',
    name: 'Marketing & PR',
    heroBackground: '/images/department-hero-bg-marketing.jpg',
    introParagraphs: [
      "At DocFinder, our Marketing & PR team crafts compelling stories that connect our innovative healthcare solutions with the people who need them most.",
      "If you're passionate about making a real impact in the health tech space and enjoy creative problem-solving, join our dynamic team."
    ],
    rolesAndCulture: [
      { 
        title: "Brand Storytelling", 
        description: "Crafting narratives that resonate with our audience and reflect our mission.", 
        icon: "/images/icon-megaphone.svg" 
      },
      { 
        title: "Digital Marketing", 
        description: "Developing and executing digital campaigns across various platforms.", 
        icon: "/images/icon-laptop.svg" 
      },
      { 
        title: "Public Relations", 
        description: "Building relationships with media, influencers, and industry leaders.", 
        icon: "/images/icon-microphone.svg" 
      },
      { 
        title: "Content Creation", 
        description: "Producing engaging content that educates and inspires our community.", 
        icon: "/images/icon-pen.svg" 
      }
    ],
    teamGallery: {
      mainPhoto: '/images/marketing-team.jpg',
      quotes: [
        { 
          text: "The atmosphere is incredibly dynamic with constant learning opportunities and collaborative projects.", 
          attribution: "Naznin, PR Specialist" 
        },
        { 
          text: "I love how our work directly contributes to improving healthcare accessibility across the region.", 
          attribution: "Samir, Content Manager" 
        }
      ],
      officePhoto: '/images/marketing-office.jpg'
    },
    openPositions: [
      { id: 1, title: "CRO Specialist", location: "Dhaka, Bangladesh" },
      { id: 2, title: "Social Media Manager", location: "Remote" },
      { id: 3, title: "PR & Communications Lead", location: "Dhaka, Bangladesh" },
      { id: 4, title: "Content Marketing Associate", location: "Hybrid" }
    ]
  },
  {
    slug: 'it-product-data',
    name: 'IT, Product, Data',
    heroBackground: '/images/department-hero-bg-it.jpg',
    introParagraphs: [
      "Our IT, Product, and Data team are the architects of DocFinder's platform, building the technology that connects patients with healthcare providers.",
      "Join us to build cutting-edge solutions that make a real difference in healthcare accessibility and quality."
    ],
    rolesAndCulture: [
      { 
        title: "Software Development", 
        description: "Building robust backend APIs and scalable infrastructure for our platform.", 
        icon: "/images/icon-code.svg" 
      },
      { 
        title: "Product Design", 
        description: "Designing intuitive interfaces and user experiences for our platform.", 
        icon: "/images/icon-design.svg" 
      },
      { 
        title: "Data Science", 
        description: "Extracting insights from our data to improve our services and decision-making.", 
        icon: "/images/icon-chart.svg" 
      },
      { 
        title: "Quality Assurance", 
        description: "Ensuring our products meet the highest standards of quality and reliability.", 
        icon: "/images/icon-check.svg" 
      }
    ],
    teamGallery: {
      mainPhoto: '/images/it-team.jpg',
      quotes: [
        { 
          text: "I love solving complex technical problems that directly impact millions of users.", 
          attribution: "Rahim, Senior Engineer" 
        },
        { 
          text: "The team culture here encourages innovation and continuous learning in emerging technologies.", 
          attribution: "Fatima, Lead Developer" 
        }
      ],
      officePhoto: '/images/it-office.jpg'
    },
    openPositions: [
      { id: 10, title: "Backend Engineer", location: "Dhaka, Bangladesh" },
      { id: 11, title: "Frontend Developer", location: "Hybrid" },
      { id: 12, title: "DevOps Engineer", location: "Remote" },
      { id: 13, title: "Data Scientist", location: "Dhaka, Bangladesh" }
    ]
  },
  {
    slug: 'customer-success-sales',
    name: 'Customer Success & Sales',
    heroBackground: '/images/department-hero-bg-customer-success.jpg',
    introParagraphs: [
      "Our Customer Success & Sales team ensures our clients achieve their healthcare goals through our platform, while expanding our reach to new markets.",
      "We look for empathetic professionals who understand the importance of healthcare relationships and sustainable growth."
    ],
    rolesAndCulture: [
      { 
        title: "Client Support", 
        description: "Providing exceptional support to our healthcare partners and patients.", 
        icon: "/images/icon-support.svg" 
      },
      { 
        title: "Sales Strategy", 
        description: "Developing and executing sales plans to expand our market presence.", 
        icon: "/images/icon-dollar.svg" 
      },
      { 
        title: "Account Management", 
        description: "Nurturing long-term relationships with our valued clients.", 
        icon: "/images/icon-user-group.svg" 
      },
      { 
        title: "Business Development", 
        description: "Identifying new opportunities for partnerships and market expansion.", 
        icon: "/images/icon-trend-arrow.svg" 
      }
    ],
    teamGallery: {
      mainPhoto: '/images/customer-success-team.jpg',
      quotes: [
        { 
          text: "Every day I get to help improve patient outcomes while supporting healthcare providers.", 
          attribution: "Ahmed, Customer Success Manager" 
        },
        { 
          text: "The team here truly cares about the impact of our work on healthcare systems.", 
          attribution: "Tasnim, Sales Director" 
        }
      ],
      officePhoto: '/images/customer-success-office.jpg'
    },
    openPositions: [
      { id: 20, title: "Account Executive", location: "Dhaka, Bangladesh" },
      { id: 21, title: "Customer Success Manager", location: "Hybrid" },
      { id: 22, title: "Sales Operations Analyst", location: "Remote" }
    ]
  },
  {
    slug: 'finance-administration',
    name: 'Finance & Administration',
    heroBackground: '/images/department-hero-bg-finance.jpg',
    introParagraphs: [
      "Our Finance & Administration team ensures DocFinder operates efficiently, sustainably, and in compliance with all regulations.",
      "We seek detail-oriented professionals who understand the importance of financial stewardship in healthcare technology."
    ],
    rolesAndCulture: [
      { 
        title: "Financial Planning", 
        description: "Strategic planning and budgeting to support company growth.", 
        icon: "/images/icon-calculator.svg" 
      },
      { 
        title: "Compliance", 
        description: "Ensuring our financial operations meet all regulatory requirements.", 
        icon: "/images/icon-document.svg" 
      },
      { 
        title: "Administrative Operations", 
        description: "Managing internal processes to maintain operational excellence.", 
        icon: "/images/icon-gear.svg" 
      },
      { 
        title: "Audit & Reporting", 
        description: "Maintaining accurate records and preparing financial reports.", 
        icon: "/images/icon-report.svg" 
      }
    ],
    teamGallery: {
      mainPhoto: '/images/finance-team.jpg',
      quotes: [
        { 
          text: "Working in healthcare finance means knowing your work has a meaningful impact.", 
          attribution: "Kamal, Finance Director" 
        },
        { 
          text: "The administrative team creates a foundation that supports all other departments.", 
          attribution: "Maliha, Operations Manager" 
        }
      ],
      officePhoto: '/images/finance-office.jpg'
    },
    openPositions: [
      { id: 30, title: "Senior Accountant", location: "Dhaka, Bangladesh" },
      { id: 31, title: "Operations Manager", location: "Hybrid" },
      { id: 32, title: "Financial Analyst", location: "Remote" }
    ]
  },
  {
    slug: 'hr-more',
    name: 'HR & More',
    heroBackground: '/images/department-hero-bg-hr.jpg',
    introParagraphs: [
      "Our HR team builds and nurtures the culture that drives DocFinder's success, focusing on employee wellbeing and growth.",
      "We're looking for people passionate about fostering a workplace where diversity thrives and employees feel valued."
    ],
    rolesAndCulture: [
      { 
        title: "Talent Acquisition", 
        description: "Finding and recruiting top talent to join our growing team.", 
        icon: "/images/icon-user-add.svg" 
      },
      { 
        title: "Employee Relations", 
        description: "Fostering positive relationships and resolving workplace issues.", 
        icon: "/images/icon-heart.svg" 
      },
      { 
        title: "Training & Development", 
        description: "Providing learning opportunities for employee growth and advancement.", 
        icon: "/images/icon-cap.svg" 
      },
      { 
        title: "Culture Building", 
        description: "Creating initiatives that strengthen our core values and mission.", 
        icon: "/images/icon-star.svg" 
      }
    ],
    teamGallery: {
      mainPhoto: '/images/hr-team.jpg',
      quotes: [
        { 
          text: "I'm proud to work in an HR team that genuinely values employee wellbeing.", 
          attribution: "Anika, HR Specialist" 
        },
        { 
          text: "Our culture initiatives make DocFinder a place where people want to stay and grow.", 
          attribution: "Hassan, People Partner" 
        }
      ],
      officePhoto: '/images/hr-office.jpg'
    },
    openPositions: [
      { id: 40, title: "HR Generalist", location: "Dhaka, Bangladesh" },
      { id: 41, title: "Recruitment Specialist", location: "Hybrid" },
      { id: 42, title: "Learning & Development Manager", location: "Remote" }
    ]
  }
];

export const getDepartmentBySlug = (slug) => {
  return departments.find(dep => dep.slug === slug);
};