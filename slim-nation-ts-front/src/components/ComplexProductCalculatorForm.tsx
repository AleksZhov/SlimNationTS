import { FC,  } from "react";
import { IProductWithID } from "../interfaces/interfaces";


interface IProps {data:IProductWithID[]}

const ComplexProductCalculatorForm: FC<IProps> = (props) => {
    // const [quantityOfProducts, setQuantityOfProducts] = useState(1);

    return (<form className="bg-purple-500">
       
        <select id="product" name = "product" >
            {props.data.map(product => (<option key={product.id} value={product.productName} >{ product.productName}</option>))}
        </select>
        <label>Product weight,g
            <input type="number" min={0} max={5000} step={5}></input>
            </label>
        
    </form>)
}

export default ComplexProductCalculatorForm;