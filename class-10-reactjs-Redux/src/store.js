import { createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
  if (action.type === "counter/incremented") {
    return { value: state.value + 1 };
  } else if (action.type === "counter/decremented") {
    return { value: state.value - 1 };
  }
  return state;
}

const store = createStore(counterReducer);

export { store };
