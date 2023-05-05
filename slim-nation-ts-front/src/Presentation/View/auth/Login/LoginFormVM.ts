
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { loginFormInfo } from "../../../../types/types";
import { loginUseCase } from "../../../../Domain/UseCase/auth/loginUseCase";
import {useUserCont} from "../../../../context/UserContext"

export default function LoginFormData() {
    const navigate = useNavigate();
     const { setCurrentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    async function login(data:loginFormInfo) {
        const { result, error } = await loginUseCase(data);
        if(error && typeof error === "object" && "message" in error && typeof error.message === "string"){ setError(error.message)}
       
        if (result) {
            setCurrentUserData(result);
        navigate("/products-list")}
    }
    return {login, error}
}