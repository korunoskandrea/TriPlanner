"use client"

import {useRouter} from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const navigateTo = (path) => {
        setTimeout(() => {
            router.push(path);
        }, 100);
    };

    return (
    <div className="navbar">
        <div className="auth-btns">
            <button className="login-btn" onClick={() => navigateTo("/login")}>Log in</button>
            <button className="register-btn" onClick={() => navigateTo("/register")}>Register</button>
        </div>
    </div>
    );
}