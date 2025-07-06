import React from 'react'
import { products } from '../data';

const Cart = () => {
    return(
        <>
        <div className='products'>
            {products.map((product) => (
                <div key={product.id} className='cart'>
                    <img src={product.image} alt={product.name}/>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Cart;