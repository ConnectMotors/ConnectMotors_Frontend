import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CardAnuncio from '../Card-anuncio/Card-anuncio';
import {
  OfertaBg,
  Container,
  Topo,
  Titulo,
  CarrosselWrapper,
  Carrossel,
  Grid,
  NavButton
} from './OfertaDestaque.styles';

export default function OfertaDestaque({ veiculos }) {
  const gridRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const cardsPerPage = 1; 
  const totalPages = Math.ceil(veiculos.length / cardsPerPage);

  const scrollToPage = (pageIndex) => {
    const grid = gridRef.current;
    if (!grid) return;

    const firstCard = grid.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 20; // 20px gap
    const scrollAmount = cardWidth * pageIndex;

    grid.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });

    setActivePage(pageIndex);
  };

  const scroll = (direction) => {
    let nextPage;
    if (direction === 'left') {
      nextPage = activePage === 0 ? totalPages - 1 : activePage - 1;
    } else {
      nextPage = activePage === totalPages - 1 ? 0 : activePage + 1;
    }

    scrollToPage(nextPage);
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const firstCard = grid.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 20;
      const scrollLeft = grid.scrollLeft;
      const pageWidth = cardWidth * cardsPerPage;

      const index = Math.round(scrollLeft / pageWidth);
      setActivePage(index);
    };

    grid.addEventListener('scroll', handleScroll);
    return () => grid.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <OfertaBg>
      <Container>
        <Topo>
          <Titulo>Ofertas em destaque</Titulo>
        </Topo>

        <CarrosselWrapper>
          <NavButton left onClick={() => scroll('left')}>
            <FiChevronLeft size={32} />
          </NavButton>

          <Carrossel>
            <Grid ref={gridRef}>
              {veiculos.map((item) => (
                <CardAnuncio
                  key={item.id}
                  id={item.id}
                  nomeVeiculo={item.nomeVeiculo}
                  fabricante={item.fabricante}
                  valor={item.valor}
                  anoFabricacao={item.anoFabricacao}
                  anoModelo={item.anoModelo}
                  km={item.km}
                  cidade={item.cidade}
                  estado={item.estado}
                  motor={item.motor}
                  versao={item.versao}
                  combustivel={item.combustivel}
                  fotoPrincipal={item.fotoPrincipal}
                />
              ))}
            </Grid>
          </Carrossel>

          <NavButton right onClick={() => scroll('right')}>
            <FiChevronRight size={32} />
          </NavButton>
        </CarrosselWrapper>
      </Container>
    </OfertaBg>
  );
}
