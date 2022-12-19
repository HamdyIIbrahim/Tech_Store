import "./components/home.css";
import "./components/media.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Ourproduct from "./components/ourProduct";
import AboutUs from "./components/aboutUs";
import Contactus from "./components/contactus";
import ProductInfo from "./components/productinfo";
import UserProfile from "./components/userProfile";
import Error from "./components/error";
import Signup from "./components/signup";
import Signin from "./components/signin";
import ProductProvider from "./contexts/product-context";
import ShoppingCart from "./components/shoppingCart";
import GetOrder from "./components/getOrder";
import CongrateOrder from "./components/congrateorder";
import Home from "./components/home";
function App() {
  
  return (
    <ProductProvider>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home />
            }
          />
          <Route path="/Products" element={<Ourproduct />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/error" element={<Error />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/productinfo/:Id" element={<ProductInfo />} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkoutOrder" element={<GetOrder />} />
          <Route path="/error" element={<Error />} />
          <Route path="/confirmedOrder" element={<CongrateOrder />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
