import React from 'react';
import Product from './product';
import { useContext } from 'react';
import {ProductContext} from '../contexts/product-context'
function Selling({Data}) {
    const data = useContext(ProductContext).product;
    return ( 
        <div className='bestSelling'>
            <h1><span>Best Selling</span> Products</h1>
            {data.map((product)=><Product image={product.image} price={product.price} name={product.category}/>)}
            <h1><span>Recommended</span> for you</h1>
            <Product image='/products/product5.jpg' price='$230' name='Beats 100X'/>
            <Product image='/products/product6.jpg' price='$570' name='Smart Org'/>
            <Product image='/products/product7.jpg' price='$220' name='Air dos'/>
            <Product image='/products/product8.jpg' price='$1220' name='Iphone'/>
        </div>
    );
}

export default Selling;