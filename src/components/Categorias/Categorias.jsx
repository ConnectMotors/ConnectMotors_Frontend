import hatch from "./assets/hatch.png";
import sedan from "./assets/sedan.png";
import suv from "./assets/suv.png";
import picape from "./assets/picape.png";
import { CategoriasBG,
         Container,
         Titulo,
         Opcoes
 } from "./Categorias.styles";

 export default function Categorias(){
    return(
        <CategoriasBG>
            <Container>
                <Titulo>Categorias</Titulo>
                <Opcoes>
                    <img src={hatch} alt="Hatch" />
                    <img src={sedan} alt="Sedan" />
                    <img src={suv} alt="SUV" />
                    <img src={picape} alt="Picape" />
                </Opcoes>       
            </Container>
        </CategoriasBG>
    );
}