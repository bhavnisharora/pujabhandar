import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SeletedCategory from "../../components/SeletedCategory";
import CategoryShowCase from "./CategoryShowCase";
import PageHeader from "../../components/PageHeader";
import background from "../../assets/banner/our-products.jpeg";
import "./Product.css";
const title = (
  <h2 className="text-3xl mt-8 font-light capitalize">
    Search your one from Thousands of
    <span className="text-primary font-medium"> Puja Items </span>
  </h2>
);

const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductDetails);
  // console.log(ProductData);

  const handleSearch = (e) => {
    // console.log(e.target.value);

    // search functionality
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtering products based on search
    const filtered = ProductDetails.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {/* <PageHeader title="Products" elem="Products" img={background} /> */}

        <h1 class="font-serif text-5xl font-extrabold text-purple-600 uppercase tracking-wider mb-8 relative">
          Our Products
          <br />
          <br />
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse"></span>
        </h1>

        <div className="container ">
          {title}

          <div className="flex items-center justify-center py-3 px-6 bg-gray-50 border-b mt-10">
            <form action="" className="flex justify-between space-x-8">
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

          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/single-product/${product.id}`} className="mt-20">
                    <div>
                      <div className="flex justify-center items-center">
                        <img
                          src={product.imgUrl}
                          alt=""
                          width={70}
                          className="flex"
                        />
                      </div>
                      <div className="font-sm font-medium">{product.title}</div>
                      <p> {product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <CategoryShowCase />
    </>
  );
};

export default Products;
