type Job = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

const jobs: Job[] = [
  {
    company: "Combined Curiosity",
    title: "Software Engineer II",
    startDate: "2023-10-01",
    endDate: "2024-8-1",
    description: `With this promotion, I demonstrated my self sufficiency by coordinating between teams to plan and execute new projects on my own, as well as alongside other engineers above and below me. I continued to enhance the shipping tools I created in the year prior by collaborating with the support team and utilizing Shippo's API for shipment management. I gained confidence in working across platforms with complex relational databases as I widened our scope of customer behavior analysis. I created a variety of tools within the CC Admin site for non-technical internal users to manage various landing pages, products for sale, and configuration of various parts of the user experience.
    
      The majority of my work in this role was written in TypeScript and React, and in my day to day I utilized: Linear for task management, Figma and Balsamiq for mockups, Notion for daily personal notes, Slack and Tuple for collaboration, and Visual Studio Code and Git for version management.`,
  },
  {
    company: "Combined Curiosity",
    title: "Software Engineer I",
    startDate: "2022-05-01",
    endDate: "2023-10-01",
    description: `Worked from the ground up with the small team of this young start up to develop a flexible user interface compatible with multiple brands, and an admin site for the support and marketing teams to manage its content. Getting in at the beginning gave me the opportunity to be involved in conversations about data structures, site design, and scalability. I experienced phases testing different code, design, and team management tools until we found what worked best for us. This was my biggest period of growth as a developer. I gained confidence, began to lead pair programming sessions with other developers, manage my own workload, have a voice in design decisions, and solo projects from start to finish. 
    
      My most intense project while in this role was automating our shipment processes, the success of which, along with my consistent communication and documentation, demonstrated my skills and worthiness of a promotion to the SEII level.`,
  },
  {
    company: "StuffRaiser",
    title: "Software Developer",
    startDate: "2020-03-01",
    endDate: "2022-5-1",
    description:
      "Created a Create React App based off of their old software from scratch with the insight from senior developers, working as a Junior primarily in the frontend for the first year. Over time, I took on more complex backend tasks to maintain and enhance the database and API calls, utilizing tools such as Postico and Postman. I also designed pages in Figma, tracked progress in Github Projects, kept a detailed data model in draw.io up to date, mentored interns, and tackled issues within AWS Lambda.",
  },
];

export default jobs;
