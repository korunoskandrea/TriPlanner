'use client';

import LoginForm from "./LoginForm.component";
import axios from "axios";

export default function LoginPage() {
    const handleLogin = async (event) => {
        try{
            const response = await axios.post("http://localhost:3002/api/auth/login",{
                email: event.email,
                password: event.password,
            });

            const { token, expiresIn } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("expiresIn", expiresIn);

            window.location.href = "/trip/plan";
        } catch (error) {
        } finally {
        }
    };

    return <LoginForm onSubmit={handleLogin} />;
}
