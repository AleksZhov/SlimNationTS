import { FC, useState } from "react";

interface IProduct{ id: string, productName: string, protein: number, fat: number, carbs: number, fiber: number }
interface IProps {data:IProduct[]}



const ComplexProductCalculatorForm: FC<IProps> = (props) => {
    const [quantityOfProducts, setQuantityOfProducts] = useState(1);

   

  



    return (<form>
       
        <select id="product" name = "product" >
            {props.data.map(product => (<option key={product.id} value={product.productName} >{ product.productName}</option>))}
        </select>
        
    </form>)
}

export default ComplexProductCalculatorForm;