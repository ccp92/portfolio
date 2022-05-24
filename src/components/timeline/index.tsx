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
        <p>
          My main role of supporting clients over the phone and email enabled me
          to cultivate my ability to communicate effectively and with a
          professional demeanour. In addition, the unscripted support required
          me to be able to adapt quickly to varying queries and problems, whilst
          also being able to both understand a query and deliver concise and
          clearly understandable responses promptly. I also went on-site with
          clients and provided training and other supplementary services.
        </p>
        <p>
          In addition to my main support duties at the company, I also expanded
          my responsibilities to other areas. An example of this was regularly
          being involved in the QA process for the software and the accurate
          logging of issues for developers to be able to review.
        </p>
        <p>
          Within my first year at the company, I also gained a secondary role of
          looking after documentation and help files for the software suite. The
          process for this exposed me to both documentation writing and
          publishing. I completed this through the use of Adobe RoboHelp to
          create both chm and html files. I managed these additional
          responsibilities without impacting my core role of support through
          appropriate time management and prioritisation of tasks.
        </p>
      </div>
    </div>
  ) : null;
};

export default Timeline;
