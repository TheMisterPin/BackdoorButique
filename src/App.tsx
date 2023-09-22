import * as React from 'react';
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart, Nav, Shop } from './components/Index';




 function App()  {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />

    </Routes>
    </>
  );
}

export default App;

