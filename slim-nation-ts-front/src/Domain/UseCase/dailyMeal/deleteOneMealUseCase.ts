import { deleteOneMeal } from "productsDB/dailyRationRepository/dailyRationRepository";

export async function deleteOneMealUseCase(id: string,date:string, accessToken: string) {
    return await deleteOneMeal(id,date, accessToken)
}