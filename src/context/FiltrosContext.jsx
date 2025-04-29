import { createContext, useState, useContext, useEffect } from "react";

const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
  const [veiculosOriginais, setVeiculosOriginais] = useState([]);
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
  const [buscaEfetuada, setBuscaEfetuada] = useState(false);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const [textoPesquisa, setTextoPesquisa] = useState('');
  const [textoLoc, setTextoLoc] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(''); 
  const [tipoSelecionado, setTipoSelecionado] = useState(''); 
  const [precoMax, setPrecoMax] = useState('');
  const [precoMin, setPrecoMin] = useState('');
  const [quilometragemMin, setQuilometragemMin] = useState('');
  const [quilometragemMax, setQuilometragemMax] = useState('');
  const [anoMin, setAnoMin] = useState('');
  const [anoMax, setAnoMax] = useState('');
  const [ordenacao, setOrdenacao] = useState('');

  useEffect(() => {
    fetch('/Data/veiculos_exemplo.json')
      .then((res) => res.json())
      .then((data) => {
        setVeiculosOriginais(data);
      })
      .catch((err) => {
        console.error("Erro ao carregar veículos:", err);
      });
  }, []);


  const aplicarFiltros = () => {
    
    setBuscaEfetuada(prev => !prev); 
  };

  const limparFiltros = () => {
    setTextoPesquisa('');
    setTextoLoc('');
    setCategoriaSelecionada('');
    setTipoSelecionado('');
    setPrecoMin('');
    setPrecoMax('');
    setQuilometragemMin('');
    setQuilometragemMax('');
    setAnoMin('');
    setAnoMax('');
    setOrdenacao('');
    setResultadosFiltrados([]);
    setBuscaEfetuada(false);
  };

  return (
    <FiltrosContext.Provider
      value={{
        veiculosOriginais,
        resultadosFiltrados, setResultadosFiltrados,
        buscaEfetuada, setBuscaEfetuada,
        mostrarFiltros, setMostrarFiltros,
        textoPesquisa, setTextoPesquisa,
        textoLoc, setTextoLoc,
        categoriaSelecionada, setCategoriaSelecionada,
        tipoSelecionado, setTipoSelecionado,
        precoMin, setPrecoMin,
        precoMax, setPrecoMax,
        quilometragemMin, setQuilometragemMin,
        quilometragemMax, setQuilometragemMax,
        anoMin, setAnoMin,
        anoMax, setAnoMax,
        ordenacao, setOrdenacao,
        aplicarFiltros,
        limparFiltros,
      }}
    >
      {children}
    </FiltrosContext.Provider>
  );
};

export const useFiltros = () => useContext(FiltrosContext);
