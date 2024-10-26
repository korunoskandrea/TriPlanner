"use client"
import {useRouter} from "next/router";
import {useState} from "react";


export default function InfoPage() {
    const router = useRouter();
    const { tripType, groupSize, location, interests, startDate, endDate } = router.query;

    const [notes, setNotes] = useState(''); // State to store note todo

    const handleNotesChange = (event) => {
        setNotes(event.target.value); // Update notes state
    };

    const handleSaveNotes = () => {
        localStorage.setItem('tripNotes', notes); // Save to local storage
        alert("Notes saved!"); // Feedback for the user
    };

    return (
        <div className="container">
            <h1>Trip Information</h1>
            <h2>Trip Type: {tripType}</h2>
            <h2>Group Size: {groupSize}</h2>
            <h2>Location: {location}</h2>
            <h2>Interests: {interests?.split(',').join(', ')}</h2>
            <h2>Start Date: {startDate}</h2>
            <h2>End Date: {endDate}</h2>

            <h3>Add Notes About Your Trip</h3>
            <textarea
                value={notes}
                onChange={handleNotesChange}
                rows={5}
                cols={50}
                placeholder="Write your notes here..."
            />

            <button onClick={handleSaveNotes}>Save Notes</button>
        </div>
    );
}
