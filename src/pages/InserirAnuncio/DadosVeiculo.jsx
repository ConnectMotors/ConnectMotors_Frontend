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
  Divider,
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
  const [tipoVeiculo, setTipoVeiculo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [anoModelo, setAnoModelo] = useState('');
 
  const [versao, setVersao] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [motor, setMotor] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [cambio, setCambio] = useState('');
  const [cidadesFiltradas, setCidadesFiltradas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [fabricantes, setFabricantes] = useState([]);
  const [corId, setCorId] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [marcaId, setMarcaId] = useState('');
  const [cores, setCores] = useState([]);
  const [modeloId, setModeloId] = useState('');
  const [carroceria, setCarroceria] = useState('');

  const todasCidades = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba",
    "Porto Alegre", "Brasília", "Salvador", "Fortaleza", "Manaus", "Recife"
  ];
  const opcoesMotor = [
    "1.0", "1.0 Turbo", "1.3", "1.5", "1.6", "1.8", "2.0", 
  ];
  const sugestoesVersao = [
    "Comfortline", "Highline", "Trendline", "Exclusive", "XLS", "XLT", "Platinum", "RS", "GT Line"
  ];
  const anosDisponiveis = Array.from({ length: 2025 - 2010 + 1 }, (_, i) => (2010 + i).toString());
  // Filtros vindos do backend
  const [filtros, setFiltros] = useState({
    combustiveis: ["GASOLINA", "ALCOOL", "FLEX", "DIESEL", "ELETRICO", "HIBRIDO"],
  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Buscar fabricantes
    fetch('http://localhost:8080/admin/marcas', { headers })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar fabricantes: " + res.status);
        return res.json();
      })
      .then(data => setFabricantes(data))
      .catch(err => console.error(err.message));

    // Buscar cores (rota pública ou protegida? se for protegida, usa o mesmo headers)
    fetch('http://localhost:8080/cores', { headers })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar cores: " + res.status);
        return res.json();
      })

      .then(data => setCores(data))
      .catch(err => console.error(err.message));

    // Buscar modelos
    fetch('http://localhost:8080/admin/modelos', { headers })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar modelos: " + res.status);
        return res.json();
      })
      .then(data => setModelos(data))
      .catch(err => console.error(err.message));
  }, []);


  useEffect(() => {
    if (cidade.length > 0) {
      const filtradas = todasCidades.filter(c =>
        c.toLowerCase().startsWith(cidade.toLowerCase())
      );
      setCidadesFiltradas(filtradas);
    } else {
      setCidadesFiltradas([]);
    }
  }, [cidade]);
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

const formatarCep = (cep) => {
  const limpo = cep.replace(/\D/g, '');
  return limpo.replace(/^(\d{5})(\d{3})$/, '$1-$2');
};

const handleSalvarEDirecionarParaDadosAnuncio = async () => {
  try {
    // Verifica se todos os campos obrigatórios estão preenchidos
    const camposObrigatorios = [
      cidade, estado, cep, tipoVeiculo, marcaId, anoFabricacao,
      anoModelo, modeloId, versao, quilometragem, motor, corId, combustivel, carroceria, cambio
    ];

    if (!camposObrigatorios.every(Boolean)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação do CEP
    const cepValido = /^[0-9]{5}-?[0-9]{3}$/.test(cep);
    if (!cepValido) {
      alert('Por favor, insira um CEP válido no formato 12345-678.');
      return;
    }

    // Limpa e valida a quilometragem
    const quilometragemLimpa = quilometragem.replace(/\D/g, '');
    const kmNumerico = parseInt(quilometragemLimpa, 10);

    if (isNaN(kmNumerico) || kmNumerico < 0) {
      alert('Por favor, insira uma quilometragem válida.');
      return;
    }

    setCarregando(true);

    const dadosVeiculo = {
      cep: formatarCep(cep),
      quilometragem: kmNumerico,
      tipoVeiculo,
      marcaId,
      modeloId,
      corId,
      anoFabricacao,
      anoModelo,
      combustivel,
      carroceria,
      motor,
      versao,
      cambio
    };

    localStorage.setItem('dadosVeiculo', JSON.stringify(dadosVeiculo));
    navigate('/anuncio/dados-anuncio');

  } catch (error) {
    console.error('Erro ao salvar os dados do veículo:', error);
    alert('Ocorreu um erro ao prosseguir. Tente novamente mais tarde.');
  } finally {
    setCarregando(false);
  }
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
              placeholder="Cidade"
              readOnly // opcional, se não quiser que o usuário edite manualmente
            />
          </InputGroup>
          <InputGroup>
            <Label>Estado</Label>
            <Input
              value={estado}
              placeholder="Estado"
              readOnly // impede edição manual
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
          
          {/* Linha 2 */}
          <InputGroup >
            <Label>Tipo do veículo</Label>
            <Select value={tipoVeiculo} onChange={e => setTipoVeiculo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="CARRO">Carro</option>
              <option value="MOTO">Moto</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Fabricante</Label>
            <Select value={marcaId} onChange={e => setMarcaId(e.target.value)}>
              <option value="">Selecione</option>
              {Array.isArray(fabricantes) && fabricantes.map(f => (
                <option key={f.id} value={f.id}>{f.nome}</option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Ano fabricação</Label>
            <Select value={anoFabricacao} onChange={e => setAnoFabricacao(e.target.value)}>
              <option value="">Selecione</option>
              {Array.from({ length: 2025 - 2015 + 1 }, (_, i) => 2015 + i).map(ano => (
                <option key={ano} value={ano}>{ano}</option>
              ))}
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Ano modelo</Label>
            <Select value={anoModelo} onChange={e => setAnoModelo(e.target.value)}>
              <option value="">Selecione</option>
              {Array.from({ length: 2025 - 2015 + 1 }, (_, i) => 2015 + i).map(ano => (
                <option key={ano} value={ano}>{ano}</option>
              ))}
            </Select>
          </InputGroup>
          {/* Linha 3 */}
          <InputGroup>
            <Label>Nome do Veículo</Label>
            <Select value={modeloId} onChange={e => setModeloId(e.target.value)}>
              <option value="">Selecione</option>
              {Array.isArray(modelos) && modelos.map(m => (
                <option key={m.id} value={m.id}>{m.nome}</option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Versão</Label>
            <Select value={versao} onChange={e => setVersao(e.target.value)}>
              <option value="">Selecione</option>
              {sugestoesVersao.map((v, index) => (
                <option key={index} value={v}>{v}</option>
              ))}
            </Select>

          </InputGroup>
          <InputGroup style={{ flex: 1 }}>
            <Label>Categoria</Label>
            <Select value={carroceria} onChange={e => setCarroceria(e.target.value)}>
              <option value="">Selecione</option>
              <option value="HATCH">HATCH</option>
              <option value="SEDAN">SEDAN</option>
              <option value="SUV">SUV</option>
              <option value="PICAPE">PICAPE</option>
            </Select>
          </InputGroup>

          {/* Linha 4 */}
          <InputGroup>
            <Label>Quilometragem</Label>
            <Input
              value={quilometragem}
              onChange={e => setQuilometragem(e.target.value)}
              placeholder="Digite a quilometragem"
            />
          </InputGroup>
          <InputGroup>
            <Label>Motor</Label>
            <Select value={motor} onChange={e => setMotor(e.target.value)}>
              <option value="">Selecione</option>
              {opcoesMotor.map((mot, index) => (
                <option key={index} value={mot}>{mot}</option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Cor</Label>
            <Select value={corId} onChange={e => setCorId(e.target.value)}>
              <option value="">Selecione</option>
              {Array.isArray(cores) && cores.map(c => (
                <option key={c.id} value={c.id}>{c.nome}</option>
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
          <InputGroup>
  <Label>Câmbio</Label>
  <Select value={cambio} onChange={e => setCambio(e.target.value)}>
    <option value="">Selecione</option>
    <option value="MANUAL">Manual</option>
    <option value="AUTOMATICO">Automático</option>
  </Select>
</InputGroup>

          {/* Botões */}
          <BotoesContainer>
            <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
            <BotaoContinuar onClick={handleSalvarEDirecionarParaDadosAnuncio} disabled={carregando}>
              {carregando ? 'Salvando...' : 'Continuar'}
            </BotaoContinuar>
          </BotoesContainer>
        </Formulario>
      </Container>
    </DadosVeiculoBG>
  );
}
