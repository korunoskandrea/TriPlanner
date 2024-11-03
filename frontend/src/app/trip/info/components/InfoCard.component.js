import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "@/app/utils/auth";
import axios from "axios";
import TripCard from "@/app/common/components/TripCard.component";
import Map from "@/app/trip/info/components/Map.component";
// Import your Map component

export default function InfoCard() {
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
                        Authorization: `Bearer ${token}`,
                    },
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
        <div className="info-container">
            <div className="info-card">
                    <TripCard tripData={tripData} />
            </div>
            <button onClick={navigateToProfile} className="auth-btn">
                Visit your Profile
            </button>
        </div>
    );
}
