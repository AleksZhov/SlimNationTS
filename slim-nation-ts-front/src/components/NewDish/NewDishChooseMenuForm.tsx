import { FC } from "react";
import { product } from "../../types/types";
import Button from "../Button";
interface IProps{products:product[], addNewIngredient:Function}

const NewDishChooseMenuForm: FC<IProps> = (props) => {
    const { products, addNewIngredient } = props;
    return (<form className=" rounded-xl" onSubmit={(e) => { e.preventDefault();addNewIngredient(e.currentTarget.product.value) }}>
        <h2 className="text-center font-bold text-xl mb-2">Please choose desired ingredient below</h2>
        <div className="flex justify-between">
        <select className="rounded p-2 text-lg" id="product" name = "product" >
            {products.map(product => (<option key={product._id} value={product._id} >{ product.productName}</option>))}
        </select>
       <Button type="submit" buttonLabel="Add" className=" text-lg ml-10 text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500" />
        </div>
    </form>)
}
export default NewDishChooseMenuForm;