import LogoI from "/src/assets/imagens/icons/logoInstag.png";
import LogoF from "/src/assets/imagens/icons/logoFace.png";
import LogoW from "/src/assets/imagens/icons/logoWhats.png";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="disponiveis.html">Disponiveis</a>
        <a href="./Pages/Curiosidades">Curiosidades</a>
      </nav>
      <div className="logos">
        <a href="https://www.instagram.com/goro_tattooo/" target="_blank">
          <img src={LogoI} alt="Instagram" title="Instagram" />
        </a>

        <a
          href="https://www.facebook.com/ericlei.lima.9/photos"
          target="_blank"
        >
          <img src={LogoF} alt="" title="Facebook" />
        </a>
        <a href="https://wa.me/5541996607553" target="_blank">
          <img src={LogoW} alt="" title="WhatsApp" />
        </a>
      </div>
    </header>
  );
};
export default Header;
