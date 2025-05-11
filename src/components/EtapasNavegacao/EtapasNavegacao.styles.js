import styled from "styled-components";

export const LinhaEtapas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  position: relative;
`;

export const Etapas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
  color: #777;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 14px;
    left: -96px;
    width: 128px;
    height: 2px;
    background-color: #ccc;
    z-index: 0;
  }

  &:first-child::before {
    display: none;
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Etapa = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background: #fff;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

export const EtapaAtiva = styled(Etapa)`
  background: #001aff;
  color: #fff;
  border-color: #001aff;
`;