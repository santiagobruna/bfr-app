import "./Reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Placar from "./Components/Placar";
import Noticias from "./Components/Noticias";
import Rodape from "./Components/Rodape";
import Historia from "./Components/Historia";

function App() {
  return (
    <>
      <Header />
      <Placar />
      <Historia
        title={"CLUB DE REGATAS BOTAFOGO"}
        imageSrc={"./assets/club-regatas-bfr.jpg"}
        imageAlt={"Imagem do Club de Regatas Botafogo"}
        paragraph="No dia 1º de julho de 1894, nascia na praia de Botafogo o CLUB DE REGATAS BOTAFOGO. O clube ganhou esse nome em homenagem à enseada do bairro onde competiam os seus barcos. A sede era em um casarão, demolido, no sul da praia de Botafogo, encostado ao Morro do Pasmado, onde hoje termina a Avenida Pasteur. Em 1899, surgiu uma lenda nas águas da Baía de Guanabara, a embarcação botafoguense Diva, que venceu todas as 22 regatas que disputou, sagrando-se campeã carioca. Em razão desse título, o Botafogo é o único clube do Brasil campeão de três séculos.

        O Club de Regatas Botafogo foi o primeiro clube carioca campeão brasileiro de alguma modalidade esportiva: de remo, em campeonato realizado no Rio de Janeiro em outubro de 1902, com a vitória do atleta Antônio Mendes de Oliveira Castro, que anos mais tarde viria a se tornar presidente do clube.
        
        Os fundadores do Club de Regatas Botafogo: Alberto Lisboa da Cunha, Arnaldo Pereira Braga, Arthur Galvão, Augusto Martins, Carlos de Souza Freire, Eduardo Fonseca, Frederico Lorena, Henrique Jacutinga, João Penaforte, João Teixeira, José Maria Dias Braga, Julio Kreisler, Julio Ribas Junior, Luís Fonseca Quintanilha Jordão, Oscar Lisboa da Cunha e Paulo Ernesto de Azevedo.
        "
      />
      <Historia
        title={"BOTAFOGO FOOTBALL CLUB"}
        imageSrc={"./assets/botafogo-football.jpg"}
        imageAlt={"Imagem do Time de Botafogo de Futebol e Regatas"}
        paragraph="No ano de 1904, surgia no bairro de Botafogo um novo clube de futebol, o Electro Club, primeiro nome dado ao Botafogo Football Club. A associação nasceu de uma conversa entre dois amigos durante uma aula. Flávio Ramos e Emmanuel Sodré estudavam no colégio Alfredo Gomes e, durante uma aula de álgebra, nascia a primeira ideia de fundar um clube, através de um bilhete passado por Flávio a Emmanuel, que dizia: O Ithamar tem um clube de football na Rua Martins Ferreira. Vamos fundar outro no Largo dos Leões? Podemos falar aos Werneck, ao Arthur César, ao Vicente e ao Jacques. E assim tudo começou.
        
        "
        link={"https://www.botafogo.com.br/historia.php"}
      />
      <Historia
        title={"BOTAFOGO DE FUTEBOL E REGATAS"}
        imageSrc={"./assets/clube-botafogo.jpg"}
        imageAlt={"Imagem do Time de Botafogo de Futebol e Regatas"}
        paragraph="O Botafogo de Futebol e Regatas nasceu oficialmente no dia 8 de dezembro de 1942, como resultado da fusão de dois clubes com o mesmo nome: o Club de Regatas Botafogo e o Botafogo Football Club. Os dois clubes tinham suas sedes no bairro de Botafogo, na Zona Sul do Rio de Janeiro, e se uniram depois de um triste fato.
        No dia 11 de junho de 1942, os dois clubes disputavam uma partida de basquete pelo Campeonato Carioca e o jogador Albano, do Botafogo F.C., durante o intervalo, caiu em quadra, vítima de um ataque fulminante. A partida foi interrompida a dez minutos do final, quando o placar marcava CRB 21x 23 BFC. O corpo de Albano saiu da sede de General Severiano e, quando passava em frente ao Mourisco Mar, o então presidente do C.R.Botafogo, Augusto Frederico Schimidt, disse: Comunico nesta hora a Albano que a sua última partida resultou numa nítida vitória. O tempo que resta do jogo interrompido os nossos jogadores não isputarão mais. O então presidente do Botafogo Football Club, Eduardo Góis Trindade, respondeu: Nas disputas entre os nossos clubes só pode haver um vencedor, o Botafogo! Schimidt então selou a fusão: O que mais é preciso para que os nossos dois clubes sejam um só?.
        "
        link={"https://www.botafogo.com.br/historia.php"}
      />
      <div id="noticias" className="container">
        <div className="container-noticias-title">
          <img src="./assets/frame.png" alt="Um frame de citação" />
          <h2>Últimas Notícias</h2>
        </div>
        <div className="row">
          {" "}
          {/* Crie uma linha para os componentes Noticias */}
          <Noticias
            imageSrc="./assets/noticia1.png"
            href={
              "https://www.fogaonet.com/noticias-do-botafogo/torcida-do-botafogo-esgota-ingressos-jogo-palmeiras-brasileirao/"
            }
            description="Torcida do Botafogo esgota ingressos para jogo com Palmeiras pelo Brasileirão"
            date="31/10/23 às 12:33"
          />
          <Noticias
            imageSrc="./assets/noticia2.png"
            href="https://www.fogaonet.com/noticias-do-botafogo/cbf-confirma-vasco-x-botafogo-em-sao-januario-na-proxima-segunda-feira-as-19h/"
            description="CBF confirma Vasco x Botafogo em São Januário na próxima segunda-feira, às 19h"
            date="30/10/23 às 20:46"
          />
          <Noticias
            imageSrc="./assets/noticia3.png"
            href={
              "https://www.fogaonet.com/noticias-do-botafogo/caxias-do-sul-botafogo-nbb-2023-2024/"
            }
            description="Basquete: Botafogo cai no segundo tempo, perde em Caxias do Sul e segue sem vencer no NBB"
            date="30/10/23 às 22:00"
          />
        </div>
      </div>
      <Rodape />
    </>
  );
}

export default App;
