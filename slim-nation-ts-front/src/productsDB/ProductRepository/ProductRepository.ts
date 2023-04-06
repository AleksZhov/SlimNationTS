import { getAll, create, getOne, deleteOne } from "../DataSource/ProductsLocal StorageDataSource";
import { IProduct } from "../../types/types";

export async function createProduct(data: IProduct) {
    const { result, error } = await create(data);
    return {result, error}
}

export async function getProducts() {
    const { result, error } = await getAll();
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