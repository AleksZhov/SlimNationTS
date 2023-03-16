import { FC, useState, ChangeEvent } from "react";
import Button from "./Button";

const SimpleProductForm: FC = () => {
    const [productInfo, setProductInfo] = useState({ productName: "",energy:0, protein: 0, fat: 0, carbs: 0, fiber: 0 });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;
        setProductInfo({ ...productInfo, [name]: value });
}

    return (<form className="p-5 bg-green-300 w-96 drop-shadow-xl flex-col justify-center items-center rounded-xl" onSubmit={(e): void => {
        e.preventDefault();
    console.log(productInfo)}}>
        <label className="block mx-auto text-center text-lg font-bold">Product Name
            <input className="block w-full rounded px-2 mt-1" value={productInfo.productName} name="productName" onChange={handleChange} />
        </label>
        <h2 className="text-center text-lg font-bold my-2">Nutrients per 100gr</h2>
        <div className="flex-col">
             <label className="flex mt-1">Energy, kcal
                <input className="inline-block ml-auto rounded drop-shadow px-2 w-20" value={productInfo.energy} name="energy" type="number" min={0} max={1000} onChange={handleChange} step={5} />
        </label>
        <label className="flex mt-1">Protein
                <input className="inline-block ml-auto rounded drop-shadow px-2" value={productInfo.protein} name="protein" type="number" min={0} max={100} onChange={handleChange} step={0.1} />
        </label>
        <label className="flex mt-1">Fat
                <input className="flinline-block ml-auto rounded drop-shadow px-2" value={productInfo.fat}  name="fat" type="number" min={0} max={ 100}  onChange={handleChange} step={0.1}/>
        </label  >
        <label className="flex mt-1">Carbohydrates
            <input className="inline-block ml-auto rounded drop-shadow px-2" value={productInfo.carbs}  name="carbs" type="number" min={0} max={ 100} onChange={handleChange} step={0.1}/>
        </label>
        <label className="flex mt-1">Fiber
            <input className="inline-block ml-auto rounded drop-shadow px-2" value={productInfo.carbs}  name="fiber" type="number" min={0} max={ 100} onChange={handleChange} step={0.1}/>
            </label>
        </div>
        <Button buttonLabel="Add product"  type="submit" className="block mx-auto mt-4 rounded-xl border-2 px-3 text-stone-300 bg-green-500 hover:bg-green-700"/>
        
    </form>)
}
export default SimpleProductForm;