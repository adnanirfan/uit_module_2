import React, { useEffect, useState } from "react";
import { store } from "../../store";
import "./Home.css";

const Home = () => {
  const state = store.getState();
  const [value, setValue] = useState(state.value);

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
      setValue(store.getState().value);
    });
  }, []);

  const increment = () => {
    store.dispatch({ type: "counter/incremented" });
  };
  const decrement = () => {
    store.dispatch({ type: "counter/decremented" });
  };

  return (
    <>
      <h1>Home</h1>
      <h2>Value: {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Home;
