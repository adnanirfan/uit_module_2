import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const counterValue = useSelector((state) => {
    return state.value;
  });
  const dispatch = useDispatch();

  console.log(counterValue);

  const increment = () => {
    dispatch({ type: "counter/incremented" });
  };

  const decrement = () => {
    dispatch({ type: "counter/decremented" });
  };

  return (
    <>
      <h1>Home</h1>
      <h2>{counterValue}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Home;
