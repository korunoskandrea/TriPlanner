"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Map from "@/app/trip/info/components/Map.component";

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
                console.log("Event data:", tripData);
            } catch (error) {
                console.error("Error fetching trip data:", error);
            }
        };

        if (tripId) fetchTripData();
    }, [tripId]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    return (
        <div className="container">
            <h1>Trip Information</h1>
            {tripData ? (
                <div>
                    <p><strong>Trip Type:</strong> {tripData.tripType}</p>
                    <p><strong>Group Size:</strong> {tripData.groupSize}</p>
                    <p><strong>Location:</strong> {tripData.location}</p>
                    <p><strong>Interests:</strong> {tripData.interests.join(", ")}</p>
                    <p><strong>Start Date:</strong> {formatDate(tripData.startDate)}</p>
                    <p><strong>End Date:</strong> {formatDate(tripData.endDate)}</p>
                    <textarea
                        value={tripData.notes}
                        readOnly={true}
                        placeholder="Add your notes here"
                    />
                    <Map
                        location={tripData.location}
                    />
                    <button> Visit your Profile</button>
                </div>
            ) : (
                <p>Loading trip information...</p>
            )}
        </div>
    );
}
