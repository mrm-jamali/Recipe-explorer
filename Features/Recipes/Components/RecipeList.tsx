
"use client";

import { useEffect, useRef, useState } from "react";
import {
  GetRecipeByCategory,
  GetRecipeByName,
} from "../services/recipeService";

import RecipeCard from "./RecipeCard";
import type { Recipe, CategoryProps } from "@/type/type";
import IsError from "@/components/IsError";
import Loading from "@/components/Loading";

function RecipeList({ selectedCategory }: CategoryProps) {
  const [recipeType, setRecipeType] = useState<Recipe[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const statusRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  // Scroll to Loading or Error status
  useEffect(() => {
    if (!isLoading && !error) return;

    const frame = requestAnimationFrame(() => {
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [isLoading, error]);

  // Fetch recipes when category changes
  useEffect(() => {
    let ignore = false;

    const fetchRecipes = async () => {
      setIsLoading(true);
      setError(false);
      setVisibleCount(8);

      try {
        const data =
          selectedCategory === "All"
            ? await GetRecipeByName("All")
            : await GetRecipeByCategory(selectedCategory);

        if (!ignore) {
          setRecipeType(data);
        }
      } catch {
        if (!ignore) {
          setError(true);
          setRecipeType([]);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    fetchRecipes();

    return () => {
      ignore = true;
    };
  }, [selectedCategory]);

  // Infinite Scroll with Intersection Observer
  useEffect(() => {
    if (
      isLoading ||
      error ||
      recipeType.length === 0 ||
      visibleCount >= recipeType.length
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + 8, recipeType.length)
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentElement = observerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading, error, visibleCount, recipeType.length]);

  return (
    <div ref={statusRef}>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <IsError />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipeType.slice(0, visibleCount).map((recipe) => (
            <RecipeCard
              recipe={recipe}
              key={recipe.idMeal}
            />
          ))}
        </div>
      )}

      <div ref={observerRef} className="h-10" />
    </div>
  );
}

export default RecipeList;
