import React from 'react';
import Footer from './footer';
import LogNav from './logNav';
function UserProfile() {
    return ( 
        <div>
            <LogNav />
            <div className='userProfile'>
                <h1>User <span>Profile</span></h1>
                <img className='profilePic change' src="/products/feedback.jpg" alt="profilePicture"></img>
                <form className='form'>
                        <div className='left'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Your Name'></input>
                        <label >Email</label>
                        <input type="text" placeholder='Your Email'></input>
                        </div>
                        <div className='right'>
                        <label>User Name</label>
                        <input type="text" placeholder='Your Name'></input>
                        <label>Password</label>
                        <input type="text" placeholder='Your Password'></input>
                        <button className='btn'>Change</button>
                        </div>
                </form>
                <div className='section2'>
                <label>Facebook</label>
                <input type="text" placeholder='add your facebook account'></input>
                <label>google</label>
                <input type="text" placeholder='add your google account'></input>
                </div>
                <div className='button'>
                    <button className='btn btn2'>Delete account</button>
                    <button className='btn '>Save changes</button>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default UserProfile;