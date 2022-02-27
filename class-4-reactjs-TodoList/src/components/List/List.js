import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(["123", "asd", "sdfsd", "sdvxcv", "sfdsf"]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const renderList = () => {
    // red, blue, green, red, blue, green
    return list.map((content, index) => (
      <ListItem>
        <li
          key={`list-1-${index}`}
          style={{
            backgroundColor:
              index % 3 === 0 ? "red" : index % 3 === 1 ? "green" : "blue",
          }}
        >
          {content}
        </li>
        {/* <h2>TODO</h2> */}
      </ListItem>
    ));
  };

  const addTodo = (event) => {
    console.log(event);
    const x = [...list];
    x.push(text);
    setList(x);
    setText("");
  };

  return (
    <div className="list">
      <input value={text} onChange={onChange} />
      <button onClick={addTodo}>Add</button>
      <ul>
        <hr />
        {renderList()}
      </ul>
    </div>
  );
};

export default List;
