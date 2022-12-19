import React, { useEffect} from 'react';
import CardItem from './cardItem';
import Footer from './footer';
import LogNav from './logNav';
import { ProductContext } from '../contexts/product-context'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function ShoppingCart (){
    const {listItems}=useContext(ProductContext);
    useEffect(()=>{
        },[])
    return (
    <>
        <LogNav />
            <div className='Container cart'>
                <div className='Cart-Container'>
                    <div className="Header">
                        <h1 className="Heading">Shopping Cart</h1>
                    </div>
                    <div className='cardItemcontanier'>
                        {listItems.map((item)=><CardItem key={item.id} image={item.image} price={item.price} name={item.name} Id={item.id} />)}
                    </div>
                </div>
            </div>
            <div className='buttonclass'>
                <button className='btn order'><Link className='btn' to='/checkoutOrder'>Get Your Order Now</Link></button>
            </div>
            
        <Footer />
    </>
);
}
export default ShoppingCart;