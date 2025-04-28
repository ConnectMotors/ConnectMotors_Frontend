import React from "react";
import BotaoLimparFiltros from "../BotaoLimparFiltros/BotaoLimparFiltros";
import { useFiltros } from "../../context/FiltrosContext";
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
} from "../BarraDePesquisa/BarraDePesquisa.styles";

export default function Filtragem({ categorias, faixasPreco, faixasAno, aplicarFiltros }) {
    const {
        textoLoc, setTextoLoc,
        categoriaSelecionada, setCategoriaSelecionada,
        precoMin, setPrecoMin,
        precoMax, setPrecoMax,
        anoMin, setAnoMin,
        anoMax, setAnoMax,
        setMostrarFiltros,
        limparFiltros
    } = useFiltros();

    const aplicar = () => {
        aplicarFiltros();
        setMostrarFiltros(false);
    };

    return (
        <FiltrosWrapper>
            <FiltroLocalizacao>
                <label>Digite seu estado ou cidade</label>
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
            <BotaoLimparFiltros onClick={limparFiltros}>
  Limpar filtros
</BotaoLimparFiltros>
                <div>
                    <BotaoCancelar
                        onClick={() => {
                            limparFiltros();
                            setMostrarFiltros(false);
                        }}
                    >
                        Cancelar
                    </BotaoCancelar>
                    <BotaoAplicar onClick={aplicar}>Aplicar filtros</BotaoAplicar>
                </div>
            </Acoes>
        </FiltrosWrapper>
    );
}
