import { useState } from "react";
import { CreateProductUseCase } from "../../../../Domain/UseCase/Product/CreateProduct";
import { INewProduct, IProduct } from "../../../../types/types";
import { useUserCont } from "../../../../context/UserContext";
import { useProductListCont } from "../../../../context/ProductsListContext";


export default function NewProductData(): INewProduct {
    const { currentUserData, setCurrentUserData } = useUserCont();
    const { productsList, setProductsList } = useProductListCont();
    const [error, setError] = useState<string | null>("");
  

    async function saveProduct(data: IProduct) {
        const {result,  error } = await CreateProductUseCase(data, currentUserData.accessToken);
          if(result){setProductsList([...productsList, result])}
    }
  
    
    return {error,saveProduct}
}

