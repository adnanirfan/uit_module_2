import React from "react";
import ThemeContext from "../../ThemeContext";

function Toolbar(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {(theme) => {
          console.log(theme);
          return (
            <button
              style={{
                backgroundColor: theme[theme.mode].primaryColor,
              }}
            >
              BUTTON
            </button>
          );
        }}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Toolbar;
