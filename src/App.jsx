import { useState } from "react";
import Cashier from "./components/Cashier.jsx";
import EditAmountModal from "./components/EditAmountModal.jsx";
import "./styles/App.css";
import AddSaleModal from "./components/AddSaleModal.jsx";

export default function App() {
  const [showEditAmount, setShowEditAmount] = useState(false);
  const [showAddSale, setShowAddSale] = useState(false);
  const [editionType, setEditionType] = useState("");
  return (
    <>
      <Cashier
        setShowEditAmount={setShowEditAmount}
        setEditionType={setEditionType}
        setShowAddSale={setShowAddSale}
      />
      {showEditAmount && (
        <EditAmountModal
          setShowEditAmount={setShowEditAmount}
          editionType={editionType}
        />
      )}
      {showAddSale && <AddSaleModal setShowAddSale={setShowAddSale} />}

      <h2>Histórico (depósitos, retiradas e vendas)</h2>
    </>
  );
}
