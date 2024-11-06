"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
        setCurrentPath(window.location.pathname);
    }, []);

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/");
    };

    const handleToHome = (event) => {
        event.preventDefault();
        router.push("/");
    }
    const handleToRegister = (event) => {
        event.preventDefault();
        router.push("/register");
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

    return (
        <nav>
            <ul className="list">
                <Image src="/assets/travel-around-the-world.png" className="rotate" width={50} height={50} alt="Travel Logo" />
                <h3 className="h3-navbar"> TriPlanner</h3>
                {currentPath === "/login" ? (
                    <>
                        <li><button className="nav-buttons" onClick={handleToHome}>Home</button></li>
                        <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                    </>
                ) : (
                    isAuthenticated ? (
                        <>
                            <li><button className="nav-buttons" onClick={handleToHome}>Home</button></li>
                            <li><button className="nav-buttons" onClick={handleToProfile}>Profile</button></li>
                            <li><button className="nav-buttons" onClick={handleToPlanTrip}>Plan Trip</button></li>
                            <li><button className="nav-buttons" onClick={handleLogout}>Log out</button></li>
                        </>
                    ) : (
                        <>
                            <li><button className="nav-buttons" onClick={handleToLogIn}>Login</button></li>
                            <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                        </>
                    )
                )}
            </ul>
        </nav>
    );
}
