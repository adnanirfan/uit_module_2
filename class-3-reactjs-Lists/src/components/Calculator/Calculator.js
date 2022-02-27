import { useState } from "react";
import React from "react";
import "./Calculator.css";

const Calculator1 = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    console.log(calc + value);
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deletevalue = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(value);
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="calculator">
      <div className="display">
        {result ? <span>{result}</span> : ""}

        {calc || 0}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => deletevalue()}>DEL</button>
      </div>
      <div className="digits">
        {createDigits()}
        {/* <button onClick={() => updateCalc("0")}>0</button> */}

        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator1;
