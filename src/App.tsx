
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart, Nav, Shop } from './components/Index';
import { CartProvider } from './context/ShoppingCartContext';




function App()  {
  return (
    <>
      <CartProvider>
        <div className="App">
     
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/shop" element={ <Shop/> } />
          <Route path="/cart" element={ <Cart isCartOpen={ false } /> } />

        </Routes>  
         </div>
      </CartProvider>
    </>
  );
}

export default App;

