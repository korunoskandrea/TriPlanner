import React, { useEffect, useState } from 'react';

export default function LocationInput({ location, onLocationChange }) {
    const [country, setCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    const fetchCities = async (countryName) => {
        const response = await fetch(`http://localhost:3002/api/places/cities?country=${countryName}`);
        if (!response.ok) {
            console.error('Error fetching cities:', response.statusText);
            return [];
        }
        const data = await response.json();
        console.log('Fetched cities:', data);
        return data.cities || [];
    };

    const handleCountryChange = async (event) => {
        const value = event.target.value;
        setCountry(value);

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const id = setTimeout(async () => {
            if (value) {
                const citiesData = await fetchCities(value);
                setCities(citiesData);
                setSelectedCity('');
            } else {
                setCities([]);
                setSelectedCity('');
            }
        }, 1000);

        setTimeoutId(id);
    };

    const handleCityChange = async (event) => {
        const city = event.target.value;
        await setSelectedCity(city);
        onLocationChange(city);
    };

    return (
        <div>
            <label>
                Where are you traveling to?
                <input
                    type="text"
                    value={country}
                    onChange={handleCountryChange}
                    placeholder="Enter Country"
                />
            </label>
            {cities.length > 0 && (
                <div>
                    <label>
                        Select a city:
                        <select value={selectedCity} onChange={handleCityChange}>
                            <option value="" disabled>Select a city</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            )}
        </div>
    );
}
