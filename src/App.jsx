import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="cashier">
        <div className="info">
          <h2>Valor em caixa:</h2>
          <p>R$ 99,00</p>
        </div>
        <div className="edit-buttons">
          <button>Depositar valor</button>
          <button>Retirar valor</button>
        </div>
      </div>
    </>
  );
}

export default App;
