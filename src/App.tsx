import { useRef } from "react";
import Header from "./sections/header";
import Work from "./sections/work";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Footer from "./sections/footer";
import Navigation from "./sections/navigation";
import Contact from "./sections/contact";
import Stars from "./components/Stars";
import { AiFillCaretDown } from "react-icons/ai";

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const sections = ["work", "projects", "skills", "contact"];

  const anchorStyle = "pb-12"; // Allows header to be visible below navbar

  const scrollTo = (location: string) => {
    switch (location) {
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "work":
        workRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="body-container overflow-x-hidden">
      <Navigation scrollTo={scrollTo} sections={sections} />
      <Stars position="top" />
      <Header />
      <div className="section-container mt-8 mb-12 lg:mb-24">
        <div className="section-subcontainer">
          <div className="relative bg-white bg-opacity-10 rounded-full py-8 px-12 text-center">
            <h2>Welcome!</h2>
          </div>
          <button
            className="clickable-white-icon -mt-8 hover:!text-white/50 hover:-mt-7"
            onClick={() =>
              workRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <AiFillCaretDown />
          </button>
        </div>
      </div>
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
