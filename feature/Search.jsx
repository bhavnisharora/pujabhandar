import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {/* showing search results */}
      {searchTerm &&
        filteredProducts.map((product) => (
          <Link key={product.id}>
            <div>
              <div>
                <div>
                  <img
                    src={product.imgUrl}
                    alt=""
                    width={70}
                    className="flex"
                  />
                </div>
                <div className="product-content">{product.title}</div>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Search;
