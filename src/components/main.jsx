import React from 'react';
function Main() {
    return ( 
        <div className='container'>
            <div className='leftSide'>
                <h1>Find Your Best <span>Tech Gadgets</span></h1>
                <p>Thousands of 5-star reviews on Trustpilot make us the most trusted place to buy headphones and home audio on the internet.Headphones Engineered For Heavy Metal
Metal-loud headphones with 2 frequency ranges and 4 drivers so you can listen to metal the way it’s meant to be heard.


</p>
<button className='btn'>Order Your Gadgets</button>
<button className='btn btn2'>How to Order</button>
            </div>
            <div className='rightSide'>
                <img className='person' src={require('../assets/person.webp')} alt='person'></img>
            </div>
        </div>
    );
}

export default Main;