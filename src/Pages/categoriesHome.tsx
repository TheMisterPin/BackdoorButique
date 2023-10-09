import { Link } from 'react-router-dom';
import { CategoryProducts } from '../components/categoryProducts/CategoryProducts';
import { fetchCategories } from '../data/API/ApiCalls';


type Category = {
    id: string;}

    export function CategoriesHome() {
        const categories = fetchCategories();
      
        return (
          <>
            <section className="categoriesHome">
              <h1>categories</h1>
              <ul className="categories">
                {categories && categories.map((category, index) => (
                  <li key={index}>
                    {category}
                  <Link to={`/category/${category}`}> {category} </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        );
      }
      