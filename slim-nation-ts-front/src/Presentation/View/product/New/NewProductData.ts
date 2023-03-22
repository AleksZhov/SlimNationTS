import { useState } from "react";
import { CreateProductUseCase } from "../../../../Domain/UseCase/Product/CreateProduct";
import { INewProduct, IProduct } from "../../../../interfaces/interfaces";


export default function NewProductData(): INewProduct {
    const [error, setError] = useState<string | null>("");
  

    async function saveProduct(data: IProduct) {
        const {  error } = await CreateProductUseCase(data);
          setError(error)
    }
  
    
    return {error,saveProduct}
}

