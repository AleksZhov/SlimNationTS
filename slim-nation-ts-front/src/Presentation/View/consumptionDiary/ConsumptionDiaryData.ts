import { getDailyMeals } from 'productsDB/dailyRationRepository/dailyRationRepository';
import { useProductListCont } from "context/ProductsListContext";
import { useUserCont } from "context/UserContext";
import { useState } from "react";
import { consDiaryData, dailyMeal } from "types/types";
import { GetProductsUseCase } from "Domain/UseCase/Product/GetProducts";
import { createNewMealUseCase } from "Domain/UseCase/dailyMeal/createNewMealUseCase";
import getDailyMealsUseCase from "Domain/UseCase/dailyMeal/getDailyMealsUseCase"
import { deleteOneMealUseCase } from 'Domain/UseCase/dailyMeal/deleteOneMealUseCase';
export default function ConsumptionDiaryData(): consDiaryData{
    const { productsList, setProductsList } = useProductListCont();
    const { currentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    const [date, setDate] = useState(new Date());
    const [mealsList, setMealsList]=useState<dailyMeal[]>([])


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
            const newMealData = { date: date.toDateString(), currentDish: { productName, energy:Math.round(energy), protein, weight, fat, fiber, carbs } }
            const { result, error } = await createNewMealUseCase(currentUserData.accessToken, newMealData)
            setMealsList(result.dailyDishes)
        }
    }

    async function getDailyMeals(): Promise<void>{
        const { result, error } = await getDailyMealsUseCase(date.toDateString(), currentUserData.accessToken)
        setMealsList(result.dailyDishes)
    }

    async function deleteMeal(id: string):Promise<void> {
        const { result, error } = await deleteOneMealUseCase(id,date.toDateString(), currentUserData.accessToken)
        if (result) {
          setMealsList(result.dailyDishes)}
      
    }
    
    return{date,setDate, getProducts, productsList,addNewMeal, mealsList, getDailyMeals, deleteMeal}
}