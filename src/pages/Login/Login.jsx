import React from "react";
import {
  LoginBg,
  ContainerGeral,
  ContainerImagem,
  FormularioWrapper,
  Formulario,
  Campo
} from "./Login.styles";
import imagemLogin from "./assets/imagemlogin.png"; 
import IconeGoogle from "./assets/IconeGoogle.svg";
import IconeFacebook from "./assets/IconeFacebook.svg";

export default function Login(){
  return (
    <LoginBg>
      <ContainerGeral>
        <ContainerImagem>
          <img src={imagemLogin} alt="Imagem de login" />
        </ContainerImagem>

        <FormularioWrapper>
          <Formulario>
            <h2>Acesso</h2>
            <p>Insira seu e-mail e senha  para fazer o login</p>

            <Campo>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" />
            </Campo>
            
            <Campo>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
            </Campo>

            <div className="esqueciSenha">
              <span>Esqueceu sua senha?</span>
              <a href="/recuperar">Clique aqui</a>
            </div>

            <button type="submit">Entrar</button>

            <div className="separador">
              <hr />
              ou
              <hr />
            </div>

            <div className="loginSocial">
              <button className="google">
                <img src={IconeGoogle} alt="Google" />
                Entrar com Google
              </button>

              <button className="facebook">
                <img src={IconeFacebook} alt="Facebook" />
                Entrar com Facebook
              </button>
            </div>

            <div className="cadastro">
              <span>Não tem conta?</span>
              <a href="/cadastro">Cadastre-se</a>
            </div>

           <p className="termos">
                Para mais informações, verifique nossos <a href="#">Termos de Uso</a> e
                <a href="#"> Política de Privacidade</a>
            </p>
          </Formulario>
        </FormularioWrapper>
      </ContainerGeral>
    </LoginBg>
  );
};

