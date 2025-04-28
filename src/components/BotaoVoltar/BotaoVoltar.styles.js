import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBotaoVoltar = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $color }) => $color || "var(--branco)"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "var(--azul-4)"};
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor || "var(--azul-3)"};
  }
`;
