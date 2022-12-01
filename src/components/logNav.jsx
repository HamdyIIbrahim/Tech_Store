import React from "react";
import {Link} from 'react-router-dom';
function LogNav() {
    return (
    <ul className="navBar">
        <li>
            <img
            className="logo"
            src={require("../assets/favicon.ico")}
            alt="logo"
            ></img>
        </li>
        <ul className="list">
        <li><Link className='li' to="/" >Home</Link></li>
                <li><Link className='li' to="/aboutus" >About Us</Link></li>
                <li><Link className='li' to="/Products" >Products</Link></li>
                <li><Link className='li' to="/Contactus" >Contact Us</Link></li>
        </ul>
        <li>
            <button type="button" class="icon-button">
                <img src="/products/notifications.png" alt="notifications"></img>
                <span class="icon-button__badge">2</span>
            </button>
        </li>
        <li>
            <div className="profilePic">
            <Link className='li' to="/Profile" ><img src="/products/feedback.jpg" alt="profilePicture"></img></Link>
                {/* <img src="/products/feedback.jpg" alt="profilePicture"></img> */}
            </div>
        </li>
        </ul>
);
}

export default LogNav;
