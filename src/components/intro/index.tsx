import profileImage from "./ChrisParsons.jpeg";

const Intro = (): JSX.Element => {
  return (
    <div className="intro">
      <div>
        <img src={profileImage} alt="Chris Parsons" className="profile-image" />
        <p className="header-text">
          Hey there, I'm <span className="dev-name">Chris Parsons</span>
        </p>
        <p className="header-subtitle">A Software Engineer based in London.</p>
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
