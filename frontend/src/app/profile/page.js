"use client";

import {ProfilePage} from "@/app/profile/components/ProfilePage.component";
import Navbar from "@/app/common/components/Navbar.component";
import PlanForm from "@/app/trip/plan/components/PlanForm.component";
import React, {useLayoutEffect} from "react";
import {redirect} from "next/navigation";
import {isAuthenticated} from "@/app/utils/auth";

export default function UserProfile() {
    useLayoutEffect(() => {
        const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated;
        if (!isAuth) {
            redirect("/");
        }
    }, []);
    return (
        <>
            <Navbar/>
            <ProfilePage/>
        </>
    )
}
