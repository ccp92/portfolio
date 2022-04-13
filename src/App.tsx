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
        <div className="column-left">
          <Intro />
        </div>
        <div className="column-right">
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
