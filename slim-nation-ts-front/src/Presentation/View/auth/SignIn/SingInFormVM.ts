import { useState } from "react";
import { signInUseCase } from "../../../../Domain/UseCase/auth/signInUseCase";
import {loginUseCase} from"../../../../Domain/UseCase/auth/loginUseCase"
import { signInFormInfo } from "../../../../types/types";
import { useUserCont } from "../../../../App";
import { useNavigate } from "react-router-dom";

export default function SignInFormData() {
    const navigate = useNavigate()
    const { setCurrentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    async function signIn(data: signInFormInfo) {
        const { result, error } = await signInUseCase(data);

        if (result) {
            const { result} = await loginUseCase({ email: data.email, password: data.password });
            setCurrentUserData(result);
            navigate("/products-list")
        }
        if(error && typeof error === "object" && "message" in error && typeof error.message === "string"){setError(error.message)}
    }
    return {signIn, error}
}