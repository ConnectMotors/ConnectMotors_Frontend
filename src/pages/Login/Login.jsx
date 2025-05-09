import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submeterFormulario = (evento) => {
    evento.preventDefault();
    const usuario = {
      identifier,
      password
    }

    axios.post("http://localhost:8080/auth/login", usuario)
      .then(resposta => {
        sessionStorage.setItem('token', resposta.data.token)
        sessionStorage.setItem('username', identifier); // ajustar para  resposta.data.username quando o backend fizer a alteraçao
        window.dispatchEvent(new Event("usuarioLogado"));
        setIdentifier('')      // no backend falta adicionar a lógica para logar com o email
        setPassword('')
        navigate('/');
        //  console.log(resposta)
      })
      .catch(erro => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message) // falta adicionar mensagem de erro no backend
        } else {
          alert("Aconteceu algo inesperado ao efetuar o seu login")
        }
        //  console.log(erro)
      })
  }

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
              <label htmlFor="email">Nome de usuário ou email</label>
              <input
                type="email"
                placeholder="Digite seu nome de usuário ou email"
                value={identifier}
                onChange={(evento) => setIdentifier(evento.target.value)}
              />
            </Campo>

            <Campo>
              <label htmlFor="senha">Senha</label>
              <input type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={password}
                onChange={(evento) => setPassword(evento.target.value)}
              />
            </Campo>

            <div className="esqueciSenha">
              <span>Esqueceu sua senha?</span>
              <a href="/recuperar">Clique aqui</a>
            </div>

            <button type="submit" onClick={submeterFormulario}>Entrar</button>

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
              <Link to="/auth/register">Cadastre-se</Link>
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

