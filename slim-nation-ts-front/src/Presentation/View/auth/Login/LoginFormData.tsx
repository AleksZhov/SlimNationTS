import { ChangeEvent, FC, useState } from "react";
import Icon from "../../../../components/Icon";
import Button from "../../../../components/Button";


const LoginForm: FC = () => {
    const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
    const [isPasswordVisivle, setIsPasswordVisible] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.currentTarget;
        setLoginInputs({...loginInputs,[name]:value})
    }

    return (
        <form className="mx-auto bg-indigo-500 w-96 p-10 rounded-xl drop-shadow-lg" onSubmit={(e): void => { e.preventDefault(); console.log(loginInputs);setLoginInputs({ email: "", password: "" }) }}>
           <h2 className="text-2xl text-center font-bold">Log In</h2>
            <label className="mt-3 text-lg block"> Please enter Your e-mail
               <input className="pl-1 mt-1 w-full rounded" type="text" name="email" value = {loginInputs.email} onChange = {handleChange} placeholder="example@gmail.com" minLength={6} required/> 
            </label><br />
            
            <label className="text-lg block mt-20px relative">Password<br />
                <Icon className="absolute bottom-1.5 right-1.5 fill-slate-400" iconName={!isPasswordVisivle ? "eye" : "eye-blocked"} width="16" height="16" onClick={()=>setIsPasswordVisible(!isPasswordVisivle)} />
                <input className="pl-1 mt-1 w-full rounded" type = {isPasswordVisivle?"text":"password"} placeholder="Your password" name="password" value={loginInputs.password} onChange ={handleChange}minLength={6} required/>
            </label>

              <Button type = "submit" buttonLabel="LogIn" className="rounded-xl border-2 px-3 text-stone-300 text-center block mt-6 mx-auto bg-sky-500 hover:bg-sky-700"/>   
    </form>)
}
 
export default LoginForm;
