"use client"
import type { Recipe } from "@/type/type";
import { useState,useEffect } from "react";
import { GetRecipeByName } from "../services/recipeService";
import RecipeSearchResults from "./RecipeSearchResults";

import { useRecipeSearch } from "@/app/context/useRecipeSearch";
function RecipeSearchContainer() {
   const {search}=useRecipeSearch()
  const [debouncedSearch, setDebouncedSearch] = useState("");
   const [result, setResult] = useState<Recipe[]>([]);

  useEffect (()=>{
  const timer = setTimeout(() => {
        setDebouncedSearch(search);
      }, 500);
  
      return () => {
        clearTimeout(timer);
      };
  
    },[search])
  
  
  
  useEffect(()=>{
 if (!debouncedSearch.trim()) {
  setResult([]);
  return;
}
  
    const fetchRecipe=async ()=>{const data=await GetRecipeByName (debouncedSearch)
    // return data
    // console.log(data)
  setResult(data)
  console.log(data)
  
  
  
  }
  fetchRecipe()
  },[debouncedSearch])
  return (
    <div>
     

    <RecipeSearchResults result={result} />
    </div>
    
  );
}

export default RecipeSearchContainer;
