"use client";

import {ProfilePage} from "@/app/profile/components/ProfilePage.component";
import Navbar from "@/app/common/components/Navbar.component";
import PlanForm from "@/app/trip/plan/components/PlanForm.component";
import React from "react";

export default function UserProfile() {
    return (
        <>
            <Navbar/>
            <ProfilePage/>
        </>
    )
}
