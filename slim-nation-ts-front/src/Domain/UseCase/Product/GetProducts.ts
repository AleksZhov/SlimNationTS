import { getAll } from "../../../productsDB/DataSource/ProductJSONDataSource";

export async function GetProductsUseCase(){return await getAll()}