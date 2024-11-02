"use client"

import {useRouter} from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const navigateTo = (path) => {
        setTimeout(() => {
            router.push(path);
        }, 100);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary me-2" onClick={() => navigateTo("/login")}>
                        Log in
                    </button>
                    <button className="btn btn-primary" onClick={() => navigateTo("/register")}>
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
}