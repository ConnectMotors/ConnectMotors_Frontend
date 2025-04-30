import styled, { keyframes } from "styled-components";

export const ContainerComprar = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;


  @media (max-width: 768px) {
    padding: 20px 10px;
    gap: 20px;
  }
`;

export const BotaoVoltarContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  gap: 30px;

  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 0 105px;
  }

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
