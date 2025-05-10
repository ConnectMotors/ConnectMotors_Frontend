import { useState } from 'react';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { Menu } from 'lucide-react'; // ícone moderno
import { X } from 'lucide-react';

import {
  HamburgerButton,
  SidebarWrapper,
  CloseButton,
  UserInfo,
  UserIcon,
  UserName,
  UserEmail,
  Divider,
  NavItem
} from './Sidebar.styles';

import IconeMinhaConta from './assets/IconeMinhaConta.svg?react';
import IconeMeusAnuncios from './assets/IconeMeusAnuncios.svg?react';
import IconeChats from './assets/IconeChats.svg?react';
import IconeSair from './assets/IconeSair.svg?react';
import IconeUsuario from './assets/IconeUsuario.svg?react';

const Sidebar = ({ username, email, onNavigate, onLogout, activeSection}) => {
  const [visible, setVisible] = useState(false);

  const SidebarContent = () => (
    <>
      <CloseButton onClick={() => setVisible(false)}>
        <X size={24} />
      </CloseButton>
      <UserInfo>
        <UserIcon>
          <IconeUsuario />
        </UserIcon>
        <UserName>{username}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserInfo>
      <Divider />
     <NavItem
    active={activeSection === 'conta'}
    onClick={() => onNavigate('conta')}
    className={activeSection === 'conta' ? 'active' : ''}
  >
    <IconeMinhaConta />
    Minha conta
  </NavItem>
      <NavItem onClick={() => onNavigate('anuncios')}>
        <IconeMeusAnuncios />
        Meus anúncios
      </NavItem>
      <NavItem onClick={() => onNavigate('chats')}>
        <IconeChats />
        Chats
      </NavItem>
      <NavItem onClick={onLogout}>
        <IconeSair />
        Sair
      </NavItem>
    </>
  );

  return (
    <>
    {!visible && (
      <HamburgerButton aria-label="Abrir menu"  onClick={() => setVisible(true)}>
        <Menu size={24} />
      </HamburgerButton>
      )}

      <PrimeSidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="left"
        showCloseIcon={false}
        style={{ width: '250px' }}
      >
        <SidebarWrapper>
          <SidebarContent />
        </SidebarWrapper>
      </PrimeSidebar>
    </>
  );
};

export default Sidebar;
