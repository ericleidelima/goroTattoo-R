import Header from "../header";
import Footer from "../Footer";

import img1 from "/public/Imagens/20.png";
import img2 from "/public/Imagens/21.png";
import img3 from "/public/Imagens/22.png";
import img4 from "/public/Imagens/23.jpg";
import img5 from "/public/Imagens/24.png";
import img6 from "/public/Imagens/25.jpg";
import img7 from "/public/Imagens/26.png";
import img8 from "/public/Imagens/27.jpg";
import img9 from "/public/Imagens/28.jpg";
import img10 from "/public/Imagens/29.jpg";
import img11 from "/public/Imagens/30.png";
import img12 from "/public/Imagens/31.png";
import img13 from "/public/Imagens/32.png";
import img14 from "/public/Imagens/33.png";
import img15 from "/public/Imagens/34.png";


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
          <a href={img2} className="gallery-items">
            <img src={img2} alt="" />
          </a>
          <a href={img3} className="gallery-items">
            <img src={img3} alt="" />
          </a>
          <a href={img4} className="gallery-items">
            <img src={img4} alt="" />
          </a>
          <a href={img5} className="gallery-items">
            <img src={img5} alt="" />
          </a>
          <a href={img6} className="gallery-items">
            <img src={img6} alt="" />
          </a>
          <a href={img7} className="gallery-items">
            <img src={img7} alt="" />
          </a>
          <a href={img8} className="gallery-items">
            <img src={img8} alt="" />
          </a>
          <a href={img9} className="gallery-items">
            <img src={img9} alt="" />
          </a>
          <a href={img10} className="gallery-items">
            <img src={img10} alt="" />
          </a>
          <a href={img11} className="gallery-items">
            <img src={img11} alt="" />
          </a>
          <a href={img12} className="gallery-items">
            <img src={img12} alt="" />
          </a>
          <a href={img13} className="gallery-items">
            <img src={img13} alt="" />
          </a>
          <a href={img14} className="gallery-items">
            <img src={img14} alt="" />
          </a>
          <a href={img15} className="gallery-items">
            <img src={img15} alt="" />
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
