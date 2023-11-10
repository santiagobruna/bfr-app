import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="texto-sobre-imagem">
        <p>
          Milhões de estrelas no céu, e eu aqui embaixo encantado pela Estrela
          Solitária!
        </p>
        <span>- Torcedor BFR</span>
      </div>
      <img
        className="logo"
        src="./assets/logo-botafogo.png"
        alt="Logo do Botafogo de Futebol e Regatas"
      ></img>
      <div className="menu">
        <ul id="lista" className="lista">
          <li>
            <a href="#historia">História</a>
          </li>
          <li>
            <a href="#resultados">Resultados</a>
          </li>
          <li>
            <a href="#noticias">Notícias</a>
          </li>
        </ul>
      </div>
      <div className="teste"></div>
    </header>
  );
};

export default Header;
