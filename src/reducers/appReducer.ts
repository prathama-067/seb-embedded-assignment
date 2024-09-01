import { Actions } from "../actions";
import { ActionTypes } from "../actions";
import { State } from "../types";
import { filterUniqueAccountIds, getFormattedTransactions } from "../utils/helperFunctions";

export const initialState: State = {
  transactions: [],
  accountIds: [],
  accountInfo:[],
  formattedTransactions:[],
  newTransaction:{}
};

export const appReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case ActionTypes.ADD_NEW_TRANSACTION:
      return {
        ...state,
        newTransaction: action.payload
      };

    case ActionTypes.FORMAT_TRANSACTIONS_DATA:
      let formattedTransactionsList = getFormattedTransactions(state.transactions)
      return{
        ...state,
        formattedTransactions : formattedTransactionsList
      }

    case ActionTypes.SET_ACCOUNTS : 
      return {
        ...state,
        accountIds:filterUniqueAccountIds(state.transactions)
      }
  
    default:
      throw new Error("Unknown action type");
  }
};