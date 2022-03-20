import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {
  todos: [
    {
      text: "TODO 1 ",
      checked: true,
    },
    {
      text: "TODO 2 ",
      checked: false,
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  if (action.type === "updateTodos") {
    state.todos = action.payload.todos;
    return { ...state };
  } else return { ...state };
};

const userReducer = (
  state = {
    user: {},
    isLoading: false,
  },
  action
) => {
  if (action.type === "updateUserDetail") {
    state.user = action.payload;
    return { ...state };
  } else if (action.type === "updateUserDetailLoading") {
    state.isLoading = action.payload;
    return { ...state };
  } else return { ...state };
};

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(
  combineReducers({
    todosReducer,
    userReducer,
  }),
  middlewares
);

export default store;

// export { store };
