import React from "react";
import imagem_capa from "./assets/imagem_capa.png";
import iconeLoc from "./assets/iconeLoc.svg";
import divisoria from "./assets/divisoria.svg";
import {
  Card,
  Conteudo,
  Titulo,
  Detalhes,
  Valor,
  InfoExtra,
  Localizacao,
} from "./Card-anuncio.styles";

export default function CardAnuncio({ nomeVeiculo, fabricante, valor, anoFabricacao, anoModelo, km, cidade, estado, motor, versao, combustivel }) {
  return (
    <Card>
      <div>
        <img src={imagem_capa} alt="imagem do post" />
      </div>
      <Conteudo>
        <Titulo>{fabricante} {nomeVeiculo}</Titulo> 
        <Detalhes>{motor} {versao} {combustivel}</Detalhes>
        <Valor>R$ {valor.toLocaleString()}</Valor>
        <InfoExtra>
          <p>{anoFabricacao}/{anoModelo}</p>
          <p>{km} km</p>
        </InfoExtra>
        <img src={divisoria} alt="" />
        <Localizacao>
          <img src={iconeLoc} alt="icone localização" />
          <p>{cidade} - {estado}</p>
        </Localizacao>
      </Conteudo>
    </Card>
  );
}
