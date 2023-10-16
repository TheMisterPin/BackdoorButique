import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgImage from "../../assets/imgs/backgrounds/Background.jpg";
export const NavWrapper = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.ul
`
  display: flex;
  align-items: end;
  justify-content: space-between;

`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
font-family: 'Permanent Marker';
  text-decoration: none;
  color: #513d32;
  &.active {
    color: #eeb246;
    text-decoration: underline;
  }
`;

export const NavLinkWrapper = styled.div`
  list-style: none;
  gap: 1rem;
  display: inline-flex;
  font-family: 'Permanent Marker';
`;

export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Permanent Marker';
  padding-left: 70px;
  box-shadow: 0 4px 6px -1px grey;
  display: flex;
  flex-direction: column;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
