import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [list, setList] = useState(["123", "asd", "sdfsd", "sdvxcv", "sfdsf"]);
  const [list1, setList1] = useState([
    "fsdfds",
    "32423",
    "435",
    "23123",
    "zxczxc",
  ]);
  return (
    <div className="list">
      <ul>
        {list.map((content, index) => (
          <li key={`list-1-${index}`}>{content}</li>
        ))}
        <hr />
        {list1.map((content, index) => {
          console.log(content);
          return <li key={`list-2-${index}`}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
