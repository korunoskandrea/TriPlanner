"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/login");
    };

    return (
        <nav>
            <ul className="list">
                <Image src="/assets/travel-around-the-world.png" width={50} height={50} alt="Travel Logo" />
                <h3 className="h3-navbar"> TriPlanner</h3>
                {isAuthenticated ? (
                    <>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/login" onClick={handleLogout}>Log out</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/register">Register</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
}
