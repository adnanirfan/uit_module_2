import React, { useContext } from "react";
import UserContext from "../../UserContext";

function Profile(props) {
  const { userDetails, setUserDetails } = useContext(UserContext);

  return (
    <div>
      {JSON.stringify(userDetails, null, 2)}
      <button onClick={() => setUserDetails({ username: new Date() })}>
        Change
      </button>
    </div>
  );
}

export default Profile;
