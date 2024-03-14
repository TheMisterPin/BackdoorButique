import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import {
  Cart,

  Form,
  LoginForm,

  Nav,
  NewUserForm,

} from './components/Index'
import { CartProvider } from './context/ShoppingCartContext'
import { CategoriesHome } from './Pages/categoriesHome'
import ProductDetails from './Pages/ProductDetails'
import { CategoryProducts } from './components/categoryProducts/CategoryProducts'
import UserProfile from './components/UserProfile/UserProfile'
import { UserProvider, ProductsProvider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ShopPage } from './Pages/ShopHome'

function App() {
  return (
    <ProductsProvider>
      <UserProvider>
        <CartProvider>
          <Nav />
          <section className="base App">
            <Routes>
              <Route path="/BackdoorButique/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/form" element={<Form />} />
              <Route path="/loginform" element={<LoginForm />} />
              <Route path="/newuserform" element={<NewUserForm />} />
              <Route path="/categorieshome" element={<CategoriesHome />} />
              <Route
                path="/productdetails/:id"
                element={<ProductDetails />}
              />
              <Route path="/category/:id" element={<CategoryProducts />} />
              <Route path="/user/:userprofile" element={<UserProfile />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
            {' '}
          </section>
        </CartProvider>
      </UserProvider>
    </ProductsProvider>
  )
}

export default App
