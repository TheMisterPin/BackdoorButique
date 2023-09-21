import * as React from 'react';
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart, Shop } from './components/Index';

export interface IAppProps {
}

 function App()  {
  return (
    <>
    <div>
      <h1>Chancito Desperado con Vite </h1>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Shop/>} />
      <Route path="/" element={<Cart/>} />

    </Routes>
    </>
  );
}

export default App;

