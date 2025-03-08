import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { sendPrompt } from "../utils/requestsUtil";
import useUserLocation from "../utils/location";
import ErrorCard from "../components/ErrorCard";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const { location, locationError } = useUserLocation();
    const [apiError, setApiError] = useState(null);

    const handleSubmit = async () => {
        console.log("User request:", prompt);
        console.log(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
        setLoading(true);
        setApiError(null);

        if (!location || !location.lat || !location.lon) {
            setApiError("We can't access your location.");
            setLoading(false);
            return;
        }

        try {
            const res = await sendPrompt(prompt, location.lat, location.lon, setApiError);
            setResults(res);
        } catch (e) {
            setApiError("Something went wrong, please try again later.");
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const clear = () => {
        setPrompt("");
        setResults([]);
        setApiError(null);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 p-4">
            <div className="w-full max-w-2xl p-6 shadow-2xl bg-gray-800 text-white border border-gray-700">
                <h1 className="text-xl font-bold text-blue-500">SnackScout</h1>
                {apiError && <ErrorCard message={apiError} />}
                <SearchBar clear={clear} handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} />
                {loading ? <p className="text-gray-300 text-center">Loading...</p> : <ResultList results={results} />}
            </div>
        </div>
    );
}
