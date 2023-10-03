import {  useEffect, useState } from "react"


  

export const fetchAndRender = () => {
const [products, setproducts] = useState([])
  console.log(products)
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products?limit=9'
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setproducts(data)
    }
    getProducts();
    

  }, [])

  return products;

}


// export const productData: [Product] = products

