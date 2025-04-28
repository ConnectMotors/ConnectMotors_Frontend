import styled from "styled-components";


export const ContainerBg = styled.div`
 width: 100%;
 max-width: 800px;
background-color: var(--branco);
margin: 0 auto;
border-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto; 
  padding: 1.625rem 2.125rem;
`;

export const Titulo = styled.h2`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color:var(--cinza-6);
`;

export const CampoBusca = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--cinza-2);
  border-radius: 1.5rem;
  padding: 0.5rem 1rem; 
  height: 40px; 

`;


export const IconeFiltro = styled.img`
  height: 40px;
  width: auto;
  margin-left: 10px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dropdownFiltros {
    position: absolute;
    top: 73%;
    width: 100%;
    background: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 2rem; 
    z-index: 100;
  }
`;
export const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 0.9rem;
  flex: 1;
  padding-left: 0.5rem;
  color: var(--cinza-6);
  font-family: var(--fonte-principal);
  &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        display: none;
    }

  &::placeholder {
    color: var(--cinza-4);
  }

  &:focus {
    outline: none;
  }
`;

export const FiltrosWrapper = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 16px 20px; /* Reduzi o padding */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); 
`;
export const LinhaDivisoria = styled.hr`
  border: none;
  border-top: 2px solid var(--cinza-2);
  margin: 20px 0;
`;

export const FiltroLocalizacao = styled.div`
  margin-bottom: 12px;

label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 0.9rem;
}

`;

export const FiltroCategoria = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  


  h4 {
    margin-right: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 100%;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;



export const FiltroPreco = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h4 {
    margin-right: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 100%;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;


export const FiltroAno = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h4 {
    margin-right: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 100%;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;



export const CategoriaBotao = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid var(--preto);
  padding: 10px;
  border-radius: 10px;
  width: 64px;
  height: 64px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  span {
    font-size: 0.75rem;
    color: var(--preto);
  }

  &:hover {
    background-color: var(--cinza-1);
  }

`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--preto);
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23999' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  width: 180px;
  font-family: var(--fonte-principal);
  font-size: 0.7rem;

  &:focus {
    outline: none;
  }
`;

export const Acoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  div {
    display: flex;
    gap: 16px;
  }
`;


export const BotaoCancelar = styled.button`
  background: none;
  border: none;
  color: var(--cinza-6);
  font-size: 14px;
  margin-right: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const BotaoAplicar = styled.button`  
  background-color: var(--azul-4);
  color: white;
  border: none;
  padding: 10px 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;