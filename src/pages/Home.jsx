import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import { sendPrompt } from "../utils/requestsUtil";
import useUserLocation from "../utils/location";

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

        try {
            const res = await sendPrompt(prompt, location.lat, location.lon, setApiError);
            setResults(res);
            setLoading(false);
        } catch (e) {
            setApiError("API error happened");
            setResults([])
            setLoading(false);
        }

        console.log(apiError)
    };

    const clear = () => {
        setPrompt("");
        setResults([]);
        setApiError(null);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl p-6 shadow-xl bg-white rounded-2xl">
                <div className="flex flex-col items-center space-y-4">
                    <SearchBar apiError={apiError} locationError={locationError} clear={clear} handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} />
                    {loading ? <p>Loading...</p> : <ResultList results={results} />}
                </div>
            </div>
        </div>
    );
}
