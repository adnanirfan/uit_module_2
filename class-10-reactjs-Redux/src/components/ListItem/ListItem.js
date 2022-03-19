import React from "react";
import { Link, use, useHistory } from "react-router-dom";
import "./ListItem.css";

const ListItem = (props) => {
  const history = useHistory();

  return (
    <li>
      <button
        onClick={() => {
          history.push("/user_detail/" + props.content.id, props.content);
        }}
      >
        {props.content.name}
      </button>
    </li>
  );
};
export default ListItem;
