import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = () => {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [list, setList] = useState([
    { id: 0, name: "hasan" },
    { id: 1, name: "adnan" },
    { id: 2, name: "isfhan" },
    { id: 3, name: "haris" },
    { id: 4, name: "Abdullah" },
    { id: 5, name: "Mahnoor" },
  ]);

  /**
   * 1. Mount
   * 2. Change in Dependency
   */
  useEffect(() => {
    console.log("Mounted or Any State Changed");
  });

  useEffect(() => {
    console.log("Only on Mount ");

    const listener = (event) => {
      console.log("KEY CODE", event.key, event.keyCode);
    };
    window.addEventListener("keyup", listener);

    return () => {
      console.log("Unmount");
      window.removeEventListener("keyup", listener);
    };
  }, []);

  useEffect(() => {
    if (text) {
      console.log("Mounted or State Changed on dependency change");
    }
  }, [text]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const renderList = () => {
    if (!list.length) {
      return "No record Found";
    }
    return list.map((content, index) => (
      <ListItem
        key={"list-item" + index}
        content={content}
        removeTodo={removeTodo}
        editTodo={editTodo}
        index={index}
      ></ListItem>
    ));
  };

  const addTodo = (event) => {
    console.log(event);
    const x = [...list];
    x.push(text);
    setList(x);
    setText("");
  };

  const removeTodo = (index) => {
    console.log("Remove TODO", index);
    const x = [...list];
    x.splice(index, 1);

    setList(x);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    const value = list[index];
    setText(value);
  };

  const updateTodo = () => {
    const x = [...list];
    x[editIndex] = text;
    setList(x);
    setText("");
    setEditIndex(null);
  };

  return (
    <div className="list">
      <input value={text} onChange={onChange} />
      <button
        onClick={() => {
          history.push(location.pathname + "?search=" + text);
        }}
      >
        Search
      </button>
      <ul>
        <hr />
        {renderList()}
      </ul>
      {list.length} Item Remaining
    </div>
  );
};

export default List;
