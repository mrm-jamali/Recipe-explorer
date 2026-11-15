 import { useContext } from "react";
 import { RecipeSearchContext } from "@/app/context/RecipeSearchContext";


  export function useRecipeSearch() {
 const context =useContext(RecipeSearchContext)
  if (!context) {
    throw new Error("RecipeSearch must be used within RecipeSearchProvider");
  }
  return context
}