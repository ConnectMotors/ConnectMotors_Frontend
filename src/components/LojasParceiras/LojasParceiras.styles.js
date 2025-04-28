import styled from "styled-components";

export const LojasParceirasBG = styled.section`
  padding: 40px 0;
  display: flex;
  justify-content: center;
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

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const Parceiros = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-wrap: wrap;
  gap: 65px;
  margin-bottom: 120px;
  width: 100%;

  img {
    width: 140px;
  }

  @media (max-width: 1440px) {
    img {
      width: 110px;
    }
  }
`;
