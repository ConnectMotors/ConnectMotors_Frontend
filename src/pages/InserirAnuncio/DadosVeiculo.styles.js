import styled from "styled-components";

export const DadosVeiculoBG = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;


`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TituloSecao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 1.5rem;
  gap: 1rem;

  h2 {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--cinza-6);
    white-space: nowrap;
  }

  .linha {
    flex: 1;
    height: 1px;
    background-color:var(--cinza-3);
  }
`;

export const Formulario = styled.form`
  display: grid;
 grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem 2rem;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1; 
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--cinza-6);
`;

const baseInputStyles = `
  padding: 0.75rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border 0.2s, box-shadow 0.2s;
  background: var(--branco);

  &:focus {
    outline: none;
    border-color: var(--azul-4);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.15);
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
  
`;

export const Select = styled.select`
  ${baseInputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
  cursor: pointer;
`;

export const BotoesContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
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
  transition: background 0.2s;

  &:hover {
    background: var(--azul-3);
  }
`;

export const BotaoVoltar = styled.button`
  padding: 0.9rem 2rem;
  background: var(--branco);
  color: #d33;
  border: 1px solid #d33;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #ffeaea;
  }
`;

export const TitlePrincipal = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 1.5rem;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cinza-6);
  }
`;

export const Divider = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 2rem;
`;



