import axios from "axios"
import { useContext } from "react";

import { loginFormInfo } from "../../types/types";

export async function loginUser(data: loginFormInfo) {
// const {currentUserData,setCurrentUserData} = useContext(currentUserData)
    const result = await axios.post("localhost:3001/api/users/login", data);


    return{result:true, error:null}
    
}