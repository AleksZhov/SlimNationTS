import { FC } from "react";
import { IProductWithID } from "../interfaces/interfaces";
import Button from "./Button";
interface IProps{products:IProductWithID[], addNewIngredient:Function}

const NewDishChooseMenuForm: FC<IProps> = (props) => {
    const { products, addNewIngredient } = props;
    return (<form className="bg-purple-500" onSubmit={(e) => { e.preventDefault();addNewIngredient(e.currentTarget.product.value) }}>
       <h2>Please choose desired ingredient below</h2>
        <select id="product" name = "product" >
            {products.map(product => (<option key={product.id} value={product.id} >{ product.productName}</option>))}
        </select>
       <Button type="submit" buttonLabel="Add Ingredient" className="" />
        
    </form>)
}
export default NewDishChooseMenuForm;