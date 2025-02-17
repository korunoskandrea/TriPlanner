"use client"
import {Typewriter} from "react-simple-typewriter";
import React, {useLayoutEffect, useEffect, useState,} from "react";
import {redirect} from "next/navigation";

const api_var = 'http://localhost:3000/4100/api/';

// frontend/src/app/login/LoginForm.js
"use client";
import { useState } from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import { useRouter } from "next/navigation";

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await onSubmit({
                email,
                password
            });

            router.push("/trip/plan");
        } catch (err) {
            setError('An unexpected error occurred. User does not exist or there are incorrect password and email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Log In</h2>
            {error && <div className="error-message">{error}</div>}
            <div>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Logging in..." : "Log in"} onClick={handleLogin} disabled={loading} />
        </form>
    );
}

// frontend/src/app/login/page.js
"use client";

import LoginForm from "./LoginForm.component";
import axios from "axios";

export default function LoginPage() {
    const handleLogin = async (event) => {
        const response = await axios.post(api_var + "/auth/login",{
            email: event.email,
            password: event.password,
        });

        const { token, expiresIn } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);
    };

    return <LoginForm onSubmit={handleLogin} />;
}

// frontend/src/app/register/page.js
"use client"

import axios from "axios";
import RegisterForm from "@/app/register/RegisterForm.component";

export default function RegisterPage() {
    const handleRegister = async (event) => {
        const response = await axios.post( api_var + "/auth/register", {
            name: event.name,
            lastName: event.lastName,
            email: event.email,
            password: event.password,
            birthday: event.birthday
        });
        const {token, expiresIn} = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("expiresIn", expiresIn);

    }

    return <RegisterForm onSubmit={handleRegister}/>;

}
// frontend/src/app/register/RegisterForm.js
import {useEffect, useState} from "react";
import InputField from "@/app/common/components/InputField.component";
import AuthSubmitBtnComponent from "@/app/common/components/AuthSubmitBtn.component";
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        onSubmit({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            birthday: birthday
        });

        router.push("/login")

    }

    return (
        <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <div>
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <InputField
                    label="Birthday"
                    type="date"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                />
            </div>
            <AuthSubmitBtnComponent label={loading ? "Registering..." : "Register"} onClick={handleRegister}
                                    disabled={loading}/>
        </form>
    );
}
export function CalendarRenderElement({date_format, position}){
    return (
        <div> <!-- Calendar Container -->
            <div class="calendar">
                <!-- Month and Year Header -->
                <div class="calendar-header">November 2024</div>

                <!-- Days of the Week -->
                <div class="calendar-days">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>

                <!-- Calendar Dates -->
                <div class="calendar-dates">
                    <!-- Blank spaces for days before the month starts on Friday -->
                    <div></div> <div></div> <div></div> <div></div> <div></div> <div class="today">1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div> <div>6</div> <div>7</div> <div>8</div> <div>9</div> <div>10</div> <div>11</div> <div>12</div> <div>13</div> <div>14</div> <div>15</div> <div>16</div> <div>17</div> <div>18</div> <div>19</div><div>20</div> <div>21</div> <div>22</div> <div>23</div> <div>24</div> <div>25</div> <div>26</div><div>27</div> <div>28</div> <div>29</div> <div>30</div> </div></div>
        </div>
    );
}

export function DateRenderElement({date_format_start, date_format_end}){
    return (
        <h3> {date_format_start} {date_format_end} </h3>
    );
}

export function InputFieldRenderElement({type, label, isObscured, fontFamily, fontSize}){
    return (
        <input> {type} {label} {isObscured} {fontFamily} {fontSize} </input>
    );
}

import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

let idCounter = 0;

export default function Map({ location }) {
    const id = idCounter++;
    const [coords, setCoords] = useState({ lat: null, lng: null });

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await axios.get(
                    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
                        location
                    )}&format=json&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_GEOAPIFY_API_KEY}`
                );
                const result = response.data.results[0];
                if (result) {
                    const { lat, lon } = result;
                    setCoords({ lat, lng: lon });
                } else {
                    console.error("No results found for the location.");
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
            }
        };

        if (location) {
            fetchCoordinates();
        }
    }, [location]);

    useEffect(() => {
        if (coords.lat && coords.lng) {
            const container = L.DomUtil.get(id.toString());

            if (container != null) {
                container._leaflet_id = null;
            }
            const map = L.map(id.toString(), {
                center: [coords.lat, coords.lng],
                zoom: 15,
                zoomControl: false,
                attributionControl: false,

            });

            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
                {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox/streets-v11",
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken:
                        "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
                }
            ).addTo(map);

            const transparentIcon = new L.Icon({
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/8bFZ4cAAAAASUVORK5CYII=', // 1x1 transparent PNG
                iconSize: [0, 0],
                iconAnchor: [0, 0],
                popupAnchor: [0, 0],
                shadowUrl: null,
                shadowSize: [0, 0],
                shadowAnchor: [0, 0],
            });

            L.marker([coords.lat, coords.lng], { icon: transparentIcon })
                .addTo(map)
                .bindPopup(`<span class="popup-location">${location}</span>`)
                .openPopup();
        }
    }, [coords]);


    return <div className="map" id={id.toString()} ></div>;
}

export function MapRenderElement({pin_icon, width, height, position}){
    return (
        <Map> {pin_icon} {width} {height} {position} </Map>
    );
}

export function MediaRenderElement({value, width, height, position}){
    return (
        <img> {value} {width} {height} {position} </img>
    );
}

export function NavButtonRenderElement({navigation, nav_label, withd, height, text_colot, bg_color, hoverEffects, fontFamily, fontSize}){
    return (
        <button> {navigation} {nav_label} {withd} {height} {text_colot} {bg_color} {hoverEffects} {fontFamily} {fontSize} </button>
    );
}

export function TextRenderElement({text, fontFamily, fontSize, position}){
    return (
        <p> {text} {fontFamily} {fontSize} {position} </p>
    );
}

export function TitleRenderElement({title}){
    return (
        <h1> {title} </h1>
    );
}

// frontend/src/app/home/page.js
"use client"
import {Typewriter} from "react-simple-typewriter";
import React, {useLayoutEffect, useEffect, useState,} from "react";
import {redirect} from "next/navigation";
export default function homePage() {
    function isAuthenticated() {
        const token = localStorage.getItem("token");
        return token !== null;
    }

    useLayoutEffect(() => {
        const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated;
        if (!isAuth) {
            redirect("/");
        }
    }, []);
    return (
        <div>
            <Navbar/>
            <CalendarRenderElement date_format={'5.1.2026'} position={'top'}/>
            <InputFieldRenderElement type={'string'} label={'Email'} isObscured={null} fontFamily={null} fontSize={null}/>
            <DatePeriodRenderElement date_format_start={'5.1.2026'} date_format_end={'10.2.2026'} />
            <MapRenderElement pin_icon={'csdcd'} width={10} height={10} position={'top'}/>
            <MediaRenderElement value={'csdvcds'} width={500} height={500} position={'top'}/>
            <NavButtonRenderElement navigation={'/'} nav_label={'ndcjdscnds'} width={10} height={10} text_color={'white'} bg_color={'red'} hoverEffects={'true'} fontFamily={null} fontSize={null}/>
            TEXT ELEMENThuge      <TextRenderElement text={'dsvsvds'} fontFamily={'Arial'} fontSize={null} position={null}/>
            <TitleRenderElement title={'sdvsdv'} />
            <InputFieldRenderElement type={'string'} label={'Password'} isObscured={null}/>
        </div>
    );
}

//Navbar.component.js
"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState} from "react";
import Image from "next/image";

export default function Navbar() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
        setCurrentPath(window.location.pathname);
    },[]);
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/");
    };
    const hangleToHome = (event) => {
        event.preventDefault();
        router.push("/");
    }
    const handleToRegister = (event) => {
        event.preventDefault();
        router.push("/register");
    }
    const handleToLogin = (event) => {
        event.preventDefault();
        router.push("/login");
    }
    const handleToLogIn = (event) => {
        event.preventDefault();
        router.push("/login");
    }
    const handleToProfile = (event) => {
        event.preventDefault();
        router.push("/profile");
    }
    const handleToPlanTrip = (event) => {
        event.preventDefault();
        router.push("/trip/plan");
    }
    const handleNavigation = (event, path) => {
        event.preventDefault();
        router.push(path);
    }

    return (
        <nav>
            <ul className="list">
                <Image src="/assets/travel-around-the-world.png" className="logo" onClick={handleToHome} width={50} height={50} alt="Travel Logo" />
                <h3 className="nav-title" onClick={handleToHome}>        TriPlanner        </h3>
                {currentPath === "/login" ? (
                    <>
                        <li><button className="nav-buttons" onClick={handleToHome}>Home</button></li>
                        <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                    </>
                ) : (
                    isAuthenticated ? (
                        <>
                            <li><button className="nav-buttons" onClick={(e) => handleNavigation(e, "/")}>home</button></li>
                        </>
                    ) : (
                        <>
                            <li><button className="nav-buttons" onClick={handleToLogIn}>Login</button></li>
                            <li><button className="nav-buttons" onClick={handleToRegister}>Register</button></li>
                        </>
                    )
                )
                }
            </ul>
        </nav>
    );
}
//RotatingGlobe code
function RotatingGlobeComponent() {
    return (
        <div id="earth">
        </div>
    )
}