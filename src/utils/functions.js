//Arquivo contendo as funçoes

const ImageWithSound = () => {
  // Função que toca o som
  const playSound = () => {
    const audio = new Audio('/click-sound.mp3');  // O caminho do arquivo de áudio
    audio.play();  // Toca o áudio
  };

  return (
    <div>
      <img 
        src="caminho-da-imagem.jpg" 
        alt="Imagem clicável" 
        onClick={playSound}  // Quando clicada, chama a função playSound
        style={{ width: '300px', cursor: 'pointer' }}  // Exemplo de estilo
      />
    </div>
  );
};

export default ImageWithSound;