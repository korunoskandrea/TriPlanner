import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function PastTripsChart({ trips }) {
    const pastTrips = trips.filter(trip => new Date(trip.startDate) < new Date());
    const tripCountByMonth = Array(12).fill(0);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    pastTrips.forEach(trip => {
        const tripEndDate = new Date(trip.endDate);
        const tripYear = tripEndDate.getFullYear();
        const tripMonth = tripEndDate.getMonth();

        if (tripYear > currentYear || (tripYear === currentYear && tripMonth > currentMonth)) {
            return;
        }

        const monthIndex = (currentMonth - tripMonth + 12) % 12;
        tripCountByMonth[11 - monthIndex] += 1;  // Place count in the last 12 months, ending with current
    });

    const labels = [];
    for (let i = 11; i >= 0; i--) {
        const monthIndex = (currentMonth - i + 12) % 12;
        const yearOffset = currentMonth - i < 0 ? -1 : 0;
        labels.push(new Date(currentYear + yearOffset, monthIndex).toLocaleString('default', { month: 'long' }));
    }

    const totalPastTrips = pastTrips.length;
    const data = {
        labels,
        datasets: [{
            label: 'Past Trips Count',
            data: tripCountByMonth,
            backgroundColor: '#9ec5c6',
            borderColor: '#21664d',
        }],
    };

    return (
        <div style={{ width: '400px', height: '300px' }}>
            <Bar
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: totalPastTrips + 1,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
