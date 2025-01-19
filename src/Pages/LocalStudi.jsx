import Header from "../header";
import Footer from "../Footer";
import Local from "/public/Icons/Localização.png";

import Study1 from "/public/Icons/Study1.png";
import Study2 from "/public/Icons/Study2.png";
import Study3 from "/public/Icons/Study3.png";
import Study4 from "/public/Icons/Study4.png";
import Study5 from "/public/Icons/Study5.png";

import Study6 from "/public/Icons/Study6.png";
import Study7 from "/public/Icons/Study7.png";
import Study8 from "/public/Icons/Study8.png";
import Study9 from "/public/Icons/Study9.png";
import Study10 from "/public/Icons/Study10.png";

import video1Study from "/public/Videos/video1Study.mp4";
import video2Study from "/public/Videos/video2Study.mp4";

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
            Chegue preparado:
            
            Chegue no horário combinado e, se possível, bem descansado e
            alimentado.
            
            Evite consumir álcool ou drogas antes da sessão.
          </p>
         
          
          <p>
            Higiene pessoal:
            
            Vá ao estúdio com a área da tatuagem limpa e sem produtos químicos
            ou cremes.
          </p>
         
          <p>
            Respeite o artista Seja claro sobresuas ideias, mas esteja aberto a
            sugestões do tatuador. <br /> Evite levar muitas pessoas ao estúdio
            ou criar distrações durante o trabalho.
          </p>

          <p>
            Cuidados pós-tatuagem Siga rigorosamente as orientações do artista
            sobre os cuidados após a tatuagem. <br /> Comunique qualquer
            problema ou dúvida com o tatuador.
          </p>
          
          <p>
            Seja honesto Informe sobre alergias, doenças ou condições de saúde
            relevantes. <br />
            Respeite os valores cobrados e pague pontualmente.
          </p>

          <h2>Como é o nosso espaço</h2>
          <h3>Sala de procedimento</h3>
          <div className="study">
            <img src={Study1} alt="" />
            <img src={Study2} alt="" />
            <img src={Study3} alt="" />
            <img src={Study4} alt="" />
            <img src={Study5} alt="" />

            <video id="video" controls autoPlay muted loop>
              <source src={video1Study} type="video/mp4" />
            </video>
          </div>

          <h3>sala de espera</h3>
          <p>
            Sala de espera com Wi-Fi e telão com mais de 150 polegadas (aprox. 4
            m), para o acompanhante ficar confortavelmente.
          </p>
          <div className="study">
            <img src={Study6} alt="" />
            <img src={Study7} alt="" />
            <img src={Study8} alt="" />
            <img src={Study9} alt="" />
            <img src={Study10} alt="" />

            <video id="video" controls autoPlay muted loop>
              <source src={video2Study} type="video/mp4" />
            </video>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};
export default LocalStudi;
