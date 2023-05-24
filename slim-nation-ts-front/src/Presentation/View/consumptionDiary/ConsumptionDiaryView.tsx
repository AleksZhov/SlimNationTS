import { FC , useEffect} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import useViewModel from "./ConsumptionDiaryData"
import NewMealForm from "components/DailyRation/NewMealForm";
import DailyMealsList from "components/DailyRation/DailyMealsList";
import { useUserCont } from "context/UserContext";
import { useProductListCont } from "context/ProductsListContext";


const ConsumptionDiary: FC = () => {
    const { date, setDate, getProducts, addNewMeal, mealsList, getDailyMeals,deleteMeal} = useViewModel();
    const {productsList}=useProductListCont()

    
useEffect(() => {
    getProducts();
}, [])

useEffect(() => {
  getDailyMeals()
}, [])


    return (
        <>
        <DatePicker selected={date} onChange={(date: any) => {
            setDate(date);
        }} />
            <NewMealForm products={productsList} addNewMeal={addNewMeal} />
            <DailyMealsList meals={mealsList} deleteMeal={deleteMeal} />
            </>
    )
   
}
export default ConsumptionDiary;