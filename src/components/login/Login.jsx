import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { AuthContext } from "../../contexts/AuthProvider";

import app from "../../firebase/firebase.config";
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signupwithgmail, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // signInWithPopup(auth, provider)
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email and password");
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // If you intend to use Firebase's Google Sign-In for registration, you need to use signInWithPopup with the Google provider.
    // signInWithPopup(auth, provider)
    signupwithgmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email and password");
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-10 login-background">
      <form
        className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        onSubmit={handleLogin}
        style={{ zIndex: 1 }}
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl text-black font-bold">Login </span>
          <span className="font-semibold text-black mb-8">Welcome Back!</span>
          <div className="py-4">
            <span className="flex-start flex mb-2 text-md">Email Address</span>
            <input
              type="email"
              className="w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
              name="email"
            />
          </div>
          <div className="py-4">
            <span className="flex-start flex mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 ring-1 ring-gray-400 focus:ring-black"
              name="password"
            />
          </div>
          <div>
            {errorMessage && (
              <div style={{ color: "black", fontWeight: "bold" }}>
                *{errorMessage}
              </div>
            )}
          </div>
          <br />
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" className="mr-2" />
              <span className="text-md">Remember Password</span>
            </div>
          </div>
          <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:font-bold hover:bg-white hover:text-black hover:border hover:border-gray-300 outline hover:outline-offset-1">
            Login
          </button>
          <button onClick={handleRegister}>Sign with Google</button>
          <br />
          <div className="text-center text-gray-400 ">
            Create new account ?
            <Link to="/register">
              <span className="font-bold text-black pl-2 cursor-pointer">
                Register Form
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import "./Login.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// import { AuthContext } from "../../contexts/AuthProvider";

// import app from "../../firebase/firebase.config";
// const provider = new GoogleAuthProvider();
// const auth = getAuth();

// const Login = () => {
//   const [errorMessage, seterrormessage] = useState("");
//   const [signupwithgmail, login] = useState(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";

//   const handlelogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     console.log(form);

//     const email = form.email.value;
//     console.log(email);

//     const password = form.password.value;
//     console.log(password);

//     login(email, password)
//       .then((result) => {
//         const user = result.user;
//         alert("login sucessfull");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         seterrormessage("please provide valid email and password");
//       });
//   };

//   const handleregister = () => {
//     signupwithgmail()
//       .then((result) => {
//         const user = result.user;
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         seterrormessage("please provide valid email and password");
//       });
//   };
//   return (
//     <div className="flex justify-center items-center  bg-gray-100 mt-10">
//       <form
//         className="flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
//         onSubmit={handlelogin}
//       >
//         <div className="flex flex-col justify-center p-8 md:p-14">
//           <span className="mb-3 text-4xl font-bold">Login </span>
//           <span className="font-light text-gray-400 mb-8">Welcome Back!</span>
//           <div className="py-4 ">
//             <span className="flex-start flex mb-2 text-md">Email Address</span>
//             <input
//               type="email"
//               className="w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500
//                ring-1 ring-gray-400 focus:ring-black"
//               name="email"
//               // onChange={(e) => setemail(e.target.value)}
//             />
//           </div>
//           <div className="py-4 ">
//             <span className="flex-start flex mb-2 text-md">Password</span>
//             <input
//               type="password"
//               className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500
//               ring-1 ring-gray-400 focus:ring-black"
//               name="password"
//               // onChange={(e) => setpassword(e.target.value)}
//             />
//           </div>

//           {/* showing message */}

//           <div>
//             {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
//           </div>
//           <div className="flex justify-between w-full py-4">
//             <div className="mr-24">
//               <input type="checkbox" className="mr-2" />
//               <span className="text-md">Remember Password</span>
//             </div>
//           </div>
//           <button
//             className="w-full bg-black text-white p-2 rounded-lg mb-6
//             hover:bg-white hover:text-black hover:border hover:border-gray-300 outline hover:outline-offset-1"
//           >
//             Login
//           </button>
//           <button onClick={handleregister}>sign with google </button>
//           <br />
//           <div className="text-center text-gray-400 ">
//             Create new account ?
//             <Link to="/register">
//               <span className="font-bold text-black pl-2 cursor-pointer">
//                 Register Form
//               </span>
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
