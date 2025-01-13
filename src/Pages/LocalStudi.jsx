import Header from "../header";
import Footer from "../Footer";
import Local from "/public/Icons/Localização.png";

const LocalStudi = () => {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>Onde estamos localizados</h1>

          <img src={Local} alt="Local do estudio" />
          <h2>Regras do estudio</h2>
          <p>
            <ol>
              <li>
                Chegue preparado Chegue no horário combinado e, se possível, bem
                descansado e alimentado. <br /> Evite consumir álcool ou drogas
                antes da sessão.
              </li>
              <br />
              <br />
              <li>
                Higiene pessoal Vá ao estúdio com a área da tatuagem limpa e sem
                produtos químicos ou cremes
              </li>
              <br />
              <br />
              <li>
                Respeite o artista Seja claro sobresuas ideias, mas esteja
                aberto a sugestões do tatuador. <br /> Evite levar muitas
                pessoas ao estúdio ou criar distrações durante o trabalho.
              </li>
              <br />
              <br />
              
              <li>
                Cuidados pós-tatuagem Siga rigorosamente as orientações do
                artista sobre os cuidados após a tatuagem. <br /> Comunique
                qualquer problema ou dúvida com o tatuador.
              </li>
              <br />
              <br />
              <li>
                Seja honesto Informe sobre alergias, doenças ou condições de
                saúde relevantes. <br />
                Respeite os valores cobrados e pague pontualmente.
              </li>
            </ol>
          </p>

         
          <h2>Como é o nosso espaço</h2>

          <p></p>
        </article>
      </main>
      <Footer />
    </>
  );
};
export default LocalStudi;
