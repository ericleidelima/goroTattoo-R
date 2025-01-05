import Header from "../header";
import Footer from "../Footer";

import { useState } from "react";

import img1 from "/public/Imagens/1.png";
import img2 from "/public/Imagens/2.png";
import img3 from "/public/Imagens/3.png";
import img4 from "/public/Imagens/4.png";
import img5 from "/public/Imagens/5.png";
import img6 from "/public/Imagens/6.png";

const ImageGallery = () => {
  // Estado para armazenar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista de imagens
  const images = [
    {src: img1,alt: "Imagem 1",text:"Estilo: Black and Gray"},
    {src: img2,alt: "Imagem 2",},
    {src: img3,alt: "Imagem 3",},
    {src: img4,alt: "Imagem 4",},
    {src: img5,alt: "Imagem 5",},
    {src: img6,alt: "Imagem 6",},
  ];

  return (
    <>
      <Header />
      <h1>Estou aqui</h1>
      <h1>Encontre sua proxima tatuagem</h1>

                              {/* Galeria de imagens */}
      <div id="container-principal">
        <div id="container2" className="box">
          {images.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <div id="div1" className="divToMirror">
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                style={{ width: "100px", cursor: "pointer" }}
                onClick={() => setSelectedImage(image)} // Atualiza a imagem selecionad
              />
            </div>
          ))};
        </div>

                             {/* Exibição da imagem selecionada */}
        <div id="containerX">
          {selectedImage ? (
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{ width: "300px" }}
            />
          ) : (
           <img src="https://i.pinimg.com/originals/6c/22/97/6c22972524a77553fd05fc3b2dfb1c7b.jpg" alt="" />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImageGallery;
