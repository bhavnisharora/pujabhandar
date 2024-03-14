import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <>
      <div>
        <div className="mb-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center"
            data-aos="fade-up"
          >
            {data.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="cursor-pointer"
              >
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="[h-180px] w-[260px] object-cover rounded-md scale-75 
                    hover:scale-90 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="font-semibold text-xl hover:text-primary transition duration-300 ease-in-out">
                  {data.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Link to="/login">
        <Button className="mt-5">Book Your Order</Button>{" "}
      </Link>
    </>
  );
};

export default ProductCard;
