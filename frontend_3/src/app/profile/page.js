"use client";

import {ProfilePage} from "@/app/profile/components/ProfilePage.component";
import Navbar from "@/app/common/components/Navbar.component";
import React, {useLayoutEffect} from "react";
import {redirect} from "next/navigation";
import {isAuthenticated} from "@/app/utils/auth";

export default function UserProfile() {
    useLayoutEffect(() => {
        const isAuth =  isAuthenticated() ;
        if (!isAuth) {
            redirect("/");
        }
    }, []);
    return (
        <div className="page-container">
            <Navbar className="navbar-left"/>
            <ProfilePage/>
        </div>
    )
}
