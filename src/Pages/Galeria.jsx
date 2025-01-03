import Header from "../header";
import Footer from "../Footer";

import img1 from "/public/Imagens/20.png"

const Galeria = () => {
  return (
    <>
      <Header />
      <h1>Galeria</h1>
      <main>
        <div className="gallery-container">
          <a href={img1} className="gallery-items">
            <img src={img1} alt="" />
          </a>

          <a href="/public/Imagens/21.png" className="gallery-items">
            <img src="/public/Imagens/21.png" alt="" />
          </a>

          <a href="/public/Imagens/22.png" className="gallery-items">
            <img src="/public/Imagens/22.png" alt="" />
          </a>

          <a href="/public/Imagens/20.png/23.png" className="gallery-items">
            <img src="/public/Imagens/20.png/23.png" alt="" />
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

          <a href="assets/imagens/img/32.psng" className="gallery-items">
            <img src="assets/imagens/img/32.png" alt="" />
          </a>
        </div>
        <p>
          Todos os projetos apresentados nessa galeria foram realizados pelo
          profissional, &quot;ERICLEI DE LIMA&quot;.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Galeria;
