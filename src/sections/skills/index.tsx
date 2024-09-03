import { BaseCardStyle } from "../../components/RowCard";
import { mainSkills } from "./list";

const Skills = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Skills</h1>
        <div className={BaseCardStyle}>
          <h3>My main stack is:</h3>
          <p>{mainSkills.map((m) => m).join(", ")}</p>
          <br />
          <p>
            This is what I'm most familiar with, but I'm adaptive and quick to
            pick up new things, as proven by my personal projects. I love to
            throw myself into something new, and I'm always looking for
            opportunities to push myself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
