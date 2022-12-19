import React from 'react';
import Product from './product';
import { useContext } from 'react';
import {ProductContext} from '../contexts/product-context'
function Selling() {
    const data = useContext(ProductContext).product;
    const recommend = data.filter((product)=> product.Rate >=4)
    return ( 
        <div className='bestSelling'>
            <h1><span>Best Selling</span> Products</h1>
            {data.map((product)=><Product key={product.id} image={product.image} price={product.price} name={product.name} Id={product.id}/>)}
            <h1><span>Recommended</span> for you</h1>
            {recommend.map((product)=><Product key={product.id} image={product.image} price={product.price} name={product.name} Id={product.id}/>)}
        </div>
    );
}

export default Selling;