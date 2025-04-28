import React, { useState, useEffect } from "react";
import BotaoLimparFiltros from "../BotaoLimparFiltros/BotaoLimparFiltros";
import { useNavigate } from "react-router-dom"; 
import {
  ContainerFiltros,
  LinhaTipos,
  LinhaFiltros,
  BotaoTipo,
  InputLocalizacao,
  SugestoesLista,
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
  const [sugestoes, setSugestoes] = useState([]);
  const [textoLocalDigitado, setTextoLocalDigitado] = useState('');
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState('');
  const [locaisDisponiveis, setLocaisDisponiveis] = useState([]);

  const {
    veiculosOriginais,
    textoPesquisa, setTextoPesquisa,
    textoLoc, setTextoLoc,
    tipoSelecionado, setTipoSelecionado,
    precoMax, setPrecoMax,
    quilometragemMax, setQuilometragemMax,
    anoMax, setAnoMax,
    ordenacao, setOrdenacao,
    aplicarFiltros,
    limparFiltros,
  } = useFiltros();

  const tiposVeiculo = ["Carro", "Moto"];


  useEffect(() => {
    if (veiculosOriginais.length > 0) {
      const locaisUnicos = [...new Set(
        veiculosOriginais.map(v => `${v.cidade} - ${v.estado}`)
      )];
      setLocaisDisponiveis(locaisUnicos);
    }
  }, [veiculosOriginais]);

  useEffect(() => {
    if (textoLocalDigitado.length > 0) {
      const filtradas = locaisDisponiveis.filter((loc) =>
        loc.toLowerCase().includes(textoLocalDigitado.toLowerCase())
      );
      setSugestoes(filtradas);
    } else {
      setSugestoes([]);
    }
  }, [textoLocalDigitado, locaisDisponiveis]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleInputChangeAndFilter = (setter) => (e) => {
    setter(e.target.value);
    aplicarFiltros();
  };

  const handleLocalizacaoChange = (e) => {
    const valor = e.target.value;
    setTextoLocalDigitado(valor);
  };

  const handleSugestaoClick = (local) => {
    setTextoLoc(local);             
    setTextoLocalDigitado('');       
    setSugestoes([]);                 
    setTimeout(() => {
      aplicarFiltros();
    }, 0);
  };
  const handleEnterPressLocalizacao = (e) => {
    if (e.key === "Enter" && sugestoes.length > 0) {
      e.preventDefault();
      const localSelecionado = sugestoes[0];
      setTextoLocalDigitado(localSelecionado); 
      setTextoLoc(localSelecionado);           
      setSugestoes([]);                        
      setTimeout(() => {
        aplicarFiltros();
      }, 0);
    }
  };

  const handleBuscaChange = (e) => {
    setTextoBuscaDigitado(e.target.value);
  };

  const handleEnterPressBusca = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTextoPesquisa(textoBuscaDigitado);
      aplicarFiltros();
    }
  };

  const handleBuscaClick = () => {
    setTextoPesquisa(textoBuscaDigitado);
    aplicarFiltros();
  };

  return (
    <ContainerFiltros>
<LinhaTipos>
  <span>Filtre por :</span>
  <div className="botoes-tipo">
    {tiposVeiculo.map((tipo) => (
      <BotaoTipo
        key={tipo}
        $selecionado={tipoSelecionado === tipo}
        onClick={() => {
          setTipoSelecionado(tipo);
          aplicarFiltros();
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
            value={textoLocalDigitado.length > 0 ? textoLocalDigitado : textoLoc}
            onChange={handleLocalizacaoChange}
            onKeyDown={handleEnterPressLocalizacao}
          />
          {textoLocalDigitado.length > 0 && (
            <SugestoesLista>
              {sugestoes.length > 0 ? (
                sugestoes.map((local, index) => (
                  <li key={index} onClick={() => handleSugestaoClick(local)}>
                    {local}
                  </li>
                ))
              ) : (
                <li style={{ cursor: "default", color: "#999" }}>
                  Nenhuma localização encontrada
                </li>
              )}
            </SugestoesLista>
          )}
        </div>


        {/* Preço Máximo */}
        <Dropdown value={precoMax} onChange={handleInputChangeAndFilter(setPrecoMax)}>
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

          {/* Quilometragem Máxima */}
          <Dropdown value={quilometragemMax} onChange={handleInputChangeAndFilter(setQuilometragemMax)}>
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

        {/* Ano Máximo */}
        <Dropdown value={anoMax} onChange={handleInputChangeAndFilter(setAnoMax)}>
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

        {/* Ordenação */}
        <Dropdown value={ordenacao} onChange={handleInputChangeAndFilter(setOrdenacao)}>
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
          <LupaIcone src={Lupa} alt="Buscar" onClick={handleBuscaClick} style={{ cursor: "pointer" }} />
          <InputBusca
            type="text"
            placeholder="Pesquise por veículo, marca, modelo..."
            value={textoBuscaDigitado}
            onChange={handleBuscaChange}
            onKeyDown={handleEnterPressBusca}
          />
        </CampoBusca>

      </LinhaFiltros>
      <AreaBotaoLimpar>
        <BotaoLimparFiltros onClick={limparFiltros}>
          Limpar filtros
        </BotaoLimparFiltros>
      </AreaBotaoLimpar>

    </ContainerFiltros>
  );
}
