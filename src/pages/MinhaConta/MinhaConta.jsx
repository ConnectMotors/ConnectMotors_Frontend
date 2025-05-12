import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/SideBar/SideBar';
import {
  Container,
  Titulo,
  Secao,
  Campo,
  Label,
  Input,
  Botao,
  Coluna,
  Linha,
 BotaoWrapper
} from './MinhaConta.styles';

export default function MinhaConta() {
  const [usuario, setUsuario] = useState({
    email: '',
    nome: '',
    dataNascimento: '',
    cpf: '',
    cep: '',
    estado: '',
    cidade: '',
    telefone: '',
    exibirTelefone: false,
    senhaAtual: '',
    novaSenha: ''
  });
const [activeSection, setActiveSection] = useState('conta');
const username = sessionStorage.getItem('username');
const email = sessionStorage.getItem('email');

useEffect(() => {
  const token = sessionStorage.getItem('token');
  const identifier = sessionStorage.getItem('identifier'); // <-- recupera o valor do login

  axios.get("http://localhost:8080/auth/login", {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => {
      const dados = res.data;
      sessionStorage.setItem('username', dados.nome || identifier);
      sessionStorage.setItem('email', dados.email);
      setUsuario(prev => ({ ...prev, ...dados, nome: dados.nome || identifier }));
    })
    .catch(err => console.error(err));
}, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUsuario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const salvarAlteracoes = () => {
    const token = sessionStorage.getItem('token');
    axios.put("http://localhost:8080/auth/login", usuario, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => alert("Alterações salvas com sucesso"))
      .catch(() => alert("Erro ao salvar alterações"));
  };

  const handleNavigate = (destino) => {
    console.log('Navegar para:', destino);
    // Aqui você pode usar navigate() do react-router se desejar
    setActiveSection(destino);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <Sidebar
    username={username} 
  email={email}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
         activeSection={activeSection}
      />

      <Container
        style={{ marginLeft: window.innerWidth >= 768 ? '250px' : '0px' }}>
          

        <Titulo>Minha conta</Titulo>

        <Linha>
          <Coluna>
            <Secao>
              <h3>Meus dados</h3>
              <Campo>
                <Label>Email</Label>
                <Input type="email" name="email" value={usuario.email} disabled />
              </Campo>
              <Campo>
                <Label>Nome Completo</Label>
                <Input name="nome" value={usuario.nome} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>Data Nascimento</Label>
                <Input type="date" name="dataNascimento" value={usuario.dataNascimento} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>CPF</Label>
                <Input name="cpf" value={usuario.cpf} onChange={handleChange} />
              </Campo>
            </Secao>

            <Secao>
              <h3>Alterar senha</h3>
              <Campo>
                <Label>Senha atual</Label>
                <Input type="password" name="senhaAtual" value={usuario.senhaAtual} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>Nova senha</Label>
                <Input type="password" name="novaSenha" value={usuario.novaSenha} onChange={handleChange} />
              </Campo>
            </Secao>
          </Coluna>

          <Coluna>
            <Secao>
              <h3>Meu endereço e contato</h3>
              <Campo>
                <Label>CEP</Label>
                <Input name="cep" value={usuario.cep} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>Estado</Label>
                <Input name="estado" value={usuario.estado} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>Cidade</Label>
                <Input name="cidade" value={usuario.cidade} onChange={handleChange} />
              </Campo>
              <Campo>
                <Label>Telefone</Label>
                <Input name="telefone" value={usuario.telefone} onChange={handleChange} />
              </Campo>
            </Secao>
            <BotaoWrapper>
            <Botao onClick={salvarAlteracoes}>Salvar alterações</Botao>
            </BotaoWrapper>
          </Coluna>
        </Linha>
      </Container>
    </>
  );
}
