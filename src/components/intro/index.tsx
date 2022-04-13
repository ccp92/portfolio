const Intro = (): JSX.Element => {
  return (
    <div className="intro">
      <div>
        <p className="header-text">
          Hey there, I'm <span className="dev-name">Chris Parsons</span>, a
          Software Engineer.
        </p>
        <div className="button-row">
          <a
            className="action-button main-action-button"
            data-test="main-action-button"
            href="https://github.com/ccp92"
          >
            Github profile
          </a>
          <a
            className="action-button"
            data-test="action-button"
            href={`mailto:${process.env.REACT_APP_EMAIL_ADDRESS}`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
