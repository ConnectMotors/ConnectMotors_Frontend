import React, { useState, useEffect } from 'react';
import OfertaDestaque from "../../components/OfertaDestaque/OfertaDestaque"
import banner from "./assets/banner.png"
import {Banner, ContainerBanner} from "./Home.styles"
import LojasParceiras from '../../components/LojasParceiras/LojasParceiras';
import Servicos from '../../components/Servicos/Servicos';
import EncontrarVeiculo from '../../components/EncontrarVeiculo/EncontrarVeiculo';
import BarraDePesquisa from '../../components/BarraDePesquisa/BarraDePesquisa';
import Categorias from '../../components/Categorias/Categorias';

export default function Home(){
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/anuncios')
      .then(response => response.json())
      .then(data => setVeiculos(data))
      .catch(error => console.error('Erro ao carregar veículos:', error));
  }, []);
  
    return(
        <div>
          <ContainerBanner>
            <Banner src={banner} alt="" />
            <BarraDePesquisa  /> 
          </ContainerBanner>          
            <OfertaDestaque veiculos={veiculos} />
            <EncontrarVeiculo />
            <Categorias />
            <Servicos />
            <LojasParceiras />   
        </div>
    )
}