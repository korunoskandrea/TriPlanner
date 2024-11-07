"use client"
import LoginPage from "@/app/login/components/LoginPage.component";
import Navbar from "@/app/common/components/Navbar.component";
import RotatingGlobeComponent from "@/app/common/components/RotatingGlobe.component";
import {Typewriter} from "react-simple-typewriter";

export default function Login() {
    return (
        <div>
            <Navbar />
            <div className="auth-page">
                <div className="content-container">
                    <RotatingGlobeComponent/>
                    <LoginPage/>
                </div>
                <h3><Typewriter
                    words={["Where to next?"]}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={200}
                    deleteSpeed={0}
                    delaySpeed={1000}
                /></h3>
            </div>
        </div>

    );
}