"use client"

import axios from "axios";
import RegisterForm from "@/app/register/components/RegisterForm.component";

export default function RegisterPage() {
    const handleRegister = async (event) => {
        try{
            const response = await axios.post("http://localhost:3002/api/auth/register", {
                name: event.name,
                lastName: event.lastName,
                email: event.email,
                password: event.password,
                birthday: event.birthday
            });
            console.log(name)
            const { token, expiresIn } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("expiresIn", expiresIn);

            window.location.href = "/login";
        }catch (error) {
        } finally {
        }
    }

    return <RegisterForm onSubmit={handleRegister} />;

}