import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sports-hub-server-beta.vercel.app/all-products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section id="products" className="py-12">
      <div className="container mx-auto space-y-8">
        <h2 className="text-3xl text-text font-bold text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-lg p-4 bg-white"
            >
              <img
                src={product.image}
                alt={product.item}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{product.item}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button
                onClick={() => handleViewDetails(product._id)}
                className="w-full bg-first text-white py-2 rounded hover:bg-blue-500 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
