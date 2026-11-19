import api from "@/lib/axios";
import type { Category } from "@/type/type";
import type { Recipe } from "@/type/type";
 export const getRecipeById = async (id: string) => {
  try {
    const response = await api.get(`lookup.php?i=${id}`);
  
   return response.data.meals?.[0] ?? null;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    throw error;
  }
};

export const getCategoryList = async () => {
  try {
    const response = await api.get("categories.php");
    console.log("list",response.data.categories)
    return response.data.categories;
    
  } catch (error) {
    console.log("Error fetching category list:", error);
    throw error;
  }
};

export const GetRecipeByCategory = async (category: string) => {
  try {
    const response = await api.get(`filter.php?c=${category}`);
     console.log("foofd name",response.data.meals)
    return response.data.meals ?? []
  } catch (error) {
    console.log("Error fetching recipes by category:", error);
    throw error;
  }
};


export const GetRecipeByName = async (name: string) => {
  try { 
    const response = await api.get(
      `search.php?s=${encodeURIComponent(name)}`
    );
    return response.data.meals ?? []
  } catch (error) {
    console.log("Error fetching Recipe Meal: ", error);
    throw error;
  }
};


// export const getAllRecipes = async (): Promise<Recipe[]> => {
//   try {
//     // 1. دریافت تمام دسته‌بندی‌ها
//     const categories = await getCategoryList();

//     // 2. دریافت غذاهای تمام دسته‌بندی‌ها
//     const results = await Promise.all(
//       categories.map((category: Category) =>
//         GetRecipeByCategory(category.strCategory)
//       )
//     );

//     // 3. ترکیب تمام لیست‌ها
//     const allRecipes = results.flat();

//     // 4. حذف غذاهای تکراری بر اساس idMeal
//     const uniqueRecipes = Array.from(
//       new Map(
//         allRecipes.map((recipe: Recipe) => [
//           recipe.idMeal,
//           recipe,
//         ])
//       ).values()
//     );

//     return uniqueRecipes;

//   } catch (error) {
//     console.error("Error fetching all recipes:", error);
//     throw error;
//   }
// };


