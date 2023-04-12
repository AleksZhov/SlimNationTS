import { logout } from "../../../productsDB/AuthRepository/authRepository";

export async function logoutUseCase(accessToken: string) {
    return await logout(accessToken)
}