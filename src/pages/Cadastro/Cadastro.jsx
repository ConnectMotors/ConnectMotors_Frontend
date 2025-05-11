import ImagemCadastro from './assets/imagemCadastro.svg';
import IconeGoogle from './assets/iconeGoogle.svg';
import IconeFacebook from './assets/iconeFacebook.svg';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CadastroBg,
    ContainerGeral,
    ContainerImagem,
    FormularioWrapper,
    Formulario
} from './Cadastro.styles';
import axios from 'axios';

export default function Cadastro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    const navigate = useNavigate();

    const submeterFormulario = (evento) => {
        evento.preventDefault();

        if (password !== confirmacaoSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const usuario = {
            username,
            email,
            password,
            roles: ["ADMIN"]  // REVER ESSE TRECHO DO CODIGO //////////////////////////////////////////////////////
        };

        axios.post("http://localhost:8080/auth/register", usuario)
            .then(() => {
                alert("Usuário cadastrado com sucesso");
                setUsername('');
                setEmail('');  //falta adicionar no backend o cadastro de email do usuário
                setPassword('');
                setConfirmacaoSenha('');
                navigate("/auth/login");
            })
            .catch((erro) => {
                if (erro.response) {
                    console.error("Erro:", erro.response.data);
                    alert(erro.response.data.message || "Erro ao cadastrar");
                } else {
                    alert("Erro de conexão com o servidor");
                }
            });
    };

    return (
        <CadastroBg>
            <ContainerGeral>
                <ContainerImagem>
                    <img src={ImagemCadastro} alt="" />
                </ContainerImagem>
                <FormularioWrapper>
                    <Formulario>
                        <h2>Cadastro</h2>
                        <p>Insira seu e-mail, nome e senha para criar seu cadastro</p>

                        <div className="campo">
                            <label>Nome completo</label>
                            <input
                                type="text"
                                placeholder="Nome completo"
                                value={username}
                                onChange={(evento) => setUsername(evento.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="email@email.com"
                                value={email}
                                onChange={(evento) => setEmail(evento.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(evento) => setPassword(evento.target.value)}
                            />
                        </div>
                        <div className="campo">
                            <label>Confirmação de Senha</label>
                            <input
                                type="password"
                                placeholder="Confirmação de senha"
                                value={confirmacaoSenha}
                                onChange={(evento) => setConfirmacaoSenha(evento.target.value)}
                            />
                        </div>

                        <p className="termos">
                            Ao clicar no botão abaixo, aceito os <a href="#">Termos de Uso</a> e
                            <a href="#"> Política de Privacidade ConnectMotors</a>
                        </p>

                        <button
                            type="submit"
                            onClick={submeterFormulario}
                            disabled={!username || !email || !password || !confirmacaoSenha}
                        >
                            Cadastrar
                        </button>

                        <p className="login">
                            Já tem conta? Faça seu <Link to="/auth/login">Login</Link>
                        </p>

                        <div className="separador">
                            <hr /> <span>ou</span> <hr />
                        </div>

                        <button className="google">
                            <img src={IconeGoogle} alt="Google" />
                            Cadastre-se com o Google
                        </button>

                        <button className="facebook">
                            <img src={IconeFacebook} alt="Facebook" />
                            Cadastre-se com o Facebook
                        </button>
                    </Formulario>
                </FormularioWrapper>
            </ContainerGeral>
        </CadastroBg>
    );
}