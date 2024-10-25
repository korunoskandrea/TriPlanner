import React from 'react';

export default function LocationInput({location, onLocationChange}) {
    const [locationList, setLocationList] = React.useState([]);

    const fetchLocations = async () => {
        const response = await fetch(`api/places/populate-countries-cities`);
        const data = await response.json();
        setLocationList(data);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        onLocationChange(value);
        if (value) fetchLocations(value);
    };

    return (
        <div>
            <label>
                Where are you travelling to?
                <input
                    type="text"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter Location"
                />
            </label>
            {locationList.length > 0 && (
                <ul>
                    {locationList.map((location) => (
                        <li key={location.id}>{location.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}