import styled from "styled-components";

export const StyledBotaoLimpar = styled.button`
  background-color: ${(props) => props.$bgColor || "transparent"};
  color: ${(props) => props.$color || "var(--cinza-4)"};
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: ${(props) => props.$fontWeight || "600"};
  border: ${(props) => props.$border || "1px solid var(--cinza-2)"};
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.$hoverBgColor || "var(--cinza-1)"};
    color: ${(props) => props.$hoverColor || "var(--cinza-5)"};
    filter: brightness(0.98); 
  }
`;
