import { StyledBotaoVoltar } from "./BotaoVoltar.styles";

export default function BotaoVoltar({ 
  to = "/", 
  children = "← Voltar", 
  color, 
  backgroundColor, 
  hoverBackgroundColor 
}) {
  return (
    <StyledBotaoVoltar 
      to={to}
      $color={color}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
    >
      {children}
    </StyledBotaoVoltar>
  );
}
