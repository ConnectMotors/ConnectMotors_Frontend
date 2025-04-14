import React, { useState, useEffect } from "react";
import Lupa from './assets/lupaPesquisa.svg';
import FiltroIcone from './assets/filtroIcone.svg';
import HatchIcone from './assets/hatchIcone.svg';
import SedanIcone from './assets/sedanIcone.svg';
import SuvIcone from './assets/suvIcone.svg';
import PicapeIcone from './assets/picapeIcone.svg';
import MotoIcone from './assets/motoIcone.svg';
import Filtragem from '../Filtragem/Filtragem';

import {
    ContainerBg,
    Container,
    Titulo,
    CampoBusca,
    IconeFiltro,
    Input
} from './BarraDePesquisa.styles';

const veiculosMock = [
    {
        id: 1,
        nome: 'Toyota Corolla',
        preco: 85000,
        ano: 2020,
        localizacao: 'Cuiabá',
        categoria: 'Sedan',
        imagem: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        nome: 'Toyota Corolla',
        preco: 135000,
        ano: 2023,
        localizacao: 'Cuiabá',
        categoria: 'Sedan',
        imagem: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        nome: 'Honda Civic',
        preco: 75000,
        ano: 2018,
        localizacao: 'Cuiabá',
        categoria: 'Sedan',
        imagem: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        nome: 'Fiat Strada',
        preco: 60000,
        ano: 2022,
        localizacao: 'Várzea Grande',
        categoria: 'Picape',
        imagem: 'https://via.placeholder.com/150'
    }
]; // Lista mockada (temporária) de veículos com dados como nome, preço, ano, localização etc., usada pra testes enquanto a API não está disponível.

export default function BarraDePesquisa() {
    const [textoPesquisa, setTextoPesquisa] = useState(''); //Guarda o texto que o usuário digita na barra de busca.
    const [mostrarFiltros, setMostrarFiltros] = useState(false); // Controla se os filtros adicionais estão visíveis ou não.
    const [textoLoc, setTextoLoc] = useState(''); //Guarda o texto do campo de localização.
    const categorias = [
        { nome: 'Hatch', icone: HatchIcone },
        { nome: 'Sedan', icone: SedanIcone },
        { nome: 'Suv', icone: SuvIcone },
        { nome: 'Picape', icone: PicapeIcone },
        { nome: 'Moto', icone: MotoIcone },
    ]; //Lista de categorias com nome e ícone — usada nos botões de categoria do filtro.

    const faixasPreco = [
        "R$ 5.000", "R$ 10.000", "R$ 20.000", "R$ 30.000",
        "R$ 40.000", "R$ 50.000", "R$ 60.000", "R$ 80.000", "R$ 100.000", "R$ 150.000", "R$ 200.000"
    ];
    //Listas de faixas que provavelmente serão usadas para dropdowns de preço e ano.
    const faixasAno = [
        "2000", "2005", "2010", "2012", "2015", "2018", "2020", "2022", "2024"
    ];
    //Estados que guardam os valores mínimos e máximos de preço e ano informados pelo usuário.
    const [precoMin, setPrecoMin] = useState('');
    const [precoMax, setPrecoMax] = useState('');
    const [anoMin, setAnoMin] = useState('');
    const [anoMax, setAnoMax] = useState('');

    const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); //Categoria atualmente selecionada nos filtros.
    const [resultadosFiltrados, setResultadosFiltrados] = useState([]); //Resultado final da busca depois de aplicar os filtros.
    const [buscaEfetuada, setBuscaEfetuada] = useState(false); //Indica se já houve uma busca (usado para controlar o estado visual, ex: mostrar resultado ou mensagem "nada encontrado").

    //Se o usuário apagar o campo de busca, os resultados são limpos e a flag de busca é resetada.
    useEffect(() => {
        if (textoPesquisa === '') {
            setResultadosFiltrados([]);
            setBuscaEfetuada(false);
        }
    }, [textoPesquisa]);
    //Aguarda 1 segundo após o usuário digitar para aplicar os filtros automaticamente, mas somente se os filtros não estiverem abertos (!mostrarFiltros).
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (
                textoPesquisa.trim() !== '' ||
                textoLoc.trim() !== '' ||
                categoriaSelecionada ||
                precoMin !== '' ||
                precoMax !== '' ||
                anoMin !== '' ||
                anoMax !== ''
            ) {
                if (!mostrarFiltros) {
                    lidarAplicarFiltros({
                        textoPesquisa,
                        textoLoc,
                        categoriaSelecionada,
                        precoMin,
                        precoMax,
                        anoMin,
                        anoMax
                    });
                }
            }
        }, 1000); // 1 segundo de espera após digitação

        return () => clearTimeout(delayDebounce);
    }, [textoPesquisa, textoLoc]);
    //Cria um objeto de filtros sanitizados, convertendo strings para números e preenchendo valores padrão.
    const lidarAplicarFiltros = (filtros) => {

        const filtrosSeguros = {
            textoPesquisa: filtros.textoPesquisa || "",
            textoLoc: filtros.textoLoc || "",
            categoriaSelecionada: filtros.categoriaSelecionada || "",
            precoMin: parseInt(filtros.precoMin.replace(/\D/g, '')) || 0,
            precoMax: parseInt(filtros.precoMax.replace(/\D/g, '')) || 999999999,
            anoMin: parseInt(filtros.anoMin) || 1900,
            anoMax: parseInt(filtros.anoMax) || 2100
        };
        // Aqui você aplica os filtros ou chama uma API
        //Aplica os filtros ao array veiculosMock, comparando nome, localização, preço, ano e categoria.
        const resultados = veiculosMock.filter((carro) => {
            const preco = carro.preco;
            const ano = carro.ano;

            const nomeCarro = carro.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const nomeFiltro = filtrosSeguros.textoPesquisa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            const localizacaoCarro = carro.localizacao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const localizacaoFiltro = filtrosSeguros.textoLoc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            return (
                nomeCarro.includes(nomeFiltro) &&
                localizacaoCarro.includes(localizacaoFiltro) &&
                preco >= filtrosSeguros.precoMin &&
                preco <= filtrosSeguros.precoMax &&
                ano >= filtrosSeguros.anoMin &&
                ano <= filtrosSeguros.anoMax &&
                (!filtrosSeguros.categoriaSelecionada || carro.categoria === filtrosSeguros.categoriaSelecionada)
            );
        });
        //Atualiza o estado com os resultados filtrados e marca que a busca foi feita.
        setBuscaEfetuada(true);
        setResultadosFiltrados(resultados);
        console.log('Filtros aplicados:', filtros);
    };





    return (
        <ContainerBg>
            <Container>
                <Titulo>Encontre seu veículo</Titulo> {/*Começo da estrutura visual, com título principal da barra de pesquisa.*/}
                {/*
                Barra de busca com ícone de lupa, input de pesquisa, e ícone de filtro.
                Ao apertar Enter, a busca é executada (se houver texto).
                Ao clicar no ícone de filtro, o painel de filtros aparece ou desaparece.*/}
                <CampoBusca>
                    <img src={Lupa} alt="Lupa de pesquisa" />
                    <Input
                        type='search'
                        placeholder="Ex: Corolla, Civic, Uno..."
                        value={textoPesquisa}
                        onChange={(evento) => setTextoPesquisa(evento.target.value)}
                        onKeyDown={(evento) => {
                            if (evento.key === 'Enter') {

                                evento.preventDefault();

                                if (textoPesquisa.trim() === "") return;
                                if (!mostrarFiltros) {
                                    lidarAplicarFiltros({
                                        textoPesquisa,
                                        textoLoc,
                                        categoriaSelecionada,
                                        precoMin,
                                        precoMax,
                                        anoMin,
                                        anoMax
                                    });
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
                        {/*Se mostrarFiltros for true, o componente <Filtragem /> é exibido.]
                        Ele recebe todos os valores e funções necessárias para manipular os filtros.*/}
                {mostrarFiltros && (
                    <Filtragem
                        setTextoPesquisa={setTextoPesquisa}
                        textoPesquisa={textoPesquisa}
                        categorias={categorias}
                        textoLoc={textoLoc}
                        setTextoLoc={setTextoLoc}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        precoMin={precoMin}
                        setPrecoMin={setPrecoMin}
                        precoMax={precoMax}
                        setPrecoMax={setPrecoMax}
                        anoMin={anoMin}
                        setAnoMin={setAnoMin}
                        anoMax={anoMax}
                        setAnoMax={setAnoMax}
                        faixasPreco={faixasPreco}
                        faixasAno={faixasAno}
                        mostrarFiltros={mostrarFiltros}
                        setMostrarFiltros={setMostrarFiltros}
                        onAplicarFiltros={lidarAplicarFiltros}
                        resultadosFiltrados={resultadosFiltrados}
                        setResultadosFiltrados={setResultadosFiltrados}  // << ADICIONADO
                        setBuscaEfetuada={setBuscaEfetuada}  // << ADICIONE ESTA LINHA AQUI
                    />

                )}

                {buscaEfetuada && (
                    <div style={{ padding: '20px' }}>
                        {resultadosFiltrados.length > 0 ? (
                            <>
                                <h3>Resultados:</h3>
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    {resultadosFiltrados.map((carro) => (
                                        <div
                                            key={carro.id}
                                            style={{
                                                border: '1px solid #ccc',
                                                borderRadius: '12px',
                                                padding: '10px',
                                                width: '200px'
                                            }}
                                        >
                                            <img
                                                src={carro.imagem}
                                                alt={carro.nome}
                                                style={{ width: '100%', borderRadius: '8px' }}
                                            />
                                            <h4>{carro.nome}</h4>
                                            <p>Preço: R$ {carro.preco.toLocaleString()}</p>
                                            <p>Ano: {carro.ano}</p>
                                            <p>Local: {carro.localizacao}</p>
                                            <p>Categoria: {carro.categoria}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p style={{ textAlign: 'center', color: '#000' }}>Nenhum veículo encontrado com os filtros aplicados.</p>
                        )}
                    </div>
                )}
            </Container>
        </ContainerBg>
    );
}
