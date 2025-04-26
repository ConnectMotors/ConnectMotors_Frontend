import React, { useEffect, useState } from "react";

import {
    FiltrosWrapper,
    LinhaDivisoria,
    FiltroLocalizacao,
    FiltroCategoria,
    FiltroPreco,
    FiltroAno,
    CategoriaBotao,
    Select,
    Input,
    Acoes,
    BotaoAplicar,
    BotaoCancelar,
    BotaoLimpar
} from "../BarraDePesquisa/BarraDePesquisa.styles";

export default function Filtragem({
    setTextoPesquisa,          // Função para atualizar o texto da busca
    textoPesquisa,             // Texto digitado na busca
    categoriaSelecionada,      // Categoria selecionada atualmente
    setCategoriaSelecionada,   // Função para alterar a categoria selecionada
    categorias,                // Lista de categorias disponíveis
    textoLoc,                  // Texto da localização digitado
    setTextoLoc,               // Função para alterar o texto da localização
    precoMin, precoMax,        // Valores mínimo e máximo de preço
    setPrecoMin, setPrecoMax,  // Funções para alterar os valores de preço
    anoMin, anoMax,            // Anos mínimo e máximo
    setAnoMin, setAnoMax,      // Funções para alterar os anos
    faixasPreco,               // Lista de valores de preço para os selects
    faixasAno,                 // Lista de anos para os selects
    mostrarFiltros,            // Booleano que indica se a área de filtros está visível
    setMostrarFiltros,         // Função para alterar a visibilidade dos filtros
    onAplicarFiltros,          // Função a ser chamada quando filtros forem aplicados
    setResultadosFiltrados,    // Função para alterar os resultados após filtro
    setBuscaEfetuada           // Booleano indicando se a busca foi feita
}) {
    // Se mostrarFiltros for false, retorna null (ou seja, o componente não será renderizado)
    if (!mostrarFiltros) return null;
       // Função que limpa todos os filtros e resultados
    const limparFiltros = () => {
        setTextoPesquisa('');        // Limpa o texto da pesquisa
        setTextoLoc('');             // Limpa o texto da localização
        setPrecoMin('');             // Limpa o valor de preço mínimo
        setPrecoMax('');             // Limpa o valor de preço máximo
        setAnoMin('');               // Limpa o ano mínimo
        setAnoMax('');               // Limpa o ano máximo
        setCategoriaSelecionada(null); // Remove a categoria selecionada

        setResultadosFiltrados([]);  // Limpa os resultados filtrados
        setBuscaEfetuada(false);     // Marca como se a busca ainda não tivesse sido feita
    };
    // Função que aplica os filtros informados
    const aplicarFiltros = () => {
        // Verifica se pelo menos um filtro foi preenchido
        const algumFiltroPreenchido =
        textoPesquisa.trim() !== '' ||
        textoLoc.trim() !== '' ||
        categoriaSelecionada ||
        precoMin !== '' ||
        precoMax !== '' ||
        anoMin !== '' ||
        anoMax !== '';

    // Se nenhum filtro foi preenchido, mostra um alerta e não faz nada
    if (!algumFiltroPreenchido) {
        alert("Preencha pelo menos um filtro para poder aplicar filtros.");
        return;
    }
        // Chama a função recebida por props com os filtros atuais
        onAplicarFiltros({
            textoPesquisa,
            textoLoc,
            categoriaSelecionada,
            precoMin,
            precoMax,
            anoMin,
            anoMax,
        });
    };


    return (
        <>
            <FiltrosWrapper>
                <FiltroLocalizacao>
                    <label>Digite sua seu estado ou cidade</label>
                    <Input
                        placeholder="Digite aqui..."
                        value={textoLoc}
                        onChange={(e) => setTextoLoc(e.target.value)}
                    />
                </FiltroLocalizacao>
                <LinhaDivisoria />

                <FiltroCategoria>
                    <h4>Categoria</h4>
                    <div>
                        {categorias.map((categoria) => (
                            <CategoriaBotao
                                key={categoria.nome}
                                onClick={() => setCategoriaSelecionada(categoria.nome)}
                                style={{
                                    border: categoriaSelecionada === categoria.nome ? '2px solid #007bff' : '1px solid #ccc',
                                    backgroundColor: categoriaSelecionada === categoria.nome ? '#e6f0ff' : 'transparent',
                                }}
                            >
                                <img src={categoria.icone} alt={categoria.nome} />
                                <span>{categoria.nome}</span>
                            </CategoriaBotao>
                        ))}
                    </div>
                </FiltroCategoria>
                <LinhaDivisoria />

                <FiltroPreco>
                    <h4>Preço</h4>
                    <div>
                        <Select value={precoMin} onChange={(e) => setPrecoMin(e.target.value)}>
                            <option value="">De</option>
                            {faixasPreco.map((preco, index) => (
                                <option key={index} value={preco}>{preco}</option>
                            ))}
                        </Select>
                        <Select value={precoMax} onChange={(e) => setPrecoMax(e.target.value)}>
                            <option value="">Até</option>
                            {faixasPreco.map((preco, index) => (
                                <option key={index} value={preco}>{preco}</option>
                            ))}
                        </Select>
                    </div>
                </FiltroPreco>
                <LinhaDivisoria />

                <FiltroAno>
                    <h4>Ano</h4>
                    <div>
                        <Select value={anoMin} onChange={(e) => setAnoMin(e.target.value)}>
                            <option value="">De</option>
                            {faixasAno.map((ano, index) => (
                                <option key={index} value={ano}>{ano}</option>
                            ))}
                        </Select>
                        <Select value={anoMax} onChange={(e) => setAnoMax(e.target.value)}>
                            <option value="">Até</option>
                            {faixasAno.map((ano, index) => (
                                <option key={index} value={ano}>{ano}</option>
                            ))}
                        </Select>
                    </div>
                </FiltroAno>

                <Acoes>
                    <BotaoLimpar onClick={limparFiltros}>Limpar filtros</BotaoLimpar>
                    <div>
                        <BotaoCancelar
                            onClick={() => {
                                setMostrarFiltros(false);
                                setResultadosFiltrados([]); // <- limpa os cards
                                setBuscaEfetuada(false);
                                limparFiltros();    // <- oculta o bloco de resultados
                            }}
                        >
                            Cancelar
                        </BotaoCancelar>
                        <BotaoAplicar onClick={aplicarFiltros}>Aplicar filtros</BotaoAplicar>
                    </div>
                </Acoes>
            </FiltrosWrapper>


        </>
    );
}
