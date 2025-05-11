import styled from "styled-components";

export const AdicionarImagemBG = styled.div`

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


export const AreaUpload = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 250px;
  border: 2px dashed #999;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 40px;

  p{
    font-size: 0.8rem;
    color: var(--cinza-6);
    margin-bottom: 20px;
  }

  img{
    width: 50px;
    height: 40px;
    color: var(--cinza-6);
  }
`;

export const LabelUpload = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;

export const BotoesContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
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

export const BotaoConcluir = styled.button`
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

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

export const PreviewImage = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #ccc;
`;

export const RemoveButton = styled.button`
  display: block;
  margin-top: 6px;
  padding: 4px 8px;
  background-color: #e74c3c;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;