import {  useEffect, useState } from "react"
import { Product } from "../Types/ProductInterface"





export const fetchAndRender = () => {
  const [products, setproducts] = useState([])  
  console.log(products)
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products?limit=8'
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setproducts(data)
    }
    getProducts();
    

  }, [])

  return products;

}


export const fetchall= () => {
  const [allProducts, setallProducts] = useState<Product[]>([])  
    console.log(allProducts)
    useEffect(() => {
      const url = 'https://fakestoreapi.com/products?limit=8' 
      const getallProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setallProducts(data)
      }
      getallProducts();
      
  
    }, [])
  
    return allProducts;
  
}

// export const productData: [Product] = products

