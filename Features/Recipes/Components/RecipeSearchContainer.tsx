"use client";
import type { Recipe } from "@/type/type";
import { useState, useEffect,useRef } from "react";
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
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const emptyRef=useRef<HTMLDivElement | null>(null)

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

useEffect(() => {
  if (isLoading) {
    loadingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [isLoading]);

useEffect(() => {
  if (!isLoading && search.trim() && result.length === 0 && !isError) {
    emptyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [isLoading, search, result, isError]);

  return (
   <div>
  {isLoading ? (
   <div
  ref={loadingRef}
  className="flex min-h-[300px] w-full flex-col items-center justify-center gap-4"
>
  <div className="h-14 w-14 rounded-full border-[5px] border-gray-200 border-t-orange-500 animate-spin" />

  <span className="text-base font-medium text-gray-600">
    Loading recipes...
  </span>
</div>
  ) : isError ? (
    <h2>{isError}</h2>
  ) : search.trim() && result.length === 0 ? (
    <div
  ref={emptyRef}
  className="flex min-h-[300px] w-full items-center justify-center"
>
  <h2 className="text-xl font-semibold text-gray-600">
    No recipes found!
  </h2>
</div>
  ) : search.trim() ? (
    <RecipeSearchResults result={result} />
  ) : (
    popularContent
  )}
</div>
  );
}

export default RecipeSearchContainer;
