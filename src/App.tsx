import { useState } from "react";
import "./App.css";
import Intro from "./components/intro";
import ThemeButton from "./components/themeButton";
import Timeline from "./components/timeline";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const featureFlagOff = () => {
    return (
      <>
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        <Intro />
      </>
    );
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
    <div className="App" data-theme={theme}>
      {process.env.REACT_APP_FEATURE_TIMELINE === "true"
        ? featureFlagOn()
        : featureFlagOff()}
    </div>
  );
};

export default App;
