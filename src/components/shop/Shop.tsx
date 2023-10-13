import { useEffect } from 'react';
import { ProductShopCard } from "../Index";
import { Product } from "../../data/";
import "./shop.css";
import { useFetch } from '../../Hooks/useFetch';
import { useApiTimer } from '../../Hooks/useApiTimer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';


export function Shop() {
  const { data: products, loading, error } = useFetch<Product>("/?limit=30");
  const { logTimeAndSession} = useApiTimer();
 
  useEffect(() => {
    const startTime = performance.now();
    if (!loading && !error) {
      const elapsedTime = performance.now() - startTime;
      logTimeAndSession(elapsedTime);
    }
  }, [loading, error]);

  return (
    <>
      <section className="mx-auto">
        <h1>Shop</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Row xs={2} md={2} lg={6} xl={8} fluid="sm"
        className="g-4">
      {products.map((product, idx) => (
        <Col key={idx}>
           <Ratio aspectRatio={150}>
          <ProductShopCard {...product} />
          </Ratio>
        </Col>
      ))}
    </Row>
      </section>
    </>
  );
}