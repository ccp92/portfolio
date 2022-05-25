import JobCard from "../jobCard";
import jobs from "../../data/jobHistory.json";

const upArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-up-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>
  );
};

const Timeline = () => {
  const jobsCards = jobs.map((job: any, index: number) => {
    return (
      <>
        <JobCard
          key={index}
          company={job.company}
          position={job.position}
          dates={job.dates}
          description={job.description}
        />
        {index !== jobs.length - 1 ? upArrow() : null}
      </>
    );
  });

  return <div className="timeline">{jobsCards}</div>;
};

export default Timeline;
