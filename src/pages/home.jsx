import React from 'react'
import Cart from '../components/cart';

const Home = () => {
    return(
        <>
        <div className='home'>
            <div className='navbar'></div>
            <div className='sidebar'></div>
            <div className='content'>
                <Cart/>
            </div>
        </div>
        </>
    );
};

export default Home;