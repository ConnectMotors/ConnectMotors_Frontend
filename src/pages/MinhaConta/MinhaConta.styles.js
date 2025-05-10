import styled from 'styled-components';

export const Container = styled.div`
  padding: 8rem 4rem;
  transition: margin-left 0.3s ease;
  max-width: 1440px;

@media (min-width: 768px) {
  margin-left: 250px;
}
`;

export const Titulo = styled.h2`
  margin-bottom: 2rem;
  font-size: 24px;
`;

export const Linha = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Coluna = styled.div`
  flex: 1;
  min-width: 320px;
`;

export const Secao = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const Campo = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 13px;
  color: #333;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: #f6f6f6;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  span {
    font-size: 13px;
    color: #333;
  }
`;

export const Botao = styled.button`
  background-color: var(--azul-4);
  color: #fff;
  padding: 0.9rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #1e45c4;
  }
`;


