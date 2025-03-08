import { useState, useEffect } from "react";

const useUserLocation = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        let attempts = 0;
        let bestLocation = null;

        const options = {
            enableHighAccuracy: true, // Use GPS for better precision
            timeout: 10000, // Wait max 10 seconds
            maximumAge: 0, // Prevent using cached location
        };

        const success = (position) => {
            const { latitude, longitude, accuracy } = position.coords;

            if (!bestLocation || accuracy < bestLocation.accuracy) {
                bestLocation = { lat: latitude, lon: longitude, accuracy };
            }

            attempts++;

            if (attempts >= 3 || accuracy < 20) { // Stop after 3 tries or < 20m accuracy
                setLocation({ lat: bestLocation.lat, lon: bestLocation.lon });
            } else {
                navigator.geolocation.getCurrentPosition(success, handleError, options);
            }
        };

        const handleError = (err) => {
            setError(err.message);
        };

        navigator.geolocation.getCurrentPosition(success, handleError, options);
    }, []);

    return { location, error };
};

export default useUserLocation;
