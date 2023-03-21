import { FC,  } from "react";
import { IProductWithID } from "../interfaces/interfaces";


interface IProps {data:IProductWithID[]}



const ComplexProductCalculatorForm: FC<IProps> = (props) => {
    // const [quantityOfProducts, setQuantityOfProducts] = useState(1);

   

  



    return (<form>
       
        <select id="product" name = "product" >
            {props.data.map(product => (<option key={product.id} value={product.productName} >{ product.productName}</option>))}
        </select>
        
    </form>)
}

export default ComplexProductCalculatorForm;