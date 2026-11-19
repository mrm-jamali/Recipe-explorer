
"use client";

import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { PiChefHatFill } from "react-icons/pi";

function IsError() {
  return (
    <div className="flex min-h-[450px] w-full items-center justify-center px-4 py-12">
      <div className="flex w-full max-w-md flex-col items-center rounded-3xl border border-gray-100 bg-white px-6 py-10 text-center shadow-lg shadow-gray-100/70 sm:px-10">

        {/* Logo */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
          <PiChefHatFill className="text-4xl text-orange-500" />
        </div>

        {/* Error Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <AlertCircle className="h-9 w-9 text-red-500" />
        </div>

        {/* Text */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          Something Went Wrong!
        </h2>

        <p className="mb-8 max-w-sm text-sm leading-7 text-gray-500 sm:text-base">
          We couldn't load the recipes.
          Something went wrong while connecting to our kitchen.
          Please try again later.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 active:scale-95"
          >
            <Home size={18} />
            Go to Home
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Recipe Explorer · Fresh ideas, delicious moments
        </p>

      </div>
    </div>
  );
}

export default IsError;
