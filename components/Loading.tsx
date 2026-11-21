
import { PiChefHatFill } from "react-icons/pi";
import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4">

      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-50">
        <PiChefHatFill className="text-5xl text-orange-500" />
      </div>

      <LoaderCircle className="mb-5 h-10 w-10 animate-spin text-orange-500" />

      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        Loading Delicious Recipes
      </h2>

      <p className="text-center text-sm text-gray-500">
        This won't take long. We're preparing something delicious for you!
      </p>

      <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-orange-100">
        <div className="h-full w-1/3 animate-pulse rounded-full bg-orange-500" />
      </div>

    </div>
  );
}

export default Loading;
