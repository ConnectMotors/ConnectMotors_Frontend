import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFiltros } from "../../context/FiltrosContext";
import Lupa from './assets/lupaPesquisa.svg';
import FiltroIcone from './assets/filtroIcone.svg';
import HatchIcone from './assets/hatchIcone.svg';
import SedanIcone from './assets/sedanIcone.svg';
import SuvIcone from './assets/suvIcone.svg';
import PicapeIcone from './assets/picapeIcone.svg';
import MotoIcone from './assets/motoIcone.svg';
import FiltragemHome from '../Filtragem/FiltragemHome';
import {
    ContainerBg,
    Container,
    Titulo,
    CampoBusca,
    IconeFiltro,
    Input,
    Wrapper
} from './BarraDePesquisa.styles';

export default function BarraDePesquisa() {
    const navigate = useNavigate();

const {
  textoPesquisa, setTextoPesquisa,
  textoLoc, categoriaSelecionada,
  precoMin, precoMax,
  anoMin, anoMax,
  mostrarFiltros, setMostrarFiltros,
  tipoSelecionado,
  quilometragemMin,
  quilometragemMax
} = useFiltros();

    const categorias = [
        { nome: 'HATCH', icone: HatchIcone },
        { nome: 'SEDAN', icone: SedanIcone },
        { nome: 'SUV', icone: SuvIcone },
        { nome: 'PICAPE', icone: PicapeIcone },
        { nome: 'MOTO', icone: MotoIcone },
    ];

    const faixasPreco = [
        "R$ 5.000", "R$ 10.000", "R$ 20.000", "R$ 30.000",
        "R$ 40.000", "R$ 50.000", "R$ 60.000", "R$ 80.000", "R$ 100.000", "R$ 150.000", "R$ 200.000"
    ];

    const faixasAno = [
        "2000", "2005", "2010", "2012", "2015", "2018", "2020", "2022", "2024"
    ];

    const redirecionarComFiltros = async () => {
    const filtrosSeguros = {
        textoPesquisa: textoPesquisa || "",
        textoLoc: textoLoc || "",
        categoriaSelecionada: categoriaSelecionada || "",
        tipoSelecionado: tipoSelecionado || "",
        precoMin: parseInt((precoMin || "0").replace(/\D/g, '')) || 0,
        precoMax: parseInt((precoMax || "999999999").replace(/\D/g, '')) || 999999999,
        quilometragemMin: quilometragemMin || "",
        quilometragemMax: quilometragemMax || "",
        anoMin: parseInt(anoMin) || 1900,
        anoMax: parseInt(anoMax) || 2100
    };

    const params = new URLSearchParams();
    if (filtrosSeguros.textoPesquisa?.trim()) params.append("modelo", filtrosSeguros.textoPesquisa);
    if (filtrosSeguros.tipoSelecionado?.trim()) params.append("tipoVeiculo", filtrosSeguros.tipoSelecionado);
    if (filtrosSeguros.categoriaSelecionada?.trim()) params.append("carroceria", filtrosSeguros.categoriaSelecionada);
    if (filtrosSeguros.precoMin?.toString().trim()) params.append("precoMin", filtrosSeguros.precoMin);
    if (filtrosSeguros.precoMax?.toString().trim()) params.append("precoMax", filtrosSeguros.precoMax);
    if (filtrosSeguros.quilometragemMax?.toString().trim()) params.append("quilometragemMax", filtrosSeguros.quilometragemMax);
    if (filtrosSeguros.anoMax?.toString().trim()) params.append("anoModelo", filtrosSeguros.anoMax);

    try {
        const response = await fetch(`http://localhost:8080/anuncios/filtros?${params.toString()}`);
        if (!response.ok) throw new Error(`Erro ao buscar: ${response.status}`);
        const data = await response.json();
        navigate(`/comprar?${params.toString()}`); // <-- alterado aqui
    } catch (error) {
        console.error("Erro ao buscar veículos no backend:", error);
    }
};

    return (
        <Wrapper>
            <ContainerBg>
                <Container>
                    <Titulo>Encontre seu veículo</Titulo>
                    <CampoBusca>
                        <img src={Lupa} alt="Lupa de pesquisa" />
                        <Input
                            type="search"
                            placeholder="Ex: Civic, Corolla, Palio..."
                            value={textoPesquisa}
                            onChange={(e) => setTextoPesquisa(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    if (textoPesquisa.trim() !== "") {
                                        redirecionarComFiltros();
                                    }
                                }
                            }}
                        />
                        <IconeFiltro
                            src={FiltroIcone}
                            alt="Ícone de filtro"
                            onClick={() => setMostrarFiltros(!mostrarFiltros)}
                        />
                    </CampoBusca>
                </Container>
            </ContainerBg>

            {mostrarFiltros && (
                <div className="dropdownFiltros">
                    <FiltragemHome
                        categorias={categorias}
                        faixasPreco={faixasPreco}
                        faixasAno={faixasAno}
                        aplicarFiltros={redirecionarComFiltros}
                    />
                </div>
            )}
        </Wrapper>
    );
}
