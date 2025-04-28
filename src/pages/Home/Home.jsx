import React, { useState, useEffect } from 'react';
import OfertaDestaque from "../../components/OfertaDestaque/OfertaDestaque"
import banner from "./assets/banner.png"
import {Banner} from "./Home.styles"
import LojasParceiras from '../../components/LojasParceiras/LojasParceiras';

export default function Home(){

  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetch('/Data/veiculos_exemplo.json')
      .then(response => response.json())
      .then(data => setVeiculos(data))
      .catch(error => console.error('Erro ao carregar veículos:', error));
  }, []);
  
    return(
        <div>
            <Banner src={banner} alt="" />
           
            <OfertaDestaque veiculos={veiculos} />

            <LojasParceiras />
            
        </div>
    )

}