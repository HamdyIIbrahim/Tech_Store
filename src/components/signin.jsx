import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate =useNavigate();
    function submitHandler() {
        fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        }
        ).then(() => {
            Navigate('/')
        }).catch(error=>{
            console.log(error)
        });
    }
    return (
        <React.Fragment>
        <Nav />
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
                />
                <label>Password</label>
                <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <div className="signin">
                <p>
                Create new account? <span><Link to='/signup' >Sign up</Link></span>
                </p>
                <button className="btn" onClick={submitHandler}>
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
