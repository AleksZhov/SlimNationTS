import { FC } from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useViewModel from "./productListData"



const ProductsList: FC = () => {
    // let navigate = useNavigate();
    const { products, getProducts,  } = useViewModel()
    
    useEffect(() => {
        getProducts()
     
    },[] )
    
    return (<div className="pt-[20px]">
        <h1 className="  text-4xl text-center text-indigo-500 font-bold">Product List</h1>
        <ul className=" mt-6 flex gap-4 flex-wrap mx-5">
            {products.map((product) => {
                return <li className="w-[250px] rounded-xl bg-gradient-to-t from-indigo-500 to-purple-500 p-[20px]" key={product.id}>
                <div><h2 className="text-2xl font-bold text-center">{product.productName}</h2>
                    <p className="inline-flex w-[100%] border-b-[1px] border-dotted border-black mb-[5px] ">Energy, kcal <span className="ml-auto text-right">{product.energy}</span></p>
                    <p className="inline-flex w-[100%] border-b-[1px] border-dotted border-black mb-[5px] ">Proteins, g/100g <span className="ml-auto">{product.protein}</span></p>
                    <p className="inline-flex w-[100%] border-b-[1px] border-dotted border-black mb-[5px]">Carbohydrates, g/100g <span className="ml-auto">{product.carbs}</span></p>
                    <p className="inline-flex w-[100%] border-b-[1px] border-dotted border-black mb-[5px]">Fat, g/100g <span className="ml-auto">{product.fat}</span> </p>
                    <p className="inline-flex w-[100%] border-b-[1px] border-dotted border-black mb-[5px]">Fiber, g/100g <span className="ml-auto">{product.fiber}</span> </p>
                </div>
        </li>})}
        </ul>
    </div>)
}

export default ProductsList;