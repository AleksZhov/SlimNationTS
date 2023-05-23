import { useProductListCont } from "context/ProductsListContext";
import { useUserCont } from "context/UserContext";
import { useState } from "react";
import { consDiaryData } from "types/types";
import { GetProductsUseCase } from "Domain/UseCase/Product/GetProducts";
import { createNewMealUseCase } from "Domain/UseCase/dailyMeal/createNewMealUseCase";

export default function ConsumptionDiaryData(): consDiaryData{
    const { productsList, setProductsList } = useProductListCont();
    const { currentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    const [date, setDate] = useState(new Date());


    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase(currentUserData.accessToken);
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") { setError(error.message); }
        if(error === null){setError(null)}
        if (result) { setProductsList(result.data); } 
    }

    async function addNewMeal  (mealID: string, weight: number):Promise<void> {
        const currentProduct = productsList.find(product => product._id === mealID)
        if (currentProduct !== undefined) {
            const { productName, energy, protein, fat, carbs, fiber } = currentProduct;
            const newMealData = { date: date.toDateString(), currentDish: { productName, energy, protein, weight, fat, fiber, carbs } }
            const { result, error } = await createNewMealUseCase(currentUserData.accessToken, newMealData)
            console.log(" result from create new meal", result )
        }
    }
    
    return{date,setDate, getProducts, productsList,addNewMeal}
}