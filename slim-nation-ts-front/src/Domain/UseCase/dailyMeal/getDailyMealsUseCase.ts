import { getDailyMeals } from "productsDB/dailyRationRepository/dailyRationRepository";

async function getDailyMealsUseCase(date: string,accessToken:string) {
    return await getDailyMeals(date, accessToken)
}

export default getDailyMealsUseCase;