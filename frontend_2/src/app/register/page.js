'use client';

import RegisterPage from "@/app/register/components/RegisterPage.component";
import Navbar from "@/app/common/components/Navbar.component";

export default function Register(){
    return (
        <div className="register-page">
            <Navbar/>
            <RegisterPage/>
        </div>
    );
}