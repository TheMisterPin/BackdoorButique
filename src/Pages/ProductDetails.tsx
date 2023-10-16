import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/API/ApiCalls";
import { Product } from "../data/Types/ProductInterface";
import { currencyFormat } from "../Utils/currencyHandler";
import { StarRating } from "../components/ui/StarRating";
import LoadingScreen from "../components/ui/LoadingScreen";
import { CartActionButtons } from "../components/ui/cartActionButtons";
import './Pages Styles/productDetails.css'



export  function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const numId = Number(id);

    if (!isNaN(numId)) {
      fetchProductById(numId)
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    } else {
      console.error("Invalid product ID");
    }
  }, [id]);

  if (!product) {
    return <div><LoadingScreen/></div>;
  }

  return (
    
      <div className="base d-flex flex-column align-items-center ">
      <div className="productDetails">
          <h1 className="pageTitle text-center mb-4 w-100">{product.title}</h1>
     
          <img 
            className="productDetails-image col-5" 
            style={{ height: "300px", objectFit: "contain", backgroundColor:"#ffffff" }} 
            src={product.image} 
            alt={product.title} 
          />
          
         
          <div className="description  p-5 w-50 col 5">
            <p>{product.description}</p>
            <p className="price">Price: {currencyFormat(product.price)}</p>
            {product.rating && (
              <StarRating rate={product.rating.rate} count={product.rating.count} />
            )}
          </div>
    <div className="w-100 cardButtonCOntainer" ><CartActionButtons  id={product.id} quantity={product.quantity} /> </div>
        </div>
        </div>
    );
  }