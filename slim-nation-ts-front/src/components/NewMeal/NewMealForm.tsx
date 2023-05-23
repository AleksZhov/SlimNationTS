import { FC } from "react";
import { product } from "types/types";
import Button from "../Button"

interface IProps{
    products: product[],
    addNewMeal: Function
}

const NewMealForm: FC<IProps> = (props) => {
    const { products,addNewMeal } = props;
    return (<form onSubmit={(e) => {
        e.preventDefault();
        addNewMeal(e.currentTarget.mealName.value, e.currentTarget.mealWeight.value)
    }}>
        <h2>Please choose desired dish or product </h2>
        <select className="" id="mealName" name="mealName">
            {products.map(product => (<option key={product._id} value={product._id}>{product.productName}</option>))}
        </select>
        <label> Grams
            <input name="mealWeight" type="number" min={0} max={5000} step={5} />
        </label>
        <Button type="submit" buttonLabel="Add meal" className=""/>
            </form>)
}
export default NewMealForm;