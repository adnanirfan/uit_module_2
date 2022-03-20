const updateTodos = (todos) => ({
  type: "updateTodos",
  payload: { todos: todos },
});

function fetchUser() {
  // The `extraArgument` is the third arg for thunk functions
  return (dispatch) => {
    // you can use api here
    dispatch({ type: "updateUserDetailLoading", payload: true });

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("2nd", data);

        dispatch({ type: "updateUserDetail", payload: data });
        dispatch({ type: "updateUserDetailLoading", payload: false });
      })
      .catch((error) => {
        console.log("FAILED", error);
        dispatch({ type: "updateUserDetailLoading", payload: false });
      });
  };
}

export { updateTodos, fetchUser };
