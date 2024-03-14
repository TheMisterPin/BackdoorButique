import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/ShoppingCartContext'
import { ButtonWrapper } from './navbarStyles'
import { FullCartIcon, UserIcon } from '../../styles/styledIcons'

export function ActionButtons() {
  const { openCart, cartQuantity } = useCart()

  return (
    <ButtonWrapper className="bg-red-600">
      <button type="button">
        <NavLink to="/form"><UserIcon /></NavLink>
      </button>

      <NavLink to="/cart">
        {' '}
        <FullCartIcon onClick={openCart} />
      </NavLink>
      {' '}
      (
      {cartQuantity}
      )

    </ButtonWrapper>
  )
}
