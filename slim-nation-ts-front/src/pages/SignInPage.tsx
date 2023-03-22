import { FC } from "react";

import { SignInForm } from "../components";


const SignInPage: FC = () => {
    return (<main className="bg-login-bgnd h-screen bg-cover bg-center pt-[20%]">
        <SignInForm />
    </main>)
}
export default SignInPage;