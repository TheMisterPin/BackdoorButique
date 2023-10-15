import { useEffect, useState } from "react";
import { Product } from "../Types/ProductInterface";

let totalSessionTime = 0; // Outside any component to maintain session state

const logTimeAndSession = (elapsedTime: any) => {
  console.log(`API call took ${elapsedTime} ms`);
  totalSessionTime += elapsedTime;
  console.log(`Total session time: ${totalSessionTime} ms`);
};

export const fetchAndRender = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const startTime = Date.now();
    const url = "https://fakestoreapi.com/products?limit=30";
    const getProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data);
      const endTime = Date.now();

      logTimeAndSession(endTime - startTime);
    };

    getProducts();
  }, []);

  return products;
};

export const fetchall = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  console.log(allProducts);
  useEffect(() => {
    const startTime = Date.now();
    const url = "https://fakestoreapi.com/products?limit=30";
    const getAllProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setAllProducts(data);
      const endTime = Date.now();

      logTimeAndSession(endTime - startTime);
    };

    getAllProducts();
  }, []);

  return allProducts;
};

export const fetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const startTime = Date.now();
    const url = "https://fakestoreapi.com/products/categories";
    const getCategories = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setCategories(data);
      const endTime = Date.now();

      logTimeAndSession(endTime - startTime);
    };

    getCategories();
  }, []);

  return categories;
};

export async function fetchProductsByCategory(
  category: string
): Promise<any[]> {
  const startTime = Date.now();

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const endTime = Date.now();

    logTimeAndSession(endTime - startTime);

    return data;
  } catch (error) {
    console.error(
      `There was a problem with the fetch operation for category ${category}: `,
      error
    );

    return [];
  }
}

export async function fetchProductById(id: number): Promise<Product> {
  const startTime = Date.now();

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const endTime = Date.now();

    logTimeAndSession(endTime - startTime);

    return data;
  } catch (error) {
    console.error(
      `There was a problem with the fetch operation for item ${id}: `,
      error
    );
    throw error;
  }
}
