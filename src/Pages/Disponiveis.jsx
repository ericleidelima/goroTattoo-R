
import img1 from "/public/Imagens/1.png";
import img2 from "/public/Imagens/2.png";
import img3 from "/public/Imagens/3.png";
import img4 from "/public/Imagens/4.png";
import img5 from "/public/Imagens/5.png";
import img6 from "/public/Imagens/6.png";
import img7 from "/public/Imagens/7.png";
import img8 from "/public/Imagens/8.png";
import img9 from "/public/Imagens/9.png";
import img10 from "/public/Imagens/10.png";
import img11 from "/public/Imagens/11.png";
import img12 from "/public/Imagens/12.png";

const Disponiveis = () => {
    return (
        <>
        <h1>Encontre sua proxima tatuagem</h1>
    <div id="container-principal">
      <div className="box" id="container2">
        <div onClick="espelharDiv('div1')" id="div1" className="divToMirror">
          <p>Nome: Face and Spider</p>
          <img
            src={img1}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray.</p>
          <p>Altura Max: 13CM.</p>
          <p>Valor: 200 R$</p>
        </div>

        <div onClick="espelharDiv('div2')" id="div2" className="divToMirror">
          <p>Nome: Watercolor cat</p>
          <img
            src={img2}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 400 R$</p>
        </div>

        <div onClick="espelharDiv('div3')" id="div3" className="divToMirror">
          <p>Nome: Face with knife</p>
          <img
            src={img3}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 300 R$</p>
        </div>

        <div onClick="espelharDiv('div4')" id="div4" className="divToMirror">
          <p>Nome: Bird with leaves</p>
          <img
            src={img4}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 350 R$</p>
        </div>

        <div onClick="espelharDiv('div5')" id="div5" className="divToMirror">
          <p>Nome: Gorila and leaves</p>
          <img
            src={img5}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 25 CM</p>
          <p>Valor: 450 R$</p>
        </div>

        <div onClick="espelharDiv('div6')" id="div6" className="divToMirror">
          <p>Nome: Fair angel</p>
          <img
            src={img6}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 15CM</p>
          <p>Valor: 300 R$</p>
        </div>

        <div onClick="espelharDiv('div7')" id="div7" className="divToMirror">
          <p>Nome: Lion art</p>
          <img
            src={img7}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 270 R$</p>
        </div>

        <div onClick="espelharDiv('div8')" id="div8" className="divToMirror">
          <p>Nome: Flower art</p>
          <img
            src={img8}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 14CM</p>
          <p>Valor: 200 R$</p>
        </div>

        <div onClick="espelharDiv('div9')" id="div9" className="divToMirror">
          <p>Nome: Spartan warrior</p>
          <img
            src={img9}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 19CM</p>
          <p>Valor: 400 R$</p>
        </div>

        <div onClick="espelharDiv('div10')" id="div10" className="divToMirror">
          <p>Nome: Battle Helmet</p>
          <img
            src={img10}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 18CM</p>
          <p>Valor: 450 R$</p>
        </div>

        <div onClick="espelharDiv('div11')" id="div11" className="divToMirror">
          <p>Nome: Skull in pointillism</p>
          <img
            src={img11}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Pontilhismo</p>
          <p>Altura Max: 13CM</p>
          <p>Valor: 250 R$</p>
        </div>

        <div onClick="espelharDiv('div12')" id="div12" className="divToMirror">
          <p>Nome: Hannya and face</p>
          <img
            src={img12}
            alt=""
            title="Click para abrir na vitrine"
            onClick="rolarParaDiv()"
          />
          <p>Estilo: Black and Gray</p>
          <p>Altura Max: 20CM</p>
          <p>Valor: 700 R$</p>
        </div>
      </div>

      <div id="container3">
        <div id="containerX">
          <img src="assets/imagens/icons/Skull..png" alt="" />
        </div>
        <br />

        <button onClick="espelharPrimeiroFilho()">Espelhar imagem</button>
        <button onClick="mostrarDiv()">MOSTRAR MEIOS DE PAGAMENTO</button>

        <div id="divInvisivel" className="divInvisivel">
          <p>Para mais informações entre em contato pelo wats.</p>

          <a href="https://wa.me/5541996607553" target="blank"
            ><img src="assets/imagens/icons/WhatsApp.svg.webp" />
          </a>

          <p>
            Antes de confirmar uma transação via PIX, preste atenção nos dados
            do destinatário exibidos para conferir se correspondem à
            pessoa/entidade.
          </p>
          <img src="assets/imagens/icons/Pix.png" alt="" />
          <p>Ericlei de lima</p>
          <p>Pix: (041 99660 7553)</p>
        </div>
      </div>
    </div>
        </>
    );
};

export default Disponiveis;