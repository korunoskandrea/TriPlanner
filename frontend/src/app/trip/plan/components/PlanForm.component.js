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
        <form onSubmit={handlePlan} className="plan-form ">
            <h2>Plan Your Trip</h2>

            <div>
                <TripTypeSelectorComponent
                    tripType={tripType}
                    groupSize={groupSize}
                    onTripTypeChange={(e) => setTripType(e.target.value)}
                    onGroupSizeChange={(e) => setGroupSize(e.target.value)}
                />
            </div>

            <div>
                <LocationInput
                    // location={location}
                    onLocationChange={setLocation}
                />
            </div>

            <div>
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

            <div>
                <DatePicker
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={(e) => setStartDate(e.target.value)}
                    onEndDateChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            <div>
                <InputField
                    label="Notes"
                    type="text"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                />
            </div>

            <button type="submit" className="btn">
                Info for the Trip
            </button>
        </form>
    );
}
