import { useEffect } from 'react';
import { ProductShopCard } from "../Index";
import { Product } from "../../data/";
import { useFetch } from '../../Hooks/useFetch';
import { useApiTimer } from '../../Hooks/useApiTimer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <section style={{marginTop: "2rem"}}>
       
  
      <Row xs={1} md={2} lg={6} xl={8}
        className="g-4" >
      {products.map((product, idx) => (
        <Col key={idx}>
     
          <ProductShopCard {...product} />
      
        </Col>
      ))}
    </Row> 
      </section>
    </>
  );
}