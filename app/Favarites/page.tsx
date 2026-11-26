
"use client";

import FavariteCard from "@/Features/Recipes/Components/FavariteCard";
import { useFavariteStore } from "@/Features/Recipes/store/FavariteStore";
import { Heart } from "lucide-react";

function Page() {
  const favarite = useFavariteStore((state) => state.favarite);

  return (
    <main className="min-h-screen bg-white px-5 py-12 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-orange-500">
            <Heart size={19} fill="currentColor" />
            <span className="text-sm font-semibold tracking-wide">
              YOUR COLLECTION
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Favorites
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Your favorite recipes, all in one place.
          </p>
        </div>

        {/* Favorites */}
        {favarite.length > 0 ? (
          <>
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Saved Recipes
              </h2>

              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                {favarite.length} Recipes
              </span>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {favarite.map((recipe) => (
                <FavariteCard
                  key={recipe.idMeal}
                  recipe={recipe}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50 px-5 text-center">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <Heart size={35} className="text-orange-500" />
            </div>

            <h2 className="text-xl font-bold text-gray-800">
              No Favorites Yet
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              You haven't saved any recipes yet.
              Explore recipes and add your favorites here!
            </p>

          </div>
        )}

      </div>
    </main>
  );
}

export default Page;
