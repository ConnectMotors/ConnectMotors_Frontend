import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  PageBackground,
  CardContainer,
  Titulo,
  TopSection,
  FotoPrincipal,
  DetalhesVeiculo,
  Valor,
  GaleriaFotos,
  ContatoContainer,
  InfoContato,
  Caixa,
  User,
  Mensagem,
  Descricao,
  FotoContainer,
  BotaoSetaEsquerda,
  BotaoSetaDireita
} from './AnuncioDetalhado.styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import divisor from "./assets/divisor.svg";
import divisor2 from "./assets/divisor2.svg";
import userIcon from "./assets/userIcon.svg";
import localizacao from "./assets/localizacao.svg";
import telefone from "./assets/telefone.svg";
import mensagem from "./assets/mensagem.svg";
import axios from 'axios';

export default function AnuncioDetalhado() {
  const { id } = useParams();
  const [veiculo, setVeiculo] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);

 useEffect(() => {
  async function buscarAnuncio() {
    try {
      const response = await axios.get("http://localhost:8080/anuncios");
      const anuncio = response.data.find(item => item.id.toString() === id.toString());

      if (!anuncio) {
        console.error("Anúncio não encontrado.");
        return;
      }

      // Adaptação dos dados para o componente
      const veiculoAdaptado = {
        id: anuncio.id,
        nomeVeiculo: anuncio.carro.modelo.nome,
        fabricante: anuncio.carro.marca.nome,
        versao: anuncio.carro.versao,
        motor: anuncio.carro.motor,
        cor: anuncio.carro.cor.nome,
        anoFabricacao: anuncio.carro.anoFabricacao,
        anoModelo: anuncio.carro.anoModelo,
        km: Number(anuncio.quilometragem),
        combustivel: anuncio.carro.combustivel,
        cidade: anuncio.localidade,
        estado: anuncio.uf,
        cep: anuncio.cep,
        valor: anuncio.preco,
        descricao: anuncio.descricao,
        nome: anuncio.usuario.username,
        fotoPrincipal: `http://localhost:8080${anuncio.imagensPaths[0]}`,
        fotoSecundaria: anuncio.imagensPaths.slice(1).map(path => `http://localhost:8080${path}`)
      };

      setVeiculo(veiculoAdaptado);
      setFotos([veiculoAdaptado.fotoPrincipal, ...veiculoAdaptado.fotoSecundaria]);
      setIndiceAtual(0);
    } catch (error) {
      console.error("Erro ao buscar anúncio no backend:", error);
    }
  }

  buscarAnuncio();
}, [id]);

  function fotoAnterior() {
    setIndiceAtual((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  }

  function proximaFoto() {
    setIndiceAtual((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  }

  if (!veiculo) {
  return <div style={{ padding: '120px', textAlign: 'center' }}>
    Anúncio não encontrado ou ainda carregando...
  </div>;
}

  return (
    <PageBackground>
      <CardContainer>
        <Titulo>{veiculo.fabricante} {veiculo.nomeVeiculo} {veiculo.versao}</Titulo>

        <img src={divisor} alt="" className='divisor' />

        <TopSection>
          <FotoPrincipal>
            <FotoContainer>
              <img src={fotos[indiceAtual]} alt={`${veiculo.fabricante} ${veiculo.nomeVeiculo}`} />

              <BotaoSetaEsquerda onClick={fotoAnterior}>
                <ChevronLeft size={32} />
              </BotaoSetaEsquerda>

              <BotaoSetaDireita onClick={proximaFoto}>
                <ChevronRight size={32} />
              </BotaoSetaDireita>
            </FotoContainer>

            <GaleriaFotos>
              {fotos.map((foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`Foto ${index + 1}`}
                  onClick={() => setIndiceAtual(index)}
                  style={{
                    border: indiceAtual === index ? '2px solid #007bff' : '2px solid transparent'
                  }}
                />
              ))}
            </GaleriaFotos>
          </FotoPrincipal>

          <div>
            <DetalhesVeiculo>
              <p><strong>Ano:</strong> {veiculo.anoFabricacao}/{veiculo.anoModelo}</p>
              <p><strong>Cor:</strong> {veiculo.cor}</p>
              <p><strong>Motor:</strong> {veiculo.motor}</p>
              <p><strong>Km:</strong> {veiculo.km.toLocaleString('pt-BR')} km</p>
              <p><strong>Combustível:</strong> {veiculo.combustivel}</p>
              <p><strong>Cidade:</strong> {veiculo.cidade} - {veiculo.estado}</p>
            </DetalhesVeiculo>

            <Valor>Valor: R$ {veiculo.valor.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</Valor>

            <ContatoContainer>
              <InfoContato>
                <img src={localizacao} alt="" />
                <span>{veiculo.cidade} - {veiculo.estado}, CEP: {veiculo.cep}</span>
              </InfoContato>

              <InfoContato>
                <img src={telefone} alt="" />
                <span>(65) 9 9280-5910</span>
              </InfoContato>

              <Caixa>
                <User>
                  <img src={userIcon} alt="" />
                  <span>{veiculo.nome || 'Vendedor'}</span>
                </User>
                <a href="/">
                  <Mensagem>
                    <img src={mensagem} alt="" />
                    <span>Enviar Mensagem</span>
                  </Mensagem>
                </a>
              </Caixa>
            </ContatoContainer>
          </div>
        </TopSection>

        <img src={divisor2} alt="" />

        <Descricao>
          <h3>Descrição :</h3>
          <p>{veiculo.descricao || 'Este veículo está em excelente estado de conservação, com toda documentação regularizada.'}</p>
        </Descricao>
      </CardContainer>
    </PageBackground>
  );
}
