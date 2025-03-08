import React from "react";

const SearchBar = ({ handleSubmit, clear, prompt, setPrompt }) => {
    return (
        <div className="w-full mt-4">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Enter Your Request</h2>
            <input
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Type your request here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <div className="flex flex-row w-full justify-between mt-3">
                <button
                    type="button"
                    className="w-[80%] bg-blue-600 hover:bg-blue-700 text-white p-3"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="w-[18%] bg-red-600 hover:bg-red-700 text-white p-3"
                    onClick={clear}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
