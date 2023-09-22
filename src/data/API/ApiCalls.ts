import axios from 'axios';
import { Product } from '../Types/ProductInterface';


const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});



export const fetchNineProducts = async (): Promise<Product[]> => {
    try {
        const response = await apiClient.get<Product[]>('/products?limit=9');
        const data = response.data;

        return data.map((product: Product) => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            image: product.image,
            rating: product.rating
        }));
    } catch (error) {
        console.error("Failed fetching nine products:", error);
        return [];
    }
}


// useEffect(() => {
//     const getProducts = async () => {
//         const fetchedProducts = await fetchNineProducts();
//         setProducts(fetchedProducts);
//     };

//     getProducts();
// }, [setProducts]);