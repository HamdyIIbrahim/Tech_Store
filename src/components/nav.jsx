import React from 'react';
import {Link} from 'react-router-dom';
function Nav() {
    return ( 
        <ul className='navBar'>
            <li><img className='logo' src={require("../assets/favicon.ico")} alt='logo'></img></li>
            <ul className='list'>
                <li><Link className='li' to="/" >Home</Link></li>
                <li><Link className='li' to="/aboutus" >About Us</Link></li>
                <li><Link className='li' to="/Products" >Products</Link></li>
                <li><Link className='li' to="/Contactus" >Contact Us</Link></li>
            </ul>
            <li><Link className='btn' to="/signup">Sign up</Link></li>
        </ul>
    );
}

export default Nav;