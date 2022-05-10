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

const Timeline = (): JSX.Element | null => {
  return process.env.REACT_APP_FEATURE_TIMELINE === "true" ? (
    <div className="timeline">
      <h1>Experience</h1>
      <div className="job-card">
        <h2 className="company">Babylon Health</h2>
        <h3 className="position">Software Engineer</h3>
        <p className="dates">January 2022 - Present</p>
      </div>

      {upArrow()}

      <div className="job-card">
        <h2 className="company">Made Tech</h2>
        <h3 className="position">Software Engineer</h3>
        <p className="dates">June 2018 - December 2021</p>
      </div>

      {upArrow()}

      <div className="job-card">
        <h2 className="company">Real Asset Management</h2>
        <h3 className="position">Technical Support Consultant</h3>
        <p className="dates">November 2013 - March 2018</p>
      </div>
    </div>
  ) : null;
};

export default Timeline;
