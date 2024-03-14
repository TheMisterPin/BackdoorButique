/* eslint-disable import/no-cycle */
import { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner' // <-- Added Spinner import
import { ProductShopCard } from '../Index'
import { Product } from '../../data'
import { useFetch } from '../../Hooks/useFetch'
import { useApiTimer } from '../../Hooks/useApiTimer'

export function Shop() {
  const { data: products, loading, error } = useFetch<Product>('/?limit=30')
  const { logTimeAndSession } = useApiTimer()

  useEffect(() => {
    const startTime = performance.now()

    if (!loading && !error) {
      const elapsedTime = performance.now() - startTime

      logTimeAndSession(elapsedTime)
    }
  }, [loading, error])

  return (
    <section style={{ marginTop: '2rem' }}>

      {loading && (
        <div style={{ textAlign: 'center' }}>
          <h1 className="pageTitle" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Getting you fantastic deals</h1>
          <Spinner animation="border" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <Row xs={1} md={2} lg={6} xl={8} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductShopCard {...product} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
