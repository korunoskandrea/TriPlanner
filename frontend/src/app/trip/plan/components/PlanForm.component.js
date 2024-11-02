import {useState} from "react";
import TripTypeSelectorComponent from "@/app/common/components/TripTypeSelector.component";
import LocationInput from "@/app/common/components/LocationInput.component";
import InterestSelector from "@/app/common/components/InterestSelector.component";
import DatePicker from "@/app/common/components/DatePicker.component";
import InputField from "@/app/common/components/InputField.component";

export default function PlanForm({onSubmit}) {
    const [tripType, setTripType] = useState('alone');
    const [groupSize, setGroupSize] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [notes, setNotes] = useState('');

    const handlePlan = (event) => {
        event.preventDefault();
        if (new Date(startDate) >= new Date(endDate)) {
            alert("Incorrect date period");
            return;
        }
        onSubmit({
            tripType: tripType,
            groupSize: groupSize,
            location: location,
            interests: interests,
            startDate: startDate,
            endDate: endDate,
            notes: notes
        });
    }

    return (
        <form onSubmit={handlePlan} className="plan-form container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "600px" }}>
            <h2 className="mb-4 text-center">Plan Your Trip</h2>

            <div className="mb-3">
                <TripTypeSelectorComponent
                    tripType={tripType}
                    groupSize={groupSize}
                    onTripTypeChange={(e) => setTripType(e.target.value)}
                    onGroupSizeChange={(e) => setGroupSize(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <LocationInput
                    location={location}
                    onLocationChange={setLocation}
                />
            </div>

            <div className="mb-3">
                <InterestSelector
                    interests={interests}
                    onInterestChange={(e) => {
                        const { value, checked } = e.target;
                        setInterests((prev) =>
                            checked ? [...prev, value] : prev.filter((interest) => interest !== value)
                        );
                    }}
                />
            </div>

            <div className="mb-3">
                <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={(e) => setStartDate(e.target.value)}
                    onEndDateChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <InputField
                    label="Notes"
                    type="text"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">
                Info for the Trip
            </button>
        </form>
    );
}
