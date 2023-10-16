import { useEffect } from "react";
import { ProductShopCard } from "..";
import { Product } from "../../data/";
import { useFetch } from "../../Hooks/useFetch";
import { useApiTimer } from "../../Hooks/useApiTimer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadingScreen from "../ui/LoadingScreen";

export function Shop() {
  const { data: products, loading, error } = useFetch<Product>("/?limit=30");
  const { logTimeAndSession } = useApiTimer();

  useEffect(() => {
    const startTime = performance.now();

    if (!loading && !error) {
      const elapsedTime = performance.now() - startTime;

      logTimeAndSession(elapsedTime);
    }
  }, [loading, error]);

  return (
    <>
      <section className="loading-screen" style={{ marginTop: "2rem" } }>
        {loading && (
          <LoadingScreen/>
        )}

        <Row xs={1} md={2} lg={5} xl={6} className="g-4 productShop-grid">
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
