import { IProduct, INewDishData } from './../../../../interfaces/interfaces';
import { useState } from "react";

import { GetProductsUseCase } from "../../../../Domain/UseCase/Product/GetProducts";
import { INewDishVM, IProductWithID, IIngredient } from "../../../../interfaces/interfaces";
import { CreateProductUseCase } from "../../../../Domain/UseCase/Product/CreateProduct";

export default function NewDishData(): INewDishVM {
     const [error, setError] = useState("");
    const [products, setProducts] = useState<IProductWithID[]>([]);
    const [ingredients, setIngredients] = useState<IIngredient[] | []>([]);
    const[newDishData,setNewDishData] = useState<INewDishData>({productName:"",energy:0,protein:0,carbs:0,fat:0,fiber:0, weight:0})

    async function getProducts(): Promise<void>{
        const { result, error } = await GetProductsUseCase();
 setError(error);
        setProducts(result);
    }
    
    const addNewIngredient = (id: string):void => {
        const reqIngredient = products.find(product =>  product.id === id );
        if (reqIngredient) {
           const ingrToAdd:IIngredient = {...reqIngredient,weight:0}
        setIngredients([ ...ingredients, ingrToAdd ])
        }
    }


     const handleIngrWeightChange = (id:string, weight:number) => {
            const currentIngr = ingredients.find(product => product.id === id);
            if (currentIngr) {
                currentIngr.weight = Number(weight);
                const ingredientsWithoutCurrIngr = ingredients.filter(ingr => ingr.id !== id);
                 setIngredients([...ingredientsWithoutCurrIngr, currentIngr])
            }
         calculateNutrients();
     }
    
    const calculateNutrients = (): void => {
      
        if (ingredients.length > 0) {
            let totalWeight: number = ingredients.map(i => i.weight).reduce((a, b) => a + b);
            let totalEnergy: number = ingredients.map(i => i.energy*i.weight/100).reduce((a, b) => a + b);
            let totalProtein: number = ingredients.map(i => i.protein*i.weight/100).reduce((a, b) => a + b);
            let totalCarbs: number = ingredients.map(i => i.carbs*i.weight/100).reduce((a, b) => a + b);
            let totalFat: number = ingredients.map(i => i.fat*i.weight/100).reduce((a, b) => a + b);
            let totalFiber: number = ingredients.map(i => i.fiber*i.weight/100).reduce((a, b) => a + b);
           
            setNewDishData({...newDishData, weight:totalWeight,energy:totalEnergy, carbs:totalCarbs, protein:totalProtein, fat:totalFat, fiber:totalFiber})
       }

    }
    

    return {error,products,getProducts, CreateProductUseCase,addNewIngredient, ingredients, handleIngrWeightChange,calculateNutrients, newDishData}
}