import React, { useState, useEffect } from "react";
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
    const [veiculos, setVeiculos] = useState([]);
    const navigate = useNavigate();

    const {
        textoPesquisa, setTextoPesquisa,
        textoLoc, categoriaSelecionada,
        precoMin, precoMax,
        anoMin, anoMax,
        setResultadosFiltrados,
        setBuscaEfetuada,
        mostrarFiltros, setMostrarFiltros
    } = useFiltros();

    const categorias = [
        { nome: 'Hatch', icone: HatchIcone },
        { nome: 'Sedan', icone: SedanIcone },
        { nome: 'Suv', icone: SuvIcone },
        { nome: 'Picape', icone: PicapeIcone },
        { nome: 'Moto', icone: MotoIcone },
    ];

    const faixasPreco = [
        "R$ 5.000", "R$ 10.000", "R$ 20.000", "R$ 30.000",
        "R$ 40.000", "R$ 50.000", "R$ 60.000", "R$ 80.000", "R$ 100.000", "R$ 150.000", "R$ 200.000"
    ];

    const faixasAno = [
        "2000", "2005", "2010", "2012", "2015", "2018", "2020", "2022", "2024"
    ];

    useEffect(() => {
        fetch('/Data/veiculos_exemplo.json')
            .then((response) => response.json())
            .then((data) => setVeiculos(data))
            .catch((error) => {
                console.error("Erro ao carregar veículos:", error);
            });
    }, []);

    const lidarAplicarFiltros = () => {
        const filtrosSeguros = {
            textoPesquisa: textoPesquisa || "",
            textoLoc: textoLoc || "",
            categoriaSelecionada: categoriaSelecionada || "",
            precoMin: parseInt((precoMin || "0").replace(/\D/g, '')) || 0,
            precoMax: parseInt((precoMax || "999999999").replace(/\D/g, '')) || 999999999,
            anoMin: parseInt(anoMin) || 1900,
            anoMax: parseInt(anoMax) || 2100
        };

        const resultados = veiculos.filter((veiculo) => {
            const preco = veiculo.valor;
            const ano = veiculo.anoFabricacao;
            const nomeVeiculo = `${veiculo.fabricante} ${veiculo.nomeVeiculo}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const nomeFiltro = filtrosSeguros.textoPesquisa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const localizacaoVeiculo = `${veiculo.cidade} ${veiculo.estado}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const localizacaoFiltro = filtrosSeguros.textoLoc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            return (
                nomeVeiculo.includes(nomeFiltro) &&
                localizacaoVeiculo.includes(localizacaoFiltro) &&
                preco >= filtrosSeguros.precoMin &&
                preco <= filtrosSeguros.precoMax &&
                ano >= filtrosSeguros.anoMin &&
                ano <= filtrosSeguros.anoMax &&
                (!filtrosSeguros.categoriaSelecionada || veiculo.categoria.toLowerCase() === filtrosSeguros.categoriaSelecionada.toLowerCase())
            );
        });

        setResultadosFiltrados(resultados);
        setBuscaEfetuada(true);
        requestAnimationFrame(() => {
            navigate('/comprar');
        });
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
                                    if (textoPesquisa.trim() === "") return;
                                    if (!mostrarFiltros) {
                                        lidarAplicarFiltros();
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
                        aplicarFiltros={lidarAplicarFiltros}
                    />
                </div>
            )}
        </Wrapper>
    );
}
