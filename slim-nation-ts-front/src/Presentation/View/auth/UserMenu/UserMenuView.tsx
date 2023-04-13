import { FC } from "react";
import { useUserCont } from "../../../../context/UserContext";
import { Button } from "../../../../components";
import UserMenuVM from "./UserMenuVM";
const UserMenuView: FC = () => {
    const { currentUserData: { user } } = useUserCont();
    const {logout} = UserMenuVM()
    return (<div>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <Button className="" type="button" buttonLabel="Log Out" onClick={()=>{logout()}}/>
    </div>)
}
export default UserMenuView;