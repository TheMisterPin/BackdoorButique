import './nav.css'
import { NavLink } from 'react-router-dom'
import { Cart } from '../cart/Cart';

export function Nav() {
    return (
        <div className='linkContainer'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink> </li>
            </ul>



        </div>
    )
}