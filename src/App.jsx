import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import LoginPop from './components/loginPopUp/LoginPop';

const App = () => {
  const[showLogin,setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />

      </Routes>
      <Footer/>
    </div>
   
    </>
  )
}

export default App