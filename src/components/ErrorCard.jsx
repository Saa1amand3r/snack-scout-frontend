import React from "react";

const ErrorCard = ({ message }) => {
    return (
        <div className="w-full p-3 bg-red-600 text-white text-center font-semibold mt-4">
            {message}
        </div>
    );
};

export default ErrorCard;
