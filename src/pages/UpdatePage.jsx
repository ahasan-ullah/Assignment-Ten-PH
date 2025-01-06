import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../pages/LoadingPage";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import updateImg from '../assets/update.jpg'

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  const userEmail = user.email;
  const product = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const image = form.get("image");
    const item = form.get("itemName");
    const category = form.get("categoryName");
    const description = form.get("description");
    const price = form.get("price");
    const rating = form.get("rating");
    const customization = form.get("customization");
    const processingTime = form.get("processingTime");
    const stockStatus = form.get("stockStatus");

    const productDetails = {
      image,
      item,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };

    fetch(`https://sports-hub-server-beta.vercel.app/all-products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            text: "Product updated successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            text: "No changes were made to the product.",
            icon: "info",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          text: "There was an error updating the product.",
          icon: "error",
        });
        console.error("Error updating product:", error);
      });
  };

  return (
    <section
      id="add-product"
      className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex flex-col md:flex-row items-center mt-20"
    >
      <div className="container mx-auto md:w-1/2 bg-base-200 p-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Update Product Details
        </h2>
        <form
          className="max-w-2xl mx-auto p-8 rounded-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              defaultValue={product.image}
              name="image"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="itemName"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              defaultValue={product.item}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="categoryName"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              defaultValue={product.category}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={product.description}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                defaultValue={product.price}
                className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                defaultValue={product.rating}
                step="0.1"
                max="5"
                className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="customization"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Customization
            </label>
            <input
              type="text"
              id="customization"
              name="customization"
              defaultValue={product.customization}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="processingTime"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Processing Time (in days)
            </label>
            <input
              type="number"
              id="processingTime"
              name="processingTime"
              defaultValue={product.processingTime}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stockStatus"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Stock Status
            </label>
            <input
              type="text"
              id="stockStatus"
              name="stockStatus"
              defaultValue={product.stockStatus}
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                className="w-full p-3 bg-gray-200 rounded focus:outline-none"
                value={user.email}
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="w-full p-3 bg-gray-200 rounded focus:outline-none"
                value={user.displayName}
                readOnly
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-first text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Update
          </button>
        </form>
      </div>
      <div className="md:w-1/2">
        <img src={updateImg} alt="" />
      </div>
    </section>
  );
};

export default UpdatePage;
