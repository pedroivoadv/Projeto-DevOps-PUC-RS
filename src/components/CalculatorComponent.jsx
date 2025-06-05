import React, { useState } from "react";
import { CalculatorService } from "../services/CalculatorService";
import { AddOperation } from "../services/operations/AddOperation";
import { SubtractOperation } from "../services/operations/SubtractOperation";
import "../styles/calculator.css";

const CalculatorComponent = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = (OperationClass) => {
    const op = new OperationClass();
    const service = new CalculatorService(op);
    const res = service.calculate(Number(a), Number(b));
    setResult(res);
  };

  const handleClear = () => {
    setA("");
    setB("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Número A"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Número B"
      />
      <div>
        <button onClick={() => handleCalculate(AddOperation)}>Somar</button>
        <button onClick={() => handleCalculate(SubtractOperation)}>Subtrair</button>
        <button onClick={handleClear} style={{ backgroundColor: "#777", marginLeft: "10px" }}>
          Limpar
        </button>
      </div>
      <div className="result">Resultado: {result}</div>
    </div>
  );
};

export default CalculatorComponent;