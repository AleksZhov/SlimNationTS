import { getAll, create, getOne, deleteOne } from "../DataSource/ProductsLocal StorageDataSource";
import { getAllProducts, createNewProduct } from "../API/api";
import { IProduct } from "../../types/types";

export async function createProduct(data: IProduct, accessToken:string) {
    const { result, error } = await createNewProduct(data,accessToken);
    return {result, error}
}

export async function getProducts(accessToken:string) {
    const { result, error } = await getAllProducts(accessToken);
    return {result, error}
}

export async function getProduct(id:string) {
    const { result, error } = await getOne(id);
    return {result, error}
}

export async function deleteProduct(id:string) {
    const { result, error } = await deleteOne(id);
    return {result, error}
}