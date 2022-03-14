import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

/**
 * 1. Mount
 * 2. useEffect -> API call
 * 3. setState(setUserDetail)
 * 4. Render
 */

const UserDetails = () => {
  const [userDetail, setUserDetail] = useState({});

  const history = useHistory();
  const location = useLocation();

  const onClick = () => {
    console.log(location, history);
    history.goBack();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log("1st");
        return response.json();
      })
      .then((json) => {
        console.log("2nd", json);
        setUserDetail(json);
      })
      .catch((error) => {
        // if(){
        //   history.push("/login");

        // }
        console.log("FAILED", error);
      })
      .finally(() => {
        console.log("finally");
      });

  return (
    <div>
      <button onClick={onClick}>Go Back</button>

      <h1>User Details</h1>
      {userDetail.id}
      <br />
      {userDetail.title}
    </div>
  );
};

export default UserDetails;
