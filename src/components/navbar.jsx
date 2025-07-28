import React, { useState } from 'react'

 const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const open = () => {
        setSidebar(true);
    }

    const close = () => {
        setSidebar(false);
    }

    return(
        <>
        <div className='navbar'>
            <h1>Kaderik</h1>
            <div className='nav-btn'>
                <button className='sign-up'>Sign Up</button>
                <button className='bar' onClick={open}><i class="fa-solid fa-bars-staggered"></i></button>
            </div>
        </div>
        <div className='item-available'>
            <p className="item-name">Shirts</p>
            <p className="item-name">Shoes</p>
            <p className="item-name">Pants</p>
            <p className="item-name">Electronics</p>
            <p className="item-name">Kids</p>
        </div>
        {sidebar && (
            <div className='sidebar'>
            <button className='close-btn' onClick={close}>
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h1 className="nav-links">Home</h1>
            <h1 className="nav-links">About</h1>
            <h1 className="nav-links">Contact</h1>
            <h1 className="nav-links">Help</h1>
            <h1 className="nav-links">Feedback</h1>
        </div>
        )}
        </>
    );
 };

 export default Navbar;