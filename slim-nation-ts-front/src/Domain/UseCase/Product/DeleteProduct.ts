import { deleteProduct } from "../../../productsDB/ProductRepository/ProductRepository";
export async function DeleteProductUseCase(productId:string){return await deleteProduct(productId)}