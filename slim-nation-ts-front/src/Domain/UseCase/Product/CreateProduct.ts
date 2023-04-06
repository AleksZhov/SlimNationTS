import { createProduct } from "../../../productsDB/ProductRepository/ProductRepository";
import { IProduct } from "../../../types/types";
export async function CreateProductUseCase(productData:IProduct) {
    return await createProduct(productData)
}