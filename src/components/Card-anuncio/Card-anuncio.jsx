import React from "react";
import imagem_capa from "./assets/imagem_capa.png";
import iconeLoc from "./assets/iconeLoc.svg";
import divisoria from "./assets/divisoria.svg";
import {
  Card,
  Conteudo,
  Titulo,
  Descricao,
  Valor,
  InfoExtra,
  Localizacao,
} from "./Card-anuncio.styles";

export default function CardAnuncio() {
  return (
    <Card>
      <div>
        <img src={imagem_capa} alt="imagem do post" />
      </div>
      <Conteudo>
        <Titulo>Nome do veículo</Titulo>
        <Descricao>descrição breve do anúncio</Descricao>
        <Valor>Valor</Valor>
        <InfoExtra>
          <p>ano fab/model</p>
          <p>quilometragem</p>
        </InfoExtra>
        <img src={divisoria} alt="" />
        <Localizacao>
          <img src={iconeLoc} alt="" />
          <p>localização</p>
        </Localizacao>
      </Conteudo>
      
    </Card>
  );
}
