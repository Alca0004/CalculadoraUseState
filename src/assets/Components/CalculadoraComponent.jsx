import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);

  return (
    <div>
      <div>
        <h1>Calculadora</h1>
        <div>
          <span>El resultado del multiplicador es {multiplicador}</span>
        </div>
        <div>
          {/* No es la manera ideal de hacerlo */}
          {/* <button onClick={() => setMultiplicador(multiplicador === 0 ? 1 : multiplicador * 2)}>X2</button> */}
          <button onClick={() => setMultiplicador(multiplicador * 3)}>X3</button>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraComponent;
