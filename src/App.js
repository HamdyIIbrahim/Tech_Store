import Nav from "./components/nav";
import './components/home.css'
import './components/media.css'
import Main from "./components/main";
import {Route, Routes} from "react-router-dom";
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

function App() {
  return (
    
      <div className="app">
      <Routes>
        <Route path="/" exact element={
          <React.Fragment>
            <Nav />
            <div className="containerr">
              <Main />
              <Features />
              <Selling /> 
            </div>  
            <Footer /> 
          </React.Fragment>
        }/>
        <Route path="/Products" element={<Ourproduct />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/error" element={<Error />}/>
        <Route path="/Contactus" element={<Contactus />}/>
        <Route path="/productinfo" element={<ProductInfo />}/>
        <Route path="/Profile" element={<UserProfile />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
    
  );
}

export default App;
