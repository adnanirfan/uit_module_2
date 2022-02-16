function Counter(props) {
  const increment = () => props.setValue(props.value + 1);
  const decrement = () => props.setValue(props.value - 1);

  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
