import Footer from "../Footer";
import Header from "../header";

import imgJason from "/public/Imagens/Jason.jpg";

const Modelo = () => {
  return (
    <>
      <Header />
      <h1>
        MODELO <br /> DISPONIVEL
      </h1>

      <main className="model">
        <article>
          <img src={imgJason} alt="Projeto Jason" />
          
            <p>
              &nbsp; &nbsp;O projeto será realizado em REALISMO BLACK AND GRAY
              Uma verdadeira obra de arte, esse projeto pode na realização da
              tatuagem, haver modificações necessárias para adaptação de cada
              anatomia corporal.
            </p>

            <p>
              &nbsp; &nbsp;E lembre-se o seu corpo é perfeito como é e farei o
              meu melhor para destacá-lo como tal.
            </p>

            <p>
              &nbsp; &nbsp;O valor de de cada projeto é relativo ao grau
              artistico do mesmo, o valor total e outras informações estão na
              descrição, clique em SAIBA MAIS e leia atenciosamente.
            </p>
          
        </article>

        <p>
          {" "}
          <a href="/Pages/MaisInfo">
            <p>SAIBA MAIS</p>
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
};
export default Modelo;
