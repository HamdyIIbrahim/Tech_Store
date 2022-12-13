import React from 'react';
import Footer from './footer';
import LogNav from './logNav';
const Error = () => {
    return ( 
        <React.Fragment>
            <LogNav />
            <div className='container notfound'>
                <h1><span>Page</span> not found</h1>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Error;