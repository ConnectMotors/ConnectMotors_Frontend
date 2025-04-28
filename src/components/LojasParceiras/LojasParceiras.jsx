import parceiro1 from "./assets/parceiro1.svg"
import parceiro2 from "./assets/parceiro2.svg"
import parceiro3 from "./assets/parceiro3.svg"
import parceiro4 from "./assets/parceiro4.svg"
import parceiro5 from "./assets/parceiro5.svg"
import parceiro6 from "./assets/parceiro6.svg"
import parceiro7 from "./assets/parceiro7.svg"
import { Titulo,
         Container,
         Parceiros,
         LojasParceirasBG
 } from "./LojasParceiras.styles"

export default function LojasParceiras(){
    return(
        <LojasParceirasBG>
            <Container>
              <Titulo>Lojas parceiras</Titulo>

              <Parceiros>
                <img src={parceiro1} alt="" />
                <img src={parceiro2} alt="" />
                <img src={parceiro3} alt="" />
                <img src={parceiro4} alt="" />
                <img src={parceiro5} alt="" />
                <img src={parceiro6} alt="" />
                <img src={parceiro7} alt="" />
              </Parceiros>
              
            </Container>
        </LojasParceirasBG>
    )
}