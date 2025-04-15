import React, { useState } from "react";
import { Link } from "react-router-dom";
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

        {/* Logo leva para a home */}
        <Link to="/">
          <Logo src={logo} alt="ConnectMotors" />
        </Link>
        
        <NavMenu>
          {menuItems.map((item, index) => (
            <NavItem 
              key={index}
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink as="span">{item.title}</NavLink>
              
              {activeDropdown === item.title && (
                <Dropdown>
                  {item.dropdown.map((subItem, subIndex) => (
                    <DropdownItem as={Link} to={subItem.link} key={subIndex}>
                      {subItem.label}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </NavItem>
          ))}
        </NavMenu>

        {/* Entrar leva para a rota de login */}
        <Entrar as={Link} to="/auth/login">
          <img src={IconeUsuario} alt="" />
          <span>Entrar</span>
        </Entrar>

      </HeaderContainer>
    </HeaderBg>
  );
}

export default Header;
