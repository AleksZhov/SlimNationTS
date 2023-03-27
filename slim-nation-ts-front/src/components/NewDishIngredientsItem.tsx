import { FC } from "react";
import { IIngredient } from "../interfaces/interfaces";
interface IProps {ingredient:IIngredient, handleIngrWeightChange:Function}

const NewDishIngredientsItem: FC<IProps> = (props) => {
    const { ingredient, handleIngrWeightChange } = props;
    return (<div><label>{ingredient.productName}<input type = "number" min={0} max={5000} step={5} name={ingredient.id} value={ingredient.weight} onChange={(e) => {
        e.preventDefault();
        handleIngrWeightChange(ingredient.id, e.currentTarget.value);
    }} />,g</label>
    </div>)
}
export default NewDishIngredientsItem;