import RowCard from "../../components/RowCard";
import formatDate from "../../utils/formatDate";
import sortByDate from "../../utils/sortByDate";
import { personalProjects, workProjects } from "./list";

const Projects = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Projects</h1>
        <h2>Work</h2>
        {sortByDate(workProjects).map((p) => (
          <RowCard
            key={`project-${p.title}`}
            title={p.title}
            subtitle={p.company}
            dateRange={`
                ${formatDate(p.startDate)} - ${formatDate(p.endDate)}`}
            description={p.description}
          />
        ))}
        <h2>Personal</h2>
        {personalProjects.map((p) => (
          <RowCard
            key={`project-${p.title}`}
            title={p.title}
            subtitle={p.company}
            dateRange={`
                ${formatDate(p.startDate)} - ${formatDate(p.endDate)}`}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
