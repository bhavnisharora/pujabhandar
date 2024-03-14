import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    fetch("/src/pages/products/ProductDetails.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, []);

  const result = product.filter((p) => p.id === id);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const product = {
    //   id: id,
    //   img: img,
    // };
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="my-10"> Product id: {id} </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {result.map((item, i) => (
          <div key={i} className="flex items-center">
            <img src={item.imgUrl} className="w-full h-[400px] md:w-auto" />
            <div className="ml-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-700 my-5">{item.desc}</p>
              <p className="text-gray-800 font-semibold">{item.price}</p>
              <p className="text-gray-600">{item.description}</p>
              <div>
                <div className="flex flex-col space-y-5 items-center mt-5">
                  <div className="flex items-center space-x-6">
                    <form action="" onSubmit={handleSubmit}>
                      <button
                        className="bg-primary text-white font-bold uppercase w-[140px]
                      rounded-lg py-2 outline hover:outline-offset duration-200 hover:bg-white
                      hover:text-primary"
                      >
                        add to cart
                      </button>
                    </form>
                    <button
                      className="bg-primary text-white font-bold uppercase w-[140px]
                      rounded-lg py-2 outline hover:outline-offset duration-200 hover:bg-white
                      hover:text-primary"
                    >
                      Buy Now
                    </button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="
                      bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center 
                      text-lg font-semibold mr-2"
                    >
                      +
                    </button>
                    <span className="text-lg font-semibold mr-2 space-x-2">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(quantity > 0 ? quantity - 1 : 0)
                      }
                      className="
                      bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center 
                      text-lg font-semibold"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
