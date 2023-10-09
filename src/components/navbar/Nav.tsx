import { ActionButtons } from "./ActionButtons";
import { NavWrapper, NavLinkWrapper, StyledNavLink } from "./navbarStyles";

export function Nav() {
  return (
    <>
      <NavWrapper className="linkContainer">
        <NavLinkWrapper>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/shop">Shop</StyledNavLink>
          <StyledNavLink to="/categorieshome">Categories</StyledNavLink>
        </NavLinkWrapper>
        <ActionButtons />
      </NavWrapper>
    </>
  );
}
