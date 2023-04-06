import { IProductVM, IProductWithID } from '../../../../types/types';
import { useState } from "react";
import { GetProductsUseCase } from '../../../../Domain/UseCase/Product/GetProducts';
import { DeleteProductUseCase } from '../../../../Domain/UseCase/Product/DeleteProduct';


export default function ProductListData(): IProductVM {
    const [error, setError] = useState("");
    const [products, setProducts] = useState<IProductWithID[] >([]);
    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase();
        setError(error);
        setProducts(result);
        
    }
    return {error, products, getProducts,DeleteProductUseCase}
}