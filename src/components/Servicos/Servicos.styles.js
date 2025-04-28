import styled from "styled-components";

export const ServicosBG = styled.section`
  position: relative;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background-color: var(--cinza-claro);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const NossosServicos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: var(--branco);
  padding: 30px 50px;
  border: 1px solid var(--preto);
  border-radius: 20px;

  h3 {
    margin-bottom: 12px;
    font-size: 1rem;
  }

  p {
    width: 39ch;
    font-size: 0.875rem;
  }

  @media(max-width: 1440px){
    padding: 20px 40px;
  }

  @media(max-width: 1400px){
    p {
    width: 33ch;
  }
  }
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 60px;
`;
