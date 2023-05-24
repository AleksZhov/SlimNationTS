import { currentMealData } from "types/types";
import { createMeal, getMeals, deleteMeal } from "productsDB/API/api";

export async function createNewMeal(accessToken: string, newMealData: currentMealData) {
    const { result, error } = await createMeal(accessToken, newMealData);
    return { result, error }
}
export async function getDailyMeals(date: string,accessToken:string) {
    const { result, error} = await getMeals(date,accessToken);
    return{result ,error}
}

export async function deleteOneMeal(id:string,date: string,accessToken:string) {
    const { result, error} = await deleteMeal(id,date,accessToken);
    return{result ,error}
}