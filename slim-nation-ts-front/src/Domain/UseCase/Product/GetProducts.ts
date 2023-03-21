import { getProducts } from "../../../productsDB/ProductRepository/ProductRepository";

export async function GetProductsUseCase(){return await getProducts()}