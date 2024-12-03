const Header = () => {
    return(
        <header>  
         <nav>
             <a href="index.html">Home</a>
              <a href="disponiveis.html">Disponiveis</a>
            <a href="curiosidades.html">Curiosidades</a>
         </nav>
         <div className="logos">
                <a href="https://www.instagram.com/goro_tattooo/" target="_blank">
                   <img src="src/assets/imagens/icons/Logo.i.png" alt=""  title="Instagram" />
                </a>

                <a href="https://www.facebook.com/ericlei.lima.9/photos" target="_blank">
                    <img src="assets/imagens/icons/logoFacebook.png" alt="" title="Facebook" />
                </a>
                <a href="https://wa.me/5541996607553" target="_blank">
                    <img src="assets/imagens/icons/logoWhatsapp.png" alt="" title="WhatsApp" />
                </a>
          </div> 
        </header>
   
    );
};
export default Header;
