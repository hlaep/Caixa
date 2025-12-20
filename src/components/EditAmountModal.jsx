import { useState } from "react";
import "../styles/EditAmountModal.css";

export default function EditAmountModal({ setShowEditAmount, editionType }) {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    const v = e.target.value;

    if (v === "") {
      setAmount("");
      return;
    }

    if (/^\d*\.?\d*$/.test(v)) {
      setAmount(v);
    }
  };

  const handleCancel = () => {
    setShowEditAmount(false);
  };

  const editCash = (event, editionType) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          <h2>{editionType === "add" ? "Depositar" : "Retirar"} valor</h2>
          <form onSubmit={(e) => editCash(e, editionType)}>
            <input
              placeholder="00,00"
              type="text"
              value={amount}
              onChange={handleAmountChange}
              inputMode="decimal"
              min="0"
              pattern="^\d*\.?\d*$"
            />
          </form>
          <div className="buttons-container">
            <button onClick={() => handleCancel()} className="cancel-btn">
              Cancelar
            </button>
            <button>Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
}
