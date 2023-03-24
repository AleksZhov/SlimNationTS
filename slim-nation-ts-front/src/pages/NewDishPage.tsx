import { FC } from "react";
import NewDishView from "../Presentation/View/product/NewDish/NewDishView";

const NewDishPage: FC = () => {
    return (<main className="bg-products-bgnd h-screen bg-cover bg-center pt-[20%]">
        <NewDishView />
    </main>)
}
export default NewDishPage;