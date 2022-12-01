import React from 'react';
import {Link} from 'react-router-dom';
function Product({image,name,price}) {
    return ( 
        <div className='card'>
            <div>
                <img src={image} alt='product' ></img>
            </div>
            <div className='info'>
                <ul>
                    <li><h2>{name}</h2></li>
                    <li>{price}</li>
                </ul>
                <p>There are many things are needed to start the Gadget business</p>
                <ul>
                <li><Link className='li btn' to="/productinfo" >Add to Card</Link></li>
                    <li>(5.0)</li>
                </ul>
            </div>
        </div>
    );
}

export default Product;