import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/intro";
import ThemeButton from "./components/themeButton";
import Timeline from "./components/timeline";

const App = () => {
  const DEFAULT_COLOUR_SCHEME = "dark";
  const [theme, setTheme] = useState(DEFAULT_COLOUR_SCHEME);

  const useThemeDetector = () => {
    const currentTheme = () =>
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const [isLightTheme, setIsLightTheme] = useState(currentTheme());

    const mqListener = (e: any) => {
      setIsLightTheme(e.matches);
    };

    useEffect(() => {
      const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
      lightThemeMq.addEventListener("change", () => mqListener);
      return () => lightThemeMq.removeEventListener("change", () => mqListener);
    }, []);
    console.log(isLightTheme);
    return isLightTheme;
  };

  const isLightTheme = useThemeDetector();

  useEffect(() => {
    if (isLightTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="row">
        <div className="column-left">
          <ThemeButton toggleTheme={() => toggleTheme()} theme={theme} />
          <Intro />
        </div>
        <div className="column-right">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default App;
