"use client"
import Navbar from "@/app/common/components/Navbar.component";
import BouncingGlobeComponent from "@/app/common/components/BouncingGlobe.component";
import {Typewriter} from "react-simple-typewriter";

export default function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <div className="home-page-body">
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
                <BouncingGlobeComponent/>
                <h3><Typewriter
                    words={["Let's plan together"]}
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
