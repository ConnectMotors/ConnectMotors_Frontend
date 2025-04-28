import styled from "styled-components";

export const PageBackground = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  padding-top: 120px;
`;

export const CardContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;

  .divisor{
    margin-bottom: 48px;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--preto);
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const TopSection = styled.section`
  display: flex;
  gap: 63px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FotoPrincipal = styled.div`
  flex: 1;

  img {
    width: 515px;
    height: 335px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const GaleriaFotos = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  img {
    width: 120px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
      height: 50px;
    }
  }
`;

export const DetalhesVeiculo = styled.div`

  background-color: var(--cinza-1);
  padding-left: 27px;
  padding-right: 75px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  p {
    font-size: 1.2rem;
    color: var(--cinza-6);
    margin-bottom: 8px;

    strong {
      font-weight: 600;
      color: var(--preto);
    }
  }
`;

export const Valor = styled.p`
  display: inline-block;
  width: 100%;
  background-color: #3d3d45;
  color: var(--branco);
  font-size: 1.875rem;
  font-weight: 700;
  padding: 12px;
  text-align: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 20px;
`;

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoContato = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--cinza-6);
  margin-bottom: 8px;
`;

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
  font-size: 0.875rem;
  color: var(--cinza-6);
`;

export const Descricao = styled.section`
  margin-top: 24px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--cinza-6);
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: var(--cinza-6);
    line-height: 1.5;
  }
`;

export const Mensagem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    span{
        color: #3336ff;
    }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const FotoContainer = styled.div`
  position: relative;
  width: 515px;
  height: 335px;
  margin-bottom: 10px;
`;

export const BotaoSeta = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  svg {
    color: white;
  }
`;

export const BotaoSetaEsquerda = styled(BotaoSeta)`
  left: 10px;
`;

export const BotaoSetaDireita = styled(BotaoSeta)`
  right: 10px;
`;
