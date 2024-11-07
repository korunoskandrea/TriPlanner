import { useEffect, useState } from "react";
import axios from "axios";
import TripCard from "@/app/common/components/TripCard.component";
import ChartSlider from "@/app/profile/components/ChartSlider.component";

export function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:3002/api/user/`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (!response) {
                    throw new Error("Error fetching user data");
                }
                setUserData(response.data);
                setTrips(response.data.trips);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleDeleteSuccess = (deletedTripId) => {
        setTrips((prevTrips) => prevTrips.filter(trip => trip._id !== deletedTripId));
    };

    if (!userData) return <div>Loading...</div>;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const sortedTrips = [...trips].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    const pastTrips = sortedTrips.filter((trip) => new Date(trip.endDate) < new Date());
    const upcomingTrips = sortedTrips.filter((trip) => new Date(trip.startDate) >= new Date());

    return (
        <div className="profile-page-container">
            <div className="profile-section">
                <div className="profile-card">
                    <h2>Profile</h2>
                    <div>
                        <p><strong>Name:</strong> {userData.name}</p>
                        <p><strong>Last Name:</strong> {userData.lastName}</p>
                        <p><strong>Birthday:</strong> {formatDate(userData.birthday)}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                </div>
                <ChartSlider trips={sortedTrips} />
            </div>

            <div className="trips-section">
                <div className="trips-column">
                    <h2>Past Trips</h2>
                    {pastTrips.length === 0 ? (
                        <p>No past trips</p>
                    ) : (
                        <div className="vertical-scroll">
                            {pastTrips.map((trip) => (
                                <TripCard tripData={trip} key={trip._id} onDeleteSuccess={handleDeleteSuccess} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="trips-column">
                    <h2>Upcoming Trips</h2>
                    {upcomingTrips.length === 0 ? (
                        <p>No upcoming trips</p>
                    ) : (
                        <div className="vertical-scroll">
                            {upcomingTrips.map((trip) => (
                                <TripCard tripData={trip} key={trip._id} onDeleteSuccess={handleDeleteSuccess} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
