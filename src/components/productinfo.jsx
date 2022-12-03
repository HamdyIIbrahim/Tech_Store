import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import LogNav from './logNav';
import {ProductData} from './product'
function ProductInfo() {
    const [quantity ,SetQuantity]=useState(0);
    const product = useContext(ProductData);
    {console.log(product)}

    useEffect(()=>{
        if(quantity <= 0){
            SetQuantity(0)
        }
    },[quantity])
    return ( 
        <React.Fragment>
            <LogNav />
            <div className='productContainer'>
                <div className='productContainer2'>
                    <div className='productImage'>
                        <img src='/products/product3.jpg' alt='productImage'></img>
                    </div>
                    <div className='productInfo'>
                        <h1>Airpods Xtra 2022</h1>
                        <h1>Details</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur ipsa cupiditate sapiente rem quas eius nobis expedita molestias culpa, labore doloremque. Aliquid esse nulla repellendus omnis asperiores doloremque commodi!</p>
                        <div className='lastcontainer'>
                            <div className='quantity'>
                                <h2>quantity</h2>
                                <div className='quantityContainer'>
                                <button className='btn btn2' onClick={()=>SetQuantity(quantity -1)}>-</button>
                                <p>{quantity}</p>
                                <button className='btn btn2' onClick={()=>SetQuantity(quantity +1)}>+</button>
                                </div>
                                
                            </div>
                            <div className='price'>
                                <h2>price</h2>
                                <span>${120 * quantity}</span>
                            </div>
                            <div className='section'>
                            <button className='btn'> Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductInfo;