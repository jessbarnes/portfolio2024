import RowCard from "../../components/RowCard";
import formatDate from "../../utils/formatDate";
import sortByDate from "../../utils/sortByDate";
import jobs from "./jobs";

const Work = () => {
  return (
    <div className="section-container">
      <div className="section-subcontainer">
        <h1>History</h1>
        <h2>Work</h2>
        {sortByDate(jobs).map((w) => (
          <RowCard
            key={`history-${w.company}-${w.title}`}
            title={w.company}
            subtitle={w.title}
            dateRange={`
                ${formatDate(w.startDate)} - ${
              w.endDate ? formatDate(w.endDate) : "Current"
            }`}
            description={w.description}
          />
        ))}
        <h2>Education</h2>
        <RowCard
          title="University of the People"
          subtitle="B.S. Computer Science"
          dateRange="2016 - 2020"
        />
        <RowCard
          title="Noblesville High School"
          subtitle="Technical Honors Diploma"
          dateRange="2012 - 2016"
        />
      </div>
    </div>
  );
};

export default Work;
