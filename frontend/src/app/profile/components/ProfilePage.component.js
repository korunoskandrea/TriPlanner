import {useEffect, useState} from "react";
import axios from "axios";
import TripCard from "@/app/common/components/TripCard.component";

export function ProfilePage(){
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:3002/api/user/`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (!response){
                    throw new Error("Error fetching user data");
                }
                setUserData(response.data);
            } catch (error) {}
        };
        fetchUserProfile();
    }, []);

    if (!userData) return <div>Loading...</div>;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h2 className="mb-4 text-center">Profile</h2>
                <div className="mb-3">
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Last Name:</strong> {userData.lastName}</p>
                    <p><strong>Birthday:</strong> {formatDate(userData.birthday)}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
                <h3 className="mt-4">Trips</h3>
                <div className="row">
                    {userData.trips.map((trip, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <TripCard tripData={trip} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}