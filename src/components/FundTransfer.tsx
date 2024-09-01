import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ErrorPage from "./ErrorPage";
import FundTransferForm from "./FundTransferForm";
import Header from "./ui/Header";

export default function FundTransfer() {
  const { state } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-2 items-center">
      <Header title={"Fund transfer form"} />
      <p className="text-l font-semibold">
        Please fill in the form to make a transfer.
      </p>
      {state.transactions.length > 0 && state.accountIds.length > 0 ? (
        <FundTransferForm accountIds={state?.accountIds} />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
