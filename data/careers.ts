import { company } from "@/data/company";

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  summary: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: company.careerLocation,
    summary:
      "Build responsive interfaces for websites, dashboards, and application workflows using modern frontend practices.",
    requirements: [
      "Strong understanding of React, HTML, CSS, and responsive layouts",
      "Ability to convert UI designs into clean, maintainable components",
      "Familiarity with TypeScript and modern build tools",
      "Attention to performance, accessibility, and browser behaviour",
    ],
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    department: "Engineering",
    location: company.careerLocation,
    summary:
      "Develop APIs, database-backed features, integrations, and secure business logic for software platforms.",
    requirements: [
      "Experience with Node.js, .NET, or similar backend technology",
      "Good understanding of REST APIs and database design",
      "Ability to write clean, testable, and documented code",
      "Awareness of authentication, validation, and secure coding practices",
    ],
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: company.careerLocation,
    summary:
      "Work across frontend, backend, data, and deployment tasks for custom web and software projects.",
    requirements: [
      "Hands-on experience with React and server-side development",
      "Ability to understand business workflows and translate them into features",
      "Comfort with relational databases and API integration",
      "Good communication and ownership of assigned modules",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: company.careerLocation,
    summary:
      "Design user flows, wireframes, prototypes, and responsive interfaces for business software and websites.",
    requirements: [
      "Strong portfolio of web or application interface work",
      "Ability to simplify complex workflows into usable layouts",
      "Experience with design tools and design systems",
      "Understanding of accessibility, responsive design, and developer handoff",
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    department: "Quality",
    location: company.careerLocation,
    summary:
      "Plan and execute functional, regression, responsive, and integration testing for software releases.",
    requirements: [
      "Experience writing test cases and reporting issues clearly",
      "Understanding of web, mobile, and API testing basics",
      "Ability to reproduce defects and verify fixes",
      "Familiarity with automation tools is helpful",
    ],
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    department: "Product",
    location: company.careerLocation,
    summary:
      "Gather requirements, document workflows, support planning, and help bridge business needs with delivery teams.",
    requirements: [
      "Good communication and documentation skills",
      "Ability to map business workflows and user journeys",
      "Understanding of software project lifecycles",
      "Comfort coordinating between stakeholders, design, and engineering",
    ],
  },
];
