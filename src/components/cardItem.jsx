import React, { useEffect, useState } from 'react';
import { ProductContext } from '../contexts/product-context'
import { useContext } from 'react';

const CardItem = ({image , price , name ,Id}) => {
    const {removeProductById,getQuantity ,increaseQuantity,decreaseQuantity}=useContext(ProductContext);
    const quan = getQuantity(Id)
    const [quantity ,SetQuantity]=useState(quan);
    const handleIncrement=()=>{
        const incrementItem=increaseQuantity(Id)
        SetQuantity(incrementItem)
    }
    const handleDecrement=()=>{
        const decrementItem=decreaseQuantity(Id)
        SetQuantity(decrementItem)
    }
    useEffect(()=>{
        if(quantity <= 0){
            SetQuantity(0)
        }
    },[quantity])
    return ( 
        <>
            <div className='Cart-Items'>
                <div className='image-box'>
                    <img src={image} alt='productimg'></img>
                </div>
                <div className='about'>
                    <h1 className='title'>{name}</h1>
                </div>
                <div className='counter'>
                    <button className='btnproduct' onClick={handleIncrement}>+</button>
                    <div className='count'>{quantity}</div>
                    <button className='btnproduct' onClick={handleDecrement}>-</button>
                </div>
                <div className='prices'>
                <div className='amount'>${price}</div>
                    <button className='remove' onClick={()=>removeProductById(Id)}>Remove</button>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default CardItem;
