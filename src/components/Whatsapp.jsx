import React from "react";
import Icon from "../assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <>
      <div className="whatsapp-float">
        <a href="https://wa.me/916284274857" target="_blank">
          <img
            src={Icon}
            alt="whatsapp"
            className="fixed w-12 bottom-12 right-5"
          />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
