import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DadosAnuncioBG,
  Container,
  TitlePrincipal,
  TituloSecao,
  Formulario,
  InputGroup,
  Label,
  Input,
  TextArea,
  BotoesContainer,
  BotaoVoltar,
  BotaoContinuar,
  Divider
} from "./DadosAnuncio.styles";
import seta from "./assets/seta.svg";
import divider from "./assets/divider.svg";
import EtapasNavegacao from "../../components/EtapasNavegacao/EtapasNavegacao";

export default function DadosAnuncio() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    const anuncio = JSON.parse(localStorage.getItem("anuncio"));
    if (anuncio) {
      setNome(anuncio.nome || "");
      setTelefone(anuncio.telefone || "");
      setValor(anuncio.preco || "");
      setDescricao(anuncio.descricao || "");
    }
  }, []);

  function handleContinuar() {
  if (!nome || !telefone || !valor) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const dadosAnuncio = {
    nome,
    telefone,
    preco: valor,
    descricao,
  };

  localStorage.setItem("anuncio", JSON.stringify(dadosAnuncio));
  navigate("/anuncio/adicionar-imagem");
}

  function handleVoltar() {
    navigate("/anuncio/dados-veiculo");
  }

  return (
    <DadosAnuncioBG>
      <Container>
        <div>
          <TitlePrincipal>
            <img src={seta} alt="" />
            <h1>INSERIR ANÚNCIO</h1>
          </TitlePrincipal>

          <Divider src={divider} alt="" />
        </div>

        <EtapasNavegacao etapaAtual={2} />

        <TituloSecao>
          <div className="linha" />
          <h2>Dados do anúncio</h2>
          <div className="linha" />
        </TituloSecao>

        <Formulario>
          <InputGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Telefone</Label>
            <Input
              type="text"
              placeholder="(65) 9 9999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Valor</Label>
            <Input
              type="text"
              placeholder="R$ Ex: 100.000"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </InputGroup>

          <InputGroup style={{ gridColumn: "1 / -1" }}>
            <Label>Descrição</Label>
            <TextArea
              placeholder="Adicione informações complementares sobre seu veículo"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </InputGroup>

          <BotoesContainer>
            <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
            <BotaoContinuar onClick={handleContinuar}>Continuar</BotaoContinuar>
          </BotoesContainer>
        </Formulario>
      </Container>
    </DadosAnuncioBG>
  );
}
