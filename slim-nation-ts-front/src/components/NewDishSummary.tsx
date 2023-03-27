import { FC } from "react";
import { INewDishData } from "../interfaces/interfaces";

interface IProps{newDishData: INewDishData}
const NewDishSummary: FC<IProps> = (props) => {
    const { newDishData } = props;

    return <div>
        <h2> Total</h2>
        <p>Energy -  {newDishData.energy} , kcal</p>

        <h2>Average per 100g</h2>
     <p>Energy -  {Math.floor(newDishData.energy*100/ (newDishData.weight|| 1))} , kcal/100g</p>
    </div>
}
export default NewDishSummary;