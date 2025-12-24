import { useState } from "react";

import "./App.css";
import CalculadoraComponent from "./assets/Components/CalculadoraComponent";
import MultiplicadorComponent from "./assets/Components/MultiplicadorComponent";

function App() {
  return (
    <>
      <MultiplicadorComponent />
      <hr />
      <CalculadoraComponent />
    </>
  );
}

export default App;
