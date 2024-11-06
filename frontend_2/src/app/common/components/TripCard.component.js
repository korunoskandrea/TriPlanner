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
        <div>
            <div className="card-body">
                <h2 className="card-title">
                    {isPastEvent ? "Past Event" : "Upcoming Event"}
                </h2>
                <legend>Trip Type: {tripData.tripType}</legend>
                <legend>Group Size: {tripData.groupSize || 0}</legend>
                <legend>Location: {tripData.location}</legend>
                <legend>Interests: {tripData.interests.join(", ")}</legend>
                <legend>Start Date:{formatDate(tripData.startDate)}</legend>
                <legend>End Date: {formatDate(tripData.endDate)} </legend>
                {tripData.notes && <legend>Notes: {tripData.notes}</legend>}
                <Map location={tripData.location} />
                <button onClick={handleDelete} className="classic-btn" disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Delete Trip"}
                </button>
            </div>
        </div>
    );
}
