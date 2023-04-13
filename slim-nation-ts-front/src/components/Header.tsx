
import { NavLink } from "react-router-dom";
import { Icon } from "./";
import UserMenuView from "../Presentation/View/auth/UserMenu/UserMenuView";
import { useUserCont } from "../context/UserContext";
const Header = () => {
    const { currentUserData } = useUserCont();
    return (<header className="bg-gradient-to-r from-sky-400 to-blue-500 flex p-5">
        <div className="mr-10">
            <NavLink className="flex align-center text-2xl text-amber-500 font-bold" to={currentUserData.accessToken?"/":"/login"}>
                <Icon className=" fill-amber-500" iconName="icon-accessibility" width="32" height="32" onClick={()=>{}} /> <span className="text-sky-700">Slim</span>Nation
            </NavLink>
        </div>
        <nav className=" flex align-baseline  gap-4">
            {!currentUserData.accessToken ?
                <><NavLink className={({ isActive }): string => { return (`text-xl  ${isActive ? "text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500" : "text-indigo-700 "}`) }} to="/login">Login</NavLink>
                <NavLink className={({ isActive }): string => { return (`text-xl  ${isActive ? "text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500" : "text-indigo-700"}`) }} to="/sign-in">Sign In</NavLink>
            </> :
                <>
                     <NavLink className={({ isActive }): string => { return (`text-xl  ${isActive ? "text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500" : "text-indigo-700"}`) }} to="/products-list">Product list</NavLink>
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500":"text-indigo-700"}`)}  } to ="/add-new-product">New product</NavLink>
           
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold bg-amber-500":"text-indigo-700 "}`)}  } to ="/add-complex-product">New dish</NavLink></>}
        </nav>
       {currentUserData.refreshToken && <UserMenuView />} 
</header>) };
export default Header;