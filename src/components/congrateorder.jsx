import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
import LogNav from './logNav'
import { useContext } from 'react';
import {ProductContext} from '../contexts/product-context'

function CongrateOrder() {
    const {orderConfirmed} = useContext(ProductContext);
  return (
    <>
        <LogNav />
        <div className='confirmOrder'>
            <div className='imgOrder'>
                <img src={require('../assets/Congratulation-Free-Download-PNG.png')} alt='congratulationsImage' />
            </div>
            <div>
                <h1><span>Congratulations</span> you have been complete your order successfully</h1>
            </div>
            <button className='btn btn2' onClick={orderConfirmed}>
                <Link to='/' >Go back to home page</Link>
            </button>
        </div>
        <Footer />
    </>
  )
}

export default CongrateOrder