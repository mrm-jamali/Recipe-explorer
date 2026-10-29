import api from "@/lib/axios";
const getRecipeById = async (id: string) => {
  try {
    const response = await api.get(`lookup.php?i=${id}`);
   return  response.data.meal?[0] : null;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    throw error;
  }
};

const getCategoryList = async () => {
  try {
    const response = await api.get("categories.php");
    return response.data.categories
  } catch (error) {
    console.log("Error fetching category list:", error);
  }
};

const GetRecipeByCategory = async (category: string) => {
  try {
    const response = await api.get(`filter.php?c=${category}`);
    return response.data.meals
  } catch (error) {
    console.log("Error fetching recipes by category:", error);
  }
};

// const GetLatestMeal = async () => {
//   try {
//     const response = await api.get("latest.php");
//   } catch (error) {
//     console.log("Error fetching latest meal:", error);
//   }
// };
const GetRecipeByName = async (name: string) => {
  try {
    const response = await api.get(
      `search.php?s=${encodeURIComponent(name)}`
    );
    return response.data.meals[0]
  } catch (error) {
    console.log("Error fetching Recipe Meal: ", error);
  }
};
export default {getRecipeById,getCategoryList,GetRecipeByCategory, GetRecipeByName }
