"use client"
import LoginPage from "@/app/login/components/LoginPage.component";
import Navbar from "@/app/common/components/Navbar.component";
import RotatingGlobeComponent from "@/app/common/components/RotatingGlobe.component";
import {Typewriter} from "react-simple-typewriter";

export default function Login() {
    return (
        <div className="page-container">
            <Navbar className="navbar-left"/>
            <div className="auth-page">
                <div className="content-container">
                    <RotatingGlobeComponent/>
                    <LoginPage/>
                </div>
            </div>
        </div>

    );
}