import { useState } from "react";
import { loginFormInfo } from "../../../../types/types";
import { loginUseCase } from "../../../../Domain/UseCase/auth/loginUseCase";

export default function LoginFormData() {
    const [error, setError] = useState(null);
    async function login(data:loginFormInfo) {
        const {result, error}  = await loginUseCase(data)
    }
    return {login, error}
}