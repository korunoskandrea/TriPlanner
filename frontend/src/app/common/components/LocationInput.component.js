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
                const countriesList = [];
                const citiesList = {};
                for (const place of data.places) {
                    countriesList.push(place.countryName);
                    citiesList[place.countryName] = place.cities;
                }
                setCountries(countriesList);
                setAllCities(citiesList);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchCountries();
    }, []);

    const handleCountryChange = (event) => {
        const country = event.target.value;
        setCountry(country);
        setCities(allCities[country] || []);
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        onLocationChange(city);
    };

    return (
        <div className="location-input">
             <legend>Where are you traveling to?</legend>
                <div className="select-group">
                    <label htmlFor="country-select">Country</label>
                    <select
                        id="country-select"
                        value={country}
                        onChange={handleCountryChange}
                        className="select-input"
                    >
                        <option value="" disabled>Select a country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                {cities.length > 0 && (
                    <div className="select-group">
                        <label htmlFor="city-select">City</label>
                        <select
                            id="city-select"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="select-input"
                        >
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
