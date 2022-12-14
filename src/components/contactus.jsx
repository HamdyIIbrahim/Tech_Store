import React from 'react';
import Footer from './footer';
import LogNav from './logNav';
import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import Nav from './nav';
function Contactus() {
    const { disable } = useContext(ProductContext);
    return ( 
        <React.Fragment>
            {disable ? <LogNav /> : <Nav />}
            <div className='aboutUS reverse'>
                <div className='aboutText'>
                    <h1><span>Contact</span> Us</h1>
                    <form className='form'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Input Your Name'></input>
                        <label>Email</label>
                        <input type="text" placeholder='Input Your Email'></input>
                        <label>Message</label>
                        <input type="text" placeholder='Input Your Message'></input>
                    </form>
                    <button className='btn'>Send Message</button>
                </div>
                <div className='photo'>
                    <img src='/products/contactus.png' alt='person'></img>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Contactus;