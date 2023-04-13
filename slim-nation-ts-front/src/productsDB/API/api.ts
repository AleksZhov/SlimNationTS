
import axios from "axios"

import { loginFormInfo, signInFormInfo, IProduct } from "../../types/types";


export async function loginUser(data: loginFormInfo) {
    
    try {const result = await axios.post( "http://localhost:3001/api/users/login", data );
    if (result.status === 201) {
        return { result: result.data, error: null }
    }else{return{result:null, error:result}}
        
    } catch (error) {
      
        return{result:null, error}
    }
}

export async function logoutUser(accessToken: string) {
    try {
        const result = await axios("http://localhost:3001/api/users/logout", {method:"get", headers: { 'Authorization': `Bearer ${accessToken}` } })
        if (result.status === 204) { return { result: true, error: null } } else {
            return {result:null,error:result}
        }
        
    } catch (error) {
        return { result: null, error}
    }
}

export async function signInUser(data: signInFormInfo) {
    try {
        const result = await axios.post("http://localhost:3001/api/users/sign-in", data);
        if (result.status === 201) {
            return { result: true, error: null } }else {
            return{result:null, error:result}
        }
    } catch (error) {
        return{result:null, error}
    }
}

export async function getAllProducts(accessToken: string) {
    try {
        const result = await axios.get("http://localhost:3001/api/products/", { headers: { 'Authorization': `Bearer ${accessToken}` } })
        if (result.status === 200) { return { result: result.data, error: null } } else {
            return{result:null, error:result}
        }
        
    } catch (error) {
        return{result:null, error}
        
    }
}

export async function createNewProduct(data: IProduct, accessToken:string) {

     try {
        const result = await axios.post("http://localhost:3001/api/products/",data, { headers: { 'Authorization': `Bearer ${accessToken}` } })
        if (result.status === 200) { return { result: result.data, error: null } } else {
            return{result:null, error:result}
        }
        
    } catch (error) {
        return{result:null, error}
        
    }
    
}