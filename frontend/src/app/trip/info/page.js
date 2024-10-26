"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import TripCard from "@/app/common/components/TripCard.component";

export default function InfoPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tripId = searchParams.get("id");
    const [tripData, setTripData] = useState(null);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No token found; user might not be authenticated.");
                    return;
                }
                const response = await axios.get(`http://localhost:3002/api/trips/${tripId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTripData(response.data);
            } catch (error) {
                console.error("Error fetching trip data:", error);
            }
        };

        if (tripId) fetchTripData();
    }, [tripId]);

    const navigateToProfile = () => {
        router.push("/profile");
    };

    return (
        <div className="container">
            <TripCard tripData={tripData} />
            <button onClick={navigateToProfile}>Visit your Profile</button>
        </div>
    );
}
