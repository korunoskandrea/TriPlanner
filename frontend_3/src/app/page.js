"use client"
import Navbar from "@/app/common/components/Navbar.component";
import RotatingGlobeComponent from "@/app/common/components/RotatingGlobe.component";
import {Typewriter} from "react-simple-typewriter";

export default function HomePage() {
    return (
        <div className="page-container">
            <Navbar className="navbar-left" />
            <div className="home-page-content">
                <h1>
                    <Typewriter
                        words={["Welcome To TriPlanner!"]}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />
                </h1>
                <RotatingGlobeComponent />
                <h3>
                    <Typewriter
                        words={["Let's plan together"]}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={200}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />
                </h3>
            </div>
        </div>
    );
}
