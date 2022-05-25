interface JobCardProps {
  company: string;
  position: string;
  dates: string;
  description: string[];
}

const JobCard = (props: JobCardProps) => {
  return (
    <div className="job-card">
      <h2 className="company">{props.company}</h2>
      <h3 className="position">{props.position}</h3>
      <p className="dates">{props.dates}</p>
      {props.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default JobCard;
