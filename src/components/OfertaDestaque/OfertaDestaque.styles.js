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
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Indicators = styled.div`
  display: flex;
  gap: 8px;
`;

export const Dot = styled.div`
  width: ${({ active }) => (active ? '16px' : '8px')};
  height: 8px;
  border-radius: 999px;
  background-color: ${({ active }) => (active ? '#2563eb' : '#ccc')};
  transition: all 0.3s ease;
`;

export const Carrossel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Grid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 10px;
  padding-bottom: 10px;
  scrollbar-width: none;
  /* scroll-behavior: smooth; */

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
    left: 0;
    margin-left: 10px;
  `}
  ${props => props.right && `
    right: 0;
    margin-right: 10px;
  `}
`;
