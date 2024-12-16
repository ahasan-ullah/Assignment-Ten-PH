import { Result } from "postcss";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyProduct = () => {
  const loadedProducts = useLoaderData();
  const [productsList, setProductsList] = useState(loadedProducts);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete this product. This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://sports-hub-server-beta.vercel.app/all-products/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                setProductsList(
                  productsList.filter((product) => product._id !== id)
                );
                Swal.fire(
                  "Deleted!",
                  "The product has been deleted.",
                  "success"
                );
              } else {
                Swal.fire("Error!", "Failed to delete the product.", "error");
              }
            })
            .catch((err) => {
              console.error("Error deleting product:", err);
              Swal.fire(
                "Error!",
                "An error occurred while deleting the product.",
                "error"
              );
            });
        }
      })
      .catch((err) => {
        console.error("Error with Swal:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((product) => (
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
                <p className="text-gray-600 mb-4">{product.description}</p>

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
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Customization:</strong>{" "}
                  {product.customization || "N/A"}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Processing Time:</strong> {product.processingTime}{" "}
                  days
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => navigate(`/update/${product._id}`)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
