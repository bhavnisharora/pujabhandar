import React from "react";
import Hero from "../components/hero/Hero";
import Description from "../components/Description";
import Products from "../components/Products";
// import Register from "../components/Register";
import Manter from "../components/Manter";
import Services from "../components/Services";
import LatestProduct from "../components/latestproduct/LatestProduct";

const Home = () => {
  return (
    <div>
      <Manter />
      <Hero />
      <Description />
      <Products />
      <LatestProduct />
      <Services />
    </div>
  );
};

export default Home;
