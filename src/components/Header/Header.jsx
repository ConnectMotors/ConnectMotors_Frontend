import React, { useState } from "react";
import logo from "./assets/LogoCM.svg";
import IconeUsuario from "./assets/IconeUsuario.svg";
import { 
  HeaderBg,
  HeaderContainer,
  NavMenu,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  Entrar,
  Logo
} from "./Header.styles";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      title: "Comprar",
      dropdown: [
        { label: "Carros Usados", link: "/" },
        { label: "Carros Novos", link: "/" },
        { label: "Motos Usadas", link: "/" },
        { label: "Motos Novas", link: "/" }
      ]
    },
    {
      title: "Vender",
      dropdown: [
        { label: "Inserir anúncio", link: "/" },
        { label: "Gerenciar meu anúncio", link: "/" }
      ]
    },
    {
      title: "Serviços",
      dropdown: [
        { label: "Melhor carro para você", link: "/" },
        { label: "Selo Connect", link: "/" }
      ]
    },
    {
      title: "Ajuda",
      dropdown: [
        { label: "Dúvidas frequentes", link: "/" },
        { label: "Contato suporte", link: "/" }
      ]
    }
  ];

  return (
    <HeaderBg>
      <HeaderContainer>
        <Logo src={logo} alt="ConnectMotors" />
        
        <NavMenu>
          {menuItems.map((item, index) => (
            <NavItem 
              key={index}
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink href="#">{item.title}</NavLink>
              
              {activeDropdown === item.title && (
                <Dropdown>
                  {item.dropdown.map((subItem, subIndex) => (
                    <DropdownItem key={subIndex} href={subItem.link}>
                      {subItem.label}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </NavItem>
          ))}
        </NavMenu>

        <Entrar>
          <img src={IconeUsuario} alt="" />
          <a href="/">Entrar</a>
        </Entrar>

      </HeaderContainer>
    </HeaderBg>
  );
}

export default Header;