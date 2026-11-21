
"use client";

import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { PiChefHatFill } from "react-icons/pi";

function IsError() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 py-12">

      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50">
        <PiChefHatFill className="text-5xl text-green-600" />
      </div>

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        <AlertCircle className="h-9 w-9 text-green-600" />
      </div>

      <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Something Went Wrong!
      </h2>

      <p className="mb-8 max-w-md text-center text-sm leading-7 text-gray-500 sm:text-base">
        We couldn't load the recipes.
        Something went wrong while connecting to our kitchen.
        Please try again later.
      </p>

      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-95">
          <RefreshCw size={18} />
          Try Again
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-50 active:scale-95">
          <Home size={18} />
          Go to Home
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-400">
        Recipe Explorer · Fresh ideas, delicious moments
      </p>

    </div>
  );
}

export default IsError;
