import styled from "styled-components";

export const DadosVeiculoBG = styled.div`
  padding-top: 150px;
  padding-bottom: 80px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const TituloSecao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 1.5rem;
  gap: 1.5rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--cinza-6);
    white-space: nowrap;
  }

  .linha {
    flex: 1;
    height: 1px;
    background-color: #999;
  }
`;

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background: var(--branco);
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background: var(--branco);
  font-size: 1rem;
`;

export const BotoesContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const BotaoContinuar = styled.button`
  padding: 0.9rem 2rem;
  background: var(--azul-4);
  color: var(--branco);
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: var(--azul-3);
  }
`;

export const BotaoVoltar = styled.button`
  padding: 0.9rem 2rem;
  background: var(--branco);
  color: red;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #ffe5e5;
  }
`;

export const TitlePrincipal = styled.div`
   display: flex;
   gap: 12px;
   align-items: center;
   margin-bottom: 12px;

   h1{
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--cinza-6);
   }
`
export const Divider = styled.img`
    display: block;
    width: 100%;
    margin-bottom: 40px;
`