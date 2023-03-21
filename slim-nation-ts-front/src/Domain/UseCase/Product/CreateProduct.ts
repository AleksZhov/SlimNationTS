import { createProduct } from "../../../productsDB/ProductRepository/ProductRepository";
import { IProduct } from "../../../interfaces/interfaces";
export async function CreateProductUseCase(productData:IProduct) {
    return await createProduct(productData)
}