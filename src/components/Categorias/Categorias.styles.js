import styled from "styled-components";

export const CategoriasBG = styled.section`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const Opcoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  img {
    display: block;
    width: 335px;
    border-radius: 10px;

    @media(max-width: 1440px){
        width: 275px;
    }
    @media (max-width: 768px) {
      width: 140px;
    }
  }
`;
