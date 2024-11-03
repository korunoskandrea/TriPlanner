"use client";
import React from "react";
import Map from "@/app/trip/info/components/Map.component";

export default function TripCard({ tripData }) {
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

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">
                    {isPastEvent ? "Past Event" : "Upcoming Event"}
                </h2>
                <p><strong>Trip Type:</strong> {tripData.tripType}</p>
                <p><strong>Group Size:</strong> {tripData.groupSize}</p>
                <p><strong>Location:</strong> {tripData.location}</p>
                <p><strong>Interests:</strong> {tripData.interests.join(", ")}</p>
                <p><strong>Start Date:</strong> {formatDate(tripData.startDate)}</p>
                <p><strong>End Date:</strong> {formatDate(tripData.endDate)}</p>
                {tripData.notes && <p><strong>Notes:</strong> {tripData.notes}</p>}
                <Map location={tripData.location} />
            </div>
        </div>
    );
}
