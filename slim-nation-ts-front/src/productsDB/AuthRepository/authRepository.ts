import { loginUser,logoutUser, signInUser } from '../API/api';
import { loginFormInfo, signInFormInfo } from './../../types/types';



export async function login(data:loginFormInfo) {
    const { result, error } = await loginUser(data);
    return { result, error }
}

export async function logout(accessToken: string) {
    const { result, error } = await logoutUser(accessToken);
    return { result, error }
}

export async function signIn(data: signInFormInfo) {
    const { result, error } = await signInUser(data);
    return {result, error}
}