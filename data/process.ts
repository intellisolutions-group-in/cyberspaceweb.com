export const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Clarify business goals, users, current workflows, constraints, content, integrations, and success criteria.",
  },
  {
    number: "02",
    title: "ARCHITECT",
    description:
      "Define the technical approach, data model, page structure, modules, milestones, and delivery risks.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Create user flows, wireframes, interface systems, and responsive layouts that make the product easier to use.",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Develop the application in focused iterations with reusable components, clean code, and regular review points.",
  },
  {
    number: "05",
    title: "VALIDATE",
    description:
      "Test core flows, responsive behaviour, integrations, performance, accessibility, and release readiness.",
  },
  {
    number: "06",
    title: "LAUNCH",
    description:
      "Prepare deployment, documentation, handover, support priorities, and the roadmap for future improvements.",
  },
] as const;

export const values = [
  "Build practical software, not decorative complexity.",
  "Keep business workflows visible from discovery to delivery.",
  "Design interfaces that reduce confusion for real users.",
  "Prefer maintainable architecture over short-lived shortcuts.",
  "Communicate clearly with Indian business context and timelines.",
  "Document decisions so future teams can keep moving.",
] as const;
