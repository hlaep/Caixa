import { useState } from "react";
import Cashier from "./components/Cashier.jsx";
import EditAmountModal from "./components/EditAmountModal.jsx";
import "./styles/App.css";

export default function App() {
  const [showEditAmount, setShowEditAmount] = useState(false);
  const [editionType, setEditionType] = useState("");
  return (
    <>
      <Cashier
        setShowEditAmount={setShowEditAmount}
        setEditionType={setEditionType}
      />
      {showEditAmount && (
        <EditAmountModal
          setShowEditAmount={setShowEditAmount}
          editionType={editionType}
        />
      )}
    </>
  );
}
