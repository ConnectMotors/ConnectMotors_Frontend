import { useState, useEffect } from "react";
import { useFiltros } from "../../context/FiltrosContext";
import { aplicarFiltros } from "../../utils/AplicarFiltros";
import ListagemVeiculos from "../../components/ListagemVeiculos/ListagemVeiculos";
import FiltragemComprar from "../../components/Filtragem/FiltragemComprar";
import { useParams } from "react-router-dom"; // 👈 IMPORTANTE
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar"; // importa
import { 
  ContainerComprar, 
  Loader,
  BotaoVoltarContainer,
} from "./Comprar.styles";

export default function Comprar() {
  const filtros = useFiltros();
  const { tipoSelecionado, setTipoSelecionado } = filtros;
  const { tipo } = useParams();

  const [todosVeiculos, setTodosVeiculos] = useState([]);
  const [veiculosFiltrados, setVeiculosFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('/Data/veiculos_exemplo.json')
      .then((res) => res.json())
      .then((data) => {
        setTodosVeiculos(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar veículos:", err);
        setCarregando(false);
      });
  }, []);

  useEffect(() => {
    if (tipo) {
      const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase();
      setTipoSelecionado(tipoFormatado);
    }
  }, [tipo, setTipoSelecionado]);

  useEffect(() => {
    if (!carregando) {
      const filtrados = aplicarFiltros(todosVeiculos, filtros);
      setVeiculosFiltrados(filtrados);
    }
  }, [
    todosVeiculos,
    filtros.textoPesquisa,
    filtros.textoLoc,
    filtros.tipoSelecionado,
    filtros.categoriaSelecionada,
    filtros.precoMin,
    filtros.precoMax,
    filtros.quilometragemMin,
    filtros.quilometragemMax,
    filtros.anoMin,
    filtros.anoMax,
    filtros.ordenacao
  ]);

  if (carregando) {
    return (
      <ContainerComprar>
        <Loader />
      </ContainerComprar>
    );
  }

  return (
    <ContainerComprar>
        <FiltragemComprar />
        {veiculosFiltrados.length === 0 ? (
          <p>Este veículo não foi encontrado.</p>
        ) : (
          <ListagemVeiculos veiculos={veiculosFiltrados} />
        )}
      <BotaoVoltarContainer>
        <BotaoVoltar
          to="/"
          color="var(--branco)"
          backgroundColor="var(--azul-4)"
          hoverBackgroundColor="var(--azul-3)"
        >
          Voltar para Home
        </BotaoVoltar>
      </BotaoVoltarContainer>
    </ContainerComprar>
  );
}