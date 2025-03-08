import React, { useState, useEffect } from "react";

const LocationTracker = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [watchId, setWatchId] = useState(null);

    const startTracking = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported in your browser.");
            return;
        }

        const id = navigator.geolocation.watchPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });
                setError(null); // Clear any previous errors
            },
            (err) => {
                setError(err.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 100000, // More time for better GPS lock
                maximumAge: 0,
            }
        );

        setWatchId(id);
    };

    const stopTracking = () => {
        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            setWatchId(null);
            setLocation(null);
        }
    };

    return (
        <div className="p-4 text-center">
            <h2 className="text-lg font-bold mb-4">Live Location Tracker</h2>
            {error && <p className="text-red-500">Error: {error}</p>}
            {location ? (
                <div className="p-3 bg-gray-100 rounded-lg">
                    <p><strong>Latitude:</strong> {location.lat}°</p>
                    <p><strong>Longitude:</strong> {location.lon}°</p>
                    <p><strong>Accuracy:</strong> ±{location.accuracy} meters</p>
                    <p>
                        <a
                            href={`https://www.google.com/maps?q=${location.lat},${location.lon}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View on Google Maps
                        </a>
                    </p>
                </div>
            ) : (
                <p className="text-gray-500">Location tracking not started.</p>
            )}

            <div className="mt-4 space-x-2">
                <button
                    onClick={startTracking}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Start Tracking
                </button>
                <button
                    onClick={stopTracking}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                    Stop Tracking
                </button>
            </div>
        </div>
    );
};

export default LocationTracker;
