import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from '../pages/LoadingPage'
import image from '../assets/add-product.jpg'

const Add = () => {
  const {user,loading}=useContext(AuthContext);
  const userName=user.displayName;
  const userEmail=user.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const image=form.get('image');
    const item=form.get('itemName');
    const category=form.get('categoryName');
    const description=form.get('description');
    const price=form.get('price');
    const rating=form.get('rating');
    const customization=form.get('customization');
    const processingTime=form.get('processingTime');
    const stockStatus=form.get('stockStatus');

    const productDetails={image,item,category,description,price,rating,customization,processingTime,stockStatus,userEmail,userName};

    fetch('https://sports-hub-server-beta.vercel.app/all-products',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productDetails)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        swal({
          text: "Products added successfully",
          icon: "success",
        });
        form.reset();
      }
    });
  };

  if(loading){
    return <LoadingPage></LoadingPage>
  }

  return (
    <section id="add-product" className="py-12 px-4 bg-white text-gray-900 mt-20 flex flex-col md:flex-row items-center">
      <div className="container mx-auto md:w-1/2 bg-base-200 p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Add a New Product</h2>
        <form className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-sm font-bold mb-2">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-bold mb-2">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              max="5"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="customization" className="block text-sm font-bold mb-2">
              Customization
            </label>
            <input
              type="text"
              id="customization"
              name="customization"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="processingTime" className="block text-sm font-bold mb-2">
              Processing Time (in days)
            </label>
            <input
              type="number"
              id="processingTime"
              name="processingTime"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stockStatus" className="block text-sm font-bold mb-2">
              Stock Status
            </label>
            <input
              type="text"
              id="stockStatus"
              name="stockStatus"
              className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="block text-sm font-bold mb-2">
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
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-bold mb-2">
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
          <button type="submit" className="w-full bg-first text-white py-3 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="" />
      </div>
    </section>
  );
};
export default Add;