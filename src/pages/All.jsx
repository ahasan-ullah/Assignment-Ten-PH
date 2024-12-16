import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const All = () => {
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
    <div className="p-4">
      <h1 className="text-xl text-center font-bold mb-4">Equipment List</h1>

      {/* Sort Button */}
      <div className="mb-4 text-center">
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sort
        </button>
      </div>

      {/* Table */}
      <table className="text-sm md:text-base table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{item.item}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.category}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${item.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleViewDetails(item._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All;
