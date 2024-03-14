import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const Description = () => {
  return (
    <>
      <div className="mt-20 bg-desc" data-aos="fade-up">
        <h1 className="font-serif text-primary font-bold text-5xl">
          Puja Bhandar
        </h1>
        <p className="font-serif text-grey mt-8 text-sm sm:text-base">
          HS Puja Bhandar is an online platform offering Sanatan Dharma
          religious articles, products,
        </p>
        <p className="font-serif text-grey mt-3 text-sm sm:text-base">
          and services. These are the products that are used in Santana Dharma
          puja/prayers
        </p>
        <p className="font-serif  text-grey mt-3 text-sm sm:text-base">
          as an integral part of Hindu religious practices.
        </p>
        <div className="mt-8">
          <Link to="/about">
            <Button>Read More</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Description;
