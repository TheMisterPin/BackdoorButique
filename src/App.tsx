import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart, ErrorModal, Form, LoginForm, LogoutForm, Nav, NewUserForm, Shop } from "./components/Index";
import { CartProvider } from "./context/ShoppingCartContext";
import {CategoriesHome} from "./Pages/categoriesHome";
import ProductDetails from "./Pages/ProductDetails";
import { CategoryProducts } from "./components/categoryProducts/CategoryProducts";
import UserProfile from "./components/UserProfile/UserProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./context/UserContext";
import { ProductsProvider } from "./context";



function App() {
  return (
    <><ProductsProvider>
    <UserProvider>
      <CartProvider>

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
        
      </CartProvider>
      </UserProvider></ProductsProvider>
    </>
  );
}

export default App;
