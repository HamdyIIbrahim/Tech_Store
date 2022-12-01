import React, { useEffect, useState } from 'react';
import Footer from './footer';
import LogNav from './logNav';
import Product from './product';
function Ourproduct() {
    const [name , setName]=useState(true);
    useEffect(()=>{
    },[name])

    return ( 
        <React.Fragment>
            <LogNav />
            <div className='contactus'>
                <h1>Our <span>Products</span></h1>
                <div className='buttons'>
                    <button id='1' className={'btn ' + (name === 1 ? "":"btnbl")} onClick={()=>setName(1)}>HeadPhones</button>
                    <button id='2' className={'btn ' + (name === 2 ? "":"btnbl")} onClick={()=>setName(2)}>Mouse</button>
                    <button id='3' className={'btn ' + (name === 3 ? "":"btnbl")} onClick={()=>setName(3)}>Digital Watch</button>
                    <button id='4' className={'btn ' + (name === 4 ? "":"btnbl")} onClick={()=>setName(4)}>Alarm Clock</button>
                    <button id='5' className={'btn ' + (name === 5 ? "":"btnbl")} onClick={()=>setName(5)}>Calculator</button>
                    <button id='6' className={'btn ' + (name === 6 ? "":"btnbl")} onClick={()=>setName(6)}>DVD Player</button>
                    <button id='7' className={'btn ' + (name === 7 ? "":"btnbl")} onClick={()=>setName(7)}>Earbuds</button>
                    <button id='8' className={'btn ' + (name === 8 ? "":"btnbl")} onClick={()=>setName(8)}>Ebook</button>
                </div>
            </div>
            <div className='Products'>
            <Product image='/products/product.webp' price='$220' name='Beats 200X'/>
            <Product image='/products/product2.jpg' price='$420' name='Smart watch'/>
            <Product image='/products/product3.jpg' price='$360' name='Airpods 12'/>
            <Product image='/products/product4.jpg' price='$120' name='Airpods pro'/>
            <Product image='/products/product5.jpg' price='$230' name='Beats 100X'/>
            <Product image='/products/product6.jpg' price='$570' name='Smart Org'/>
            <Product image='/products/product7.jpg' price='$220' name='Air dos'/>
            <Product image='/products/product8.jpg' price='$1220' name='Iphone'/>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Ourproduct;