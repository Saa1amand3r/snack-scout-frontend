import React from "react";

const ResultCard = ({ info }) => {
    return (
        <div className="p-4 bg-gray-700 border border-gray-600 text-white shadow-md w-full">
            <h2 className="text-xl font-bold text-blue-400">{info.store_name}</h2>
            <p className="text-gray-300">Overall Price: ${info.total_price}</p>
            <p className="text-gray-300">Distance: {info.walking_distance_m} m</p>
            <h3 className="font-semibold mt-2 text-gray-200">Products:</h3>
            <ul className="list-disc pl-5 text-gray-300">
                {info.products.map((product, index) => (
                    <li key={index}>{product.product_name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultCard;
