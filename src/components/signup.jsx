import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./footer";
import Nav from "./nav";

const Signup = () => {
    const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirmation] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     validateData();
//   };
  const validateData = () => {
    const Email = email.trim();
    const Password = password.trim();
    const PasswordConfirm = passwordConfirm.trim();
    if (Email === "") {
      toast.error("UserName is Required");
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){

    }else{
      toast.error("You have entered an invalid email address!");
    }
    if(Password === ''){
        toast.error("Password is Required");
    }
    if(PasswordConfirm === ''){
        toast.error("Confirm Password is Required");
    }
    if(Password !== PasswordConfirm){
        toast.error("Confirm Password is not equal to password");
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) && Password === PasswordConfirm){
        fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email:Email, password:Password, returnSecureToken: true }),
            }
            ).then(() => {
                Navigate('/signin')
            }).catch(error=>{
                console.log(error)
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
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Your confirmation password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </form>
          <div className="signin">
            <p>
              Already have account ?{" "}
              <span>
                <Link to="/signin">Sign in</Link>
              </span>
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
