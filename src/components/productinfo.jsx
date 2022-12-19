import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import LogNav from './logNav';
import { useContext } from 'react';
import {ProductContext} from '../contexts/product-context'
import Nav from './nav';
import { ToastContainer, toast } from "react-toastify";

function ProductInfo() {
    const { Id } = useParams();
    const Navigate =useNavigate();
    const {shoppingList , getProductById ,getQuantity ,increaseQuantity,decreaseQuantity ,disable } = useContext(ProductContext);
    const [result , setResult] =useState({})
    const quan = getQuantity(Id)
    const [quantity ,SetQuantity]=useState(quan);
    const handleNavigate=()=>{
        if(disable === true){
            Navigate('/shoppingcart')
        }else{
            Navigate('/signup')
        }
    }
    const handleIncrement=()=>{
        const incrementItem=increaseQuantity(Id)
        SetQuantity(incrementItem)
    }
    const handleDecrement=()=>{
        const decrementItem=decreaseQuantity(Id)
        SetQuantity(decrementItem)
    }
    
    useEffect(()=>{
    const response = getProductById(Id)
    setResult(response[0])
        if(quantity <= 0){
            SetQuantity(0)
        }
    },[quantity])
    return ( 
        <React.Fragment>
            <ToastContainer />
            {disable ? <LogNav /> : <Nav />}
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
                                <button className='btn btn2' onClick={handleDecrement}>-</button>
                                <p>{quantity}</p>
                                <button className='btn btn2' onClick={handleIncrement}>+</button>
                                </div>
                                
                            </div>
                            <div className='price'>
                                <h2>Price</h2>
                                <span>${`${+result.price * quantity}`}</span>
                            </div>
                            <div className='section'>
                                <button className='btn'  onClick={()=>{shoppingList(result)
                                    handleNavigate()
                                }}>Order Now</button>
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