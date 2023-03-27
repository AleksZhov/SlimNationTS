import { FC, useEffect } from "react";
import { NewDishChooseMenuForm, NewDishIngredientsList, NewDishSummary } from "../../../../components/";
import NewDishData from "./NewDishData";

const NewDishView: FC = () => {
    const { products, getProducts, addNewIngredient, ingredients, handleIngrWeightChange, newDishData } = NewDishData();

    useEffect(() => {
        getProducts();
    }, [])
    
  
    
    
    return (<div className="bg-blue-500">
        <NewDishChooseMenuForm products={products} addNewIngredient={addNewIngredient} />
        <NewDishIngredientsList ingredients={ingredients} handleIngrWeightChange={handleIngrWeightChange} />
        <NewDishSummary newDishData={newDishData} />
        

    </div>)
}

export default NewDishView;