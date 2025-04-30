import styled from "styled-components";

export const ContainerBase = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 0 20px;
  }
  @media (max-width: 0px) {
    padding: 0 20px;
  }
`;

export const ListaCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 0;
  justify-content: center;
  list-style: none;
  width: 100%;
  margin: 0;
`;
