import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgImage from '../../assets/Background.jpg'
export const NavWrapper = styled.header`
  display: flex;
  align-items: end;
  justify-content: space-between;


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

`;

export const Navbar = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1000; 

    padding: 10px;
    box-shadow: 0 4px 6px -1px grey;
    display:flex;
    flex-direction: column;
    box-shadow: 0 4px 6px 1px ;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
`;