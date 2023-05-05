import { useProductListCont } from "context/ProductsListContext";
import { useUserCont } from "context/UserContext";
import { useState } from "react";
import { consDiaryData } from "types/types";
import { GetProductsUseCase } from "Domain/UseCase/Product/GetProducts";

export default function ConsumptionDiaryData(): consDiaryData{
const { productsList, setProductsList } = useProductListCont()
    const { currentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    const [date, setDate] = useState(new Date())
    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase(currentUserData.accessToken);
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string") { setError(error.message); }
        if(error === null){setError(null)}
        if (result) { setProductsList(result.data); }
        
    }
    return{date,setDate, getProducts, productsList}
}