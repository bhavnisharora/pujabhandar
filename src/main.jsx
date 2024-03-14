import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { ProductProvider } from "./pages/admin/ProductContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProductProvider>
          <App />
        </ProductProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
