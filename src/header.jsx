import LogoI from "/public/Icons/LogoInstag.jpg";
import LogoF from "/public/Icons/logoFace.ico";
//import LogoW from "/public/icons/logoWhats.png";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="disponiveis.html">Disponiveis</a>
        <a href="/src/Pages/Curiosidades.html">Curiosidades</a>
      </nav>
      <div className="logos">
        <a href="https://www.instagram.com/goro_tattooo/" target="_blank">
          <img src={LogoI} alt="" title="" />
        </a>

        <a href="https://www.facebook.com/ericlei.lima.9/photos"
          target="_blank">
          <img src={LogoF} alt="iconeFace" title="Facebook" />
        </a>
        <a href="https://wa.me/5541996607553" target="_blank">
          <img src="" alt="" title="WhatsApp" />
        </a>
      </div>
    </header>
  );
};
export default Header;
