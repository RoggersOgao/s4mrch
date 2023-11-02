"use client";
import { createContext, useReducer } from "react";
import SiteReducer from "./SiteReducer";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const initialState = {
    sideNav_Active: true,
    transactionsModalActive:false,
  };

  const [state, dispatch] = useReducer(SiteReducer, initialState);
  return (
    <SiteContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
export default SiteContext;
