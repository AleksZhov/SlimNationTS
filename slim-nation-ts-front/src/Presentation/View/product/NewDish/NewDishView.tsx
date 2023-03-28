import { FC, useEffect } from "react";
import { Button, NewDishChooseMenuForm, NewDishIngredientsList, NewDishSummary } from "../../../../components/";
import NewDishData from "./NewDishData";

const NewDishView: FC = () => {
    const { products, getProducts, addNewIngredient, remIngrFromList, ingredients, handleIngrWeightChange, newDishData,handleDishNameChange, addNewDishToDB } = NewDishData();

    useEffect(() => {
        getProducts();
    }, [])
    
    return (<div className="w-[500px] bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-xl py-[30px] px-5 m-auto">
        <NewDishChooseMenuForm products={products} addNewIngredient={addNewIngredient} />
        <NewDishIngredientsList ingredients={ingredients} handleIngrWeightChange={handleIngrWeightChange} remIngrFromList={remIngrFromList} />
       {newDishData.weight !== 0 && <> <NewDishSummary newDishData={newDishData} />
        <div className=""><h2 className="text-center text-xl font-bold">Please enter new dish name</h2><input value ={newDishData.productName} name="newDishName" onChange={(e)=>{handleDishNameChange(e.currentTarget.value)}} type="text" className="block mx-auto rounded p-2" />
            <Button type="button" buttonLabel="Add new dish to the database" className="block text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500 mx-auto mt-5 text-xl" onClick={()=>{addNewDishToDB()}}/>
        </div></>}
        

    </div>)
}

export default NewDishView;