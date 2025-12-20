import { useState } from "react";
import { formatBRL } from "../utilities";

export default function Cashier({ setShowEditAmount, setEditionType }) {
  const [cash, setCash] = useState(0);
  const showEditAmount = () => {
    setEditionType("add");
    setShowEditAmount(true);
  };

  const showRemoveAmount = () => {
    setEditionType("remove");
    setShowEditAmount(true);
  };

  return (
    <div className="cashier">
      <div className="info">
        <h2>Valor em caixa:</h2>
        <p>{formatBRL(cash)}</p>
      </div>
      <div className="buttons-container">
        <button onClick={() => showEditAmount()}>Depositar valor</button>
        <button onClick={() => showRemoveAmount()}>Retirar valor</button>
      </div>
    </div>
  );
}
