import Header from "../header";
import Footer from "../Footer";

import imgCont from "/public/Icons/ss.png"


const Construcao = () => {
  return (
    <>
    <Header/>
    <main >
        <article>
            <h1>No momento não temos projetos disponiveis</h1>
              <img src={imgCont} alt="Pagina em construção" />
              <h2>Tente mais tarde</h2>
              <Footer/>
        </article>
    </main>
    </>
  );
};

export default Construcao;
