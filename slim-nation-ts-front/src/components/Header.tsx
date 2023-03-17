
import { NavLink } from "react-router-dom";
import { Icon } from "./";

const Header = () => {
    return (<header>
        <div>
            <NavLink to="/">
                <Icon className="" iconName="icon-accessibility" width="16" height="16" onClick={()=>{}} /> SlimNation
            </NavLink>
        </div>
        <nav>
            <NavLink to ="/login">Login</NavLink>
            <NavLink to ="/signIn">Sign In</NavLink>
            <NavLink to ="/add-new-product">New product</NavLink>
            <NavLink to ="/products-list">Product list</NavLink>
        </nav>
</header>) };
export default Header;