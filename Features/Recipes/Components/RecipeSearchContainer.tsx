"use client";
import type { Recipe } from "@/type/type";
import { useState, useEffect } from "react";
import { GetRecipeByName } from "../services/recipeService";
import RecipeSearchResults from "./RecipeSearchResults";

import { useRecipeSearch } from "@/app/context/useRecipeSearch";

interface RecipeSearchContainerProps {
  popularContent: React.ReactNode;
}

function RecipeSearchContainer({ popularContent }: RecipeSearchContainerProps) {
  const { search } = useRecipeSearch();
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [result, setResult] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

useEffect(() => {
  if (!debouncedSearch.trim()) {
    setResult([]);
    setIsError("");
    setIsLoading(false);
    return;
  }

  const fetchRecipe = async () => {
    try {
      setIsLoading(true);
      setIsError("");

      const data = await GetRecipeByName(debouncedSearch);

      setResult(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setIsError("Something went wrong!");
      setResult([]);
    } finally {
      setIsLoading(false);
    }
  };

  fetchRecipe();
}, [debouncedSearch]);

  return (
   <div>
  {isLoading ? (
    <h2>Loading...</h2>
  ) : isError ? (
    <h2>{isError}</h2>
  ) : search.trim() && result.length === 0 ? (
    <h2>No recipes found!</h2>
  ) : search.trim() ? (
    <RecipeSearchResults result={result} />
  ) : (
    popularContent
  )}
</div>
  );
}

export default RecipeSearchContainer;
