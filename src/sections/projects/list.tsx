type Project = {
  company?: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const personalProjects: Project[] = [
  {
    title: "Portfolio",
    startDate: "2023-10-01",
    endDate: "2024-8-1",
    description:
      "You are here! I built this static site using React and hosted it on Github Pages. It's written in TypeScript and styled with TailwindCSS.",
  },
];

export const workProjects: Project[] = [
  {
    title: "Poll Management Tool",
    company: "Combined Curiosity",
    startDate: "2024-1-01",
    endDate: "2024-8-1",
    description: `Planned a new poll component to be used within the webinar pages alongside the chat window, requiring the creation of multiple relational tables for the complex object structure, and cross team collaboration.
      Developed handling branching paths and timing prompts to appear at set timestamps within the webinar video. Triggered sending specific events to Drip which required thorough testing with the analytics team.
      Built a multi-layered form for the component within our admin site, and included a dynamic Mermaid web diagram with which a marketer could easily preview the branching paths they were building.`,
  },
  {
    title: "Timer Management Tool",
    company: "Combined Curiosity",
    startDate: "2023-12-01",
    endDate: "2024-3-1",
    description: `Developed a tool to define schedules for repeating timers. Previously, marketers would edit individual Instapages by hand when timers ran out, so this relatively simple addition saved immeasurable headaches.`,
  },
];
