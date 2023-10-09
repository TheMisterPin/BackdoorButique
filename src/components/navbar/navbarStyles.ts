import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1;
`;

export const ButtonWrapper = styled.ul`
  display: inline-flex;
  gap: 2rem;
  margin-bottom: 2%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
  }
`;

export const NavLinkWrapper = styled.ul`
  list-style: none;
  margin-bottom: 2%;
`;
