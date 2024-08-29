import { BaseCardStyle } from "../../components/RowCard";
import skills from "./skills";
import tools from "./tools";

const Skills = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Skills</h1>
        <h2>Languages</h2>
        <div className={BaseCardStyle}>
          <p>{skills.map((s) => s).join(", ")}</p>
        </div>
        <h2>Technologies</h2>
        <div className={BaseCardStyle}>
          <p>{tools.map((s) => s).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
