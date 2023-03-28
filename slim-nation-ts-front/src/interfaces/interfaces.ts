export interface IProduct { productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };

export interface IProductWithID { id: string, productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };

export interface IIngredient{ id: string, productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number }

export interface INewDishData{productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number, weight: number}

export type IProductVM ={
    error: string | null,
    products: IProductWithID[] | [],
    getProducts: Function,
     DeleteProductUseCase:Function
}
export type INewDishVM = { error: string | null, products:IProductWithID[] | [], getProducts:Function,addNewDishToDB:Function, addNewIngredient:Function,remIngrFromList:Function,ingredients:IIngredient[] | [],handleIngrWeightChange:Function,calculateNutrients:Function, newDishData:INewDishData,handleDishNameChange:Function}

export type INewProduct ={error:string | null,saveProduct:Function,}