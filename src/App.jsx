import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/navbar/Nav";
// import Nav from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products/Products";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact";
import End from "./components/footer/Footer";
import Whatsapp from "./components/Whatsapp";
import ProgressBar from "./components/progressbar/ProgressBar";
import SingleProduct from "./pages/SingleProduct";
import Login from "./components/login/Login";
import TermsCond from "./pages/TermsCond";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Register from "./pages/Register";
import Error from "./pages/error/Error";
import CartPage from "./pages/addtocart/CartPage";
import SingleBlog from "./pages/Blogs/Single-Blog";
import AdminPanel from "./pages/admin/AdminPanel";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ProgressBar />
      <Nav />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/products" Component={Products} exact />
        <Route path="/blogs" Component={Blogs} exact />
        <Route path="/single-blog/:id" Component={SingleBlog} exact />
        <Route path="/contact" Component={Contact} exact />
        <Route path="/single-product/:id" Component={SingleProduct} exact />
        <Route path="/login" Component={Login} exact />
        <Route path="/privacy-policy" Component={PrivacyPolicy} exact />
        <Route path="/terms-conditions" Component={TermsCond} exact />
        <Route path="/refund-policy" Component={RefundPolicy} exact />
        <Route path="/register" Component={Register} exact />
        <Route path="/cart-page" Component={CartPage} exact />
        <Route path="/adminpanel" Component={AdminPanel} exact />
        <Route path="*" Component={Error} exact />
      </Routes>
      <div className="w-full relative">
        <End />
      </div>
      <Whatsapp />
    </>
  );
}

export default App;
