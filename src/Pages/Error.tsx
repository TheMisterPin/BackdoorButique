
import { Link } from 'react-router-dom';
import './Pages Styles/home.css'
import shopImg from '../assets/imgs/ShopHome.png';

export function Error () { 

return(
<><div className="box overflow-hidden">
<div className="layout">
   

 


</div>
<div className='grass'></div>
<Link to="/shop">  <img className="shop" src={shopImg} alt="shop" /> </Link>

<div className='tree'></div>
</div></>)

  
  
 

  

};
