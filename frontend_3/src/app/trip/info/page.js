"use client";
import React, {useLayoutEffect} from "react";
import Navbar from "@/app/common/components/Navbar.component";
import InfoCard from "@/app/trip/info/components/InfoCard.component";
import {isAuthenticated} from "@/app/utils/auth";
import {redirect} from "next/navigation";

export default function InfoPage() {
    useLayoutEffect(() => {
        const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated;
        if (!isAuth) {
            redirect("/");
        }
    }, []);

    return (
        <>
            <Navbar/>
            <InfoCard/>
        </>
    );
}
