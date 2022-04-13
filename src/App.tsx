import "./App.css";
import Intro from "./components/intro";
import Timeline from "./components/timeline";

const App = () => {
  const featureFlagOff = () => {
    return <Intro />;
  };

  const featureFlagOn = () => {
    return (
      <div className="row">
        <div className="column">
          <Intro />
        </div>
        <div className="column">
          <Timeline />
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      {process.env.REACT_APP_FEATURE_TIMELINE === "true"
        ? featureFlagOn()
        : featureFlagOff()}
    </div>
  );
};

export default App;
