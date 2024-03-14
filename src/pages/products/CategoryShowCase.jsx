// CategoryShowCase.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../admin/ProductContext";

const CategoryShowCase = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const title = "Our Products";

  const filterItem = (categItem) => {
    setSelectedCategory(categItem);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <div className="container">
        <div className="flex justify-between my-12">
          <h2 className="title">{title} </h2>
          <ul className="grid grid-cols-4 md:grid-cols-7">
            <li
              onClick={() => filterItem("")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              All
            </li>
            <li
              onClick={() => filterItem("bracelets")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Bracelets
            </li>
            <li
              onClick={() => filterItem("puja items")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Puja Items
            </li>
            <li
              onClick={() => filterItem("clothing")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Clothing
            </li>
            <li
              onClick={() => filterItem("malas")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Malas
            </li>
            <li
              onClick={() => filterItem("yoga essentials")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Yoga Essentials
            </li>
            <li
              onClick={() => filterItem("books")}
              className="hover:text-primary hover:font-semibold duration-200 cursor-pointer"
            >
              Books
            </li>
          </ul>
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
