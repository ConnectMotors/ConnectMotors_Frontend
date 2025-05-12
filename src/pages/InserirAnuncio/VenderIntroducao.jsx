import check from "./assets/check.svg"
import divisor from "./assets/divisor.svg"
import disponibilidade from "./assets/disponibilidade.svg"
import seguranca from "./assets/seguranca.svg"
import confiabilidade from "./assets/confiabilidade.svg"
import { IntroducaoBG,
         Container,
         List,
         Button,
         Vantagens,
         Divisor
 } from "./VenderIntroducao.styles"
import { Link } from "react-router-dom"

export default function VenderIntroducao(){
    return(
        <IntroducaoBG>
            <Container>
             <h1>ConnectMotors</h1>
             <ul>
                <List>
                    <img src={check} alt="" />
                    <p>Anuncie de forma gratuita</p>
                </List>
                <List>
                    <img src={check} alt="" />
                    <p>Ambiente 100% seguro</p>
                </List>
                <List>
                    <img src={check} alt="" />
                    <p>Contato direto com o comprador, sem intermediários</p>
                </List>
             </ul>

            <Link to="/anuncio/dados-veiculo">
                <Button>Criar anúncio</Button>
            </Link>
             
             <Divisor src={divisor} alt="" />

             <h2>Veja porque anunciar na ConnectMotors</h2>

             <Vantagens>
                <div>
                    <div>
                    <img src={confiabilidade} alt="" />
                    </div>     
                    <h3>Confiabilidade</h3>
                    <p>Nossos anúncios são revisados por uma equipe altamente especializada.</p>
                </div>
                <div>
                    <div>
                    <img src={seguranca} alt="" />
                    </div>
                    <h3>Segurança</h3>
                    <p>Nossa plataforma foca na segurança, garantindo negociações confiáveis para compradores e vendedores. </p>
                </div>
                <div>
                    <div>
                    <img src={disponibilidade} alt="" />
                    </div>
                    <h3>Disponibilidade</h3>
                    <p>Por estar na Internet, seu anúncio é visto 24 horas por dia, 7 dias por semana.</p>
                </div>
             </Vantagens>
             </Container>
        </IntroducaoBG>
    )
}