import { signInFormInfo } from "../../../types/types"
import { signIn } from "../../../productsDB/AuthRepository/authRepository";

export async function signInUseCase(data: signInFormInfo) {
    return await signIn(data);
}