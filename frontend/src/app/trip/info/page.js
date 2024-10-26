"use client"
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function InfoPage() {
    const router = useRouter();
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

            <button onClick={handleSaveNotes}>Save Notes</button>
        </div>
    );
}
