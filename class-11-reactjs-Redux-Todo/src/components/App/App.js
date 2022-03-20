import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodos, fetchUser } from "../../actions";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todosReducer.todos);
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  console.log(userState);

  useEffect(() => {
    const returnedFucntion = fetchUser();
    dispatch(returnedFucntion);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const _todos = [...todos];
          _todos.push({ text: text, checked: false });

          dispatch({
            type: "updateTodos",
            payload: { todos: _todos },
          });
        }}
      >
        Add Todo
      </button>
      <div>
        <ul>
          {todos.map((t, index) => (
            <li key={"todo-" + index}>{t.text}</li>
          ))}
        </ul>
      </div>

      <div>{JSON.stringify(userState, null, 2)}</div>
    </div>
  );
}

export default App;
