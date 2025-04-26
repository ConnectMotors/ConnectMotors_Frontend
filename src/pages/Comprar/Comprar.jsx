import { useEffect, useState } from "react";
import { useFiltros } from "../../context/FiltrosContext";
import { ContainerComprar, TituloPagina } from "./Comprar.styles";
import ListagemVeiculos from "../../components/ListagemVeiculos/ListagemVeiculos";

export default function Comprar() {
  const { resultadosFiltrados, buscaEfetuada } = useFiltros();
  const [todosVeiculos, setTodosVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!buscaEfetuada) {
      fetch('/Data/veiculos_exemplo.json')
        .then((res) => res.json())
        .then((data) => {
          setTodosVeiculos(data);
          setCarregando(false);
        })
        .catch((err) => {
          console.error("Erro ao carregar veículos:", err);
          setCarregando(false);
        });
    } else {
      setCarregando(false);
    }
  }, [buscaEfetuada]);

  const veiculos = resultadosFiltrados.length > 0 ? resultadosFiltrados : todosVeiculos;

  if (carregando) {
    return <p>Carregando veículos...</p>;
  }

  return (
    <ContainerComprar>
      <TituloPagina>Veículos encontrados</TituloPagina>

      {buscaEfetuada && resultadosFiltrados.length === 0 ? (
        <p>Este veículo não foi encontrado.</p>
      ) : (
        <ListagemVeiculos veiculos={veiculos} />
      )}
    </ContainerComprar>
  );
}
