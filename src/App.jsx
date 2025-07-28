import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SignUp from './pages/sign-up';

const App = () => {
  return(
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
    </>
  );
};

export default App;
