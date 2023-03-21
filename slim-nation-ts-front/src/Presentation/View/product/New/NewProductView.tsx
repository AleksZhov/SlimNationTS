import { FC } from "react";
import { SimpleProductForm } from "../../../../components";
import NewProductData from "./NewProductData";



const NewProductView: FC = () => {
    const {error, saveProduct} = NewProductData()

    return (<div>
    
        <h2> New Product </h2>
        <SimpleProductForm createProduct={saveProduct}  />

</div>) }
export default NewProductView;