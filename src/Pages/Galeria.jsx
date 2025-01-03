import Header from "../header";
import Footer from "../Footer";

const Galeria = () => {
  return (
    <>
      <Header />
      <h1>Galeria</h1>
      <main>
        <div className="gallery-container">
          <a href="assets/imagens/img/20.jpg" className="gallery-items">
            <img src="assets/imagens/img/20.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/21.jpg" className="gallery-items">
            <img src="assets/imagens/img/21.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/22.jpg" className="gallery-items">
            <img src="assets/imagens/img/22.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/23.png" className="gallery-items">
            <img src="assets/imagens/img/23.png" alt="" />
          </a>

          <a href="assets/imagens/img/24.png" className="gallery-items">
            <img src="assets/imagens/img/24.png" alt="" />
          </a>

          <a href="assets/imagens/img/25.jpg" className="gallery-items">
            <img src="assets/imagens/img/25.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/26.jpg" className="gallery-items">
            <img src="assets/imagens/img/26.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/27.png" className="gallery-items">
            <img src="assets/imagens/img/27.png" alt="" />
          </a>

          <a href="assets/imagens/img/28.jpg" className="gallery-items">
            <img src="assets/imagens/img/28.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/29.jpg" className="gallery-items">
            <img src="assets/imagens/img/29.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/30.jpg" className="gallery-items">
            <img src="assets/imagens/img/30.jpg" alt="" />
          </a>

          <a href="assets/imagens/img/31.png" className="gallery-items">
            <img src="assets/imagens/img/31.png" alt="" />
          </a>

          <a href="assets/imagens/img/32.png" className="gallery-items">
            <img src="assets/imagens/img/32.png" alt="" />
          </a>
        </div>
        <p>
          Todos os projetos apresentados nessa galeria foram realizados pelo
          profissional, "ERICLEI DE LIMA". 
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Galeria;
