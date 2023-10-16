import { UserProvider } from "./context/";
import { ProductsProvider } from "./context";
import { CartProvider } from "./context/ShoppingCartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {Nav} from "./components/";
import {RoutesList} from "./Routes/Router"; 



function App() { 
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <div className="App">
            <Nav pathname={""} /> 
            <RoutesList />
          </div>
        </CartProvider>
      </ProductsProvider> 
    </UserProvider>
  );
}

export default App;