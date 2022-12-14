import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirmation] = useState("");

    const Navigate =useNavigate();
    function submitHandler() {
        if(password === passwordConfirm){
            fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
            {
                method: "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, returnSecureToken: true }),
            }
            ).then(() => {
                Navigate('/signin')
            }).catch(error=>{
                console.log(error)
            });
        }
        
    }
    return (
        <React.Fragment>
        <Nav />
        <div className="signUp">
            <div className="signupcard">
            <h1>
                <span>Sign</span> Up
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
                <label>Confirm Password</label>
                <input type="password" placeholder="Your confirmation password" value={passwordConfirm} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </form>
            <div className="signin">
                <p>
                Already have account ? <span><Link to='/signin' >Sign in</Link></span>
                </p>
                <button className="btn" onClick={submitHandler}>
                Sign Up
                </button>
            </div>
            </div>
        </div>
        <Footer />
        </React.Fragment>
    );
};

export default Signup;
