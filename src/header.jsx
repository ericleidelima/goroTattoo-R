//import LogoI from "/public/icons/logoInstag.png";
//import LogoF from "/public/icons/logoFace.png";
//import LogoW from "/public/icons/logoWhats.png";

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
          <img src="/public/Icons/LogoInstag.png" alt="Instagram" title="Instagram" />
        </a>

        <a href="https://www.facebook.com/ericlei.lima.9/photos"
          target="_blank">
          <img src="/public/Icons/LogoFace.png" alt="iconeFace" title="Facebook" />
        </a>
        <a href="https://wa.me/5541996607553" target="_blank">
          <img src="" alt="" title="WhatsApp" />
        </a>
      </div>
    </header>
  );
};
export default Header;
