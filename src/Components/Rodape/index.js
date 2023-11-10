import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <img src="./assets/botafogo.png" alt="Imagem do escudo do Botafogo" />
      <p>
        Desenvolvido por{" "}
        <a href="https://santiagobruna.github.io/portfolio/" target="__blank">
          Bruna Carla
        </a>
      </p>
      <div>
        <h5>Redes Socias</h5>
        <ul>
          <li>
            <a
              target="__blank"
              href="https://www.instagram.com/botafogo/?utm_source=ig_embed&ig_mid=8A4D038B-A0D4-4B25-9B9F-3537014FC3C4"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="__blank"
              href="https://www.tiktok.com/@botafogo?is_from_webapp=1&sender_device=pc"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              target="__blank"
              href="https://twitter.com/Botafogo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Rodape;
