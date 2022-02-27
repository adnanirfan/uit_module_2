import React from "react";
import "./ListItem.css";

const ListItem = (...r) => {
  console.log(r);
  const [props] = r;
  return props.children;
  return (
    <li style={{ backgroundColor: "blue" }} className="list-item">
      {props.content}
    </li>
  );
};
export default ListItem;
