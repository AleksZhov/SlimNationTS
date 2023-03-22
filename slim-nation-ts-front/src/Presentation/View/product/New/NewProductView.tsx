import { FC } from "react";
import { SimpleProductForm } from "../../../../components";
import NewProductData from "./NewProductData";



const NewProductView: FC = () => {
    const { saveProduct} = NewProductData()

    return (<div>
        <SimpleProductForm createProduct={saveProduct}  />

</div>) }
export default NewProductView;