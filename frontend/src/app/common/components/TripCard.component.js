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
                <legend>Trip Type: {tripData.tripType}</legend>
                <legend>Group Size: {tripData.groupSize || 0}</legend>
                <legend>Location: {tripData.location}</legend>
                <legend>Interests: {tripData.interests.join(", ")}</legend>
                <legend>Start Date:{formatDate(tripData.startDate)}</legend>
                <legend>End Date: {formatDate(tripData.endDate)} </legend>
                {tripData.notes && <legend>Notes: {tripData.notes}</legend>}
                <Map location={tripData.location} />
            </div>
        </div>
    );
}
