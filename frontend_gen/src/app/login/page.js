"use client";

import LoginForm from "./LoginForm.component";
import axios from "axios";

export default function LoginPage() {
    const handleLogin = async (event) => {
        const response = await axios.post(api_var + "/auth/login",{
            email: event.email,
            password: event.password,
        });

        const { token, expiresIn } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
    };

    return <LoginForm onSubmit={handleLogin} />;
}

