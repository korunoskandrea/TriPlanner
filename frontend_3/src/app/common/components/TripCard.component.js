import React, { useState } from "react";
import Map from "@/app/trip/info/components/Map.component";

export default function TripCard({ tripData, onDeleteSuccess }) {
    const [isDeleting, setIsDeleting] = useState(false);

    if (!tripData) {
        return <p>Loading trip information...</p>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const isPastEvent = new Date(tripData.endDate) < new Date();

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3002/api/trips/${tripData._id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete trip");
            }
            alert("Trip deleted successfully");
            if (onDeleteSuccess) onDeleteSuccess(tripData._id); // Call the onDeleteSuccess function
        } catch (error) {
            console.error("Failed to delete trip:", error);
            alert("Error deleting trip");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="trip-card">
                    <Map location={tripData.location}/>
                <div className="card-info">
                    <div className="info-left">
                        <p><strong>Trip Type:</strong> {tripData.tripType}</p>
                        <p><strong>Group Size:</strong> {tripData.groupSize || 0}</p>
                        <p><strong>Location:</strong> {tripData.location}</p>
                        <p><strong>Interests:</strong> {tripData.interests.join(", ")}</p>
                    </div>
                    <div className="info-right">
                        <p><strong>Start Date:</strong> {formatDate(tripData.startDate)}</p>
                        <p><strong>End Date:</strong> {formatDate(tripData.endDate)}</p>
                        {tripData.notes && <p><strong>Notes:</strong> {tripData.notes}</p>}
                    </div>
                </div>

                <button
                    onClick={handleDelete}
                    className="classic-btn"
                    disabled={isDeleting}
                >
                    {isDeleting ? "Deleting..." : "Delete Trip"}
                </button>
        </div>
    );
}
