import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './footer'
import LogNav from './logNav'
import { ToastContainer, toast } from "react-toastify";
function GetOrder() {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const validateData = () => {
        if (email === "") {
            toast.error("Email is Required");
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        }else{
            toast.error("You have entered an invalid email address!");
        }
        if(phoneNumber === ''){
            toast.error("PhoneNumber is Required");
        }else if(/^\d{10}$/.test(phoneNumber)){

        }else{
            toast.error("You have entered an invalid Phone number!");
        }
        if(name === ''){
            toast.error("Name is Required");
        }
        if(address === ''){
            toast.error("Address is Required");
        }
        if(city === ''){
            toast.error("City is Required");
        }
        if(state === ''){
            toast.error("State is Required");
        }
        if(zip === ''){
            toast.error("ZIP is Required");
        }
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && /^\d{10}$/.test(phoneNumber)){
            Navigate("/confirmedOrder")
        }
    }
    function submitHandler(e) {
        e.preventDefault();
        validateData();
    }
    return (
        <React.Fragment>
            <ToastContainer />
            <LogNav />
            <div className='getOrderContainer'>
                <div className='aboutText Order'>
                    <h1><span>Getting</span> Your Order</h1>
                    <form className='form valid'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Input Your Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <label>Address</label>
                        <input type="text" placeholder='Enter your address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                        <label>city</label>
                        <input type="text" placeholder='4723' value={city} onChange={(e)=>setCity(e.target.value)}></input>
                        <label>State</label>
                        <input type="text" placeholder='enter your state' value={state} onChange={(e)=>setState(e.target.value)}></input>
                        <label>ZIP Code</label>
                        <input type="text" placeholder='' value={zip} onChange={(e)=>setZip(e.target.value)}></input>
                    </form>
                    <h1><span>Contact</span> Information</h1>
                    <form className='form valid'>
                        <label>Email</label>
                        <input type="text" placeholder='Input Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <label>Phone Number</label>
                        <input type="text" placeholder='Enter your Phone Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                    </form>
                    <button className='btn valid' ><Link className='btn' to='/confirmedOrder' onClick={submitHandler}>Confirm Your Payment Information</Link></button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default GetOrder