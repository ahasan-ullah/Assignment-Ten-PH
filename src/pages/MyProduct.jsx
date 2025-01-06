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
          fetch(
            `https://sports-hub-server-beta.vercel.app/all-products/${id}`,
            {
              method: "DELETE",
            }
          )
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center text-text">
          My Products
        </h1>
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
            {productsList.map((item) => (
              <tr key={item._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {item.item}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${item.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="space-x-5">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-first text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => navigate(`/update/${item._id}`)}
                      className="bg-first text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
