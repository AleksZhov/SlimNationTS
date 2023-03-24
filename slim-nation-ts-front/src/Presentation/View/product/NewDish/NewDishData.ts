import { useState } from "react";

import { GetProductsUseCase } from "../../../../Domain/UseCase/Product/GetProducts";
import { INewDishVM, IProductWithID } from "../../../../interfaces/interfaces";
import { CreateProductUseCase } from "../../../../Domain/UseCase/Product/CreateProduct";

export default function NewDishData(): INewDishVM {
     const [error, setError] = useState("");
    const [products, setProducts] = useState<IProductWithID[] >([]);

    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase();
 setError(error);
        setProducts(result);
    }
    
    return {error,products,getProducts, CreateProductUseCase}
}