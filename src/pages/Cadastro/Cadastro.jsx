import ImagemCadastro from './assets/imagemCadastro.svg';
import IconeGoogle from './assets/iconeGoogle.svg';
import IconeFacebook from './assets/iconeFacebook.svg';
import { useState } from "react";
import { Link } from "react-router-dom";

import {
    CadastroBg,
    ContainerGeral,
    ContainerImagem,
    FormularioWrapper,
    Formulario
} from './Cadastro.styles';


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    return (
        <CadastroBg>
            

            <ContainerGeral>
                <ContainerImagem>
                    <img src={ImagemCadastro} alt="aperto de mãos e entrega de chave" />
                </ContainerImagem>
                <FormularioWrapper>
                    <Formulario>
                        <h2>Cadastro</h2>
                        <p>Insira seu e-mail, nome e senha para criar seu cadastro</p>

                        <div className="campo">
                            <label>Nome completo</label>
                            <input type="text"
                                placeholder="Nome completo"
                                value={nome}
                                onChange={setNome} />
                        </div>
                        <div className="campo">
                            <label>Email</label>
                            <input type="email"
                                placeholder="email@email.com"
                                value={email}
                                onChange={setEmail} />
                        </div>
                        <div className="campo">
                            <label>Senha</label>
                            <input type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={setSenha} />
                        </div>
                        <div className="campo">
                            <label>Confirmação de Senha</label>
                            <input type="password"
                                placeholder="Confirmação de senha"
                                value={confirmacaoSenha}
                                onChange={setConfirmacaoSenha} />
                        </div>

                        <p className="termos">
                            Ao clicar no botão abaixo, aceito os <a href="#">Termos de Uso</a> e
                            <a href="#"> Política de Privacidade ConnectMotors</a>
                        </p>

                        <button type="submit">Cadastrar</button>

                        <p className="login">
                            Já tem conta? Faça seu<Link to="/auth/login">Login</Link>
                        </p>

                        <div className="separador">
                            <hr /> <span>ou</span> <hr />
                        </div>

                        <button className="google">
                            <img src={IconeGoogle} alt="Google" />
                            Cadastre-se com o google
                        </button>

                        <button className="facebook">
                            <img src={IconeFacebook} alt="Facebook" />
                            Cadastre-se com o facebook
                        </button>
                    </Formulario>

                </FormularioWrapper>
            </ContainerGeral>
        </CadastroBg>
    );
}
