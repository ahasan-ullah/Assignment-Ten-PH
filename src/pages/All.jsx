import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const All = () => {
  document.title="All Equipments";
  const navigate = useNavigate();
  const equipmentData = useLoaderData();

  const [sortedData, setSortedData] = useState(equipmentData);

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sorted);
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-4 mt-20">
      <h1 className="text-xl text-center font-bold mb-4">Equipment List</h1>

      {/* Sort Button */}
      <div className="mb-4 text-center flex justify-end items-center">
        <button
          onClick={handleSort}
          className="bg-first text-white px-4 py-2 rounded hover:bg-transparent border border-first"
        >
          Sort
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedData.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image || "https://via.placeholder.com/500"}
              alt={product.item}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {product.item}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Category: {product.category}
              </p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-green-600 font-bold">${product.price}</p>
                <p className="text-gray-500 text-sm">
                  {product.stockStatus > 0
                    ? `${product.stockStatus} in stock`
                    : "Out of stock"}
                </p>
              </div>

              <div className="text-sm text-gray-600 mb-2">
                <strong>Rating:</strong> {product.rating} / 5
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => handleViewDetails(product._id)}
                  className="w-full bg-first text-white py-2 rounded hover:bg-blue-500 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
