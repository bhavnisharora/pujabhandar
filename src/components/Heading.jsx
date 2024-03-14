import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div
      className="text-center mb-10 max-w-[600px] mx-auto space-y-2"
      style={{ marginTop: "150px" }}
    >
      <h1 className="font-serif text-primary text-3xl font-bold lg:text-4xl">
        {title}
      </h1>
      <p className="text-xl capitalize text-grey">{subtitle}</p>
    </div>
  );
};

export default Heading;
