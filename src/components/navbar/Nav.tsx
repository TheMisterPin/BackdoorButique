import { LogoIcon } from "../../styles/styledIcons";
import { ActionButtons } from "./ActionButtons";
import { NavWrapper, NavLinkWrapper, StyledNavLink, Navbar } from "./navbarStyles";

export function Nav() {
  return (
    <>
      <Navbar className="" style={{ position: 'sticky', top: '0', zIndex: '1000' }}>

       <NavWrapper className="col-11">
          <NavLinkWrapper className="col-3 hide-on-mobile">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
            <StyledNavLink to="/categorieshome">Categories</StyledNavLink>
          </NavLinkWrapper>
          
          <div className="l{col-7}  xs{col-11}  d-flex justify-content-center gap-5 ">
   
            <h1 className="title">Backdoor Botique</h1>
          </div> 
          <ActionButtons />
        </NavWrapper></Navbar>
    </>
  );
}
