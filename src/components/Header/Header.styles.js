import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBg = styled.div`
  background-color: var(--branco);
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0px;

  @media(max-width: 1440px){
    max-width: 1200px;
  }
  @media(max-width: 800px){
    row-gap: 30px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;

  @media(max-width: 1400px){
    gap: 80px;
  }
`;

export const NavItem = styled.div`
  position: relative;
  cursor: pointer;
`;

export const NavLink = styled.a`
  font-weight: 600;
  font-size: 1.125rem;
  transition: color 0.3s ease;

  @media(max-width: 1400px){
    font-size: 1rem;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  min-width: 200px;
  left: -15px;
  background: var(--branco);
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const DropdownItem = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  text-align: left;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--cinza-1);
  }
`;

export const Entrar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  span {
    font-size: 1.125rem;
    font-weight: 600;
  }

  @media(max-width: 1400px){
    span {
      font-size: 1rem;
    }

    img {
      width: 30px;
    }
  }
`;

export const Logo = styled.img`
  @media(max-width: 1400px){
    width: 250px;
  }
`;
