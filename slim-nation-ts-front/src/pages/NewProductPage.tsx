import { FC } from "react";
import NewProductView from "../Presentation/View/product/New/NewProductView";

const NewProductPage: FC = () => {
    return (<main className="bg-products-bgnd h-screen bg-cover bg-center pt-[20%]">
        <NewProductView/>
    </main>)
}
export default NewProductPage;