import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { AuthContext } from "../contexts/AuthProvider";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [phone, setphone] = useState("");
  // const [signupwithgmail, login] = useState(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  // const [signupwithgmail, createuser] = useState(AuthContext);
  const { createuser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email and password");
      });

    console.log("btn clicked");
  };
  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    console.log(name, email, password, confirmpassword);

    if (password !== confirmpassword) {
      setErrorMessage(
        "password does not match! Please provide a correct password"
      );
    } else {
      setErrorMessage("");
      createuser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Accounts created successfully!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          alert(`${error.message}`);
        });
    }
  };
  return (
    <div className="flex justify-center items-center  bg-gray-100 mt-10 login-background">
      <form
        className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        onSubmit={handlesignup}
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl text-black font-bold">SignUp </span>
          <span className="font-semibold text-black mb-8">
            Looks like you're new here
          </span>

          <div className="py-4 ">
            <span className="flex-start flex mb-2 text-md">Your Name</span>
            <input
              type="text"
              className="w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500
               ring-1 ring-gray-400 focus:ring-black"
              name="name"
            />
          </div>
          <div className="py-4 ">
            <span className="flex-start flex mb-2 text-md">Email Address</span>
            <input
              type="text"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="email"
            />
          </div>

          <div className="py-4 ">
            <span className="flex-start flex mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="password"
            />
          </div>

          <div className="py-4 ">
            <span className="flex-start flex mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
              ring-1 ring-gray-400 focus:ring-black"
              name="confirmpassword"
            />
          </div>

          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" className="mr-2" />
              <span className="text-md">
                I Agree With
                <Link to="/terms-conditions" className="font-semibold">
                  &nbsp; Terms & Conditions
                </Link>
              </span>
            </div>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6
          hover:bg-white hover:text-black hover:font-bold hover:border hover:border-gray-300 outline hover:outline-offset-1"
          >
            Sign Up
          </button>
          <br />
          <button onClick={handleRegister}> register with google</button>
          <br />
          <div className="text-center text-grey">
            Already have an account ?
            <Link to="/login">
              <span className="font-bold text-black pl-2 cursor-pointer">
                Login Form
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
