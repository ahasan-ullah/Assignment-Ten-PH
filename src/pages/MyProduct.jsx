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

        
      </div>
    </div>
  );
};

export default MyProduct;
