import { NavLink } from 'react-router-dom'
import './nav.css'

export function ActionButtons() {
    return (<div className="actionButtons">
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/cart">Cart</NavLink>
         </div>
    )
}

