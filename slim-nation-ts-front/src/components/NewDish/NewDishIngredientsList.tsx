import { FC } from "react";
import { IIngredient } from "../../types/types";
import NewDishIngredientsItem from "./NewDishIngredientsItem";
interface IProps{
    ingredients: IIngredient[] | [], handleIngrWeightChange: Function,
remIngrFromList:Function}


const NewDishIngredientsList: FC<IProps> = (props) => {
    const { ingredients, handleIngrWeightChange,remIngrFromList } = props;
    return (<div>
        <h2 className="text-xl font-bold text-center mt-[20px] mb-3"> New Dish Ingredients</h2>
        <ul>
            {ingredients.length>0?ingredients.map(ingredient => {
                return (<li key={ingredient.id}>
                    <NewDishIngredientsItem ingredient={ingredient} handleIngrWeightChange={handleIngrWeightChange}
                        remIngrFromList={remIngrFromList } />
            </li>)}):<li><p className="text-center text-amber-300">No choosen ingredients for the moment</p></li>}
        </ul></div>)
}
export default NewDishIngredientsList;