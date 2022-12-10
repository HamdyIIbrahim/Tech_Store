import React from 'react';
import { ProductContext } from '../contexts/product-context'
import { useContext } from 'react';

const CardItem = ({image , price , name ,Id}) => {
    const {removeProductById}=useContext(ProductContext);
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
                    <div className='btnproduct'>+</div>
                    <div className='count'>3</div>
                    <div className='btnproduct'>-</div>
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
