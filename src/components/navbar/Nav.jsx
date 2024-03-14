import React, { useContext, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { PiUserCircleBold } from "react-icons/pi";

import { GiShoppingCart } from "react-icons/gi";

import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../../contexts/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-1 left-0 z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-primary"
          >
            <Link to="/">Puja Bhandar</Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
                {/* <a
                href={link.link}
                className="font-bold text-gray-800 hover:text-primary duration-500"
              > */}
                <Link
                  to={link.link}
                  className="inline-block px-4 font-semibold text-gray-500 hover:font-bold hover:text-primary
                        duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-8">
            <Link to="/login">
              <button
                className="bg-primary text-white font-medium font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-white 
        hover:text-primary outline hover:outline-offset-1 capitalize hidden md:block
      duration-200"
              >
                Login
              </button>
            </Link>
            <div>
              <Link to="/cart-page">
                <GiShoppingCart
                  className="hover:text-primary cursor-pointer hidden md:block"
                  style={{ fontWeight: "bold", fontSize: "35px" }}
                />
              </Link>
              {/* <span className="ml-1">{cart.length}</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
