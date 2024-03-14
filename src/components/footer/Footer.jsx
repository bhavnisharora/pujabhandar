import React from "react";
import "./Footer.css";
import {
  BsFillEnvelopeFill,
  BsInstagram,
  BsYoutube,
  BsArrowRight,
} from "react-icons/bs";

import { FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="shadow-md absolute w-full">
        <div className="row">
          <div className="col">
            <h1 className="footer-logo text-4xl ml-5"> Pooja Bhandar </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, odit.
            </p>
          </div>
          <div className="col">
            <h3>
              Address
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <div className="flex gap-2">
              <FaLocationArrow className="text-white text-2xl" />

              <p>Uttar pradesh </p>
            </div>
            <br />
            <div className="flex gap-2">
              <FaEnvelope className="text-white text-2xl" />
              <p>puja@gmail.com</p>
            </div>
            <br />
            <div className="flex space-x-1">
              <FaMobileAlt className="text-white text-2xl" />
              <h4>+91 123456789</h4>
            </div>
          </div>
          <div className="col">
            <h3 className="ms-8">
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul className="mr-10">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <Link to="/products"> Products </Link>
              </li>
              <li>
                <Link to="/blogs"> Blog </Link>
              </li>
            </ul>
          </div>
          {/* quick links */}
          <div className="col">
            <h3>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="footer-form" action="">
              <BsFillEnvelopeFill className="footer-mail" />
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <BsArrowRight className="footer-btn text-2xl" />
              </button>
            </form>

            <div className="social-icons flex gap-3">
              <a href="https://www.facebook.com/LakshayWeddingStudio">
                <FaFacebookF className="social-media" />
              </a>
              <a href="https://www.instagram.com/_lakshay_wedding_studio0/">
                <BsInstagram className="social-media" />
              </a>
              <a href="https://youtube.com/@lakshaywedding6442">
                <BsYoutube className="social-media" />
              </a>
            </div>
          </div>
          <div className="col"></div>
        </div>
        {/* <div className="flex justify-center"> */}
        <p className="copyright">
          Puja Bhandar &copy; 2024-2025 | All rights reserved
        </p>
        <div className="menu">
          <ul className="flex">
            <li>
              <Link to="/privacy-policy">
                Privacy Policy <span className="mx-1">|</span>
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions">
                Terms and Conditions <span className="mx-1">|</span>
              </Link>
            </li>
            <li>
              <Link to="/refund-policy">Shipping and Refund Policy</Link>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </footer>
    </>
  );
}
