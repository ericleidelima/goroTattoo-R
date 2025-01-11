import LogoI from "/public/Icons/LogoInstag.jpg";
import LogoF from "/public/Icons/LogoFace.jpg";
import LogoW from "/public/icons/Lw.png"


const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/Pages/Disponiveis">Disponiveis</a>
        <a href="/Pages/Curiosidades">Curiosidades</a>
      </nav>
      <div className="logos">
        <a href="https://www.instagram.com/goro_tattooo/" target="_blank">
          {<img src={LogoI} alt="instagram" title="" />}
        </a>

        <a href="https://www.facebook.com/ericlei.lima.9/photos"
          target="_blank">
          {<img src={LogoF} title="Facebook" />}
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5541996607553&text&type=phone_number&app_absent=0"
          target="_blank">
          {<img src={LogoW} title="whatsapp" />}
        </a>
        
      </div>
    </header>
  );
};
export default Header;
