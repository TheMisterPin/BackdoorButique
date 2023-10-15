import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../styles/styledIcons';
import { ActionButtons } from './ActionButtons';
import { NavWrapper, NavLinkWrapper, StyledNavLink, Navbar } from './navbarStyles';
import { useFetch } from '../../Hooks/useFetch'; // Import useFetch if it's not in the same file
import LoginStatusIndicator from './LoingStatusIndicator';

export function Nav() {
  const { data: categories} = useFetch<string>("/categories");

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
      <Navbar style={ { position: "sticky", top: "0", zIndex: "1000" } }>
        <NavWrapper className="col-11">
          <NavLinkWrapper className="col-3 hide-on-mobile">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
            <Dropdown overlay={menu}>
              <StyledNavLink to="/categorieshome">Categories</StyledNavLink>
            </Dropdown>
          </NavLinkWrapper>
          <div className="l{col-7}  xs{col-11}  d-flex justify-content-center gap-5 ">
            <h1 className="title">Backdoor Botique</h1>
          </div>
          <ActionButtons />
          <LoginStatusIndicator />
        </NavWrapper>
      </Navbar>
    </>
  );
}