import { createNewMeal } from "productsDB/dailyRationRepository/dailyRationRepository";
import { currentMealData } from "types/types";

export async function createNewMealUseCase(accessToken: string, newMealData: currentMealData) {
    return await createNewMeal(accessToken, newMealData)
}