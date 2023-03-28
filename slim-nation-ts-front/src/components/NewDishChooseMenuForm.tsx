import { FC } from "react";
import { IProductWithID } from "../interfaces/interfaces";
import Button from "./Button";
interface IProps{products:IProductWithID[], addNewIngredient:Function}

const NewDishChooseMenuForm: FC<IProps> = (props) => {
    const { products, addNewIngredient } = props;
    return (<form className=" rounded-xl" onSubmit={(e) => { e.preventDefault();addNewIngredient(e.currentTarget.product.value) }}>
        <h2 className="text-center font-bold text-xl mb-2">Please choose desired ingredient below</h2>
        <select className="rounded p-2 text-lg" id="product" name = "product" >
            {products.map(product => (<option key={product.id} value={product.id} >{ product.productName}</option>))}
        </select>
       <Button type="submit" buttonLabel="Add Ingredient" className=" text-lg ml-10 text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500" />
        
    </form>)
}
export default NewDishChooseMenuForm;