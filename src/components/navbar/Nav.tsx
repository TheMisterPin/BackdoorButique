import './nav.css'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to="/form">Form</NavLink> </li>
            </ul>



        </div>
    )
}