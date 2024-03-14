import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [coupon, setcoupon] = useState("");
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

    // Assuming 'result' contains the product details
    const selectedItem = result[0];

    // Log product details
    console.log("ID:", selectedItem.id);
    console.log("Title:", selectedItem.title);
    console.log("Description:", selectedItem.desc);
    console.log("Price:", selectedItem.price);

    // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // const existingProductIndex = existingCart.findIndex(
    //   (item) => item.id === id
    // );

    // if (existingProductIndex !== -1) {
    //   existingCart[existingProductIndex] += quantity;
    // } else {
    //   existingCart.push(product);
    // }

    // // Update local storage
    // setQuantity(1);
    // setcoupon("");

    // localStorage.setItem("selectedProduct", JSON.stringify(selectedItem));
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, selectedItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    history.push("/cart-page");
    alert("hello");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const existingProductIndex = existingCart.findIndex(
  //     (item) => item.id === id
  //   );

  //   if (existingProductIndex !== -1) {
  //     existingCart[existingProductIndex] += quantity;
  //     // existingCart[existingProductIndex].quantity += prequantity;
  //   } else {
  //     existingCart.push(product);
  //   }

  //   //update local storage
  //   localStorage.setItem("cart", JSON.stringify(existingCart));

  //   setQuantity(1);
  //   setcoupon("");
  // };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2 className="my-10"> Product id: {id} </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {result.map((item, i) => (
          <>
            <div key={i} className="flex items-center">
              <img src={item.imgUrl} className="w-full h-[400px] md:w-auto" />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700 my-5">{item.desc}</p>
                <p className="text-gray-800 font-semibold">{item.price}</p>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your discount code"
                    className="py-2 px-2 my-4 focus:outline-none focus:ring focus:ring-red-300"
                    onChange={(e) => setcoupon(e.target.value)}
                  />
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
                      <Link to="/cart-page">
                        <button
                          className="bg-primary text-white font-bold uppercase w-[140px]
                      rounded-lg py-2 outline hover:outline-offset duration-200 hover:bg-white
                      hover:text-primary"
                        >
                          Checkout
                        </button>
                      </Link>
                    </div>

                    {/* <div className="flex items-center space-x-3">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
