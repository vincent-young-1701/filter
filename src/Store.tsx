import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { StateInterface } from "./Interfaces";

const initialState: StateInterface = {
  keywords: [],
  filtered: [],
  loading: true,
};

const Store = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext<any>(initialState);
export default Store;
