import { FC } from "react";
import { IIngredient } from "../interfaces/interfaces";
import Button from "./Button";
interface IProps { ingredient: IIngredient, handleIngrWeightChange: Function; remIngrFromList:Function}

const NewDishIngredientsItem: FC<IProps> = (props) => {
    const { ingredient, handleIngrWeightChange, remIngrFromList } = props;
    return (<div><label>{ingredient.productName}<input type = "number" min={0} max={5000} step={5} name={ingredient.id} value={ingredient.weight} onChange={(e) => {
        e.preventDefault();
        handleIngrWeightChange(ingredient.id, e.currentTarget.value);
    }} />,g</label>
        <Button type="button" buttonLabel="Remove" onClick={()=>{ remIngrFromList(ingredient.id)}} className="" />
    </div>)
}
export default NewDishIngredientsItem;