import PopularRecipes from "@/Features/Recipes/Components/PopularRecipes";
import RecipeCard from "@/Features/Recipes/Components/RecipeCard";
import RecipeList from "@/Features/Recipes/Components/RecipeList";

function page() {
  return (
    <div className="px-[70px] py-10 ">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col">
            <span>icon</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">All Recipe</h2>
         <p className="mt-2 text-sm leading-6 text-gray-500">Browse All Collection of delecios</p>
        </div>
        <div>
          <select className="w-56 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
            <option value="">All Categories</option>
            <option value="chicken">Chicken</option>
            <option value="seafood">Seafood</option>
          </select>
        </div>
      </div>
      <div className="flex gap-8 ">
       <div className="w-1/5 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
        <p className="text-xl font-bold text-gray-900 mb-3">Categories</p>
          <div>category </div>
          <div>gradinet</div>
        </div>
        <div className="flex-1  rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
          <RecipeList />
        </div>
      </div>
    </div>
  );
}

export default page;
