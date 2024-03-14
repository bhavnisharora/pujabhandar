import React from "react";
import PageHeader from "../components/PageHeader";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { FaEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import background from "../assets/banner/contact2.jpg";

const Contact = () => {
  return (
    <>
      <div>
        <div className="w-[400px] mx-auto">
          <PageHeader title="Contact Us" elem="contact" img={background} />
        </div>
        <div className="mt-[-70px]">
          <div className="flex w-full min-h-screen justify-center items-center">
            <div
              className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-primary w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg
          text-white overflow-hidden"
            >
              <div className="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide uppercase mb-5">
                    Get in Touch
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta at, modi sed illum consequuntur incidunt officiis quam
                    eaque enim harum?
                  </p>
                </div>

                {/* contact information */}

                <div className="flex flex-col space-y-6">
                  <div className="inline-flex space-x-2 items-center">
                    <IoCallSharp className="text-2xl" />
                    <span>+91 123456789</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <FaEnvelope className="text-2xl" />
                    <span>contact@xyzwebsite.com</span>
                  </div>

                  <div className="inline-flex space-x-2 items-center">
                    <IoLocationSharp className="text-2xl" />
                    <span>11 Street, new suraj ganj nagar</span>
                  </div>
                </div>

                {/* socail media */}

                <div className="flex space-x-4 text-lg">
                  <Link to="/">
                    <BsInstagram className="text-2xl" />
                  </Link>
                  <Link to="/">
                    <FaFacebookSquare className="text-2xl" />
                  </Link>
                  <Link to="/">
                    <FaLinkedin className="text-2xl" />
                  </Link>
                </div>
              </div>

              {/* right side */}
              <div className="relative">
                <div className="absolute z-0 w-40 h-40 bg-red-400 rounded-full -right-28 -top-28"></div>
                {/*  */}
                <div className="absolute z-0 w-40 h-40 bg-red-400 rounded-full -left-28 -bottom-16"></div>
                <div className="relative z-10 bg-white shadow-lg rounded-xl p-8 md:w-80">
                  {/* CONTACT BOX */}
                  <form
                    action="https://formspree.io/f/xeqyzoqq"
                    method="POST"
                    className="flex flex-col space-y-4"
                  >
                    <div>
                      <label htmlFor="username">Your Name</label>

                      <input
                        type="text"
                        placeholder="your name"
                        name="username"
                        id="username"
                        className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2
                      outline-none focus:ring-2 focus:ring-red-300 focus:text-black"
                      />
                    </div>
                    {/*  */}
                    <div>
                      <label htmlFor="email">Email Address</label>

                      <input
                        type="text"
                        id="email"
                        placeholder="your mail please"
                        name="email"
                        className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2
                      outline-none focus:ring-2 focus:ring-red-300 focus:text-black"
                      />
                    </div>
                    {/*  */}
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Enter your query"
                        className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2
                      outline-none focus:ring-2 focus:ring-red-300 focus:text-black"
                      ></textarea>
                    </div>
                    <button
                      className="inline-block self-start
                  bg-primary text-white font-bold rounded-lg px-6 py-2 outline hover:outline-offset-1 duration-200 hover:bg-white 
        hover:text-primary"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
