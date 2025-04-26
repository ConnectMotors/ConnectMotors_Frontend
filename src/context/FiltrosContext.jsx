import { createContext, useState, useContext } from "react";

const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
  const [buscaEfetuada, setBuscaEfetuada] = useState(false);
  const [textoPesquisa, setTextoPesquisa] = useState(''); // <-- Adicionado

  return (
    <FiltrosContext.Provider
      value={{
        resultadosFiltrados,
        setResultadosFiltrados,
        buscaEfetuada,
        setBuscaEfetuada,
        textoPesquisa,
        setTextoPesquisa, // <-- Adicionado
      }}
    >
      {children}
    </FiltrosContext.Provider>
  );
};

export const useFiltros = () => useContext(FiltrosContext);
