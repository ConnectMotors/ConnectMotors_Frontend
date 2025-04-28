import React from "react";
import { StyledBotaoLimpar } from "./BotaoLimparFiltros.styles";

export default function BotaoLimparFiltros({ children, ...rest }) {
  return (
    <StyledBotaoLimpar
      $bgColor="var(--branco)"
      $color="var(--cinza-3)"
      $fontSize="14px"
      $fontWeight="600"
      $border="1px solid var(--cinza-2)"
      $hoverBgColor="var(--cinza-1)"
      $hoverColor="var(--cinza-4)"
      {...rest}
    >
      {children}
    </StyledBotaoLimpar>
  );
}
