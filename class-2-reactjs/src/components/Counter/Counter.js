function Counter(props) {
  return (
    <>
      <h1>{props.value}</h1>
      <button onClick={() => props.setValue(props.value + 1)}>Increment</button>
      <button onClick={() => props.setValue(props.value - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
