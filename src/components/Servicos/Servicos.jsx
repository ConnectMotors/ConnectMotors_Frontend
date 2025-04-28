import IAicon from "./assets/IAicon.svg"
import verifiedIcon from "./assets/verifiedIcon.svg"
import vendaIcon from "./assets/vendaIcon.svg"
import { ServicosBG,
         Container,
         NossosServicos,
         Card,
         Titulo
 } from "./Servicos.styles"

export default function Servicos(){
    return(
        <ServicosBG>
            <Container>
                <Titulo>Serviços</Titulo>

                <NossosServicos>

                    <Card>
                        <img src={IAicon} alt="" />
                        <h3>Encontre seu veículo com IA</h3>
                        <p>Nosso chat com inteligência artificial analisa suas preferências e recomenda o veículo perfeito para você. Experimente agora e descubra sua melhor escolha!</p>
                    </Card>

                    <Card>
                        <img src={verifiedIcon} alt="" />
                        <h3>Selo ConnectMotors</h3>
                        <p>Todos os veículos com nosso selo passam por uma vistoria rigorosa, assegurando procedência, qualidade e transparência na compra. Compre com segurança!</p>
                    </Card>

                    <Card>
                        <img src={vendaIcon} alt="" />
                        <h3>Venda Ágil</h3>
                        <p>Na ConnectMotors, conectamos você aos compradores certos para uma venda ágil e segura. Anuncie agora e negocie sem complicação!</p>
                    </Card>

                </NossosServicos>

            </Container>
        </ServicosBG>
    )
}