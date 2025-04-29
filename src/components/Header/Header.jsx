import React, { useState, useEffect } from "react";
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
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [username, setUsername] = useState('');

  const menuItems = [
    {
      title: "Comprar",
      dropdown: [
        { label: "Comprar carros", link: "/comprar/carro" },
        { label: "Comprar motos", link: "/comprar/moto" },
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

  useEffect(() => {
    const atualizarUsuario = () => {
      const token = sessionStorage.getItem('token');
      const nomeUsuario = sessionStorage.getItem('username');

      if (token) {
        setUsuarioLogado(true);
        setUsername(nomeUsuario);
      } else {
        setUsuarioLogado(false);
        setUsername('');
      }
    };

    atualizarUsuario();
    window.addEventListener("usuarioLogado", atualizarUsuario);

    return () => {
      window.removeEventListener("usuarioLogado", atualizarUsuario);
    };
  }, []);

  return (
    <HeaderBg>
      <HeaderContainer>
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

          {/* Se usuário logado, mostra nome com dropdown */}
          {usuarioLogado && username && (
            <NavItem
              onMouseEnter={() => setActiveDropdown('usuario')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Entrar as="div">
                <img src={IconeUsuario} alt="Ícone do usuário" />
                <span>{username}</span>
              </Entrar>

              {activeDropdown === 'usuario' && (
                <Dropdown>
                  <DropdownItem as={Link} to="/minha-conta">Minha Conta</DropdownItem>
                  <DropdownItem as={Link} to="/meus-anuncios">Meus Anúncios</DropdownItem>
                  <DropdownItem as={Link} to="/chats">Chats</DropdownItem>
                  <DropdownItem
                    as="button"
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.href = '/';
                    }}
                  >
                    Sair
                  </DropdownItem>
                </Dropdown>
              )}
            </NavItem>
          )}

          {/* Se não logado, botão Entrar */}
          {!usuarioLogado && (
            <Entrar as={Link} to="/auth/login">
              <img src={IconeUsuario} alt="Ícone do usuário" />
              <span>Entrar</span>
            </Entrar>
          )}
        </NavMenu>
      </HeaderContainer>
    </HeaderBg>
  );
}

export default Header;
