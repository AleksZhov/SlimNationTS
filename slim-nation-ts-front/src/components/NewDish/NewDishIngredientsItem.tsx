import { FC } from "react";
import { IIngredient } from "../types/types";
import Button from "./Button";
interface IProps { ingredient: IIngredient, handleIngrWeightChange: Function; remIngrFromList:Function}

const NewDishIngredientsItem: FC<IProps> = (props) => {
    const { ingredient, handleIngrWeightChange, remIngrFromList } = props;
    return (<div className="flex justify-around mb-2"><label className="text-lg grow">{ingredient.productName},g</label><input type = "number" min={0} max={5000} step={5} name={ingredient.id} value={ingredient.weight} onChange={(e) => {
        e.preventDefault();
        handleIngrWeightChange(ingredient.id, e.currentTarget.value);
    }}  className="p-1 ml-3 rounded mx-auto"/>
        <Button type="button" buttonLabel="Remove" onClick={()=>{ remIngrFromList(ingredient.id)}} className="text-lgml-10 text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500 ml-5" />
    </div>)
}
export default NewDishIngredientsItem;