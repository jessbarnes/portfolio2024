type Project = {
  company?: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const workProjects: Project[] = [
  {
    title: "Stridz",
    company: "",
    startDate: "2024-9-01",
    endDate: "",
    description: `Took over development of a year old educational finance platform, written in Typescript and integrated with Vercel and React Native to deploy on iOS and Android. Currently implementing monetization via subscriptions.`,
  },
  {
    title: "Poll Management System",
    company: "Combined Curiosity - SEII",
    startDate: "2024-1-01",
    endDate: "2024-8-1",
    description: `Planned a new poll component to be used within the webinar pages alongside the chat window, requiring the creation of multiple relational tables for the complex object structure, and cross team collaboration.
      
      Developed handling branching paths and timing prompts to appear at set timestamps within the webinar video. Triggered sending specific events to Drip which required thorough testing with the analytics team.
      
      Built a multi-layered form for the component within our admin site, and included a dynamic Mermaid web diagram with which a marketer could easily preview the branching paths they were building.`,
  },
  {
    title: "Timer Management System",
    company: "Combined Curiosity - SEII",
    startDate: "2023-12-01",
    endDate: "2024-3-1",
    description: `Developed a tool to define schedules for repeating timers. Previously, marketers were required to edit individual Instapages by hand when timers ran out, so this addition saved immeasurable headaches.`,
  },
  {
    title: "Shipping Management System",
    company: "Combined Curiosity - SEI",
    startDate: "2023-6-01",
    endDate: "2023-10-1",
    description: `Automated the shipment processes. Previously, a support team member would log into Shippo daily to manually create a shipment for each order, then individually select them to download their labels one by one.

      Built a system utilizing Shippo's API to create shipments as orders were made, storing data in a table in our own database. Designed a shipment management page within our admin site and the ability to download many labels at once, grouping those which ordered the same product into the same pdf, and sorting by shipping carrier. 

      Reduced human error and saved countless hours of support time by updating this process.
    `,
  },
  {
    title: "Learning System",
    company: "Combined Curiosity - SEI",
    startDate: "2022-5-01",
    endDate: "2022-12-1",
    description: `Assisted in creation of a learning system, along with an admin site to populate and manage it. Designed the responsive styling of the learning site and the main content management admin page.

      Built a custom video player component, which accounted for brand styling as well as tracking a user's progress for them to easily pick up where they left off. Later on, introduced the ability for users to leave notes with recorded timestamps, and a Notebook page that listed them and linked back to the corresponding lesson.
    `,
  },
  {
    title: "Conveyor System",
    company: "StuffRaiser - SD",
    startDate: "2021-1-01",
    endDate: "2021-12-31",
    description: `Built a live conveyor display for book processing. Users could watch as the book cover appeared on screen after it was scanned and sent down the line, then move on screen into its corresponding destination’s box.

      Tracked destination, capacity, and location of gaylords and smaller boxes in the warehouse with barcodes. Created a move page to use with a phone’s camera to scan a box’s barcode, then a static location’s barcode, to update within the system. New barcodes could be easily printed from this page.

      Set up a conveyor form which dictated which rakes were active and able to push books off the conveyor, and their locations were determined by how many ticks it took a book to move between them.`,
  },
];

export const personalProjects: Project[] = [
  {
    title: "Portfolio",
    startDate: "2023-10-01",
    endDate: "2024-8-1",
    description:
      "You are here! I built this static site using React and hosted it on Github Pages. It's written in TypeScript and styled with TailwindCSS.",
  },
  {
    title: "Custom Discord Bots",
    startDate: "2021-10-01",
    endDate: "2024-4-1",
    description: `I've created three different bots for Discord using Python. Through them I've gained valuable experience with Google's API and Auth systems, as well as exposure to Replit for hosting and Uptimerobot to ping the bot occasionally to keep it live. (Replit's free tier would time out otherwise)
      
      March-April 2024 Automatic Spreadsheet Editor
      Built for my husband to easily keep track of individual costs of materials for our 3d printer that we let our friends use. It takes info from new Discord message, checks if it is formatted correctly, and adds it to the appropriate fields in a google sheet by appending a new row at the bottom of a list, then it reacts to the original Discord message with a green checkbox emoji. Figuring out the Google API and Auth was the trickiest part of this.
      
      Feb 2022 Multiplayer Wordle
      When wordle was at its peak, my friends thought it would be funny if it was multiplayer, and I said why not. If you typed /wordle in a channel, it would start a round by secretly picking an answer from a list. Anyone could make their 5 letter guess by entering /wordle _____, so we could work together to find the answer. The bot would respond with the guess as a row of letter emojis with a row of green, yellow, or red square emojis in the next line of the message, corresponding to accuracy. Up to six guesses could be made total per round, then it would display the answer if you lost.
      
      Oct 2021 Daisy Mae
      A basic bot I made for my Animal Crossing server with my friends. It's main purpose was to send a message which users could react to to gain a server role. That would then give them notifications when the role was tagged in a message.`,
  },
  {
    title: "Bunio 0.1.2",
    startDate: "2023-11-01",
    endDate: "2023-12-1",
    description: `In March 2023, I started learning how to use GODOT, free open source game engine that supports programming in C++, C#, and its integrated language GDScript which has syntax derived from Python. I followed a handful of tutorials in each of the languages to teach myself the software. After I had around 25hrs of experience following tutorials, as well as plenty of time learning Aesprite for pixel art and 1BitDragon for music, I wanted to make my own little game. Inspired by my sister and her pet rabbit Winston, I started Bunio in November 2023. I spent a ton of free time over the holidays working on it, figuring out itch.io, and making my family playtest it. By the end of the year, I had my first playable demo!

      You can play it right now in-browser at https://javabones.itch.io/bunio with the password 'winston'

      I may come back to it in the future to add more content, but just getting it to this point of a single published level, where my little cousins can pull it up on their own computer and think I'm a wizard, is worth celebrating in its own right.`,
  },
  {
    title: "Github Hacktoberfest 2022",
    startDate: "2022-10-01",
    endDate: "2022-10-31",
    description: `For my first time participating in the annual celebration of open source, https://hacktoberfest.com/, I kept it small and stuck to Javascript for familiarity. This was great practice for diving into brand new stacks, and following different pull request standards. I contributed to a handful of repositories, but this one was the highlight https://github.com/catdad/canvas-confetti/pull/189

      I added a burst of stars as a new option of confetti style. I showed it to my team at Combined Curiosity, where I was 6 months into my Software Engineer I position at the time, and to my delight they let me add it to our React learning platform when a user completed a class.`,
  },
];
