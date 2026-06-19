export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readMinutes: number;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-software-vs-ready-made-templates",
    title: "Custom Software vs Ready-Made Templates for Indian Businesses",
    category: "Strategy",
    publishedDate: "2026-03-12",
    readMinutes: 6,
    excerpt:
      "When a template is enough, when custom software becomes necessary, and how to decide without overspending on the wrong approach.",
    intro:
      "Many Indian businesses start with a template website, a SaaS subscription, or a plugin stack because speed and cost matter. That can work well for early visibility or simple lead capture. Problems appear when the real workflow does not fit the template: approvals, inventory rules, role-based access, integrations, or reporting that the business already depends on.",
    sections: [
      {
        heading: "When a template is a good fit",
        paragraphs: [
          "Templates and packaged tools work when the business process is standard, the user journey is simple, and future changes are limited. A brochure website, a basic enquiry form, or a landing page for a defined campaign often does not need custom engineering on day one.",
          "The key is to be honest about how the business actually operates. If managers can describe the workflow in a short meeting and the tool already supports it, a template may be the practical choice.",
        ],
      },
      {
        heading: "When custom software becomes necessary",
        paragraphs: [
          "Custom development is usually justified when data must move between systems, users need different permissions, or the product is part of daily operations rather than marketing alone. Examples include internal portals, field service tools, distributor ordering, audit reporting, and customer self-service tied to backend records.",
          "Another signal is repeated manual work: exporting spreadsheets, copying data between apps, or maintaining parallel records because no single system reflects the truth.",
        ],
      },
      {
        heading: "A practical decision framework",
        paragraphs: [
          "Start with the workflow, not the technology. List users, inputs, outputs, integrations, and what must be true after launch. Compare that against what a template can do without heavy workarounds.",
          "If the gap is small, phase the project: launch essentials first, then extend. If the gap is large from the start, custom software may save money over time by reducing rework, support friction, and operational risk.",
        ],
      },
    ],
    tags: ["Custom Software", "Planning", "India"],
  },
  {
    slug: "phased-software-delivery-for-smes",
    title: "Phased Software Delivery: A Practical Model for SMEs in India",
    category: "Process",
    publishedDate: "2026-02-28",
    readMinutes: 7,
    excerpt:
      "How to split a software project into milestones that reduce risk, control budget, and still reach a useful first release.",
    intro:
      "Large single-phase launches are risky for small and mid-sized businesses. Requirements shift, integrations surface late, and stakeholders only fully understand the product after using part of it. Phased delivery addresses this by releasing the most valuable modules first, then improving based on real feedback.",
    sections: [
      {
        heading: "Define the first valuable release",
        paragraphs: [
          "The first phase should solve one clear business problem. For a distributor, that might be order intake and status tracking. For a services company, it might be job assignment and customer communication. Avoid trying to replicate every legacy feature in version one.",
          "Each phase needs acceptance criteria that managers can verify without reading code: screens, reports, notifications, or integrations that must work in production.",
        ],
      },
      {
        heading: "Plan integrations early",
        paragraphs: [
          "Even phased projects fail when accounting, logistics, CRM, or payment systems are treated as afterthoughts. Map external dependencies in discovery and decide which integrations belong in phase one versus later.",
          "Document assumptions about APIs, file formats, access credentials, and who owns each third-party system. This prevents silent blockers during development.",
        ],
      },
      {
        heading: "Review, deploy, then expand",
        paragraphs: [
          "After each phase, review usage, support tickets, and operational feedback before committing to the next scope. This keeps the roadmap aligned with the business rather than with an outdated specification.",
          "Phased delivery also helps budgeting: each milestone can be estimated and approved separately while preserving a coherent long-term architecture.",
        ],
      },
    ],
    tags: ["Delivery", "SME", "Roadmap"],
  },
  {
    slug: "planning-api-integrations-for-business-systems",
    title: "Planning API Integrations Before You Build Business Systems",
    category: "Integration",
    publishedDate: "2026-02-10",
    readMinutes: 6,
    excerpt:
      "What to document before connecting CRMs, ERPs, payment gateways, and internal databases to a new application.",
    intro:
      "API integrations are often described as simple connectors. In practice they define how reliable your software feels: whether orders sync, whether inventory matches, and whether support teams trust the data on screen. Good integration planning happens before development starts, not after the UI is finished.",
    sections: [
      {
        heading: "Map systems and data ownership",
        paragraphs: [
          "List every system that sends or receives data: accounting, warehouse, CRM, payment provider, logistics partner, or legacy desktop tool. For each one, identify which system is the source of truth for customers, products, prices, stock, and invoices.",
          "Disputes over source of truth cause the most integration rework. Resolve them in workshops with business and operations stakeholders, not only with developers.",
        ],
      },
      {
        heading: "Define events and failure behaviour",
        paragraphs: [
          "Integrations should be described as events: order created, payment confirmed, shipment dispatched, customer updated. For each event, specify direction, frequency, retry rules, and what happens when the remote system is unavailable.",
          "Users need clear failure behaviour. Should the app queue the action, show a warning, or block the step entirely? The answer depends on business risk, not only on technical convenience.",
        ],
      },
      {
        heading: "Security and observability",
        paragraphs: [
          "Use least-privilege credentials, rotate keys where possible, and log integration activity in a way support teams can understand. When something fails at night, logs should show which record, which endpoint, and which response caused the problem.",
          "Well-planned integrations reduce manual reconciliation and make future modules easier to add because the data layer is already structured.",
        ],
      },
    ],
    tags: ["API", "Integration", "Architecture"],
  },
  {
    slug: "when-static-export-websites-make-sense",
    title: "When Static Export Websites Make Sense for Indian Companies",
    category: "Web",
    publishedDate: "2026-01-22",
    readMinutes: 5,
    excerpt:
      "Why static-export ready sites can be fast, portable, and cost-effective—and when you should choose a dynamic platform instead.",
    intro:
      "Not every website needs server-side rendering or a live database on every request. Marketing sites, service catalogues, documentation hubs, and enquiry-led business websites can often be built as static-export ready properties that load quickly and deploy almost anywhere.",
    sections: [
      {
        heading: "Benefits of static-export ready builds",
        paragraphs: [
          "Static exports reduce hosting complexity and improve performance for content that changes infrequently. Pages are generated at build time, so visitors receive pre-rendered HTML without waiting on application servers for basic content.",
          "For India-focused businesses serving mixed network conditions, fast first load and predictable hosting costs are practical advantages.",
        ],
      },
      {
        heading: "Good use cases",
        paragraphs: [
          "Company websites, service overviews, portfolio pages, blogs, landing pages, and lead capture forms that post to external services or email workflows fit this model well.",
          "This site itself follows that pattern: content pages, service detail routes, and inquiry forms designed for static deployment with modern tooling.",
        ],
      },
      {
        heading: "When to choose dynamic software instead",
        paragraphs: [
          "If users log in, permissions change by role, data must update in real time, or workflows run inside the site, you likely need a web application with server-side logic and a database.",
          "The decision is not static versus modern. It is static versus dynamic for the specific job. Many businesses use both: a fast public site and a separate internal or customer portal.",
        ],
      },
    ],
    tags: ["Web Development", "Static Export", "Performance"],
  },
  {
    slug: "mobile-app-or-pwa-for-business",
    title: "Mobile App or PWA: Choosing the Right Approach for Business Software",
    category: "Mobile",
    publishedDate: "2026-01-08",
    readMinutes: 6,
    excerpt:
      "Compare native apps, cross-platform apps, and progressive web apps based on offline needs, device features, and delivery speed.",
    intro:
      "Businesses often ask for a mobile app because customers or staff expect one. The better first question is what the mobile experience must do: push notifications, offline capture, camera access, background sync, or simply a responsive interface on phones and tablets.",
    sections: [
      {
        heading: "Progressive web apps",
        paragraphs: [
          "PWAs suit workflows that mainly need forms, dashboards, and authenticated access through the browser. They can be installed on home screens and updated centrally without app store delays.",
          "They work well when the audience uses varied devices and you want one codebase with strong web delivery.",
        ],
      },
      {
        heading: "Native and cross-platform apps",
        paragraphs: [
          "Native or cross-platform apps are stronger when deep device integration, offline-first behaviour, or app store distribution is central to the product. Field teams, delivery workflows, and consumer apps with heavy media often fit here.",
          "Budget and maintenance matter: app store releases, device testing, and OS updates add ongoing work compared with web-first delivery.",
        ],
      },
      {
        heading: "Recommendation pattern",
        paragraphs: [
          "Start from user tasks and connectivity. If the workflow is internal and browser-based access is acceptable, a PWA or responsive web app may ship faster. If the workflow depends on device capabilities or offline reliability, plan for a dedicated mobile build.",
          "Either way, connect mobile experiences to the same backend data model so web and app users see consistent information.",
        ],
      },
    ],
    tags: ["Mobile", "PWA", "Product"],
  },
  {
    slug: "software-maintenance-after-launch",
    title: "Software Maintenance After Launch: What Indian Businesses Should Plan For",
    category: "Support",
    publishedDate: "2025-12-18",
    readMinutes: 5,
    excerpt:
      "Why maintenance is part of delivery, not an optional extra—and what to expect after the first version goes live.",
    intro:
      "Launch day is not the end of a software project. Dependencies age, browsers change, security issues appear, users request improvements, and integrations shift when third-party systems update. Maintenance keeps the product dependable after the first release.",
    sections: [
      {
        heading: "What maintenance includes",
        paragraphs: [
          "Maintenance covers bug fixes, dependency updates, compatibility checks, small enhancements, performance tuning, backup verification, and release coordination. It does not mean rebuilding the product every quarter.",
          "The goal is stability and predictable improvement so the business can keep operating without emergency patches.",
        ],
      },
      {
        heading: "Common post-launch surprises",
        paragraphs: [
          "Teams often underestimate reporting tweaks, new export formats, additional user roles, and integration changes from vendors. These are normal if the software is actually used.",
          "Planning a support window after launch reduces the gap between go-live and confidence.",
        ],
      },
      {
        heading: "How to structure support",
        paragraphs: [
          "Define severity levels, response expectations, and what counts as a defect versus a new feature. Keep documentation for deployments, credentials, and known limitations accessible to authorised people.",
          "A maintainable codebase and clear release notes make support faster and cheaper over the life of the product.",
        ],
      },
    ],
    tags: ["Maintenance", "Support", "Operations"],
  },
  {
    slug: "database-design-for-business-applications",
    title: "Database Design Basics for Business Applications",
    category: "Data",
    publishedDate: "2025-12-02",
    readMinutes: 7,
    excerpt:
      "How clear schema design, relationships, and reporting foundations prevent expensive rework in custom software projects.",
    intro:
      "Application screens get most of the attention in planning meetings, but the database shape determines whether reporting is trustworthy, integrations remain stable, and future modules can be added without rewriting core logic.",
    sections: [
      {
        heading: "Start from entities and relationships",
        paragraphs: [
          "Identify core entities such as customers, orders, jobs, assets, invoices, and users. Define how they relate and which records must never be orphaned. Business rules like status transitions and approval chains should be visible in the model early.",
          "Avoid storing the same fact in multiple places without a clear master record. Redundant data creates reconciliation work later.",
        ],
      },
      {
        heading: "Plan for reporting early",
        paragraphs: [
          "Managers will ask for summaries, exports, and dashboards. If reporting is treated as an afterthought, developers end up scraping UI tables or building fragile queries across poorly related tables.",
          "Decide which metrics matter at launch and which can wait. That helps design indexes, views, and data history correctly from the start.",
        ],
      },
      {
        heading: "Migration and growth",
        paragraphs: [
          "Existing businesses often launch new software beside legacy data. Migration planning should include cleanup rules, duplicate handling, and a rollback strategy.",
          "A well-designed schema makes phased delivery easier because new modules can attach to shared entities instead of inventing parallel structures.",
        ],
      },
    ],
    tags: ["Database", "Architecture", "Reporting"],
  },
  {
    slug: "writing-clear-software-requirements",
    title: "How to Write Clear Software Requirements Before Development Starts",
    category: "Discovery",
    publishedDate: "2025-11-14",
    readMinutes: 6,
    excerpt:
      "A practical checklist for describing goals, users, workflows, integrations, and success criteria for your first development discussion.",
    intro:
      "Software projects move faster when requirements describe business outcomes instead of vague feature wishes. You do not need a perfect specification on day one, but you do need enough clarity for sensible planning, estimation, and architecture.",
    sections: [
      {
        heading: "Describe the business goal",
        paragraphs: [
          "Explain the problem in plain language: what is slow, error-prone, missing, or expensive today. Include who feels the pain—customers, staff, managers, or partners.",
          "Goals like improve efficiency or go digital are too broad unless tied to a measurable workflow change.",
        ],
      },
      {
        heading: "List users, actions, and systems",
        paragraphs: [
          "Name user groups and what each group must do in the system. Note existing tools, files, or software that must connect to the new solution.",
          "Screenshots, sample spreadsheets, and current forms are often more useful than abstract feature lists.",
        ],
      },
      {
        heading: "Set priorities and constraints",
        paragraphs: [
          "Identify must-have items for the first release, nice-to-have items for later, and any fixed dates driven by business events. Mention budget flexibility, regulatory requirements, languages, and support expectations if they matter.",
          "Clear priorities help teams propose phased delivery instead of an all-or-nothing plan that is hard to launch.",
        ],
      },
    ],
    tags: ["Requirements", "Discovery", "Planning"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);

  const scored = blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score:
        (post.category === current.category ? 2 : 0) +
        post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.post);
}

export function formatBlogDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(isoDate));
}
