import { useRef } from "react";
import Header from "./sections/header";
import Work from "./sections/work";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Footer from "./sections/footer";
import Navigation from "./sections/navigation";
import Contact from "./sections/contact";
import Stars from "./components/Stars";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const sections = ["work", "projects", "skills", "contact"];

  const anchorStyle = "h-0 m-0 pb-24";

  const scrollTo = (location: string) => {
    switch (location) {
      case "top":
        topRef.current?.scrollIntoView();
        break;
      case "work":
        workRef.current?.scrollIntoView();
        break;
      case "projects":
        projectsRef.current?.scrollIntoView();
        break;
      case "skills":
        skillsRef.current?.scrollIntoView();
        break;
      case "contact":
        contactRef.current?.scrollIntoView();
        break;
      default:
        break;
    }
  };

  return (
    <div className="body-container overflow-x-hidden">
      <Navigation scrollTo={scrollTo} sections={sections} />
      <Stars position="top" />
      <div className={anchorStyle} ref={topRef} />
      <Header />
      <div className={anchorStyle} ref={workRef} />
      <Work />
      <div className={anchorStyle} ref={projectsRef} />
      <Projects />
      <div className={anchorStyle} ref={skillsRef} />
      <Skills />
      <div className={anchorStyle} ref={contactRef} />
      <Contact />
      <Footer />
      <Stars position="bottom" />
    </div>
  );
}

export default App;
