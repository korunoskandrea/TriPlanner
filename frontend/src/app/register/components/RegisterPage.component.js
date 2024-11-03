"use client"

import axios from "axios";
import RegisterForm from "@/app/register/components/RegisterForm.component";

export default function RegisterPage() {
    const handleRegister = async (event) => {
        const response = await axios.post("http://localhost:3002/api/auth/register", {
            name: event.name,
            lastName: event.lastName,
            email: event.email,
            password: event.password,
            birthday: event.birthday
        });
        const {token, expiresIn} = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);

    }

    return <RegisterForm onSubmit={handleRegister}/>;

}