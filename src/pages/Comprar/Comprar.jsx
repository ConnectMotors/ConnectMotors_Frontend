import { useState, useEffect } from "react";
import { useFiltros } from "../../context/FiltrosContext";
import ListagemVeiculos from "../../components/ListagemVeiculos/ListagemVeiculos";
import FiltragemComprar from "../../components/Filtragem/FiltragemComprar";
import { useParams } from "react-router-dom";
import BotaoVoltar from "../../components/BotaoVoltar/BotaoVoltar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import {
  ContainerComprar,
  Loader,
  BotaoVoltarContainer,
} from "./Comprar.styles";

export default function Comprar() {
const {
  textoPesquisa, setTextoPesquisa,
  tipoSelecionado, setTipoSelecionado,
  categoriaSelecionada, setCategoriaSelecionada,
  precoMin, setPrecoMin,
  precoMax, setPrecoMax,
  quilometragemMax, setQuilometragemMax,
  anoMax, setAnoMax
} = useFiltros();
  const { tipo } = useParams();
const location = useLocation();
  const [veiculos, setVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);
const navigate = useNavigate();

  // Atualiza o tipo via URL (/comprar/:tipo)
  useEffect(() => {
    if (tipo) {
      const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1).toLowerCase();
      setTipoSelecionado(tipoFormatado);
    }
  }, [tipo, setTipoSelecionado]);

  // Busca veículos filtrados diretamente do backend
useEffect(() => {
  const params = new URLSearchParams(location.search);

  setTextoPesquisa(params.get("modelo") || "");
  setTipoSelecionado(params.get("tipoVeiculo") || "");
  setCategoriaSelecionada(params.get("carroceria") || "");

  // Aqui você limpa qualquer caractere não numérico
  setPrecoMin((params.get("precoMin") || "").replace(/\D/g, ""));
  setPrecoMax((params.get("precoMax") || "").replace(/\D/g, ""));

  setQuilometragemMax(params.get("quilometragemMax") || "");
  setAnoMax(params.get("anoModelo") || "");
}, [location.search]);

// 2. Sempre que filtros do contexto forem atualizados, dispara o fetch
useEffect(() => {
  const params = new URLSearchParams();

  if (textoPesquisa?.trim()) params.append("modelo", textoPesquisa);
  if (tipoSelecionado?.trim()) params.append("tipoVeiculo", tipoSelecionado);
  if (categoriaSelecionada?.trim()) params.append("carroceria", categoriaSelecionada);
  if (precoMin?.trim()) params.append("precoMin", precoMin);
  if (precoMax?.trim()) params.append("precoMax", precoMax);
  if (quilometragemMax?.trim()) params.append("quilometragemMax", quilometragemMax);
  if (anoMax?.trim()) params.append("anoModelo", anoMax);

  setCarregando(true);

  fetch(`http://localhost:8080/anuncios/filtros?${params.toString()}`)
    .then((res) => res.json())
    .then((data) => {
      setVeiculos(Array.isArray(data) ? data : [data]);
      
    })
    .catch((err) => {
      console.error("Erro ao carregar veículos:", err);
      setVeiculos([]);
    })
    .finally(() => setCarregando(false));
}, [
  textoPesquisa,
  tipoSelecionado,
  categoriaSelecionada,
  precoMin,
  precoMax,
  quilometragemMax,
  anoMax
]);
useEffect(() => {
  const params = new URLSearchParams();

  if (textoPesquisa?.trim()) params.append("modelo", textoPesquisa);
  if (tipoSelecionado?.trim()) params.append("tipoVeiculo", tipoSelecionado);
  if (categoriaSelecionada?.trim()) params.append("carroceria", categoriaSelecionada);
  if (precoMin?.toString().trim()) params.append("precoMin", precoMin);
  if (precoMax?.toString().trim()) params.append("precoMax", precoMax);
  if (quilometragemMax?.toString().trim()) params.append("quilometragemMax", quilometragemMax);
  if (anoMax?.toString().trim()) params.append("anoModelo", anoMax);

  const novaURL = `/comprar?${params.toString()}`;


  // Evita navegação desnecessária se a URL já está certa
  if (location.search !== `?${params.toString()}`) {
    navigate(novaURL, { replace: true }); // "replace" evita empilhar histórico no navegador
  }
}, [
  textoPesquisa,
  tipoSelecionado,
  categoriaSelecionada,
  precoMin,
  precoMax,
  quilometragemMax,
  anoMax
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

      {veiculos.length === 0 ? (
        <p>Este veículo não foi encontrado.</p>
      ) : (
        <ListagemVeiculos veiculos={veiculos} />
      )}

      <BotaoVoltarContainer>
        <BotaoVoltar
          to="/"
          color="var(--branco)"
          backgroundColor="var(--azul-4)"
          hoverBackgroundColor="var(--azul-3)"
        >
          ← Voltar para Home
        </BotaoVoltar>
      </BotaoVoltarContainer>
    </ContainerComprar>
  );
}