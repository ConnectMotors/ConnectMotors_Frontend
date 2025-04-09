import styled from "styled-components";

export const Card = styled.article`
  width: 230px;
  border-radius: 10px;
  overflow: hidden;
  font-family: sans-serif;
  background-color: var(--branco);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); 
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Conteudo = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 3px;
`;

export const Descricao = styled.p`
  margin-bottom: 57px;
  font-size: 0.875rem;
  color: var(--cinza-5);
`;

export const Valor = styled.p`
  font-size: 1.5rem;
`;

export const InfoExtra = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--cinza-5);
  font-size: 0.875rem;
  margin-top: 4px;
  margin-bottom: 14px;
`;

export const Localizacao = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-size: 0.875rem;

  img {
    width: 16px;
    height: 16px;
  }
`;

