import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import {sendPrompt} from "../utils/requestsUtil";
import useUserLocation from "../utils/location";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([])
    const {location, error} = useUserLocation();

    const handleSubmit = async () => {
        console.log("User request:", prompt);
        console.log(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
        const res = await sendPrompt(prompt, location.latitude, location.longitude);
        setResults(res)
    };

    const clear = () => {
        setPrompt("");
        setResults([]);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl p-6 shadow-xl bg-white rounded-2xl">
                <div className="flex flex-col items-center space-y-4">
                    <SearchBar clear={clear} handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} />
                    <ResultList results={results} />
                </div>
            </div>
        </div>
    );
}
