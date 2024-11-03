import React, { useState } from "react";
import {PastTripsChart} from "@/app/profile/components/PastTripsChart.component";
import {UpcomingTripsChart} from "@/app/profile/components/UpcomingTripsChart.component";
import {InterestsDoughnutChart} from "@/app/profile/components/InterestsChart.component";


const charts = [
    { id: "pastTrips", title: "Past Trips", component: PastTripsChart },
    { id: "upcomingTrips", title: "Upcoming Trips", component: UpcomingTripsChart },
    { id: "interests", title: "Interests", component: InterestsDoughnutChart },
];

const ChartSlider = ({ trips }) => {
    const [currentChartIndex, setCurrentChartIndex] = useState(0);

    const handleNext = () => {
        setCurrentChartIndex((prevIndex) => (prevIndex + 1) % charts.length);
    };

    const handlePrev = () => {
        setCurrentChartIndex((prevIndex) => (prevIndex - 1 + charts.length) % charts.length);
    };

    return (
        <div className="chart-slider">
            <div className="charts-container" style={{ transform: `translateX(-${currentChartIndex * 100}%)` }}>
                {charts.map((chart) => (
                    <div key={chart.id} className="chart-item">
                        <chart.component trips={trips} />
                    </div>
                ))}
            </div>
            <div className="chart-controls">
                <button className="btn" onClick={handlePrev} disabled={currentChartIndex === 0}>&lt;</button>
                <button className="btn" onClick={handleNext} disabled={currentChartIndex === charts.length - 1}>&gt;</button>
            </div>
        </div>
    );
};

export default ChartSlider;
