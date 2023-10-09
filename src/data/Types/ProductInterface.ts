export type ProductProps = {
  className?: string;
  id: number;
  title?: string;
  description?: string;
  price?: number;
  category?: Category;
  image?: string;
  rating?: Rating;
  quantity?: number;
};
export type Product = {
  id: number;
  title: string;
  description?: string;
  price?: number;
  category?: Category;
  image?: string;
  rating?: Rating;
};
enum Category {
  electronics = "electronics",
  jewelery = "jewelery",
  menClothing = "men's clothing",
  womenClothing = "women's clothing",
}

interface Rating {
  count: number;
  rate: number;
}
