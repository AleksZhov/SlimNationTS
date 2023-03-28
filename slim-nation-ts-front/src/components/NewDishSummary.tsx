import { FC } from "react";
import { INewDishData } from "../interfaces/interfaces";

interface IProps{newDishData: INewDishData}
const NewDishSummary: FC<IProps> = (props) => {
    const { newDishData } = props;

    return <div>
        <h2> Total</h2><div className="flex gap-20">
        <p>Energy, kcal - <span className="bg-white p-1 rounded-xl">{(newDishData.energy).toFixed(1)}</span></p>
        <p>Protein,g - <span className="bg-white p-1 rounded-xl">{(newDishData.protein).toFixed(1)}</span></p>   
            <p>Fat,g - <span className="bg-white p-1 rounded-xl">{(newDishData.fat).toFixed(1)}</span></p>   
            <p>Carbohydrates,g - <span className="bg-white p-1 rounded-xl">{(newDishData.carbs).toFixed(1)}</span> </p>  
           <p>Fiber,g - <span className="bg-white p-1 rounded-xl">{(newDishData.fiber).toFixed(1)}</span>   
            </p>
            <p>Weight,g - <span className="bg-white p-1 rounded-xl">{(newDishData.weight).toFixed(1)}</span></p>
</div>
        <h2>Average per 100g</h2>
     <div className="flex gap-5">
        <p>Energy, kcal/100g - <span className="bg-white p-1 rounded-xl">{Math.floor(newDishData.energy*100/newDishData.weight) || 0}</span></p>
        <p>Protein,g/100g - <span className="bg-white p-1 rounded-xl">{newDishData.weight===0?0:((newDishData.protein*100/newDishData.weight).toFixed(1)) }</span></p>   
            <p>Fat,g/100g - <span className="bg-white p-1 rounded-xl">{newDishData.weight===0?0:(newDishData.fat*100/newDishData.weight).toFixed(1)}</span></p>   
            <p>Carbohydrates,g/100g - <span className="bg-white p-1 rounded-xl">{newDishData.weight===0?0:(newDishData.carbs*100/newDishData.weight).toFixed(1)}</span> </p>  
           <p>Fiber,g/100g - <span className="bg-white p-1 rounded-xl">{newDishData.weight===0?0:(newDishData.fiber*100/newDishData.weight).toFixed(1)}</span>   
        </p>
</div>
    </div>
}
export default NewDishSummary;