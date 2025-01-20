import logoGoro from "/public/Imagens/LogoGoro_1.jpg";

const ImageWithSound = () => {
  // Função que toca o som
  const playSound = () => {
    const audio = new Audio('/public//Videos/off6.mp3'); // O caminho do arquivo de áudio
    audio.play(); // Toca o áudio
  };

  return (
    <div>
      <img
        className="arac"
        src={logoGoro}
        alt="Imagem clicável"
        onClick={playSound} // Quando clicada, chama a função playSound
        style={{ width: "300px", cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageWithSound;
