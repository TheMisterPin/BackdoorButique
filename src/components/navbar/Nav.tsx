import { Dropdown, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';  // <-- Added useLocation
import { ActionButtons } from './ActionButtons';
import { NavWrapper, NavLinkWrapper, StyledNavLink, Navbar } from './navbarStyles';
import { useFetch } from '../../Hooks/useFetch'; 
type Path = {
    pathname: string;
  
  }
export function Nav(props : Path) {
  const { data: categories} = useFetch<string>("/categories");
  const location = useLocation();  // <-- Using useLocation
  const excludedRoutes = ['/home', '/', '/loginform', '/newUserForm', '/error'];
  
  if (excludedRoutes.includes(location.pathname)) {
    return null;  
  }
  const menu = (
    <Menu>
      {categories.map((category, index) => (
        <Menu.Item key={index}>
          <Link to={`/category/${category}`}>{category}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );


  return (
    <>
      <Navbar style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        <NavWrapper className="col-11">
          <NavLinkWrapper className="col-3 hide-on-mobile">
            <StyledNavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</StyledNavLink>
            <StyledNavLink to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</StyledNavLink>
            <Dropdown overlay={menu}>
              <StyledNavLink to="/categorieshome" className={location.pathname.startsWith('/category') ? 'active' : ''}>Categories</StyledNavLink>
            </Dropdown>
          </NavLinkWrapper>
          <div className="l{col-7}  xs{col-11}  d-flex justify-content-center gap-5 ">
            <h1 className="title">Backdoor Botique</h1>
          </div>
          <ActionButtons />
          
          {/* <LoginStatusIndicator /> */}
        </NavWrapper>
      </Navbar>
    </>
  );
}
