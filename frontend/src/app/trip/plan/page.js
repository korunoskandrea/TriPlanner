'use client';

import DatePicker from "@/app/common/components/DatePicker.component";
import LocationInput from "@/app/common/components/LocationInput.component";
import TripTypeSelectorComponent from "@/app/common/components/TripTypeSelector.component";
import InterestSelector from "@/app/common/components/InterestSelector.component";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function PlanTrip() {
  const [tripType, setTripType] = useState('alone');
  const [groupSize, setGroupSize] = useState('');
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const router = useRouter();
  const handleInfoTrip = () => {
      if (!tripType || !location || !startDate || !endDate) {
          alert("Please fill in all fields before proceeding.");
          return;
      }

      router.push('/trip/info', {
          query: {
              tripType: tripType,
              group: groupSize,
              location: location,
              interests: interests.join(',') || '',
              startDate: startDate,
              endDate: endDate,
          },
      });
  }

  return (
      <>
          <div className="container">
              <h1>Plan Your Trip</h1>

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

              <button onClick={handleInfoTrip}>Info for the trip</button>
          </div>
      </>
  );
}