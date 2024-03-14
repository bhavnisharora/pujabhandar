import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { ProductContext } from "../admin/ProductContext";

const CategoryShowCase = () => {
  // const { products } = useContext(ProductContext); 
  const [selectedCategory, setSelectedCategory] = useState("All");

  const title = "Our Products";

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Bracelets", "Puja Items", "Clothing", "Malas"];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="flex justify-between my-12">
          <h2 className="title">{title} </h2>
          <select onChange={handleCategoryChange} value={selectedCategory}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* section body */}
        <div className="section-wrapper mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center course-filter">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="scale-95 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                <Link to={`/single-product/${product.id}`}>
                  <img src={product.imgUrl} alt="" />
                  <h5 className="font-bold mt-5">{product.productName}</h5>
                  <h1 className="text-primary font-semibold">
                    {product.price}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryShowCase;
