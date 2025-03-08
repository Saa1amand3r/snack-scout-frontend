const ResultCard = ({ info }) => {
    return (  // Add return statement
        <div className="p-4 bg-white shadow-lg rounded-xl w-full">
            <h2 className="text-xl font-bold text-gray-900">{info.store_name}</h2>
            <p className="text-gray-700">Overall Price: {info.total_price}</p>
            <p className="text-gray-700">Distance: {info.walking_distance_m} m</p>
            <h3 className="font-semibold mt-2">Products:</h3>
            <ul className="list-disc pl-5 text-gray-700">
                {info.products.map((product, index) => (
                    <li key={index}>{product.product_name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResultCard;