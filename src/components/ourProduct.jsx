import React, { useEffect, useState } from 'react';
import Footer from './footer';
import LogNav from './logNav';
import Product from './product';
function Ourproduct({Data}) {
    const data=Data.products;
    const [name , setName]=useState(true);
    const [newData , setNewData]=useState(data);
    const result =(value)=>{
        const arr = data.filter((product)=> product.category === value)
        setNewData(arr)
    }
    useEffect(()=>{
    },[name])
    useEffect(()=>{
    },[newData])

    const getData =(id)=>{
        return data.filter((product)=> product.id === id)
    }
    return ( 
        <React.Fragment>
            <LogNav />
            <div className='contactus'>
                <h1>Our <span>Products</span></h1>
                <div className='buttons'>
                    <button id='1' className={'btn ' + (name === 1 ? "":"btnbl")} onClick={()=>{setName(1)
                    result("headphones")}}>HeadPhones</button>
                    <button id='2' className={'btn ' + (name === 2 ? "":"btnbl")} onClick={()=>setName(2)}>Mouse</button>
                    <button id='3' className={'btn ' + (name === 3 ? "":"btnbl")} onClick={()=>{setName(3)
                    result("watch")}}>Digital Watch</button>
                    <button id='4' className={'btn ' + (name === 4 ? "":"btnbl")} onClick={()=>setName(4)}>Alarm Clock</button>
                    <button id='5' className={'btn ' + (name === 5 ? "":"btnbl")} onClick={()=>setName(5)}>Calculator</button>
                    <button id='6' className={'btn ' + (name === 6 ? "":"btnbl")} onClick={()=>setName(6)}>DVD Player</button>
                    <button id='8' className={'btn ' + (name === 8 ? "":"btnbl")} onClick={()=>setName(7)}>Ebook</button>
                </div>
            </div>
            <div className='Products'>
            
            {newData.map((product)=><Product image={product.image} price={product.price} name={product.name} Id={product.id} getData={getData}/>)}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Ourproduct;