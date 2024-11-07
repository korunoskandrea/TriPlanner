import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "@/app/common/components/TripCard.component";

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

    if (!tripData) {
        return <div>Loading trip data...</div>;
    }

    return (
        <div className="info-container">
            <div className="trip-card-container">
                <TripCard tripData={tripData} />
            </div>
            <div className="info-footer">
                <button onClick={navigateToProfile} className="classic-btn">
                    Visit your Profile
                </button>
            </div>
        </div>
    );
}
