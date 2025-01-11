import Header from "../header";
import Footer from "../Footer";

import ImageWithSound from "./ImgComSom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ImageWithSound />
        {/*} <picture>
          {<img className="arac" src={logoGoro} alt="aranha viuva negra" />}
        </picture>*/}

        <aside>
          <div className="painel">
            <a href="Pages/Galeria">GALERIA</a>
            <p>Alguns dos trabalhos realizados.</p>
          </div>
          <div className="painel">
            <a href="Pages/EstilosTattoo">ESTILOS DE TATTOO</a>
            <p>Os estilos mais populares.</p>
          </div>
          <div className="painel">
            <a href="Pages/Modelo">MODELO</a>
            <p>Seja modelo para um de nossos projetos.</p>
          </div>
          <div className="painel">
            <a href="Pages/Construcao">RELÂMPAGO</a>
            <p>Oferta valida por tempo limitado.</p>
          </div>
          <div className="painel">
            <a href="Pages/Construcao">LOCALIZAÇÃO, REGRAS, ETC</a>
            <p> Desenhos pequenos.</p>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
};
export default Home;
