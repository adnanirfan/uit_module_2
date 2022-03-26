import React from "react";

// const initialValue = "light";
const themeConfig = {
  mode: "dark",
  light: {
    primaryColor: "blue",
    secondaryColor: "black",
  },
  dark: {
    primaryColor: "red",
    secondaryColor: "orange",
  },
};
export { themeConfig };

const ThemeContext = React.createContext(themeConfig);

export default ThemeContext;
