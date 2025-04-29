import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
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
