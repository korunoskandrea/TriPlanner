import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

let idCounter = 0;

export default function Map({ location }) {
  const id = idCounter++;
  const [coords, setCoords] = useState({ lat: null, lng: null });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
            location
          )}&format=json&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_GEOAPIFY_API_KEY}`
        );
        const result = response.data.results[0];
        if (result) {
          const { lat, lon } = result;
          setCoords({ lat, lng: lon });
        } else {
          console.error("No results found for the location.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    if (location) {
      fetchCoordinates();
    }
  }, [location]);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      const container = L.DomUtil.get(id.toString());

      if (container != null) {
        container._leaflet_id = null;
      }
      const map = L.map(id.toString()).setView([coords.lat, coords.lng], 15);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
        }
      ).addTo(map);

      L.marker([coords.lat, coords.lng])
        .addTo(map)
        .bindPopup(`Location: ${location}`)
        .openPopup();
    }
  }, [coords]);

  return <div className="map" id={id.toString()} ></div>;
}
