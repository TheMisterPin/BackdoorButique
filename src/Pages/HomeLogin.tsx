import { Link,} from 'react-router-dom';
import shopImg from '../assets/imgs/ShopHome.png';
import './Pages Styles/home.css'
import { LoginForm } from '../components';
export function HomeLogin() {
  return (
    <><div className="box overflow-hidden">
      <div className="layout">
         
       
          <LoginForm/> 
       
      

      </div>
      <div className='grass'></div>
    <Link to="/shop"> <img className="shop" src={shopImg} alt="shop" /> </Link> <div className='tree'></div>
    </div></>
  );
};