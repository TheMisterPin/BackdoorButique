import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com/products";

export const useFetch = <T extends unknown>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchPromise = fetch(`${BASE_URL}${endpoint}`);
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject("Timeout Error"), 15000));
        const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        const formattedError = `e${error.status}`;
  setError(formattedError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};