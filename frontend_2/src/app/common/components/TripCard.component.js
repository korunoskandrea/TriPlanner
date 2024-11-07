import React, {useState} from "react";
import Map from "@/app/common/components/Map.component";

export default function TripCard({tripData, onDeleteSuccess}) {
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
            <h4><strong>Trip Type:</strong> {tripData.tripType}</h4>
            <h4><strong>Group Size:</strong> {tripData.groupSize || 0}</h4>
            <h4><strong>Location:</strong> {tripData.location}</h4>
            <h4><strong>Interests:</strong> {tripData.interests.join(", ")}</h4>
            <h4><strong>Start Date:</strong> {formatDate(tripData.startDate)}</h4>
            <h4><strong>End Date:</strong> {formatDate(tripData.endDate)}</h4>
            {tripData.notes && <h4><strong>Notes:</strong> {tripData.notes}</h4>}
            <Map location={tripData.location}/>
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
