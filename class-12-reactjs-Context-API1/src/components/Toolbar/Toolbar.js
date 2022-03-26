import React from "react";
import Profile from "../Profile/Profile";
function Toolbar(props) {
  return (
    <div>
      <Profile />
      <button
        style={{
          backgroundColor: "RED",
        }}
      >
        BUTTON
      </button>
    </div>
  );
}

export default Toolbar;
