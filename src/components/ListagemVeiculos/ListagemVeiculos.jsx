import { ContainerBase, ListaCards } from "./ListagemVeiculos.styles";
import CardAnuncio from "../Card-anuncio/Card-anuncio";

export default function ListagemVeiculos({ veiculos = [] }) {
  return (
    <ContainerBase>
      <ListaCards>
        {veiculos.map((veiculo, index) => {
          if (!veiculo.carro && !veiculo.moto) return null;
          const isCarro = !!veiculo.carro;
          const dados = isCarro ? veiculo.carro : veiculo.moto;

          return (
            <li key={index}>
              <CardAnuncio
                id={veiculo.id}
                nomeVeiculo={dados?.modelo?.nome}
                fabricante={dados?.marca?.nome}
                valor={Number(veiculo.preco)}
                anoFabricacao={dados?.anoFabricacao}
                anoModelo={dados?.anoModelo}
                km={veiculo.quilometragem}
                cidade={veiculo.localidade}
                estado={veiculo.uf}
                motor={dados?.motor}
                versao={dados?.versao}
                combustivel={dados?.combustivel}
                fotoPrincipal={`http://localhost:8080${veiculo.imagensPaths?.[0] || ""}`}
              />
            </li>
          );
        })}
      </ListaCards>
    </ContainerBase>
  );
}
