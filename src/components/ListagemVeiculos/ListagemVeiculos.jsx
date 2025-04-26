import { useEffect, useState } from "react";
import CardAnuncio from "../Card-anuncio/Card-anuncio";
import { ListaCards } from "./ListagemVeiculos.styles";

export default function ListagemVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetch('/Data/veiculos_exemplo.json')
      .then(response => response.json())
      .then(data => setVeiculos(data))
      .catch(error => console.error('Erro ao carregar veículos:', error));
  }, []);

  return (
    <ListaCards className="lista-cards">
      {veiculos.map((veiculo, index) => (
        <li key={index}>
          <CardAnuncio 
            nomeVeiculo={veiculo.nomeVeiculo}
            descricao={veiculo.descricao}
            valor={veiculo.valor}
            anoFabricacao={veiculo.anoFabricacao}
            anoModelo={veiculo.anoModelo}
            km={veiculo.km}
            cidade={veiculo.cidade}
            estado={veiculo.estado}
            fabricante={veiculo.fabricante}
            motor={veiculo.motor}
            versao={veiculo.versao}
            combustivel={veiculo.combustivel}
          />
        </li>
      ))}
    </ListaCards>
  );
}
