
import axios from "axios"
import { useUserCont } from './../../context/UserContext';


import { loginFormInfo, signInFormInfo, IProduct } from "../../types/types";

export const setAxiosAccToken = (token: string) => {
    axios.defaults.headers.Authorization = token?`Bearer ${token}`:''
}

export const setAxiosInterceptor = (refreshToken: string) => {
    // const { currentUserData, setCurrentUserData }= useUserCont()
    axios.interceptors.response.use(
        response => response,
        async error => {
            console.log(error)
        return Promise.reject(error)})
}





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
export async function deleteOneProduct(id: string) {
    try {
        const result = await axios("http://localhost:3001/api/products/", { method: "delete", data: { id } })
        if(result.status === 201){return {result:true, error:null}}else{return{result:null, error:result}}
        
    } catch (error) {
        return{result:null, error}
    }
}