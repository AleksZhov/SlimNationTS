import { FC, useEffect } from "react";
import { Button, NewDishChooseMenuForm, NewDishIngredientsList, NewDishSummary } from "../../../../components/";
import NewDishData from "./NewDishData";

const NewDishView: FC = () => {
    const { products, getProducts, addNewIngredient, remIngrFromList, ingredients, handleIngrWeightChange, newDishData,handleDishNameChange, addNewDishToDB } = NewDishData();

    useEffect(() => {
        getProducts();
    }, [])
    
    return (<div className="bg-blue-500">
        <NewDishChooseMenuForm products={products} addNewIngredient={addNewIngredient} />
        <NewDishIngredientsList ingredients={ingredients} handleIngrWeightChange={handleIngrWeightChange} remIngrFromList={remIngrFromList} />
       {newDishData.weight !== 0 && <> <NewDishSummary newDishData={newDishData} />
        <div><label>Please enter new dish name<input value ={newDishData.productName} name="newDishName" onChange={(e)=>{handleDishNameChange(e.currentTarget.value)}} /></label>
            <Button type="button" buttonLabel="Add new dish to the database" className="" onClick={()=>{addNewDishToDB()}}/>
        </div></>}
        

    </div>)
}

export default NewDishView;