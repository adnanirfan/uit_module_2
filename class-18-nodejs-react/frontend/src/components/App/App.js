import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [idToEdit, setIdToEdit] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todos");
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = () => {
    axios
      .post("http://localhost:4000/add-todo", {
        todo: text,
        isCompleted: false,
      })
      .then(function (response) {
        console.log(response.data);
        setText("");
        fetchTodos();
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };

  const updateTodo = () => {
    axios
      .put("http://localhost:4000/update-todo/" + idToEdit, {
        todo: text,
        isCompleted: false,
      })
      .then(function (response) {
        console.log(response.data);
        setText("");
        fetchTodos();
        setIdToEdit("");
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete("http://localhost:4000/delete/" + id)
      .then(function (response) {
        console.log(response.data);
        fetchTodos();
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };

  const editTodo = (todo) => {
    setIdToEdit(todo._id);
    setText(todo.todo);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {idToEdit ? (
        <button onClick={updateTodo}>Update Todo</button>
      ) : (
        <button onClick={addTodo}>Add Todo</button>
      )}
      <div>
        <ul>
          {todos.map((t, index) => (
            <li key={"todo-" + index}>
              {t.todo}
              <button onClick={() => editTodo(t)}>Edit</button>
              <button onClick={() => deleteTodo(t._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
