import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import LogNav from './logNav'

function GetOrder() {
    return (
        <React.Fragment>
            <LogNav />
            <div className='getOrderContainer'>
                <div className='aboutText Order'>
                    <h1><span>Getting</span> Your Order</h1>
                    <form className='form valid'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Input Your Name'></input>
                        <label>Address</label>
                        <input type="text" placeholder='Enter your address'></input>
                        <label>city</label>
                        <input type="text" placeholder='4723'></input>
                        <label>State</label>
                        <input type="text" placeholder='enter your state'></input>
                        <label>ZIP Code</label>
                        <input type="text" placeholder=''></input>
                    </form>
                    <h1><span>Contact</span> Information</h1>
                    <form className='form valid'>
                        <label>Email</label>
                        <input type="text" placeholder='Input Your Email'></input>
                        <label>Phone Number</label>
                        <input type="text" placeholder='Enter your Phone Number'></input>
                    </form>
                    <button className='btn valid'><Link className='btn' to=''>Confirm Your Payment Information</Link></button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default GetOrder