import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 mt-10">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.item}
            className="w-full h-64 object-contain"
          />
          <span className="absolute top-4 right-4 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
            {product.rating} ★
          </span>
        </div>
        <div className="p-6">
          {/* Product Name */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {product.item}
          </h2>

          {/* Category */}
          <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold mb-4">
            {product.category}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Price and Stock Status */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-green-600 font-bold text-2xl">
              ${product.price}
            </p>
            <p
              className={`text-sm font-medium ${
                product.stockStatus > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.stockStatus > 0
                ? `${product.stockStatus} in stock`
                : "Out of stock"}
            </p>
          </div>

          {/* Customization and Processing Time */}
          <div className="mb-6 space-y-2">
            <p className="text-gray-600">
              <strong>Customization:</strong> {product.customization}
            </p>
            <p className="text-gray-600">
              <strong>Processing Time:</strong> {product.processingTime} days
            </p>
          </div>

          {/* Back Button */}
          <div>
            <button
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
              onClick={() => window.history.back()}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
