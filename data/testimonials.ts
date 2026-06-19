export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  projectType: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team understood our operational workflow before proposing screens. That made the final application much easier for our staff to adopt.",
    name: "Rohan Mehta",
    designation: "Operations Head",
    projectType: "Internal Workflow Platform",
  },
  {
    quote:
      "Our old website looked dated and was difficult to update. The new site is faster, clearer, and gives our sales team better inquiry quality.",
    name: "Nisha Patel",
    designation: "Marketing Manager",
    projectType: "Corporate Website",
  },
  {
    quote:
      "The phased approach helped us launch the essential modules first while keeping the larger roadmap under control.",
    name: "Amit Shah",
    designation: "Founder",
    projectType: "Custom Software MVP",
  },
  {
    quote:
      "They were practical about integrations and documented the API decisions clearly. That helped our internal team maintain the system.",
    name: "Priya Menon",
    designation: "Technology Lead",
    projectType: "API Integration",
  },
  {
    quote:
      "The application replaced multiple spreadsheets and gave us better visibility into approvals, pending work, and reports.",
    name: "Karan Desai",
    designation: "Business Manager",
    projectType: "Approval System",
  },
  {
    quote:
      "The UI redesign made a complex process feel simpler. Users needed less explanation and support calls reduced after rollout.",
    name: "Meera Iyer",
    designation: "Product Coordinator",
    projectType: "UX Redesign",
  },
  {
    quote:
      "We appreciated the focus on maintainability. The handover notes were clear and future enhancements were easy to discuss.",
    name: "Siddharth Rao",
    designation: "Director",
    projectType: "Web Application",
  },
  {
    quote:
      "Testing was handled with discipline. Issues were reported with steps, screenshots, and priority, which made release decisions easier.",
    name: "Anjali Nair",
    designation: "Project Manager",
    projectType: "QA Support",
  },
  {
    quote:
      "The team helped us choose what to build first instead of trying to build everything at once. That clarity saved time.",
    name: "Vikram Joshi",
    designation: "Business Owner",
    projectType: "Software Consulting",
  },
];
