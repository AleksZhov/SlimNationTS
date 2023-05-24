import { FC } from "react";
import { dailyMeal } from "types/types";
import DailyMealsItem from "./DailyMealsItem";
interface IProps{
    meals: dailyMeal[],
deleteMeal:Function}

const DailyMealsList: FC<IProps> = (props) => {
    const { meals, deleteMeal } = props;

    return (<div>
        {meals.length > 0 ?
            <div><h2>Meals eaten:</h2>
                <ul>
                    {meals.map(meal => {
                        return (<li key={meal._id}>
                            <DailyMealsItem meal={meal} deleteMeal={ deleteMeal} />
                    </li>) })}
                    </ul>
            </div> :
            <h2>No eaten meals at chosen date</h2>}
    </div>)
}
export default DailyMealsList;