import styled from "styled-components";

export const LoginBg = styled.section`
  background-color: var(--cinza-background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerGeral = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  padding-left: 0px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const ContainerImagem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width: 1000px){
    img{
      display: none;
    }
  }
`;

export const FormularioWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 90px;

  @media(max-width: 1000px){
    align-items: center;
    margin-top: 120px;
    margin-bottom: 30px;
  }

  @media(max-width: 823px){
    margin-top: 150px;
  }
  @media(max-width: 800px){
    margin-top: 180px;
  }
  @media(max-width: 580px){
    margin-top: 200px;
    margin-bottom: 40px;
  }
  @media(max-width: 572px){
  margin-top: 240px;
}
`;

export const Formulario = styled.form`
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 450px;
  font-family: var(--fonte-principal);

  h2 {
    color: var(--preto);
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  button {
    padding: 12px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 1rem;
    font-family: var(--fonte-principal);

    &:hover {
      background-color: var(--azul-2);
      color: var(--branco);
    }
  }

  button[type="submit"] {
    background-color: var(--azul-4);
    color: var(--branco);
    border: none;

    &:hover {
      background-color: var(--azul-3);
    }
  }

  .esqueciSenha {
    font-size: 0.8rem;
    color: var(--cinza-6);
    margin-top: 10px;
    text-align: right;

    a {
      color: var(--azul-4);
      text-decoration: none;
      margin-left: 4px;
    }
  }

  .separador {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--cinza-6);
    font-size: 0.8rem;

    hr {
      flex: 1;
      border: none;
      height: 1px;
      background-color: var(--cinza-3);
    }
  }

  .loginSocial {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .google,
  .facebook {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 75px;
    border: 1px solid var(--azul-4);
    background-color: var(--cinza-background);
    color: var(--azul-4);
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    padding: 10px;

    img {
      width: 18px;
      height: 18px;
      margin-left: 10px;
    }
  }

  .cadastro {
    text-align: center;
    font-size: 0.8rem;
    color: var(--preto);
    margin-top: 10px;

    a {
      color: var(--azul-4);
      text-decoration: none;
      font-weight: bold;
      margin-left: 4px;
    }
  }

  .termos{
        color: var(--preto);
        font-size: 0.75rem;
        font-family: var(--fonte-principal);
        a {
            color: var(--azul-4);
            font-style: italic;
        }
  }

  @media(max-width: 1000px){
    border: 1px solid rgba(0,0,0, .2);
  }
`;

export const Campo = styled.div`
display: flex;
flex-direction: column;
gap: 4px;

   label {
    font-size: 0.9rem;
    color: var(--preto);
  }

  input {
    padding: 12px;
    border: none;
    border-radius: 10px;
    font-size: 0.8rem;
    outline: 0;
    font-family: var(--fonte-principal);
  }
`