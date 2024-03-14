import React, { useState } from "react";
import PageHeader from "../src/components/PageHeader";
import data from "../src/pages/products/ProductDetails";
import ProductCard from "../src/pages/products/ProductCard";
import Pagination from "../src/components/Pagination";
import Search from "./Search";

const showResults = "Showing 01 - 12 of 139 results";
const OnlinePuja = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(data);
  // console.log(products);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <PageHeader title="Shop" elem="Shop" />
        <div>
          <div className="container">
            <div className="flex justify-between">
              <div>
                <p> {showResults}</p>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5
                 place-items-center"> */}
                <ProductCard gridList={gridList} products={products} />
                {/* </div> */}
                <Pagination />
              </div>
              <div className="">
                {/* right side */}
                <aside>
                  <Search products={products} />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlinePuja;
