import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="bg-primary text-white font-medium font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-white 
        hover:text-primary outline hover:outline-offset-1
      duration-200"
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
