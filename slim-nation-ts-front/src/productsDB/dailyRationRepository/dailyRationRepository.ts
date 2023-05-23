import { currentMealData } from "types/types";
import { createMeal } from "productsDB/API/api";

export async function createNewMeal(accessToken: string, newMealData: currentMealData) {
    const { result, error } = await createMeal(accessToken, newMealData);
    return { result, error }
}