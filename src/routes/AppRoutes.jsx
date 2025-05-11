import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Comprar from "../pages/Comprar/Comprar";
import AnuncioDetalhado from "../pages/AnuncioDetalhado/AnuncioDetalhado";
import VenderIntroducao from "../pages/InserirAnuncio/VenderIntroducao";
import DadosVeiculo from "../pages/InserirAnuncio/DadosVeiculo";
import DadosAnuncio from "../pages/InserirAnuncio/DadosAnuncio";
import AdicionarImagem from "../pages/InserirAnuncio/AdicionarImagem";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Cadastro />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/comprar/:tipo" element={<Comprar />} /> 
      <Route path="/anuncio/:id" element={<AnuncioDetalhado />} />
      <Route path="/anuncio" element={<VenderIntroducao />} />
      <Route path="/anuncio/dados-veiculo" element={<DadosVeiculo />} />
      <Route path="/anuncio/dados-anuncio" element={<DadosAnuncio />} />
      <Route path="/anuncio/adicionar-imagem" element={<AdicionarImagem />} />
    </Routes>
  );
}
export default AppRoutes;
