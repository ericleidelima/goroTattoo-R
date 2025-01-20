import logoGoro from "/public/Imagens/LogoGoro_1.jpg";
import audioFile from "/public//Videos/off6.mp3"

const ImageWithSound = () => {
  // Função que toca o som
  const playSound = () => {
    const audio = new Audio(audioFile); // O caminho do arquivo de áudio
    audio.play(); // Toca o áudio
  };

  return (
    <div>
      <img
        className="arac"
        src={logoGoro}
        alt="Imagem clicável"
        onClick={playSound} // Quando clicada, chama a função playSound
      />
    </div>
  );
};

export default ImageWithSound;
