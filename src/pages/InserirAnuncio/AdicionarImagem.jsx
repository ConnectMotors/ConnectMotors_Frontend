import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import upload from "./assets/upload.svg";
import seta from "./assets/seta.svg";
import divider from "./assets/divider.svg";
import {
  AdicionarImagemBG,
  Container,
  TitlePrincipal,
  TituloSecao,
  AreaUpload,
  LabelUpload,
  InputFile,
  BotoesContainer,
  BotaoVoltar,
  BotaoConcluir,
  Divider,
  PreviewContainer,
  PreviewImage,
  RemoveButton
} from "./AdicionarImagem.styles";
import EtapasNavegacao from "../../components/EtapasNavegacao/EtapasNavegacao";

export default function AdicionarImagem() {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [selectedFiles]);

  function handleAreaClick() {
    document.getElementById("upload").click();
  }

  function handleFileChange(event) {
    const newFiles = Array.from(event.target.files);

    const uniqueFiles = newFiles.filter(
      (file) =>
        !selectedFiles.some(
          (f) => f.name === file.name && f.lastModified === file.lastModified
        )
    );

    const combinedFiles = [...selectedFiles, ...uniqueFiles].slice(0, 8);
    setSelectedFiles(combinedFiles);

    event.target.value = null;
  }

  function handleRemoveImage(index) {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  }

  function handleVoltar() {
    navigate("/anuncio/dados-anuncio");
  }

async function handleConcluir() {
  const dadosVeiculo = JSON.parse(localStorage.getItem("dadosVeiculo"));
  const dadosAnuncio = JSON.parse(localStorage.getItem("anuncio"));
  const token = sessionStorage.getItem("token");

  if (!dadosVeiculo || !dadosAnuncio) {
    alert("Informações incompletas. Preencha todas as etapas.");
    return;
  }

const formData = new FormData();
formData.append('anuncio', new Blob([JSON.stringify(anuncio)], { type: 'application/json' }));
imagens.forEach(imagem => {
  formData.append('imagens', imagem);
});

fetch('http://localhost:8080/anuncios', {
  method: 'POST',
  body: formData,
  headers: {
    'Authorization': `Bearer ${token}`  // Aqui está o essencial
    // NÃO adicione manualmente o Content-Type!
  }
});

    if (response.ok) {
      alert("Anúncio cadastrado com sucesso!");
      localStorage.removeItem("dadosVeiculo");
      localStorage.removeItem("anuncio");
      navigate("/");
    } else {
      const erro = await response.text();
      alert("Erro ao cadastrar anúncio: " + erro);
    }
  } 

  return (
    <AdicionarImagemBG>
      <Container>
        <div>
          <TitlePrincipal>
            <img src={seta} alt="" />
            <h1>INSERIR ANÚNCIO</h1>
          </TitlePrincipal>

          <Divider src={divider} alt="" />
        </div>

        <EtapasNavegacao etapaAtual={3} />

        <TituloSecao>
          <div className="linha" />
          <h2>Adicionar imagem</h2>
          <div className="linha" />
        </TituloSecao>

        <AreaUpload onClick={handleAreaClick}>
          <LabelUpload htmlFor="upload">Arraste ou clique para selecionar imagens (até 8)</LabelUpload>
          <p>Lembre-se que boas imagens são o segredo para uma venda de sucesso!</p>
          <img src={upload} alt="Ícone upload" />
          <InputFile id="upload" type="file" multiple onChange={handleFileChange} />
        </AreaUpload>

        <PreviewContainer>
          {previewUrls.map((url, index) => (
            <div key={index}>
              <PreviewImage src={url} alt={`Preview ${index + 1}`} />
              <RemoveButton onClick={() => handleRemoveImage(index)}>Remover</RemoveButton>
            </div>
          ))}
        </PreviewContainer>

        <BotoesContainer>
          <BotaoVoltar onClick={handleVoltar}>Voltar</BotaoVoltar>
          <BotaoConcluir onClick={handleConcluir}>Concluir anúncio</BotaoConcluir>
        </BotoesContainer>
      </Container>
    </AdicionarImagemBG>
  );
}