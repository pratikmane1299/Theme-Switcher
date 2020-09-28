import React from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { useTheme } from './hooks/useTheme';

import AppTheme from "./theme";


export const ThemeContext = React.createContext();

function App() {
  const [theme, toggleTheme] = useTheme();

  const currentTheme = AppTheme[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="App"
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
        }}
      >
        <h1 style={{ color: `${currentTheme.textColor}` }}>Theme Switcher</h1>
        <div className="App__body">
          <p
            style={{
              color: currentTheme.paragraphColor,
            }}
          >
            The theme switcher uses React Context API to manage the current
            theme state.
          </p>
          <p
            style={{
              color: currentTheme.paragraphColor,
            }}
          >
            Click on the icon below to change theme.
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
