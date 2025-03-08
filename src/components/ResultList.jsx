import React from "react";
import ResultCard from "./ResultCard";

const ResultList = ({ results }) => {
    return (
        <div className="w-full space-y-4 mt-4">
            {results.map((store, index) => (
                <ResultCard key={index} info={store} />
            ))}
        </div>
    );
};

export default ResultList;
