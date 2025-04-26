import { ListaCards } from "./ListagemVeiculos.styles";
import CardAnuncio from "../Card-anuncio/Card-anuncio";

export default function ListagemVeiculos({ veiculos }) {
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
            fotoPrincipal={veiculo.fotoPrincipal}
            fotoSecundaria={veiculo.fotoSecundaria}
          />
        </li>
      ))}
    </ListaCards>
  );
}
