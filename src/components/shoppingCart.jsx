import React, { useEffect} from 'react';
import CardItem from './cardItem';
import Footer from './footer';
import LogNav from './logNav';
import { ProductContext } from '../contexts/product-context'
import { useContext } from 'react';
function ShoppingCart (){
    const {listItems}=useContext(ProductContext);
    useEffect(()=>{
        },[])
    return (
    <>
        <LogNav />
            <div className='Container'>
                <div className='Cart-Container'>
                    <div className="Header">
                        <h1 className="Heading">Shopping Cart</h1>
                    </div>
                    <div className='cardItemcontanier'>
                        <CardItem image="/products/product5.jpg" price="220" name="Iphone" />
                        <CardItem image="/products/product5.jpg" price="220" name="Iphone" />
                        {listItems.map((item)=><CardItem key={item.id} image={item.image} price={item.price} name={item.name} Id={item.id} />)}
                    </div>
                </div>
            </div>
            
        <Footer />
    </>
);
}
export default ShoppingCart;