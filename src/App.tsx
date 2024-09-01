import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Transactions from "./components/Transactions";
import Home from "./components/Home";
import {
  Route,
  Routes,
} from "react-router-dom";
import { getTransactionsService } from "./utils/services";
import { Transaction } from "./types";

import { ActionTypes } from "./actions";
import Navbar from "./components/NavBar";
import FundTransferForm from "./components/FundTransfer";
import PageNotFound from "./components/PageNotFound";

function App() {
  const {  dispatch } = useContext(AppContext);

  useEffect(() => {
    getTransactionsService()
      .then((transactions: Transaction[]) => {
        dispatch({
          type: ActionTypes.SET_TRANSACTIONS,
          payload: transactions,
        });
        dispatch({type:ActionTypes.FORMAT_TRANSACTIONS_DATA})
        dispatch({ type: ActionTypes.SET_ACCOUNTS })
      })
      .catch((error: any) => {
        console.error("Failed to fetch transactions:", error);
      });
  }, [dispatch]);

  return (
    <div className="border-box">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="fund-transfer" element={<FundTransferForm />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
