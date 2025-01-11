import Header from "../header"
import Footer from "../Footer";

import img1 from "/public/Imagens/1.png";
import img2 from "/public/Imagens/2.png";
import img3 from "/public/Imagens/3.png";
import img4 from "/public/Imagens/4.png";
import img5 from "/public/Imagens/5.png";
import img6 from "/public/Imagens/6.png";
import img7 from "/public/Imagens/7.png";
import img8 from "/public/Imagens/8.png";
import img9 from "/public/Imagens/9.png";
import img10 from "/public/Imagens/10.png";
import img11 from "/public/Imagens/11.png";
import img12 from "/public/Imagens/12.png";

import { useState } from "react";



const App = () => {
  // Dados das divs com imagens e conteúdos
  const divs = [
    {
      id: 1,
      text : "Nome: Face and Spider",
      image: img1,
      content: (
        <>
          <p>Nome: Face and Spider</p>
          <img
            src={img1} 
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray.</p>
          <p>Altura Max: 13CM.</p>
          <p>Valor: 200 R$</p>
        </>
      ),
    },
    {
      id: 2,
      image: img2,
      content: (
        <>
          <p>Nome: Watercolor cat</p>
          <img
            src={img2}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 400 R$</p>
        </>
      ),
    },
    {
      id: 3,
      image: img3,
      content: (
        <>
          <p>Nome: Face with knife</p>
          <img
            src={img3}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 300 R$</p>
        </>
      ),
    },
    {
      id: 4,
      image: img4,
      content: (
        <>
          <p>Nome: Bird with leaves</p>
          <img
            src={img4}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 350 R$</p>
        </>
      ),
    },
    {
      id: 5,
      image: img5,
      content: (
        <>
          <p>Nome: Gorila and leaves</p>
          <img
            src={img5}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 25 CM</p>
          <p>Valor: 450 R$</p>
        </>
      ),
    },
    {
      id: 6,
      image: img6,
      content: (
        <>
          <p>Nome: Fair angel</p>
          <img
            src={img6}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 15CM</p>
          <p>Valor: 300 R$</p>
        </>
      ),
    },
    {
      id: 7,
      image: img7,
      content: (
        <>
          <p>Nome: Lion art</p>
          <img
            src={img7}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 270 R$</p>
        </>
      ),
    },
    {
      id: 8,
      image: img8,
      content: (
        <>
          <p>Nome: Flower art</p>
          <img
            src={img8}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 200 R$</p>
        </>
      ),
    },
    {
      id: 9,
      image: img9,
      content: (
        <>
          <p>Nome: Spartan warrior</p>
          <img
            src={img9}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 19CM</p>
          <p>Valor: 400 R$</p>
        </>
      ),
    },
    {
      id: 10,
      image: img10,
      content: (
        <>
          <p>Nome: Battle Helmet</p>
          <img
            src={img10}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 450 R$</p>
        </>
      ),
    },
    {
      id: 11,
      image: img11,
      content: (
        <>
          <p>Nome: Skull in pointillism</p>
          <img
            src={img11}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Pontilhismo</p>
          <p>Altura Max: 13CM</p>
          <p>Valor: 250 R$</p>
        </>
      ),
    },
    {
      id: 12,
      image: img12,
      content: (
        <>
          <p>Nome: Hannya and face</p>
          <img
            src={img12}
            alt=""
            title="Click para abrir na vitrine"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 20CM</p>
          <p>Valor: 700 R$</p>
        </>
      ),
    },
  ];

  // Estado para o conteúdo selecionado
  const [selectedContent, setSelectedContent] = useState(null);

  // Manipulador de clique na imagem
  const handleImageClick = (content) => {
    setSelectedContent(content);
  };
  //-----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------
  return (
    <>
      <Header />
      <h1>Encontre sua proxima tatuagem</h1>

      {/* Lista de imagens */}
      <div id="container-principal">
        <div id="container2" className="divToMirror">
          {divs.map((div) => (
            <img
              key={div.id}
              src={div.image}
              alt={`Imagem ${div.id}`}
              onClick={() => handleImageClick(div.content)}
            />
           
          ))}
        </div>
        {/* Div de exibição do conteúdo */}
        <div id="container3">
          <div id="containerX">
            { selectedContent ? (
              <p>{selectedContent}</p>
            ) : (
              <p>Clique em uma das imagem para ver sua descrição</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;