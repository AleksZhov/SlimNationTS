import { IProductVM, product } from '../../../../types/types';
import { useState } from "react";
import { GetProductsUseCase } from '../../../../Domain/UseCase/Product/GetProducts';
import { DeleteProductUseCase } from '../../../../Domain/UseCase/Product/DeleteProduct';
import { useUserCont } from '../../../../context/UserContext';
import { useProductListCont } from '../../../../context/ProductsListContext';


export default function ProductListData(): IProductVM {
    const {productsList, setProductsList} = useProductListCont()
    const {currentUserData}= useUserCont()
    const [error, setError] = useState<string | null>("");
    // const [products, setProducts] = useState<IProductWithID[] >([]);
    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase(currentUserData.accessToken);
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") { setError(error.message); }
        if(error === null){setError(null)}
        if (result) { setProductsList(result.data); }
        
    }
    return {error, products:productsList, getProducts,DeleteProductUseCase}
}