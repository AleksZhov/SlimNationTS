import { FC } from "react";
import { IIngredient } from "../interfaces/interfaces";
import NewDishIngredientsItem from "./NewDishIngredientsItem";
interface IProps{ingredients: IIngredient[] | [], handleIngrWeightChange:Function}


const NewDishIngredientsList: FC<IProps> = (props) => {
    const { ingredients, handleIngrWeightChange } = props;
    return (<div>
        <h2> New Dish Ingredients</h2>
        <ul>
            {ingredients.map(ingredient => {
                return (<li key={ingredient.id}>
                    <NewDishIngredientsItem ingredient={ingredient} handleIngrWeightChange={ handleIngrWeightChange} />
            </li>)})}
        </ul></div>)
}
export default NewDishIngredientsList;