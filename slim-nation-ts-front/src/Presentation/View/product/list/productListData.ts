import { IProductVM, IProductWithID } from '../../../../interfaces/interfaces';
import { useState } from "react";
import { GetProductsUseCase } from '../../../../Domain/UseCase/Product/GetProducts';



export default function ProductListData(): IProductVM {
    const [error, setError] = useState("");
    const [products, setProducts] = useState<IProductWithID[] >([]);
    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase();
        console.log('result: ', result);
        
       
        setError(error);
        setProducts(result);
    }
    return {error, products, getProducts}
}