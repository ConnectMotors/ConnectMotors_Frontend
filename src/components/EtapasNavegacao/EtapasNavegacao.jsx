import React from "react";
import { LinhaEtapas, Etapas, Etapa, EtapaAtiva } from "./EtapasNavegacao.styles"; // ajuste o caminho

export default function EtapasNavegacao({ etapaAtual }) {
  return (
    <LinhaEtapas>
      <Etapas>
        {etapaAtual >= 1 ? <EtapaAtiva>1</EtapaAtiva> : <Etapa>1</Etapa>}
        <p>Dados do veículo</p>
      </Etapas>
      <Etapas>
        {etapaAtual >= 2 ? <EtapaAtiva>2</EtapaAtiva> : <Etapa>2</Etapa>}
        <p>Dados do anúncio</p>
      </Etapas>
      <Etapas>
        {etapaAtual >= 3 ? <EtapaAtiva>3</EtapaAtiva> : <Etapa>3</Etapa>}
        <p>Adicionar imagem</p>
      </Etapas>
    </LinhaEtapas>
  );
}
