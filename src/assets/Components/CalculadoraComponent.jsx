import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const operation = (operationType) => {
    switch (operationType) {
      case "SUMAR":
        setResultado(num1 + num2);
        break;
      case "RESTAR":
        setResultado(num1 - num2);
        break;
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div>
        <h2>Valores</h2>
        <div>
          <span>Numero: 1</span>
          <input type="number" onChange={(e) => setnum1(Number.parseInt(e.target.value))} />
        </div>
        <div>
          <span>Numero: 2</span>
          <input type="number" onChange={(e) => setnum2(Number.parseInt(e.target.value))} />
        </div>
        <button onClick={() => operation("SUMAR")}>Sumar</button>
        <button onClick={() => operation("RESTAR")}>Restar</button>
      </div>
      {resultado ? (
        <div>
          <h3>Resultado: {resultado}</h3>
        </div>
      ) : (
        <div>
          <h3> Aun no hay ningun resultado</h3>
        </div>
      )}
    </div>
  );
};

export default CalculadoraComponent;
