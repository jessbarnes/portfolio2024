import { useEffect, useRef, useState } from "react";
import Header from "./sections/header";
import Work from "./sections/work";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Footer from "./sections/footer";

function App() {
  const [scrolledPastNav, setScrolledPastNav] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const sections = ["work", "projects", "skills", "contact"];

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

  const Navigation = () => (
    <div
      className={`flex flex-row items-center justify-between w-full px-12 lg:justify-evenly ${
        scrolledPastNav
          ? "fixed top-0 bg-gradient-to-b from-white via-white/50 to-transparent pt-6 pb-12"
          : "py-6"
      }`}
    >
      {(scrolledPastNav ? ["top", ...sections] : sections).map((s) => (
        <button
          onClick={() => scrollTo(s)}
          className={`font-bold uppercase lg:text-lg ${
            scrolledPastNav
              ? "text-blue-800 hover:text-black"
              : "text-white hover:text-blue-900"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body-container">
      <div className="h-0 m-0 p-0" ref={topRef} />
      <Header />
      <Navigation />
      <div className="h-0 m-0 p-0 pb-24" ref={workRef} />
      <Work />
      <div className="h-[1000px]">1000px height buffer</div>
      <div className="h-0 m-0 p-0 pb-24" ref={projectsRef} />
      <Projects />
      <div className="h-[1000px]">1000px height buffer</div>
      <div className="h-0 m-0 p-0 pb-24" ref={skillsRef} />
      <Skills />
      <div className="h-[1000px]">1000px height buffer</div>
      <div className="h-0 m-0 p-0 pb-24" ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
