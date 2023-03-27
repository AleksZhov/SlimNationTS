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
export type INewDishVM = { error: string | null, products:IProductWithID[] | [], getProducts:Function,CreateProductUseCase:Function, addNewIngredient:Function,ingredients:IIngredient[] | [],handleIngrWeightChange:Function,calculateNutrients:Function, newDishData:INewDishData}

export type INewProduct ={error:string | null,saveProduct:Function,}