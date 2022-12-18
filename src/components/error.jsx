import React from 'react';
import Footer from './footer';
import LogNav from './logNav';
import { useContext } from 'react';
import { ProductContext } from "../contexts/product-context";
import Nav from './nav';
const Error = () => {
    const {disable}=useContext(ProductContext);
    return ( 
        <React.Fragment>
            {disable ? <LogNav /> : <Nav />}
            <div className='container notfound'>
                <h1><span>Page</span> not found</h1>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Error;