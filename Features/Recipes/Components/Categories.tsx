"use client"
import { getCategoryList } from "../services/recipeService";
import type { Category } from "@/type/type";
import { useEffect, useState } from "react";

 function Categories() {
     
    
      const [selectedCategory,setSelectedCategory]=useState("All")
      const [categories, setCategories] = useState<Category[]>([]);
      useEffect(( )=>{
 const fetchCategories = async () => {
    const data = await getCategoryList();
    setCategories(data);
  };
fetchCategories()
      },[])
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore Categories
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Find your favorite meals by category
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.idCategory}
              type="button"
          className={`rounded-full border px-6 py-3 text-sm font-medium shadow-sm transition-all duration-300
  ${
    selectedCategory === category.strCategory
      ? "border-green-600 bg-green-600 text-white"
      : "border-gray-200 bg-white text-gray-600 hover:border-green-500 hover:text-green-600"
  }`}  onClick={()=>{setSelectedCategory(category.strCategory)}}
            >
             {category.strCategory}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
