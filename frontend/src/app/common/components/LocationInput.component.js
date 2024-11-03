import React, { useState } from 'react';

export default function LocationInput({ countries = [], onLocationChange }) {
    const [country, setCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    const fetchCities = async (countryName) => {
        try {
            const response = await fetch(`http://localhost:3002/api/places/cities?country=${countryName}`);
            if (!response.ok) {
                console.error('Error fetching cities:', response.statusText);
                return [];
            }
            const data = await response.json();
            console.log('Fetched cities:', data);
            return data.cities || [];
        } catch (error) {
            console.error('Error fetching cities:', error);
            return [];
        }
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

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        onLocationChange(city);
    };

    return (
        <div>
            <div>
                <legend>Where are you traveling to?</legend>
                <select
                    value={country}
                    onChange={handleCountryChange}>
                    <option value="" disabled>Select a country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
            {cities.length > 0 && (
                <div>
                    <legend>Select a city:</legend>
                    <select
                        value={selectedCity}
                        onChange={handleCityChange}>
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


//import React, { useState } from 'react';
//
// export default function LocationInput({ location, onLocationChange }) {
//     const [country, setCountry] = useState('');
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [timeoutId, setTimeoutId] = useState(null);
//
//     const fetchCities = async (countryName) => {
//         const response = await fetch(http://localhost:3002/api/places/cities?country=${countryName});
//         console.log(response)
//         if (!response.ok) {
//             console.error('Error fetching cities:', response.statusText);
//             return [];
//         }
//         const data = await response.json();
//         console.log('Fetched cities:', data);
//         return data.cities || [];
//     };
//
//     const handleCountryChange = async (event) => {
//         const value = event.target.value;
//         setCountry(value);
//
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//
//         const id = setTimeout(async () => {
//             if (value) {
//                 const citiesData = await fetchCities(value);
//                 setCities(citiesData);
//                 setSelectedCity('');
//             } else {
//                 setCities([]);
//                 setSelectedCity('');
//             }
//         }, 1000);
//
//         setTimeoutId(id);
//     };
//
//     const handleCityChange = async (event) => {
//         const city = event.target.value;
//         await setSelectedCity(city);
//         onLocationChange(city);
//     };
//
//     return (
//         <div>
//             <div>
//                 <legend>Where are you traveling to?</legend>
//                 <select
//                     value={country}
//                     onChange={handleCountryChange}>
//                     <option value="" disabled>Select a country</option>
//                     {country.map((country, index) => (
//                         <option key={index} value={country}>
//                             {country}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             {cities.length > 0 && (
//                 <div>
//                     <legend>Select a city:</legend>
//                     <select
//                         value={selectedCity}
//                         onChange={handleCityChange}>
//                         <option value="" disabled>Select a city</option>
//                         {cities.map((city, index) => (
//                             <option key={index} value={city}>
//                             {city}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             )}
//         </div>
//     );
// }