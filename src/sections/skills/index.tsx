import { BaseCardStyle } from "../../components/RowCard";
import { languages, tools } from "./list";

const Skills = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Skills</h1>
        <h2>Languages</h2>
        <div className={BaseCardStyle}>
          <p>{languages.map((l) => l).join(", ")}</p>
        </div>
        <h2>Technologies</h2>
        <div className={BaseCardStyle}>
          <p>{tools.map((t) => t).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
