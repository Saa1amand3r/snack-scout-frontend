import React from "react";

const SearchBar = ({handleSubmit, clear, prompt, setPrompt}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-900">Enter Your Request</h1>
            <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Type your request here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <div className="flex flex-row w-[100%] justify-between">
                <button
                    type="button"
                    className="w-[80%] bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="w-[15%] bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg"
                    onClick={clear}
                >
                    Clear
                </button>
            </div>
        </>
    )
}

export default SearchBar;