import React, { use, useState } from "react";

const MultiplicadorComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");

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
      setInfoMessage("El valor era 0 pero te le he cambiado a 1");
      setMultiplicador(1);
    } else {
      setMultiplicador(nuevoValor);
      setInfoMessage("");
    }
  };

  const reset = () => {
    setMultiplicador(0);
  };

  return (
    <div>
      <div>
        <h1>Multiplicador</h1>
        <div>
          <p>El resultado del multiplicador es {multiplicador}</p>
          <p>{infoMessage}</p>
        </div>
        <div>
          <button onClick={() => multiplicar(2)}>X2</button>
          <button onClick={() => multiplicar(3)}>X3</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default MultiplicadorComponent;
