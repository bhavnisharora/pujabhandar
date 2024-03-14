import React, { useState } from "react";
import ProductData from "./ProductData.json";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SeletedCategory from "../../components/SeletedCategory";
import CategoryShowCase from "./CategoryShowCase";

const title = (
  <h2 className="text-3xl mt-8 font-light capitalize">
    Search your one from Thousands of
    <span className="text-primary font-medium"> Puja Items</span>
  </h2>
);
const desc = "We have the largest collection of poducts";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 million customers",
  },
  {
    iconName: "icofont-notification",
    text: "more than 200 merchant",
  },
  {
    iconName: "icofont-globe",
    text: "buy anything online",
  },
];
const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductData);
  // console.log(ProductData);

  const handleSearch = (e) => {
    // console.log(e.target.value);

    // search functionality
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtering products based on search
    const filtered = ProductData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      {/* <div className="flex justify-between py-3 px-6 bg-gray-50 border-b">
        <form action="">
          <input
            type="text"
            placeholder="seach talk"
            name="name"
            autoComplete="off"
            aria-label="search talk"
            className="px-3 py-2 font-semibold placeholder-gray-500 text-black
            rounded-2xl border-none ring-2 ring-gray-300 focus:ring-2"
          />
        </form>
      </div> */}
      <div style={{ marginTop: "100px" }}>
        <h1 className="text-5xl text-primary text-center font-extrabold">
          Products
        </h1>
        {/* <div className="banner-section style-4"> */}
        <div className="container">
          {/* <div className="banner-content"> */}
          {title}
          <div className="flex justify-between place-content-center items-center py-3 px-6 bg-gray-50 border-b">
            <form action="">
              <SeletedCategory select={"all"} />

              <input
                type="text"
                placeholder="seach talk"
                name="name"
                autoComplete="off"
                value={searchInput}
                onChange={handleSearch}
                aria-label="search talk"
                className="px-3 py-2 font-semibold placeholder-gray-500 text-black
            rounded-2xl border-none ring-2 ring-gray-300 focus:ring-2 "
              />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          {/* <form action="">
              <SeletedCategory select={"all"} />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search your product"
                value={searchInput}
                onChange={handleSearch}
              />
              <button>
                <FaSearch />
              </button>
            </form> */}
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to="">{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        {/* </div> */}
        {/* </div>/ */}
      </div>
      <CategoryShowCase />
    </>
  );
};

export default Products;
