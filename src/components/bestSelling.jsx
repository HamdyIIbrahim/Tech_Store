import React from 'react';
import Product from './product';
function Selling() {
    return ( 
        <div className='bestSelling'>
            <h1><span>Best Selling</span> Products</h1>
            <Product image='/products/product.webp' price='$220' name='Beats 200X'/>
            <Product image='/products/product2.jpg' price='$420' name='Smart watch'/>
            <Product image='/products/product3.jpg' price='$360' name='Airpods 12'/>
            <Product image='/products/product4.jpg' price='$120' name='Airpods pro'/>
            <Product image='/products/product5.jpg' price='$230' name='Beats 100X'/>
            <Product image='/products/product6.jpg' price='$570' name='Smart Org'/>
            <Product image='/products/product7.jpg' price='$220' name='Air dos'/>
            <Product image='/products/product8.jpg' price='$1220' name='Iphone'/>
            <h1><span>Recommended</span> for you</h1>
            <Product image='/products/product5.jpg' price='$230' name='Beats 100X'/>
            <Product image='/products/product6.jpg' price='$570' name='Smart Org'/>
            <Product image='/products/product7.jpg' price='$220' name='Air dos'/>
            <Product image='/products/product8.jpg' price='$1220' name='Iphone'/>
        </div>
    );
}

export default Selling;