import React, { useState } from "react";
import { Link , redirect, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import { useContext } from 'react';
import { ProductContext } from "../contexts/product-context";
import LogNav from "./logNav";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate =useNavigate();
    const {disabled,handleLogin,disable}=useContext(ProductContext);
    const validateData = () => {
        const Email = email.trim();
        const Password = password.trim();
        if (Email === "") {
            toast.error("UserName is Required");
        }
        if(Password === ''){
            toast.error("Password is Required");
        }
        if (Email !== "" && Password !== ""){
            fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
                {
                    method: "Post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email:Email, password:Password, returnSecureToken: true }),
                }
                ).then((response) => {
                    return response.json()
                }).then((data)=>{
                    if(data.registered === true){
                        Navigate("/")
                        handleLogin()
                    }else{
                        toast.error(data.error.message)
                    }
                    
                }).catch(()=>{
                    toast.error("error")
                });
        }
    };
    function submitHandler(e) {
        e.preventDefault();
        validateData();
    }
    return (
        <React.Fragment>
        <ToastContainer />
        {disable ? <LogNav /> : <Nav />}
        <div className="signUp">
            <div className="signupcard">
            <h1>
                <span>Sign</span> in
            </h1>
            <form className="form">
                <label>Email</label>
                <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <label>Password</label>
                <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </form>
            <div className="signin">
                <p>
                Create new account? <span><Link to='/signup' >Sign up</Link></span>
                </p>
                <button className="btn" onClick={submitHandler} disabled={disabled}>
                Sign in
                </button>
            </div>
            </div>
        </div>
        <Footer />
        </React.Fragment>
    );
};

export default Signin;
