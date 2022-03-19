import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

/**
 * 1. Mount
 * 2. useEffect -> API call
 * 3. setState(setUserDetail)
 * 4. Render
 */

const UserDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  const [userDetail, setUserDetail] = useState(location.state);
  console.log("UserDetails: ", props, location);

  return (
    <div>
      <button>Go Back</button>

      <h1>User Details</h1>

      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{userDetail.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{userDetail.name}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default UserDetails;
