import { Product } from "../../data/Types/ProductInterface";
import { ProductShopCard } from "..";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { Col, Row } from "react-bootstrap";
import LoadingScreen from "../ui/LoadingScreen";

export function CategoryProducts() {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useFetch<Product>(`/category/${id}`);

  return (
    <div className="category container">
       <h2 className="category header">Products in category: {id}</h2>
      {loading && <LoadingScreen/>}
      {error && <p>Error: {error}</p>}
     
      <Row xs={1} md={2} lg={2} xl={2} className="g-4">
        {data &&
          data.map((product: Product) => (
            <Col className="category product list" key={ id }>
              <ProductShopCard { ...product } />
            </Col>
          ))}
      </Row>
    </div>
  );
}
