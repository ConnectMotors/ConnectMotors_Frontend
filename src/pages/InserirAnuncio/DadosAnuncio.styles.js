import styled from "styled-components";

export const DadosAnuncioBG = styled.div`

    padding-top: 100px;
`

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  @media(max-width:1440px){
    max-width: 1200px;
  }
`;

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: white;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  font-size: 1rem;
`;

export const BotoesContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
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

