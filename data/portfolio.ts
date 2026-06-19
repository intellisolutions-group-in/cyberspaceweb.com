export type PortfolioItem = {
  slug: string;
  title: string;
  type: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcome: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "operations-command-portal",
    title: "Operations Command Portal",
    type: "Custom Web Application",
    challenge:
      "A growing services business was coordinating tasks, approvals, and reports across multiple spreadsheets and email threads.",
    solution:
      "A role-based web portal centralised task tracking, approval stages, file notes, and operational dashboards in one interface.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs"],
    outcome:
      "Teams gained clearer visibility into pending work, handoffs, and daily progress without changing the core business process overnight.",
  },
  {
    slug: "field-service-mobile-tool",
    title: "Field Service Mobile Tool",
    type: "Mobile Application",
    challenge:
      "Field staff needed a reliable way to capture visit details, customer notes, and status updates while working across locations.",
    solution:
      "A mobile-first workflow allowed staff to record service details, attach documents, and sync updates with the central system.",
    stack: ["React Native", "Node.js", "SQLite", "API Integration"],
    outcome:
      "The business reduced manual reporting delays and improved visibility into service activity across locations.",
  },
  {
    slug: "legacy-desktop-modernisation",
    title: "Legacy Desktop Modernisation",
    type: "Software Modernization",
    challenge:
      "A legacy desktop tool was difficult to maintain, slow to update, and dependent on manual exports for reporting.",
    solution:
      "The workflow was redesigned with cleaner screens, a revised database model, and an integration layer for reports.",
    stack: [".NET", "SQL Server", "WPF", "REST APIs"],
    outcome:
      "The application became easier to support while preserving familiar workflows for existing users.",
  },
  {
    slug: "commerce-catalogue-platform",
    title: "Commerce Catalogue Platform",
    type: "E-commerce Development",
    challenge:
      "A catalogue-heavy business needed a faster product discovery experience and simpler content updates for its internal team.",
    solution:
      "A structured catalogue, category pages, inquiry flow, and admin-ready content model were planned around recurring updates.",
    stack: ["Next.js", "Headless CMS", "Tailwind CSS", "Search"],
    outcome:
      "The new platform improved product browsing and reduced dependency on developers for routine catalogue updates.",
  },
  {
    slug: "customer-self-service-pwa",
    title: "Customer Self-Service PWA",
    type: "Progressive Web App",
    challenge:
      "Customers needed quick access to request status and support actions without installing a full native app.",
    solution:
      "An installable PWA delivered account status, request history, and support forms with a fast mobile-first interface.",
    stack: ["Next.js", "Service Worker", "IndexedDB", "REST APIs"],
    outcome:
      "Customers received an app-like experience through the browser, reducing support follow-ups for common requests.",
  },
  {
    slug: "analytics-reporting-layer",
    title: "Analytics Reporting Layer",
    type: "Database and Reporting",
    challenge:
      "Leadership reports were compiled manually from disconnected exports, causing delays and inconsistent numbers.",
    solution:
      "A reporting database, cleaned data model, and dashboard-ready query layer created a single view of key metrics.",
    stack: ["PostgreSQL", "ETL", "Dashboard UI", "API Layer"],
    outcome:
      "Reporting became more consistent and stakeholders could review operational metrics without waiting for manual compilation.",
  },
  {
    slug: "api-integration-hub",
    title: "API Integration Hub",
    type: "API Development",
    challenge:
      "Multiple systems were storing overlapping customer and order data, creating duplicated effort and avoidable errors.",
    solution:
      "A secure API layer and synchronisation workflow connected core systems while preserving validation rules.",
    stack: ["Node.js", "OpenAPI", "Webhooks", "Queue Workers"],
    outcome:
      "The integration reduced duplicate entry and created a cleaner foundation for future automation.",
  },
  {
    slug: "service-company-website",
    title: "Service Company Website",
    type: "Corporate Website",
    challenge:
      "A service business needed a sharper website with stronger service pages, inquiry flows, and search-ready structure.",
    solution:
      "A static-export website with service detail pages, structured content, forms, and responsive visual sections was delivered.",
    stack: ["Next.js", "Static Export", "SEO Metadata", "Responsive UI"],
    outcome:
      "The new site gave visitors clearer service information and made inquiries easier to initiate from any device.",
  },
];
