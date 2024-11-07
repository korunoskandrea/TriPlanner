import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function UpcomingTripsChart({trips}) {
    const upcomingTrips = trips.filter(trip => new Date(trip.startDate) > new Date());
    const tripCountByMonth = Array(12).fill(0);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    upcomingTrips.forEach(trip => {
        const tripStartDate = new Date(trip.startDate);
        const tripYear = tripStartDate.getFullYear();
        const tripMonth = tripStartDate.getMonth();

        if (tripYear < currentYear || (tripYear === currentYear && tripMonth < currentMonth)) {
            return;
        }

        const monthIndex = (tripMonth - currentMonth + 12) % 12;
        tripCountByMonth[monthIndex] += 1;
    });

    const labels = [];
    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonth + i) % 12;
        labels.push(new Date(currentYear, monthIndex).toLocaleString('default', { month: 'long' }));
    }

    const totalTrips = upcomingTrips.length;
    const data = {
        labels,
        datasets: [{
            label: 'Upcoming Trips Count',
            data: tripCountByMonth,
            backgroundColor: '#c84b31',
            borderColor: '#2d4263',
        }],
    };

    return (
        <div style={{ width: '500px', height: '300px' }}>
            <Bar
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: totalTrips + 1,
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