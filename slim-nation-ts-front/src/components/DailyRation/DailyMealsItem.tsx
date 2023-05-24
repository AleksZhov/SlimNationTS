import { FC } from "react";
import { dailyMeal } from "types/types";
import Button from "components/Button";

interface IProps{meal:dailyMeal, deleteMeal:Function}

const DailyMealsItem: FC<IProps> = (props) => {
    const { meal:{productName, energy, carbs, protein,fiber,fat,weight, _id}, deleteMeal } = props;
    return (<div>
        <p>{productName}</p>
        <p>{energy * weight/100} ,ccal</p>
        <p>Carbs {carbs * weight/100} ,g</p>
        <p>Protein {protein * weight/100} ,g</p>
        <p>Fat {fat * weight/100} ,g</p>
        <p>Fiber {fiber * weight/100} ,g</p>
<Button className="" buttonLabel="X"type="button" onClick={()=>{deleteMeal(_id)}} />
    </div>)
}

export default DailyMealsItem;