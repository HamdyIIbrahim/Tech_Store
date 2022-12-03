import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
export const ProductData = React.createContext();
function Product({image,name,price,Id,getData}) {
    const [product,setProduct] = useState([])
    const clicked  =(id)=>{
        const product= getData(id)
        setProduct(product[0]) 
    }
    return ( 
        <ProductData.Provider value={product}>
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
                    <li><Link id={Id} className='li btn' to="/productinfo" onClick={(e)=>clicked(e.target.id)}>Add to Card</Link></li>
                        <li>(5.0)</li>
                    </ul>
                </div>
            </div>
        </ProductData.Provider>
    );
}

export default Product;