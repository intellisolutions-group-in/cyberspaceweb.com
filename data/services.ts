export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  overview: string;
  idealFor: string;
  outcomes: string[];
  features: string[];
  technologies: string[];
  process: string[];
  related: string[];
};

const standardProcess = [
  "Discovery workshops to understand users, business goals, operational constraints, and technical dependencies.",
  "Solution architecture with clear milestones, risk mapping, sprint planning, and measurable acceptance criteria.",
  "Iterative design and engineering so stakeholders can review working progress instead of static assumptions.",
  "Security, performance, accessibility, and quality checks built into the delivery cycle from the first sprint.",
  "Production handover with documentation, deployment notes, monitoring guidance, and support recommendations.",
];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Apps",
    category: "Digital Platforms",
    summary:
      "Modern, fast, SEO-ready websites and web applications for Indian businesses that need reliable digital growth.",
    overview:
      "We build responsive corporate websites, business portals, product platforms, and application-style web experiences that are clear for customers and maintainable for internal teams. The focus is not only on visual polish, but also on speed, conversion, search visibility, security, and long-term maintainability.",
    idealFor:
      "Companies that need a stronger web presence, a high-converting service website, a customer portal, or a custom web platform connected to existing workflows.",
    outcomes: [
      "A production-ready web platform aligned with business goals",
      "Responsive layouts from 320px mobile screens to large desktop displays",
      "SEO foundations, structured content, and clean internal linking",
      "Maintainable code that can evolve with new services or campaigns",
      "Performance-focused frontend and practical backend integration",
      "Clear documentation for content updates and future enhancements",
    ],
    features: [
      "Corporate websites and landing pages",
      "Business dashboards and portals",
      "Static export and server-rendered architecture",
      "CMS-ready content structures",
      "Lead forms with local validation",
      "Accessibility and Core Web Vitals optimisation",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Headless CMS"],
    process: standardProcess,
    related: ["custom-software-development", "progressive-web-apps", "cms-development"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    category: "Application Engineering",
    summary:
      "Android and iOS applications designed for smooth customer journeys, stable releases, and practical scale.",
    overview:
      "Mobile users expect speed, clarity, offline resilience, and frictionless interactions. We plan, design, and build mobile apps with a product mindset so the application supports the complete journey from onboarding and usage to updates, analytics, and long-term support.",
    idealFor:
      "Founders, service providers, and enterprises that need customer-facing apps, internal mobile tools, field-force apps, booking systems, or commerce-led mobile experiences.",
    outcomes: [
      "A mobile experience designed around real user behaviour",
      "Practical release planning for Android and iOS stores",
      "Stable API integration with existing business systems",
      "Secure handling of user flows, files, and notifications",
      "Scalable architecture for future modules",
      "Support-ready documentation for updates and maintenance",
    ],
    features: [
      "Native-style app interfaces",
      "Authentication-ready app flows when required",
      "Push notification planning",
      "Offline-first data handling where useful",
      "App store release support",
      "Analytics and crash-monitoring readiness",
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "REST APIs", "GraphQL", "SQLite"],
    process: standardProcess,
    related: ["cross-platform-development", "api-development", "software-testing"],
  },
  {
    slug: "windows-application-development",
    title: "Windows Application Development",
    shortTitle: "Windows Apps",
    category: "Desktop Software",
    summary:
      "Custom Windows applications for business workflows, local device integration, and secure desktop operations.",
    overview:
      "Many Indian businesses still depend on desktop workflows for operations, finance, production, inventory, or specialised equipment. We design Windows applications that respect those realities while improving usability, reporting, security, and integration with modern systems.",
    idealFor:
      "Organisations that need offline-capable desktop tools, device-connected applications, data-entry systems, or modern replacements for ageing Windows software.",
    outcomes: [
      "A stable desktop application designed for daily operational use",
      "Support for local files, printers, scanners, or device workflows",
      "Structured data handling and controlled user permissions",
      "Cleaner interfaces for high-frequency business tasks",
      "Migration support from older tools or spreadsheets",
      "Installer and update planning for managed rollouts",
    ],
    features: [
      "Windows desktop interfaces",
      "Local database support",
      "Peripheral and device integration",
      "Role-based workflows",
      "Report generation",
      "Offline-first operations",
    ],
    technologies: [".NET", "C#", "WPF", "WinUI", "SQLite", "SQL Server", "REST APIs"],
    process: standardProcess,
    related: ["desktop-applications", "software-modernization", "database-development"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "Business Systems",
    summary:
      "Purpose-built software for business processes that cannot be solved well with generic tools.",
    overview:
      "Custom software is most valuable when it removes repeated manual work, connects scattered processes, and gives leadership clearer data. We translate business workflows into practical software modules that are easy to use, secure, and ready to grow with the organisation.",
    idealFor:
      "Businesses that need workflow automation, internal portals, approval systems, reporting tools, vendor systems, customer portals, or operational software tailored to their process.",
    outcomes: [
      "Software mapped to actual business operations",
      "Reduced manual handoffs and duplicate data entry",
      "Better visibility through dashboards and reports",
      "Structured permissions for teams and departments",
      "Integration with existing tools where practical",
      "A roadmap for phased rollout and future modules",
    ],
    features: [
      "Workflow automation",
      "Admin dashboards",
      "Role-based access planning",
      "Document and report flows",
      "Third-party integrations",
      "Phased module development",
    ],
    technologies: ["Next.js", "Node.js", ".NET", "PostgreSQL", "MySQL", "REST APIs", "Cloud Hosting"],
    process: standardProcess,
    related: ["enterprise-applications", "api-development", "database-development"],
  },
  {
    slug: "progressive-web-apps",
    title: "Progressive Web Apps",
    shortTitle: "PWAs",
    category: "Digital Platforms",
    summary:
      "Installable, fast web apps that work across devices without the friction of a traditional app download.",
    overview:
      "Progressive Web Apps are useful when a business needs app-like speed and offline behaviour without maintaining separate app-store releases. We build PWAs with responsive interfaces, caching strategy, install prompts, and careful performance planning.",
    idealFor:
      "Businesses that want field tools, customer self-service, lightweight commerce, booking flows, learning platforms, or internal utilities accessible through the browser.",
    outcomes: [
      "An app-like experience delivered through the web",
      "Improved reliability on slower or unstable networks",
      "Lower distribution friction for users and teams",
      "Reusable codebase across desktop and mobile browsers",
      "Offline or low-connectivity strategy where relevant",
      "Performance improvements for repeated visits",
    ],
    features: [
      "Installable web app behaviour",
      "Offline caching strategy",
      "Responsive app shell",
      "Push notification planning where appropriate",
      "Fast repeat visits",
      "SEO-safe public content areas",
    ],
    technologies: ["Next.js", "React", "Service Workers", "IndexedDB", "Web Push", "TypeScript", "REST APIs"],
    process: standardProcess,
    related: ["web-development", "mobile-app-development", "cross-platform-development"],
  },
  {
    slug: "cross-platform-development",
    title: "Cross-Platform App Development",
    shortTitle: "Cross Platform",
    category: "Application Engineering",
    summary:
      "Single-codebase applications for mobile, web, and desktop use cases where speed and consistency matter.",
    overview:
      "Cross-platform development helps teams move faster when the same product experience must reach multiple devices. We choose the right architecture, design system, data layer, and release plan so the result feels native enough for users while remaining efficient for the business.",
    idealFor:
      "Products that need Android, iOS, web, or desktop presence without maintaining completely separate engineering tracks for every platform.",
    outcomes: [
      "Consistent brand and user experience across platforms",
      "Reduced duplicated engineering effort",
      "Shared business logic and reusable interface patterns",
      "Clear release planning for each platform",
      "Faster MVP and phased feature delivery",
      "Maintainable codebase for long-term updates",
    ],
    features: [
      "Shared design systems",
      "Reusable modules",
      "API-driven architecture",
      "Platform-specific polish",
      "Release pipeline planning",
      "Responsive layouts for multiple device classes",
    ],
    technologies: ["React Native", "Flutter", "Electron", "Next.js", "TypeScript", "Firebase", "REST APIs"],
    process: standardProcess,
    related: ["mobile-app-development", "desktop-applications", "api-development"],
  },
  {
    slug: "enterprise-applications",
    title: "Enterprise Application Development",
    shortTitle: "Enterprise Apps",
    category: "Business Systems",
    summary:
      "Scalable internal and customer-facing enterprise systems for structured workflows and dependable reporting.",
    overview:
      "Enterprise software needs more than screens and forms. It must handle permissions, auditability, integrations, data quality, and predictable operations. We build enterprise applications with clear modules, strong architecture, and rollout planning for Indian business environments.",
    idealFor:
      "Growing organisations that need ERP-style modules, internal platforms, partner portals, approval systems, reporting layers, or secure customer operations.",
    outcomes: [
      "A modular application that can grow with departments",
      "Structured access control and workflow visibility",
      "Reliable reporting and operational dashboards",
      "Integration readiness for finance, CRM, ERP, or logistics tools",
      "Improved governance for business-critical processes",
      "Documentation and support planning for internal adoption",
    ],
    features: [
      "Multi-module architecture",
      "Role and permission planning",
      "Approval workflows",
      "Audit-friendly activity tracking",
      "Enterprise reporting",
      "Integration strategy",
    ],
    technologies: ["Next.js", ".NET", "Node.js", "PostgreSQL", "SQL Server", "Azure", "AWS"],
    process: standardProcess,
    related: ["custom-software-development", "software-consulting", "database-development"],
  },
  {
    slug: "desktop-applications",
    title: "Desktop Application Development",
    shortTitle: "Desktop Apps",
    category: "Desktop Software",
    summary:
      "Desktop tools for high-productivity workflows, offline operations, and specialised business environments.",
    overview:
      "Desktop applications remain important where users need speed, local files, device access, or reliable offline behaviour. We create desktop software that is focused, stable, and easier to maintain than legacy tools or spreadsheet-heavy processes.",
    idealFor:
      "Operations teams, factories, service centres, finance teams, and offices that need local software for repeatable work and controlled data handling.",
    outcomes: [
      "A focused desktop experience for high-frequency tasks",
      "Stable local operations with sync or API integration where required",
      "Cleaner workflows than spreadsheet-based systems",
      "Support for files, exports, printers, or local devices",
      "Maintainable code for future enhancements",
      "Rollout guidance for installation and updates",
    ],
    features: [
      "Offline-capable desktop flows",
      "Local storage and sync planning",
      "File import and export",
      "Peripheral integration",
      "Installer packaging",
      "Operational reporting",
    ],
    technologies: ["Electron", ".NET", "C#", "SQLite", "SQL Server", "React", "REST APIs"],
    process: standardProcess,
    related: ["windows-application-development", "software-modernization", "maintenance-support"],
  },
  {
    slug: "software-modernization",
    title: "Software Modernization",
    shortTitle: "Modernization",
    category: "Technical Renewal",
    summary:
      "Modernise outdated software, improve maintainability, and reduce operational risk without disrupting the business.",
    overview:
      "Legacy software often carries business knowledge, but it can slow teams down when the interface, architecture, or database no longer fits current needs. We help assess, refactor, rebuild, or migrate systems through controlled phases that protect daily operations.",
    idealFor:
      "Businesses running ageing desktop tools, outdated web apps, unsupported frameworks, fragile databases, or manual workarounds around old software.",
    outcomes: [
      "Clear assessment of technical debt and business risk",
      "A practical roadmap for phased modernisation",
      "Improved performance, security, and usability",
      "Reduced dependency on unsupported technology",
      "Cleaner architecture for future integrations",
      "Safer migration with continuity planning",
    ],
    features: [
      "Legacy system audit",
      "UI and workflow redesign",
      "Database migration planning",
      "Code refactoring",
      "API wrapping",
      "Phased rebuild strategy",
    ],
    technologies: ["Next.js", ".NET", "Node.js", "SQL Server", "PostgreSQL", "Docker", "Cloud Platforms"],
    process: standardProcess,
    related: ["maintenance-support", "software-consulting", "database-development"],
  },
  {
    slug: "maintenance-support",
    title: "Application Maintenance and Support",
    shortTitle: "Maintenance",
    category: "Technical Renewal",
    summary:
      "Ongoing application support, improvements, bug fixing, and monitoring for business-critical software.",
    overview:
      "Reliable software needs care after launch. We support applications through bug fixes, performance reviews, security updates, compatibility checks, small enhancements, and structured release planning so the product stays useful and dependable.",
    idealFor:
      "Organisations that already have web, mobile, desktop, or internal software and need a dependable technical partner for improvements and support.",
    outcomes: [
      "Reduced downtime and faster issue response",
      "Planned improvements instead of reactive changes",
      "Regular security and dependency review",
      "Better performance and compatibility over time",
      "Clear support documentation and communication",
      "Stable release process for enhancements",
    ],
    features: [
      "Bug fixing and enhancements",
      "Performance tuning",
      "Security patching",
      "Version upgrades",
      "Monitoring recommendations",
      "Release coordination",
    ],
    technologies: ["Next.js", "React", "Node.js", ".NET", "Databases", "Cloud Hosting", "CI/CD"],
    process: standardProcess,
    related: ["software-modernization", "software-testing", "api-development"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    shortTitle: "UI/UX Design",
    category: "Product Design",
    summary:
      "Clean, usable, conversion-focused interface design for websites, portals, apps, and business software.",
    overview:
      "Good software design makes complex work feel simple. We create user flows, wireframes, interface systems, and responsive screens that help customers act faster and help internal teams complete tasks with fewer mistakes.",
    idealFor:
      "Businesses planning a new product, redesigning an existing platform, improving conversion, or simplifying internal operational software.",
    outcomes: [
      "Clear user journeys and information architecture",
      "Responsive interface designs aligned with brand tone",
      "Reusable design patterns for future screens",
      "Better usability for customers and internal teams",
      "Reduced confusion before development begins",
      "Design handoff that supports efficient implementation",
    ],
    features: [
      "User flow mapping",
      "Wireframes and prototypes",
      "Responsive screen design",
      "Design system foundations",
      "Usability review",
      "Developer handoff",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Accessibility", "Responsive Design", "User Research"],
    process: standardProcess,
    related: ["web-development", "mobile-app-development", "custom-software-development"],
  },
  {
    slug: "database-development",
    title: "Database Design and Development",
    shortTitle: "Databases",
    category: "Data Engineering",
    summary:
      "Reliable database structures, migrations, reporting foundations, and data workflows for business applications.",
    overview:
      "Strong software depends on strong data design. We create database models, queries, migrations, indexes, and reporting-ready structures that keep applications accurate, fast, and easier to evolve as business rules change.",
    idealFor:
      "Teams building new software, modernising old systems, cleaning spreadsheet-driven operations, or improving reporting and data consistency.",
    outcomes: [
      "A database model aligned with real business entities",
      "Cleaner data capture and validation",
      "Improved performance through indexing and query planning",
      "Migration support from old systems or spreadsheets",
      "Reporting-ready structures for dashboards",
      "Backup, access, and maintenance guidance",
    ],
    features: [
      "Schema design",
      "Data migration",
      "Query optimisation",
      "Reporting models",
      "Backup planning",
      "Data validation workflows",
    ],
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Prisma", "Drizzle", "ETL Scripts"],
    process: standardProcess,
    related: ["custom-software-development", "enterprise-applications", "software-modernization"],
  },
  {
    slug: "api-development",
    title: "API Development and Integration",
    shortTitle: "APIs",
    category: "Integration",
    summary:
      "Secure APIs and integrations that connect websites, apps, CRMs, ERPs, payment systems, and internal tools.",
    overview:
      "APIs keep modern software connected. We design and develop secure integration layers that allow different systems to exchange data reliably, reduce manual entry, and support future products without rebuilding every workflow.",
    idealFor:
      "Businesses that need to connect web apps, mobile apps, CRMs, ERPs, accounting tools, logistics systems, or custom internal software.",
    outcomes: [
      "Clear API architecture and documentation",
      "Secure request validation and authentication planning",
      "Reliable integration with third-party or internal systems",
      "Reduced duplicate data entry between departments",
      "Error handling and logging recommendations",
      "Scalable endpoints for current and future applications",
    ],
    features: [
      "REST API development",
      "Third-party integrations",
      "Webhook implementation",
      "API documentation",
      "Data synchronisation",
      "Integration testing",
    ],
    technologies: ["Node.js", ".NET", "REST", "GraphQL", "Webhooks", "Postman", "OpenAPI"],
    process: standardProcess,
    related: ["custom-software-development", "mobile-app-development", "cloud-applications"],
  },
  {
    slug: "software-testing",
    title: "Software Testing and QA",
    shortTitle: "Testing and QA",
    category: "Quality Engineering",
    summary:
      "Manual and automated testing that improves software reliability before users and teams depend on it.",
    overview:
      "Quality assurance protects both user experience and business continuity. We plan test cases, validate workflows, check responsive behaviour, review performance, and help teams release changes with more confidence.",
    idealFor:
      "Products preparing for launch, software undergoing major changes, teams with recurring bugs, or businesses that need structured validation before release.",
    outcomes: [
      "Clear test plan based on business-critical workflows",
      "Reduced release risk and regression issues",
      "Better usability across browsers and devices",
      "Documented defects with reproduction steps",
      "Improved confidence for stakeholders and users",
      "Recommendations for future automation",
    ],
    features: [
      "Functional testing",
      "Regression testing",
      "Responsive testing",
      "Performance review",
      "Test case documentation",
      "Automation planning",
    ],
    technologies: ["Playwright", "Cypress", "Jest", "Postman", "BrowserStack", "Lighthouse", "Manual QA"],
    process: standardProcess,
    related: ["maintenance-support", "web-development", "mobile-app-development"],
  },
  {
    slug: "cloud-applications",
    title: "Cloud Application Development",
    shortTitle: "Cloud Apps",
    category: "Cloud Engineering",
    summary:
      "Cloud-ready applications designed for availability, scalability, secure access, and efficient operations.",
    overview:
      "Cloud applications help businesses move beyond local limitations and support teams across locations. We design cloud-first systems with practical deployment, security, storage, integration, and monitoring decisions that fit the product stage.",
    idealFor:
      "Businesses that need SaaS-style platforms, customer portals, distributed team tools, scalable APIs, or migration from local hosting to cloud infrastructure.",
    outcomes: [
      "Cloud-ready architecture matched to expected scale",
      "Secure deployment and environment planning",
      "Improved availability for distributed users",
      "Storage and database choices aligned with workload",
      "Monitoring and backup recommendations",
      "Cost-aware implementation for Indian businesses",
    ],
    features: [
      "Cloud architecture",
      "Serverless and managed services",
      "Environment configuration",
      "Scalable APIs",
      "Storage planning",
      "Deployment pipelines",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Vercel", "Cloudflare", "Docker", "CI/CD"],
    process: standardProcess,
    related: ["api-development", "enterprise-applications", "maintenance-support"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    category: "Digital Commerce",
    summary:
      "E-commerce websites and commerce workflows built for conversion, catalog clarity, and operational control.",
    overview:
      "E-commerce success depends on more than a shopping cart. We plan catalogue structure, product discovery, checkout journeys, admin workflows, integrations, and performance so customers can buy confidently and teams can manage operations efficiently.",
    idealFor:
      "Retailers, manufacturers, service businesses, and distributors that need online catalogues, ordering workflows, or custom commerce functionality.",
    outcomes: [
      "A commerce experience focused on trust and conversion",
      "Catalogue and product structures that are easy to manage",
      "Checkout and inquiry flows aligned with business model",
      "Integration planning for inventory, CRM, or fulfilment",
      "Responsive shopping experience across devices",
      "SEO-ready product and category architecture",
    ],
    features: [
      "Product catalogue design",
      "Cart and checkout planning",
      "Order management workflows",
      "Payment gateway readiness",
      "Inventory integration",
      "SEO-friendly category pages",
    ],
    technologies: ["Next.js", "Shopify", "WooCommerce", "Headless CMS", "Payment APIs", "REST APIs", "Analytics"],
    process: standardProcess,
    related: ["web-development", "cms-development", "api-development"],
  },
  {
    slug: "cms-development",
    title: "CMS Development",
    shortTitle: "CMS",
    category: "Content Platforms",
    summary:
      "Manageable websites and content platforms that let teams update content without developer dependency.",
    overview:
      "A good CMS setup gives marketing and business teams control without sacrificing performance or design quality. We structure content models, page templates, media workflows, and publishing rules around how the business actually updates the website.",
    idealFor:
      "Corporate websites, service businesses, knowledge bases, blogs, landing page systems, and content-heavy platforms that need regular updates.",
    outcomes: [
      "A content model that matches the website structure",
      "Easy updates for services, pages, media, and FAQs",
      "Reusable page templates for future growth",
      "SEO-friendly fields and metadata management",
      "Lower dependency on developers for routine updates",
      "A clean authoring workflow for internal teams",
    ],
    features: [
      "Headless CMS setup",
      "Content modelling",
      "Reusable page templates",
      "Media management",
      "SEO field planning",
      "Editorial workflow guidance",
    ],
    technologies: ["Sanity", "Strapi", "WordPress", "Contentful", "Next.js", "Markdown", "REST APIs"],
    process: standardProcess,
    related: ["web-development", "ecommerce-development", "ui-ux-design"],
  },
  {
    slug: "software-consulting",
    title: "Software Consulting",
    shortTitle: "Consulting",
    category: "Advisory",
    summary:
      "Technical planning, product direction, architecture review, and practical software strategy for better decisions.",
    overview:
      "Software decisions affect budget, timelines, user adoption, and future flexibility. We help businesses clarify requirements, evaluate options, plan architecture, review vendors, and shape a realistic roadmap before expensive development begins.",
    idealFor:
      "Founders, business owners, and enterprise teams that need clarity before building, modernising, scaling, or integrating software.",
    outcomes: [
      "Clear technical direction before committing budget",
      "Practical product and architecture recommendations",
      "Better prioritisation of features and releases",
      "Risk identification for legacy systems and integrations",
      "Documentation that helps teams align internally",
      "Roadmaps that balance ambition with delivery reality",
    ],
    features: [
      "Requirement discovery",
      "Architecture review",
      "Technical roadmap",
      "Build-versus-buy guidance",
      "Vendor and code review",
      "Product planning workshops",
    ],
    technologies: ["Architecture Planning", "Product Strategy", "Cloud Review", "Database Review", "Security Review", "Documentation"],
    process: standardProcess,
    related: ["custom-software-development", "enterprise-applications", "software-modernization"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return services.filter((service) => slugs.includes(service.slug));
}
