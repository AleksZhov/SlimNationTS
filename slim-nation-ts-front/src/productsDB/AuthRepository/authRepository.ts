import { loginUser } from '../API/api';
import { loginFormInfo } from './../../types/types';



export async function login(data:loginFormInfo) {
    const { result, error } = await loginUser(data);
    return {result, error}
}