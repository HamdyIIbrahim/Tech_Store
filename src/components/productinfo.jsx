import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import LogNav from './logNav';
import { useContext } from 'react';
import {ProductContext} from '../contexts/product-context'
function ProductInfo() {
    const { Id } = useParams();
    console.log(Id);
    const [quantity ,SetQuantity]=useState(0);

    const ctx = useContext(ProductContext);
    const [result , setResult] =useState({})

    useEffect(()=>{
    const response =   ctx.getProductById(Id)
    setResult(response[0])
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
                        <img src={result.image} alt='productImage'></img>
                    </div>
                    <div className='productInfo'>
                        <h1>{result.name}</h1>
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
                                <h2>{result.price}</h2>
                                <span>${`${+result.price * quantity}`}</span>
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