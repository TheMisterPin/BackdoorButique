
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cart, Form, Nav, Shop } from './components/Index';
import { CartProvider } from './context/ShoppingCartContext';
import LoginForm from './components/form/LoginForm';
import NewUserForm from './components/form/NewUserForm';


function App()  {
  return (
    
    <>
      <CartProvider>
        <div className="App">    
         {/* <div className="circles">
  <div className="circle1"></div>
  <div className="circle2"></div>
   <div className="circle3"></div> */}

          <Nav/>
          <section className="content">
                  <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/shop" element={ <Shop/> } />
          <Route path="/cart" element={ <Cart isCartOpen={ false } /> } />
          <Route path="/form" element={ <Form/> }/>
          <Route path="/loginform" element={ <LoginForm/> }/>
          <Route path="/newuserform" element={ <NewUserForm/> }/>

        </Routes>   </section>
         </div>
      </CartProvider>
    </>
  );
}

export default App;

