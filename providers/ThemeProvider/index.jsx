import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default ThemeProvider;
