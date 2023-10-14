import { Link } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

export function CategoriesHome() {
  const { data: categories, loading, error } = useFetch<string>("/categories");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="base d-flex">
        <h1 className='pageTitle'>categories</h1>
        <ul className="categories">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}