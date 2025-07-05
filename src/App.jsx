import React from 'react'
import './App.css'
import pic from '/src/assets/BLOGINTRO.jpg'

const App = () => {
  return(
    <>
    <div className='home'>
      <h1>Welcome to Chola Bara.</h1>
      <img src={pic}/>
    </div>
    </>
  );
};

export default App;