import React from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import Image from "../assets/products/image.jpg";
import Image1 from "../assets/products/image1.jpg";
import Image2 from "../assets/products/image2.jpg";
import Image3 from "../assets/products/image3.jpg";
import Image4 from "../assets/products/image4.jpg";
import Image5 from "../assets/products/image5.jpg";
import Image6 from "../assets/products/image6.jpg";
import Image7 from "../assets/products/image7.jpg";

const Products = () => {
  const ProductsData = [
    {
      img: Image,
      title: "Bracelets",
      aosDelay: "0",
    },
    {
      img: Image1,
      title: "Puja Items",
      aosDelay: "200",
    },
    {
      img: Image2,
      title: "Clothing",
      aosDelay: "400",
    },
    {
      img: Image3,
      title: "Malas",
      aosDelay: "600",
    },
    {
      img: Image4,
      title: "Incense and Dhoop",
      aosDelay: "800",
    },
    {
      img: Image5,
      title: "Yoga Essentials",
      aosDelay: "1000",
    },
    {
      img: Image6,
      title: "Books",
      aosDelay: "1200",
    },
    {
      img: Image7,
      title: "Music",
      aosDelay: "1400",
    },
  ];
  return (
    <div className="container">
      <Heading title="Product Category" subtitle="explore our products" />
      <ProductCard data={ProductsData} />
    </div>
  );
};

export default Products;
