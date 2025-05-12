import { createContext, useState, useContext } from "react";

const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [textoPesquisa, setTextoPesquisa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [precoMin, setPrecoMin] = useState('');
  const [quilometragemMax, setQuilometragemMax] = useState('');
  const [anoMax, setAnoMax] = useState('');
  const [textoLoc, setTextoLoc] = useState('');

  const limparFiltros = () => {
    setTextoPesquisa('');
    setTipoSelecionado('');
    setCategoriaSelecionada('');
    setPrecoMax('');
    setPrecoMin('');
    setQuilometragemMax('');
    setAnoMax('');
  };
 

  return (
    <FiltrosContext.Provider
      value={{
        mostrarFiltros,
        setMostrarFiltros,
        textoPesquisa,
        setTextoPesquisa,
        categoriaSelecionada,
        setCategoriaSelecionada,
        tipoSelecionado,
        setTipoSelecionado,
        precoMax,
        setPrecoMax,
        precoMin,
        setPrecoMin,
        quilometragemMax,
        setQuilometragemMax,
        anoMax,
        setAnoMax,
        limparFiltros,
        textoLoc,
        setTextoLoc,
      }}
    >
      {children}
    </FiltrosContext.Provider>
  );
};

export const useFiltros = () => useContext(FiltrosContext);
