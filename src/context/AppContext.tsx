import { createContext, Dispatch, useReducer } from "react";
import { Actions } from "../actions";
import {
  initialState,
  appReducer,
} from "../reducers/appReducer";
import { State } from "../types";

interface ContextProviderProps {
  children: React.ReactNode;
}

type AppContextType = {
  state: State;
  dispatch: Dispatch<Actions>;
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};