import "./Placar.css";

const Placar = () => {
  return (
    <section id="resultados" className="container-placar">
      <h2 className="container-placar-title">Último Jogo</h2>
      <div className="container-placar-divisao">
        <div className="divisao-time">
          <span className="time">Botafogo</span>
          <img
            src="./assets/botafogo.png"
            alt="Imagem do escudo do Botafogo"
          ></img>
        </div>
        <span className="resultado">0 - 1 </span>
        <div className="divisao-time">
          <span className="time">Cuiabá</span>
          <img src="./assets/cuiaba.png" alt="Imagem do escudo do Cuiabá"></img>
        </div>
      </div>
      <a href="https://g.co/kgs/3MTskv" target="__blank">
        Próximos Jogos
      </a>
    </section>
  );
};

export default Placar;
