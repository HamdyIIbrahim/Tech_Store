import React from 'react';
function Features() {
    return ( 
        <div className='textDec'>
                <h1><span>Features</span></h1>
                <h1><span>Gadgets with</span> a new passions</h1>
                <div className='features'>
                    <div className='items3'>
                        <div className='item'>
                            <img src={require('../assets/quality.png')} alt='quality'></img>
                            <h1>Quality Gadgets</h1>
                            <p>It can be very secure path to earn good money and make you very successful creative entrepreneur</p>
                        </div>
                        <div className='item'>
                            <img src={require('../assets/delivery.png')} alt='Free delivery'></img>
                            <h1>Quality Gadgets</h1>
                            <p>It can be very secure path to earn good money and make you very successful creative entrepreneur</p>
                        </div>
                        <div className='item'>
                        <img src={require('../assets/secure.png')} alt='secure'></img>
                            <h1>Quality Gadgets</h1>
                            <p>It can be very secure path to earn good money and make you very successful creative entrepreneur</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Features;