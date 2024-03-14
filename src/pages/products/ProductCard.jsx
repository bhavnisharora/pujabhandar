import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ products }) => {
  console.log(products);
  return (
    <div>
      hi, this is product card
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[900px]">
        {products.map((elem) => (
          <div key={elem.id}>
            <div className="mt-10">
              <div
                className="text-center scale-75
                    hover:scale-90 transition duration-300 ease-in-out cursor-pointer"
              >
                <img src={elem.img} />
                <p className="text-xl">{elem.stock}</p>
                <p className="text-xl">{elem.category}</p>
              </div>
              {/* products action links */}
            </div>
            {/* <div className="product-content">
              <h5>
                <Link to="">{elem.name}</Link>
              </h5>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
