"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface GlobalProviderProps {
  children: React.ReactNode;
}

type GlobalValue = {
  openmodal: string;
  setOpenmodal: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalValue | null>(null);

export function GlobalProvider(props: GlobalProviderProps) {
  const [openmodal, setOpenmodal] = useState("");

  const value: GlobalValue = {
    openmodal,
    setOpenmodal,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }

  return context;
}
