import { useEffect, useState } from "react";
import { Product } from "../Types/ProductInterface";


export const fetchAndRender = () => {
  const [products, setproducts] = useState([]);

  console.log(products);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products?limit=8";
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setproducts(data);
    };

    getProducts();
  }, []);

  return products;
};

export const fetchall = () => {
  const [allProducts, setallProducts] = useState<Product[]>([]);

  console.log(allProducts);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products?limit=8";
    const getallProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setallProducts(data);
    };

    getallProducts();
  }, []);

  return allProducts;
};

export const fetchCategories = () => {
  const [categories,setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products/categories";
    const getCategories  = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  return categories;
};

export async function fetchProductsByCategory(category: string): Promise<any[]> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation for category ${category}: `, error);
    return [];
  }
}
export async function fetchProductById(id:number): Promise<Product> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem with the fetch operation for item ${id}: `, error);
    throw error;
  }}
