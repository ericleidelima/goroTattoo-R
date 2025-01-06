import { useState } from "react";

const App = () => {
  // Dados das divs com imagens e conteúdos
  const divs = [
    {
      id: 1,
      image: "/public/Imagens/1.png",
      content: (
        <>
          <p>Nome: Face and Spider</p>
          <img
            src="/public/Imagens/1.png"
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
      image: "/public/Imagens/2.png",
      content: (
        <>
          <p>Nome: Watercolor cat</p>
          <img
            src="/public/Imagens/2.png"
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
      image: "/public/Imagens/3.png",
      content: (
        <>
          <p>Nome: Face with knife</p>
          <img
            src="/public/Imagens/3.png"
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
      image: "/public/Imagens/4.png",
      content: (
        <>
          <p>Nome: Bird with leaves</p>
          <img
            src="/public/Imagens/4.png"
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
      image: "/public/Imagens/5.png",
      content: (
        <>
          <p>Nome: Gorila and leaves</p>
          <img
            src="/public/Imagens/5.png"
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
      image: "/public/Imagens/6.png",
      content: (
        <>
          <p>Nome: Fair angel</p>
          <img
            src="/public/Imagens/6.png"
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
      image: "/public/Imagens/7.png",
      content: (
        <>
          <p>Nome: Lion art</p>
          <img
            src="/public/Imagens/7.png"
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
      image: "/public/Imagens/8.png",
      content: (
        <>
          <p>Nome: Flower art</p>
          <img
            src="/public/Imagens/8.png"
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
      image: "/public/Imagens/9.png",
      content: (
        <>
          <p>Nome: Spartan warrior</p>
          <img
            src="/public/Imagens/9.png"
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
      image: "/public/Imagens/10.png",
      content: (
        <>
          <p>Nome: Battle Helmet</p>
          <img
            src="/public/Imagens/10.png"
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
      image: "/public/Imagens/11.png",
      content: (
        <>
          <p>Nome: Skull in pointillism</p>
          <img
            src="/public/Imagens/11.png"
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
      image: "/public/Imagens/12.png",
      content: (
        <>
          <p>Nome: Hannya and face</p>
          <img
            src="/public/Imagens/12.png"
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
  return (
    <>
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
            {selectedContent ? (
              <p>{selectedContent}</p>
            ) : (
              <p>Clique em uma imagem para ver o conteúdo.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
