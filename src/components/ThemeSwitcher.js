import React from "react";

import { ThemeContext } from "../App";
import AppTheme from "./../theme";

const ThemeSwitcher = () => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => {
      const currentTheme = AppTheme[theme];
      return (
        <div style={{ marginTop: "1.5rem" }}>
          <span style={{ color: currentTheme.textColor, fontSize: '1.2rem' }}>
            Current Theme - {theme}
          </span>
          <div
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => toggleTheme(theme)}
          >
            <span>{theme === "light" ? "🌙" : "☀️"}</span>
          </div>
        </div>
      );
    }}
  </ThemeContext.Consumer>
);

export default ThemeSwitcher;
