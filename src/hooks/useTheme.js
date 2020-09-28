import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      window.localStorage.setItem('theme', theme);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = (theme) => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme);
  }

  return [theme, toggleTheme];
}