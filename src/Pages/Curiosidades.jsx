import Header from "../header";
import Footer from "../Footer";

import imgThomas from "/public/imagens/Thomas edisom.jpg"

const Curiosidades = () => {
  return (
    <>
        <Header />
      <main>
        <article>
          <h1>Curiosidades</h1>
          <hr />
          <h2>A história da máquina de tatuagem</h2>
          <img src={imgThomas}/>

          <p>
            Mais e mais pessoas estão fazendo tatuagens hoje, e elas não
            carregam o mesmo estigma social que costumavam ter. Mas nem sempre
            usamos as máquinas de tatuagem que você vê em seu salão padrão.
          </p>
          <hr />
          <h2>História e Patentes</h2>

          <p>
            A máquina de tatuagem elétrica foi patenteada oficialmente em 8 de
            dezembro de 1891 por um tatuador de Nova York chamado Samuel
            O&apos;Reilly. Mas mesmo O&apos;Reilly seria o primeiro a admitir
            que sua invenção era na verdade uma adaptação de uma máquina
            inventada por Thomas Edison — a caneta de impressão autográfica.
            O&apos;Reilly testemunhou uma demonstração da caneta elétrica, uma
            espécie de broca de escrita que Edison havia construído para
            permitir que documentos fossem gravados em estênceis e depois
            copiados. A caneta elétrica foi um fracasso. A máquina de tatuagem
            foi um sucesso mundial não qualificado.
          </p>
          <hr />
          <h2>Como funciona</h2>

          <p>
            A máquina de tatuagem de O&apos;Reilly funcionava usando uma agulha
            oca cheia de tinta permanente. Um motor elétrico acionou a agulha
            dentro e fora da pele a uma taxa de até 50 punções por segundo. A
            agulha de tatuagem inseria uma pequena gota de tinta abaixo da
            superfície da pele a cada vez. A patente original da máquina
            permitia que agulhas de tamanhos diferentes fornecessem quantidades
            variadas de tinta, uma consideração muito focada no design.
          </p>
          <p>
            Antes da inovação de O&apos;Reilly, as tatuagens - a palavra vem da
            palavra taitiana &quot;tatu&quot;, que significa &quot;marcar
            algo&quot; - eram muito mais difíceis de fazer. Os tatuadores
            trabalhavam à mão, perfurando a pele talvez três vezes por segundo
            enquanto instalavam seus desenhos. A máquina de O&apos;Reilly com
            suas 50 perfurações por segundo foi uma enorme melhoria na
            eficiência
          </p>

          <video id="video" controls autoPlay muted loop>
            <source
              src="/public/videos/Tattoo Ink Needle in Super Slow.mp4.mp4"
              type="video/mp4"
            />
            <p>Desculpe, seu navegador não supota os fosmatos de video.</p>
            <a
              href="/src/assets/Tattoo Ink Needle in Super Slow.mp4"
              download="midia/Tattoo Ink Needle in Super Slow.mp4"
            >
              Baixe o video
            </a>
          </video>

          <p>
            Outras melhorias e refinamentos na máquina de tatuagem foram feitos
            e o moderno dispositivo de tatuagem agora é capaz de fornecer 3.000
            perfurações por minuto.
          </p>
        </article>
      </main>
       <Footer />
    </>
  );
};
export default Curiosidades;
