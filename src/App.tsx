import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart, Form, Nav, Shop } from "./components/Index";
import { CartProvider } from "./context/ShoppingCartContext";
import LoginForm from "./components/forms/LoginForm";
import NewUserForm from "./components/forms/NewUserForm";
import {CategoriesHome} from "./Pages/categoriesHome";
import ProductDetails from "./Pages/ProductDetails";
import { CategoryProducts } from "./components/categoryProducts/CategoryProducts";
import LogoutForm from "./components/forms/LogoutForm";
import UserProfile from "./components/UserProfile/UserProfile";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <CartProvider>
        <div className="App">
          {/* <div className="circles">
  <div className="circle1"></div>
  <div className="circle2"></div>
   <div className="circle3"></div> */}

          <Nav />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart isCartOpen={false} />} />
              <Route path="/form" element={<Form />} />
              <Route path="/loginform" element={<LoginForm />} />
              <Route path="/newuserform" element={<NewUserForm />} />
              <Route path="/categorieshome" element={<CategoriesHome />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/category/:id" element={<CategoryProducts />} />
              <Route path="/logout" element={<LogoutForm/>}/>
              <Route path="/user/:userprofile"element={<UserProfile/>}/>
              <Route path="*" element={<h1>404</h1>} />

            </Routes>{" "}
          </section>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
