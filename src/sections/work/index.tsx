import RowCard from "../../components/RowCard";
import formatDate from "../../utils/formatDate";
import history from "./history";

const Work = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>Work History</h1>
        {history
          .sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )
          .map((w) => (
            <RowCard
              key={`history-${w.company}`}
              title={w.company}
              subtitle={w.title}
              dateRange={`
                ${formatDate(w.startDate)} - ${formatDate(w.endDate)}`}
              description={w.description}
            />
          ))}

        <h1>Education</h1>
        <RowCard
          title="University of the People"
          subtitle="B.S. Computer Science"
          dateRange="2016 - 2020"
        />
      </div>
    </div>
  );
};

export default Work;
