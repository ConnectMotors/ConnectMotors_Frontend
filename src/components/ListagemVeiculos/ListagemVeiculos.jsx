import { ContainerBase, ListaCards } from "./ListagemVeiculos.styles";
import CardAnuncio from "../Card-anuncio/Card-anuncio";

export default function ListagemVeiculos({ veiculos = [] }) {
  return (
    <ContainerBase>
      <ListaCards>
        {veiculos.map((veiculo, index) => (
          <li key={index}>
            <CardAnuncio
              id={veiculo.id}
              nomeVeiculo={veiculo.carro?.modelo?.nome}
              fabricante={veiculo.carro?.marca?.nome}
              valor={Number(veiculo.preco)}
              anoFabricacao={veiculo.carro?.anoFabricacao}
              anoModelo={veiculo.carro?.anoModelo}
              km={veiculo.quilometragem}
              cidade={veiculo.localidade}
              estado={veiculo.uf}
              motor={veiculo.carro?.motor}
              versao={veiculo.carro?.versao}
              combustivel={veiculo.carro?.combustivel}
              fotoPrincipal={`http://localhost:8080${veiculo.imagensPaths?.[0] || ""}`}
            />
          </li>
        ))}
      </ListaCards>
    </ContainerBase>
  );
}
