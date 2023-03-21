import { nanoid } from "nanoid";

import { IProductWithID, IProduct } from '../../interfaces/interfaces';
import products from "../products.json";
const COLLECTION = "PRODUCTS"



export function getAll() {
    try {
        let data = [];
        let dataString = window.localStorage.getItem(COLLECTION);
        console.log('dataString: ', dataString);
        
        if (dataString){data = JSON.parse(dataString)} else{data = products}

       
        return Promise.resolve({ error: null, result:data})
    } catch (err:any) {
       return Promise.resolve({error: err.message,result:null}) 
    }
}

export function getOne(id: string) {
    try {
        let data = [];
        let dataString = window.localStorage.getItem(COLLECTION)
        if (dataString) { data = JSON.parse(dataString) };
        let filteredData = data.filter((product: IProductWithID) => {return  product.id === id} );
        return Promise.resolve({error:null, result: filteredData.length>0? filteredData[0]:null})
    } catch (error:any) {
        return Promise.resolve({error:error.message, result:null})
        
    }
}

export async function create(productData: IProduct) {
    let {  result } = await getAll();
    let data = result;
    let newProduct: IProductWithID = { ...productData, id: nanoid() }
    data.push(newProduct);
    window.localStorage.setItem(COLLECTION,JSON.stringify(data))
return Promise.resolve({error:null,result:true})
    
}

export async function deleteOne(id: string) {
    let { result } = await getAll();
    let data = result;
    data.filter((item: IProductWithID) => { return item.id !== id })
    window.localStorage.setItem(COLLECTION, JSON.stringify(data))
    return Promise.resolve({error:null,result:true})
    
}

