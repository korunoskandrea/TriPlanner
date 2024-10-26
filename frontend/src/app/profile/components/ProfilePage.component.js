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
        <div className="profile-page">
            <h2>Profile</h2>
                <p><strong>Name:</strong> {userData.name} </p>
                <p><strong>Lastname:</strong> {userData.lastName}</p>
                <p><strong>Birthday:</strong> {formatDate(userData.birthday)}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                { userData.trips.map((trip) =>  <TripCard tripData={trip}></TripCard>) }
        </div>
    );
}
