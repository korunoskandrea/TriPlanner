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