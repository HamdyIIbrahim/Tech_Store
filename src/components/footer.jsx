import React from 'react';
function Footer() {
    return ( 
        <div className='footer'>
            <div>
                <img className='logo' src='/favicon.ico' alt='logo'></img>
                <h3>Newsletters Sign up</h3>
                <p>Sign Up For Least News & Offers</p>
                <input className='address' type='text' placeholder='Your Email Address'></input>
            </div>
            <div>
                <h3>Categries</h3>
                <ul>
                    <li>Headphones</li>
                    <li>Smart watch</li>
                    <li>Mouse</li>
                    <li>Camera</li>
                </ul>
            </div>
            <div>
                <h3>About Us</h3>
                <ul>
                    <li>License</li>
                    <li>Policy</li>
                    <li>Terms of Use</li>
                    <li>Help</li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <ul>
                    <li>+995927597223</li>
                    <li>hamdyfarouk@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;