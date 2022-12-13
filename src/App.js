import Nav from "./components/nav";
import "./components/home.css";
import "./components/media.css";
import Main from "./components/main";
import { Route, Routes } from "react-router-dom";
import Features from "./components/features";
import Selling from "./components/bestSelling";
// import Feedback from "./components/feedbach";
import Footer from "./components/footer";
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

const data = {
  products: [
    {
      id: "1",
      image: "/products/product.webp",
      price: "$220",
      name: "Beats 200X",
      category: "headphones",
    },
    {
      id: "2",
      image: "/products/product2.jpg",
      price: "$420",
      name: "Smart watch",
      category: "watch",
    },
    {
      id: "3",
      image: "/products/product3.jpg",
      price: "$360",
      name: "Airpods 12",
      category: "headphones",
    },
    {
      id: "4",
      image: "/products/product4.jpg",
      price: "$120",
      name: "Airpods pro",
      category: "headphones",
    },
    {
      id: "5",
      image: "/products/product5.jpg",
      price: "$230",
      name: "Beats 100X",
      category: "headphones",
    },
    {
      id: "6",
      image: "/products/product6.jpg",
      price: "$570",
      name: "Smart Org",
      category: "watch",
    },
    {
      id: "7",
      image: "/products/product7.jpg",
      price: "$220",
      name: "Air dos",
      category: "headphones",
    },
    {
      id: "8",
      image: "/products/product8.jpg",
      price: "$1220",
      name: "Iphone",
      category: "phones",
    },
  ],
};
function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <React.Fragment>
                <Nav />
                <div className="containerr">
                  <Main />
                  <Features />
                  <Selling Data={data} />
                </div>
                <Footer />
              </React.Fragment>
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
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
