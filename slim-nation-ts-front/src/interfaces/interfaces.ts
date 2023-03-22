export interface IProduct { productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };

export interface IProductWithID { id:string,productName: string, energy: number, protein: number, fat: number, carbs: number, fiber: number };

export type IProductVM ={
    error: string | null,
    products: IProductWithID[] | [],
    getProducts:Function,
}

export type INewProduct ={error:string | null,saveProduct:Function}