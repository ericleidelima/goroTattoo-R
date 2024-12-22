//import LogoI from "/public/Icons/LogoInstag.ico";
//import LogoF from "/public/Icons/LogoFace.ico";
//import LogoW from "/public/Icons/LogoWhats.ico";

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
          {<img src="public/Icons/LogoInstag.ico" alt="" title="" />}
        </a>

        <a href="https://www.facebook.com/ericlei.lima.9/photos"
          target="_blank">
          {<img src="public/Icons/LogoFace.ico" title="Facebook" />}
        </a>
        <a href="https://wa.me/5541996607553" target="_blank">
          <img src="public/Icons/LogoWhats.ico" alt="" title="WhatsApp" />
        </a>
      </div>
    </header>
  );
};
export default Header;
