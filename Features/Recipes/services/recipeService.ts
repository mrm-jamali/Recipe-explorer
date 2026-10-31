import api from "@/lib/axios";
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
    return response.data.categories
  } catch (error) {
    console.log("Error fetching category list:", error);
    throw error;
  }
};

export const GetRecipeByCategory = async (category: string) => {
  try {
    const response = await api.get(`filter.php?c=${category}`);
    return response.data.meals ?? []
  } catch (error) {
    console.log("Error fetching recipes by category:", error);
    throw error;
  }
};

// const GetLatestMeal = async () => {
//   try {
//     const response = await api.get("latest.php");
//   } catch (error) {
//     console.log("Error fetching latest meal:", error);
//   }
// };
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


