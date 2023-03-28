import { FC } from "react";
import { IIngredient } from "../interfaces/interfaces";
import NewDishIngredientsItem from "./NewDishIngredientsItem";
interface IProps{
    ingredients: IIngredient[] | [], handleIngrWeightChange: Function,
remIngrFromList:Function}


const NewDishIngredientsList: FC<IProps> = (props) => {
    const { ingredients, handleIngrWeightChange,remIngrFromList } = props;
    return (<div>
        <h2> New Dish Ingredients</h2>
        <ul>
            {ingredients.length>0?ingredients.map(ingredient => {
                return (<li key={ingredient.id}>
                    <NewDishIngredientsItem ingredient={ingredient} handleIngrWeightChange={handleIngrWeightChange}
                        remIngrFromList={remIngrFromList } />
            </li>)}):<li><p>No choosen ingredients for the moment</p></li>}
        </ul></div>)
}
export default NewDishIngredientsList;