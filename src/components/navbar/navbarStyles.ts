import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bgImage from '../../assets/imgs/backgrounds/Background.jpg'
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
  font-size: 1.5rem;  
 

text-decoration: none;
color: #513D32;
  &.active {
    color: #EEB246;
    text-decoration: underline;
  
  }
`;

export const NavLinkWrapper = styled.div`
  list-style: none;
  gap: 1rem;
  display: inline-flex;
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