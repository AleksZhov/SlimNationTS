import { FC } from "react";
import { INewDishData } from "../../types/types";

interface IProps{newDishData: INewDishData}
const NewDishSummary: FC<IProps> = (props) => {
    const { newDishData:{energy,fat,carbs,fiber,protein,weight} } = props;

    return <div>
        <h2 className="text-center text-2xl font-bold mt-5"> Total</h2>
        <table className="rounded border-collapse border border-slate-500 w-full">
            <thead className="border-collapse border border-slate-700 ">
                <tr className="border-collapse border border-slate-500 ">
                    
                    <th className="border-collapse border border-slate-500 ">Energy,kcal</th>
                    <th className="border-collapse border border-slate-500 ">Fat,g</th>
                    <th className="border-collapse border border-slate-500 ">Protein,g</th>
                    <th className="border-collapse border border-slate-500 ">Carbohydrates,g</th>
                    <th className="border-collapse border border-slate-500 ">Fiber,g</th>
                </tr>
            </thead>
            <tbody className="border-collapse border border-slate-500 ">
                <tr>
                    <td className="border-collapse border border-slate-500 text-center ">{energy.toFixed(1)}</td>
                    <td className="border-collapse border border-slate-500 text-center ">{fat.toFixed(1)}</td>
                    <td className="border-collapse border border-slate-500 text-center ">{protein.toFixed(1)}</td>
                    <td className="border-collapse border border-slate-500 text-center ">{carbs.toFixed(1)}</td>
                    <td className="border-collapse border border-slate-500 text-center ">{fiber.toFixed(1)}</td>
                </tr>
            </tbody>
        </table>

        <p className="font-bold text-lg text-center mt-2">Total dish weight,g - <span className="bg-white p-1 rounded-xl">{(weight).toFixed(1)}</span></p>
        
        <h2 className="text-center text-2xl font-bold mt-4">Average per 100g</h2>
     <div className="w-[60%] mx-auto">
        <p className="flex mb-1">Energy, kcal/100g - <span className=" bg-white p-1 rounded-xl ml-auto ">{Math.floor(energy*100/weight) || 0}</span></p>
        <p className="flex mb-1">Protein,g/100g - <span className="bg-white p-1 rounded-xl ml-auto">{weight===0?0:((protein*100/weight).toFixed(1)) }</span></p>   
            <p className="flex mb-1">Fat,g/100g - <span className="bg-white p-1 rounded-xl ml-auto">{weight===0?0:(fat*100/weight).toFixed(1)}</span></p>   
            <p className="flex mb-1">Carbohydrates,g/100g - <span className="bg-white p-1 rounded-xl ml-auto">{weight===0?0:(carbs*100/weight).toFixed(1)}</span> </p>  
           <p className="flex mb-3">Fiber,g/100g - <span className="bg-white p-1 rounded-xl ml-auto">{weight===0?0:(fiber*100/weight).toFixed(1)}</span>   
        </p>
</div>
    </div>
}
export default NewDishSummary;