import { getProducts } from "../../../productsDB/ProductRepository/ProductRepository";

export async function GetProductsUseCase(accessToken:string){return await getProducts(accessToken)}