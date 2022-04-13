const Timeline = (): JSX.Element | null => {
  return process.env.REACT_APP_FEATURE_TIMELINE === "true" ? (
    <div className="timeline">
      <h1>Timeline</h1>
      <div className="job-card">
        <h2 className="company">Babylon Health</h2>
        <h3 className="position">Software Engineer</h3>
        <p className="dates">January 2022 - Present</p>
      </div>

      <div className="job-card">
        <h2 className="company">Made Tech</h2>
        <h3 className="position">Software Engineer</h3>
        <p className="dates">June 2018 - December 2021</p>
      </div>

      <div className="job-card">
        <h2 className="company">Real Asset Management</h2>
        <h3 className="position">Technical Support Consultant</h3>
        <p className="dates">November 2013 - March 2018</p>
      </div>
    </div>
  ) : null;
};

export default Timeline;
