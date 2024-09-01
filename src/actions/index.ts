import { Transaction } from "../types";

export enum ActionTypes {
  SET_TRANSACTIONS,
  ADD_NEW_TRANSACTION,
  FORMAT_TRANSACTIONS_DATA,
  SET_ACCOUNTS,
}

export type SetTransactionAction = {
  type: ActionTypes.SET_TRANSACTIONS;
  payload: Transaction[];
};

export type AddNewTransactionAction = {
  type: ActionTypes.ADD_NEW_TRANSACTION;
  payload: Transaction | {};
};

export type FormatTransactionsDataAction ={
  type: ActionTypes.FORMAT_TRANSACTIONS_DATA
}

export type SetAccountAction = {
  type: ActionTypes.SET_ACCOUNTS;
};

export type Actions =
  | SetTransactionAction
  | AddNewTransactionAction
  | FormatTransactionsDataAction
  | SetAccountAction;
