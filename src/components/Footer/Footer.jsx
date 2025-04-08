import React from "react";
import {
  FooterBg,
  FooterContainer,
  TopSection,
  Column,
  Title,
  Lista,
  ItemLista,
  BarraLogo,
  CopyRight
} from "./Footer.styles";

import Logo from './assets/logoRodape.svg';

export default function Footer() {
  return (
    <FooterBg>
      <FooterContainer>
        <TopSection>
          <Column>
            <Title>Comprar</Title>
            <Lista>
              <ItemLista>Carros usados</ItemLista>
              <ItemLista>Carros novos</ItemLista>
              <ItemLista>Motos usadas</ItemLista>
              <ItemLista>Motos novas</ItemLista>
            </Lista>
          </Column>
          <Column>
            <Title>Vender</Title>
            <Lista>
              <ItemLista>Vender veículo</ItemLista>
              <ItemLista>Gerenciar meus anúncios</ItemLista>
            </Lista>
          </Column>
          <Column>
            <Title>Serviços</Title>
            <Lista>
              <ItemLista>Melhor carro para você</ItemLista>
              <ItemLista>Selo Connect</ItemLista>
            </Lista>
          </Column>
          <Column>
            <Title>Ajuda</Title>
            <Lista>
              <ItemLista>Dúvidas frequentes</ItemLista>
              <ItemLista>Contato suporte</ItemLista>
            </Lista>
          </Column>
          <Column>
            <Title>Termos de uso</Title>
            <Lista>
              <ItemLista>Termos de uso</ItemLista>
              <ItemLista>Política de privacidade</ItemLista>
              <ItemLista>Política de cookies</ItemLista>
            </Lista>
          </Column>
        </TopSection>
      </FooterContainer>
      <BarraLogo>
          <img src={Logo} alt="Logo ConnectMotors" />
      </BarraLogo>
      <CopyRight>© 2025 ConnectMotors. Todos os direitos reservados.</CopyRight>
    </FooterBg>
  );
}