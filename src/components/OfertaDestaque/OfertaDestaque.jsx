import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CardAnuncio from '../Card-anuncio/Card-anuncio';
import {
  OfertaBg,
  Container,
  Topo,
  Titulo,
  Indicators,
  Dot,
  Carrossel,
  Grid,
  NavButton
} from './OfertaDestaque.styles';

export default function OfertaDestaque() {
  const gridRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const totalCards = 15;
  const cardsPerPage = 5;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const scrollToPage = (pageIndex) => {
    const grid = gridRef.current;
    if (!grid) return;

    const firstCard = grid.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 20; // largura + gap
    const scrollAmount = cardWidth * cardsPerPage * pageIndex;

    grid.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });

    setActivePage(pageIndex);
  };

  const scroll = (direction) => {
    const nextPage = direction === 'left'
      ? Math.max(0, activePage - 1)
      : Math.min(totalPages - 1, activePage + 1);

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
          <Indicators>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Dot
                key={index}
                active={index === activePage}
                onClick={() => scrollToPage(index)}
              />
            ))}
          </Indicators>
        </Topo>

        <Carrossel>
          <NavButton left onClick={() => scroll('left')}>
            <FiChevronLeft size={32} />
          </NavButton>

          <Grid ref={gridRef}>
            {Array.from({ length: totalCards }).map((_, index) => (
              <CardAnuncio key={index} />
            ))}
          </Grid>

          <NavButton right onClick={() => scroll('right')}>
            <FiChevronRight size={32} />
          </NavButton>
        </Carrossel>
      </Container>
    </OfertaBg>
  );
}
