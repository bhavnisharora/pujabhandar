// AdminPanel.js
import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";

const AdminPanel = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddProduct = () => {
    if (!productName || !category || !price || !image) {
      alert("Please fill in all fields");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const imageURL = reader.result;
      const newProduct = { productName, category, price, imgUrl: imageURL };
      setProducts([...products, newProduct]);
      // Clear input fields after adding product
      setProductName("");
      setCategory("");
      setPrice("");
      setImage(null);
    };
  };

  return (
    <div className="container mx-auto mt-10" style={{ marginTop: "100px" }}>
      <h2 className="text-3xl font-semibold text-center mb-6">
        Admin Panel
      </h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Product Name:
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-semibold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
          >
            <option value="">Select Category</option>
            <option value="bracelets">Bracelets</option>
            <option value="puja items">Puja Items</option>
            <option value="clothing">Clothing</option>
            <option value="malas">Malas</option>
            <option value="yoga essentials">Yoga Essentials</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Price:
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Image:
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark transition duration-300"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
