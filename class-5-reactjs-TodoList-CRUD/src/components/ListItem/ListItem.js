import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  // const color =
  //   props.index % 3 === 0 ? "red" : props.index % 3 === 1 ? "green" : "blue";

  // let color1 = "";
  // if (props.index % 3 === 0) {
  //   color1 = "red";
  // } else if (props.index % 3 === 1) {
  //   color1 = "green";
  // } else {
  //   color1 = "blue";
  // }
  const getColor = () => {
    if (props.index % 3 === 0) {
      return "item-red";
    } else if (props.index % 3 === 1) {
      return "item-green";
    } else {
      return "item-blue";
    }
  };

  return (
    <li
      className={getColor()}
      // className="list-item"
      /* style={{ backgroundColor: color1 }} */
    >
      {props.content}

      <button
        onClick={() => {
          props.editTodo(props.index);
        }}
      >
        Edit
      </button>

      <button
        onClick={() => {
          props.removeTodo(props.index);
        }}
      >
        Remove
      </button>
    </li>
  );
};
export default ListItem;
