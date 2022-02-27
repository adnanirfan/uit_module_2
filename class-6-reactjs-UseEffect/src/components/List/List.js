import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = () => {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState(["123", "asd", "sdfsd", "sdvxcv", "sfdsf"]);

  /**
   * 1. Mount
   * 2. Change in Dependency
   */
  useEffect(() => {
    console.log("Mounted or Any State Changed");
  });

  useEffect(() => {
    console.log("Only on Mount ");
  }, []);

  useEffect(() => {
    console.log("Mounted or State Changed on dependency change");
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
      {editIndex === null ? (
        <button onClick={addTodo}>Add</button>
      ) : (
        <button onClick={updateTodo}>Update</button>
      )}
      {/* {!list.length ? <h1>No Record Found</h1> : null} */}
      {/* {!list.length && <h1>No Record Found</h1>} */}
      <ul>
        <hr />
        {renderList()}
      </ul>
      {list.length} Item Remaining
    </div>
  );
};

export default List;
