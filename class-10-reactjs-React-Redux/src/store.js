import { createStore } from "redux";

function counterReducer(state1 = { value: 0 }, action) {
  if (action.type === "counter/incremented") {
    return { value: state1.value + 1 };
  } else if (action.type === "counter/decremented") {
    return { value: state1.value - 1 };
  }
  return state1;
}

const store = createStore(counterReducer);

export { store };
