import { FC, useEffect } from "react";
import { ComplexProductCalculatorForm } from "../../../../components";
import { GetProductsUseCase } from "../../../../Domain/UseCase/Product/GetProducts";
import NewDishData from "./NewDishData";

const NewDishView: FC = () => {
    const { products, getProducts } = NewDishData();

    useEffect(() => {
        getProducts();
    }, [])
    
    
    return (<div>
        <ComplexProductCalculatorForm data={products} />
    </div>)
}

export default NewDishView;