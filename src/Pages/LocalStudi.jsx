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
                Chegue preparado:
                <br />
                Chegue no horário combinado e, se possível, bem descansado e
                alimentado.
                <br />
                Evite consumir álcool ou drogas antes da sessão.
              </li>
              <br />
              <br />
              <li>
                Higiene pessoal:
                <br />
                Vá ao estúdio com a área da tatuagem limpa e sem produtos
                químicos ou cremes.
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
          <h3>Sala de procedimento</h3>
          <div className="study">
            <img src="/public/icons/Study1.png" alt="" />
            <img src="/public/icons/Study2.jpg" alt="" />
            <img src="/public/icons/Study3.jpg" alt="" />

            <video width="600px" controls>
              <source src="/public/Videos/Study1.mp4" type="video/mp4" />
            </video>
          </div>

          <h3>sala de espera</h3>
          <div className="study">
            <img src="/public/icons/Study4.jpg" alt="" />
            <img src="/public/icons/Study5.jpg" alt="" />
            <img src="/public/icons/Study6.jpg" alt="" />
            <img src="/public/icons/Study7.jpg" alt="" />
            <img src="/public/icons/Study8.jpg" alt="" />

            <video width="600px" controls>
              <source src="/public/Videos/Study1.mp4" type="video/mp4" />
            </video>
          </div>
          <p>
            Sala de spera com wifi e telão com mais de 150 polegadas, para o
            acampanhante ficar confortavelmente.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};
export default LocalStudi;
