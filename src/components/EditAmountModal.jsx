import { useState } from "react";
import "../styles/EditAmountModal.css";

export default function EditAmountModal({ setShowEditAmount, editionType }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

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

  const closeModal = () => {
    setShowEditAmount(false);
    setAmount("");
    setDescription("");
  };

  const editCash = (event, editionType) => {
    event.preventDefault();
    console.log("mock", editionType, amount, new Date(), description);
    closeModal();
  };
  return (
    <div className="modal-wrapper">
      <form
        onSubmit={(e) => editCash(e, editionType)}
        className="edit-cash-modal"
      >
        <h2>{editionType === "add" ? "Depositar" : "Retirar"} valor</h2>

        <input
          placeholder="00,00"
          type="text"
          value={amount}
          onChange={(e) => handleAmountChange(e)}
          inputMode="decimal"
          min="0"
          pattern="^\d*\.?\d*$"
          autoFocus
          required
        />
        <input
          placeholder="Descrição (opcional)"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="buttons-container">
          <button
            onClick={() => closeModal()}
            className="cancel-btn"
            type="button"
          >
            Cancelar
          </button>
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </div>
  );
}
