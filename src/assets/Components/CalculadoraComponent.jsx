import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);

  // Logic:
  // Define a function called multiplicar.
  // The function receives a parameter valorPorMultiplicar.
  // Calculate a new value by multiplying the current state multiplicador by valorPorMultiplicar.
  // Check the result of the multiplication.
  // If the result is 0, reset the state to 1.
  // Otherwise, update the state with the calculated result.

  const multiplicar = (valorPorMultiplicar) => {
    const nuevoValor = multiplicador * valorPorMultiplicar;

    if (nuevoValor === 0) {
      setMultiplicador(1);
    } else {
      setMultiplicador(nuevoValor);
    }
  };

  return (
    <div>
      <div>
        <h1>Calculadora</h1>
        <div>
          <span>El resultado del multiplicador es {multiplicador}</span>
        </div>
        <div>
          {/* No is the ideal way of doing */}
          <button onClick={() => multiplicar(2)}>X2</button>
          <button onClick={() => multiplicar(3)}>X3</button>
        </div>
      </div>
    </div>
  );
};
export default CalculadoraComponent;
