"use client"

import axios from "axios";
import RegisterForm from "@/app/register/RegisterForm.component";

export default function RegisterPage() {
    const handleRegister = async (event) => {
        const response = await axios.post( api_var + "/auth/register", {
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
