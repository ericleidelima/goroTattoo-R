import Navegacao from "./Navegacao";
import Footer from "../Footer";

import logoGoro from "/public/logo goro 1.png";

const Home = () => {
  return (
    <>
      <Navegacao />
      <main>
        <picture>
          <img className="arac" src={logoGoro} alt="aranha viuva negra" />
        </picture>

        <aside>
          <div className="painel">
            <a href="galeria.html">GALERIA</a>
            <p>Alguns dos trabalhos realizados.</p>
          </div>
          <div className="painel">
            <a href="estilosTattoo.html">ESTILOS DE TATTOO</a>
            <p>Os estilos mais populares.</p>
          </div>
          <div className="painel">
            <a href="modelo.html">MODELO</a>
            <p>Seja modelo para um de nossos projetos.</p>
          </div>
          <div className="painel">
            <a href="relampago.html">RELÂMPAGO</a>
            <p>Oferta valida por pouco tempo.</p>
          </div>
          <div className="painel">
            <a href="construcao.html">LOCALIZAÇÃO, REGRAS, ETC</a>
            <p> Desenhos pequenos.</p>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
};
export default Home;
