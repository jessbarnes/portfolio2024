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
    description: `Lead coordination between teams to plan new projects, and executed tasks individually as well as alongside other engineers both senior and junior. 

    Reliably investigated and documented bugs as they were reported, solving them once prioritized, and trusted with testing and handling releases. 

    Enhanced shipping and inventory management with new features and improvements to error handling, by collaborating with the support team and utilizing Shippo's API for shipment management. Documented process thoroughly.

    Developed customizable features by working across platforms with complex relational databases.

    Widened our scope of customer behavior analysis by expanding detailed event tracking.

    Built and documented a variety of software for non-technical internal users to manage various landing pages, products for sale, and configuration of various parts of the user experience. 
`,
  },
  {
    company: "Combined Curiosity",
    title: "Software Engineer I",
    startDate: "2022-05-01",
    endDate: "2023-10-01",
    description: `Worked from the ground up to develop a flexible user interface compatible with multiple brands, and an admin site for the support and marketing teams to manage its content.

    Experienced phases testing different code, design, and team management software. Contributed to team decisions on data structures, site design, and scalability. 

    Grew to be reliably self sufficient in managing my own workload and soloing projects from start to finish. 

    Lead pair programming sessions and broke up issues into manageable tasks for a junior.

    Automated the shipment processes, the success of which, along with my consistent communication and documentation, demonstrated my skills and worthiness of a promotion to the SEII level.
`,
  },
  {
    company: "StuffRaiser",
    title: "Software Developer",
    startDate: "2020-03-01",
    endDate: "2022-5-1",
    description: `Built a Create React App from scratch based off of old software, with the insight from senior developers, working primarily in the frontend for the first year. 
      
    Gradually took on more complex backend tasks to maintain and enhance the database and API calls, utilizing software such as Postico and Postman. 
    
    Designed pages in Figma, tracked progress in Github Projects, kept a detailed data model in draw.io up to date, mentored interns, and tackled issues within AWS Lambda.`,
  },
];

export default jobs;
