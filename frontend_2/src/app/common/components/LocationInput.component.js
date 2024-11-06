import React, { useState, useEffect } from 'react';

export default function LocationInput({ onLocationChange }) {
    const [country, setCountry] = useState('');
    const [allCities, setAllCities] = useState();
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/places`);
                if (!response.ok) {
                    console.error('Error fetching countries:', response.statusText);
                    return;
                }
                const data = await response.json();
                const countiresList = []
                const cititesList = {}
                for (const place of data.places) {
                    countiresList.push(place.countryName);
                    cititesList[place.countryName] = place.cities;
                }
                setCountries(countiresList);
                setAllCities(cititesList);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);

    const handleCountryChange = async (event) => {
        const country = event.target.value;
        setCountry(country);

        if (country) {
            setCities(allCities[country]);
            setSelectedCity('');
        } else {
            setCities([]);
            setSelectedCity('');
        }
    };

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        onLocationChange(city);
    };

    return (
        <div className="location-input-container">
            <div className="input-group">
                <legend>Where are you traveling to?</legend>
                <select value={country} onChange={handleCountryChange} className="location-select">
                    <option value="" disabled>Select a country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
            {cities.length > 0 && (
                <div className="input-group">
                    <legend>Select a city:</legend>
                    <select value={selectedCity} onChange={handleCityChange} className="location-select">
                        <option value="" disabled>Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}
