"use client"
import { createContext, type ReactNode } from "react";
import { useState } from "react";

type RecipeSearchContextType = {
  search: string;
  setSearch: (value: string) => void;
};
type RecipeSearchProviderProps = {
  children: ReactNode;
};

export const RecipeSearchContext =
  createContext<RecipeSearchContextType | null>(null);

export function RecipeSearchProvider({ children }: RecipeSearchProviderProps) {
  const [search, setSearch] = useState("");

  return (
     <RecipeSearchContext.Provider value={{ search, setSearch }}>
    {children}
  </RecipeSearchContext.Provider>
  )
 
}
