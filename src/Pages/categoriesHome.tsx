import { Link } from 'react-router-dom';
import './Pages Styles/categoriesHome.css'
import { Row, Col } from 'antd';


import electronicsImg from '../../src/assets/categories/electronics.jpg';
import jeweleryImg from '../../src/assets/categories/jewelery.png';
import mensClothingImg from '../../src/assets/categories/mensclothing.png';
import womenClothingImg from '../../src/assets/categories/womenclothing.png';


export function CategoriesHome() {
    return (
      <Row className='background d-flex'>
      <Col span={5}>
  <Link to="/category/jewelery"><div className="square"style={{backgroundImage: `url(${jeweleryImg})`}}>
        <p className='details'>Jewelery</p>
        </div> </Link>
      </Col>
      <Col span={5}>
        <div className="square"style={{backgroundImage: `url(${womenClothingImg})`}}>
         
          <Link to="/category/jewelery"><p className='details'>Women's Clothing</p></Link>
        </div>
      </Col>
      <Col span={5}>
    <Link to="/category/men's%20clothing">    <div className="square bottom left"style={{backgroundImage: `url(${mensClothingImg})`}}>
    <p className='details'>Men's Clothing</p>
          
        </div></Link>
      </Col>
      <Col span={5}>
    <Link to="/category/electronics">    <div className="square Bottom Right" style={{backgroundImage: `url(${electronicsImg})`}}>
        <p className='details'>Electronics</p>
        </div></Link>
      </Col>
    </Row>
  );
};