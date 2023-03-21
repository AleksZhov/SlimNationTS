import { FC } from "react";
// import { useNavigate } from "react-router-dom";
// import { IProduct } from "../../../../interfaces/interfaces";
import { useEffect } from "react";
// import { IProductWithID } from "../../../../interfaces/interfaces";
import useViewModel from "./productListData"



const ProductsList: FC = () => {
    // let navigate = useNavigate();
    const { products, getProducts,  } = useViewModel()
    
    useEffect(() => {
        getProducts()
     
    }, )
    
    return (<div>
        <h2>Product List</h2>
        <ul>
            {products.map((product, idx) => {
                return <li key={idx}>

                <div> <h2>{product.productName}</h2>
                    <p>`Energy {product.energy} kcal`</p>
                    <p>`Proteins {product.protein}g/100g`</p>
                    <p>`Carbohydrates  {product.carbs} g/100g`</p>
                    <p>`Fat {product.fat} g/100g`</p>
                    <p>`Fiber {product.fiber} g/100g`</p>
                </div>
        </li>})}
        </ul>
    </div>)
}

export default ProductsList;