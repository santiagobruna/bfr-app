import "./Noticias.css";

const Noticias = ({ imageSrc, href, description, date }) => {
  return (
    <>
      <style>
        {`
          .data-text-color {
            color: var(--cor-datas); /* Use a variável CSS para definir a cor do texto das datas */
            font-weight: bold;
          }
        `}
      </style>
      <div className="col-lg-4 col-md-6 mb-4">
        {" "}
        {/* Defina o tamanho da coluna usando as classes col-lg-4 (para telas grandes) e col-md-6 (para telas médias) */}
        <div className="card">
          <img
            src={imageSrc}
            className="card-img-top"
            alt="Imagem da Notícia"
          />
          <div className="card-body">
            <p className="card-text">
              <a href={href} target="__blank">
                {description}
              </a>
            </p>
            <p className={`card-text data-text-color`}>
              <small className="text-muted">{date}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticias;
