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
                <h5 className="card-title">
                    {isPastEvent ? "Past Event" : "Upcoming Event"}
                </h5>
                <p className="card-text"><strong>Trip Type:</strong> {tripData.tripType}</p>
                <p className="card-text"><strong>Group Size:</strong> {tripData.groupSize}</p>
                <p className="card-text"><strong>Location:</strong> {tripData.location}</p>
                <p className="card-text"><strong>Interests:</strong> {tripData.interests.join(", ")}</p>
                <p className="card-text"><strong>Start Date:</strong> {formatDate(tripData.startDate)}</p>
                <p className="card-text"><strong>End Date:</strong> {formatDate(tripData.endDate)}</p>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={tripData.notes}
                        readOnly={true}
                        placeholder="Add your notes here"
                        rows={3}
                    />
                </div>
                <Map location={tripData.location} />
            </div>
        </div>
    );
}
