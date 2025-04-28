import styled, { keyframes } from "styled-components";

export const ContainerComprar = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 20px 10px;
    gap: 20px;
  }
`;

export const TituloPagina = styled.h1`

  font-size: 2rem;
  font-weight: 700;
  color: var(--cinza-6);

`;

export const FiltrosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const ListaVeiculosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BotaoVoltarContainer = styled.div`
  width: 100%;
  display: flex;

`;

const girar = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid var(--cinza-2);
  border-top: 8px solid var(--azul-4);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${girar} 1s linear infinite;
  margin: 4rem auto;
`;
