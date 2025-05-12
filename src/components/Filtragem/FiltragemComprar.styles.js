import styled from "styled-components";

export const ContainerBase = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1440px) {
    max-width: 1200px;
    padding: 0 105px;
  }

`;

export const LinhaTipos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
  
  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--cinza-6);
  }


  .botoes-tipo {
    width: 150px; 
    display: flex;
    background-color: var(--cinza-4);
    border-radius: 20px;
    overflow: hidden; 
  }
`;

export const BotaoTipo = styled.button`

  background-color: ${(props) => (props.$selecionado ? 'var(--azul-3)' : 'var(--cinza-4)')};
  color: var(--branco);
  border: none;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  cursor: pointer;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
   border-radius: 30px;
  }
  &:last-child {
   border-radius: 30px;
  }
  &:hover {
    background-color: ${(props) => (props.$selecionado ? 'var(--azul-3)' : 'var(--cinza-3)')};
  }
  &:focus-visible {
    outline: 2px solid var(--azul-3); 
    outline-offset: 2px;
  }
`;
export const LinhaFiltros = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1440px) {
   gap: 10px;
  }
  @media (max-width: 1440px) {
   gap: 6px;
  }


`;


export const InputLocalizacao = styled.input`
  height: 38px;
  border-radius: 20px;
  padding: 0 16px;
  background-color: var(--cinza-3);
  color: var(--branco);
  font-size: 14px;
  border: none;
  width: 180px;
  &::placeholder {
    color: var(--cinza-1);
  }

  &:focus {
    outline: none;
    background-color: var(--cinza-4);
  }
`;

export const SugestoesLista = styled.ul`
  position: absolute;
  top: 42px;
  width: 180px;
  background: var(--cinza-3);
  border-radius: 0 0 10px 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;

  li {
    padding: 8px;
    cursor: pointer;
    color: var(--branco);
    font-size: 14px;
    transition: background 0.3s;

    &:hover {
      background-color:var(--cinza-3); 
    }
  }
`;
export const Dropdown = styled.select`
  height: 38px;
  border-radius: 30px;
  padding: 0 36px 0 16px; 
  font-weight: 600;
  font-size: 14px;
  color: var(--branco);
  background-color: var(--cinza-3);
  border: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center; 
  background-size: 24px;
  cursor: pointer;
  white-space: nowrap; 
  width: auto;
 
  max-width: 200px;
  flex: 1 1 auto;
  @media (max-width: 1440px) {
    max-width: 150px;
  }

  &:focus {
    outline: none;
    background-color: var(--cinza-4);
  }
`;



export const CampoBusca = styled.div`
  display: flex;
  align-items: center;
  background: var(--branco);
  border-radius: 40px;
  padding: 0 10px;
  height: 38px;
  width: 300px;
  border: 1px solid var(--cinza-2);
  flex: 1 1 auto;


`;

export const LupaIcone = styled.img`
  width: 18px;
  height: 18px;
`;

export const InputBusca = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  padding-left: 10px;
  color: var(--cinza-6);
  background: transparent;

  &::placeholder {
    color: var(--cinza-3);
  }

  &:focus {
    outline: none;
  }
`;

export const AreaBotaoLimpar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`;
