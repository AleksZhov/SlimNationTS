import { useState } from "react";
import { CreateProductUseCase } from "../../../../Domain/UseCase/Product/CreateProduct";
import { INewProduct, IProduct } from "../../../../interfaces/interfaces";


export default function NewProductData(): INewProduct {
    const [error, setError] = useState<string | null>("");
  

    async function saveProduct(data: IProduct) {
        console.log('data: ', data);
        
        const { result, error } = await CreateProductUseCase(data);
        console.log('result: ', result);
          setError(error)
    }
  
    
    return {error,saveProduct}
}

