import { loginFormInfo } from "../../../types/types";
import { login } from "../../../productsDB/AuthRepository/authRepository";

export async function loginUseCase(data: loginFormInfo) {
    return await login(data)
}