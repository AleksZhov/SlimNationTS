export interface IProduct { productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };

export type IProductVM ={
    error: string,
    products: IProduct[] | [],
    getProducts:Function,
}