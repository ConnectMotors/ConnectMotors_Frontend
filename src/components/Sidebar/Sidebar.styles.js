// src/components/Sidebar.jsx

import styled from 'styled-components';


const HamburgerButton = styled.button`
  position: absolute;
  top: 7rem;
  left: 1rem;
  background: var(--branco);
  border: none;
  border-radius: 8px;
  padding: 0.6rem;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }

  svg {
    color:var(--cinza-escuro);
  }
  &:active {
  transform: scale(0.95);
}
`;

const SidebarWrapper = styled.div`
  padding: 3rem 1rem 1rem;
  height: 100%;
  background-color: var(--azul-1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--cinza-escuro);
  cursor: pointer;
  z-index: 1;

  svg {
    color: #fff;
  }
`;

const UserInfo = styled.div`
 display: flex;
  align-items: center;
  gap: 10px; // espaço entre o ícone e o nome
  padding: 1rem;
`;

const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  width: 32px;
  height: 32px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
 
`;

const UserEmail = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0.3rem 0 1rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #666;
  margin: 1.5rem 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ active }) => (active ? '#000' : '#444')};
  margin-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.8rem 0.5rem 0.8rem 1rem;
  border-left: ${({ active }) => (active ? '4px solid #000' : '4px solid transparent')};
  background-color: ${({ active }) => (active ? 'rgba(0,0,0,0.05)' : 'transparent')};
  border-radius: 4px 0 0 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: #000;
  }

  svg {
    margin-right: 0.8rem;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export {
  HamburgerButton,
  SidebarWrapper,
  CloseButton,
  UserInfo,
  UserIcon,
  UserName,
  UserEmail,
  Divider,
  NavItem,
};