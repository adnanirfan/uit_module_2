import React, { useEffect, useState } from "react";

/**
 * 1. Mount
 * 2. useEffect -> API call
 * 3. setState(setUserDetail)
 * 4. Render
 */

const UserDetails = () => {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    console.log("Only on Mount ");
    // console.log(1);
    // setTimeout(() => {
    //   console.log(3);
    // });
    // console.log(2);

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
        console.log("FAILED", error);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      {userDetail.id}
      <br />
      {userDetail.title}
    </div>
  );
};

export default UserDetails;
