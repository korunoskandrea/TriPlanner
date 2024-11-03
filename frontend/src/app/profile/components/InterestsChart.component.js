"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const InterestsDoughnutChart = ({ trips }) => {
    if (!trips || trips.length === 0) {
        return <p>No trip data available.</p>;
    }

    // Aggregate interests
    const interestCounts = trips.reduce((acc, trip) => {
        trip.interests.forEach(interest => {
            acc[interest] = (acc[interest] || 0) + 1;
        });
        return acc;
    }, {});

    // Prepare data for the chart
    const labels = Object.keys(interestCounts);
    const data = Object.values(interestCounts);

    const chartData = {
        labels,
        datasets: [{
            data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
        }],
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Doughnut data={chartData} />
        </div>
    );
};

export default InterestsDoughnutChart;
