import "./Historia.css";

const Historia = ({ title, imageSrc, imageAlt, paragraph, link }) => {
  return (
    <>
      <section id="historia" className="container-historia">
        <h2>{title}</h2>
        <img src={imageSrc} alt={imageAlt} />

        <p>
          {paragraph}{" "}
          <a href={link} target="__blank">
            Ler mais
          </a>
        </p>
      </section>
    </>
  );
};

export default Historia;
