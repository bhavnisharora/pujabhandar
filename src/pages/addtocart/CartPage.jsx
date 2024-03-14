import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { MdDelete } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
const CartPage = () => {
  const { id } = useParams();

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Ensure that each item in the cart has a quantity property
    const validCartItems = storedCartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Set default quantity to 1 if not provided
    }));
    setCartItems(validCartItems);
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemPrice = (parseFloat(item.price) || 0) * item.quantity;
      if (isNaN(itemPrice)) {
        console.log("Invalid price for item:", item);
      } else {
        totalPrice += itemPrice;
      }
    });
    return totalPrice;
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1; // Potential mutation issue
    setCartItems(updatedCartItems); // State update
    updateLocalStorage(updatedCartItems); // Saving to local storage
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="flex gap-10 py-5 sm:gap-[50px] md:gap-[150px] justify-center">
        <ul>
          <li className="text-primary font-bold text-lg capitalize mb-10">
            products
          </li>

          {cartItems.map((item, index) => (
            <div className="mt-[60px] flex justify-center items-center cursor-pointer">
              <Link to={`/single-product/${item.id}`}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-20 me-5"
                  />
                  <h2 className="hover:text-primary hover:font-semibold">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </ul>
        <ul>
          <li className="text-primary font-bold text-lg capitalize mb-10">
            Price
          </li>
          {cartItems.map((item, index) => (
            <div className="my-[92px] flex justify-center items-center space-x-5">
              <h1>{item.price}</h1>
            </div>
          ))}
        </ul>
        <ul>
          <li className="text-primary font-bold text-lg capitalize mb-10">
            quantity
          </li>
          {cartItems.map((item, index) => (
            <div className="my-[92px] flex justify-center items-center space-x-5 cursor-pointer">
              <button onClick={() => handleIncreaseQuantity(index)}>
                <span style={{ fontSize: "20px" }}> + </span>
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => handleDecreaseQuantity(index)}>
                <span style={{ fontSize: "25px" }}> - </span>{" "}
              </button>
            </div>
          ))}
        </ul>
        <ul>
          <li className="text-primary font-bold text-lg capitalize mb-10">
            total
          </li>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="my-[92px] flex justify-center items-center space-x-5"
            >
              <h1>{(item.price || 0) * item.quantity}</h1>
            </div>
          ))}
        </ul>
        <ul>
          <li className="text-primary font-bold text-lg capitalize mb-10">
            Remove
          </li>
          {cartItems.map((item, index) => (
            <div className="my-[98px] flex justify-center items-center space-x-5 cursor-pointer">
              <button onClick={() => handleRemoveProduct(index)}>
                <MdDelete />
              </button>
            </div>
          ))}
        </ul>
        {/*  */}
      </div>

      {/* {cartItems.map((item, index) => (
        <div key={index} className="d-flex gap-10">
          <div className="flex gap-10  py-5  justify-center items-center">
            <img src={item.imgUrl} alt={item.title} className="w-20" />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <div className="flex justify-center items-center gap-5">
              <button onClick={() => handleIncreaseQuantity(index)}>+</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleDecreaseQuantity(index)}>-</button>
            </div>
            <p>Total Price: {item.price * item.quantity}</p>
            <button onClick={() => handleRemoveProduct(index)}>
              <MdDelete />
            </button>
          </div>
        </div>
      ))} */}

      <div>
        <h2>Overall Price: {calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default CartPage;
