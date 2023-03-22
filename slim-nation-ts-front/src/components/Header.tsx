
import { NavLink } from "react-router-dom";
import { Icon } from "./";

const Header = () => {
    return (<header className="bg-gradient-to-r from-sky-400 to-blue-500 flex p-5">
        <div className="mr-10">
            <NavLink className="flex align-center text-2xl text-amber-500 font-bold" to="/">
                <Icon className=" fill-amber-500" iconName="icon-accessibility" width="32" height="32" onClick={()=>{}} /> <span className="text-sky-700">Slim</span>Nation
            </NavLink>
        </div>
        <nav className=" flex align-baseline  gap-4">
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900 border-2 border-sky-900 rounded-xl p-1 font-bold":"text-indigo-700 "}`)}  } to ="/login">Login</NavLink>
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold":"text-indigo-700"}`)}  } to ="/sign-in">Sign In</NavLink>
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold":"text-indigo-700"}`)}  } to ="/add-new-product">New product</NavLink>
            <NavLink className={({isActive}):string =>{return(`text-xl  ${isActive?"text-indigo-900  border-2 border-sky-900 rounded-xl p-1 font-bold":"text-indigo-700"}`)}  } to ="/products-list">Product list</NavLink>
        </nav>
</header>) };
export default Header;