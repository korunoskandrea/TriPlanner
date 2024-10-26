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

    return(
        <form onSubmit={handlePlan} className="plan-form">
            <TripTypeSelectorComponent
                tripType={tripType}
                groupSize={groupSize}
                onTripTypeChange={(e) => setTripType(e.target.value)}
                onGroupSizeChange={(e) => setGroupSize(e.target.value)}
            />

            <LocationInput
                location={location}
                onLocationChange={setLocation}
            />

            <InterestSelector
                interests={interests}
                onInterestChange={(e) => {
                    const {value, checked} = e.target;
                    setInterests((prev) =>
                        checked ? [...prev, value] : prev.filter((interest) => interest !== value)
                    );
                }}
            />

            <DatePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={(e) => setStartDate(e.target.value)}
                onEndDateChange={(e) => setEndDate(e.target.value)}
            />

            <InputField
                label="Notes"
                type="notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />

            <button onClick={handlePlan}>Info for the trip</button>
        </form>
    );
}