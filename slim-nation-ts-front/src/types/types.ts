import { deleteMeal } from 'productsDB/API/api';
export interface IProduct { productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };


export interface IIngredient{ _id: string, productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number }

export interface INewDishData{ productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number }

export type product = {_id: string, productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number}

export type IProductVM ={
    error: string | null,
    products: product[],
    getProducts: Function,
     DeleteProductUseCase:Function
}
export type INewDishVM = { error: string | null, products:product[],addNewDishToDB:Function, addNewIngredient:Function,remIngrFromList:Function,ingredients:IIngredient[] | [],handleIngrWeightChange:Function,calculateNutrients:Function, newDishData:INewDishData,handleDishNameChange:Function}

export type INewProduct = { error: string | null, saveProduct: Function, }

export type ICurrUser = { user: { name: string, email: string }, accessToken: string, refreshToken: string }


export type loginFormInfo = { email: string, password: string }
export type signInFormInfo = { name: string, email: string, password: string }
export type consDiaryData = { date: Date, setDate: Function, getProducts: Function, productsList: product[], addNewMeal: Function,mealsList: dailyMeal [], getDailyMeals:Function, deleteMeal:Function }

export type currentMealData = { date: string, currentDish: { productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number } }

export type dailyMeal ={productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number, _id:string}
