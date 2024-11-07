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

    const currentDate = new Date();

    const upcomingTrips = sortedTrips.filter(trip => new Date(trip.startDate) >= currentDate);
    const pastTrips = sortedTrips.filter(trip => new Date(trip.startDate) < currentDate);

    return (
        <div className="profile-container">
            <div className="profile-flex-container">
                <div className="profile-card-container">
                    <div className="profile-card">
                        <h2>Profile</h2>
                        <div>
                            <h4><strong>Name:</strong> {userData.name}</h4>
                            <h4><strong>Last Name:</strong> {userData.lastName}</h4>
                            <h4><strong>Birthday:</strong> {formatDate(userData.birthday)}</h4>
                            <h4><strong>Email:</strong> {userData.email}</h4>
                        </div>
                    </div>
                </div>
                <ChartSlider trips={sortedTrips} />
            </div>

            {upcomingTrips.length > 0 && (
                <>
                    <div className="trips-container">
                        {upcomingTrips.map((trip) => (
                            <div key={trip._id}>
                                <TripCard tripData={trip} onDeleteSuccess={handleDeleteSuccess} />
                            </div>
                        ))}
                    </div>
                    <hr className="trip-separator" />
                </>
            )}

            {pastTrips.length > 0 && (
                <>
                    <div className="trips-container">
                        {pastTrips.map((trip) => (
                            <div key={trip._id}>
                                <TripCard tripData={trip} onDeleteSuccess={handleDeleteSuccess} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
