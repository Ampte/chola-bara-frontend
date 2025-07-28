import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const Navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email:'',
        number:''
    });

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        localStorage.setItem('name', JSON.stringify(userData.name));
        Navigate('/');
    }
    return(
        <>
        <div className='sign-up-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={userData.name} onChange={handleChange} placeholder='Name'required/>
                <input type='email' name='email' value={userData.email} onChange={handleChange} placeholder='Email'required/>
                <input type='number' name='number' value={userData.number} onChange={handleChange} placeholder='Phone Number'required/>
                <button className='sign-up-btn'>Sign Up</button>
            </form>
        </div>
        </>
    );
};

export default SignUp;