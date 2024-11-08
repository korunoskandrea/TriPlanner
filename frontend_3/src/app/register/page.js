'use client';

import RegisterPage from "@/app/register/components/RegisterPage.component";
import Navbar from "@/app/common/components/Navbar.component";
import RotatingGlobeComponent from "@/app/common/components/RotatingGlobe.component";
import LoginPage from "@/app/login/components/LoginPage.component";
import {Typewriter} from "react-simple-typewriter";

export default function Register() {
    return (
        <div className="page-container">
            <Navbar className="navbar-left"/>
            <div className="auth-page-reg">
                <div className="content-container-reg">
                    <h2>
                        <Typewriter
                            words={["Join us and plan your next trip around the globe"]}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={0}
                            delaySpeed={1000}
                        />
                    </h2>
                    <RegisterPage/>
                </div>
            </div>
        </div>

    );
}