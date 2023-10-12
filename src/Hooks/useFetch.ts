import { useEffect, useState } from "react";
import { useApiTimer } from "./useApiTimer"; // Import your timer hook

const BASE_URL = "https://fakestoreapi.com/products";

export const useFetch = <T extends unknown>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  
  const { logTimeAndSession } = useApiTimer(); 

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now(); // Start timing the API call
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error.message as string);
      } finally {
        const endTime = performance.now(); // End timing the API call
        const elapsedTime = endTime - startTime; // Calculate elapsed time
        logTimeAndSession(elapsedTime); // Log the time
        
        setLoading(false);
      }
    };

    fetchData();
  }, []); // add logTimeAndSession as a dependency

  return { data, loading, error };
};
