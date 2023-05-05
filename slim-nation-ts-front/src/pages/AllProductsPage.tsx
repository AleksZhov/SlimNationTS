import { FC } from "react";
import ProductsList from "../Presentation/View/product/List/productListView";

const AllProductsPage: FC = () => {
    return (<main className=" bg-products-bgnd h-screen bg-cover bg-center ">
        <ProductsList/>
    </main>)
}
export default AllProductsPage;