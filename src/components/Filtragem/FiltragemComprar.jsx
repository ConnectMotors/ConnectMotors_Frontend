import React, { useState } from "react";
import BotaoLimparFiltros from "../BotaoLimparFiltros/BotaoLimparFiltros";
import { useNavigate } from "react-router-dom";
import {
  ContainerBase,
  LinhaTipos,
  LinhaFiltros,
  BotaoTipo,
  InputLocalizacao,
  Dropdown,
  CampoBusca,
  InputBusca,
  LupaIcone,
  AreaBotaoLimpar,
} from "./FiltragemComprar.styles";

import Lupa from "./assets/lupaPesquisa.svg";
import { useFiltros } from "../../context/FiltrosContext";

export default function FiltragemComprar() {
  const navigate = useNavigate();
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const {
    textoPesquisa, setTextoPesquisa,
    textoLoc, setTextoLoc,
    tipoSelecionado, setTipoSelecionado,
    precoMax, setPrecoMax,
    quilometragemMax, setQuilometragemMax,
    anoMax, setAnoMax,
    ordenacao, setOrdenacao,
    limparFiltros
  } = useFiltros();

  const tiposVeiculo = ["Carro", "Moto"];

  const handleEnterPressBusca = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTextoPesquisa(textoBuscaDigitado);
    }
  };

  const handleBuscaClick = () => {
    setTextoPesquisa(textoBuscaDigitado);
  };

  return (
    <ContainerBase>
      <LinhaTipos>
        <span>Filtre por :</span>
        <div className="botoes-tipo">
          {tiposVeiculo.map((tipo) => (
            <BotaoTipo
              key={tipo}
              $selecionado={tipoSelecionado === tipo}
              onClick={() => {
                setTipoSelecionado(tipo);
                navigate(`/comprar/${tipo.toLowerCase()}`);
              }}
            >
              {tipo}
            </BotaoTipo>
          ))}
        </div>
      </LinhaTipos>

      <LinhaFiltros>
        {/* Localização */}
        <div style={{ position: "relative" }}>
          <InputLocalizacao
            type="text"
            placeholder="Digite a localização"
            value={textoLoc}
            onChange={(e) => setTextoLoc(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          />
        </div>

        {/* Dropdowns */}
        <Dropdown value={precoMax} onChange={(e) => setPrecoMax(e.target.value)}>
          <option value="">Preço</option>
          <option value="10000">até R$ 10.000</option>
          <option value="20000">até R$ 20.000</option>
          <option value="30000">até R$ 30.000</option>
          <option value="50000">até R$ 50.000</option>
          <option value="80000">até R$ 80.000</option>
          <option value="100000">até R$ 100.000</option>
          <option value="150000">até R$ 150.000</option>
          <option value="200000">até R$ 200.000</option>
          <option value="300000">até R$ 300.000</option>
          <option value="500000">até R$ 500.000</option>
        </Dropdown>

        <Dropdown value={quilometragemMax} onChange={(e) => setQuilometragemMax(e.target.value)}>
          <option value="">Quilometragem</option>
          <option value="10000">até 10.000 km</option>
          <option value="20000">até 20.000 km</option>
          <option value="30000">até 30.000 km</option>
          <option value="50000">até 50.000 km</option>
          <option value="80000">até 80.000 km</option>
          <option value="100000">até 100.000 km</option>
          <option value="150000">até 150.000 km</option>
          <option value="200000">até 200.000 km</option>
        </Dropdown>

        <Dropdown value={anoMax} onChange={(e) => setAnoMax(e.target.value)}>
          <option value="">Ano</option>
          <option value="2025">até 2025</option>
          <option value="2024">até 2024</option>
          <option value="2023">até 2023</option>
          <option value="2022">até 2022</option>
          <option value="2021">até 2021</option>
          <option value="2020">até 2020</option>
          <option value="2018">até 2018</option>
          <option value="2016">até 2016</option>
          <option value="2014">até 2014</option>
          <option value="2010">até 2010</option>
          <option value="2005">até 2005</option>
          <option value="2000">até 2000</option>
        </Dropdown>

        <Dropdown value={ordenacao} onChange={(e) => setOrdenacao(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="precoDesc">Maior preço</option>
          <option value="precoAsc">Menor preço</option>
          <option value="anoDesc">Maior ano</option>
          <option value="anoAsc">Menor ano</option>
          <option value="kmDesc">Maior quilometragem</option>
          <option value="kmAsc">Menor quilometragem</option>
        </Dropdown>

        {/* Campo de busca */}
        <CampoBusca>
          <LupaIcone
            src={Lupa}
            alt="Buscar"
            onClick={handleBuscaClick}
            style={{ cursor: "pointer" }}
          />
          <InputBusca
            type="text"
            placeholder="Pesquise por veículo, marca, modelo..."
            value={textoBuscaDigitado}
            onChange={(e) => setTextoBuscaDigitado(e.target.value)}
            onKeyDown={handleEnterPressBusca}
          />
        </CampoBusca>
      </LinhaFiltros>

      <AreaBotaoLimpar>
        <BotaoLimparFiltros onClick={limparFiltros}>
          Limpar filtros
        </BotaoLimparFiltros>
      </AreaBotaoLimpar>
    </ContainerBase>
  );
}
