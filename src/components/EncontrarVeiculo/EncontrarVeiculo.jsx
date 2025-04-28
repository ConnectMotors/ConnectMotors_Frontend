import veiculo from "./assets/veiculo.png"
import { EncontrarVeiculoBG,
         Container,
         Conteudo,
         Titulo,
         Button
 } from "./EncontrarVeiculo.styles" 

export default function EncontrarVeiculo(){
    return(
        <EncontrarVeiculoBG>
            <Container>
                <Conteudo>
                    <Titulo>Encontre o veículo perfeito com <span>IA</span></Titulo>
                    <p>Diga o que você precisa em um carro e nossa <span>inteligência artificial</span> encontrará a melhor opção para você. Simples, rápido e sem complicação!</p>
                    <Button>Encontrar meu Veículo</Button>
                </Conteudo>

                <img src={veiculo} alt="" />
            </Container>
        </EncontrarVeiculoBG>
    )
}