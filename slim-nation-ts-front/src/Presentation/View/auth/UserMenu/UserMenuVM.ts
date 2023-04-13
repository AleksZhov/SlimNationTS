import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserCont, userInitialState } from "../../../../context/UserContext";
import { logoutUseCase } from "../../../../Domain/UseCase/auth/logOutUseCase";

export default function UserMenuVM() {
    const navigate = useNavigate();
    const { currentUserData, setCurrentUserData } = useUserCont();
    const [error, setError] = useState<string | null>(null);
    async function logout() {
        const { result, error } = await logoutUseCase(currentUserData.accessToken);
        if (result) { setCurrentUserData(userInitialState); navigate("/login") }
        if(error && typeof error === "object" && "message" in error && typeof error.message === "string"){setError(error.message)}
    }
    return { logout, error };
}