import styled from "styled-components";

export const EncontrarVeiculoBG = styled.section`
  background-color: var(--azul-1);
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  img {
    border-radius: 30px;
    width: 100%;
    object-fit: cover; 
  }

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 12px;
    text-align: center;

    img {
      max-width: 500px;
      margin: 0 auto;
      order: -1;
    }
  }
`;

export const Conteudo = styled.div`
  p {
    width: 40ch;
    margin-bottom: 100px;
  }

  span {
    color: var(--azul-4);
  }

  @media (max-width: 768px) {
    p {
      width: auto;
      margin: 0 auto 60px;
    }
  }
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  background-color: var(--azul-4);
  padding: 16px 32px;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  color: var(--branco);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4043FF;
  }
`;
