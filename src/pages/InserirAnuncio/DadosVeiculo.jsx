import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DadosVeiculoBG,
  Container,
  TituloSecao,
  Formulario,
  InputGroup,
  Label,
  Input,
  Select,
  BotoesContainer,
  BotaoContinuar,
  BotaoVoltar,
  TitlePrincipal,
  Divider
} from './DadosVeiculo.styles';
import seta from "./assets/seta.svg";
import divider from "./assets/divider.svg";
import EtapasNavegacao from '../../components/EtapasNavegacao/EtapasNavegacao';

export default function DadosVeiculo() {
  const navigate = useNavigate();

  // Campos do formulário
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [anoModelo, setAnoModelo] = useState('');
  const [nomeVeiculo, setNomeVeiculo] = useState('');
  const [versao, setVersao] = useState('');
  const [km, setKm] = useState('');
  const [motor, setMotor] = useState('');
  const [cor, setCor] = useState('');
  const [combustivel, setCombustivel] = useState('');

  // Filtros vindos do backend
  const [filtros, setFiltros] = useState({
    fabricantes: [],
    cores: [],
    combustiveis: [],
    cidades: [],
  });

  useEffect(() => {
    fetch('http://localhost:8080/anuncios/filtros')
      .then(res => res.json())
      .then(data => {
        setFiltros({
          fabricantes: data.fabricantes || [],
          cores: data.cores || [],
          combustiveis: data.combustiveis || [],
          cidades: data.cidades || [],
        });
      })
      .catch(err => console.error('Erro ao carregar filtros:', err));
  }, []);

  const handleCepChange = (e) => {
    const novoCep = e.target.value;
    setCep(novoCep);

    const cepLimpo = novoCep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            setCidade(data.localidade || '');
            setEstado(data.uf || '');
          }
        })
        .catch(err => console.error('Erro ao buscar dados do CEP:', err));
    }
  };

  const handleContinuar = () => {
  const dadosVeiculo = {
    cidade,
    estado,
    cep,
    categoria,
    fabricante,
    anoFabricacao,
    anoModelo,
    nomeVeiculo,
    versao,
    km,
    motor,
    cor,
    combustivel,
  };

  localStorage.setItem('dadosVeiculo', JSON.stringify(dadosVeiculo));
  navigate('/anuncio/dados-anuncio');
};

  const handleVoltar = () => {
    navigate('/anuncio');
  };

  return (
    <DadosVeiculoBG>
      <Container>

        <div>
          <TitlePrincipal>
            <img src={seta} alt="" />
            <h1>INSERIR ANÚNCIO</h1>
          </TitlePrincipal>
          <Divider src={divider} alt="" />
        </div>

        <EtapasNavegacao etapaAtual={1} />

        <TituloSecao>
          <div className="linha" />
          <h2>Dados do veículo</h2>
          <div className="linha" />
        </TituloSecao>

        <Formulario>
          {/* Linha 1 */}
          <InputGroup>
            <Label>Cidade</Label>
            <Input
              value={cidade}
              onChange={e => setCidade(e.target.value)}
              list="cidades"
              placeholder="Digite a cidade"
            />
            <datalist id="cidades">
              {filtros.cidades.map((cidade, index) => (
                <option key={index} value={cidade} />
              ))}
            </datalist>
          </InputGroup>
          <InputGroup>
            <Label>Estado</Label>
            <Input
              value={estado}
              onChange={e => setEstado(e.target.value)}
              placeholder="UF"
              maxLength={2}
            />
          </InputGroup>
          <InputGroup>
            <Label>CEP</Label>
            <Input
              value={cep}
              onChange={handleCepChange}
              placeholder="00000-000"
            />
          </InputGroup>
          <div />

          {/* Linha 2 */}
          <InputGroup>
            <Label>Categoria</Label>
            <Select value={categoria} onChange={e => setCategoria(e.target.value)}>
              <option value="">Selecione</option>
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Fabricante</Label>
            <Select value={fabricante} onChange={e => setFabricante(e.target.value)}>
              <option value="">Selecione</option>
              {filtros.fabricantes.map((fab, index) => (
                <option key={index} value={fab}>{fab}</option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Ano fabricação</Label>
            <Input
              type="number"
              value={anoFabricacao}
              onChange={e => setAnoFabricacao(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Ano modelo</Label>
            <Input
              type="number"
              value={anoModelo}
              onChange={e => setAnoModelo(e.target.value)}
            />
          </InputGroup>

          {/* Linha 3 */}
          <InputGroup>
            <Label>Nome do veículo</Label>
            <Input
              value={nomeVeiculo}
              onChange={e => setNomeVeiculo(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Versão</Label>
            <Input
              value={versao}
              onChange={e => setVersao(e.target.value)}
            />
          </InputGroup>
          <div />
          <div />

          {/* Linha 4 */}
          <InputGroup>
            <Label>Km</Label>
            <Input
              value={km}
              onChange={e => setKm(e.target.value)}
              placeholder="Quilometragem"
            />
          </InputGroup>
          <InputGroup>
            <Label>Motor</Label>
            <Input
              value={motor}
              onChange={e => setMotor(e.target.value)}
              placeholder="Ex: 1.0 Flex"
            />
          </InputGroup>
          <InputGroup>
            <Label>Cor</Label>
            <Select value={cor} onChange={e => setCor(e.target.value)}>
              <option value="">Selecione</option>
              {filtros.cores.map((c, index) => (
                <option key={index} value={c}>{c}</option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Combustível</Label>
            <Select value={combustivel} onChange={e => setCombustivel(e.target.value)}>
              <option value="">Selecione</option>
              {filtros.combustiveis.map((comb, index) => (
                <option key={index} value={comb}>{comb}</option>
              ))}
            </Select>
          </InputGroup>

          {/* Botões */}
          <BotoesContainer>
            <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
            <BotaoContinuar onClick={handleContinuar}>Continuar</BotaoContinuar>
          </BotoesContainer>
        </Formulario>
      </Container>
    </DadosVeiculoBG>
  );
}
