import axios from "axios";
import PlanForm from "@/app/trip/plan/components/PlanForm.component";
import Navbar from "@/app/common/components/Navbar.component";
import React from "react";

export function PlanPage() {
    const handlePlan = async (event) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found; user might not be authenticated.");
                return;
            }

            console.log("Event data:", event);

            const response = await axios.post(
                "http://localhost:3002/api/trips",
                {
                    tripType: event.tripType,
                    groupSize: event.groupSize,
                    location: event.location,
                    interests: event.interests,
                    startDate: event.startDate,
                    endDate: event.endDate,
                    notes: event.notes,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
        } catch (error) {
            console.error("Error creating trip:", error);
        }
    };

    return (
        <>
            <PlanForm onSubmit={handlePlan}/>
        </>

    );
}
