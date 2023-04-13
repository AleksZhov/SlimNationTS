import { createContext, useContext } from "react";
import { ICurrUser } from "../types/types";

export const userInitialState = { user: { name: "", email: "" }, accessToken: "", refreshToken: "" }

const currentUserData = { currentUserData:userInitialState, setCurrentUserData: (userInitialState:ICurrUser) => { } }

export const CurrentUserContext = createContext(currentUserData);
 export const useUserCont = () => useContext(CurrentUserContext);