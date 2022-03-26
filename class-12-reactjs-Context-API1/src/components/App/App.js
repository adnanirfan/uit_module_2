import React, { useState } from "react";
import UserContext from "../../UserContext";
import Toolbar from "../Toolbar/Toolbar";

const App = () => {
  const [userDetails, setUserDetails] = useState({ username: "Abdullah" });
  console.log(userDetails);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <Toolbar />
    </UserContext.Provider>
  );
};
export default App;
