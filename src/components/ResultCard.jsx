const ResultCard = ({ info }) => {
    return (  // Add return statement
        <div className="p-4 bg-white shadow-lg rounded-xl w-full">
            <h2 className="text-xl font-bold text-gray-900">{info.name}</h2>
            <p className="text-gray-700">Overall Price: ${info.price.toFixed(2)}</p>
            <p className="text-gray-700">Distance: {info.distance} km</p>
            <h3 className="font-semibold mt-2">Products:</h3>
            <ul className="list-disc pl-5 text-gray-700">
                {info.products.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResultCard;