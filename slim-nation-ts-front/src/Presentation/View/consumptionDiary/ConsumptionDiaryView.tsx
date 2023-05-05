import { FC , useEffect} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import useViewModel from "./ConsumptionDiaryData"
import { useUserCont } from "context/UserContext";
import { useProductListCont } from "context/ProductsListContext";


const ConsumptionDiary: FC = () => {
    const { date, setDate, getProducts } = useViewModel();
    
useEffect(() => {
    getProducts();


}, [])



    return (
        <DatePicker selected={date} onChange={(date: any) => {
            setDate(date);
            console.log(date.toDateString())
        }} />
    )
}
export default ConsumptionDiary;