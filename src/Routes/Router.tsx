import { Route, Routes  } from "react-router-dom";
import { CategoryProducts } from '../components/categoryProducts/CategoryProducts';
import {CategoriesHome, Error, Home, ProductDetails, ShopPage }from "../Pages";
import { Cart} from "../components";
import LoadingScreen from "../components/ui/LoadingScreen"
  // import { CheckoutForm } from "../Pages/CheckoutPage";
import { HomeLogin } from '../Pages/HomeLogin';
import { NewUserFormHome } from "../Pages/NewUserFormHome";

// const isLogin = true;
 
// interface PrivateRouteProps {
//   children: React.ReactNode
//   path: string;

export function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/BackdoorButique/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loginform" element={<HomeLogin />} />
      <Route path="/newuserform" element={<NewUserFormHome />} />
      <Route path="/categorieshome" element={<CategoriesHome />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/category/:id" element={<CategoryProducts />} />
      {/* <PrivateRoute path="/checkout">
        <CheckoutForm />
      </PrivateRoute> */}
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}
