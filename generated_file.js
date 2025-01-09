"use client"
import {Typewriter} from "react-simple-typewriter";
import React, {useLayoutEffect, useEffect, useState,} from "react";
import {redirect} from "next/navigation";

const api_var = 'http://localhost:3000/4100/api/';

// frontend/src/app/login/components/LoginForm.components.js
"use client";
import { useState } from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import { useRouter } from "next/navigation";

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await onSubmit({
                email,
                password
            });

            router.push("/trip/plan");
        } catch (err) {
            setError('An unexpected error occurred. User does not exist or there are incorrect password and email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Log In</h2>
            {error && <div className="error-message">{error}</div>}
            <div>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Logging in..." : "Log in"} onClick={handleLogin} disabled={loading} />
        </form>
    );
}

// frontend/src/app/login/page.js
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

// frontend/src/app/register/page.js
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
// frontend/src/app/register/RegisterForm.components.js
import {useEffect, useState} from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        onSubmit({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday
        });

        router.push("/login")

    }

    return (
        <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <div>
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Birthday"
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Registering..." : "Register"} onClick={handleRegister}
                                    disabled={loading}/>
        </form>
    );
}
// frontend/src/app/home/page.js
"use client"
import {Typewriter} from "react-simple-typewriter";
import React, {useLayoutEffect, useEffect, useState,} from "react";
import {redirect} from "next/navigation";
export default function homePage() {
    function isAuthenticated() {
        const token = localStorage.getItem("token");
        return token !== null;
    }

    useLayoutEffect(() => {
        const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated;
        if (!isAuth) {
            redirect("/");
        }
    }, []);
    return (
        <div>
            <Navbar/>
            <CalendarRenderElement date_format={'5.1.2026'} position={'top'}/>
            <InputFieldRenderElement type={'string'} label={'Email'} isObscured={null} fontFamily={null} fontSize={null}/>
            <DatePeriodRenderElement date_format_start={'5.1.2026'} date_format_end={'10.2.2026'} />
            <MapRenderElement pin_icon={'csdcd'} width={10} height={10} position={'top'}/>
            <MediaRenderElement value={'csdvcds'} width={500} height={500} position={'top'}/>
            <NavButtonRenderElement navigation={'/'} nav_label={'ndcjdscnds'} width={10} height={10} text_color={'white'} bg_color={'red'} hoverEffects={'true'} fontFamily={null} fontSize={null}/>
            TEXT ELEMENThuge      <TextRenderElement text={'dsvsvds'} fontFamily={'Arial'} fontSize={null} position={null}/>
            <TitleRenderElement title={'sdvsdv'} />
            <DropDownRenderElement label={'interests'} searchable={false} listElement={null}/>
            <InputFieldRenderElement type={'string'} label={'Password'} isObscured={null}/>
        </div>
    );
}

//Navbar.component.js
"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState} from "react";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
        setCurrentPath(window.location.pathname);
    },[]);
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/");
    };
    const hangleToHome = (event) => {
        event.preventDefault();
        router.push("/");
    }
    const handleToRegister = (event) => {
        event.preventDefault();
        router.push("/register");
    }
    const handleToLogin = (event) => {
        event.preventDefault();
        router.push("/login");
    }
    const handleToLogIn = (event) => {
        event.preventDefault();
        router.push("/login");
    }
    const handleToProfile = (event) => {
        event.preventDefault();
        router.push("/profile");
    }
    const handleToPlanTrip = (event) => {
        event.preventDefault();
        router.push("/trip/plan");
    }
    const handleNavigation = (event, path) => {
        event.preventDefault();
        router.push(path);
    }

    return (
        <nav>
            <ul className="list">
                <Image src="/assets/travel-around-the-world.png" className="logo" onClick={handleToHome} width={50} height={50} alt="Travel Logo" />
                <h3 className="nav-title" onClick={handleToHome}>        TriPlanner        </h3>
                {currentPath === "/login" ? (
                    <>
                        <li><button className="nav-buttons" onClick={handleToHome}>Home</button></li>
                        <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                    </>
                ) : (
                    isAuthenticated ? (
                        <>
                            <li><button className="nav-buttons" onClick={(e) => handleNavigation(e, "/")}>home</button></li>
                        </>
                    ) : (
                        <>
                            <li><button className="nav-buttons" onClick={handleToLogIn}>Login</button></li>
                            <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                        </>
                    )
                )
                }
            </ul>
        </nav>
    );
}
//RotatingGlobe code
function RotatingGlobeComponent() {
    return (
        <div id="earth">
        </div>
    )
}