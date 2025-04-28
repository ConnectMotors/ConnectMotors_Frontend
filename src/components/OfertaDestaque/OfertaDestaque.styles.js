import styled from 'styled-components';

export const OfertaBg = styled.section`
  position: relative;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background-color: var(--cinza-claro);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1400px) {
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const Topo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const CarrosselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Carrossel = styled.div`
  width: 100%;
  overflow: visible;
`;

export const Grid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 10px;
  padding-bottom: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 6px;

  ${props => props.left && `
    left: -50px;
  `}
  ${props => props.right && `
    right: -50px;
  `}

  @media (max-width: 768px) {
    ${props => props.left && `
      left: -30px;
    `}
    ${props => props.right && `
      right: -30px;
    `}
  }
`;
