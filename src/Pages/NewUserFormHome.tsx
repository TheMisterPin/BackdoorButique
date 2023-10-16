import { Link } from 'react-router-dom';
import shopImg from '../assets/imgs/ShopHome.png';
import './Pages Styles/home.css'
import { NewUserForm } from '../components/forms/NewUserForm';



export function NewUserFormHome() {
  return (
    <><div className="box overflow-hidden">
      <div className="layout">
         
       
          <NewUserForm/> 
       
      

      </div>
      <div className='grass'></div>
     <Link to="/shop">  <img className="shop" src={shopImg} alt="shop" /> </Link>
      
      <div className='tree'></div>
    </div></>
  );
};